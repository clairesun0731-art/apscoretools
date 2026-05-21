import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";

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
          <TrackedLink
            eventName="calculator_hub_click"
            eventParams={{ source: "header" }}
            href="/ap-score-calculators/"
          >
            AP Score Calculators
          </TrackedLink>
          <Link href="/ap-environmental-science-score-calculator/">
            APES Calculator
          </Link>
          <Link href="/about/">About</Link>
        </div>
      </nav>
    </header>
  );
}
