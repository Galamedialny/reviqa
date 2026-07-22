import { CTA, MedicalNote, PageHero, SectionHeading } from "@/components/Sections";
import { programs } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Programy regenerácie a cenník", description: "Orientačný cenník vstupnej diagnostiky, individuálnej starostlivosti, HBOT a regeneračných programov REVIQA Biomedica v Poprade.", path: "/programy-cennik" });

export default function PricingPage() {
  return <><PageHero eyebrow="Programy a cenník" title="Každý plán začína človekom" text="Ceny poskytujú orientáciu. Konečný rozsah starostlivosti odporučíme až po vstupnom zhodnotení a vždy ho prispôsobíme vašim potrebám." image="/assets/brochure-pricing.jpeg" />
    <section className="section shell"><SectionHeading eyebrow="Individuálna starostlivosť" title="Vstupné a nadväzujúce stretnutia" /><div className="price-lines"><article><div><h3>Úvodné komplexné vyšetrenie</h3><p>Komplexné zhodnotenie, analýza súvislostí, prvé individuálne ošetrenie a návrh plánu.</p></div><span>120 min</span><b>165 €</b></article><article><div><h3>Nadväzujúce individuálne stretnutie</h3><p>Stretnutie prispôsobené aktuálnemu stavu, cieľom a priebehu regenerácie.</p></div><span>90 min</span><b>155 €</b></article><article><div><h3>Hyperbarická oxygenoterapia (HBOT)</h3><p>1 terapia / balík 5 terapií / balík 10 terapií</p></div><span>60 min</span><b>50 € / 150 € / 250 €</b></article></div></section>
    <section className="section dark-panel"><div className="shell"><SectionHeading center eyebrow="Programy regenerácie & longevity" title="Rozsah podľa potrieb a cieľov" /><div className="program-grid">{programs.map((p) => <article key={p.name}><span>{p.note}</span><h2>{p.name}</h2><ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul><b>{p.price}</b></article>)}</div><p className="pricing-note">Programy nadväzujú na vstupné komplexné vyšetrenie a individuálny plán. Odporúčaný počet stretnutí sa môže po zhodnotení upraviť.</p></div></section><section className="section shell"><MedicalNote /></section><CTA /></>;
}
