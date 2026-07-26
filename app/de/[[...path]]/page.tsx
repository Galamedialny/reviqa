import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/StructuredData";
import { asset } from "@/lib/content";
import {
  contactDe,
  faqsDe,
  servicesDe,
  type GermanService,
} from "@/lib/content-de";
import {
  toEnglishPath,
  toPolishPath,
  toRussianPath,
  toSlovakPath,
} from "@/lib/i18n";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const staticPaths = [
  [],
  ["ueber-uns"],
  ["unser-team"],
  ["therapien"],
  ["reviqa-methode"],
  ["programme-preise"],
  ["galerie"],
  ["haeufige-fragen"],
  ["erfahrungen"],
  ["blog"],
  ["kontakt"],
  ["datenschutz"],
  ["cookies"],
];

export function generateStaticParams() {
  return [
    ...staticPaths.map((path) => ({ path })),
    ...servicesDe.map((service) => ({ path: ["therapien", service.slug] })),
  ];
}

const pageSeo: Record<string, [string, string]> = {
  "": [
    "REVIQA Biomedica | Privates Regenerationszentrum in der Slowakei",
    "Individuelle Regeneration, HBOT, molekularer Wasserstoff und Sauerstoff, Photobiomodulation und manuelle Therapien in Poprad.",
  ],
  "ueber-uns": [
    "Über REVIQA – Philosophie und Zentrum",
    "Lernen Sie die Philosophie, den fachlichen Hintergrund und die private Umgebung von REVIQA Biomedica kennen.",
  ],
  "unser-team": [
    "Unser Team und fachlicher Hintergrund",
    "Lernen Sie Gründer Radovan Foltinský und die medizinische Consulting Partnerin Dr. med. univ. Alexandra Foltinská kennen.",
  ],
  therapien: [
    "Regenerative Therapien",
    "HBOT, molekularer Wasserstoff und Sauerstoff, Photobiomodulation, chironeurogene Therapie und physio-regenerative Beratung.",
  ],
  "reviqa-methode": [
    "Die REVIQA Method – fünf Schritte personalisierter Regeneration",
    "Von der Entdeckung und Beurteilung bis zur langfristigen Optimierung.",
  ],
  "programme-preise": [
    "Programme und Preise",
    "Preise für das personalisierte REVIQA Method Protokoll, HBOT und individuelle Regenerationsprogramme.",
  ],
  galerie: [
    "Galerie des REVIQA Zentrums",
    "Reale Aufnahmen des privaten, barrierefreien REVIQA Zentrums und seines Gartens in Poprad.",
  ],
  "haeufige-fragen": [
    "Häufig gestellte Fragen",
    "Praktische Antworten zum ersten Besuch, zu Therapien, Kindern, Parken und Barrierefreiheit.",
  ],
  erfahrungen: [
    "Erfahrungen und Referenzen",
    "Verifizierte Erfahrungen von Klienten werden mit ihrer Einwilligung veröffentlicht.",
  ],
  blog: [
    "Journal über Regeneration und Longevity",
    "Verständliche, fachlich geprüfte Beiträge zu HBOT, Wasserstoff, Licht, Bewegung und Langlebigkeit.",
  ],
  kontakt: [
    "Kontakt und Terminvereinbarung",
    "Kontaktieren Sie REVIQA Biomedica in der Hitschova 5022/2 in Poprad per Telefon, E-Mail oder WhatsApp.",
  ],
  datenschutz: [
    "Datenschutzerklärung",
    "Informationen zur Verarbeitung personenbezogener Daten auf der Website von REVIQA Biomedica.",
  ],
  cookies: [
    "Cookie-Richtlinie",
    "Informationen über Cookies und externe Dienste auf der Website von REVIQA Biomedica.",
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}): Promise<Metadata> {
  const { path = [] } = await params;
  const service =
    path[0] === "therapien" && path[1]
      ? servicesDe.find((item) => item.slug === path[1])
      : undefined;
  const [title, description] = service
    ? [service.title, service.intro]
    : (pageSeo[path.join("/")] ?? pageSeo[""]);
  const route = path.length ? `/de/${path.join("/")}/` : "/de/";
  const url = `${SITE_URL}${route}`;
  const slovakPath = service
    ? `/sluzby/${service.slovakSlug}/`
    : toSlovakPath(route);
  const slovakUrl = `${SITE_URL}${slovakPath}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        de: url,
        sk: slovakUrl,
        en: `${SITE_URL}${toEnglishPath(slovakPath)}`,
        pl: `${SITE_URL}${toPolishPath(slovakPath)}`,
        ru: `${SITE_URL}${toRussianPath(slovakPath)}`,
        "x-default": slovakUrl,
      },
    },
    openGraph: {
      title: `${title} | REVIQA`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "REVIQA Biomedica – privates Regenerationszentrum in der Slowakei",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | REVIQA`,
      description,
      images: [OG_IMAGE],
    },
    robots:
      path[0] === "datenschutz" || path[0] === "cookies"
        ? { index: false, follow: true }
        : { index: true, follow: true },
  };
}

