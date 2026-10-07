import Image from "next/image";
import { DiagnosticForm } from "@/components/diagnostic-form";
import { CookieConsent, CookiePreferencesButton } from "@/components/cookie-consent";
import { MotionController } from "@/components/motion-controller";
import { siteConfig, whatsappUrl, withBasePath } from "@/lib/site-config";

const values = [
  ["01", "AVALIAÇÃO INICIAL", "Rotina, histórico, limitações e objetivo entram na mesa antes da primeira série."],
  ["02", "TREINO INDIVIDUALIZADO", "Planejamento construído para você — não uma ficha genérica adaptada às pressas."],
  ["03", "AJUSTES E PERIODIZAÇÃO", "O plano evolui conforme sua resposta, execução e disponibilidade ao longo das semanas."],
  ["04", "CORREÇÃO DE EXECUÇÃO", "Orientações e feedbacks para transformar exercício em estímulo bem direcionado."],
  ["05", "ACOMPANHAMENTO DIRETO", "Contato técnico sem intermediários, com análise do progresso e próximos passos claros."],
];

const audiences = [
  ["HIPERTROFIA", "Construção de massa muscular com seleção de exercícios, volume e progressão coerentes."],
  ["EMAGRECIMENTO", "Estratégia de treino sustentável, compatível com a rotina e sem atalhos milagrosos."],
  ["DEFINIÇÃO", "Preservar e desenvolver massa muscular enquanto o processo de composição corporal avança."],
  ["PERFORMANCE", "Mais qualidade de movimento, força e capacidade para evoluir dentro e fora da academia."],
];

const steps = [
  ["01", "DIAGNÓSTICO", "Entender seu ponto de partida, rotina, histórico e objetivo."],
  ["02", "ESTRATÉGIA", "Transformar essas informações em um plano individualizado."],
  ["03", "EXECUÇÃO", "Treinar com clareza, técnica e direção em cada sessão."],
  ["04", "EVOLUÇÃO", "Acompanhar, ajustar e progredir com base na sua resposta."],
];

const faqs = [
  ["Sou iniciante. A consultoria serve para mim?", "Sim. O plano parte do seu nível atual e deve respeitar seu repertório, sua rotina e sua capacidade de recuperação."],
  ["Preciso treinar em uma academia?", "Depende do objetivo e dos recursos disponíveis. O diagnóstico inicial ajuda a definir o formato viável antes de qualquer proposta."],
  ["A consultoria pode ser totalmente on-line?", "Sim. O acompanhamento pode acontecer a distância, com planejamento, orientações, análise de execução e ajustes periódicos."],
  ["Como recebo meu treino?", "O material de referência informa uso de aplicativo com vídeos explicativos e métricas de progresso. A entrega final deve ser confirmada com Vitor no diagnóstico."],
  ["Com que frequência o treino é atualizado?", "Os ajustes dependem da sua evolução, aderência e resposta ao plano. Os feedbacks podem ser semanais ou quinzenais, conforme o acompanhamento definido."],
  ["Vitor corrige a execução dos exercícios?", "Sim. O acompanhamento descrito inclui orientação e correção de exercícios, além de avaliação técnica do progresso."],
  ["Em quanto tempo vou ver resultados?", "Não existe prazo garantido. Resultado depende do ponto de partida, frequência, execução, recuperação e consistência. A proposta é tornar o processo mensurável e ajustável."],
];

const instagramReels = [
  [withBasePath("/media/instagram-training-optimized.mp4"), withBasePath("/media/instagram-1.jpg"), "Quadríceps no leg press"],
  [withBasePath("/media/instagram-2.mp4"), withBasePath("/media/instagram-2.jpg"), "Treino de costas"],
  [withBasePath("/media/instagram-3.mp4"), withBasePath("/media/instagram-3.jpg"), "Técnica no búlgaro"],
  [withBasePath("/media/instagram-4.mp4"), withBasePath("/media/instagram-4.jpg"), "Ajustes no hack machine"],
  [withBasePath("/media/instagram-5.mp4"), withBasePath("/media/instagram-5.jpg"), "Execução e amplitude"],
];

