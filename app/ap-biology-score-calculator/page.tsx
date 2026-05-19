import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "AP Biology Score Calculator 2026 | Coming Soon | AP Score Tools",
  },
  description:
    "The AP Biology score calculator is coming soon to AP Score Tools. Use our AP Environmental Science calculator while we build more AP score tools.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-biology-score-calculator/",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AP Biology Score Calculator 2026",
  url: "https://www.apscoretools.com/ap-biology-score-calculator/",
};

export default function ApBiologyScoreCalculatorPage() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="container hero">
        <div>
          <span className="eyebrow">Coming soon</span>
          <h1>AP Biology Score Calculator 2026</h1>
          <p className="lead">
            The AP Biology score calculator is coming soon. AP Score Tools is
            expanding beyond AP Environmental Science, but this page does not
            provide AP Biology scoring logic yet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>AP Biology calculator status</h2>
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
