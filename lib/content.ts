export const contact = {
  phoneDisplay: "+421 917 072 074",
  phone: "+421917072074",
  email: "info@reviqa.sk",
  address: "Hitschova 2, 058 01 Poprad",
  whatsapp:
    "https://wa.me/421917072074?text=Dobr%C3%BD%20de%C5%88%2C%20m%C3%A1m%20z%C3%A1ujem%20o%20vstupn%C3%BA%20konzult%C3%A1ciu%20v%20REVIQA.",
};

export const services = [
  {
    slug: "vstupna-diagnostika",
    short: "Diagnostika",
    title: "Vstupná diagnostika a individuálna starostlivosť",
    eyebrow: "Najprv porozumenie",
    intro:
      "Komplexný úvodný rozhovor, funkčné zhodnotenie a návrh individuálnej cesty regenerácie podľa potrieb, cieľov a aktuálneho stavu klienta.",
    image: "/assets/reviqa-philosophy.jpeg",
    duration: "120 minút pri úvodnom vyšetrení",
    price: "od 165 €",
    process: [
      "Rozhovor o zdravotnej histórii, životnom štýle a cieľoch.",
      "Funkčné zhodnotenie pohybového systému a súvislostí.",
      "Návrh individuálneho plánu a odporúčaného poradia terapií.",
    ],
    benefits: ["jasnejší obraz o potrebách tela", "individuálny plán", "nadväzujúca starostlivosť"],
    audience: "Pre dospelých aj deti po individuálnom zhodnotení.",
  },
  {
    slug: "hyperbaricka-oxygenoterapia",
    short: "HBOT",
    title: "Hyperbarická oxygenoterapia (HBOT)",
    eyebrow: "Podpora okysličenia",
    intro:
      "Kontrolovaný pobyt v hyperbarickej komore so zvýšeným tlakom a prísunom kyslíka. Vhodnosť a priebeh sa vždy nastavujú individuálne.",
    image: "/assets/therapy-hbot.jpeg",
    duration: "približne 60 minút",
    price: "od 50 €",
    process: [
      "Úvodné posúdenie vhodnosti a vysvetlenie priebehu.",
      "Pokojný pobyt v komore podľa nastaveného protokolu.",
      "Zhodnotenie reakcie a odporúčanie ďalšieho postupu.",
    ],
    benefits: ["podpora regenerácie", "podpora vitality", "súčasť individuálneho plánu"],
    audience: "Pre klientov, pri ktorých odborné posúdenie potvrdí vhodnosť terapie.",
  },
  {
    slug: "molekularny-vodik",
    short: "H₂ terapia",
    title: "Molekulárna vodíková terapia",
    eyebrow: "Regenerácia na bunkovej úrovni",
    intro:
      "Molekulárny vodík začleňujeme do personalizovaných regeneračných plánov. Konkrétnu formu a frekvenciu nastavujeme až po konzultácii.",
    image: "/assets/therapy-hydrogen.jpeg",
    duration: "podľa individuálneho protokolu",
    price: "na základe plánu",
    process: [
      "Posúdenie cieľov a vhodnosti v kontexte celého programu.",
      "Nastavenie formy terapie a odporúčanej frekvencie.",
      "Priebežné sledovanie a úprava individuálneho plánu.",
    ],
    benefits: ["podpora vitality", "regeneračný režim", "personalizované využitie"],
    audience: "Pre klientov hľadajúcich doplnkovú podporu regenerácie a vitality.",
  },
  {
    slug: "fotobiomodulacia",
    short: "Svetelná terapia",
    title: "Fotobiomodulácia",
    eyebrow: "Veda svetla. Energia života.",
    intro:
      "Neinvazívna práca s vybranými vlnovými dĺžkami červeného a blízkeho infračerveného svetla v rámci individuálneho regeneračného plánu.",
    image: "/assets/therapy-pbm.jpeg",
    duration: "podľa zvolenej oblasti a protokolu",
    price: "na základe plánu",
    process: [
      "Výber cieľovej oblasti a nastavenie protokolu.",
      "Pokojná aplikácia svetla bez invazívneho zásahu.",
      "Vyhodnotenie priebehu v rámci série stretnutí.",
    ],
    benefits: ["podpora prirodzených procesov", "súčasť regenerácie", "neinvazívny prístup"],
    audience: "Pre dospelých aj deti, ak je terapia po odbornom posúdení vhodná.",
  },
  {
    slug: "chiromanualne-terapie",
    short: "Chiromanuálne terapie",
    title: "Chiromanuálne a regeneračné terapie",
    eyebrow: "Pohyb, nervový systém, súvislosti",
    intro:
      "Personalizovaná manuálna starostlivosť zameraná na pohybový aparát, mäkké tkanivá a funkčné súvislosti celého organizmu.",
    image: "/assets/therapy-regeneration.jpeg",
    duration: "90 minút pri nadväzujúcom stretnutí",
    price: "od 155 €",
    process: [
      "Funkčné vyšetrenie a rozhovor o aktuálnych ťažkostiach.",
      "Výber primeraných manuálnych techník.",
      "Odporúčanie ďalších krokov a domáceho režimu.",
    ],
    benefits: ["podpora pohyblivosti", "uvoľnenie napätia", "individuálny prístup"],
    audience: "Pre klientov s pohybovým diskomfortom alebo potrebou cielenej regenerácie.",
  },
  {
    slug: "doplnkove-terapie",
    short: "Doplnkové terapie",
    title: "Doplnkové regeneračné terapie",
    eyebrow: "Starostlivosť zostavená na mieru",
    intro:
      "Podľa potrieb kombinujeme mäkké a fasciálne techniky, Dornovu metódu, lymfodrenáž, bankovanie, kineziotaping a trigger-point prístup.",
    image: "/assets/center-building.jpeg",
    duration: "podľa zvoleného postupu",
    price: "individuálne",
    process: [
      "Určenie cieľa stretnutia a vhodnej kombinácie techník.",
      "Cielená terapia s ohľadom na toleranciu klienta.",
      "Zaradenie do širšieho regeneračného programu, ak je to vhodné.",
    ],
    benefits: ["cielená starostlivosť", "podpora komfortu", "kombinácia podľa potreby"],
    audience: "Pre klientov, ktorým individuálny plán odporučí doplnkovú manuálnu starostlivosť.",
  },
] as const;

