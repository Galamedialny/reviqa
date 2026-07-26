export const supportedLocales = ["sk", "en", "de", "pl", "ru"] as const;
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

export const germanRoutes: Record<string, string> = {
  "/": "/de/",
  "/o-nas/": "/de/ueber-uns/",
  "/nas-tim/": "/de/unser-team/",
  "/sluzby/": "/de/therapien/",
  "/metoda-reviqa/": "/de/reviqa-methode/",
  "/programy-cennik/": "/de/programme-preise/",
  "/blog/": "/de/blog/",
  "/kontakt/": "/de/kontakt/",
  "/faq/": "/de/haeufige-fragen/",
  "/referencie/": "/de/erfahrungen/",
  "/galeria/": "/de/galerie/",
  "/ochrana-osobnych-udajov/": "/de/datenschutz/",
  "/cookies/": "/de/cookies/",
};

export const germanServiceSlugMap: Record<string, string> = {
  "hyperbaricka-oxygenoterapia": "hyperbare-sauerstofftherapie",
  "molekularny-vodik": "molekulare-wasserstofftherapie",
  "molekularny-kyslik": "molekulare-sauerstofftherapie",
  fotobiomodulacia: "photobiomodulation",
  "chiromanualne-terapie": "chironeurogene-manuelle-therapie",
  "fyzioterapeuticke-poradenstvo": "physio-regenerative-beratung",
};

export const polishRoutes: Record<string, string> = {
  "/": "/pl/",
  "/o-nas/": "/pl/o-nas/",
  "/nas-tim/": "/pl/nasz-zespol/",
  "/sluzby/": "/pl/terapie/",
  "/metoda-reviqa/": "/pl/metoda-reviqa/",
  "/programy-cennik/": "/pl/programy-cennik/",
  "/blog/": "/pl/blog/",
  "/kontakt/": "/pl/kontakt/",
  "/faq/": "/pl/faq/",
  "/referencie/": "/pl/opinie/",
  "/galeria/": "/pl/galeria/",
  "/ochrana-osobnych-udajov/": "/pl/ochrona-danych/",
  "/cookies/": "/pl/cookies/",
};

export const polishServiceSlugMap: Record<string, string> = {
  "hyperbaricka-oxygenoterapia": "tlenoterapia-hiperbaryczna",
  "molekularny-vodik": "terapia-wodorem-molekularnym",
  "molekularny-kyslik": "terapia-tlenem-molekularnym",
  fotobiomodulacia: "fotobiomodulacja",
  "chiromanualne-terapie": "chironeurogenna-terapia-manualna",
  "fyzioterapeuticke-poradenstvo": "doradztwo-fizjoregeneracyjne",
};

export const russianRoutes: Record<string, string> = {
  "/": "/ru/",
  "/o-nas/": "/ru/o-nas/",
  "/nas-tim/": "/ru/nasha-komanda/",
  "/sluzby/": "/ru/terapii/",
  "/metoda-reviqa/": "/ru/metod-reviqa/",
  "/programy-cennik/": "/ru/programmy-ceny/",
  "/blog/": "/ru/blog/",
  "/kontakt/": "/ru/kontakty/",
  "/faq/": "/ru/faq/",
  "/referencie/": "/ru/otzyvy/",
  "/galeria/": "/ru/galereya/",
  "/ochrana-osobnych-udajov/": "/ru/zashchita-dannyh/",
  "/cookies/": "/ru/cookies/",
};

export const russianServiceSlugMap: Record<string, string> = {
  "hyperbaricka-oxygenoterapia": "giperbaricheskaya-oksigenoterapiya",
  "molekularny-vodik": "terapiya-molekulyarnym-vodorodom",
  "molekularny-kyslik": "terapiya-molekulyarnym-kislorodom",
  fotobiomodulacia: "fotobiomodulyatsiya",
  "chiromanualne-terapie": "hironeirogennaya-manualnaya-terapiya",
  "fyzioterapeuticke-poradenstvo": "fizio-regeneracionnoe-konsultirovanie",
};

