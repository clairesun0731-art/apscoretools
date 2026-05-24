import { hasAnalyticsConsent } from "@/lib/consent";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: GtagEventParams,
    ) => void;
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
      console.log("[GA4] gtag not ready:", eventName, params);
    }
    return;
  }

  window.gtag("event", eventName, params);

  if (process.env.NODE_ENV === "development") {
    console.log("[GA4] event sent:", eventName, params);
  }
}
