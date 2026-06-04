import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Meaning Guides | AP Scores 1-5 Explained",
  },
  description:
    "Understand what AP scores mean, including AP scores from 1 to 5, whether a 3, 4, or 5 is a good AP score, and how colleges may use AP scores.",
  alternates: {
    canonical: "https://www.apscoretools.com/guides/ap-score-meaning/",
  },
  openGraph: {
    title: "AP Score Meaning Guides | AP Scores 1-5 Explained",
    description:
      "Understand what AP scores mean, including AP scores from 1 to 5, whether a 3, 4, or 5 is a good AP score, and how colleges may use AP scores.",
    url: "https://www.apscoretools.com/guides/ap-score-meaning/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const meaningGuides = [
  {
    title: "What Do AP Scores Mean?",
    description:
      "Learn what AP scores from 1 to 5 generally represent for students.",
  },
  {
    title: "Is a 3 a Good AP Score?",
    description:
      "Understand how a 3 may be viewed and why credit policies vary by school.",
  },
  {
    title: "Is a 4 a Good AP Score?",
    description:
      "Review what a 4 usually suggests and how colleges may treat it.",
  },
  {
    title: "Is a 5 a Good AP Score?",
    description:
      "Learn why a 5 is generally a strong score while policies still differ by institution.",
  },
  {
    title: "Do Colleges Accept AP Scores?",
    description:
      "A planned guide to college credit, placement, and school-specific AP score policies.",
  },
  {
    title: "How to Send AP Scores to Colleges",
    description:
      "A planned guide to sending official AP scores and understanding score-send decisions.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AP Score Meaning Guides",
    url: "https://www.apscoretools.com/guides/ap-score-meaning/",
    description:
      "Guides that explain AP score meanings, AP scores from 1 to 5, and how colleges may use AP scores.",
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
        name: "AP Score Meaning",
        item: "https://www.apscoretools.com/guides/ap-score-meaning/",
      },
    ],
  },
];

export default function ApScoreMeaningGuidesPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="container hero">
        <div>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/guides/">AP Score Guides</Link>
            <span>AP Score Meaning</span>
          </nav>
          <span className="eyebrow">AP score meaning</span>
          <h1>AP Score Meaning Guides</h1>
          <p className="lead">
            AP scores range from 1 to 5. These guides explain what those scores
            can mean for students and why college credit and placement policies
            vary by school.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Understanding AP Scores from 1 to 5</h2>
            <p>
              AP score meaning depends on the subject, college, and placement
              policy. A score that earns credit at one institution may not earn
              the same credit at another, so students should always check each
              college&apos;s AP credit policy.
            </p>
          </article>

          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>Score Meaning Guide List</h2>
              <p>
                These planned guides will explain common AP score meaning
                questions in clear student-friendly language.
              </p>
            </div>
            <div className="guide-list-grid">
              {meaningGuides.map((guide) => (
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
            <h2>Estimate a 1-5 AP Score</h2>
            <p>
              Try a free, unofficial AP score calculator by subject to see an
              estimated score range from raw section scores.
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
                href="/guides/ap-scoring-guides/"
              >
                AP Scoring Guides
              </Link>
            </div>
          </section>

          <section className="disclaimer">
            <p>
              AP Score Tools provides general guidance only. College credit and
              placement decisions vary by institution.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
