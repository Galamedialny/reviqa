import { CTA, PageHero, SectionHeading, ServiceGrid } from "@/components/Sections";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Regeneračné služby a terapie", description: "Vstupná diagnostika, hyperbarická oxygenoterapia, molekulárny vodík, fotobiomodulácia a individuálne regeneračné terapie v REVIQA Poprad.", path: "/sluzby" });

export default function ServicesPage() {
  return <><PageHero eyebrow="Služby" title="Starostlivosť zostavená podľa vás" text="Technológie a terapie nevnímame izolovane. Vyberáme ich podľa vašich cieľov, aktuálneho stavu a výsledkov vstupného zhodnotenia." image="/assets/therapy-regeneration.jpeg" /><section className="section shell"><SectionHeading center eyebrow="Možnosti starostlivosti" title="Spoznajte naše služby" text="Konkrétna kombinácia, frekvencia aj poradie vznikajú individuálne." /><ServiceGrid /></section><CTA /></>;
}
