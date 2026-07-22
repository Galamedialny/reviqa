import { CTA, PageHero, SectionHeading } from "@/components/Sections";
import { asset } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Blog o regenerácii a dlhovekosti", description: "Odborne kontrolované články REVIQA o regenerácii, HBOT, molekulárnom vodíku, fotobiomodulácii, pohybe a dlhodobej vitalite.", path: "/blog" });

const drafts = [
  ["HBOT", "Čo je hyperbarická oxygenoterapia?", "/assets/service-hbot.png"],
  ["Prvá návšteva", "Ako prebieha vstupná konzultácia v REVIQA", "/assets/center-garden-1.jpeg"],
  ["H₂", "Molekulárny vodík v individuálnom regeneračnom pláne", "/assets/service-hydrogen.png"],
  ["Svetlo", "Čo je fotobiomodulácia?", "/assets/service-pbm.png"],
  ["Pohyb", "Nervový systém, pohyb a regenerácia v súvislostiach", "/assets/therapy-regeneration.jpeg"],
] as const;

export default function BlogPage() {
  return <><PageHero eyebrow="REVIQA Journal" title="Poznanie pre lepšie rozhodnutia" text="Pripravujeme odborne kontrolované články, ktoré vysvetlia technológie, priebeh starostlivosti a súvislosti regenerácie zrozumiteľným jazykom." /><section className="section shell"><SectionHeading eyebrow="Pripravované témy" title="Čoskoro na blogu" /><div className="blog-grid">{drafts.map(([tag,title,image]) => <article key={title}><div><img src={asset(image)} alt="" /><span>Ilustračná vizualizácia</span></div><small>{tag}</small><h2>{title}</h2><p>Článok pripravujeme a pred zverejnením prejde odbornou kontrolou.</p><b>Pripravujeme</b></article>)}</div></section><CTA /></>;
}
