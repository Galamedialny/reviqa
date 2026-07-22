import Link from "next/link";
import { CTA, SectionHeading, ServiceGrid } from "@/components/Sections";
import { asset, contact } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <img className="hero-bg" src={asset("/assets/center-garden-4.jpeg")} alt="Záhrada a súkromné centrum REVIQA v Poprade" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <span className="eyebrow">Private Regeneration & Longevity Center</span>
          <h1>Vaše telo.<br /><em>Vaša budúcnosť.</em><br />Naša veda.</h1>
          <p>Súkromné regeneračné centrum v Poprade. Spájame individuálny prístup, moderné technológie a pokojné prostredie pre vašu cestu k pohybu, regenerácii a vitalite.</p>
          <div className="hero-actions"><a className="gold-button" href={contact.whatsapp} target="_blank" rel="noreferrer">Objednať vstupnú konzultáciu</a><Link className="text-link" href="/metoda-reviqa">Spoznajte Metódu REVIQA →</Link></div>
        </div>
        <aside className="hero-consult-card"><img src={asset("/assets/radovan-foltinsky-portrait-v2.jpg")} alt="Radovan Foltinský, zakladateľ REVIQA Biomedica" /><span>Osobná konzultácia</span><h2>Začnime rozhovorom</h2><p>Vaše potreby, ciele a ďalší postup preberieme pokojne a individuálne.</p><a href={contact.whatsapp} target="_blank" rel="noreferrer">Objednať konzultáciu</a></aside>
        <div className="hero-facts shell"><span><b>01</b> Individuálny plán</span><span><b>02</b> Pokoj a diskrétnosť</span><span><b>03</b> Moderné technológie</span><span><b>04</b> Dlhodobá starostlivosť</span></div>
      </section>

      <section className="intro-section section shell split">
        <div><SectionHeading eyebrow="Prečo REVIQA" title="Regenerácia začína porozumením" text="Neriešime izolovane iba miesto ťažkostí. Hľadáme súvislosti a vytvárame podmienky, v ktorých môže telo lepšie fungovať, obnovovať sa a adaptovať." /><Link className="outline-link" href="/o-nas">Náš prístup</Link></div>
        <div className="feature-stack"><article><span>✦</span><div><h3>Hľadanie súvislostí</h3><p>Pozeráme sa na človeka, jeho príbeh, pohyb a ciele ako na jeden celok.</p></div></article><article><span>◇</span><div><h3>Starostlivosť na mieru</h3><p>Každý plán vzniká individuálne a priebežne sa prispôsobuje.</p></div></article><article><span>∞</span><div><h3>Dlhodobá vitalita</h3><p>Naším cieľom je udržateľná kvalita života, nie rýchle univerzálne riešenie.</p></div></article></div>
      </section>

      <section className="section services-section"><div className="shell"><SectionHeading center eyebrow="Služby" title="Technológie a ľudský prístup" text="Každá služba je nástrojom. Skutočnú hodnotu jej dáva až správne posúdenie, načasovanie a kombinácia podľa potrieb klienta." /><ServiceGrid limit={6} /></div></section>

      <section className="method-preview section">
        <div className="shell"><SectionHeading eyebrow="Metóda REVIQA" title="Päť krokov personalizovanej regenerácie" /></div>
        <div className="method-steps shell">{[["01","Objavenie","Počúvame váš príbeh a ciele."],["02","Posúdenie","Hľadáme vzorce a súvislosti."],["03","Reset","Znižujeme preťaženie a pripravujeme základ."],["04","Obnova","Podporujeme tkanivá, funkciu a výkon."],["05","Udržanie","Sledujeme progres a dlhodobú vitalitu."]].map(([n,t,p]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
        <div className="center-action"><Link className="gold-button" href="/metoda-reviqa">Celá Metóda REVIQA</Link></div>
      </section>

      <section className="section shell place-section"><div className="place-image"><img src={asset("/assets/center-garden-4.jpeg")} alt="Záhrada a budova centra REVIQA v Poprade" /></div><div><SectionHeading eyebrow="Miesto, ktoré spomaľuje" title="Pokojné centrum pod Tatrami" text="Moderný bezbariérový priestor, súkromie, záhrada a parkovanie priamo v objekte. Vytvorili sme miesto, kde má každý klient čas a pozornosť." /><ul className="gold-list"><li>Hitschova 5022/2, Poprad</li><li>Parkovanie v objekte</li><li>Bezbariérový vstup</li><li>Návštevy na objednávku</li></ul><Link className="outline-link" href="/galeria">Pozrieť galériu</Link></div></section>

      <CTA />
    </>
  );
}
