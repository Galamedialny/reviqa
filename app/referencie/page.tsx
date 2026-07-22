import { CTA, PageHero, SectionHeading } from "@/components/Sections";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Referencie a skúsenosti klientov", description: "Skúsenosti klientov a overené recenzie súkromného regeneračného centra REVIQA Biomedica v Poprade.", path: "/referencie" });

export default function ReviewsPage() {
  return <><PageHero eyebrow="Referencie" title="Skúsenosť, ktorá sa nedá nahradiť sľubom" text="Táto podstránka je pripravená na zverejnenie overených recenzií klientov po získaní ich súhlasu." /><section className="section shell reviews-empty"><div className="ornament">✦</div><SectionHeading center eyebrow="Pripravujeme" title="Prvé overené skúsenosti doplníme čoskoro" text="Nevytvárame anonymné ani vymyslené referencie. Každá publikovaná skúsenosť bude pochádzať od skutočného klienta a bude zverejnená so súhlasom." /></section><CTA /></>;
}
