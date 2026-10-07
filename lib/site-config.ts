export const siteConfig = {
  name: "Vitor Lior",
  instagram: "https://www.instagram.com/vitorlior/",
  instagramHandle: "@vitorlior",
  whatsappNumber: "5521969963716",
  whatsappMessage: "Olá Vitor, vim pelo seu site e gostaria de saber mais sobre a consultoria.",
  contactEmail: "placeholder@example.com",
  cref: "", // Adicionar quando o registro profissional for informado.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
export const withBasePath = (path: string) => `${siteConfig.basePath}${path}`;
