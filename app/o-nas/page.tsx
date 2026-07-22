import Link from "next/link";
import { CTA, PageHero, SectionHeading } from "@/components/Sections";
import { asset } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "O nás – filozofia a centrum", description: "Spoznajte filozofiu, odborné zázemie a pokojné prostredie súkromného regeneračného centra REVIQA Biomedica v Poprade.", path: "/o-nas" });

export default function AboutPage() {
  return <><PageHero eyebrow="O nás" title="Váš potenciál. Naša misia." text="REVIQA vznikla ako pokojné a diskrétne miesto, kde sa moderné regeneračné technológie stretávajú s časom, odbornosťou a individuálnym prístupom." image="/assets/center-garden-1.jpeg" />
    <section className="section shell split"><div><SectionHeading eyebrow="Naša filozofia" title="Človek nie je súbor oddelených symptómov" text="Pohybový aparát, nervový systém, regenerácia, spánok a každodenná záťaž sa navzájom ovplyvňujú. Preto začíname porozumením celého príbehu klienta a až následne volíme individuálny regeneračný program." /><p>REVIQA prijíma obmedzený počet klientov, aby každá návšteva prebiehala nerušene, s dostatkom času a plnou pozornosťou.</p></div><div className="framed-image"><img src={asset("/assets/center-building.jpeg")} alt="Moderná budova centra REVIQA" /></div></section>
    <section className="section dark-panel"><div className="shell"><SectionHeading center eyebrow="Naše hodnoty" title="Ľudský prístup. Veda. Technológie." /><div className="values-grid"><article><span>01</span><h3>Individuálny prístup</h3><p>Rešpektujeme jedinečné potreby každého klienta.</p></article><article><span>02</span><h3>Diskrétnosť</h3><p>Dôvera a súkromie sú základom našej starostlivosti.</p></article><article><span>03</span><h3>Odbornosť</h3><p>Akreditovaní špecialisti sa rozhodujú na základe poznatkov, skúseností a precíznosti.</p></article><article><span>04</span><h3>Veda, technológie</h3><p>Využívame moderné high-tech technológie na podporu prirodzenej regenerácie organizmu.</p></article></div></div></section>
    <section className="section shell"><SectionHeading center eyebrow="Ľudia za REVIQA" title="Tím, ktorý vás počúva" /><div className="center-action"><Link className="gold-button" href="/nas-tim">Spoznať náš tím</Link></div></section><CTA /></>;
}
