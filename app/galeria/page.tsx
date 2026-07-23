import { CTA, PageHero, SectionHeading } from "@/components/Sections";
import { asset } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Galéria centra REVIQA", description: "Pozrite si skutočné fotografie súkromného, bezbariérového regeneračného centra REVIQA, jeho záhrady a prostredia v Poprade.", path: "/galeria" });

const photos = [
  ["/assets/center-garden-1.jpeg", "Záhrada centra REVIQA"], ["/assets/center-garden-2.jpeg", "Pokojná zeleň pri centre"],
  ["/assets/center-garden-3.jpeg", "Areál centra REVIQA"], ["/assets/center-building-corrected.jpg", "Moderný bezbariérový modulový pavilón"],
  ["/assets/center-garden-4.jpeg", "Záhrada a vstup do centra"],
] as const;

export default function GalleryPage() {
  return <><PageHero eyebrow="Galéria" title="Skutočné miesto pre váš pokoj" text="REVIQA sa nachádza v tichom, upravenom a bezbariérovom objekte s vlastným parkovaním priamo v Poprade." image="/assets/center-garden-3.jpeg" /><section className="section shell"><SectionHeading eyebrow="Centrum REVIQA" title="Exteriér a záhrada" /><div className="gallery-grid">{photos.map(([src, alt], i) => <figure className={`gallery-${i + 1}`} key={src}><img src={asset(src)} alt={alt} /><figcaption>{alt}</figcaption></figure>)}</div></section><section className="section dark-panel"><div className="shell"><SectionHeading center eyebrow="Technológie" title="Originálne ilustračné vizualizácie terapií" /><div className="visual-gallery">{[["/assets/service-hbot.png", "Hyperbarická oxygenoterapia"], ["/assets/service-hydrogen.png", "Molekulárna vodíková terapia"], ["/assets/service-pbm.png", "Fotobiomodulácia"]].map(([src, alt]) => <figure key={src}><img src={asset(src)} alt={`Ilustračná vizualizácia: ${alt}`} /><figcaption>Ilustračná vizualizácia · {alt}</figcaption></figure>)}</div></div></section><CTA /></>;
}
