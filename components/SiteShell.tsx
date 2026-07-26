"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { asset, contact } from "@/lib/content";
import { contactEn } from "@/lib/content-en";
import { contactDe } from "@/lib/content-de";
import { contactPl } from "@/lib/content-pl";
import { contactRu } from "@/lib/content-ru";
import { toEnglishPath, toGermanPath, toPolishPath, toRussianPath, toSlovakPath } from "@/lib/i18n";
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

const navDe = [
  ["/de", "Start"],
  ["/de/ueber-uns", "Über uns"],
  ["/de/therapien", "Therapien"],
  ["/de/reviqa-methode", "Methode"],
  ["/de/programme-preise", "Preise"],
  ["/de/blog", "Journal"],
  ["/de/kontakt", "Kontakt"],
] as const;

const navPl = [
  ["/pl", "Start"],
  ["/pl/o-nas", "O nas"],
  ["/pl/terapie", "Terapie"],
  ["/pl/metoda-reviqa", "Metoda"],
  ["/pl/programy-cennik", "Cennik"],
  ["/pl/blog", "Blog"],
  ["/pl/kontakt", "Kontakt"],
] as const;

const navRu = [
  ["/ru", "Главная"],
  ["/ru/o-nas", "О нас"],
  ["/ru/terapii", "Терапии"],
  ["/ru/metod-reviqa", "Метод"],
  ["/ru/programmy-ceny", "Цены"],
  ["/ru/blog", "Журнал"],
  ["/ru/kontakty", "Контакты"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const english = pathname === "/en" || pathname.startsWith("/en/");
  const german = pathname === "/de" || pathname.startsWith("/de/");
  const polish = pathname === "/pl" || pathname.startsWith("/pl/");
  const russian = pathname === "/ru" || pathname.startsWith("/ru/");
  const locale = russian ? "ru" : polish ? "pl" : german ? "de" : english ? "en" : "sk";
  const localeContact = russian ? contactRu : polish ? contactPl : german ? contactDe : english ? contactEn : contact;
  const nav = russian ? navRu : polish ? navPl : german ? navDe : english ? navEn : navSk;
  const ui = {
    sk: {
      home: "/", homeLabel: "REVIQA – domov", menu: "Otvoriť menu", nav: "Hlavná navigácia", languages: "Jazykové verzie",
      appointment: "Rezervujte si termín", footer: "Súkromné regeneračné centrum s individuálnym prístupom k pohybu, regenerácii a dlhodobej vitalite.",
      contact: "Kontakt", hours: <>Po–Pia: 9:00–15:00<br />Víkend a iné termíny: dohodou</>, information: "Informácie",
      faq: "Časté otázky", testimonials: "Referencie", gallery: "Galéria", privacy: "Ochrana osobných údajov",
      cookieSettings: "Nastavenie cookies", follow: "Sledujte nás", social: "Sociálne siete – odkazy budú doplnené",
      linksSoon: "Odkazy doplníme čoskoro.", rights: "Všetky práva vyhradené.", agency: "Web vytvorila mediálna agentúra",
      call: "Zavolať", callLabel: "Zavolať do REVIQA", messageLabel: "Napísať cez WhatsApp", online: "Sme online",
      cookieText: "Používame nevyhnutné technológie a po vašom súhlase Google Analytics na meranie návštevnosti.",
      more: "Viac informácií", necessary: "Iba nevyhnutné", accept: "Súhlasím", faqHref: "/faq", testimonialsHref: "/referencie",
      galleryHref: "/galeria", privacyHref: "/ochrana-osobnych-udajov", cookiesHref: "/cookies",
    },
    en: {
      home: "/en", homeLabel: "REVIQA – home", menu: "Open menu", nav: "Main navigation", languages: "Language versions",
      appointment: "Book an appointment", footer: "A private regeneration centre offering individual care for movement, recovery and long-term vitality.",
      contact: "Contact", hours: <>Mon–Fri: 9:00–15:00<br />Weekends and other times: by arrangement</>, information: "Information",
      faq: "Frequently asked questions", testimonials: "Testimonials", gallery: "Gallery", privacy: "Privacy policy",
      cookieSettings: "Cookie settings", follow: "Follow us", social: "Social media links will be added",
      linksSoon: "Links will be added soon.", rights: "All rights reserved.", agency: "Website by media agency",
      call: "Call", callLabel: "Call REVIQA", messageLabel: "Message REVIQA on WhatsApp", online: "We are online",
      cookieText: "We use essential technologies and, with your consent, Google Analytics to measure website traffic.",
      more: "Learn more", necessary: "Essential only", accept: "Accept", faqHref: "/en/faq", testimonialsHref: "/en/testimonials",
      galleryHref: "/en/gallery", privacyHref: "/en/privacy", cookiesHref: "/en/cookies",
    },
    de: {
      home: "/de", homeLabel: "REVIQA – Startseite", menu: "Menü öffnen", nav: "Hauptnavigation", languages: "Sprachversionen",
      appointment: "Termin vereinbaren", footer: "Privates Regenerationszentrum mit individueller Betreuung für Bewegung, Regeneration und langfristige Vitalität.",
      contact: "Kontakt", hours: <>Mo–Fr: 9:00–15:00<br />Wochenende und andere Zeiten: nach Vereinbarung</>, information: "Informationen",
      faq: "Häufige Fragen", testimonials: "Erfahrungen", gallery: "Galerie", privacy: "Datenschutz",
      cookieSettings: "Cookie-Einstellungen", follow: "Folgen Sie uns", social: "Links zu sozialen Netzwerken werden ergänzt",
      linksSoon: "Links folgen in Kürze.", rights: "Alle Rechte vorbehalten.", agency: "Website von der Medienagentur",
      call: "Anrufen", callLabel: "REVIQA anrufen", messageLabel: "REVIQA über WhatsApp schreiben", online: "Wir sind online",
      cookieText: "Wir verwenden notwendige Technologien und mit Ihrer Einwilligung Google Analytics zur Reichweitenmessung.",
      more: "Mehr erfahren", necessary: "Nur notwendige", accept: "Zustimmen", faqHref: "/de/haeufige-fragen", testimonialsHref: "/de/erfahrungen",
      galleryHref: "/de/galerie", privacyHref: "/de/datenschutz", cookiesHref: "/de/cookies",
    },
    pl: {
      home: "/pl", homeLabel: "REVIQA – strona główna", menu: "Otwórz menu", nav: "Główna nawigacja", languages: "Wersje językowe",
      appointment: "Umów wizytę", footer: "Prywatne centrum regeneracji z indywidualną opieką nad ruchem, regeneracją i długoterminową witalnością.",
      contact: "Kontakt", hours: <>Pon–Pt: 9:00–15:00<br />Weekendy i inne godziny: po uzgodnieniu</>, information: "Informacje",
      faq: "Najczęściej zadawane pytania", testimonials: "Opinie", gallery: "Galeria", privacy: "Ochrona danych osobowych",
      cookieSettings: "Ustawienia cookies", follow: "Obserwuj nas", social: "Linki do mediów społecznościowych zostaną dodane",
      linksSoon: "Linki pojawią się wkrótce.", rights: "Wszelkie prawa zastrzeżone.", agency: "Strona internetowa agencji medialnej",
      call: "Zadzwoń", callLabel: "Zadzwoń do REVIQA", messageLabel: "Napisz do REVIQA przez WhatsApp", online: "Jesteśmy online",
      cookieText: "Używamy niezbędnych technologii, a za zgodą także Google Analytics do pomiaru ruchu.",
      more: "Więcej informacji", necessary: "Tylko niezbędne", accept: "Akceptuję", faqHref: "/pl/faq", testimonialsHref: "/pl/opinie",
      galleryHref: "/pl/galeria", privacyHref: "/pl/ochrona-danych", cookiesHref: "/pl/cookies",
    },
    ru: {
      home: "/ru", homeLabel: "REVIQA — главная страница", menu: "Открыть меню", nav: "Главная навигация", languages: "Языковые версии",
      appointment: "Записаться", footer: "Частный центр восстановления с индивидуальным подходом к движению, регенерации и долгосрочному жизненному тонусу.",
      contact: "Контакты", hours: <>Пн–Пт: 9:00–15:00<br />Выходные и другое время: по договорённости</>, information: "Информация",
      faq: "Часто задаваемые вопросы", testimonials: "Отзывы", gallery: "Галерея", privacy: "Защита персональных данных",
      cookieSettings: "Настройки cookies", follow: "Мы в социальных сетях", social: "Ссылки на социальные сети будут добавлены",
      linksSoon: "Ссылки появятся в ближайшее время.", rights: "Все права защищены.", agency: "Сайт создан медиаагентством",
      call: "Позвонить", callLabel: "Позвонить в REVIQA", messageLabel: "Написать REVIQA в WhatsApp", online: "Мы онлайн",
      cookieText: "Мы используем необходимые технологии и, с вашего согласия, Google Analytics для измерения посещаемости.",
      more: "Подробнее", necessary: "Только необходимые", accept: "Принять", faqHref: "/ru/faq", testimonialsHref: "/ru/otzyvy",
      galleryHref: "/ru/galereya", privacyHref: "/ru/zashchita-dannyh", cookiesHref: "/ru/cookies",
    },
  }[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookies, setCookies] = useState(true);

  useEffect(() => {
    document.documentElement.lang = locale;
    const frame = requestAnimationFrame(() => {
      setCookies(localStorage.getItem("reviqa-cookie-choice") === null);
    });
    return () => cancelAnimationFrame(frame);
  }, [locale]);

  const chooseCookies = (choice: string) => {
    localStorage.setItem("reviqa-cookie-choice", choice);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: choice }));
    setCookies(false);
  };

  return (
    <>
      <header className={`site-header${locale === "sk" && pathname === "/" ? " sk-home-header" : ""}`}>
        <div className="nav-wrap">
          <Link href={ui.home} className="brand" aria-label={ui.homeLabel}>
            <img src={asset("/assets/reviqa-logo-header.png")} alt="REVIQA Biomedica" />
          </Link>
          <button className="menu-toggle" aria-label={ui.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label={ui.nav}>
            {nav.map(([href, label]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
            <div className="languages" aria-label={ui.languages}>
              <Link className={locale === "sk" ? "active" : ""} href={toSlovakPath(pathname)} title="Slovenčina" hrefLang="sk">🇸🇰</Link>
              <Link className={english ? "active" : ""} href={toEnglishPath(pathname)} title="English" hrefLang="en">🇬🇧</Link>
              <Link className={german ? "active" : ""} href={toGermanPath(pathname)} title="Deutsch" hrefLang="de">🇩🇪</Link>
              <Link className={polish ? "active" : ""} href={toPolishPath(pathname)} title="Polski" hrefLang="pl">🇵🇱</Link>
              <Link className={russian ? "active" : ""} href={toRussianPath(pathname)} title="Русский" hrefLang="ru">🇷🇺</Link>
            </div>
            <a className="nav-cta" href={localeContact.whatsapp} target="_blank" rel="noreferrer">{ui.appointment}</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-grid shell">
          <div>
            <img className="footer-logo" src={asset("/assets/reviqa-logo-transparent.png")} alt="REVIQA Biomedica" />
            <p>{ui.footer}</p>
          </div>
          <div>
            <h3>{ui.contact}</h3>
            <a href={`tel:${localeContact.phone}`}>{localeContact.phoneDisplay}</a>
            <a href={`mailto:${localeContact.email}`}>{localeContact.email}</a>
            <address>{localeContact.address}</address>
            <p>{ui.hours}</p>
          </div>
          <div>
            <h3>{ui.information}</h3>
            <Link href={ui.faqHref}>{ui.faq}</Link>
            <Link href={ui.testimonialsHref}>{ui.testimonials}</Link>
            <Link href={ui.galleryHref}>{ui.gallery}</Link>
            <Link href={ui.privacyHref}>{ui.privacy}</Link>
            <Link href={ui.cookiesHref}>Cookies</Link>
            <button className="footer-cookie-button" type="button" onClick={() => setCookies(true)}>{ui.cookieSettings}</button>
          </div>
          <div>
            <h3>{ui.follow}</h3>
            <div className="socials" aria-label={ui.social}>
              <span aria-label="Facebook">f</span><span aria-label="Instagram">◎</span>
            </div>
            <p className="muted">{ui.linksSoon}</p>
            <div className="footer-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199735.6963376034!2d20.152553270098007!3d49.01102797600171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3b8f55e5821b%3A0xa48b688bd1373dd1!2sReviqa%20Biomedica!5e1!3m2!1scs!2ssk!4v1784717514004!5m2!1scs!2ssk" title="Poloha REVIQA Biomedica na Google Maps" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} REVIQA. {ui.rights}</span>
          <span>{ui.agency} <a href="https://www.galamedia.sk" target="_blank" rel="noreferrer">GALA MEDIA</a></span>
        </div>
      </footer>

      <div className="contact-float">
        <a className="call-chip" href={`tel:${localeContact.phone}`} aria-label={ui.callLabel}>{ui.call}</a>
        <a className="wa-chip" href={localeContact.whatsapp} target="_blank" rel="noreferrer" aria-label={ui.messageLabel}>
          <span className="online-dot" aria-hidden="true" />
          <span className="wa-copy"><b>WhatsApp</b><small>{ui.online}</small></span>
        </a>
      </div>

      {cookies && (
        <div className="cookie-bar" role="dialog" aria-label={ui.cookieSettings}>
          <p><b>{ui.cookieSettings}</b><br />{ui.cookieText} <Link href={ui.cookiesHref}>{ui.more}</Link></p>
          <div><button onClick={() => chooseCookies("necessary")}>{ui.necessary}</button><button className="gold-button" onClick={() => chooseCookies("accepted")}>{ui.accept}</button></div>
        </div>
      )}
    </>
  );
}
