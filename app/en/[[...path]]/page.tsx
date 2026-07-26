import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/StructuredData";
import { asset } from "@/lib/content";
import { contactEn, faqsEn, programmesEn, servicesEn, type EnglishService } from "@/lib/content-en";
import { toSlovakPath } from "@/lib/i18n";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const staticPaths = [
  [], ["about"], ["our-team"], ["therapies"], ["reviqa-method"],
  ["programmes-pricing"], ["gallery"], ["faq"], ["testimonials"],
  ["blog"], ["contact"], ["privacy"], ["cookies"],
];

export function generateStaticParams() {
  return [
    ...staticPaths.map((path) => ({ path })),
    ...servicesEn.map((service) => ({ path: ["therapies", service.slug] })),
  ];
}

const pageSeo: Record<string, [string, string]> = {
  "": ["REVIQA Biomedica | Private regeneration centre in Slovakia", "Individual regenerative care, HBOT, molecular hydrogen and oxygen, photobiomodulation and manual therapies in Poprad, Slovakia."],
  about: ["About REVIQA – philosophy and centre", "Discover the philosophy, professional background and private setting of REVIQA Biomedica in Poprad, Slovakia."],
  "our-team": ["Our team and professional background", "Meet REVIQA founder Radovan Foltinský and medical consulting partner Dr. med. univ. Alexandra Foltinská."],
  therapies: ["Regenerative therapies", "HBOT, molecular hydrogen and oxygen, photobiomodulation, chiro-neurogenic therapy and physio-regenerative guidance."],
  "reviqa-method": ["The REVIQA Method – five steps of personalised regeneration", "Discover the five stages of personalised care: discovery, assessment, reset, restoration and long-term optimisation."],
  "programmes-pricing": ["Regeneration programmes and pricing", "Pricing for the personalised REVIQA Method protocol, HBOT and individual regeneration programmes."],
  gallery: ["REVIQA centre gallery", "View real photographs of the private, accessible REVIQA regeneration centre and its garden in Poprad."],
  faq: ["Frequently asked questions", "Practical answers about your first visit, therapies, appointments, children, parking and accessibility at REVIQA."],
  testimonials: ["Client experiences and testimonials", "Verified client experiences from REVIQA Biomedica will be published here with consent."],
  blog: ["Journal on regeneration and longevity", "Clear, professionally reviewed articles about HBOT, molecular hydrogen, photobiomodulation, movement and longevity."],
  contact: ["Contact and book an appointment", "Contact REVIQA Biomedica at Hitschova 5022/2 in Poprad by phone, email or WhatsApp."],
  privacy: ["Privacy policy", "Information about personal data processing on the REVIQA Biomedica website."],
  cookies: ["Cookie policy", "Information about cookies and external services used by the REVIQA Biomedica website."],
};

export async function generateMetadata({ params }: { params: Promise<{ path?: string[] }> }): Promise<Metadata> {
  const { path = [] } = await params;
  const service = path[0] === "therapies" && path[1] ? servicesEn.find((item) => item.slug === path[1]) : undefined;
  const [title, description] = service
    ? [service.title, service.intro]
    : pageSeo[path.join("/")] ?? pageSeo[""];
  const route = path.length ? `/en/${path.join("/")}/` : "/en/";
  const url = `${SITE_URL}${route}`;
  const slovakUrl = `${SITE_URL}${toSlovakPath(route)}`;
  const noIndex = path[0] === "privacy" || path[0] === "cookies";
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        sk: service ? `${SITE_URL}/sluzby/${service.slovakSlug}/` : slovakUrl,
        "x-default": service ? `${SITE_URL}/sluzby/${service.slovakSlug}/` : slovakUrl,
      },
    },
    openGraph: {
      title: `${title} | REVIQA`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "REVIQA Biomedica – private regeneration centre in Slovakia" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | REVIQA`, description, images: [OG_IMAGE] },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
  };
}

function Hero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: React.ReactNode; image?: string }) {
  return <section className="page-hero" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(239,240,238,.97), rgba(239,240,238,.68)), url('${asset(image)}')` } : undefined}><div className="shell narrow"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