function CTA({ className = "" }: { className?: string }) {
  return <a className={`button button-light ${className}`} href="#diagnostico">QUERO COMEÇAR</a>;
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org", "@type": "Person", name: siteConfig.name,
    jobTitle: "Profissional de Educação Física", sameAs: [siteConfig.instagram],
    knowsAbout: ["Biomecânica", "Treinamento personalizado", "Hipertrofia feminina"],
  };
  return (
    <main>
      <MotionController />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Vitor Lior — início">VITOR <span>LIOR</span></a>
        <nav aria-label="Navegação principal"><a href="#metodo">MÉTODO</a><a href="#sobre">SOBRE</a><a href="#duvidas">DÚVIDAS</a></nav>
        <a className="topbar-cta" href="#diagnostico">INICIAR DIAGNÓSTICO</a>
      </header>

      <section className="hero" id="inicio">
        <Image className="hero-photo" src={withBasePath("/media/hero-vitor.webp")} alt="Vitor Lior em um ambiente de treino" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">TREINAMENTO PERSONALIZADO · ON-LINE E PRESENCIAL</p>
          <h1>TREINO NÃO É<br />TENTATIVA.<br /><em>É ESTRATÉGIA.</em></h1>
          <p className="hero-copy">Um plano construído para o seu corpo, sua rotina e seu objetivo — com biomecânica, acompanhamento real e ajustes ao longo do caminho.</p>
          <div className="hero-actions"><CTA /><a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">FALAR NO WHATSAPP</a></div>
          <p className="credentials">EDUCAÇÃO FÍSICA <i /> PÓS-GRADUAÇÃO EM BIOMECÂNICA <i /> ESPECIALISTA EM HIPERTROFIA FEMININA</p>
        </div>
      </section>

      <section className="statement section-shell">
        <p className="section-index">01 / DIREÇÃO</p>
        <h2>VOCÊ NÃO PRECISA<br />TREINAR <span>MAIS.</span><br />PRECISA TREINAR <em>MELHOR.</em></h2>
        <p className="statement-copy">A proposta é simples: tirar o treino do campo da tentativa e colocar cada decisão a serviço do seu objetivo.</p>
      </section>

      <section className="value-section section-shell" id="metodo">
        <div className="section-intro"><p className="section-index">02 / O QUE VOCÊ RECEBE</p><h2>UM PLANO QUE<br />MUDA COM VOCÊ.</h2><p>Do primeiro diagnóstico aos ajustes de rota, o acompanhamento conecta estratégia, execução e resposta do seu corpo.</p></div>
        <div className="value-list">{values.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className="audience-section section-shell">
        <p className="section-index">03 / PARA QUEM É</p>
        <div className="audience-head"><h2>OBJETIVOS DIFERENTES.<br />A MESMA PRECISÃO.</h2><p>O método se adapta à pessoa — não o contrário.</p></div>
        <div className="audience-grid">{audiences.map(([title, copy], index) => <article data-reveal style={{ "--reveal-delay": `${index * 65}ms` } as React.CSSProperties} className={index === 0 ? "featured" : ""} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>{index === 0 && <b>ÁREA DE ESPECIALIZAÇÃO: HIPERTROFIA FEMININA</b>}</article>)}</div>
      </section>

      <section className="process-section section-shell">
        <p className="section-index">04 / COMO FUNCIONA</p><h2>SEM COMPLICAÇÃO.<br />COM DIREÇÃO.</h2>
        <div className="process-grid">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className="authority-section" id="sobre">
        <div className="authority-photo"><Image src={withBasePath("/media/vitor-coaching-hd.webp")} alt="Vitor Lior orientando a execução de um exercício" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="authority-copy"><p className="section-index">05 / AUTORIDADE</p><span className="outline-name">VITOR LIOR</span><h2>TÉCNICA PARA ENTENDER<br />O PORQUÊ DE CADA ESCOLHA.</h2><p>Formado em Educação Física, pós-graduado em Biomecânica e especialista em hipertrofia feminina, Vitor orienta o treino a partir da individualidade. O objetivo não é acumular exercícios, mas entender quais movimentos, volumes e progressões fazem sentido para você.</p><ul><li>EDUCAÇÃO FÍSICA</li><li>PÓS-GRADUAÇÃO EM BIOMECÂNICA</li><li>ESPECIALISTA EM HIPERTROFIA FEMININA</li></ul></div>
      </section>

      <section className="proof-section section-shell">
        <div className="proof-head"><div><p className="section-index">06 / ACOMPANHAMENTO REAL</p><h2>PROXIMIDADE TAMBÉM<br />FAZ PARTE DO MÉTODO.</h2></div><p>Registros reais de chamadas de acompanhamento da consultoria. Sem depoimentos inventados e sem promessas irreais.</p></div>
        <div className="proof-strip">{[1,2,3,4,5].map((item) => <figure key={item}><Image src={withBasePath(`/media/client-${item}.jpg`)} alt="Registro de acompanhamento on-line com cliente" width={420} height={746} loading="lazy" /></figure>)}</div>
        <p className="proof-note">ESPAÇO PREPARADO PARA DEPOIMENTOS, EVOLUÇÕES E VÍDEOS AUTORIZADOS.</p>
      </section>

      <section className="mid-cta"><p>SEU TREINO PODE TER<br />UM PORQUÊ.</p><div><CTA /><a href={whatsappUrl} target="_blank" rel="noreferrer">PREFERE CONVERSAR? WHATSAPP</a></div></section>

      <section className="instagram-section section-shell">
        <div className="instagram-title"><p className="section-index">07 / INSTAGRAM</p><h2>TREINO.<br /><span>TÉCNICA.</span><br />ROTINA.</h2><a href={siteConfig.instagram} target="_blank" rel="noreferrer">{siteConfig.instagramHandle} · SEGUIR NO INSTAGRAM</a></div>
        <div className="instagram-grid">
          {instagramReels.map(([src, poster, label], index) => <figure data-reveal style={{ "--reveal-delay": `${index * 55}ms` } as React.CSSProperties} className="reel" key={src}><video controls playsInline preload="none" poster={poster} aria-label={`Vídeo: ${label}`}><source src={src} type="video/mp4" /></video><figcaption>{label.toUpperCase()} · REEL</figcaption></figure>)}
        </div>
      </section>

      <section className="faq-section section-shell" id="duvidas">
        <div><p className="section-index">08 / DÚVIDAS</p><h2>ANTES DE<br />COMEÇAR.</h2><p>Respostas diretas para as perguntas mais comuns.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<i>+</i></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="diagnostic-section section-shell" id="diagnostico">
        <div className="diagnostic-copy"><p className="section-index">09 / DIAGNÓSTICO</p><h2>SEU PLANO COMEÇA<br />COM AS PERGUNTAS<br />CERTAS.</h2><p>Leva poucos minutos. Suas respostas ajudam Vitor a entender seu momento e avaliar se o acompanhamento combina com o que você busca.</p><small>SEM PROMESSAS AUTOMÁTICAS. SEM FICHA GENÉRICA.</small></div>
        <DiagnosticForm />
      </section>

      <section className="final-cta section-shell"><p className="section-index">10 / PRÓXIMO PASSO</p><h2>VOCÊ NÃO PRECISA DE MAIS<br />UM TREINO DA INTERNET.<br /><em>PRECISA DE UM PLANO<br />FEITO PARA VOCÊ.</em></h2><div className="hero-actions"><CTA /><a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">FALAR NO WHATSAPP</a></div></section>

      <footer><a className="brand" href="#inicio">VITOR <span>LIOR</span></a><p>EDUCAÇÃO FÍSICA · BIOMECÂNICA · HIPERTROFIA FEMININA</p><div><a href={siteConfig.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WHATSAPP</a><a href={withBasePath("/privacidade/")}>PRIVACIDADE</a><a href={withBasePath("/termos/")}>TERMOS DE USO</a><CookiePreferencesButton /></div><small>© {new Date().getFullYear()} VITOR LIOR. TODOS OS DIREITOS RESERVADOS. INFORMAÇÕES EDUCACIONAIS; RESULTADOS INDIVIDUAIS VARIAM.</small></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com Vitor no WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l5.3-1.3A9.5 9.5 0 1 0 12 2Zm0 17.3c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A7.8 7.8 0 1 1 12 19.3Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-1.4-.7-2.4-1.7-3.1-3-.2-.3.2-.5.5-1 .1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1.1 1.6-1 2.5.1 1.1.5 2.2 1.2 3.1 1.4 2.1 3.3 3.6 5.6 4.3.7.2 1.5.2 2.2.1.8-.1 1.5-.8 1.7-1.5.2-.5.2-1 .1-1.1-.2-.2-.3-.2-.5-.3Z" fill="currentColor" /></svg></a>
      <CookieConsent />
    </main>
  );
}
