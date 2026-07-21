import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/Sections";
import { contact } from "@/lib/content";

export const metadata: Metadata = { title: "Kontakt", description: "Kontaktujte súkromné regeneračné centrum REVIQA na adrese Hitschova 2, Poprad." };

export default function ContactPage() {
  return <><PageHero eyebrow="Kontakt" title="Vaša cesta začína rozhovorom" text="Objednajte si vstupnú konzultáciu telefonicky alebo cez WhatsApp. Kontaktný formulár nepoužívame – komunikujete priamo s nami." /><section className="section shell contact-layout"><div><SectionHeading eyebrow="REVIQA Poprad" title="Kontakt a otváracie hodiny" /><div className="contact-cards"><a href={`tel:${contact.phone}`}><small>Telefón</small><b>{contact.phoneDisplay}</b></a><a href={`mailto:${contact.email}`}><small>E-mail</small><b>{contact.email}</b></a><div><small>Adresa</small><b>{contact.address}</b></div><div><small>Otváracie hodiny</small><b>Po–Pi 9:00–12:00<br />13:00–15:00</b><p>Víkend a iný čas podľa potreby, na objednávku.</p></div></div><div className="contact-actions"><a className="gold-button" href={contact.whatsapp} target="_blank" rel="noreferrer">Napísať cez WhatsApp</a><a className="ghost-button" href={`tel:${contact.phone}`}>Zavolať</a></div><p className="access-note">✓ Parkovanie priamo v objekte &nbsp; ✓ Bezbariérový vstup</p></div><div className="map-placeholder" aria-label="Ilustračná mapa, Google mapa bude doplnená"><div className="map-grid" /><div className="map-pin">R<span>REVIQA</span></div><p>Ilustračná mapa<br /><small>Google mapa bude doplnená</small></p></div></section></>;
}
