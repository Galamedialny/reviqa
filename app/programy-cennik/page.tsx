import { CTA, MedicalNote, PageHero, SectionHeading } from "@/components/Sections";
import { programs } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Programy regenerácie a cenník", description: "Cenník personalizovaného regeneračného protokolu REVIQA Method, HBOT a individuálnych programov REVIQA Biomedica v Poprade.", path: "/programy-cennik" });

export default function PricingPage() {
  return <><PageHero eyebrow="Programy a cenník" title="Za každou regeneráciou je príbeh človeka" text="Veríme v plne individuálny prístup. Výber konkrétneho programu a rozsah starostlivosti vždy prispôsobujeme reálnym potrebám vášho tela." image="/assets/pricing-consultation-hero.jpg" />
    <section className="section shell">
      <SectionHeading eyebrow="Individuálna starostlivosť" title="REVIQA Method™" text="Personalizovaný regeneračný protokol" />
      <article className="protocol-card">
        <div className="protocol-head">
          <div><span className="eyebrow">Personalizovaný regeneračný protokol</span><h2>REVIQA Method™</h2></div>
          <strong>do 90 min. | 165 €</strong>
        </div>
        <p>Komplexné individuálne stretnutie zamerané na funkčné zhodnotenie zdravotného stavu, identifikáciu hlavných priorít a zostavenie personalizovaného regeneračného protokolu podľa aktuálneho zdravotného stavu, individuálnych potrieb a cieľov klienta.</p>
        <div className="protocol-columns">
          <div>
            <h3>Personalizovaný regeneračný protokol zahŕňa</h3>
            <ul>
              <li>Založenie REVIQA Health Passport™</li>
              <li>Funkčné zhodnotenie zdravotného stavu</li>
              <li>Terapie z terapeutických modulov REVIQA Method™ podľa individuálne zostaveného regeneračného protokolu</li>
              <li>Odporúčanie vhodného REVIQA Method™ Programu podľa potrieb regenerácie klienta</li>
              <li>Konzultačné poradenstvo a odbornú podporu</li>
            </ul>
          </div>
          <div>
            <h3>Terapeutické moduly REVIQA Method™</h3>
            <p>Personalizovaný regeneračný protokol zostavuje odborník REVIQA | BIOMEDICA na základe funkčného zhodnotenia zdravotného stavu a individuálnych potrieb klienta z nasledujúcich terapeutických modulov:</p>
            <ul>
              <li>Chironeurogénne manuálne regeneračné techniky</li>
              <li>Psychosomatické techniky</li>
              <li>Hyperbarická oxygenoterapia (HBOT)</li>
              <li>Vodíková terapia (H₂)</li>
              <li>Kyslíková terapia (O₂)</li>
              <li>Fotobiomodulácia</li>
              <li>Perkutánna elektropresúra</li>
              <li>Fyzio-regeneračné cvičenia a edukácia</li>
              <li>Odporúčania v oblasti regenerácie a prevencie</li>
              <li>Ďalšie terapeutické postupy podľa individuálnych potrieb klienta</li>
            </ul>
          </div>
        </div>
        <div className="protocol-note"><h3>Poznámka</h3><p>REVIQA Method™ predstavuje autorskú metodiku individuálnej regenerácie. Klient si nevyberá jednotlivé terapie – odborník REVIQA | BIOMEDICA zostavuje personalizovaný regeneračný protokol na základe funkčného zhodnotenia zdravotného stavu a aktuálnych potrieb klienta.</p></div>
      </article>
      <article className="hbot-price-card">
        <div><span className="eyebrow">Samostatná terapia</span><h2>Hyperbarická oxygenoterapia (HBOT)</h2><p>1 terapia | séria 5 terapií | séria 10 terapií</p></div>
        <div><span>60 min.</span><strong>50 € / 150 € / 250 €</strong></div>
      </article>
    </section>
    <section className="section dark-panel"><div className="shell"><SectionHeading center eyebrow="Programy regenerácie & longevity" title="Rozsah podľa potrieb a cieľov" /><div className="program-grid">{programs.map((p) => <article key={p.name}><span>{p.note}</span><h2>{p.name}</h2><ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul><b>{p.price}</b></article>)}</div><p className="pricing-note">Programy nadväzujú na vstupné komplexné vyšetrenie a individuálny plán. Odporúčaný počet stretnutí sa môže po zhodnotení upraviť.</p></div></section><section className="section shell"><MedicalNote /></section><CTA /></>;
}
