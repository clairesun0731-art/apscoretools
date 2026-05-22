import Image from "next/image";
import Link from "next/link";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import TrackedLink from "@/components/TrackedLink";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Image
            alt=""
            aria-hidden="true"
            className="footer-icon"
            height={32}
            src="/logo-ap-score-calculator-square.png"
            width={32}
          />
          <p>
            AP Score Tools is unofficial and is not affiliated with or endorsed
            by the College Board. AP, Advanced Placement, and related exam names
            are trademarks of their respective owners.
          </p>
        </div>

        <div className="footer-link-groups">
          <nav className="footer-links" aria-label="Tools">
            <strong>Tools</strong>
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
            <TrackedLink
              eventName="coming_soon_subject_click"
              eventParams={{ subject: "ap_biology", source: "footer" }}
              href="/ap-biology-score-calculator/"
            >
              AP Biology Score Calculator
            </TrackedLink>
            <Link href="/ap-calculus-ab-score-calculator/">
              AP Calculus AB Score Calculator
            </Link>
            <Link href="/ap-lang-score-calculator/">
              AP Lang Score Calculator
            </Link>
            <Link href="/apush-score-calculator/">
              APUSH Score Calculator
            </Link>
          </nav>

          <nav className="footer-links" aria-label="Learn">
            <strong>Learn</strong>
            <Link href="/how-ap-environmental-science-is-scored/">
              How AP Environmental Science Is Scored
            </Link>
          </nav>

          <nav className="footer-links" aria-label="Legal">
            <strong>Legal</strong>
            <Link href="/about/">About</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms-of-use/">Terms of Use</Link>
            <CookiePreferencesButton />
          </nav>
        </div>
      </div>
    </footer>
  );
}
