import Image from "next/image";
import Link from "next/link";

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
            <Link href="/ap-score-calculators/">AP Score Calculators</Link>
            <Link href="/ap-environmental-science-score-calculator/">
              AP Environmental Science
            </Link>
            <Link href="/ap-biology-score-calculator/">
              AP Biology
            </Link>
            <Link href="/ap-chemistry-score-calculator/">
              AP Chemistry
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
          </nav>
        </div>
      </div>
    </footer>
  );
}
