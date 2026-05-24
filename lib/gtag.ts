import { hasAnalyticsConsent } from "@/lib/consent";

type GtagEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
};

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      eventNameOrId: string | Date,
      params?: GtagEventParams,
    ) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params: GtagEventParams = {}) {
  if (typeof window === "undefined") return;

  if (!hasAnalyticsConsent()) {
    if (process.env.NODE_ENV === "development") {
      console.log("[GA4] blocked by consent:", eventName, params);
    }
    return;
  }

  if (!window.gtag) {
    if (process.env.NODE_ENV === "development") {
      console.log("[GA4] blocked because gtag is not ready:", eventName, params);
    }

    window.setTimeout(() => {
      if (!hasAnalyticsConsent()) return;

      if (!window.gtag) {
        if (process.env.NODE_ENV === "development") {
          console.log("[GA4] gtag still not ready:", eventName, params);
        }
        return;
      }

      window.gtag("event", eventName, params);
      if (process.env.NODE_ENV === "development") {
        console.log("[GA4] event sent after retry:", eventName, params);
      }
    }, 1000);
    return;
  }

  window.gtag("event", eventName, params);
  if (process.env.NODE_ENV === "development") {
    console.log("[GA4] event sent:", eventName, params);
  }
}
