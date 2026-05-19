import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "About AP Score Tools",
  },
  description:
    "Learn about AP Score Tools, a free unofficial AP score calculator website for students.",
  alternates: {
    canonical: "https://www.apscoretools.com/about/",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About AP Score Tools",
  url: "https://www.apscoretools.com/about/",
};

export default function AboutPage() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="container hero">
        <div>
          <span className="eyebrow">About the project</span>
          <h1>About AP Score Tools</h1>
          <p className="lead">
            AP Score Tools provides free unofficial AP score calculators and
            exam tools to help students estimate possible AP exam outcomes from
            raw section scores.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Student-friendly AP score estimates</h2>
            <p>
              The goal is simple: make it easier to understand how
              multiple-choice and free-response performance can combine into an
              estimated AP score. The calculators are designed for study
              planning, post-exam reflection, and quick what-if scenarios.
            </p>
            <p>
              Each tool uses transparent formulas, readable score bands, and
              plain-language feedback so students can focus on what the estimate
              means.
            </p>
          </article>

          <article className="disclaimer">
            <p>
              AP Score Tools is not affiliated with or endorsed by the College
              Board. AP, Advanced Placement, and related exam names are
              trademarks of their respective owners. Calculator results are
              estimates only.
            </p>
          </article>

          <div className="hero-actions">
            <Link className="button secondary" href="/">
              Back to AP Score Tools
            </Link>
            <Link className="button" href="/ap-environmental-science-score-calculator/">
              Try the AP Environmental Science Score Calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
