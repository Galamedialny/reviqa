import { CTA, PageHero } from "@/components/Sections";
import { StructuredData } from "@/components/StructuredData";
import { faqs } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Časté otázky", description: "Odpovede na otázky o prvej návšteve, terapiách, objednávaní, deťoch, parkovaní a bezbariérovom vstupe v centre REVIQA Poprad.", path: "/faq" });

export default function FaqPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <><StructuredData data={structuredData} /><PageHero eyebrow="FAQ" title="Časté otázky" text="Praktické informácie pred prvou návštevou. Ak svoju otázku nenájdete, napíšte nám alebo zavolajte." /><section className="section shell faq-list">{faqs.map(([q,a], i) => <details key={q} open={i === 0}><summary><span>0{i + 1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section><CTA /></>;
}
