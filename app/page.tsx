import Link from "next/link";
import { CTA, SectionHeading, ServiceGrid } from "@/components/Sections";
import { asset, contact } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "REVIQA Biomedica | Súkromné regeneračné centrum Poprad", description: "REVIQA Biomedica v Poprade ponúka individuálnu starostlivosť, HBOT, molekulárny vodík a kyslík, fotobiomoduláciu a regeneračné terapie.", path: "" });

export default function Home() {
  return (
    <>
      <section className="home-hero home-hero-founder">
        <img className="hero-bg" src={asset("/assets/radovan-hero-mobile-v2.png")} alt="Radovan Foltinský, zakladateľ REVIQA Biomedica" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <div className="hero-kicker"><span>Private Regeneration &amp; Longevity Center</span><em>Boutique Regeneration Experience</em></div>
          <h1>Vaše telo.<br /><em>Vaša budúcnosť.</em><br />Naša veda.</h1>
          <span className="hero-divider" aria-hidden="true" />
          <p>Spájame biomechaniku, moderné regeneračné technológie a individuálny prístup pre podporu prirodzenej regenerácie a dlhodobého zdravia.</p>
          <div className="hero-actions"><a className="gold-button hero-primary" href={contact.whatsapp} target="_blank" rel="noreferrer"><span>Rezervujte si termín</span><span aria-hidden="true">→</span></a></div>
        </div>
        <div className="hero-facts shell"><div><b>01</b><span>Individuálny prístup</span></div><div><b>02</b><span>Veda a technológie</span></div><div><b>03</b><span>Regenerácia a dlhovekosť</span></div><div><b>04</b><span>Zdravie ako priorita</span></div></div>
      </section>

      <section className="intro-section section shell home-story-grid">
        <article className="home-story-copy">
          <SectionHeading eyebrow="Prečo REVIQA" title="Regenerácia začína porozumením." text="Skutočná regenerácia nezačína terapiou, ale pochopením človeka. Hľadáme funkčné súvislosti, ktoré ovplyvňujú pohyb, nervový systém a celkovú rovnováhu organizmu." />
          <Link className="outline-link" href="/o-nas">Zistiť viac</Link>
        </article>
        <article className="home-story-visual">
          <img src={asset("/assets/center-building-corrected.jpg")} alt="Privátne centrum REVIQA Biomedica v Poprade" />
          <div><span className="eyebrow">Individuálna starostlivosť</span><h2>Jeden človek. Jeden príbeh. Jeden plán.</h2><p>Nevyberáte si jednotlivé terapie. Spoločne vytvárame personalizovaný regeneračný protokol podľa vášho stavu, potrieb a dlhodobých cieľov.</p><Link href="/metoda-reviqa">Spoznať našu metódu →</Link></div>
        </article>
        <aside className="intro-consult-card consultation-without-portrait"><span className="eyebrow">Osobná konzultácia</span><h2>Začnime rozhovorom</h2><p>Prvým krokom je pokojný rozhovor a funkčné zhodnotenie. Na ich základe odporučíme ďalší postup.</p><div className="consult-person"><strong>Radovan Foltinský</strong><small>MSc, MEd, CertMGMT (Open)</small><span>FOUNDER | akreditovaný špecialista</span></div><a href={contact.whatsapp} target="_blank" rel="noreferrer">Rezervujte si termín</a></aside>
      </section>

      <section className="freedom-section shell">
        <img src={asset("/assets/home-freedom-family.jpg")} alt="Rodina tráviaca aktívny čas spoločne pod Tatrami" />
        <div className="freedom-shade" />
        <div className="freedom-content">
          <span className="eyebrow">Váš život. Vaše priority.</span>
          <h2>Viac slobody pre život, ktorý chcete žiť</h2>
          <p>Regenerácia nie je len o ústupe ťažkostí. Je o možnosti znovu sa slobodne hýbať, cestovať a aktívne tráviť čas s ľuďmi, na ktorých vám záleží.</p>
          <div className="freedom-values"><span>Sloboda pohybu</span><span>Aktívny život</span><span>Čas s blízkymi</span><span>Mobilita bez zbytočných limitov</span></div>
          <a className="gold-button" href={contact.whatsapp} target="_blank" rel="noreferrer">Začať svoju cestu</a>
        </div>
        <blockquote>„Nie je to len o dĺžke života. Je to o kvalite každého jedného dňa.“</blockquote>
      </section>

      <section className="section services-section"><div className="shell"><SectionHeading center eyebrow="Terapie" title="Spoznajte naše terapie" text="Konkrétna kombinácia, frekvencia aj poradie vznikajú individuálne." /><ServiceGrid limit={6} /></div></section>

      <section className="method-preview section">
        <div className="shell"><SectionHeading eyebrow="Metóda REVIQA" title="Päť krokov personalizovanej regenerácie" /></div>
        <div className="method-steps shell">{[["01","Objavenie","Počúvame váš príbeh a ciele."],["02","Posúdenie","Hľadáme vzorce a súvislosti."],["03","Reset","Vyberáme prvé kroky a terapie."],["04","Obnova","Kombinujeme vhodné postupy a terapie."],["05","Udržanie","Sledujeme progres a dlhodobú vitalitu."]].map(([n,t,p]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
        <div className="center-action"><Link className="gold-button" href="/metoda-reviqa">Celá Metóda REVIQA</Link></div>
      </section>

      <section className="section shell place-section"><div className="place-image"><img src={asset("/assets/center-garden-1.jpeg")} alt="Záhrada s ľaliami a budova centra REVIQA v Poprade" /></div><div><SectionHeading eyebrow="Miesto, ktoré spomaľuje" title="Pokojné centrum pod Tatrami" text="Moderný bezbariérový priestor, súkromie, záhrada a parkovanie priamo v objekte. Vytvorili sme miesto, kde má každý klient čas a pozornosť." /><ul className="gold-list"><li>Hitschova 5022/2, Poprad – Spišská Sobota</li><li>Parkovanie v objekte</li><li>Bezbariérový vstup</li><li>Návštevy na objednávku</li></ul><Link className="outline-link" href="/galeria">Pozrieť galériu</Link></div></section>

      <CTA />
    </>
  );
}
