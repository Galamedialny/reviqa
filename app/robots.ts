import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const preview = process.env.GITHUB_ACTIONS === "true";
  return preview
    ? { rules: { userAgent: "*", disallow: "/" } }
    : { rules: { userAgent: "*", allow: "/" }, sitemap: "https://www.reviqa.sk/sitemap.xml" };
}
