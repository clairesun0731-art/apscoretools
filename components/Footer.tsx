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

        <div className="footer-link-groups">
          <nav className="footer-links" aria-label="AP Score Tools">
            <strong>AP Score Tools</strong>
            <Link href="/about/">About</Link>
            <TrackedLink
              eventName="calculator_hub_click"
              eventParams={{ source: "footer" }}
              href="/ap-score-calculators/"
            >
              AP Score Calculators
            </TrackedLink>
            <Link href="/guides/">AP Score Guides</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms-of-use/">Terms of Use</Link>
          </nav>

          <nav className="footer-links" aria-label="Popular Calculators">
            <strong>Popular Calculators</strong>
            <Link href="/ap-environmental-science-score-calculator/">
              AP Environmental Science Score Calculator
            </Link>
            <Link href="/ap-chemistry-score-calculator/">
              AP Chemistry Score Calculator
            </Link>
            <Link href="/ap-human-geography-score-calculator/">
              AP Human Geography Score Calculator
            </Link>
            <Link href="/ap-macroeconomics-score-calculator/">
              AP Macroeconomics Score Calculator
            </Link>
            <Link href="/ap-world-history-score-calculator/">
              AP World History Score Calculator
            </Link>
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
            <Link href="/how-ap-environmental-science-is-scored/">
              How AP Environmental Science Is Scored
            </Link>
          </nav>

          <nav className="footer-links" aria-label="Legal">
            <strong>Legal / Disclaimer</strong>
            <p>
              AP Score Tools is unofficial and is not affiliated with or
              endorsed by the College Board. Calculator results are estimates
              only.
            </p>
            <CookiePreferencesButton />
          </nav>
        </div>
      </div>
    </footer>
  );
}
