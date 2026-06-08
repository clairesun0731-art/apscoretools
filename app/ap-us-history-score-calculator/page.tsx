import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import ApUsHistoryCalculator from "./ApUsHistoryCalculator";

const url = "https://www.apscoretools.com/ap-us-history-score-calculator/";

export const metadata: Metadata = {
  title: {
    absolute: "AP U.S. History Score Calculator | APUSH Score Predictor",
  },
  description:
    "Use this free AP U.S. History Score Calculator to estimate your APUSH score from MCQ, SAQ, DBQ, and LEQ raw points. Unofficial APUSH score predictor with composite score breakdown.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "AP U.S. History Score Calculator | APUSH Score Predictor",
    description:
      "Estimate your APUSH score from MCQ, SAQ, DBQ, and LEQ raw points with an unofficial AP U.S. History score predictor and composite score breakdown.",
    url,
    siteName: "AP Score Tools",
    type: "website",
  },
};

const scoreBands = [
  { compositeRange: "78-100", predictedScore: "5" },
  { compositeRange: "65-77", predictedScore: "4" },
  { compositeRange: "48-64", predictedScore: "3" },
  { compositeRange: "35-47", predictedScore: "2" },
  { compositeRange: "0-34", predictedScore: "1" },
];

const faqItems = [
  {
    question: "Is this APUSH score calculator official?",
    answer:
      "No. This APUSH score calculator is an unofficial estimator from AP Score Tools and is not affiliated with or endorsed by the College Board.",
  },
  {
    question: "How is AP U.S. History scored?",
    answer:
      "This calculator estimates AP U.S. History scoring by converting MCQ, SAQ, DBQ, and LEQ raw points into weighted section scores, then adding them into a composite score out of 100.",
  },
  {
    question: "How many multiple-choice questions are on APUSH?",
    answer:
      "AP U.S. History has 55 multiple-choice questions in Section I, Part A.",
  },
  {
    question: "How many short-answer questions are on APUSH?",
    answer:
      "AP U.S. History includes 3 short-answer questions in Section I, Part B. This APUSH calculator scores each SAQ out of 3 raw points.",
  },
  {
    question: "How is the APUSH DBQ scored?",
    answer:
      "This calculator uses a DBQ raw score out of 7 and converts it to an estimated weighted score out of 25.",
  },
  {
    question: "How is the APUSH LEQ scored?",
    answer:
      "This calculator uses an LEQ raw score out of 6 and converts it to an estimated weighted score out of 15.",
  },
  {
    question: "What composite score do I need for a 5 on APUSH?",
    answer:
      "In this APUSH score predictor, the estimated 5 range starts at a composite score of 78 out of 100. This is an estimate, not an official cutoff.",
  },
  {
    question: "Can this calculator predict my exact AP score?",
    answer:
      "No. It provides an approximate AP U.S. History score estimate. Official score conversions can vary by year and exam form.",
  },
  {
    question:
      "What is the difference between APUSH raw score and composite score?",
    answer:
      "Raw score means the points earned within a section, such as MCQ correct answers or DBQ rubric points. Composite score is the weighted total after each section is converted to its estimated contribution out of 100.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AP U.S. History Score Calculator",
    alternateName: [
      "APUSH Score Calculator",
      "AP US History Score Calculator",
      "AP U.S. History Calculator",
      "APUSH Calculator",
      "APUSH Score Predictor",
      "APUSH DBQ Score Calculator",
      "APUSH FRQ Calculator",
    ],
    url,
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
      "Estimate AP U.S. History scores from MCQ, SAQ, DBQ, and LEQ raw points",
      "Convert MCQ raw score to an estimated weighted score out of 40",
      "Convert SAQ raw score to an estimated weighted score out of 20",
      "Convert DBQ raw score to an estimated weighted score out of 25",
      "Convert LEQ raw score to an estimated weighted score out of 15",
      "Estimate APUSH composite score out of 100",
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
        name: "AP U.S. History Score Calculator",
        item: url,
      },
    ],
  },
];

export default function ApUsHistoryScoreCalculatorPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="tool-hero-section">
        <div className="container tool-hero-stack">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <TrackedLink
              eventName="calculator_hub_click"
              eventParams={{ source: "ap_us_history_breadcrumb" }}
              href="/ap-score-calculators/"
            >
              AP Score Calculators
            </TrackedLink>
            <span>AP U.S. History Score Calculator</span>
          </nav>
          <span className="eyebrow">APUSH score predictor</span>
          <h1>AP U.S. History Score Calculator</h1>
          <p className="lead">
            Estimate your AP U.S. History score from your multiple-choice,
            short-answer, DBQ, and LEQ raw scores. This unofficial APUSH score
            calculator converts your section scores into an estimated composite
            score and AP score.
          </p>
          <p className="inline-disclaimer tool-hero-note">
            Unofficial score estimate. Actual AP score conversions may vary.
          </p>
          <div className="benefit-row">
            <span>APUSH score calculator 2026</span>
            <span>MCQ + SAQ + DBQ + LEQ</span>
            <span>100-point composite</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <ApUsHistoryCalculator />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Estimated AP U.S. History Score Chart</h2>
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
              These AP U.S. History score ranges are estimates only. Official
              AP score conversions may differ by year and exam form.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Detailed APUSH Score Breakdown</h2>
            <p>
              The calculator shows your MCQ raw score and weighted score, SAQ
              1-3 raw scores, total SAQ raw score and weighted score, DBQ raw
              score and weighted score, LEQ raw score and weighted score,
              composite score, and estimated AP score.
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
                    <td>MCQ raw score</td>
                    <td>Correct answers out of 55</td>
                  </tr>
                  <tr>
                    <td>MCQ weighted score</td>
                    <td>(MCQ raw score / 55) x 40</td>
                  </tr>
                  <tr>
                    <td>SAQ 1, SAQ 2, SAQ 3</td>
                    <td>Each short-answer question scored out of 3</td>
                  </tr>
                  <tr>
                    <td>Total SAQ raw score</td>
                    <td>SAQ 1 + SAQ 2 + SAQ 3, out of 9</td>
                  </tr>
                  <tr>
                    <td>SAQ weighted score</td>
                    <td>(SAQ raw score / 9) x 20</td>
                  </tr>
                  <tr>
                    <td>DBQ weighted score</td>
                    <td>(DBQ raw score / 7) x 25</td>
                  </tr>
                  <tr>
                    <td>LEQ weighted score</td>
                    <td>(LEQ raw score / 6) x 15</td>
                  </tr>
                  <tr>
                    <td>Composite score</td>
                    <td>Weighted section scores added into a /100 estimate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>How This APUSH Score Calculator Works</h2>
            <p>
              AP U.S. History has 55 multiple-choice questions. The exam also
              includes 3 short-answer questions, 1 document-based question, and
              1 long essay question.
            </p>
            <p>
              MCQ is weighted as 40%, SAQ as 20%, DBQ as 25%, and LEQ as 15%.
              This APUSH calculator converts each raw section score into its
              weighted contribution, then adds those values into an estimated
              composite score out of 100.
            </p>
            <p>
              Composite score = MCQ weighted score + SAQ weighted score + DBQ
              weighted score + LEQ weighted score
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP U.S. History Exam Format</h2>
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
                    <td>Section I, Part A: Multiple Choice</td>
                    <td>55 questions</td>
                    <td>55 minutes</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td>Section I, Part B: Short Answer</td>
                    <td>3 questions</td>
                    <td>40 minutes</td>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td>Section II, Part A: Document-Based Question</td>
                    <td>1 question</td>
                    <td>Varies within Section II</td>
                    <td>25%</td>
                  </tr>
                  <tr>
                    <td>Section II, Part B: Long Essay Question</td>
                    <td>1 question</td>
                    <td>Varies within Section II</td>
                    <td>15%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              This AP U.S. History calculator uses that exam structure to
              estimate a composite score. It does not use official score
              cutoffs.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What Is a Good AP U.S. History Score?</h2>
            <p>
              A 3 is commonly considered a qualified AP score. A 4 or 5 may be
              stronger for college credit or placement, depending on the
              college, major, and AP U.S. History policy.
            </p>
            <p>
              Credit policies vary by college. AP Score Tools does not
              determine college credit, placement, or official score
              conversions.
            </p>
          </article>

          <article className="card prose-card">
            <h2>APUSH Score Calculator FAQ</h2>
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
            <h2>Related History AP Score Calculators</h2>
            <p>
              Compare your APUSH score estimate with other live History and
              Social Science calculators from AP Score Tools.
            </p>
            <div className="hero-actions">
              <TrackedLink
                className="button"
                eventName="calculator_hub_click"
                eventParams={{ source: "ap_us_history_related" }}
                href="/ap-score-calculators/"
              >
                View All AP Score Calculators
              </TrackedLink>
              <Link className="button secondary" href="/ap-world-history-score-calculator/">
                AP World History Score Calculator
              </Link>
              <Link
                className="button secondary"
                href="/ap-us-government-score-calculator/"
              >
                AP U.S. Government Score Calculator
              </Link>
              <Link className="button secondary" href="/ap-psychology-score-calculator/">
                AP Psychology Score Calculator
              </Link>
              <Link
                className="button secondary"
                href="/ap-human-geography-score-calculator/"
              >
                AP Human Geography Score Calculator
              </Link>
              <Link className="button secondary" href="/ap-macroeconomics-score-calculator/">
                AP Macroeconomics Score Calculator
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
