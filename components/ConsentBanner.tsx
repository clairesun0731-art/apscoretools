"use client";

import Link from "next/link";
import { getStoredConsent, setStoredConsent } from "@/lib/consent";

import { useEffect, useState } from "react";

function dispatchConsentUpdated() {
  if (process.env.NODE_ENV === "development") {
    console.log("[GA4] dispatch analytics-consent-updated");
  }
  window.dispatchEvent(new Event("analytics-consent-updated"));
}

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      const consent = getStoredConsent();
      if (process.env.NODE_ENV === "development") {
        console.log("[GA4] consent read:", consent);
      }
      setIsVisible(consent === null);
    }, 0);

    const openPreferences = () => setIsVisible(true);
    window.addEventListener("open-cookie-preferences", openPreferences);

    return () => {
      window.removeEventListener("open-cookie-preferences", openPreferences);
    };
  }, []);

  const chooseConsent = (value: "accepted" | "rejected") => {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `[GA4] ${
          value === "accepted" ? "Accept" : "Reject"
        } analytics clicked`,
      );
    }
    setStoredConsent(value);
    setIsVisible(false);
    dispatchConsentUpdated();
  };

  if (!isVisible) return null;

  return (
    <div className="consent-banner-wrap" role="region" aria-label="Cookie consent">
      <div className="consent-banner">
        <div className="consent-copy">
          <h2>We use cookies to improve AP Score Tools</h2>
          <p>
            We use necessary cookies to make the site work. With your consent,
            we also use analytics cookies to understand how students use our
            calculators and improve the site. You can accept or reject analytics
            cookies.
          </p>
          <Link href="/privacy-policy/">Privacy Policy</Link>
        </div>
        <div className="consent-actions">
          <button type="button" onClick={() => chooseConsent("rejected")}>
            Reject analytics
          </button>
          <button type="button" onClick={() => chooseConsent("accepted")}>
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