const reverseEnglishRoutes = Object.fromEntries(
  Object.entries(englishRoutes).map(([sk, en]) => [en, sk]),
);
const reverseServiceSlugMap = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([sk, en]) => [en, sk]),
);
const reverseGermanRoutes = Object.fromEntries(
  Object.entries(germanRoutes).map(([sk, de]) => [de, sk]),
);
const reverseGermanServiceSlugMap = Object.fromEntries(
  Object.entries(germanServiceSlugMap).map(([sk, de]) => [de, sk]),
);
const reversePolishRoutes = Object.fromEntries(
  Object.entries(polishRoutes).map(([sk, pl]) => [pl, sk]),
);
const reversePolishServiceSlugMap = Object.fromEntries(
  Object.entries(polishServiceSlugMap).map(([sk, pl]) => [pl, sk]),
);
const reverseRussianRoutes = Object.fromEntries(
  Object.entries(russianRoutes).map(([sk, ru]) => [ru, sk]),
);
const reverseRussianServiceSlugMap = Object.fromEntries(
  Object.entries(russianServiceSlugMap).map(([sk, ru]) => [ru, sk]),
);

function normalise(pathname: string) {
  const clean = pathname.split("?")[0].split("#")[0];
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function toEnglishPath(pathname: string) {
  const path = toSlovakPath(pathname);
  const serviceMatch = path.match(/^\/sluzby\/([^/]+)\/$/);
  if (serviceMatch) {
    const translated = serviceSlugMap[serviceMatch[1]];
    return translated ? `/en/therapies/${translated}/` : "/en/therapies/";
  }
  return englishRoutes[path] ?? "/en/";
}

export function toSlovakPath(pathname: string) {
  const path = normalise(pathname);
  if (path.match(/^\/sluzby\/[^/]+\/$/)) return path;
  const serviceMatch = path.match(/^\/en\/therapies\/([^/]+)\/$/);
  if (serviceMatch) {
    const translated = reverseServiceSlugMap[serviceMatch[1]];
    return translated ? `/sluzby/${translated}/` : "/sluzby/";
  }
  const germanServiceMatch = path.match(/^\/de\/therapien\/([^/]+)\/$/);
  if (germanServiceMatch) {
    const translated = reverseGermanServiceSlugMap[germanServiceMatch[1]];
    return translated ? `/sluzby/${translated}/` : "/sluzby/";
  }
  const polishServiceMatch = path.match(/^\/pl\/terapie\/([^/]+)\/$/);
  if (polishServiceMatch) {
    const translated = reversePolishServiceSlugMap[polishServiceMatch[1]];
    return translated ? `/sluzby/${translated}/` : "/sluzby/";
  }
  const russianServiceMatch = path.match(/^\/ru\/terapii\/([^/]+)\/$/);
  if (russianServiceMatch) {
    const translated = reverseRussianServiceSlugMap[russianServiceMatch[1]];
    return translated ? `/sluzby/${translated}/` : "/sluzby/";
  }
  if (reverseGermanRoutes[path]) return reverseGermanRoutes[path];
  if (reversePolishRoutes[path]) return reversePolishRoutes[path];
  if (reverseRussianRoutes[path]) return reverseRussianRoutes[path];
  if (Object.prototype.hasOwnProperty.call(englishRoutes, path)) return path;
  return reverseEnglishRoutes[path] ?? "/";
}

export function toGermanPath(pathname: string) {
  const path = toSlovakPath(pathname);
  const serviceMatch = path.match(/^\/sluzby\/([^/]+)\/$/);
  if (serviceMatch) {
    const translated = germanServiceSlugMap[serviceMatch[1]];
    return translated ? `/de/therapien/${translated}/` : "/de/therapien/";
  }
  return germanRoutes[path] ?? "/de/";
}

export function toPolishPath(pathname: string) {
  const path = toSlovakPath(pathname);
  const serviceMatch = path.match(/^\/sluzby\/([^/]+)\/$/);
  if (serviceMatch) {
    const translated = polishServiceSlugMap[serviceMatch[1]];
    return translated ? `/pl/terapie/${translated}/` : "/pl/terapie/";
  }
  return polishRoutes[path] ?? "/pl/";
}

export function toRussianPath(pathname: string) {
  const path = toSlovakPath(pathname);
  const serviceMatch = path.match(/^\/sluzby\/([^/]+)\/$/);
  if (serviceMatch) {
    const translated = russianServiceSlugMap[serviceMatch[1]];
    return translated ? `/ru/terapii/${translated}/` : "/ru/terapii/";
  }
  return russianRoutes[path] ?? "/ru/";
}

export function englishPathForSlovakPath(path: string) {
  return toEnglishPath(path || "/");
}

export function slovakServiceSlugForEnglish(slug: string) {
  return reverseServiceSlugMap[slug];
}

export function germanPathForSlovakPath(path: string) {
  return toGermanPath(path || "/");
}

export function polishPathForSlovakPath(path: string) {
  return toPolishPath(path || "/");
}

export function russianPathForSlovakPath(path: string) {
  return toRussianPath(path || "/");
}
