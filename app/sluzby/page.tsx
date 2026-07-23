import { CTA, PageHero, SectionHeading, ServiceGrid } from "@/components/Sections";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Regeneračné terapie", description: "Vstupná diagnostika, hyperbarická oxygenoterapia, molekulárny vodík, fotobiomodulácia a individuálne regeneračné terapie v REVIQA Poprad.", path: "/sluzby" });

export default function ServicesPage() {
  return <><PageHero eyebrow="Terapie" title="Starostlivosť zostavená pre vás" text="Technológie a terapie nevnímame izolovane. Vyberáme ich podľa vašich cieľov, aktuálneho stavu a výsledkov vstupného zhodnotenia." image="/assets/service-complementary-concept.jpg" /><section className="section shell"><SectionHeading center eyebrow="Možnosti starostlivosti" title="Spoznajte naše terapie" text="Konkrétna kombinácia, frekvencia aj poradie vznikajú individuálne." /><ServiceGrid /></section><CTA /></>;
}
