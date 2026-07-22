import { CTA, PageHero, SectionHeading } from "@/components/Sections";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Metóda REVIQA – 5 krokov regenerácie", description: "Objavte päť krokov individuálnej Metódy REVIQA: rozhovor, posúdenie súvislostí, reset, obnova a dlhodobé udržanie progresu.", path: "/metoda-reviqa" });

const steps = [
  ["01", "Objavenie", "Počúvame", "Spoznávame váš príbeh, priority, aktuálne ťažkosti a to, čo chcete znovu zvládať s väčšou ľahkosťou."],
  ["02", "Posúdenie", "Analyzujeme", "Pozeráme sa na pohyb, funkčné vzorce, zaťaženie a súvislosti, ktoré môžu ovplyvňovať váš stav."],
  ["03", "Reset", "Pripravujeme", "Znižujeme preťaženie a vyberáme prvé kroky, ktoré vytvoria vhodný základ pre ďalšiu starostlivosť."],
  ["04", "Obnova", "Podporujeme", "Kombinujeme vhodné manuálne a technologické postupy podľa individuálneho plánu."],
  ["05", "Udržanie", "Optimalizujeme", "Sledujeme progres, upravujeme plán a podporujeme dlhodobú vitalitu a funkčnosť."],
] as const;

export default function MethodPage() {
  return <><PageHero eyebrow="Metóda REVIQA" title="Päť krokov. Jeden individuálny príbeh." text="Metóda REVIQA je rámec personalizovanej starostlivosti. Nie je univerzálnym protokolom ani samostatnou liečbou – každý krok sa prispôsobuje potrebám klienta." image="/assets/reviqa-philosophy.jpeg" />
    <section className="section shell"><SectionHeading eyebrow="Proces" title="Od porozumenia k udržateľnému progresu" /><div className="timeline">{steps.map(([n,t,v,p]) => <article key={n}><span>{n}</span><div><small>{v}</small><h2>{t}</h2><p>{p}</p></div></article>)}</div></section><CTA /></>;
}
