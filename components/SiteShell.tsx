"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { asset, contact } from "@/lib/content";
import { contactEn } from "@/lib/content-en";
import { toEnglishPath, toSlovakPath } from "@/lib/i18n";
import { COOKIE_CONSENT_EVENT } from "@/components/GoogleAnalytics";

const navSk = [
  ["/", "Úvod"],
  ["/o-nas", "O nás"],
  ["/sluzby", "Terapie"],
  ["/metoda-reviqa", "Metóda"],
  ["/programy-cennik", "Cenník"],
  ["/blog", "Blog"],
  ["/kontakt", "Kontakt"],
] as const;

const navEn = [
  ["/en", "Home"],
  ["/en/about", "About"],
  ["/en/therapies", "Therapies"],
  ["/en/reviqa-method", "Method"],
  ["/en/programmes-pricing", "Pricing"],
  ["/en/blog", "Journal"],
  ["/en/contact", "Contact"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const english = pathname === "/en" || pathname.startsWith("/en/");
  const localeContact = english ? contactEn : contact;
  const nav = english ? navEn : navSk;
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookies, setCookies] = useState(true);

  useEffect(() => {
    document.documentElement.lang = english ? "en" : "sk";
    const frame = requestAnimationFrame(() => {
      setCookies(localStorage.getItem("reviqa-cookie-choice") === null);
    });
    return () => cancelAnimationFrame(frame);
  }, [english]);

  const chooseCookies = (choice: string) => {
    localStorage.setItem("reviqa-cookie-choice", choice);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: choice }));
    setCookies(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <Link href={english ? "/en" : "/"} className="brand" aria-label={english ? "REVIQA – home" : "REVIQA – domov"}>
            <img src={asset("/assets/reviqa-logo-header.png")} alt="REVIQA Biomedica" />
          </Link>
          <button className="menu-toggle" aria-label={english ? "Open menu" : "Otvoriť menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Hlavná navigácia">
            {nav.map(([href, label]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
            <div className="languages" aria-label={english ? "Language versions" : "Jazykové verzie"}>
              <Link className={!english ? "active" : ""} href={toSlovakPath(pathname)} title="Slovenčina" hrefLang="sk">🇸🇰</Link>
              <Link className={english ? "active" : ""} href={toEnglishPath(pathname)} title="English" hrefLang="en">🇬🇧</Link>
              <span title="Deutsch – pripravujeme">🇩🇪</span>
              <span title="Polski – pripravujeme">🇵🇱</span>
              <span title="Русский – pripravujeme">🇷🇺</span>
            </div>
            <a className="nav-cta" href={localeContact.whatsapp} target="_blank" rel="noreferrer">{english ? "Book an appointment" : "Rezervujte si termín"}</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-grid shell">
          <div>
            <img className="footer-logo" src={asset("/assets/reviqa-logo-transparent.png")} alt="REVIQA Biomedica" />
            <p>{english ? "A private regeneration centre offering individual care for movement, recovery and long-term vitality." : "Súkromné regeneračné centrum s individuálnym prístupom k pohybu, regenerácii a dlhodobej vitalite."}</p>
          </div>
          <div>
            <h3>{english ? "Contact" : "Kontakt"}</h3>
            <a href={`tel:${localeContact.phone}`}>{localeContact.phoneDisplay}</a>
            <a href={`mailto:${localeContact.email}`}>{localeContact.email}</a>
            <address>{localeContact.address}</address>
            <p>{english ? <>Mon–Fri: 9:00–15:00<br />Weekends and other times: by arrangement</> : <>Po–Pia: 9:00–15:00<br />Víkend a iné termíny: dohodou</>}</p>
          </div>
          <div>
            <h3>{english ? "Information" : "Informácie"}</h3>
            <Link href={english ? "/en/faq" : "/faq"}>{english ? "Frequently asked questions" : "Časté otázky"}</Link>
            <Link href={english ? "/en/testimonials" : "/referencie"}>{english ? "Testimonials" : "Referencie"}</Link>
            <Link href={english ? "/en/gallery" : "/galeria"}>{english ? "Gallery" : "Galéria"}</Link>
            <Link href={english ? "/en/privacy" : "/ochrana-osobnych-udajov"}>{english ? "Privacy policy" : "Ochrana osobných údajov"}</Link>
            <Link href={english ? "/en/cookies" : "/cookies"}>Cookies</Link>
            <button className="footer-cookie-button" type="button" onClick={() => setCookies(true)}>{english ? "Cookie settings" : "Nastavenie cookies"}</button>
          </div>
          <div>
            <h3>{english ? "Follow us" : "Sledujte nás"}</h3>
            <div className="socials" aria-label={english ? "Social media links will be added" : "Sociálne siete – odkazy budú doplnené"}>
              <span aria-label="Facebook">f</span><span aria-label="Instagram">◎</span>
            </div>
            <p className="muted">{english ? "Links will be added soon." : "Odkazy doplníme čoskoro."}</p>
            <div className="footer-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199735.6963376034!2d20.152553270098007!3d49.01102797600171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3b8f55e5821b%3A0xa48b688bd1373dd1!2sReviqa%20Biomedica!5e1!3m2!1scs!2ssk!4v1784717514004!5m2!1scs!2ssk" title="Poloha REVIQA Biomedica na Google Maps" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} REVIQA. {english ? "All rights reserved." : "Všetky práva vyhradené."}</span>
          <span>{english ? "Website by media agency" : "Web vytvorila mediálna agentúra"} <a href="https://www.galamedia.sk" target="_blank" rel="noreferrer">GALA MEDIA</a></span>
        </div>
      </footer>

      <div className="contact-float">
        <a className="call-chip" href={`tel:${localeContact.phone}`} aria-label={english ? "Call REVIQA" : "Zavolať do REVIQA"}>{english ? "Call" : "Zavolať"}</a>
        <a className="wa-chip" href={localeContact.whatsapp} target="_blank" rel="noreferrer" aria-label={english ? "Message REVIQA on WhatsApp" : "Napísať cez WhatsApp"}>
          <span className="online-dot" aria-hidden="true" />
          <span className="wa-copy"><b>WhatsApp</b><small>{english ? "We are online" : "Sme online"}</small></span>
        </a>
      </div>

      {cookies && (
        <div className="cookie-bar" role="dialog" aria-label={english ? "Cookie settings" : "Nastavenie cookies"}>
          <p><b>{english ? "Cookie settings" : "Nastavenie cookies"}</b><br />{english ? "We use essential technologies and, with your consent, Google Analytics to measure website traffic." : "Používame nevyhnutné technológie a po vašom súhlase Google Analytics na meranie návštevnosti."} <Link href={english ? "/en/cookies" : "/cookies"}>{english ? "Learn more" : "Viac informácií"}</Link></p>
          <div><button onClick={() => chooseCookies("necessary")}>{english ? "Essential only" : "Iba nevyhnutné"}</button><button className="gold-button" onClick={() => chooseCookies("accepted")}>{english ? "Accept" : "Súhlasím"}</button></div>
        </div>
      )}
    </>
  );
}
