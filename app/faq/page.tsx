import type { Metadata } from "next";
import { CTA, PageHero } from "@/components/Sections";
import { faqs } from "@/lib/content";

export const metadata: Metadata = { title: "Časté otázky", description: "Odpovede na časté otázky o návšteve, terapiách, objednávaní a parkovaní v centre REVIQA." };

export default function FaqPage() {
  return <><PageHero eyebrow="FAQ" title="Časté otázky" text="Praktické informácie pred prvou návštevou. Ak svoju otázku nenájdete, napíšte nám alebo zavolajte." /><section className="section shell faq-list">{faqs.map(([q,a], i) => <details key={q} open={i === 0}><summary><span>0{i + 1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section><CTA /></>;
}
