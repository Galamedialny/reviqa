"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { asset, contact } from "@/lib/content";
import { COOKIE_CONSENT_EVENT } from "@/components/GoogleAnalytics";

const nav = [
  ["/", "Úvod"],
  ["/o-nas", "O nás"],
  ["/sluzby", "Služby"],
  ["/metoda-reviqa", "Metóda"],
  ["/programy-cennik", "Cenník"],
  ["/blog", "Blog"],
  ["/kontakt", "Kontakt"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookies, setCookies] = useState(true);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setCookies(localStorage.getItem("reviqa-cookie-choice") === null);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const chooseCookies = (choice: string) => {
    localStorage.setItem("reviqa-cookie-choice", choice);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: choice }));
    setCookies(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <Link href="/" className="brand" aria-label="REVIQA – domov">
            <img src={asset("/assets/reviqa-logo-header.png")} alt="REVIQA Biomedica" />
          </Link>
          <button className="menu-toggle" aria-label="Otvoriť menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Hlavná navigácia">
            {nav.map(([href, label]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
            <div className="languages" aria-label="Jazykové verzie">
              <span className="active" title="Slovenčina">🇸🇰</span>
              <span title="English – pripravujeme">🇬🇧</span>
              <span title="Deutsch – pripravujeme">🇩🇪</span>
              <span title="Polski – pripravujeme">🇵🇱</span>
              <span title="Русский – pripravujeme">🇷🇺</span>
            </div>
            <a className="nav-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">Rezervujte si konzultáciu</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-grid shell">
          <div>
            <img className="footer-logo" src={asset("/assets/reviqa-logo-transparent.png")} alt="REVIQA Biomedica" />
            <p>Súkromné regeneračné centrum s individuálnym prístupom k pohybu, regenerácii a dlhodobej vitalite.</p>
          </div>
          <div>
            <h3>Kontakt</h3>
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <address>{contact.address}</address>
            <p>Po–Pi: 9:00–12:00, 13:00–15:00<br />Víkend a iný čas: na objednávku</p>
          </div>
          <div>
            <h3>Informácie</h3>
            <Link href="/faq">Časté otázky</Link>
            <Link href="/referencie">Referencie</Link>
            <Link href="/galeria">Galéria</Link>
            <Link href="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link>
            <Link href="/cookies">Cookies</Link>
            <button className="footer-cookie-button" type="button" onClick={() => setCookies(true)}>Nastavenie cookies</button>
          </div>
          <div>
            <h3>Sledujte nás</h3>
            <div className="socials" aria-label="Sociálne siete – odkazy budú doplnené">
              <span aria-label="Facebook">f</span><span aria-label="Instagram">◎</span>
            </div>
            <p className="muted">Odkazy doplníme čoskoro.</p>
            <div className="footer-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199735.6963376034!2d20.152553270098007!3d49.01102797600171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3b8f55e5821b%3A0xa48b688bd1373dd1!2sReviqa%20Biomedica!5e1!3m2!1scs!2ssk!4v1784717514004!5m2!1scs!2ssk" title="Poloha REVIQA Biomedica na Google Maps" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} REVIQA. Všetky práva vyhradené.</span>
          <span>Web vytvorila mediálna agentúra <a href="https://www.galamedia.sk" target="_blank" rel="noreferrer">GALA MEDIA</a></span>
        </div>
      </footer>

      <div className="contact-float">
        <a className="call-chip" href={`tel:${contact.phone}`} aria-label="Zavolať do REVIQA">Zavolať</a>
        <a className="wa-chip" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Napísať cez WhatsApp">
          <span className="online-dot" aria-hidden="true" />
          <span className="wa-copy"><b>WhatsApp</b><small>Sme online</small></span>
        </a>
      </div>

      {cookies && (
        <div className="cookie-bar" role="dialog" aria-label="Nastavenie cookies">
          <p><b>Nastavenie cookies</b><br />Používame nevyhnutné technológie a po vašom súhlase Google Analytics na meranie návštevnosti. <Link href="/cookies">Viac informácií</Link></p>
          <div><button onClick={() => chooseCookies("necessary")}>Iba nevyhnutné</button><button className="gold-button" onClick={() => chooseCookies("accepted")}>Súhlasím</button></div>
        </div>
      )}
    </>
  );
}
