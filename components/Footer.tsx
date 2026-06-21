import Link from "next/link";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import TrackedLink from "@/components/TrackedLink";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>AP Score Tools</strong>
          <p>
            Free, unofficial AP score calculators and AP score guides for U.S.
            AP students.
          </p>
        </div>

        <div className="footer-content">
          <div className="footer-link-groups footer-columns">
            <nav className="footer-links" aria-label="Calculators">
              <strong>Calculators</strong>
              <TrackedLink
                eventName="calculator_hub_click"
                eventParams={{ source: "footer" }}
                href="/ap-score-calculators/"
              >
                AP Score Calculators
              </TrackedLink>
              <Link href="/ap-environmental-science-score-calculator/">
                AP Environmental Science Score Calculator
              </Link>
              <Link href="/ap-chemistry-score-calculator/">
                AP Chemistry Score Calculator
              </Link>
            </nav>

            <nav className="footer-links" aria-label="Guides">
              <strong>Guides</strong>
              <Link href="/how-ap-environmental-science-is-scored/">
                How AP Environmental Science Is Scored
              </Link>
              <Link href="/when-do-ap-scores-come-out/">
                When Do AP Scores Come Out?
              </Link>
              <Link href="/how-to-check-ap-scores/">How to Check AP Scores</Link>
            </nav>

            <nav className="footer-links" aria-label="Legal">
              <strong>Legal</strong>
              <Link href="/about/">About</Link>
              <Link href="/privacy-policy/">Privacy Policy</Link>
              <Link href="/terms-of-use/">Terms of Use</Link>
            </nav>
          </div>

          <div className="footer-links footer-legal">
            <strong>Legal / Disclaimer</strong>
            <p>
              AP Score Tools is unofficial and is not affiliated with or
              endorsed by the College Board. AP, Advanced Placement, and
              related exam names are trademarks of their respective owners.
              Calculator results are estimates only.
            </p>
            <CookiePreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
