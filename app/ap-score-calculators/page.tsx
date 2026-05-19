import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Calculators 2026 | AP Score Tools",
  },
  description:
    "Explore free, unofficial AP score calculators from AP Score Tools. Start with the AP Environmental Science score calculator, with AP Biology, AP Chemistry, and more coming soon.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-score-calculators/",
  },
};

const plannedCalculators = [
  {
    name: "AP Biology Score Calculator",
    href: "/ap-biology-score-calculator/",
    status: "Coming soon",
  },
  {
    name: "AP Chemistry Score Calculator",
    href: "/ap-chemistry-score-calculator/",
    status: "Coming soon",
  },
  { name: "AP Psychology Score Calculator", status: "Planned" },
  { name: "AP Statistics Score Calculator", status: "Planned" },
  { name: "AP Calculus AB Score Calculator", status: "Planned" },
  { name: "AP English Language Score Calculator", status: "Planned" },
  { name: "APUSH Score Calculator", status: "Planned" },
  { name: "AP World History Score Calculator", status: "Planned" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AP Score Calculators 2026",
    url: "https://www.apscoretools.com/ap-score-calculators/",
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
    ],
  },
];

export default function ApScoreCalculatorsPage() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container hero">
        <div>
          <span className="eyebrow">Calculator hub</span>
          <h1>AP Score Calculators 2026</h1>
          <p className="lead">
            AP Score Tools is building a collection of free, unofficial AP score
            calculators for students. Our first live calculator is AP
            Environmental Science, and more AP subjects are planned.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <section className="prose-card">
            <h2>Available AP Score Calculator</h2>
            <Link href="/ap-environmental-science-score-calculator/">
              <article className="tool-card active">
                <div>
                  <span className="status-pill">Live</span>
                  <h3>AP Environmental Science Score Calculator</h3>
                  <p>
                    Estimate your APES score using MCQ and FRQ raw scores,
                    converted into an estimated composite score out of 130.
                  </p>
                </div>
                <span>Open calculator</span>
              </article>
            </Link>
          </section>

          <section className="prose-card">
            <h2>AP Score Calculators Coming Soon</h2>
            <div className="cards-grid">
              {plannedCalculators.map((calculator) => {
                const card = (
                  <article className="tool-card">
                    <div>
                      <span className="status-pill soon">
                        {calculator.status}
                      </span>
                      <h3>{calculator.name}</h3>
                      <p>
                        This calculator is planned and is not live as a score
                        predictor yet.
                      </p>
                    </div>
                  </article>
                );

                return calculator.href ? (
                  <Link href={calculator.href} key={calculator.name}>
                    {card}
                  </Link>
                ) : (
                  <div key={calculator.name}>{card}</div>
                );
              })}
            </div>
          </section>

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
