import { PageHero } from "@/components/Sections";
import { contact } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Ochrana osobných údajov", description: "Informácie o spracúvaní osobných údajov na webovej stránke REVIQA Biomedica.", path: "/ochrana-osobnych-udajov", noIndex: true });

export default function PrivacyPage() {
  return <><PageHero eyebrow="Právne informácie" title="Ochrana osobných údajov" text="Dočasná štruktúra dokumentu – finálne údaje prevádzkovateľa budú doplnené pred verejným spustením webu." /><article className="section shell legal-copy"><div className="draft-alert">Pracovná verzia – nezverejňovať ako finálny právny dokument.</div><h2>1. Prevádzkovateľ</h2><p>Obchodné meno, IČO, sídlo a kontaktné údaje prevádzkovateľa budú doplnené po ich pridelení. Kontaktný e-mail: {contact.email}.</p><h2>2. Rozsah spracúvania</h2><p>Web neobsahuje kontaktný formulár ani newsletter. Pri telefonickej, e-mailovej alebo WhatsApp komunikácii poskytuje návštevník údaje priamo prostredníctvom zvolenej služby.</p><h2>3. Účel a právny základ</h2><p>Finálny text bude presne definovať účely komunikácie, objednávania, poskytovania starostlivosti a plnenia zákonných povinností.</p><h2>4. Práva dotknutých osôb</h2><p>Dokument bude obsahovať informácie o práve na prístup, opravu, vymazanie, obmedzenie, námietku a podanie podnetu dozornému orgánu.</p><h2>5. Doba uchovávania a príjemcovia</h2><p>Konkrétne lehoty a zoznam sprostredkovateľov budú doplnené podľa reálne používaných systémov.</p></article></>;
}
