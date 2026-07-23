import Link from "next/link";
import { CTA, SectionHeading, ServiceGrid } from "@/components/Sections";
import { asset, contact } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "REVIQA Biomedica | Súkromné regeneračné centrum Poprad", description: "REVIQA Biomedica v Poprade ponúka individuálnu starostlivosť, vstupnú diagnostiku, HBOT, molekulárny vodík, fotobiomoduláciu a regeneračné terapie.", path: "" });

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <img className="hero-bg" src={asset("/assets/logo-hero.jpeg")} alt="REVIQA Biomedica pod Vysokými Tatrami" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <h1>Vaše telo.<br /><em>Vaša budúcnosť.</em><br />Naša veda.</h1>
          <span className="hero-divider" aria-hidden="true" />
          <p>Individuálny biomechanický prístup k regenerácii pohybového aparátu, nervového systému a podpore dlhovekosti.</p>
          <div className="hero-actions"><a className="gold-button hero-primary" href={contact.whatsapp} target="_blank" rel="noreferrer"><span>Rezervujte si termín</span><span aria-hidden="true">→</span></a><Link className="text-link" href="/sluzby">Technológie a terapeutické metódy REVIQA</Link></div>
        </div>
        <div className="hero-facts shell"><div><b>01</b><span>Individuálny plán</span></div><div><b>02</b><span>Súkromie a diskrétnosť</span></div><div><b>03</b><span>Moderné technológie</span></div><div><b>04</b><span>Dlhodobá starostlivosť</span></div></div>
      </section>

      <section className="intro-section section shell intro-layout">
        <div><SectionHeading eyebrow="Prečo REVIQA" title="Regenerácia začína porozumením" text="Neriešime izolovane iba miesto ťažkostí. Hľadáme súvislosti a vytvárame podmienky, v ktorých môže telo lepšie fungovať, obnovovať sa a adaptovať." /><Link className="outline-link" href="/o-nas">Náš prístup</Link></div>
        <aside className="intro-consult-card"><img src={asset("/assets/radovan-foltinsky-portrait-2026.jpeg")} alt="Radovan Foltinský, zakladateľ REVIQA Biomedica" /><div className="consult-person"><strong>Radovan Foltinský</strong><small>MSc, MEd, CertMGMT (Open)</small><span>CEO – akreditovaný špecialista</span></div><span className="eyebrow">Osobná konzultácia</span><h2>Začnime rozhovorom</h2><p>Začnime rozhovorom a úvodnou regeneračnou terapiou.</p><a href={contact.whatsapp} target="_blank" rel="noreferrer">Rezervujte si termín</a></aside>
        <div className="feature-stack"><article><span>✦</span><div><h3>Hľadanie súvislostí</h3><p>Pozeráme sa na človeka, jeho príbeh, pohyb a ciele ako na jeden celok.</p></div></article><article><span>◇</span><div><h3>Starostlivosť na mieru</h3><p>Každý plán vzniká individuálne a priebežne sa prispôsobuje.</p></div></article><article><span>∞</span><div><h3>Dlhodobá vitalita</h3><p>Naším cieľom je udržateľná kvalita života, nie rýchle univerzálne riešenie.</p></div></article></div>
      </section>

      <section className="section services-section"><div className="shell"><SectionHeading center eyebrow="Terapie" title="Spoznajte naše terapie" text="Konkrétna kombinácia, frekvencia aj poradie vznikajú individuálne." /><ServiceGrid limit={6} /></div></section>

      <section className="method-preview section">
        <div className="shell"><SectionHeading eyebrow="Metóda REVIQA" title="Päť krokov personalizovanej regenerácie" /></div>
        <div className="method-steps shell">{[["01","Objavenie","Počúvame váš príbeh a ciele."],["02","Posúdenie","Hľadáme vzorce a súvislosti."],["03","Reset","Znižujeme preťaženie a pripravujeme základ."],["04","Obnova","Podporujeme tkanivá, funkciu a výkon."],["05","Udržanie","Sledujeme progres a dlhodobú vitalitu."]].map(([n,t,p]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
        <div className="center-action"><Link className="gold-button" href="/metoda-reviqa">Celá Metóda REVIQA</Link></div>
      </section>

      <section className="section shell place-section"><div className="place-image"><img src={asset("/assets/center-garden-1.jpeg")} alt="Záhrada s ľaliami a budova centra REVIQA v Poprade" /></div><div><SectionHeading eyebrow="Miesto, ktoré spomaľuje" title="Pokojné centrum pod Tatrami" text="Moderný bezbariérový priestor, súkromie, záhrada a parkovanie priamo v objekte. Vytvorili sme miesto, kde má každý klient čas a pozornosť." /><ul className="gold-list"><li>Hitschova 5022/2, Poprad – Spišská Sobota</li><li>Parkovanie v objekte</li><li>Bezbariérový vstup</li><li>Návštevy na objednávku</li></ul><Link className="outline-link" href="/galeria">Pozrieť galériu</Link></div></section>

      <CTA />
    </>
  );
}
