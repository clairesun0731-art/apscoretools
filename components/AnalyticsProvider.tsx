"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getStoredConsent } from "@/lib/consent";

export function AnalyticsProvider() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    function syncConsent() {
      const consent = getStoredConsent();
      setAnalyticsEnabled(consent === "accepted");

      const gaId = process.env.NEXT_PUBLIC_GA_ID;
      if (gaId) {
        (window as Window & Record<string, boolean>)[`ga-disable-${gaId}`] =
          consent !== "accepted";
      }

      if (process.env.NODE_ENV === "development") {
        console.log("[GA4] consent sync:", consent);
      }
    }

    syncConsent();
    window.addEventListener("analytics-consent-updated", syncConsent);

    return () => {
      window.removeEventListener("analytics-consent-updated", syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!analyticsEnabled) return;

    const timer = window.setTimeout(() => {
      if (window.gtag) {
        window.gtag("event", "analytics_consent_accepted", {
          source: "consent_banner",
        });

        if (process.env.NODE_ENV === "development") {
          console.log("[GA4] analytics_consent_accepted sent");
        }
      } else if (process.env.NODE_ENV === "development") {
        console.log("[GA4] gtag not ready: analytics_consent_accepted");
      }
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [analyticsEnabled]);

  if (!analyticsEnabled) return null;

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[GA4] NEXT_PUBLIC_GA_ID is missing");
    }
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}

export default AnalyticsProvider;
