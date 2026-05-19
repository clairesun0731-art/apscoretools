import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AP Score Calculator",
  description:
    "Learn about AP Score Calculator, a free unofficial AP score calculator website for students.",
};

export default function AboutPage() {
  return (
    <main className="page">
      <section className="container hero">
        <div>
          <span className="eyebrow">About the project</span>
          <h1>About AP Score Calculator</h1>
          <p className="lead">
            AP Score Calculator provides free unofficial AP score calculators and
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
              AP Score Calculator is not affiliated with or endorsed by the
              College Board. AP, Advanced Placement, and related exam names are
              trademarks of their respective owners. Calculator results are
              estimates only.
            </p>
          </article>

          <div>
            <Link className="button" href="/ap-environmental-science-score-calculator/">
              Try the AP Environmental Science Score Calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
