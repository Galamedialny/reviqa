"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const GA_ID = "G-RD86DGX0GV";
export const COOKIE_CONSENT_EVENT = "reviqa-cookie-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  if (!document.getElementById("reviqa-google-analytics")) {
    const script = document.createElement("script");
    script.id = "reviqa-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false });
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const updateConsent = (choice: string | null) => {
      if (choice === "accepted") {
        loadGoogleAnalytics();
        window.gtag?.("consent", "update", { analytics_storage: "granted" });
        setEnabled(true);
      } else {
        window.gtag?.("consent", "update", { analytics_storage: "denied" });
        setEnabled(false);
      }
    };

    updateConsent(localStorage.getItem("reviqa-cookie-choice"));

    const handleConsent = (event: Event) => {
      updateConsent((event as CustomEvent<string>).detail);
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsent);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname,
    });
  }, [enabled, pathname]);

  useEffect(() => {
    if (!enabled) return;

    const trackContactClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest("a");
      const href = link?.getAttribute("href") || "";
      let method: string | null = null;

      if (href.startsWith("tel:")) method = "phone";
      else if (href.startsWith("mailto:")) method = "email";
      else if (href.includes("wa.me") || href.includes("whatsapp")) method = "whatsapp";

      if (method) window.gtag?.("event", "generate_lead", { method });
    };

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, [enabled]);

  return null;
}
