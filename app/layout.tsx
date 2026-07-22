import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { StructuredData } from "@/components/StructuredData";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const githubPreview = process.env.GITHUB_ACTIONS === "true" && process.env.CUSTOM_DOMAIN !== "true";
const siteUrl = githubPreview ? "https://galamedialny.github.io/reviqa" : "https://www.reviqa.sk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "REVIQA | Súkromné regeneračné centrum Poprad", template: "%s | REVIQA" },
  description: "REVIQA je súkromné regeneračné centrum v Poprade. Individuálna starostlivosť, HBOT, molekulárny vodík, fotobiomodulácia a regeneračné terapie.",
  keywords: ["REVIQA", "regeneračné centrum Poprad", "HBOT Poprad", "hyperbarická oxygenoterapia", "molekulárny vodík", "fotobiomodulácia", "regenerácia Tatry"],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: { title: "REVIQA – Vaše telo. Vaša budúcnosť. Naša veda.", description: "Súkromné regeneračné centrum v Poprade s individuálnym prístupom.", type: "website", locale: "sk_SK", siteName: SITE_NAME, url: siteUrl, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "REVIQA Biomedica – súkromné regeneračné centrum v Poprade" }] },
  twitter: { card: "summary_large_image", title: "REVIQA – Vaše telo. Vaša budúcnosť. Naša veda.", description: "Súkromné regeneračné centrum v Poprade.", images: [OG_IMAGE] },
  icons: { icon: "/assets/reviqa-logo-header.png", shortcut: "/assets/reviqa-logo-header.png", apple: "/assets/reviqa-logo-header.png" },
  manifest: "/manifest.webmanifest",
  formatDetection: { email: false, address: false, telephone: false },
  robots: githubPreview ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const globalStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    alternateName: "REVIQA",
    inLanguage: "sk-SK",
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "REVIQA",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/assets/reviqa-logo-header.png`,
    image: OG_IMAGE,
    description: "Súkromné regeneračné centrum v Poprade s individuálnym prístupom k pohybu, regenerácii a dlhodobej vitalite.",
    telephone: "+421917072074",
    email: "info@reviqa.sk",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hitschova 5022/2",
      postalCode: "058 01",
      addressLocality: "Poprad",
      addressCountry: "SK",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "12:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "13:00", closes: "15:00" },
    ],
    founder: { "@type": "Person", name: "Radovan Foltinský, MSc, MEd, CertMgmt (Open)" },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Reviqa%20Biomedica%2C%20Hitschova%205022%2F2%2C%20058%2001%20Poprad%2C%20Slovakia",
    areaServed: [{ "@type": "Country", name: "Slovakia" }, { "@type": "Place", name: "International" }],
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body><StructuredData data={globalStructuredData} /><SiteShell>{children}</SiteShell></body></html>;
}
