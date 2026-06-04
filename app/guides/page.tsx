import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Guides | Score Release, Meaning, and Scoring Help",
  },
  description:
    "Explore AP score guides for score release dates, checking AP scores, understanding AP scores from 1 to 5, and learning how AP exams are scored.",
  alternates: {
    canonical: "https://www.apscoretools.com/guides/",
  },
  openGraph: {
    title: "AP Score Guides | Score Release, Meaning, and Scoring Help",
    description:
      "Explore AP score guides for score release dates, checking AP scores, understanding AP scores from 1 to 5, and learning how AP exams are scored.",
    url: "https://www.apscoretools.com/guides/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const topicClusters = [
  {
    title: "AP Score Release",
    description:
      "Learn when AP scores come out, how to check AP scores, and what to do if your AP score is not showing.",
    href: "/guides/ap-score-release/",
  },
  {
    title: "AP Score Meaning",
    description:
      "Understand what AP scores from 1 to 5 mean and how colleges may use AP scores.",
    href: "/guides/ap-score-meaning/",
  },
  {
    title: "AP Scoring Guides",
    description:
      "Learn how AP exams are scored and how unofficial AP score calculators estimate composite scores.",
    href: "/guides/ap-scoring-guides/",
  },
];

const featuredGuides = [
  {
    title: "When Do AP Scores Come Out?",
    description:
      "Learn the 2026 AP score release date, how to check AP scores, and what to prepare before release day.",
    href: "/when-do-ap-scores-come-out/",
    status: "Live",
  },
  {
    title: "AP Score Release Date",
    description:
      "A planned release-date guide for AP students waiting on official scores.",
    status: "Coming soon",
  },
  {
    title: "How to Check AP Scores",
    description:
      "A planned walkthrough for checking official AP scores through a College Board account.",
    status: "Coming soon",
  },
  {
    title: "What Do AP Scores Mean?",
    description:
      "A planned guide to AP scores from 1 to 5 and how score meaning can vary by context.",
    status: "Coming soon",
  },
  {
    title: "How AP Environmental Science Is Scored",
    description:
      "Review MCQ weighting, FRQ weighting, composite score estimates, and estimated APES score ranges.",
    href: "/how-ap-environmental-science-is-scored/",
    status: "Live",
  },
  {
    title: "How AP Chemistry Is Scored",
    description:
      "A planned guide to AP Chemistry section weights, raw scores, and estimated score conversion.",
    status: "Coming soon",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AP Score Guides",
    url: "https://www.apscoretools.com/guides/",
    description:
      "Clear AP score guides for release dates, score meanings, exam scoring, and unofficial AP score estimates.",
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
    ],
  },
];

export default function GuidesPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="container hero">
        <div>
          <span className="eyebrow">AP score resource center</span>
          <h1>AP Score Guides</h1>
          <p className="lead">
            Clear, student-friendly guides for AP score release dates, score
            meanings, scoring methods, and unofficial AP score estimates.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading centered-section-heading">
              <h2>Browse AP Score Topics</h2>
              <p>
                Start with the area that matches your question: score release,
                score meaning, or how AP exams are scored.
              </p>
            </div>
            <div className="guide-card-grid">
              {topicClusters.map((cluster) => (
                <Link href={cluster.href} key={cluster.href}>
                  <article className="guide-card guide-card-link">
                    <div>
                      <span className="status-pill">Guide cluster</span>
                      <h3>{cluster.title}</h3>
                      <p>{cluster.description}</p>
                    </div>
                    <span className="guide-card-action">Open guides</span>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          <section className="card prose-card">
            <div className="section-heading compact-heading">
              <h2>Featured AP Score Guides</h2>
              <p>
                Live guides are linked directly. Planned guides are marked
                clearly until the full article is available.
              </p>
            </div>
            <div className="guide-list-grid">
              {featuredGuides.map((guide) =>
                guide.href ? (
                  <Link href={guide.href} key={guide.title}>
                    <article className="guide-list-card guide-card-link">
                      <div>
                        <span className="status-pill">{guide.status}</span>
                        <h3>{guide.title}</h3>
                        <p>{guide.description}</p>
                      </div>
                      <span className="guide-card-action">Read guide</span>
                    </article>
                  </Link>
                ) : (
                  <article className="guide-list-card disabled" key={guide.title}>
                    <div>
                      <span className="status-pill soon">{guide.status}</span>
                      <h3>{guide.title}</h3>
                      <p>{guide.description}</p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </section>

          <section className="card prose-card guide-cta-card">
            <h2>Need an AP score estimate?</h2>
            <p>Try a free, unofficial AP score calculator by subject.</p>
            <div className="hero-actions">
              <Link className="button" href="/ap-score-calculators/">
                Browse AP Score Calculators
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
