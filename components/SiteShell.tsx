"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { asset, contact } from "@/lib/content";

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
    setCookies(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="topline">
          <span>Súkromné regeneračné centrum · Poprad</span>
          <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
        </div>
        <div className="nav-wrap">
          <Link href="/" className="brand" aria-label="REVIQA – domov">
            <img src={asset("/assets/reviqa-logo-transparent.png")} alt="REVIQA Biomedica" />
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
            <a className="nav-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">Objednať konzultáciu</a>
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
          </div>
          <div>
            <h3>Sledujte nás</h3>
            <div className="socials" aria-label="Sociálne siete – odkazy budú doplnené">
              <span aria-label="Facebook">f</span><span aria-label="Instagram">◎</span>
            </div>
            <p className="muted">Odkazy doplníme čoskoro.</p>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} REVIQA. Všetky práva vyhradené.</span>
          <span>Web vytvorila mediálna agentúra <a href="https://www.galamedia.sk" target="_blank" rel="noreferrer">GALA MEDIA</a></span>
        </div>
      </footer>

      <div className="contact-float">
        <a className="call-chip" href={`tel:${contact.phone}`} aria-label="Zavolať do REVIQA">☎</a>
        <a className="wa-chip" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Napísať cez WhatsApp">
          <span className="online-dot" /> <b>Sme online</b><small>WhatsApp</small>
        </a>
      </div>

      {cookies && (
        <div className="cookie-bar" role="dialog" aria-label="Nastavenie cookies">
          <p><b>Cookies</b><br />Používame iba základné cookies potrebné na správne fungovanie stránky. <Link href="/cookies">Viac informácií</Link></p>
          <div><button onClick={() => chooseCookies("necessary")}>Iba nevyhnutné</button><button className="gold-button" onClick={() => chooseCookies("accepted")}>Súhlasím</button></div>
        </div>
      )}
    </>
  );
}
