import type { MetadataRoute } from "next";
import { services } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.reviqa.sk";
  const routes = ["", "/o-nas", "/nas-tim", "/metoda-reviqa", "/sluzby", "/programy-cennik", "/galeria", "/faq", "/referencie", "/blog", "/kontakt"];
  return [
    ...routes.map((route, i) => ({ url: route ? `${base}${route}/` : `${base}/`, changeFrequency: i === 0 ? "weekly" as const : "monthly" as const, priority: i === 0 ? 1 : .7 })),
    ...services.map(({ slug }) => ({ url: `${base}/sluzby/${slug}/`, changeFrequency: "monthly" as const, priority: .8 })),
  ];
}
