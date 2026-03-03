import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

interface ImportMeta {
  readonly env: {
    readonly VITE_GA_ID?: string;
  };
}

export const Analytics = () => {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID as string | undefined;
    if (!gaId) return;

    // Load gtag script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { (window.dataLayer as unknown[]).push(arguments); } as any;
    window.gtag('js', new Date());
    window.gtag('config', gaId, { anonymize_ip: true, send_page_view: true });

    // Scroll depth basic tracking
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = Math.round((doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100);
      if (scrolled % 25 === 0) {
        window.gtag?.('event', 'scroll_depth', { value: scrolled });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
};


