import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "AP Biology Score Calculator 2026 | AP Bio Calculator Coming Soon",
  },
  description:
    "The AP Biology score calculator is coming soon to AP Score Tools. Learn what the AP Bio calculator will estimate and use the APES score calculator while more tools are being built.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-biology-score-calculator/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AP Biology Score Calculator 2026",
    url: "https://www.apscoretools.com/ap-biology-score-calculator/",
    description:
      "A coming soon page for the planned AP Biology score calculator from AP Score Tools.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.apscoretools.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AP Score Calculators",
        item: "https://www.apscoretools.com/ap-score-calculators/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AP Biology Score Calculator",
        item: "https://www.apscoretools.com/ap-biology-score-calculator/",
      },
    ],
  },
];

export default function ApBiologyScoreCalculatorPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="container hero">
        <div>
          <span className="eyebrow">Coming soon</span>
          <h1>AP Biology Score Calculator 2026</h1>
          <p className="lead">
            The AP Bio score calculator is coming soon to AP Score Tools. This
            page is for the planned AP Biology score calculator and AP Biology
            score predictor, but it does not provide live AP Biology scoring
            yet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>AP Biology Score Calculator Coming Soon</h2>
            <p>
              AP Score Tools is preparing an AP Bio calculator, but the live
              scoring tool is not available yet. We will add subject-specific
              inputs and transparent estimated score ranges when the calculator
              is ready.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What the AP Bio Calculator Will Estimate</h2>
            <p>
              The future AP Biology score calculator will estimate a 1-5 AP
              score using subject-specific section inputs and estimated score
              ranges. It will not use AP Environmental Science scoring logic or
              invented Biology cutoffs.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Try the Live APES Score Calculator</h2>
            <p>
              While the AP Biology score predictor is being built, you can use
              the live AP Environmental Science calculator.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/ap-environmental-science-score-calculator/">
                AP Environmental Science Score Calculator
              </Link>
            </div>
          </article>

          <article className="card prose-card">
            <h2>AP Score Calculators</h2>
            <p>
              Visit the AP score calculator hub to see the live APES and AP
              Chemistry calculators, plus planned tools for AP Biology, AP
              Calculus, AP Lang, APUSH, and more.
            </p>
            <div className="hero-actions">
              <Link className="button secondary" href="/ap-score-calculators/">
                AP Score Calculators
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
