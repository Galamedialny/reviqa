import { CTA, MedicalNote, PageHero, SectionHeading } from "@/components/Sections";
import { programs } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Programy regenerácie a cenník", description: "Orientačný cenník vstupnej diagnostiky, individuálnej starostlivosti, HBOT a regeneračných programov REVIQA Biomedica v Poprade.", path: "/programy-cennik" });

export default function PricingPage() {
  return <><PageHero eyebrow="Programy a cenník" title="Každý plán začína človekom" text="Ceny poskytujú orientáciu. Konečný rozsah starostlivosti odporučíme až po vstupnom zhodnotení a vždy ho prispôsobíme vašim potrebám." image="/assets/pricing-consultation-hero.jpg" />
    <section className="section shell">
      <SectionHeading eyebrow="Individuálna starostlivosť" title="Vstupné a nadväzujúce stretnutia" />
      <div className="price-lines">
        <article>
          <div><h3>Úvodné individuálne regeneračné stretnutie</h3><p>Komplexné vstupné stretnutie a prvá personalizovaná regenerácia.</p></div>
          <span>do 120 min.</span><b>165 €</b>
        </article>
        <article>
          <div><h3>Nadväzujúce individuálne stretnutie</h3><p>Stretnutie prispôsobené aktuálnemu funkčnému stavu a priebehu regenerácie.</p></div>
          <span>do 90 min.</span><b>155 €</b>
        </article>
        <article>
          <div><h3>Hyperbarická oxygenoterapia (HBOT)</h3><p>1 terapia | séria 5 terapií | séria 10 terapií</p></div>
          <span>60 min.</span><b>50 € / 150 € / 250 €</b>
        </article>
      </div>
      <div className="meeting-details">
        <article>
          <span className="eyebrow">Prvé stretnutie</span>
          <h2>Úvodné individuálne regeneračné stretnutie</h2>
          <p>Komplexné vstupné stretnutie zamerané na funkčné zhodnotenie zdravotného stavu, identifikáciu priorít a nastavenie individuálneho programu starostlivosti. Súčasťou stretnutia je aj prvá personalizovaná regenerácia prispôsobená aktuálnemu funkčnému stavu a potrebám klienta.</p>
          <h3>Súčasťou stretnutia je</h3>
          <ul>
            <li>Založenie REVIQA Health Passport™</li>
            <li>Neuromyoskeletálna manuálna rekompozícia</li>
            <li>Individuálne nastavený protokol molekulárnej regenerácie na bunkovej úrovni O₂, H₂ a iné terapie</li>
            <li>Fyzio-regeneračné poradenstvo</li>
            <li>Nastavenie personalizovaného programu REVIQA Method™</li>
            <li>Osobné odborné odporúčania</li>
          </ul>
        </article>
        <article>
          <span className="eyebrow">Pokračovanie starostlivosti</span>
          <h2>Nadväzujúce individuálne stretnutia</h2>
          <p>Každé ďalšie stretnutie nadväzuje na výsledky predchádzajúcich návštev a je prispôsobené aktuálnemu funkčnému stavu, priebehu regenerácie a individuálnym potrebám klienta. Cieľom je podporiť prirodzené regeneračné procesy organizmu, obnoviť optimálnu funkciu pohybového aparátu a dlhodobo zlepšovať kvalitu života.</p>
          <h3>Súčasťou stretnutia je</h3>
          <ul>
            <li>Priebežné funkčné zhodnotenie</li>
            <li>Neuromyoskeletálna podporná manuálna rekompozícia</li>
            <li>Individuálne nastavený protokol molekulárnej regenerácie na bunkovej úrovni O₂, H₂ a iné terapie</li>
            <li>Personalizovaná kombinácia regeneračných postupov podľa REVIQA Method™</li>
            <li>Priebežná optimalizácia individuálneho programu</li>
            <li>Osobné odborné odporúčania</li>
          </ul>
        </article>
      </div>
    </section>
    <section className="section dark-panel"><div className="shell"><SectionHeading center eyebrow="Programy regenerácie & longevity" title="Rozsah podľa potrieb a cieľov" /><div className="program-grid">{programs.map((p) => <article key={p.name}><span>{p.note}</span><h2>{p.name}</h2><ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul><b>{p.price}</b></article>)}</div><p className="pricing-note">Programy nadväzujú na vstupné komplexné vyšetrenie a individuálny plán. Odporúčaný počet stretnutí sa môže po zhodnotení upraviť.</p></div></section><section className="section shell"><MedicalNote /></section><CTA /></>;
}
