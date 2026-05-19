import type { Metadata } from "next";
import Link from "next/link";
import ApesCalculator from "./ap-environmental-science-score-calculator/ApesCalculator";

export const metadata: Metadata = {
  title: "AP Score Calculator 2026",
  description:
    "Use free AP score calculators to estimate your AP exam score from multiple-choice and free-response raw scores.",
};

const calculators = [
  {
    name: "AP Environmental Science Score Calculator",
    description: "Estimate your APES score from MCQ and FRQ raw scores.",
    href: "/ap-environmental-science-score-calculator/",
    status: "Active",
  },
  { name: "AP Biology Score Calculator", status: "Coming soon" },
  { name: "AP Chemistry Score Calculator", status: "Coming soon" },
  { name: "AP Psychology Score Calculator", status: "Coming soon" },
  { name: "AP Statistics Score Calculator", status: "Coming soon" },
];

const faqs = [
  {
    question: "Are these AP score calculators official?",
    answer:
      "No. AP Score Calculator is unofficial and not affiliated with or endorsed by the College Board.",
  },
  {
    question: "Can I use these calculators before or after the AP exam?",
    answer:
      "Yes. You can use them to test study scenarios before the exam or estimate your possible score after the exam.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero-tool">
        <div className="container hero-tool-grid">
          <div className="hero-copy">
            <span className="eyebrow">AP score estimates for students</span>
            <h1>AP Score Calculator 2026</h1>
            <p className="lead">
              Estimate AP scores from raw multiple-choice and free-response
              scores with a free, unofficial calculator built for study
              planning.
            </p>
            <div className="badge-row" aria-label="Calculator features">
              <span>Unofficial</span>
              <span>Free to use</span>
              <span>MCQ + FRQ</span>
              <span>2026 estimate</span>
            </div>
            <p className="short-note">
              AP Environmental Science is the first calculator. More AP score
              calculators are coming soon.
            </p>
          </div>

          <div className="hero-calculator">
            <ApesCalculator />
            <div className="disclaimer">
              <p>
                This calculator is unofficial and is not affiliated with or
                endorsed by the College Board. Predicted AP scores are estimates
                only and may vary from official scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>How This AP Score Calculator Works</h2>
            <p>
              Enter your raw multiple-choice score and free-response scores. The
              calculator weights the multiple-choice section at 60% and the
              free-response section at 40%, then maps the estimated composite
              percentage to an AP score from 1 to 5.
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP Environmental Science Exam Format</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Questions</th>
                    <th>Time</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Section I: Multiple Choice</td>
                    <td>80 questions</td>
                    <td>1 hour 30 minutes</td>
                    <td>60%</td>
                  </tr>
                  <tr>
                    <td>Section II: Free Response</td>
                    <td>3 questions</td>
                    <td>1 hour 10 minutes</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>2 hours 40 minutes</td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>Estimated APES Score Chart</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Composite Percentage</th>
                    <th>Estimated AP Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>75%+</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>60-74.9%</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>45-59.9%</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>30-44.9%</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Below 30%</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>What Score Do You Need for a 3, 4, or 5?</h2>
            <p>
              In this AP Environmental Science estimate, a 3 starts at 45%, a 4
              starts at 60%, and a 5 starts at 75%. Official score cutoffs can
              change by year, so use these as planning estimates.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Related AP Score Calculators</h2>
            <div className="cards-grid">
              {calculators.map((calculator) => {
                const card = (
                  <article
                    className={`tool-card ${
                      calculator.status === "Active" ? "active" : ""
                    }`}
                  >
                    <div>
                      <span
                        className={`status-pill ${
                          calculator.status === "Coming soon" ? "soon" : ""
                        }`}
                      >
                        {calculator.status}
                      </span>
                      <h3>{calculator.name}</h3>
                      <p>
                        {calculator.description ??
                          "A free AP score calculator is in progress."}
                      </p>
                    </div>
                    {calculator.href ? <span>Open calculator</span> : null}
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
          </article>

          <article className="card prose-card">
            <h2>FAQ</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
