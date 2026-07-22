import type { Metadata } from "next";

export const SITE_NAME = "REVIQA Biomedica";
export const SITE_URL = "https://www.reviqa.sk";
export const OG_IMAGE = `${SITE_URL}/og-reviqa.png`;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function createPageMetadata({ title, description, path, noIndex = false }: PageSeo): Metadata {
  const canonicalPath = path ? `${path.replace(/\/$/, "")}/` : "/";
  const url = `${SITE_URL}${canonicalPath}`;
  const socialTitle = `${title} | REVIQA`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "sk_SK",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "REVIQA Biomedica – súkromné regeneračné centrum v Poprade" }],
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [OG_IMAGE] },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  };
}
