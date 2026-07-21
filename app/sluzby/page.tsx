import type { Metadata } from "next";
import { CTA, PageHero, SectionHeading, ServiceGrid } from "@/components/Sections";

export const metadata: Metadata = { title: "Služby", description: "HBOT, molekulárny vodík, fotobiomodulácia, diagnostika a individuálne regeneračné terapie v centre REVIQA Poprad." };

export default function ServicesPage() {
  return <><PageHero eyebrow="Služby" title="Starostlivosť zostavená podľa vás" text="Technológie a terapie nevnímame izolovane. Vyberáme ich podľa vašich cieľov, aktuálneho stavu a výsledkov vstupného zhodnotenia." image="/assets/therapy-regeneration.jpeg" /><section className="section shell"><SectionHeading center eyebrow="Možnosti starostlivosti" title="Spoznajte naše služby" text="Konkrétna kombinácia, frekvencia aj poradie vznikajú individuálne." /><ServiceGrid /></section><CTA /></>;
}
