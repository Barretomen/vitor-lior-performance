import Link from "next/link";
import { CookieConsent } from "@/components/cookie-consent";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Termos de Uso e Direitos Autorais | Vitor Lior",
  description: "Regras de uso e proteção do conteúdo do site de Vitor Lior.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand" href="/">VITOR <span>LIOR</span></Link>
        <Link href="/">VOLTAR AO SITE</Link>
      </header>
      <article>
        <p className="section-index">USO DO SITE · DIREITOS AUTORAIS</p>
        <h1>TERMOS<br />DE USO.</h1>
        <p className="legal-updated">Última atualização: 7 de outubro de 2026.</p>

        <section>
          <h2>1. ACEITAÇÃO</h2>
          <p>Ao acessar este site, você concorda em utilizá-lo de forma lícita, respeitando estes termos, a privacidade de terceiros e a legislação aplicável.</p>
        </section>
        <section>
          <h2>2. DIREITOS AUTORAIS</h2>
          <p>Salvo indicação diferente, o layout, os textos, a identidade visual, as fotografias, os vídeos e os demais conteúdos deste site pertencem a Vitor Lior ou são utilizados com autorização. A reprodução, adaptação, distribuição, exploração comercial ou criação de material derivado sem autorização prévia e escrita é proibida, ressalvadas as utilizações permitidas por lei.</p>
        </section>
        <section>
          <h2>3. MARCAS E IDENTIDADE</h2>
          <p>O nome, a apresentação visual e os elementos distintivos não podem ser usados de modo que gere associação, endosso ou representação indevida.</p>
        </section>
        <section>
          <h2>4. CONTEÚDO EDUCACIONAL</h2>
          <p>As informações do site têm finalidade informativa e não substituem avaliação individualizada. Nenhum resultado é garantido; respostas ao treinamento variam conforme histórico, execução, frequência, recuperação e outros fatores pessoais.</p>
        </section>
        <section>
          <h2>5. USO INDEVIDO</h2>
          <p>Não é permitido tentar comprometer a segurança, automatizar coleta abusiva, copiar sistematicamente o conteúdo, contornar controles técnicos ou usar o site para fins ilícitos.</p>
        </section>
        <section>
          <h2>6. LINKS EXTERNOS</h2>
          <p>Links para Instagram, WhatsApp e serviços de terceiros seguem regras e políticas próprias. O usuário deve consultá-las antes de utilizar esses ambientes.</p>
        </section>
        <section>
          <h2>7. CONTATO E ATUALIZAÇÕES</h2>
          <p>Dúvidas sobre autorização de uso podem ser enviadas para <strong>{siteConfig.contactEmail}</strong>. Este endereço provisório deve ser substituído antes da abertura pública. Os termos podem ser atualizados, e a data acima indicará a versão vigente.</p>
        </section>
      </article>
      <footer className="legal-footer">© {new Date().getFullYear()} VITOR LIOR. TODOS OS DIREITOS RESERVADOS.</footer>
      <CookieConsent />
    </main>
  );
}
