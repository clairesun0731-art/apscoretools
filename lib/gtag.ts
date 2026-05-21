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
  if (!window.gtag) return;

  window.gtag("event", eventName, params);
}
