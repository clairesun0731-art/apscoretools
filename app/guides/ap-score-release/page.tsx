import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Release Guides | Dates, Times, and How to Check Scores",
  },
  description:
    "Find AP score release guides, including when AP scores come out, AP score release dates, how to check AP scores, and what to do if your score is not showing.",
  alternates: {
    canonical: "https://www.apscoretools.com/guides/ap-score-release/",
  },
  openGraph: {
    title: "AP Score Release Guides | Dates, Times, and How to Check Scores",
    description:
      "Find AP score release guides, including when AP scores come out, AP score release dates, how to check AP scores, and what to do if your score is not showing.",
    url: "https://www.apscoretools.com/guides/ap-score-release/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const releaseGuides = [
  {
    title: "When Do AP Scores Come Out?",
    description:
      "Learn the basics of AP score release timing and what students should watch for.",
  },
  {
    title: "AP Score Release Date",
    description:
      "A focused guide to AP score release date questions and yearly score timing.",
  },
  {
    title: "What Time Do AP Scores Come Out?",
    description:
      "Understand why exact AP score access times may vary and where to check official results.",
  },
  {
    title: "How to Check AP Scores",
    description:
      "A student-friendly guide to checking official AP scores through a College Board account.",
  },
  {
    title: "Why Is My AP Score Not Showing?",
    description:
      "Review common reasons an AP score may be delayed or missing after scores are released.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AP Score Release Guides",
    url: "https://www.apscoretools.com/guides/ap-score-release/",
    description:
      "AP score release guides covering release dates, score access, official score checking, and score delays.",
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
        name: "AP Score Release",
        item: "https://www.apscoretools.com/guides/ap-score-release/",
      },
    ],
  },
];

export default function ApScoreReleaseGuidesPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="container hero">
        <div>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/guides/">AP Score Guides</Link>
            <span>AP Score Release</span>
          </nav>
          <span className="eyebrow">AP score release</span>
          <h1>AP Score Release Guides</h1>
          <p className="lead">
            This section covers AP score release timing, checking official AP
            scores, and common score release questions students ask while
            waiting for results.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>AP Score Release Help</h2>
            <p>
              AP score release questions are usually about timing, access, and
              what to do when a score is delayed. AP Score Tools can help you
              estimate scores with unofficial calculators, but official AP
              scores must be viewed through a College Board account.
            </p>
          </article>

          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>Score Release Guide List</h2>
              <p>
                These articles are planned for this cluster and are marked
                coming soon until each guide is published.
              </p>
            </div>
            <div className="guide-list-grid">
              {releaseGuides.map((guide) => (
                <article className="guide-list-card disabled" key={guide.title}>
                  <div>
                    <span className="status-pill soon">Coming soon</span>
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="card prose-card guide-cta-card">
            <h2>Estimate Your AP Score Before Results Come Out</h2>
            <p>
              Use a free, unofficial AP score calculator to estimate your score
              from raw section scores while you wait for official results.
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
                href="/guides/ap-score-meaning/"
              >
                AP Score Meaning Guides
              </Link>
              <Link
                className="related-guide-card"
                href="/guides/ap-scoring-guides/"
              >
                AP Scoring Guides
              </Link>
            </div>
          </section>

          <section className="disclaimer">
            <p>
              AP Score Tools cannot show official AP scores. Students must use
              their official College Board account to view official scores.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
