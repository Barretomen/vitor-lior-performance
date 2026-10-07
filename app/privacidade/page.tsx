import Link from "next/link";
import { CookieConsent, CookiePreferencesButton } from "@/components/cookie-consent";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Política de Privacidade | Vitor Lior",
  description: "Como os dados pessoais são tratados no site de Vitor Lior.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand" href="/">VITOR <span>LIOR</span></Link>
        <Link href="/">VOLTAR AO SITE</Link>
      </header>
      <article>
        <p className="section-index">PRIVACIDADE · LGPD</p>
        <h1>POLÍTICA DE<br />PRIVACIDADE.</h1>
        <p className="legal-updated">Última atualização: 7 de outubro de 2026.</p>

        <section>
          <h2>1. QUEM TRATA SEUS DADOS</h2>
          <p>O responsável pelo tratamento dos dados enviados neste site é Vitor Lior. O canal de privacidade provisório é <strong>{siteConfig.contactEmail}</strong>. Este endereço deve ser substituído pelo canal real antes da abertura pública do site.</p>
        </section>
        <section>
          <h2>2. DADOS COLETADOS</h2>
          <p>Quando você preenche o diagnóstico, podemos receber nome, telefone ou WhatsApp, objetivo, experiência de treino, rotina, preferência de acompanhamento e as observações que você decidir enviar. Também podem existir dados técnicos mínimos necessários à segurança e ao funcionamento do serviço.</p>
        </section>
        <section>
          <h2>3. PARA QUE USAMOS</h2>
          <p>Os dados são usados para responder ao seu contato, compreender sua necessidade, avaliar a possibilidade de atendimento, preparar uma proposta e proteger o site contra abuso. Não vendemos dados pessoais.</p>
        </section>
        <section>
          <h2>4. BASES LEGAIS</h2>
          <p>Conforme o contexto, o tratamento pode ocorrer para atender a pedido do titular e realizar procedimentos preliminares relacionados a eventual contrato, cumprir obrigação legal, exercer direitos e, quando aplicável, com consentimento livre e informado.</p>
        </section>
        <section>
          <h2>5. COMPARTILHAMENTO E ARMAZENAMENTO</h2>
          <p>Os dados podem ser processados por fornecedores estritamente necessários à hospedagem, segurança, envio de e-mail e comunicação. Devem ser mantidos somente pelo período necessário às finalidades informadas, obrigações legais e exercício de direitos, com acesso limitado.</p>
        </section>
        <section>
          <h2>6. SEUS DIREITOS</h2>
          <p>Você pode solicitar confirmação de tratamento, acesso, correção, informação sobre compartilhamento, anonimização, bloqueio ou eliminação quando cabível, portabilidade nos termos da regulamentação, revisão de consentimento e sua revogação. A solicitação será verificada para proteger o próprio titular.</p>
        </section>
        <section>
          <h2>7. COOKIES E TECNOLOGIAS SEMELHANTES</h2>
          <p>Esta versão usa armazenamento local necessário para lembrar a sua escolha de privacidade. Não há cookies opcionais de publicidade ou análise ativados atualmente. Se ferramentas opcionais forem adicionadas, elas deverão permanecer desativadas até uma escolha válida, e esta política deverá ser atualizada.</p>
          <CookiePreferencesButton />
        </section>
        <section>
          <h2>8. SEGURANÇA E ATUALIZAÇÕES</h2>
          <p>São adotadas medidas técnicas e organizacionais proporcionais ao serviço, embora nenhum ambiente digital seja completamente imune a riscos. Esta política pode ser atualizada para refletir mudanças no site ou na legislação; a data acima indicará a versão vigente.</p>
        </section>
        <section>
          <h2>9. CONTATO</h2>
          <p>Para exercer direitos ou esclarecer dúvidas sobre dados pessoais, use o canal de privacidade indicado no item 1.</p>
        </section>
      </article>
      <footer className="legal-footer">© {new Date().getFullYear()} VITOR LIOR. TODOS OS DIREITOS RESERVADOS.</footer>
      <CookieConsent />
    </main>
  );
}
