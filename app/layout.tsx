import type { Metadata } from "next";
import "./globals.css";
import { withBasePath } from "@/lib/site-config";

const publicUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vitor-lior-performance.imjoaobarreto.chatgpt.site";

export const metadata: Metadata = {
  title: "Vitor Lior | Treinamento Personalizado",
  description: "Treinamento personalizado com biomecânica, individualidade e acompanhamento real.",
  metadataBase: new URL(publicUrl),
  openGraph: {
    title: "Vitor Lior | Treinamento Personalizado",
    description: "Treino não é tentativa. É estratégia.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: withBasePath("/favicon.svg"),
    shortcut: withBasePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
