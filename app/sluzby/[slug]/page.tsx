import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA, MedicalNote, PageHero, SectionHeading } from "@/components/Sections";
import { services } from "@/lib/content";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: service.intro } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <><PageHero eyebrow={service.eyebrow} title={service.title} text={service.intro} image={service.image} />
    <section className="section shell service-detail"><div><SectionHeading eyebrow="Ako prebieha" title="Pokojne, zrozumiteľne a individuálne" /><ol className="process-list">{service.process.map((item, i) => <li key={item}><span>0{i + 1}</span><p>{item}</p></li>)}</ol></div><aside className="detail-box"><div><small>Dĺžka</small><b>{service.duration}</b></div><div><small>Cena</small><b>{service.price}</b></div><div><small>Pre koho</small><p>{service.audience}</p></div></aside></section>
    <section className="section dark-panel"><div className="shell"><SectionHeading eyebrow="Možné prínosy" title="Súčasť širšieho regeneračného plánu" /><div className="benefit-grid">{service.benefits.map((benefit, i) => <article key={benefit}><span>0{i + 1}</span><h3>{benefit}</h3></article>)}</div><MedicalNote /></div></section>
    <section className="section shell"><SectionHeading eyebrow="Kontraindikácie" title="Bezpečnosť posudzujeme pred každou terapiou" text="Nie každý postup je vhodný pre každého. Pred návštevou nám oznámte diagnózy, aktuálnu liečbu, tehotenstvo, implantované zariadenia a všetky významné zmeny zdravotného stavu. Konečné kontraindikácie a protokol potvrdí odborník po individuálnom zhodnotení." /></section><CTA /></>;
}