export const programs = [
  { name: "RESET", price: "305 €", note: "Prvý krok smerom k regenerácii", items: ["2 individuálne stretnutia", "individuálny plán starostlivosti", "možnosť HBOT podľa plánu"] },
  { name: "RESTORE", price: "455 €", note: "Návrat k tomu, čo máte radi", items: ["3 individuálne stretnutia", "individuálny plán starostlivosti", "možnosť HBOT podľa plánu"] },
  { name: "REGENERATE", price: "755 €", note: "Obnova sily a vitality", items: ["5 individuálnych stretnutí", "individuálny plán starostlivosti", "HBOT podľa individuálneho plánu"] },
  { name: "LONGEVITY", price: "1 495 €", note: "Objavujeme čas", items: ["10 individuálnych stretnutí", "komplexný dlhodobý plán", "priebežné hodnotenie a optimalizácia"] },
] as const;

export const faqs = [
  ["Ako prebieha prvá návšteva?", "Začíname rozhovorom, zhodnotením potrieb a cieľov. Následne navrhneme individuálny plán a vysvetlíme odporúčaný postup."],
  ["Je potrebné objednať sa vopred?", "Áno. REVIQA funguje na objednávku, aby sme každému klientovi zabezpečili dostatok času, súkromie a pokojný priebeh návštevy."],
  ["Je centrum vhodné aj pre deti?", "Áno, centrum pracuje aj s deťmi. Vhodnosť konkrétneho postupu sa vždy posudzuje individuálne a návšteva dieťaťa prebieha so zákonným zástupcom."],
  ["Ako dlho trvá návšteva?", "Úvodné komplexné vyšetrenie trvá približne 120 minút. Nadväzujúce stretnutie približne 90 minút a HBOT približne 60 minút."],
  ["Môžem kombinovať viaceré terapie?", "Áno, ak je to vhodné. Kombinácie a poradie terapií navrhujeme podľa individuálneho plánu, nie podľa univerzálneho balíka."],
  ["Ako zistím, či je terapia pre mňa vhodná?", "Pred začiatkom preberieme váš zdravotný stav, liečbu a možné obmedzenia. O vhodnosti konkrétneho postupu rozhoduje odborné posúdenie."],
  ["Kde môžem zaparkovať?", "Parkovanie je dostupné priamo v objekte centra na adrese Hitschova 2 v Poprade."],
  ["Dá sa objednať aj mimo otváracích hodín?", "Áno. Mimo bežných hodín a počas víkendu je možné dohodnúť termín podľa potreby a dostupnosti."],
] as const;

export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
