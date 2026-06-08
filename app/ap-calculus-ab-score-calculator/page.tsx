import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import ApCalculusAbCalculator from "./ApCalculusAbCalculator";

export const metadata: Metadata = {
  title: {
    absolute: "AP Calculus AB Score Calculator | AP Calc AB Score Predictor",
  },
  description:
    "Use this free AP Calculus AB Score Calculator to estimate your AP Calc AB score from MCQ and FRQ raw points. Unofficial AP Calculus AB score predictor with composite score breakdown.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-calculus-ab-score-calculator/",
  },
  openGraph: {
    title: "AP Calculus AB Score Calculator | AP Calc AB Score Predictor",
    description:
      "Estimate your AP Calculus AB score from MCQ and FRQ raw points with an unofficial AP Calc AB score predictor and composite score breakdown.",
    url: "https://www.apscoretools.com/ap-calculus-ab-score-calculator/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const scoreBands = [
  { compositeRange: "76-108", predictedScore: "5" },
  { compositeRange: "62-75", predictedScore: "4" },
  { compositeRange: "49-61", predictedScore: "3" },
  { compositeRange: "35-48", predictedScore: "2" },
  { compositeRange: "0-34", predictedScore: "1" },
];

const faqItems = [
  {
    question: "Is this AP Calculus AB score calculator official?",
    answer:
      "No. This AP Calculus AB score calculator is an unofficial estimator from AP Score Tools and is not affiliated with or endorsed by the College Board.",
  },
  {
    question: "How is AP Calculus AB scored?",
    answer:
      "This calculator estimates AP Calculus AB scoring by scaling the 45-question MCQ raw score to 54 points, adding the FRQ raw score out of 54, and mapping the 108-point composite score to an estimated AP score range.",
  },
  {
    question: "How many multiple-choice questions are on AP Calculus AB?",
    answer:
      "AP Calculus AB has 45 multiple-choice questions: 30 no-calculator questions in Part A and 15 calculator-allowed questions in Part B.",
  },
  {
    question: "How many FRQs are on AP Calculus AB?",
    answer:
      "AP Calculus AB has 6 free-response questions. FRQ Part A includes 2 calculator-allowed questions, and FRQ Part B includes 4 no-calculator questions.",
  },
  {
    question: "What composite score do I need for a 5 on AP Calculus AB?",
    answer:
      "In this AP Calculus AB score predictor, the estimated 5 range starts at a composite score of 76 out of 108. This is an estimate, not an official cutoff.",
  },
  {
    question: "Can this calculator predict my exact AP score?",
    answer:
      "No. It provides an approximate AP Calculus AB score estimate. Official score conversions can vary by year and exam form.",
  },
  {
    question: "Is a graphing calculator allowed on AP Calculus AB?",
    answer:
      "A graphing calculator is used on the calculator-allowed parts of the AP Calculus AB exam. Follow your school\u0027s AP exam instructions for approved calculator models and testing rules.",
  },
  {
    question: "What is the difference between AP Calculus AB and AP Calculus BC?",
    answer:
      "AP Calculus AB covers a first-semester college calculus scope, while AP Calculus BC covers that material plus additional calculus topics. Schools and students should choose based on course placement and preparation.",
  },
  {
    question:
      "Should I use an AP Calculus AB or AP Calculus BC score calculator?",
    answer:
      "Use the AP Calculus AB score calculator if you are taking AP Calculus AB. AP Calculus BC has a different exam structure and should use a separate AP Calculus BC score calculator when available.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AP Calculus AB Score Calculator",
    alternateName: [
      "AP Calc AB Score Calculator",
      "AP Calculus AB Calculator",
      "AP Calc AB Calculator",
      "AP Calculus AB Score Predictor",
      "AP Calc AB Score Predictor",
      "AP Calculus AB FRQ Calculator",
    ],
    url: "https://www.apscoretools.com/ap-calculus-ab-score-calculator/",
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "Score calculator",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Estimate AP Calculus AB scores from MCQ and FRQ raw points",
      "Convert AP Calculus AB MCQ raw score to an estimated scaled score out of 54",
      "Add AP Calculus AB FRQ raw points out of 54",
      "Estimate AP Calculus AB composite score out of 108",
      "Map estimated composite score to an AP score estimate from 1 to 5",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
        name: "AP Calculus AB Score Calculator",
        item: "https://www.apscoretools.com/ap-calculus-ab-score-calculator/",
      },
    ],
  },
];

export default function ApCalculusAbScoreCalculatorPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="tool-hero-section">
        <div className="container tool-hero-stack">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <TrackedLink
              eventName="calculator_hub_click"
              eventParams={{ source: "ap_calculus_ab_breadcrumb" }}
              href="/ap-score-calculators/"
            >
              AP Score Calculators
            </TrackedLink>
            <span>AP Calculus AB Score Calculator</span>
          </nav>
          <span className="eyebrow">AP Calc AB score predictor</span>
          <h1>AP Calculus AB Score Calculator</h1>
          <p className="lead">
            Estimate your AP Calculus AB score from multiple-choice and
            free-response raw scores. This unofficial AP Calc AB score
            calculator converts your MCQ and FRQ points into an estimated
            composite score and AP score.
          </p>
          <p className="inline-disclaimer tool-hero-note">
            Unofficial score estimate. Actual AP score conversions may vary.
          </p>
          <div className="benefit-row">
            <span>AP Calculus AB score calculator 2026</span>
            <span>Calculator + no-calculator sections</span>
            <span>108-point composite</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <ApCalculusAbCalculator />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Estimated AP Calculus AB Score Chart</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Composite Score Range</th>
                    <th>Estimated AP Score</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreBands.map((band) => (
                    <tr key={band.predictedScore}>
                      <td>{band.compositeRange}</td>
                      <td>{band.predictedScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              These AP Calculus AB score ranges are estimates only. Official AP
              score conversions may differ by year and exam form.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Detailed AP Calculus AB Score Breakdown</h2>
            <p>
              The calculator shows your MCQ Part A score, MCQ Part B score,
              total MCQ raw score, MCQ scaled score, FRQ raw score, composite
              score, and estimated AP score.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Score Part</th>
                    <th>How This Calculator Displays It</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MCQ Part A score</td>
                    <td>No-calculator correct answers out of 30</td>
                  </tr>
                  <tr>
                    <td>MCQ Part B score</td>
                    <td>Calculator-allowed correct answers out of 15</td>
                  </tr>
                  <tr>
                    <td>Total MCQ raw score</td>
                    <td>MCQ Part A + MCQ Part B, out of 45</td>
                  </tr>
                  <tr>
                    <td>MCQ scaled score</td>
                    <td>MCQ raw score x 1.2, out of 54</td>
                  </tr>
                  <tr>
                    <td>FRQ raw score</td>
                    <td>FRQ 1-6 total out of 54</td>
                  </tr>
                  <tr>
                    <td>Composite score</td>
                    <td>MCQ scaled score + FRQ raw score, out of 108</td>
                  </tr>
                  <tr>
                    <td>Estimated AP score</td>
                    <td>Unofficial 1-5 estimate based on composite range</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>How This AP Calculus AB Score Calculator Works</h2>
            <p>
              AP Calculus AB has 45 multiple-choice questions and 6
              free-response questions. The MCQ and FRQ sections are each
              weighted as 50% of the exam score.
            </p>
            <p>
              This AP Calculus AB calculator scales MCQ to 54 points by
              multiplying the total MCQ raw score by 1.2. The FRQ section is
              scored out of 54 points. The final estimated composite score is
              out of 108.
            </p>
            <p>
              MCQ raw score = MCQ Part A + MCQ Part B
              <br />
              MCQ scaled score = MCQ raw score x 1.2
              <br />
              Composite score = MCQ scaled score + FRQ raw score
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP Calculus AB Exam Format</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Questions</th>
                    <th>Calculator Policy</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MCQ Part A</td>
                    <td>30 questions</td>
                    <td>No calculator</td>
                    <td>Part of 50% MCQ section</td>
                  </tr>
                  <tr>
                    <td>MCQ Part B</td>
                    <td>15 questions</td>
                    <td>Calculator allowed</td>
                    <td>Part of 50% MCQ section</td>
                  </tr>
                  <tr>
                    <td>FRQ Part A</td>
                    <td>2 questions</td>
                    <td>Calculator allowed</td>
                    <td>Part of 50% FRQ section</td>
                  </tr>
                  <tr>
                    <td>FRQ Part B</td>
                    <td>4 questions</td>
                    <td>No calculator</td>
                    <td>Part of 50% FRQ section</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              AP Calculus AB includes both calculator and no-calculator
              sections. This AP Calc AB calculator uses the section structure
              above to estimate a composite score, not official score cutoffs.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What Is a Good AP Calculus AB Score?</h2>
            <p>
              A 3 is commonly considered a qualified AP score. A 4 or 5 may be
              stronger for college credit or placement, depending on the
              college, major, and AP Calculus policy.
            </p>
            <p>
              Credit policies vary by college. AP Score Tools does not
              determine college credit, placement, or official score
              conversions.
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP Calculus AB Score Calculator FAQ</h2>
            <div className="faq-list">
              {faqItems.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card prose-card">
            <h2>Related Math AP Score Calculators</h2>
            <p>
              Continue with the live AP Calculus AB calculator or compare with
              other live math calculators from AP Score Tools.
            </p>
            <div className="calculator-item-grid">
              <Link
                aria-label="Use AP Calculus AB Score Calculator"
                className="calculator-directory-link"
                href="/ap-calculus-ab-score-calculator/"
              >
                <article className="calculator-directory-item is-live">
                  <div className="calculator-directory-copy">
                    <h4>AP Calculus AB Score Calculator</h4>
                    <p>Estimate your AP Calc AB score from MCQ and FRQ points.</p>
                  </div>
                  <span className="directory-status live">Live</span>
                </article>
              </Link>
              <Link
                aria-label="Use AP Calculus BC Score Calculator"
                className="calculator-directory-link"
                href="/ap-calculus-bc-score-calculator/"
              >
                <article className="calculator-directory-item is-live">
                  <div className="calculator-directory-copy">
                    <h4>AP Calculus BC Score Calculator</h4>
                    <p>Estimate your AP Calc BC score from MCQ and FRQ points.</p>
                  </div>
                  <span className="directory-status live">Live</span>
                </article>
              </Link>
              <Link
                aria-label="Use AP Statistics Score Calculator"
                className="calculator-directory-link"
                href="/ap-statistics-score-calculator/"
              >
                <article className="calculator-directory-item is-live">
                  <div className="calculator-directory-copy">
                    <h4>AP Statistics Score Calculator</h4>
                    <p>Estimate your AP Stats score from MCQ and FRQ points.</p>
                  </div>
                  <span className="directory-status live">Live</span>
                </article>
              </Link>
            </div>
            <div className="hero-actions">
              <TrackedLink
                className="button"
                eventName="calculator_hub_click"
                eventParams={{ source: "ap_calculus_ab_related" }}
                href="/ap-score-calculators/"
              >
                View All AP Score Calculators
              </TrackedLink>
              <Link className="button secondary" href="/guides/ap-scoring-guides/">
                AP Scoring Guides
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
