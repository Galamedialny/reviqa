import type { Metadata } from "next";
import { CTA, PageHero } from "@/components/Sections";
import { asset } from "@/lib/content";

export const metadata: Metadata = { title: "Náš tím", description: "Radovan Foltinský a Dr. med. univ. Alexandra Foltinska – tím a odborné zázemie centra REVIQA." };

export default function TeamPage() {
  return <><PageHero eyebrow="Náš tím" title="Odbornosť s ľudskou tvárou" text="Osobný prístup, dôkladné porozumenie a odborná konzultácia tvoria základ každej spolupráce." />
    <section className="section shell team-grid"><article className="person-card featured"><div className="portrait-crop"><img src={asset("/assets/radovan-source.jpeg")} alt="Radovan Foltinský" /></div><div><span className="eyebrow">Zakladateľ centra</span><h2>Radovan Foltinský, MSc, Med, CertMGMTI (Open)</h2><p>Špecialista so zameraním na regeneračný prístup, pohybový aparát a dlhodobú vitalitu. Pri práci prepája funkčné súvislosti, manuálne postupy a individuálne nastavené technológie.</p><blockquote>„Vaše telo je dokonale prepojený systém. Investícia do zdravia a vitality je investíciou do kvality života.“</blockquote></div></article>
      <article className="person-card consultant"><div className="portrait-placeholder"><span>AF</span></div><div><span className="eyebrow">Externá konzultantka a odborná garantka</span><h2>Dr. med. univ. Alexandra Foltinska</h2><p>Externá medicínska konzultantka a odborná garantka. Podieľa sa na kontrole zdravotných informácií, benefitov a kontraindikácií jednotlivých postupov.</p><p className="muted">Podrobnejší odborný profil a fotografia budú doplnené.</p></div></article></section><CTA /></>;
}
