import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Cookies", robots: { index: false, follow: true } };

export default function CookiesPage() {
  return <><PageHero eyebrow="Právne informácie" title="Používanie cookies" text="Základné informácie o technológiách používaných na webovej stránke REVIQA." /><article className="section shell legal-copy"><div className="draft-alert">Pracovná verzia – upraví sa podľa finálnej analytiky a použitých služieb.</div><h2>Nevyhnutné cookies</h2><p>Web používa lokálne uloženie vo vašom prehliadači na zapamätanie voľby v cookies lište a základné technické prvky potrebné na fungovanie stránky.</p><h2>Analytické a marketingové cookies</h2><p>V aktuálnej pracovnej verzii nie sú nastavené analytické ani marketingové nástroje. Ak budú neskôr doplnené, táto stránka aj cookies lišta sa aktualizujú a umožnia samostatnú voľbu súhlasu.</p><h2>Externé služby</h2><p>Prechod na WhatsApp, telefonovanie, e-mail alebo neskôr vloženú mapu môže viesť na služby tretích strán, ktoré majú vlastné pravidlá ochrany súkromia.</p></article></>;
}
