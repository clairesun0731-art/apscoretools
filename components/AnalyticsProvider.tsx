"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getStoredConsent } from "@/lib/consent";

type GoogleAnalyticsClientProps = {
  gaId: string;
};

function GoogleAnalyticsClient({ gaId }: GoogleAnalyticsClientProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("[GA4] gtag script should load:", gaId);
    }
  }, [gaId]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}

export function AnalyticsProvider() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    function syncConsent() {
      const consent = getStoredConsent();
      const nextAnalyticsEnabled = consent === "accepted";
      setAnalyticsEnabled(nextAnalyticsEnabled);

      const gaId = process.env.NEXT_PUBLIC_GA_ID;
      if (gaId) {
        (window as unknown as Record<string, boolean>)[`ga-disable-${gaId}`] =
          consent !== "accepted";
      }

      if (process.env.NODE_ENV === "development") {
        console.log("[GA4] consent read:", consent);
        console.log("[GA4] consent sync:", consent);
        if (nextAnalyticsEnabled) {
          console.log("[GA4] AnalyticsProvider enables GA:", gaId);
        }
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

  return <GoogleAnalyticsClient gaId={gaId} />;
}

export default AnalyticsProvider;
