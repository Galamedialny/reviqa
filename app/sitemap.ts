import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { servicesEn } from "@/lib/content-en";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.reviqa.sk";
  const routes = ["", "/o-nas", "/nas-tim", "/metoda-reviqa", "/sluzby", "/programy-cennik", "/galeria", "/faq", "/referencie", "/blog", "/kontakt"];
  const englishRoutes = ["", "/about", "/our-team", "/reviqa-method", "/therapies", "/programmes-pricing", "/gallery", "/faq", "/testimonials", "/blog", "/contact"];
  return [
    ...routes.map((route, i) => ({ url: route ? `${base}${route}/` : `${base}/`, changeFrequency: i === 0 ? "weekly" as const : "monthly" as const, priority: i === 0 ? 1 : .7 })),
    ...services.map(({ slug }) => ({ url: `${base}/sluzby/${slug}/`, changeFrequency: "monthly" as const, priority: .8 })),
    ...englishRoutes.map((route, i) => ({ url: route ? `${base}/en${route}/` : `${base}/en/`, changeFrequency: i === 0 ? "weekly" as const : "monthly" as const, priority: i === 0 ? .9 : .7 })),
    ...servicesEn.map(({ slug }) => ({ url: `${base}/en/therapies/${slug}/`, changeFrequency: "monthly" as const, priority: .8 })),
  ];
}
