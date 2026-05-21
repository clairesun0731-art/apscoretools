"use client";

export default function CookiePreferencesButton() {
  return (
    <button
      className="footer-button-link"
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("open-cookie-preferences"))
      }
    >
      Cookie Preferences
    </button>
  );
}
