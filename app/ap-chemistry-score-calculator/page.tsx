import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute:
      "AP Chemistry Score Calculator 2026 | Coming Soon | AP Score Tools",
  },
  description:
    "The AP Chemistry score calculator is coming soon to AP Score Tools. Use our AP Environmental Science calculator while we build more AP score tools.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AP Chemistry Score Calculator 2026",
  url: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
};

export default function ApChemistryScoreCalculatorPage() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="container hero">
        <div>
          <span className="eyebrow">Coming soon</span>
          <h1>AP Chemistry Score Calculator 2026</h1>
          <p className="lead">
            The AP Chemistry score calculator is coming soon. We are not
            publishing fake AP Chemistry scoring logic; this page is a preview
            while AP Score Tools builds more AP score tools.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>AP Chemistry calculator status</h2>
            <p>
              For now, you can use our AP Environmental Science score
              calculator or explore the AP score calculators hub to see which
              tools are planned next.
            </p>
            <div className="hero-actions">
              <Link className="button secondary" href="/">
                Home
              </Link>
              <Link className="button" href="/ap-environmental-science-score-calculator/">
                APES calculator
              </Link>
              <Link className="button secondary" href="/ap-score-calculators/">
                AP score calculators hub
              </Link>
            </div>
          </article>

          <article className="disclaimer">
            <p>
              AP Score Tools is unofficial and is not affiliated with or
              endorsed by the College Board. Calculator results are estimates
              only.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
