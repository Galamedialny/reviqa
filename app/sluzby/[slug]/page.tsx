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
    <div className="shell review-banner"><span>Odborný obsah v pracovnej revízii</span><p>Zdravotné tvrdenia, benefity a kontraindikácie pred finálnym zverejnením odborne skontroluje Dr. med. univ. Alexandra Foltinska.</p></div>
    <section className="section shell service-detail"><div><SectionHeading eyebrow="Ako prebieha" title="Pokojne, zrozumiteľne a individuálne" /><ol className="process-list">{service.process.map((item, i) => <li key={item}><span>0{i + 1}</span><p>{item}</p></li>)}</ol></div><aside className="detail-box"><div><small>Dĺžka</small><b>{service.duration}</b></div><div><small>Cena</small><b>{service.price}</b></div><div><small>Pre koho</small><p>{service.audience}</p></div></aside></section>
    <section className="section dark-panel"><div className="shell"><SectionHeading eyebrow="Možné prínosy" title="Súčasť širšieho regeneračného plánu" /><div className="benefit-grid">{service.benefits.map((benefit, i) => <article key={benefit}><span>0{i + 1}</span><h3>{benefit}</h3></article>)}</div><MedicalNote /></div></section>
    <section className="section shell"><SectionHeading eyebrow="Možnosti starostlivosti" title="Postup volíme podľa konkrétneho klienta" /><div className="tag-grid">{service.modalities.map((item) => <span key={item}>{item}</span>)}</div></section>
    <section className="section dark-panel"><div className="shell service-content"><div><SectionHeading eyebrow="Pre koho môže byť vhodná" title="Najskôr posúdime súvislosti" /><ul className="gold-list service-audience">{service.suitableFor.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="content-blocks">{service.details.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section shell"><SectionHeading eyebrow="Kontraindikácie" title="Bezpečnosť posudzujeme pred každou terapiou" text="Nie každý postup je vhodný pre každého. Pred návštevou nám oznámte diagnózy, aktuálnu liečbu, tehotenstvo, implantované zariadenia a všetky významné zmeny zdravotného stavu. Konečné kontraindikácie a protokol potvrdí odborník po individuálnom zhodnotení." /></section>
    <section className="section dark-panel"><div className="shell"><SectionHeading eyebrow="Časté otázky" title={`Praktické informácie: ${service.short}`} /><div className="faq-list service-faq">{service.faq.map(([question, answer], i) => <details key={question}><summary><span>0{i + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></div></section><CTA /></>;
}
