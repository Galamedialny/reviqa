export const supportedLocales = ["sk", "en"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

export const englishRoutes: Record<string, string> = {
  "/": "/en/",
  "/o-nas/": "/en/about/",
  "/nas-tim/": "/en/our-team/",
  "/sluzby/": "/en/therapies/",
  "/metoda-reviqa/": "/en/reviqa-method/",
  "/programy-cennik/": "/en/programmes-pricing/",
  "/blog/": "/en/blog/",
  "/kontakt/": "/en/contact/",
  "/faq/": "/en/faq/",
  "/referencie/": "/en/testimonials/",
  "/galeria/": "/en/gallery/",
  "/ochrana-osobnych-udajov/": "/en/privacy/",
  "/cookies/": "/en/cookies/",
};

export const serviceSlugMap: Record<string, string> = {
  "hyperbaricka-oxygenoterapia": "hyperbaric-oxygen-therapy",
  "molekularny-vodik": "molecular-hydrogen-therapy",
  "molekularny-kyslik": "molecular-oxygen-therapy",
  fotobiomodulacia: "photobiomodulation",
  "chiromanualne-terapie": "chiro-neurogenic-manual-therapy",
  "fyzioterapeuticke-poradenstvo": "physio-regenerative-guidance",
};

const reverseEnglishRoutes = Object.fromEntries(
  Object.entries(englishRoutes).map(([sk, en]) => [en, sk]),
);
const reverseServiceSlugMap = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([sk, en]) => [en, sk]),
);

function normalise(pathname: string) {
  const clean = pathname.split("?")[0].split("#")[0];
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function toEnglishPath(pathname: string) {
  const path = normalise(pathname);
  const serviceMatch = path.match(/^\/sluzby\/([^/]+)\/$/);
  if (serviceMatch) {
    const translated = serviceSlugMap[serviceMatch[1]];
    return translated ? `/en/therapies/${translated}/` : "/en/therapies/";
  }
  return englishRoutes[path] ?? "/en/";
}

export function toSlovakPath(pathname: string) {
  const path = normalise(pathname);
  const serviceMatch = path.match(/^\/en\/therapies\/([^/]+)\/$/);
  if (serviceMatch) {
    const translated = reverseServiceSlugMap[serviceMatch[1]];
    return translated ? `/sluzby/${translated}/` : "/sluzby/";
  }
  return reverseEnglishRoutes[path] ?? "/";
}

export function englishPathForSlovakPath(path: string) {
  return toEnglishPath(path || "/");
}

export function slovakServiceSlugForEnglish(slug: string) {
  return reverseServiceSlugMap[slug];
}
