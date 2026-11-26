import Link from "next/link";
import CookiePreferencesButton from "./CookiePreferencesButton";
import TrackedLink from "./TrackedLink";
import { calculatorCategoryOrder, liveApCalculators } from "@/lib/apCalculatorDirectory";

export default function Footer() {
  return <footer className="atlas-footer"><div className="container">
    <div className="atlas-footer-top"><Link href="/">AP Score Tools</Link>
      <TrackedLink href="/ap-score-calculators/" eventName="calculator_hub_click" eventParams={{ source: "footer" }}>All calculators →</TrackedLink></div>
    <nav className="atlas-footer-grid" aria-label="Calculators and guides">
      {calculatorCategoryOrder.map(category => {
        const items = liveApCalculators.filter(item => item.category === category);
        return items.length > 0 && <div key={category}><h2>{category}</h2>{items.map(item =>
          <Link key={item.href} href={item.href}>{item.navTitle ?? item.shortTitle}</Link>)}</div>;
      })}
      <div><h2>Score guides</h2>
        <Link href="/guides/">All AP guides</Link><Link href="/ap-score-distributions/">Score distributions</Link>
        <Link href="/what-do-ap-scores-mean/">What AP scores mean</Link>
        <Link href="/how-ap-environmental-science-is-scored/">How APES is scored</Link>
        <Link href="/when-do-ap-scores-come-out/">Score release dates</Link>
        <Link href="/how-to-check-ap-scores/">How to check scores</Link>
      </div>
    </nav>
    <div className="atlas-legal"><nav aria-label="Site information"><Link href="/about/">About</Link><Link href="/privacy-policy/">Privacy Policy</Link>
      <Link href="/terms-of-use/">Terms of Use</Link><CookiePreferencesButton /></nav>
      <p>AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board. AP, Advanced Placement, and related exam names are trademarks of their respective owners. Calculator results are estimates only.</p>
    </div>
  </div></footer>;
}
