import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "REVIQA Biomedica",
    short_name: "REVIQA",
    description: "Súkromné regeneračné centrum v Poprade.",
    start_url: "/",
    display: "standalone",
    background_color: "#eceeec",
    theme_color: "#eceeec",
    icons: [{ src: "/assets/reviqa-logo-header.png", sizes: "1450x700", type: "image/png" }],
  };
}
