import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "AP Scoring Guides | How AP Exams Are Scored",
  },
  description:
    "Learn how AP exams are scored, how MCQ and FRQ sections contribute to composite scores, and how unofficial AP score calculators estimate AP scores.",
  alternates: {
    canonical: "https://www.apscoretools.com/guides/ap-scoring-guides/",
  },
  openGraph: {
    title: "AP Scoring Guides | How AP Exams Are Scored",
    description:
      "Learn how AP exams are scored, how MCQ and FRQ sections contribute to composite scores, and how unofficial AP score calculators estimate AP scores.",
    url: "https://www.apscoretools.com/guides/ap-scoring-guides/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const scoringGuides = [
  {
    title: "How AP Environmental Science Is Scored",
    description:
      "Learn how APES MCQ and FRQ scores contribute to an estimated composite score.",
    href: "/how-ap-environmental-science-is-scored/",
    calculatorHref: "/ap-environmental-science-score-calculator/",
    calculatorLabel: "AP Environmental Science Score Calculator",
    status: "Live",
  },
  {
    title: "How AP Chemistry Is Scored",
    description:
      "A planned guide to AP Chemistry MCQ, FRQ, and estimated composite scoring.",
    calculatorHref: "/ap-chemistry-score-calculator/",
    calculatorLabel: "AP Chemistry Score Calculator",
    status: "Coming soon",
  },
  {
    title: "How AP World History Is Scored",
    description:
      "A planned guide to AP World History MCQ, SAQ, DBQ, LEQ, and estimated score weighting.",
    calculatorHref: "/ap-world-history-score-calculator/",
    calculatorLabel: "AP World History Score Calculator",
    status: "Coming soon",
  },
  {
    title: "How AP US History Is Scored",
    description:
      "A planned guide to APUSH section weights and score conversion concepts.",
    status: "Coming soon",
  },
  {
    title: "How AP Human Geography Is Scored",
    description:
      "A planned guide to AP Human Geography MCQ, FRQ, and estimated score conversion.",
    calculatorHref: "/ap-human-geography-score-calculator/",
    calculatorLabel: "AP Human Geography Score Calculator",
    status: "Coming soon",
  },
  {
    title: "How AP Macroeconomics Is Scored",
    description:
      "A planned guide to AP Macroeconomics MCQ, FRQ, and estimated weighted scoring.",
    calculatorHref: "/ap-macroeconomics-score-calculator/",
    calculatorLabel: "AP Macroeconomics Score Calculator",
    status: "Coming soon",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AP Scoring Guides",
    url: "https://www.apscoretools.com/guides/ap-scoring-guides/",
    description:
      "AP scoring guides explaining section weights, composite scores, and how unofficial AP score calculators estimate AP scores.",
    isPartOf: {
      "@type": "WebSite",
      name: "AP Score Tools",
      url: "https://www.apscoretools.com",
    },
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
        name: "AP Score Guides",
        item: "https://www.apscoretools.com/guides/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AP Scoring Guides",
        item: "https://www.apscoretools.com/guides/ap-scoring-guides/",
      },
    ],
  },
];

export default function ApScoringGuidesPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="container hero">
        <div>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/guides/">AP Score Guides</Link>
            <span>AP Scoring Guides</span>
          </nav>
          <span className="eyebrow">AP scoring guide</span>
          <h1>AP Scoring Guides</h1>
          <p className="lead">
            AP exams use different section weights and score conversions by
            subject. These guides explain how MCQ, FRQ, essay, and written
            sections can contribute to estimated composite scores.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>How AP Exam Scoring Varies by Subject</h2>
            <p>
              Some AP exams combine multiple-choice and free-response sections.
              Others include essays, short-answer questions, or document-based
              questions. AP Score Tools uses subject-specific scoring models to
              estimate composite scores, but official cutoffs may vary by year.
            </p>
          </article>

          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>AP Exam Scoring Guide List</h2>
              <p>
                Live scoring guides link to the full guide. Planned guides are
                marked coming soon, with calculator links included when a live
                calculator is available.
              </p>
            </div>
            <div className="guide-list-grid">
              {scoringGuides.map((guide) => (
                <article
                  className={`guide-list-card ${guide.href ? "" : "disabled"}`}
                  key={guide.title}
                >
                  <div>
                    <span
                      className={`status-pill ${
                        guide.status === "Coming soon" ? "soon" : ""
                      }`}
                    >
                      {guide.status}
                    </span>
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                  </div>
                  <div className="guide-card-actions">
                    {guide.href && (
                      <Link className="guide-card-action" href={guide.href}>
                        Read guide
                      </Link>
                    )}
                    {guide.calculatorHref && (
                      <Link
                        className="guide-card-action secondary-action"
                        href={guide.calculatorHref}
                      >
                        {guide.calculatorLabel}
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="card prose-card guide-cta-card">
            <h2>Try a Subject-Specific Score Calculator</h2>
            <p>
              Browse live AP calculators that estimate composite scores and
              unofficial AP scores from raw section scores.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/ap-score-calculators/">
                Browse AP Score Calculators
              </Link>
            </div>
          </section>

          <section className="card prose-card">
            <h2>Related AP Score Guide Topics</h2>
            <div className="related-guide-grid">
              <Link className="related-guide-card" href="/guides/">
                All AP Score Guides
              </Link>
              <Link
                className="related-guide-card"
                href="/guides/ap-score-release/"
              >
                AP Score Release Guides
              </Link>
              <Link
                className="related-guide-card"
                href="/guides/ap-score-meaning/"
              >
                AP Score Meaning Guides
              </Link>
            </div>
          </section>

          <section className="disclaimer">
            <p>
              AP Score Tools is unofficial and is not affiliated with or
              endorsed by the College Board. AP, Advanced Placement, and related
              exam names are trademarks of their respective owners. Calculator
              results are estimates only.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
