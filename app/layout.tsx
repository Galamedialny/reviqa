import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const githubPreview = process.env.GITHUB_ACTIONS === "true" && process.env.CUSTOM_DOMAIN !== "true";
const siteUrl = githubPreview ? "https://galamedialny.github.io/reviqa" : "https://www.reviqa.sk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "REVIQA | Súkromné regeneračné centrum Poprad", template: "%s | REVIQA" },
  description: "REVIQA je súkromné regeneračné centrum v Poprade. Individuálna starostlivosť, HBOT, molekulárny vodík, fotobiomodulácia a regeneračné terapie.",
  keywords: ["REVIQA", "regeneračné centrum Poprad", "HBOT Poprad", "hyperbarická oxygenoterapia", "molekulárny vodík", "fotobiomodulácia", "regenerácia Tatry"],
  openGraph: { title: "REVIQA – Vaše telo. Vaša budúcnosť. Naša veda.", description: "Súkromné regeneračné centrum v Poprade s individuálnym prístupom.", type: "website", locale: "sk_SK", siteName: "REVIQA", url: siteUrl, images: [{ url: `${siteUrl}/og.png`, width: 1731, height: 909, alt: "REVIQA Biomedica – súkromné regeneračné centrum" }] },
  twitter: { card: "summary_large_image", title: "REVIQA – Vaše telo. Vaša budúcnosť. Naša veda.", description: "Súkromné regeneračné centrum v Poprade.", images: [`${siteUrl}/og.png`] },
  icons: { icon: "/assets/reviqa-logo-transparent.png", shortcut: "/assets/reviqa-logo-transparent.png" },
  robots: githubPreview ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body><SiteShell>{children}</SiteShell></body></html>;
}