function Heading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={center ? "section-heading center" : "section-heading"}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function MedicalNotice() {
  return <div className="medical-note"><b>Important notice</b><p>The information on this website is for general information only. It does not replace medical diagnosis or treatment. The suitability of each therapy and possible contraindications are assessed individually before care begins.</p></div>;
}

function CTAEn() {
  return <section className="cta-band"><div className="shell"><div><span className="eyebrow">Your first step</span><h2>Book your appointment</h2><p>A structured conversation, initial assessment and an individual recommendation for your next steps.</p></div><div className="cta-actions"><a className="gold-button" href={contactEn.whatsapp} target="_blank" rel="noreferrer">Message us on WhatsApp</a><a className="ghost-button" href={`tel:${contactEn.phone}`}>Call {contactEn.phoneDisplay}</a></div></div></section>;
}

function ServiceGridEn({ limit }: { limit?: number }) {
  return <div className="service-grid">{servicesEn.slice(0, limit ?? servicesEn.length).map((service, i) => <article className="service-card" key={service.slug}><div className="service-image"><img src={asset(service.image)} alt={`Illustration of ${service.title}`} /><span>Illustrative image</span></div><div className="service-body"><small>0{i + 1}</small><h3>{service.title}</h3><p>{service.intro}</p><Link href={`/en/therapies/${service.slug}`}>Learn more <span>→</span></Link></div></article>)}</div>;
}

