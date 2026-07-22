import Link from "next/link";
import { CTA, PageHero, SectionHeading } from "@/components/Sections";
import { asset } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "O nás – filozofia a centrum", description: "Spoznajte filozofiu, odborné zázemie a pokojné prostredie súkromného regeneračného centra REVIQA Biomedica v Poprade.", path: "/o-nas" });

export default function AboutPage() {
  return <><PageHero eyebrow="O nás" title="Váš potenciál. Naša misia." text="REVIQA vzniká ako pokojné, diskrétne miesto, kde sa moderné technológie stretávajú s časom, pozornosťou a individuálnym prístupom." image="/assets/center-garden-1.jpeg" />
    <section className="section shell split"><div><SectionHeading eyebrow="Naša filozofia" title="Človek nie je súbor oddelených symptómov" text="Pohyb, nervový systém, regenerácia, spánok a každodenná záťaž sa navzájom ovplyvňujú. Preto začíname porozumením celému príbehu klienta a až potom vyberáme vhodné postupy." /><p>REVIQA nie je pásová prevádzka. Prijímame obmedzený počet klientov, aby každá návšteva prebiehala pokojne a s dostatkom času.</p></div><div className="framed-image"><img src={asset("/assets/center-building.jpeg")} alt="Moderná budova centra REVIQA" /></div></section>
    <section className="section dark-panel"><div className="shell"><SectionHeading center eyebrow="Naše hodnoty" title="Veda. Technológie. Ľudský prístup." /><div className="values-grid"><article><span>01</span><h3>Individuálnosť</h3><p>Starostlivosť prispôsobujeme človeku, nie šablóne.</p></article><article><span>02</span><h3>Diskrétnosť</h3><p>Súkromie a pokoj sú prirodzenou súčasťou návštevy.</p></article><article><span>03</span><h3>Odborná zodpovednosť</h3><p>Zdravotné texty a protokoly podliehajú odbornej kontrole.</p></article><article><span>04</span><h3>Dlhodobosť</h3><p>Sledujeme udržateľný progres a kvalitu života.</p></article></div></div></section>
    <section className="section shell"><SectionHeading center eyebrow="Ľudia za REVIQA" title="Tím, ktorý vás počúva" /><div className="center-action"><Link className="gold-button" href="/nas-tim">Spoznať náš tím</Link></div></section><CTA /></>;
}
