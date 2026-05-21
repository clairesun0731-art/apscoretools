"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { hasAnalyticsConsent } from "@/lib/consent";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function AnalyticsProvider() {
  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const hasConsent = hasAnalyticsConsent();

      if (gaId) {
        (window as Window & Record<string, boolean>)[`ga-disable-${gaId}`] =
          !hasConsent;
      }

      setCanLoadAnalytics(hasConsent);
    };

    syncConsent();
    window.addEventListener("analytics-consent-updated", syncConsent);

    return () => {
      window.removeEventListener("analytics-consent-updated", syncConsent);
    };
  }, []);

  if (!gaId || !canLoadAnalytics) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