function HomeEn() {
  const steps = [
    ["01", "Discovery", "We listen to your story and goals."],
    ["02", "Assessment", "We identify patterns and connections."],
    ["03", "Reset", "We select the first steps and therapies."],
    ["04", "Restore", "We combine suitable methods and technologies."],
    ["05", "Sustain", "We monitor progress and long-term vitality."],
  ];
  return <><section className="home-hero"><img className="hero-bg" src={asset("/assets/home-freedom-family.jpg")} alt="A family spending active time together below the High Tatras" /><div className="hero-shade" /><div className="hero-content shell"><h1>Your body.<br /><em>Your future.</em><br />Our science.</h1><span className="hero-divider" aria-hidden="true" /><p>An individual biomechanical approach to regeneration of the movement system, nervous system and support for longevity.</p><div className="hero-actions"><a className="gold-button hero-primary" href={contactEn.whatsapp} target="_blank" rel="noreferrer"><span>Book your appointment</span><span aria-hidden="true">→</span></a><Link className="text-link" href="/en/therapies">REVIQA technologies and therapeutic methods</Link></div></div><div className="hero-facts shell"><div><b>01</b><span>Individual plan</span></div><div><b>02</b><span>Privacy and discretion</span></div><div><b>03</b><span>Modern technologies</span></div><div><b>04</b><span>Long-term care</span></div></div></section>
    <section className="intro-section section shell intro-layout"><div><Heading eyebrow="Individual care" title="REVIQA Method™ | Chiro-Neurogenic System™" text="A proprietary systemic chiro-neurogenic methodology designed to support natural regeneration, restore functional capacity and maintain health over the long term. It combines evidence-informed principles of neuromyoskeletal manual techniques, physio-regenerative methods and modern high-tech regenerative technologies in one personalised system." /><Link className="outline-link" href="/en/about">Our approach</Link></div><aside className="intro-consult-card"><img src={asset("/assets/radovan-foltinsky-portrait-2026.jpeg")} alt="Radovan Foltinský, founder of REVIQA Biomedica" /><div className="consult-person"><strong>Radovan Foltinský</strong><small>MSc, MEd, CertMGMT (Open)</small><span>FOUNDER – accredited specialist</span></div><span className="eyebrow">Personal consultation</span><h2>Let us begin with a conversation</h2><p>An introductory conversation and your first regenerative session.</p><a href={contactEn.whatsapp} target="_blank" rel="noreferrer">Book your appointment</a></aside><div className="feature-stack"><article><span>✦</span><div><h3>Understanding connections</h3><p>We consider the person, their story, movement and goals as one connected whole.</p></div></article><article><span>◇</span><div><h3>Care tailored to you</h3><p>Every plan is created individually and continuously adapted.</p></div></article><article><span>∞</span><div><h3>Long-term vitality</h3><p>Our aim is sustainable quality of life, not a quick universal solution.</p></div></article></div></section>
    <section className="freedom-section shell"><img src={asset("/assets/home-freedom-family.jpg")} alt="A family spending active time below the Tatras" /><div className="freedom-shade" /><div className="freedom-content"><span className="eyebrow">Your life. Your priorities.</span><h2>More freedom for the life you want to live</h2><p>Regeneration is not only about reducing difficulties. It is about moving freely again, travelling and sharing an active life with the people who matter to you.</p><div className="freedom-values"><span>Freedom of movement</span><span>Active life</span><span>Time with loved ones</span><span>Mobility without unnecessary limits</span></div><a className="gold-button" href={contactEn.whatsapp} target="_blank" rel="noreferrer">Begin your journey</a></div><blockquote>“It is not only about the length of life. It is about the quality of every day.”</blockquote></section>
    <section className="section services-section"><div className="shell"><Heading center eyebrow="Therapies" title="Explore our therapies" text="The combination, frequency and sequence are always selected individually." /><ServiceGridEn limit={6} /></div></section>
    <section className="method-preview section"><div className="shell"><Heading eyebrow="The REVIQA Method" title="Five steps of personalised regeneration" /></div><div className="method-steps shell">{steps.map(([n,t,p]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div><div className="center-action"><Link className="gold-button" href="/en/reviqa-method">Discover the REVIQA Method</Link></div></section>
    <section className="section shell place-section"><div className="place-image"><img src={asset("/assets/center-garden-1.jpeg")} alt="REVIQA centre and garden in Poprad" /></div><div><Heading eyebrow="A place that slows the pace" title="A peaceful centre below the Tatras" text="An accessible modern environment offering privacy, a garden and on-site parking. Every client receives time and undivided attention." /><ul className="gold-list"><li>Hitschova 5022/2, Poprad – Spišská Sobota</li><li>On-site parking</li><li>Step-free access</li><li>Visits by appointment</li></ul><Link className="outline-link" href="/en/gallery">View the gallery</Link></div></section><CTAEn /></>;
}

function AboutEn() {
  return <><Hero eyebrow="About us" title="Your potential. Our mission." text={<>Pain, fatigue and long-term overload do not have to become your new normal. You deserve a place where you are heard, your condition is carefully assessed and care is tailored to you.<br /><br />REVIQA Biomedica is a private regeneration and longevity centre in a modern pavilion set in a quiet residential environment.</>} image="/assets/center-garden-1.jpeg" /><section className="section shell split"><div><Heading eyebrow="Our philosophy" title="A person is more than a collection of symptoms" text="The movement system, nervous system, regeneration, sleep and everyday load influence one another. We therefore begin by understanding the client’s full story before selecting an individual regeneration programme." /><p>REVIQA accepts a limited number of clients so that each appointment is private, unhurried and receives our full attention.</p></div><div className="framed-image"><img src={asset("/assets/center-building-corrected.jpg")} alt="Modern REVIQA pavilion" /></div></section><section className="section dark-panel"><div className="shell"><Heading center eyebrow="Our values" title="Human care. Science. Technology." /><div className="values-grid"><article><span>01</span><h3>Individual approach</h3><p>We respect the unique needs of every client.</p></article><article><span>02</span><h3>Discretion</h3><p>Trust and privacy are fundamental to our care.</p></article><article><span>03</span><h3>Professional expertise</h3><p>Accredited specialists make decisions with knowledge, experience and precision.</p></article><article><span>04</span><h3>Science and technology</h3><p>We use modern technologies to support the body’s natural regeneration.</p></article></div></div></section><section className="section shell"><Heading center eyebrow="The people behind REVIQA" title="A team that listens" /><div className="center-action"><Link className="gold-button" href="/en/our-team">Meet our team</Link></div></section><CTAEn /></>;
}

function TeamEn() {
  return <><Hero eyebrow="Our team" title="Expertise with a human face" text="Personal care, a thorough understanding and professional consultation form the basis of every collaboration." /><section className="section shell team-grid"><article className="person-card featured"><div className="portrait-crop"><img src={asset("/assets/radovan-foltinsky-portrait-2026.jpeg")} alt="Radovan Foltinský, founder of REVIQA Biomedica" /></div><div><h2 className="person-name">Radovan Foltinský</h2><p className="person-titles">MSc, MEd, CertMGMT (Open)</p><p className="person-role">Founder &amp; Accredited Specialist | REVIQA Biomedica</p><p>He has worked as a senior executive and CEO in successful technology companies and served on the AVS board. As a university lecturer, he supervised doctoral candidates and contributed to development and research projects. Today he combines his extensive managerial and academic experience with a mission to help people return to strength, health and vitality as an accredited specialist in neuromyoskeletal systems.</p><blockquote>“My aim is to bring a new standard to private regeneration and longevity by combining science, experience and personalised care.<br /><br />We do not focus only on the place that hurts. We see the person as a whole.”</blockquote></div></article><article className="person-card consultant"><div className="portrait-crop consultant-portrait"><img src={asset("/assets/alexandra-foltinska-portrait.jpg")} alt="Dr. med. univ. Alexandra Foltinská, Consulting Partner at REVIQA Biomedica" /></div><div><h2 className="person-name">Alexandra Foltinská</h2><p className="person-titles">Dr. med. univ.</p><p className="person-role">Consulting Partner | REVIQA Biomedica</p><p>A physician registered with the Austrian Medical Chamber (ÖÄK), with active clinical practice in Tyrol. She provides professional medical consultations.</p><blockquote>“At REVIQA | BIOMEDICA, we strive to combine modern scientific medicine with individual regeneration and prevention.”</blockquote></div></article></section><CTAEn /></>;
}

function TherapiesEn() {
  return <><Hero eyebrow="Therapies" title="Care designed around you" text="We do not view technologies and therapies in isolation. They are selected according to your goals, current condition and initial assessment." image="/assets/service-complementary-concept.jpg" /><section className="section shell"><Heading center eyebrow="Care options" title="Explore our therapies" text="The specific combination, frequency and order are always individual." /><ServiceGridEn /></section><CTAEn /></>;
}

function TherapyEn({ service }: { service: EnglishService }) {
  const url = `${SITE_URL}/en/therapies/${service.slug}/`;
  const data = [
    { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.intro, url, provider: { "@id": `${SITE_URL}/#organization` }, areaServed: { "@type": "Place", name: "International" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: service.faq.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  const manual = service.slug === "chiro-neurogenic-manual-therapy";
  return <><StructuredData data={data} /><Hero eyebrow={service.eyebrow} title={service.title} text={service.intro} image={service.image} /><section className="section shell service-detail"><div><Heading eyebrow="What to expect" title="Calm, clear and individual" /><ol className="process-list">{service.process.map((item,i) => <li key={item}><span>0{i + 1}</span><p>{item}</p></li>)}</ol></div><aside className="detail-box"><div><small>SUITABLE FOR</small><p>{service.audience}</p></div></aside></section><section className="section dark-panel"><div className="shell"><Heading eyebrow="Potential benefits" title="Part of a wider regeneration plan" /><div className="benefit-grid">{service.benefits.map((benefit,i) => <article key={benefit}><span>0{i + 1}</span><h3>{benefit}</h3></article>)}</div><MedicalNotice /></div></section>{manual ? <section className="section shell"><Heading eyebrow="Care options" title="The approach is selected for each client" /><div className="care-copy"><p>We do not focus only on the site of discomfort. We work specifically with functional restrictions of the spine, joints, muscles, fascia and neural pathways that may influence the body’s natural function.</p><p>Through specialised manual techniques, we create favourable conditions for natural regeneration, restoration of functional capacity and long-term health. Every session is adapted to the client’s current functional state, needs and goals.</p></div></section> : <section className="section shell"><Heading eyebrow="Care options" title="The approach is selected for each client" /><div className="tag-grid">{service.modalities.map((item) => <span key={item}>{item}</span>)}</div></section>}<section className="section dark-panel"><div className={`shell service-content${service.details.length === 0 ? " service-content-single" : ""}`}><div><Heading eyebrow="Who may benefit" title="We assess the full context first" /><ul className="gold-list service-audience">{service.suitableFor.map((item) => <li key={item}>{item}</li>)}</ul></div>{service.details.length > 0 && <div className="content-blocks">{service.details.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>}</div></section><section className="section shell"><Heading eyebrow="Contraindications" title="Safety is assessed before every therapy" text="Not every method is suitable for everyone. Before your visit, tell us about diagnoses, current treatment, pregnancy, implanted devices and any significant changes in health. The final protocol is confirmed after individual professional assessment." /></section><section className="section dark-panel"><div className="shell"><Heading eyebrow="Frequently asked questions" title={`Practical information: ${service.short}`} /><div className="faq-list service-faq">{service.faq.map(([q,a],i) => <details key={q}><summary><span>0{i + 1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></section><CTAEn /></>;
}

function MethodEn() {
  const steps = [
    ["01", "Discovery", "We listen", "We learn about your story, priorities, current concerns and the activities you want to enjoy with greater ease."],
    ["02", "Assessment", "We analyse", "We examine movement, functional patterns, load and the connections that may influence your condition."],
    ["03", "Reset", "We prepare", "We reduce overload and select the first steps and therapies that create a suitable foundation for further care."],
    ["04", "Restore", "We support", "We combine appropriate manual and technological methods and therapies according to your individual plan."],
    ["05", "Sustain", "We optimise", "We monitor progress, adapt the plan and support long-term vitality and function."],
  ];
  return <><Hero eyebrow="The REVIQA Method" title="Five steps. One individual story." text="The REVIQA Method is a framework for personalised care. It is not a universal protocol or an independent medical treatment; each step is adapted to the client." image="/assets/reviqa-philosophy.jpeg" /><section className="section shell"><Heading eyebrow="The process" title="From understanding to sustainable progress" /><div className="timeline">{steps.map(([n,t,v,p]) => <article key={n}><span>{n}</span><div><small>{v}</small><h2>{t}</h2><p>{p}</p></div></article>)}</div></section><CTAEn /></>;
}

function PricingEn() {
  return <><Hero eyebrow="Programmes and pricing" title="Every regeneration journey begins with a person" text="We believe in a fully individual approach. The programme and scope of care are always adapted to the real needs of your body." image="/assets/pricing-consultation-hero.jpg" /><section className="section shell"><Heading eyebrow="Individual care" title="REVIQA Method™" text="Personalised regeneration protocol" /><article className="protocol-card"><div className="protocol-head"><div><span className="eyebrow">Personalised regeneration protocol</span><h2>REVIQA Method™</h2></div><strong>up to 90 min. | €165</strong></div><p>A comprehensive individual session focused on functional assessment of health, identification of key priorities and creation of a personalised regeneration protocol according to the client’s current health, individual needs and goals.</p><div className="protocol-columns"><div><h3>The personalised protocol includes</h3><ul><li>Creation of your REVIQA Health Passport™</li><li>Functional assessment of health</li><li>Therapies from REVIQA Method™ modules according to the individual protocol</li><li>Recommendation of a suitable REVIQA Method™ Programme</li><li>Consultation and professional support</li></ul></div><div><h3>REVIQA Method™ therapeutic modules</h3><p>A REVIQA | BIOMEDICA specialist creates the protocol after functional assessment and according to individual needs:</p><ul><li>Chiro-neurogenic manual regenerative techniques</li><li>Psychosomatic techniques</li><li>Hyperbaric oxygen therapy (HBOT)</li><li>Hydrogen therapy (H₂)</li><li>Oxygen therapy (O₂)</li><li>Photobiomodulation</li><li>Percutaneous electro-acupressure</li><li>Physio-regenerative exercise and education</li><li>Regeneration and prevention guidance</li><li>Other methods according to individual needs</li></ul></div></div><div className="protocol-note"><h3>Note</h3><p>The REVIQA Method™ is a proprietary methodology for individual regeneration. Clients do not select individual therapies; a REVIQA | BIOMEDICA specialist creates a personalised protocol following functional health assessment and according to current needs.</p></div></article><article className="hbot-price-card"><div><span className="eyebrow">Individual therapy</span><h2>Hyperbaric oxygen therapy (HBOT)</h2><p>1 session | series of 5 | series of 10</p></div><div><span>60 min.</span><strong>€50 / €150 / €250</strong></div></article></section><section className="section dark-panel"><div className="shell"><Heading center eyebrow="Regeneration & longevity programmes" title="Scope based on your needs and goals" /><div className="program-grid">{programmesEn.map((p) => <article key={p.name}><span>{p.note}</span><h2>{p.name}</h2><ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul><b>{p.price}</b></article>)}</div><p className="pricing-note">Programmes follow the initial comprehensive assessment and individual plan. The recommended number of sessions may be adjusted after evaluation.</p></div></section><section className="section shell"><MedicalNotice /></section><CTAEn /></>;
}

function GalleryEn() {
  const photos = [["/assets/center-garden-1.jpeg","REVIQA centre garden"],["/assets/center-garden-2.jpeg","A peaceful green setting"],["/assets/center-garden-3.jpeg","REVIQA grounds"],["/assets/center-building-corrected.jpg","Modern accessible pavilion"],["/assets/center-garden-4.jpeg","Garden and entrance to the centre"]];
  return <><Hero eyebrow="Gallery" title="A real place for calm and privacy" text="REVIQA is located in a quiet, carefully maintained and accessible property with on-site parking in Poprad." image="/assets/center-garden-3.jpeg" /><section className="section shell"><Heading eyebrow="REVIQA centre" title="Exterior and garden" /><div className="gallery-grid">{photos.map(([src,alt],i) => <figure className={`gallery-${i + 1}`} key={src}><img src={asset(src)} alt={alt} /><figcaption>{alt}</figcaption></figure>)}</div></section><CTAEn /></>;
}

function FaqEn() {
  const data = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqsEn.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return <><StructuredData data={data} /><Hero eyebrow="FAQ" title="Frequently asked questions" text="Practical information before your first visit. If you cannot find the answer, message or call us." /><section className="section shell faq-list">{faqsEn.map(([q,a],i) => <details key={q} open={i === 0}><summary><span>0{i + 1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section><CTAEn /></>;
}

function TestimonialsEn() {
  return <><Hero eyebrow="Testimonials" title="Real experience cannot be replaced by promises" text="This page is ready for verified client reviews, published only with their consent." /><section className="section shell reviews-empty"><div className="ornament">✦</div><Heading center eyebrow="Coming soon" title="Verified client experiences will be added soon" text="We do not publish anonymous or invented testimonials. Every experience will come from a real client and will be published with consent." /></section><CTAEn /></>;
}

function BlogEn() {
  const drafts = [["HBOT","What is hyperbaric oxygen therapy?","/assets/service-hbot.png"],["First visit","What to expect from your first REVIQA consultation","/assets/center-garden-1.jpeg"],["H₂","Molecular hydrogen in an individual regeneration plan","/assets/service-hydrogen.png"],["Light","What is photobiomodulation?","/assets/service-pbm.png"],["Movement","The nervous system, movement and regeneration","/assets/therapy-regeneration.jpeg"]];
  return <><Hero eyebrow="REVIQA Journal" title="Knowledge for better decisions" text="We are preparing professionally reviewed articles that explain our technologies, care and the context of regeneration in clear language." /><section className="section shell"><Heading eyebrow="Upcoming topics" title="Coming soon" /><div className="blog-grid">{drafts.map(([tag,title,image]) => <article key={title}><div><img src={asset(image)} alt="" /><span>Illustrative image</span></div><small>{tag}</small><h2>{title}</h2><p>The article is in preparation and will undergo professional review before publication.</p><b>Coming soon</b></article>)}</div></section><CTAEn /></>;
}

function ContactEn() {
  return <><Hero eyebrow="Contact" title="Your journey begins with a conversation" text="Book your initial consultation by phone or WhatsApp." /><section className="section shell contact-layout"><div><Heading eyebrow="REVIQA Biomedica Poprad" title="Contact and opening hours" /><div className="contact-cards"><a href={`tel:${contactEn.phone}`}><small>Phone</small><b>{contactEn.phoneDisplay}</b></a><a href={`mailto:${contactEn.email}`}><small>Email</small><b>{contactEn.email}</b></a><div><small>Address</small><b>{contactEn.address}</b></div><div><small>Opening hours</small><b>Mon–Fri 9:00–15:00</b><p>Weekends and other times by arrangement.</p></div></div><div className="contact-actions"><a className="gold-button" href={contactEn.whatsapp} target="_blank" rel="noreferrer">Message us on WhatsApp</a><a className="ghost-button" href={`tel:${contactEn.phone}`}>Call us</a></div><p className="access-note">✓ On-site parking &nbsp; ✓ Step-free access</p></div><div className="map-embed"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199735.6963376034!2d20.152553270098007!3d49.01102797600171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3b8f55e5821b%3A0xa48b688bd1373dd1!2sReviqa%20Biomedica!5e1!3m2!1scs!2ssk!4v1784717514004!5m2!1scs!2ssk" title="REVIQA Biomedica on Google Maps" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /><a href="https://www.google.com/maps/search/?api=1&query=Reviqa%20Biomedica%2C%20Hitschova%205022%2F2%2C%20058%2001%20Poprad%2C%20Slovakia" target="_blank" rel="noreferrer">Open directions in Google Maps</a></div></section></>;
}

function PrivacyEn() {
  return <><Hero eyebrow="Legal information" title="Privacy policy" text="Temporary document structure. The operator’s final legal details will be added before final publication." /><article className="section shell legal-copy"><div className="draft-alert">Working version – not a final legal document.</div><h2>1. Data controller</h2><p>The business name, registration number, registered address and full controller details will be added once assigned. Contact email: {contactEn.email}.</p><h2>2. Scope of processing</h2><p>The website contains no contact form or newsletter. When contacting us by phone, email or WhatsApp, the visitor provides data directly through the selected service.</p><h2>3. Purpose and legal basis</h2><p>The final text will define the purposes of communication, appointment management, care and compliance with legal obligations.</p><h2>4. Your rights</h2><p>The final document will include information on access, correction, erasure, restriction, objection and the right to lodge a complaint with the supervisory authority.</p></article></>;
}

function CookiesEn() {
  return <><Hero eyebrow="Legal information" title="Cookie policy" text="Information about technologies used by this website." /><article className="section shell legal-copy"><h2>Essential technologies</h2><p>The website uses browser storage to remember your cookie choice and essential technical elements required for operation.</p><h2>Analytics cookies – Google Analytics 4</h2><p>With your consent, we use Google Analytics 4 under measurement ID G-RD86DGX0GV to understand website traffic and interest in contacting the centre. Analytics does not load without consent.</p><p>You can change your choice at any time using “Cookie settings” in the website footer.</p><h2>External services</h2><p>The contact page and footer use Google Maps. Links to WhatsApp, phone and email may open third-party services.</p></article></>;
}

export default async function EnglishPage({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params;
  if (path.length === 0) return <HomeEn />;
  if (path[0] === "therapies" && path[1]) {
    const service = servicesEn.find((item) => item.slug === path[1]);
    return service ? <TherapyEn service={service} /> : notFound();
  }
  const pages: Record<string, React.ReactNode> = {
    about: <AboutEn />, "our-team": <TeamEn />, therapies: <TherapiesEn />,
    "reviqa-method": <MethodEn />, "programmes-pricing": <PricingEn />,
    gallery: <GalleryEn />, faq: <FaqEn />, testimonials: <TestimonialsEn />,
    blog: <BlogEn />, contact: <ContactEn />, privacy: <PrivacyEn />, cookies: <CookiesEn />,
  };
  return path.length === 1 && pages[path[0]] ? pages[path[0]] : notFound();
}
