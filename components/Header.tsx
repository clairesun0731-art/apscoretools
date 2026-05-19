import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="logo" href="/">
          <Image
            alt="AP Score Tools"
            className="logo-mark"
            height={40}
            priority
            src="/logo-ap-score-calculator-square.png"
            width={40}
          />
          <span>AP Score Tools</span>
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/ap-score-calculators/">AP Score Calculators</Link>
          <Link href="/ap-environmental-science-score-calculator/">
            APES Calculator
          </Link>
          <Link href="/about/">About</Link>
        </div>
      </nav>
    </header>
  );
}
