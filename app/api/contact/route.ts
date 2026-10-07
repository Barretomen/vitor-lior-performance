import { NextResponse } from "next/server";

const attempts = new Map<string, { count: number; resetAt: number }>();
const EMAIL_PLACEHOLDER = "placeholder@example.com";

export async function POST(request: Request) {
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now();
  const current = attempts.get(ip);
  if (current && current.resetAt > now && current.count >= 4) return NextResponse.json({ message: "Muitas tentativas. Aguarde alguns minutos e tente novamente." }, { status: 429 });
  attempts.set(ip, !current || current.resetAt <= now ? { count: 1, resetAt: now + 10 * 60_000 } : { ...current, count: current.count + 1 });

  let data: Record<string, string>;
  try { data = await request.json(); } catch { return NextResponse.json({ message: "Dados inválidos." }, { status: 400 }); }
  if (data.website) return NextResponse.json({ message: "Solicitação inválida." }, { status: 400 });
  const required = ["nome", "whatsapp", "profissao", "objetivo", "motivo", "experiencia", "disposicao", "origem", "investimento", "momento", "confirmacao"];
  if (required.some((field) => !data[field]?.trim())) return NextResponse.json({ message: "Preencha todos os campos obrigatórios." }, { status: 400 });
  if (JSON.stringify(data).length > 12_000) return NextResponse.json({ message: "O conteúdo enviado é muito longo." }, { status: 413 });

  const to = process.env.CONTACT_EMAIL || EMAIL_PLACEHOLDER;
  const key = process.env.RESEND_API_KEY;
  if (to === EMAIL_PLACEHOLDER || !key) return NextResponse.json({ ok: true, mode: "preview" });

  const lines = Object.entries(data).filter(([name]) => name !== "website").map(([name, value]) => `<p><strong>${name}:</strong> ${String(value).replace(/[<>&]/g, "")}</p>`).join("");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL || "Site Vitor Lior <onboarding@resend.dev>", to: [to], subject: `Novo diagnóstico — ${data.nome}`, html: `<h1>Novo diagnóstico</h1>${lines}` }),
  });
  if (!response.ok) return NextResponse.json({ message: "Não foi possível enviar agora. Tente pelo WhatsApp." }, { status: 502 });
  return NextResponse.json({ ok: true, mode: "email" });
}

