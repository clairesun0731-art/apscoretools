import Link from "next/link";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import TrackedLink from "@/components/TrackedLink";
import { getPrimaryCalculatorNavGroups } from "@/lib/apCalculatorDirectory";

const calculatorNavGroups = getPrimaryCalculatorNavGroups();

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
          <div className="footer-link-groups">
            <nav className="footer-links" aria-label="AP Score Tools">
              <strong>AP Score Tools</strong>
              <Link href="/">Home</Link>
              <TrackedLink
                eventName="calculator_hub_click"
                eventParams={{ source: "footer" }}
                href="/ap-score-calculators/"
              >
                AP Score Calculators
              </TrackedLink>
              <Link href="/about/">About</Link>
              <Link href="/guides/">AP Score Guides</Link>
              <Link href="/privacy-policy/">Privacy Policy</Link>
              <Link href="/terms-of-use/">Terms of Use</Link>
            </nav>

            <nav className="footer-links" aria-label="AP Score Guides">
              <strong>AP Score Guides</strong>
              <Link href="/when-do-ap-scores-come-out/">
                When Do AP Scores Come Out?
              </Link>
              <Link href="/how-to-check-ap-scores/">How to Check AP Scores</Link>
              <Link href="/what-do-ap-scores-mean/">
                What Do AP Scores Mean?
              </Link>
              <Link href="/guides/ap-score-release/">
                AP Score Release Guides
              </Link>
              <Link href="/guides/ap-score-meaning/">
                AP Score Meaning Guides
              </Link>
              <Link href="/guides/ap-scoring-guides/">AP Scoring Guides</Link>
            </nav>
          </div>

          <nav
            aria-label="AP calculator links by category"
            className="footer-calculator-nav"
          >
            {calculatorNavGroups.map((group) => (
              <div className="footer-calculator-column" key={group.category}>
                <strong>{group.displayName}</strong>
                {group.items.map((calculator) =>
                  calculator.status === "live" ? (
                    <Link href={calculator.href} key={calculator.href}>
                      {calculator.navTitle}
                    </Link>
                  ) : (
                    <span className="footer-soon-item" key={calculator.href}>
                      <span>{calculator.navTitle}</span>
                      <span>Coming Soon</span>
                    </span>
                  ),
                )}
              </div>
            ))}
          </nav>

          <div className="footer-legal-row">
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
      </div>
    </footer>
  );
}