function Hero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: React.ReactNode;
  image?: string;
}) {
  return (
    <section
      className="page-hero"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(90deg, rgba(239,240,238,.97), rgba(239,240,238,.68)), url('${asset(image)}')`,
            }
          : undefined
      }
    >
      <div className="shell narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function Heading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "section-heading center" : "section-heading"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function MedicalNotice() {
  return (
    <div className="medical-note">
      <b>Wichtiger Hinweis</b>
      <p>
        Die Informationen auf dieser Website dienen der allgemeinen
        Orientierung. Sie ersetzen weder eine ärztliche Diagnose noch eine
        Behandlung. Eignung und mögliche Kontraindikationen werden vor Beginn
        individuell beurteilt.
      </p>
    </div>
  );
}

function CTA() {
  return (
    <section className="cta-band">
      <div className="shell">
        <div>
          <span className="eyebrow">Ihr erster Schritt</span>
          <h2>Termin vereinbaren</h2>
          <p>
            Ein strukturiertes Gespräch, eine Erstbeurteilung und eine
            individuelle Empfehlung für die nächsten Schritte.
          </p>
        </div>
        <div className="cta-actions">
          <a
            className="gold-button"
            href={contactDe.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Über WhatsApp schreiben
          </a>
          <a className="ghost-button" href={`tel:${contactDe.phone}`}>
            Anrufen {contactDe.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceGrid({ limit }: { limit?: number }) {
  return (
    <div className="service-grid">
      {servicesDe.slice(0, limit ?? servicesDe.length).map((service, i) => (
        <article className="service-card" key={service.slug}>
          <div className="service-image">
            <img
              src={asset(service.image)}
              alt={`Illustration: ${service.title}`}
            />
            <span>Symbolbild</span>
          </div>
          <div className="service-body">
            <small>0{i + 1}</small>
            <h3>{service.title}</h3>
            <p>{service.intro}</p>
            <Link href={`/de/therapien/${service.slug}`}>
              Mehr erfahren <span>→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function Home() {
  const steps = [
    ["01", "Entdeckung", "Wir hören Ihre Geschichte und Ziele."],
    ["02", "Beurteilung", "Wir erkennen Muster und Zusammenhänge."],
    ["03", "Reset", "Wir wählen erste Schritte und Therapien."],
    [
      "04",
      "Wiederherstellung",
      "Wir kombinieren geeignete Methoden und Technologien.",
    ],
    [
      "05",
      "Erhaltung",
      "Wir begleiten Fortschritt und langfristige Vitalität.",
    ],
  ];
  return (
    <>
      <section className="home-hero home-hero-founder">
        <img
          className="hero-bg"
          src={asset("/assets/radovan-hero-mobile-v2.png")}
          alt="Radovan Foltinský, Gründer von REVIQA Biomedica"
        />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <div className="hero-kicker"><span>Private Regeneration &amp; Longevity Center</span><em>Boutique Regeneration Experience</em></div>
          <h1>
            Ihr Körper.
            <br />
            <em>Ihre Zukunft.</em>
            <br />
            Unsere Wissenschaft.
          </h1>
          <span className="hero-divider" />
          <p>
            Wir verbinden Biomechanik, moderne Regenerationstechnologien und
            individuelle Betreuung zur Unterstützung natürlicher Regeneration und langfristiger Gesundheit.
          </p>
          <div className="hero-actions">
            <a
              className="gold-button hero-primary"
              href={contactDe.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <span>Termin vereinbaren</span>
              <span>→</span>
            </a>
          </div>
        </div>
        <div className="hero-facts shell">
          <div>
            <b>01</b>
            <span>Individueller Ansatz</span>
          </div>
          <div>
            <b>02</b>
            <span>Wissenschaft und Technologie</span>
          </div>
          <div>
            <b>03</b>
            <span>Regeneration und Langlebigkeit</span>
          </div>
          <div>
            <b>04</b>
            <span>Gesundheit als Priorität</span>
          </div>
        </div>
      </section>
      <section className="intro-section section shell home-story-grid">
        <article className="home-story-copy">
          <Heading eyebrow="Warum REVIQA" title="Regeneration beginnt mit Verständnis." text="Echte Regeneration beginnt nicht mit einer Therapie, sondern mit dem Verständnis des Menschen. Wir suchen nach funktionellen Zusammenhängen, die Bewegung, Nervensystem und das Gleichgewicht des Organismus beeinflussen." />
          <Link className="outline-link" href="/de/ueber-uns">Mehr erfahren</Link>
        </article>
        <article className="home-story-visual">
          <img src={asset("/assets/center-building-corrected.jpg")} alt="Privates REVIQA Biomedica Zentrum in Poprad" />
          <div><span className="eyebrow">Individuelle Betreuung</span><h2>Ein Mensch. Eine Geschichte. Ein Plan.</h2><p>Sie wählen keine Einzeltherapien. Gemeinsam erstellen wir ein personalisiertes Regenerationsprotokoll nach Ihrem Zustand, Ihren Bedürfnissen und langfristigen Zielen.</p><Link href="/de/reviqa-methode">Unsere Methode kennenlernen →</Link></div>
        </article>
        <aside className="intro-consult-card consultation-without-portrait">
          <span className="eyebrow">Persönliche Beratung</span>
          <h2>Beginnen wir mit einem Gespräch</h2>
          <p>Der erste Schritt ist ein ruhiges Gespräch und eine funktionelle Beurteilung. Darauf aufbauend empfehlen wir das weitere Vorgehen.</p>
          <div className="consult-person"><strong>Radovan Foltinský</strong><small>MSc, MEd, CertMGMT (Open)</small><span>FOUNDER – akkreditierter Spezialist</span></div>
          <a href={contactDe.whatsapp} target="_blank" rel="noreferrer">Termin vereinbaren</a>
        </aside>
      </section>
      <section className="freedom-section shell">
        <img
          src={asset("/assets/home-freedom-family.jpg")}
          alt="Aktive Familie unter der Tatra"
        />
        <div className="freedom-shade" />
        <div className="freedom-content">
          <span className="eyebrow">Ihr Leben. Ihre Prioritäten.</span>
          <h2>Mehr Freiheit für das Leben, das Sie führen möchten</h2>
          <p>
            Regeneration bedeutet nicht nur weniger Beschwerden. Es geht darum,
            sich wieder frei zu bewegen, zu reisen und aktive Zeit mit den
            Menschen zu verbringen, die Ihnen wichtig sind.
          </p>
          <div className="freedom-values">
            <span>Bewegungsfreiheit</span>
            <span>Aktives Leben</span>
            <span>Zeit mit den Liebsten</span>
            <span>Mobilität ohne unnötige Grenzen</span>
          </div>
          <a
            className="gold-button"
            href={contactDe.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Ihre Reise beginnen
          </a>
        </div>
        <blockquote>
          „Es geht nicht nur um die Länge des Lebens, sondern um die Qualität
          jedes einzelnen Tages.“
        </blockquote>
      </section>
      <section className="section services-section">
        <div className="shell">
          <Heading
            center
            eyebrow="Therapien"
            title="Unsere Therapien entdecken"
            text="Kombination, Häufigkeit und Reihenfolge werden immer individuell ausgewählt."
          />
          <ServiceGrid />
        </div>
      </section>
      <section className="method-preview section">
        <div className="shell">
          <Heading
            eyebrow="Die REVIQA Method"
            title="Fünf Schritte personalisierter Regeneration"
          />
        </div>
        <div className="method-steps shell">
          {steps.map(([n, t, p]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <div className="center-action">
          <Link className="gold-button" href="/de/reviqa-methode">
            REVIQA Method entdecken
          </Link>
        </div>
      </section>
      <section className="section shell place-section">
        <div className="place-image">
          <img
            src={asset("/assets/center-garden-1.jpeg")}
            alt="REVIQA Zentrum und Garten in Poprad"
          />
        </div>
        <div>
          <Heading
            eyebrow="Ein Ort zum Ankommen"
            title="Ruhiges Zentrum unter der Tatra"
            text="Eine barrierefreie moderne Umgebung mit Privatsphäre, Garten und Parkplätzen direkt am Zentrum."
          />
          <ul className="gold-list">
            <li>Hitschova 5022/2, Poprad – Spišská Sobota</li>
            <li>Parkplätze auf dem Gelände</li>
            <li>Barrierefreier Zugang</li>
            <li>Besuche nach Terminvereinbarung</li>
          </ul>
          <Link className="outline-link" href="/de/galerie">
            Galerie ansehen
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}

function About() {
  return (
    <>
      <Hero
        eyebrow="Über uns"
        title="Ihr Potenzial. Unsere Mission."
        text={
          <>
            Schmerzen, Müdigkeit und dauerhafte Überlastung müssen nicht zur
            neuen Normalität werden. Sie verdienen einen Ort, an dem man Ihnen
            zuhört, Ihren Zustand sorgfältig beurteilt und die Betreuung an Sie
            anpasst.
            <br />
            <br />
            REVIQA Biomedica ist ein privates Regenerations- und
            Longevity-Zentrum in einem modernen Pavillon in ruhiger Umgebung.
          </>
        }
        image="/assets/center-garden-1.jpeg"
      />
      <section className="section shell why-reviqa">
        <div>
          <Heading
            eyebrow="Warum REVIQA"
            title="Regeneration beginnt mit Verständnis."
          />
          <p>Wir glauben, dass echte Regeneration nicht mit einer Therapie, sondern mit dem Verständnis des Menschen beginnt. Deshalb betrachten wir nicht nur den Ort der Beschwerden, sondern suchen nach funktionellen Zusammenhängen, die Bewegung, Nervensystem und das Gleichgewicht des Organismus beeinflussen.</p>
          <span className="hero-divider" aria-hidden="true" />
          <h2>Individuelle Betreuung</h2>
          <h3>REVIQA Method™ | Chironeurogenic System™</h3>
          <p>Unsere eigene Methodik verbindet Biomechanik, neuromyoskelettale manuelle Therapie, physio-regenerative Verfahren und moderne Hightech-Regenerationstechnologien zu einem personalisierten Betreuungssystem.</p>
          <p>Sie wählen keine Einzeltherapien. Nach einer funktionellen Beurteilung erstellen wir gemeinsam ein personalisiertes Regenerationsprotokoll, das Ihre Bedürfnisse, Ihren aktuellen Funktionszustand und Ihre langfristigen Ziele berücksichtigt.</p>
          <p>Jedes Protokoll wird individuell erstellt, weil eine wirklich persönliche Betreuung die Grundlage nachhaltiger Ergebnisse ist.</p>
        </div>
        <div className="framed-image">
          <img
            src={asset("/assets/center-building-corrected.jpg")}
            alt="Moderner REVIQA Pavillon"
          />
        </div>
      </section>
      <section className="section dark-panel">
        <div className="shell">
          <Heading
            center
            eyebrow="Unsere Werte"
            title="Menschlichkeit. Wissenschaft. Technologie."
          />
          <div className="values-grid">
            <article>
              <span>01</span>
              <h3>Individueller Ansatz</h3>
              <p>
                Wir respektieren die einzigartigen Bedürfnisse jedes Klienten.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Diskretion</h3>
              <p>
                Vertrauen und Privatsphäre bilden die Grundlage unserer
                Betreuung.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Fachkompetenz</h3>
              <p>
                Akkreditierte Spezialisten entscheiden mit Wissen, Erfahrung und
                Präzision.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Wissenschaft und Technologie</h3>
              <p>
                Moderne Technologien unterstützen die natürlichen
                Regenerationsprozesse.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section shell">
        <Heading
          center
          eyebrow="Die Menschen hinter REVIQA"
          title="Ein Team, das zuhört"
        />
        <div className="center-action">
          <Link className="gold-button" href="/de/unser-team">
            Unser Team kennenlernen
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}

function Team() {
  return (
    <>
      <Hero
        eyebrow="Unser Team"
        title="Fachwissen mit menschlichem Gesicht"
        text="Persönliche Betreuung, gründliches Verständnis und fachliche Beratung bilden die Grundlage jeder Zusammenarbeit."
      />
      <section className="section shell team-grid">
        <article className="person-card featured">
          <div className="portrait-crop">
            <img
              src={asset("/assets/radovan-foltinsky-portrait-2026.jpeg")}
              alt="Radovan Foltinský"
            />
          </div>
          <div>
            <h2 className="person-name">Radovan Foltinský</h2>
            <p className="person-titles">MSc, MEd, CertMGMT (Open)</p>
            <p className="person-role">
              Founder &amp; Accredited Specialist | REVIQA Biomedica
            </p>
            <p>
              Er war als Topmanager und CEO erfolgreicher Technologieunternehmen
              sowie als Mitglied des AVS-Vorstands tätig. Als Universitätsdozent
              betreute er Doktoranden und wirkte an Entwicklungs- und
              Forschungsprojekten mit. Heute verbindet er seine Management- und
              Hochschulerfahrung mit der Mission, Menschen als akkreditierter
              Spezialist für neuromyoskelettale Systeme zu Kraft, Gesundheit und
              Vitalität zurückzuführen.
            </p>
            <blockquote>
              „Mein Ziel ist ein neuer Standard in privater Regeneration und
              Langlebigkeit – durch die Verbindung von Wissenschaft, Erfahrung
              und personalisierter Betreuung.
              <br />
              <br />
              Wir konzentrieren uns nicht nur auf die schmerzende Stelle. Wir
              sehen den Menschen als Ganzes.“
            </blockquote>
          </div>
        </article>
        <article className="person-card consultant">
          <div className="portrait-crop consultant-portrait">
            <img
              src={asset("/assets/alexandra-foltinska-portrait.jpg")}
              alt="Dr. med. univ. Alexandra Foltinská"
            />
          </div>
          <div>
            <h2 className="person-name">Alexandra Foltinská</h2>
            <p className="person-titles">Dr. med. univ.</p>
            <p className="person-role">Consulting Partner | REVIQA Biomedica</p>
            <p>
              Bei der Österreichischen Ärztekammer (ÖÄK) registrierte Ärztin mit
              aktiver klinischer Tätigkeit in Tirol. Sie betreut fachärztliche
              Konsultationen.
            </p>
            <blockquote>
              „Bei REVIQA | BIOMEDICA möchten wir moderne wissenschaftliche
              Medizin mit individueller Regeneration und Prävention verbinden.“
            </blockquote>
          </div>
        </article>
      </section>
      <CTA />
    </>
  );
}

function Therapies() {
  return (
    <>
      <Hero
        eyebrow="Therapien"
        title="Betreuung, die sich an Ihnen orientiert"
        text="Technologien und Therapien werden nicht isoliert betrachtet. Die Auswahl richtet sich nach Ihren Zielen, Ihrem aktuellen Zustand und der Erstbeurteilung."
        image="/assets/service-complementary-concept.jpg"
      />
      <section className="section shell">
        <Heading
          center
          eyebrow="Möglichkeiten der Betreuung"
          title="Unsere Therapien entdecken"
          text="Kombination, Häufigkeit und Reihenfolge sind immer individuell."
        />
        <ServiceGrid />
      </section>
      <CTA />
    </>
  );
}

function Therapy({ service }: { service: GermanService }) {
  const url = `${SITE_URL}/de/therapien/${service.slug}/`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.intro,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Place", name: "International" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];
  const manual = service.slug === "chironeurogene-manuelle-therapie";
  return (
    <>
      <StructuredData data={data} />
      <Hero
        eyebrow={service.eyebrow}
        title={service.title}
        text={service.intro}
        image={service.image}
      />
      <section className="service-impact">
        <div className="shell">
          {service.impact.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>
      <section className="section shell service-detail">
        <div>
          <Heading
            eyebrow="Ablauf"
            title="Ruhig, verständlich und individuell"
          />
          <ol className="process-list">
            {service.process.map((item, i) => (
              <li key={item}>
                <span>0{i + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
        <aside className="detail-box">
          <div>
            <small>FÜR WEN</small>
            <p>{service.audience}</p>
          </div>
        </aside>
      </section>
      <section className="section dark-panel">
        <div className="shell">
          <Heading
            eyebrow="Mögliche Vorteile"
            title="Teil eines umfassenderen Regenerationsplans"
          />
          <div className="benefit-grid">
            {service.benefits.map((benefit, i) => (
              <article key={benefit}>
                <span>0{i + 1}</span>
                <h3>{benefit}</h3>
              </article>
            ))}
          </div>
          <MedicalNotice />
        </div>
      </section>
      {manual ? (
        <section className="section shell">
          <Heading
            eyebrow="Möglichkeiten der Betreuung"
            title="Der Ansatz wird für jeden Klienten gewählt"
          />
          <div className="care-copy">
            <p>
              Wir konzentrieren uns nicht nur auf den Ort der Beschwerden. Wir
              arbeiten gezielt mit funktionellen Einschränkungen von
              Wirbelsäule, Gelenken, Muskeln, Faszien und Nervenbahnen, die die
              natürliche Funktion beeinflussen können.
            </p>
            <p>
              Mit spezialisierten manuellen Techniken schaffen wir günstige
              Bedingungen für natürliche Regeneration, Wiederherstellung
              funktioneller Fähigkeiten und langfristige Gesundheit. Jede
              Therapie wird an Zustand, Bedürfnisse und Ziele angepasst.
            </p>
          </div>
        </section>
      ) : (
        <section className="section shell">
          <Heading
            eyebrow="Möglichkeiten der Betreuung"
            title="Der Ansatz wird für jeden Klienten gewählt"
          />
          <div className="tag-grid">
            {service.modalities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      )}
      <section className="section dark-panel">
        <div
          className={`shell service-content${service.details.length === 0 ? " service-content-single" : ""}`}
        >
          <div>
            <Heading
              eyebrow="Für wen geeignet"
              title="Zuerst beurteilen wir den gesamten Kontext"
            />
            <ul className="gold-list service-audience">
              {service.suitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {service.details.length > 0 && (
            <div className="content-blocks">
              {service.details.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="section shell">
        <Heading
          eyebrow="Kontraindikationen"
          title="Sicherheit wird vor jeder Therapie beurteilt"
          text="Nicht jede Methode eignet sich für jeden Menschen. Informieren Sie uns über Diagnosen, laufende Behandlung, Schwangerschaft, Implantate und wesentliche Veränderungen Ihres Gesundheitszustands. Das endgültige Protokoll wird nach individueller fachlicher Beurteilung bestätigt."
        />
      </section>
      <section className="section dark-panel">
        <div className="shell">
          <Heading
            eyebrow="Häufig gestellte Fragen"
            title={`Praktische Informationen: ${service.short}`}
          />
          <div className="faq-list service-faq">
            {service.faq.map(([q, a], i) => (
              <details key={q}>
                <summary>
                  <span>0{i + 1}</span>
                  {q}
                  <b>+</b>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function Method() {
  const steps = [
    [
      "01",
      "Entdeckung",
      "Wir hören zu",
      "Wir lernen Ihre Geschichte, Prioritäten, aktuellen Beschwerden und gewünschten Aktivitäten kennen.",
    ],
    [
      "02",
      "Beurteilung",
      "Wir analysieren",
      "Wir untersuchen Bewegung, Funktionsmuster, Belastung und Zusammenhänge.",
    ],
    [
      "03",
      "Reset",
      "Wir bereiten vor",
      "Wir reduzieren Überlastung und wählen erste Schritte und Therapien als Grundlage der weiteren Betreuung.",
    ],
    [
      "04",
      "Wiederherstellung",
      "Wir unterstützen",
      "Wir kombinieren geeignete chironeurogene und technologische Verfahren und Therapien nach Ihrem Plan.",
    ],
    [
      "05",
      "Erhaltung",
      "Wir optimieren",
      "Wir beobachten den Fortschritt, passen den Plan an und unterstützen langfristige Vitalität und Funktion.",
    ],
  ];
  return (
    <>
      <Hero
        eyebrow="Die REVIQA Method"
        title="Fünf Schritte. Eine individuelle Geschichte."
        text="Die REVIQA Method ist ein Rahmen für personalisierte Betreuung. Sie ist kein universelles Protokoll und keine eigenständige medizinische Behandlung; jeder Schritt wird angepasst."
        image="/assets/reviqa-philosophy.jpeg"
      />
      <section className="section shell method-system">
        <Heading eyebrow="Eigene Methodik" title="REVIQA Method™ | Chironeurogenic System™" text="Unsere eigene Methodik verbindet Biomechanik, neuromyoskelettale manuelle Therapie, physio-regenerative Verfahren und moderne Hightech-Regenerationstechnologien in einem personalisierten Betreuungssystem." />
        <div className="method-system-copy"><p>Sie wählen keine einzelnen Therapien. Nach einer funktionellen Beurteilung erstellen wir gemeinsam ein personalisiertes Regenerationsprotokoll, das Ihre Bedürfnisse, Ihren aktuellen Funktionszustand und langfristigen Ziele berücksichtigt.</p><p>Die folgenden fünf Schritte zeigen die praktische Anwendung – vom ersten Verständnis bis zur langfristigen Unterstützung.</p></div>
      </section>
      <section className="section shell">
        <Heading
          eyebrow="Der Prozess"
          title="Vom Verständnis zum nachhaltigen Fortschritt"
        />
        <div className="timeline">
          {steps.map(([n, t, v, p]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <small>{v}</small>
                <h2>{t}</h2>
                <p>{p}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

function Pricing() {
  const programmes = [
    {
      name: "RESET",
      note: "Erster Schritt zur Regeneration",
      sessions: "2 ×",
      duration: "2 × 90 Min.",
      price: "320 €",
      image: "/assets/home-freedom-family.jpg",
    },
    {
      name: "RESTORE",
      note: "Zurück zu dem, was Ihnen Freude macht",
      sessions: "3 ×",
      duration: "3 × 90 Min.",
      price: "465 €",
      image: "/assets/service-manual-concept.jpg",
    },
    {
      name: "REGENERATE",
      note: "Erneuerung von Kraft und Vitalität",
      sessions: "5 ×",
      duration: "5 × 90 Min.",
      price: "750 €",
      image: "/assets/service-pbm-concept.jpg",
    },
    {
      name: "LONGEVITY",
      note: "Wir entdecken Zeit",
      sessions: "10 ×",
      duration: "10 × 90 Min.",
      price: "1.450 €",
      image: "/assets/center-garden-1.jpeg",
    },
  ];
  const protocolBenefits = [
    "Anlage Ihres REVIQA Health Passport™",
    "Funktionelle Beurteilung des Gesundheitszustands",
    "Therapien aus den Modulen der REVIQA Method™ nach Ihrem individuellen Protokoll",
    "Empfehlung eines geeigneten REVIQA Method™ Programms",
    "Beratung und fachliche Unterstützung",
  ];
  const therapyModules = [
    "Chironeurogene manuelle regenerative Techniken",
    "Psychosomatische Techniken",
    "Hyperbare Sauerstofftherapie (HBOT)",
    "Wasserstofftherapie (H₂)",
    "Sauerstofftherapie (O₂)",
    "Photobiomodulation",
    "Perkutane Elektroakupressur",
    "Physio-regenerative Übungen und Edukation",
    "Empfehlungen zu Regeneration und Prävention",
    "Weitere Verfahren nach individuellem Bedarf",
  ];
  return (
    <>
      <Hero
        eyebrow="Programme und Preise"
        title="Hinter jeder Regeneration steht die Geschichte eines Menschen"
        text="Wir glauben an einen vollständig individuellen Ansatz. Programm und Umfang der Betreuung werden immer an die tatsächlichen Bedürfnisse Ihres Körpers angepasst."
        image="/assets/pricing-consultation-hero.jpg"
      />
      <section className="section shell">
        <Heading
          eyebrow="Individuelle Betreuung"
          title="REVIQA Method™"
          text="Personalisiertes Regenerationsprotokoll"
        />
        <article className="protocol-card">
          <div className="protocol-head">
            <div>
              <span className="eyebrow">
                Personalisiertes Regenerationsprotokoll
              </span>
              <h2>REVIQA Method™</h2>
            </div>
            <strong>bis 90 Min. | 165 €</strong>
          </div>
          <p>
            Umfassender individueller Termin zur funktionellen Beurteilung des
            Gesundheitszustands, Ermittlung der wichtigsten Prioritäten und
            Erstellung eines personalisierten Regenerationsprotokolls nach
            Zustand, Bedürfnissen und Zielen.
          </p>
          <div className="protocol-columns">
            <div>
              <h3>Das Protokoll umfasst</h3>
              <ul>
                <li>Anlage des REVIQA Health Passport™</li>
                <li>Funktionelle Beurteilung des Gesundheitszustands</li>
                <li>Therapien aus den Modulen der REVIQA Method™</li>
                <li>Empfehlung eines geeigneten Programms</li>
                <li>Beratung und fachliche Unterstützung</li>
              </ul>
            </div>
            <div>
              <h3>Therapeutische Module</h3>
              <ul>
                <li>Chironeurogene manuelle regenerative Techniken</li>
                <li>Psychosomatische Techniken</li>
                <li>Hyperbare Sauerstofftherapie (HBOT)</li>
                <li>Wasserstofftherapie (H₂)</li>
                <li>Sauerstofftherapie (O₂)</li>
                <li>Photobiomodulation</li>
                <li>Perkutane Elektroakupressur</li>
                <li>Physio-regenerative Übungen und Edukation</li>
                <li>Empfehlungen zu Regeneration und Prävention</li>
                <li>Weitere Verfahren nach individuellem Bedarf</li>
              </ul>
            </div>
          </div>
          <div className="protocol-note">
            <h3>Hinweis</h3>
            <p>
              Die REVIQA Method™ ist eine eigene Methodik individueller
              Regeneration. Klienten wählen keine Einzeltherapien; der
              Spezialist erstellt das personalisierte Protokoll nach
              funktioneller Beurteilung und aktuellem Bedarf.
            </p>
          </div>
        </article>
        <article className="hbot-price-card">
          <div>
            <span className="eyebrow">Einzeltherapie</span>
            <h2>Hyperbare Sauerstofftherapie (HBOT)</h2>
            <p>1 Anwendung | Serie von 5 | Serie von 10</p>
          </div>
          <div>
            <span>60 Min.</span>
            <strong>50 € / 150 € / 250 €</strong>
          </div>
        </article>
      </section>
      <section className="section dark-panel">
        <div className="shell">
          <Heading
            center
            eyebrow="Regenerations- & Longevity-Programme"
            title="Umfang nach Ihren Bedürfnissen und Zielen"
          />
          <div className="program-grid program-accordion">
            {programmes.map((p) => (
              <details key={p.name} className="program-card">
                <summary>
                  <img src={asset(p.image)} alt="" />
                  <span className="program-shade" aria-hidden="true" />
                  <span className="program-note">{p.note}</span>
                  <h2>{p.name}</h2>
                  <p><b>{p.sessions}</b> personalisierte Regenerationsprotokolle<br />REVIQA Method™</p>
                  <strong>{p.price}</strong>
                  <span className="program-more">Mehr erfahren <i>+</i></span>
                </summary>
                <div className="program-detail">
                  <div className="program-detail-intro"><span className="eyebrow">{p.duration}</span><h3>Umfassende individuelle Termine</h3><p>Zur funktionellen Beurteilung des Gesundheitszustands, Ermittlung der wichtigsten Prioritäten und Erstellung eines personalisierten Regenerationsprotokolls nach Ihrem aktuellen Zustand, Ihren Bedürfnissen und Zielen.</p></div>
                  <div className="program-detail-columns">
                    <div><h3>Das personalisierte Protokoll umfasst</h3><ul>{protocolBenefits.map((item) => <li key={item}>{item}</li>)}</ul></div>
                    <div><h3>Therapeutische Module der REVIQA Method™</h3><p>Ein Spezialist von REVIQA | BIOMEDICA erstellt das Protokoll nach funktioneller Beurteilung und entsprechend Ihren individuellen Bedürfnissen.</p><ul>{therapyModules.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  </div>
                  <div className="program-detail-note"><h3>Hinweis</h3><p>Die REVIQA Method™ ist eine eigene Methodik individueller Regeneration. Klienten wählen keine Einzeltherapien; der Spezialist von REVIQA | BIOMEDICA erstellt das personalisierte Protokoll nach funktioneller Beurteilung und aktuellem Bedarf.</p></div>
                </div>
              </details>
            ))}
          </div>
          <p className="pricing-note">
            Programme bauen auf der umfassenden Erstbeurteilung und dem
            individuellen Plan auf. Die empfohlene Anzahl der Termine kann nach
            der Auswertung angepasst werden.
          </p>
        </div>
      </section>
      <section className="section shell">
        <MedicalNotice />
      </section>
      <CTA />
    </>
  );
}

function Gallery() {
  const photos = [
    ["/assets/center-garden-1.jpeg", "Garten des REVIQA Zentrums"],
    ["/assets/center-garden-2.jpeg", "Ruhige grüne Umgebung"],
    ["/assets/center-garden-3.jpeg", "Gelände von REVIQA"],
    [
      "/assets/center-building-corrected.jpg",
      "Moderner barrierefreier Pavillon",
    ],
    ["/assets/center-garden-4.jpeg", "Garten und Eingang"],
  ];
  return (
    <>
      <Hero
        eyebrow="Galerie"
        title="Ein realer Ort für Ruhe und Privatsphäre"
        text="REVIQA befindet sich auf einem ruhigen, gepflegten und barrierefreien Grundstück mit Parkplätzen direkt am Zentrum."
        image="/assets/center-garden-3.jpeg"
      />
      <section className="section shell">
        <Heading eyebrow="REVIQA Zentrum" title="Außenbereich und Garten" />
        <div className="gallery-grid">
          {photos.map(([src, alt], i) => (
            <figure className={`gallery-${i + 1}`} key={src}>
              <img src={asset(src)} alt={alt} />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

function Faq() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsDe.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <>
      <StructuredData data={data} />
      <Hero
        eyebrow="FAQ"
        title="Häufig gestellte Fragen"
        text="Praktische Informationen vor Ihrem ersten Besuch. Wenn Sie keine Antwort finden, schreiben Sie uns oder rufen Sie an."
      />
      <section className="section shell faq-list">
        {faqsDe.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary>
              <span>0{i + 1}</span>
              {q}
              <b>+</b>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <CTA />
    </>
  );
}

function Testimonials() {
  return (
    <>
      <Hero
        eyebrow="Erfahrungen"
        title="Echte Erfahrung lässt sich nicht durch Versprechen ersetzen"
        text="Diese Seite ist für verifizierte Erfahrungen von Klienten vorbereitet, die ausschließlich mit ihrer Einwilligung veröffentlicht werden."
      />
      <section className="section shell reviews-empty">
        <div className="ornament">✦</div>
        <Heading
          center
          eyebrow="In Vorbereitung"
          title="Verifizierte Erfahrungen folgen in Kürze"
          text="Wir veröffentlichen keine anonymen oder erfundenen Referenzen. Jede Erfahrung stammt von einem realen Klienten und wird mit Einwilligung veröffentlicht."
        />
      </section>
      <CTA />
    </>
  );
}

function Blog() {
  const drafts = [
    [
      "HBOT",
      "Was ist hyperbare Sauerstofftherapie?",
      "/assets/service-hbot.png",
    ],
    [
      "Erster Besuch",
      "Was erwartet Sie bei der ersten REVIQA Beratung?",
      "/assets/center-garden-1.jpeg",
    ],
    [
      "H₂",
      "Molekularer Wasserstoff im individuellen Regenerationsplan",
      "/assets/service-hydrogen.png",
    ],
    ["Licht", "Was ist Photobiomodulation?", "/assets/service-pbm.png"],
    [
      "Bewegung",
      "Nervensystem, Bewegung und Regeneration",
      "/assets/therapy-regeneration.jpeg",
    ],
  ];
  return (
    <>
      <Hero
        eyebrow="REVIQA Journal"
        title="Wissen für bessere Entscheidungen"
        text="Wir bereiten fachlich geprüfte Beiträge vor, die Technologien, Betreuung und Zusammenhänge der Regeneration verständlich erklären."
      />
      <section className="section shell">
        <Heading eyebrow="Geplante Themen" title="In Vorbereitung" />
        <div className="blog-grid">
          {drafts.map(([tag, title, image]) => (
            <article key={title}>
              <div>
                <img src={asset(image)} alt="" />
                <span>Symbolbild</span>
              </div>
              <small>{tag}</small>
              <h2>{title}</h2>
              <p>
                Der Beitrag wird vorbereitet und vor der Veröffentlichung
                fachlich geprüft.
              </p>
              <b>Demnächst</b>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

function Contact() {
  return (
    <>
      <Hero
        eyebrow="Kontakt"
        title="Ihre Reise beginnt mit einem Gespräch"
        text="Vereinbaren Sie Ihre Erstberatung telefonisch oder über WhatsApp."
      />
      <section className="section shell contact-layout">
        <div>
          <Heading
            eyebrow="REVIQA Biomedica Poprad"
            title="Kontakt und Öffnungszeiten"
          />
          <div className="contact-cards">
            <a href={`tel:${contactDe.phone}`}>
              <small>Telefon</small>
              <b>{contactDe.phoneDisplay}</b>
            </a>
            <a href={`mailto:${contactDe.email}`}>
              <small>E-Mail</small>
              <b>{contactDe.email}</b>
            </a>
            <div>
              <small>Adresse</small>
              <b>{contactDe.address}</b>
            </div>
            <div>
              <small>Öffnungszeiten</small>
              <b>Mo–Fr 9:00–15:00</b>
              <p>Wochenende und andere Zeiten nach Vereinbarung.</p>
            </div>
          </div>
          <div className="contact-actions">
            <a
              className="gold-button"
              href={contactDe.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Über WhatsApp schreiben
            </a>
            <a className="ghost-button" href={`tel:${contactDe.phone}`}>
              Anrufen
            </a>
          </div>
          <p className="access-note">
            ✓ Parkplätze auf dem Gelände &nbsp; ✓ Barrierefreier Zugang
          </p>
        </div>
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199735.6963376034!2d20.152553270098007!3d49.01102797600171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3b8f55e5821b%3A0xa48b688bd1373dd1!2sReviqa%20Biomedica!5e1!3m2!1scs!2ssk!4v1784717514004!5m2!1scs!2ssk"
            title="REVIQA Biomedica auf Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Reviqa%20Biomedica%2C%20Hitschova%205022%2F2%2C%20058%2001%20Poprad%2C%20Slovakia"
            target="_blank"
            rel="noreferrer"
          >
            Route in Google Maps öffnen
          </a>
        </div>
      </section>
    </>
  );
}

function Privacy() {
  return (
    <>
      <Hero
        eyebrow="Rechtliche Informationen"
        title="Datenschutzerklärung"
        text="Vorläufige Dokumentstruktur. Die endgültigen Angaben zum Betreiber werden vor der finalen Veröffentlichung ergänzt."
      />
      <article className="section shell legal-copy">
        <div className="draft-alert">
          Arbeitsfassung – kein endgültiges Rechtsdokument.
        </div>
        <h2>1. Verantwortlicher</h2>
        <p>
          Firmenname, Identifikationsnummer, Sitz und vollständige Angaben
          werden nach ihrer Zuteilung ergänzt. Kontakt: {contactDe.email}.
        </p>
        <h2>2. Umfang der Verarbeitung</h2>
        <p>
          Die Website enthält kein Kontaktformular und keinen Newsletter. Bei
          Kontakt per Telefon, E-Mail oder WhatsApp übermittelt der Besucher
          Daten direkt über den gewählten Dienst.
        </p>
        <h2>3. Zweck und Rechtsgrundlage</h2>
        <p>
          Die endgültige Fassung definiert Kommunikation, Terminverwaltung,
          Betreuung und Erfüllung gesetzlicher Pflichten.
        </p>
        <h2>4. Ihre Rechte</h2>
        <p>
          Die endgültige Fassung informiert über Auskunft, Berichtigung,
          Löschung, Einschränkung, Widerspruch und das Beschwerderecht bei der
          Aufsichtsbehörde.
        </p>
      </article>
    </>
  );
}

function Cookies() {
  return (
    <>
      <Hero
        eyebrow="Rechtliche Informationen"
        title="Cookie-Richtlinie"
        text="Informationen über die von dieser Website verwendeten Technologien."
      />
      <article className="section shell legal-copy">
        <h2>Notwendige Technologien</h2>
        <p>
          Die Website nutzt den Browserspeicher, um Ihre Cookie-Auswahl und
          wesentliche technische Einstellungen zu speichern.
        </p>
        <h2>Analyse-Cookies – Google Analytics 4</h2>
        <p>
          Mit Ihrer Einwilligung verwenden wir Google Analytics 4 mit der
          Mess-ID G-RD86DGX0GV, um Besuche und das Interesse an einer
          Kontaktaufnahme zu verstehen. Ohne Einwilligung wird Analytics nicht
          geladen.
        </p>
        <p>
          Ihre Wahl können Sie jederzeit über „Cookie-Einstellungen“ im Footer
          ändern.
        </p>
        <h2>Externe Dienste</h2>
        <p>
          Kontaktseite und Footer verwenden Google Maps. Links zu WhatsApp,
          Telefon und E-Mail können Dienste Dritter öffnen.
        </p>
      </article>
    </>
  );
}

export default async function GermanPage({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const { path = [] } = await params;
  if (path.length === 0) return <Home />;
  if (path[0] === "therapien" && path[1]) {
    const service = servicesDe.find((item) => item.slug === path[1]);
    return service ? <Therapy service={service} /> : notFound();
  }
  const pages: Record<string, React.ReactNode> = {
    "ueber-uns": <About />,
    "unser-team": <Team />,
    therapien: <Therapies />,
    "reviqa-methode": <Method />,
    "programme-preise": <Pricing />,
    galerie: <Gallery />,
    "haeufige-fragen": <Faq />,
    erfahrungen: <Testimonials />,
    blog: <Blog />,
    kontakt: <Contact />,
    datenschutz: <Privacy />,
    cookies: <Cookies />,
  };
  return path.length === 1 && pages[path[0]] ? pages[path[0]] : notFound();
}
