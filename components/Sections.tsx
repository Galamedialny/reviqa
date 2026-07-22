import Link from "next/link";
import { asset, contact, services } from "@/lib/content";

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image?: string }) {
  return (
    <section className="page-hero" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(239,240,238,.97), rgba(239,240,238,.68)), url('${asset(image)}')` } : undefined}>
      <div className="shell narrow"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={center ? "section-heading center" : "section-heading"}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function ServiceGrid({ limit }: { limit?: number }) {
  return <div className="service-grid">{services.slice(0, limit ?? services.length).map((service, i) => (
    <article className="service-card" key={service.slug}>
      <div className="service-image"><img src={asset(service.image)} alt="" /><span>Ilustračná vizualizácia</span></div>
      <div className="service-body"><small>0{i + 1}</small><h3>{service.title}</h3><p>{service.intro}</p><Link href={`/sluzby/${service.slug}`}>Zistiť viac <span>→</span></Link></div>
    </article>
  ))}</div>;
}

export function CTA() {
  return <section className="cta-band"><div className="shell"><div><span className="eyebrow">Prvý krok</span><h2>Objednajte si vstupnú konzultáciu</h2><p>Pokojný rozhovor, dôkladné zhodnotenie a plán vytvorený podľa vašich potrieb.</p></div><div className="cta-actions"><a className="gold-button" href={contact.whatsapp} target="_blank" rel="noreferrer">Napísať cez WhatsApp</a><a className="ghost-button" href={`tel:${contact.phone}`}>Zavolať {contact.phoneDisplay}</a></div></div></section>;
}

export function MedicalNote() {
  return <div className="medical-note"><b>Dôležité upozornenie</b><p>Informácie na tejto stránke majú informatívny charakter. Nenahrádzajú lekársku diagnostiku ani liečbu. Vhodnosť každej terapie a možné kontraindikácie posudzujeme individuálne pred začiatkom starostlivosti.</p></div>;
}
