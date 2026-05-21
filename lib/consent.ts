export type ConsentValue = "accepted" | "rejected" | null;

export const CONSENT_STORAGE_KEY = "ap_score_tools_cookie_consent";

export function getStoredConsent(): ConsentValue {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);

  if (value === "accepted" || value === "rejected") {
    return value;
  }

  return null;
}

export function setStoredConsent(value: "accepted" | "rejected") {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
}

export function hasAnalyticsConsent() {
  return getStoredConsent() === "accepted";
}
