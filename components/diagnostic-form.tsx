"use client";

import { FormEvent, useState } from "react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

type FormData = Record<string, string>;

const goals = [
  "Hipertrofia, ganho de massa muscular",
  "Emagrecimento, perder peso no geral",
  "Definição muscular, físico mais seco e bem marcado",
  "Performance",
  "Outro",
];

const experience = ["Sim, por mais de 3 meses", "Por pouco tempo", "Não"];
const timing = ["Quero começar de imediato", "Pretendo iniciar futuramente", "Preciso pensar sobre"];

function TextField({ label, name, value, onChange, type = "text", required = true, multiline = false, autoComplete }: {
  label: string; name: string; value: string; onChange: (name: string, value: string) => void; type?: string; required?: boolean; multiline?: boolean; autoComplete?: string;
}) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <label className="field">
      <span>{label}{required && <b aria-hidden="true"> *</b>}</span>
      <Tag name={name} type={multiline ? undefined : type} value={value} onChange={(event) => onChange(name, event.target.value)} required={required} rows={multiline ? 4 : undefined} autoComplete={autoComplete} />
    </label>
  );
}

function Choice({ label, name, options, value, onChange }: { label: string; name: string; options: string[]; value: string; onChange: (name: string, value: string) => void }) {
  return (
    <fieldset className="field choice-field">
      <legend>{label} <b aria-hidden="true">*</b></legend>
      <div className="radio-group" role="radiogroup" aria-label={label}>
        {options.map((option) => (
          <label className="choice" key={option}>
            <input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(name, option)} required />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function DiagnosticForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [data, setData] = useState<FormData>({});
  const total = 4;
  const update = (name: string, value: string) => setData((current) => ({ ...current, [name]: value }));
  const returnToForm = () => requestAnimationFrame(() => document.getElementById("diagnostico")?.scrollIntoView({ block: "start", behavior: "smooth" }));

  const next = () => {
    const panel = document.querySelector(`[data-step="${step}"]`);
    const invalid = panel?.querySelector<HTMLInputElement | HTMLTextAreaElement>(":invalid");
    if (invalid) { invalid.reportValidity(); return; }
    setStep((current) => Math.min(total - 1, current + 1));
    returnToForm();
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      if (process.env.NEXT_PUBLIC_GITHUB_PAGES === "true") {
        const answers = Object.entries(data)
          .filter(([name, value]) => name !== "website" && value)
          .map(([name, value]) => `${name}: ${value}`)
          .join("\n");
        const message = `Olá Vitor, vim pelo seu site e concluí o diagnóstico inicial.\n\n${answers}`;
        window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
        setStatus("success");
        setMessage("Diagnóstico concluído. As respostas foram preparadas para envio direto no WhatsApp.");
        return;
      }
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json() as { message?: string; mode?: string };
      if (!response.ok) throw new Error(result.message || "Não foi possível enviar agora.");
      setStatus("success");
      setMessage(result.mode === "preview" ? "Diagnóstico concluído. O envio por e-mail será ativado assim que o endereço definitivo for configurado." : "Diagnóstico enviado. Vitor entrará em contato com você.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Não foi possível enviar agora.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span className="form-kicker">DIAGNÓSTICO CONCLUÍDO</span>
        <h3>SEU PRÓXIMO PASSO PODE COMEÇAR AGORA.</h3>
        <p>{message}</p>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">FALAR COM VITOR NO WHATSAPP</a>
      </div>
    );
  }

  return (
    <form className="diagnostic-form" onSubmit={submit} noValidate={false}>
      <div className="form-head">
        <div><span className="form-kicker">DIAGNÓSTICO INICIAL</span><p>{step + 1} DE {total}</p></div>
        <div className="progress" role="progressbar" aria-label={`Etapa ${step + 1} de ${total}`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={((step + 1) / total) * 100}><span style={{ width: `${((step + 1) / total) * 100}%` }} /></div>
      </div>
      <input className="honeypot" name="website" value={data.website || ""} onChange={(e) => update("website", e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <section className="form-step" data-step="0" hidden={step !== 0}>
        <span className="step-number">01</span><h3>VAMOS COMEÇAR POR VOCÊ.</h3>
        <TextField label="Nome completo" name="nome" value={data.nome || ""} onChange={update} autoComplete="name" />
        <TextField label="Qual é o seu número de WhatsApp com DDD?" name="whatsapp" type="tel" value={data.whatsapp || ""} onChange={update} />
        <TextField label="Qual é o seu usuário do Instagram?" name="instagram" value={data.instagram || ""} onChange={update} required={false} />
        <TextField label="Qual sua profissão? Quais funções realiza no seu trabalho?" name="profissao" value={data.profissao || ""} onChange={update} />
      </section>

      <section className="form-step" data-step="1" hidden={step !== 1}>
        <span className="step-number">02</span><h3>QUAL RESULTADO VOCÊ BUSCA?</h3>
        <Choice label="Qual é o seu objetivo para os próximos 12 meses?" name="objetivo" options={goals} value={data.objetivo || ""} onChange={update} />
        <TextField label="Por que você está buscando ajuda para alcançar seu objetivo?" name="motivo" value={data.motivo || ""} onChange={update} multiline />
      </section>

      <section className="form-step" data-step="2" hidden={step !== 2}>
        <span className="step-number">03</span><h3>ENTENDER O MOMENTO MUDA A ESTRATÉGIA.</h3>
        <Choice label="Você já investiu em consultoria ou acompanhamento profissional antes?" name="experiencia" options={experience} value={data.experiencia || ""} onChange={update} />
        <Choice label="Quão disposto você está hoje a investir tempo e recursos para alcançar o corpo que deseja?" name="disposicao" options={Array.from({ length: 10 }, (_, index) => String(index + 1))} value={data.disposicao || ""} onChange={update} />
        <TextField label="Como você chegou ao meu perfil?" name="origem" value={data.origem || ""} onChange={update} />
      </section>

      <section className="form-step" data-step="3" hidden={step !== 3}>
        <span className="step-number">04</span><h3>ALINHAMENTO FINAL.</h3>
        <TextField label="Qual o valor máximo que você está disposto a investir hoje em acompanhamento profissional?" name="investimento" value={data.investimento || ""} onChange={update} />
        <Choice label="Se encontrasse um acompanhamento que resolvesse seus problemas, qual seria sua postura?" name="momento" options={timing} value={data.momento || ""} onChange={update} />
        <Choice label="Esse é o tipo de acompanhamento que você busca?" name="confirmacao" options={["Sim", "Não"]} value={data.confirmacao || ""} onChange={update} />
      </section>

      {message && <p className="form-error" role="alert">{message}</p>}
      <div className="form-actions">
        {step > 0 && <button className="button button-ghost" type="button" onClick={() => { setStep((current) => current - 1); returnToForm(); }}>VOLTAR</button>}
        {step < total - 1 ? <button className="button button-light" type="button" onClick={next}>CONTINUAR</button> : <button className="button button-light" type="submit" disabled={status === "loading"}>{status === "loading" ? "ENVIANDO..." : "ENVIAR DIAGNÓSTICO"}</button>}
      </div>
    </form>
  );
}
