import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute:
      "AP Chemistry Score Calculator 2026 | AP Chem Calculator Coming Soon",
  },
  description:
    "The AP Chemistry score calculator is coming soon to AP Score Tools. Learn what the AP Chem calculator will estimate and use the APES score calculator while more tools are being built.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AP Chemistry Score Calculator 2026",
    url: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
    description:
      "A coming soon page for the planned AP Chemistry score calculator from AP Score Tools.",
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
        name: "AP Chemistry Score Calculator",
        item: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
      },
    ],
  },
];

export default function ApChemistryScoreCalculatorPage() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container hero">
        <div>
          <span className="eyebrow">Coming soon</span>
          <h1>AP Chemistry Score Calculator 2026</h1>
          <p className="lead">
            The AP Chem score calculator is coming soon to AP Score Tools. This
            page is for the planned AP Chemistry score calculator and AP
            Chemistry score predictor, but it does not provide live AP
            Chemistry scoring yet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>AP Chemistry Score Calculator Coming Soon</h2>
            <p>
              AP Score Tools is preparing an AP Chem calculator, but the live
              scoring tool is not available yet. We will add subject-specific
              inputs and transparent estimated score ranges when the calculator
              is ready.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What the AP Chem Calculator Will Estimate</h2>
            <p>
              The future AP Chemistry score calculator will estimate a 1-5 AP
              score using subject-specific section inputs and estimated score
              ranges. It will not use AP Environmental Science scoring logic or
              invented Chemistry cutoffs.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Try the Live APES Score Calculator</h2>
            <p>
              While the AP Chemistry score predictor is being built, you can
              use the live AP Environmental Science calculator.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/ap-environmental-science-score-calculator/">
                Open APES calculator
              </Link>
            </div>
          </article>

          <article className="card prose-card">
            <h2>Explore AP Score Calculators</h2>
            <p>
              Visit the AP score calculator hub to see the live APES calculator
              and planned tools for AP Biology, AP Chemistry, AP Calculus, AP
              Lang, APUSH, and more.
            </p>
            <div className="hero-actions">
              <Link className="button secondary" href="/ap-score-calculators/">
                Explore AP score calculators
              </Link>
            </div>
          </article>

          <article className="disclaimer">
            <p>
              AP Score Tools is unofficial and is not affiliated with or
              endorsed by the College Board. AP, Advanced Placement, and related
              exam names are trademarks of their respective owners.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
