import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import ApBiologyCalculator from "./ApBiologyCalculator";

export const metadata: Metadata = {
  title: {
    absolute: "AP Biology Score Calculator | AP Bio Score Predictor",
  },
  description:
    "Use this free AP Biology Score Calculator to estimate your AP Bio score from MCQ and FRQ raw points. Unofficial AP Biology score predictor with composite score breakdown.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-biology-score-calculator/",
  },
  openGraph: {
    title: "AP Biology Score Calculator | AP Bio Score Predictor",
    description:
      "Estimate your AP Biology score from MCQ and FRQ raw points with an unofficial AP Bio score predictor and composite score breakdown.",
    url: "https://www.apscoretools.com/ap-biology-score-calculator/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const scoreBands = [
  { compositeRange: "78-100", predictedScore: "5" },
  { compositeRange: "63-77", predictedScore: "4" },
  { compositeRange: "54-62", predictedScore: "3" },
  { compositeRange: "36-53", predictedScore: "2" },
  { compositeRange: "0-35", predictedScore: "1" },
];

const faqItems = [
  {
    question: "Is this AP Biology score calculator official?",
    answer:
      "No. This AP Biology score calculator is an unofficial estimator from AP Score Tools and is not affiliated with or endorsed by the College Board.",
  },
  {
    question: "How is AP Biology scored?",
    answer:
      "AP Biology has a multiple-choice section and a free-response section. This calculator scales MCQ raw points to 50 points, scales FRQ raw points to 50 points, and combines them into an estimated composite score out of 100.",
  },
  {
    question: "How many multiple-choice questions are on AP Biology?",
    answer:
      "The AP Biology multiple-choice section has 60 questions and counts for 50% of the exam score.",
  },
  {
    question: "How many FRQs are on AP Biology?",
    answer:
      "The AP Biology free-response section has 6 questions: 2 long questions worth 9 points each and 4 short questions worth 4 points each.",
  },
  {
    question: "What composite score do I need for a 5 on AP Biology?",
    answer:
      "In this AP Biology score predictor, the estimated 5 range starts at a composite score of 78 out of 100. This is an estimate, not an official cutoff.",
  },
  {
    question: "Can this calculator predict my exact AP score?",
    answer:
      "No. It provides an approximate AP Biology score estimate. Official score conversions can vary by year and exam form.",
  },
  {
    question: "Are calculators allowed on the AP Biology exam?",
    answer:
      "Yes. Calculators are permitted on the AP Biology exam. Follow your school's AP exam instructions for allowed calculator models and testing rules.",
  },
  {
    question:
      "What is the difference between AP Biology raw score and composite score?",
    answer:
      "Raw score means the points you earn on MCQ or FRQ questions. Composite score is the weighted total after the MCQ section and FRQ section are each converted to 50 points.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AP Biology Score Calculator",
    alternateName: [
      "AP Bio Score Calculator",
      "AP Biology Calculator",
      "AP Bio Calculator",
      "AP Biology Score Predictor",
      "AP Bio Score Predictor",
      "AP Biology FRQ Score Calculator",
    ],
    url: "https://www.apscoretools.com/ap-biology-score-calculator/",
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
      "Estimate AP Biology scores from MCQ and FRQ raw points",
      "Convert AP Biology MCQ raw score to an estimated weighted score out of 50",
      "Convert AP Biology FRQ raw score to an estimated weighted score out of 50",
      "Estimate AP Biology composite score out of 100",
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
        name: "AP Biology Score Calculator",
        item: "https://www.apscoretools.com/ap-biology-score-calculator/",
      },
    ],
  },
];

export default function ApBiologyScoreCalculatorPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="tool-hero-section">
        <div className="container tool-hero-stack">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <TrackedLink
              eventName="calculator_hub_click"
              eventParams={{ source: "ap_biology_breadcrumb" }}
              href="/ap-score-calculators/"
            >
              AP Score Calculators
            </TrackedLink>
            <span>AP Biology Score Calculator</span>
          </nav>
          <span className="eyebrow">AP Bio score predictor</span>
          <h1>AP Biology Score Calculator</h1>
          <p className="lead">
            Estimate your AP Biology score from your multiple-choice and
            free-response raw scores. This unofficial AP Bio score calculator
            converts your MCQ and FRQ points into an estimated composite score
            and AP score.
          </p>
          <p className="inline-disclaimer tool-hero-note">
            Unofficial score estimate. Actual AP score conversions may vary.
          </p>
          <div className="benefit-row">
            <span>AP Biology score calculator 2026</span>
            <span>MCQ + FRQ breakdown</span>
            <span>Estimated composite score</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <ApBiologyCalculator />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Estimated AP Biology Score Chart</h2>
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
              These AP Biology score ranges are estimates only. Official AP
              score conversions may differ by year and exam form.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Detailed AP Biology Score Breakdown</h2>
            <p>
              The calculator shows your MCQ raw score, MCQ weighted score, FRQ
              raw score, FRQ weighted score, composite score, and estimated AP
              score. The AP Biology composite score is out of 100 points.
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
                    <td>Correct answers out of 60</td>
                  </tr>
                  <tr>
                    <td>MCQ weighted score</td>
                    <td>(MCQ raw score / 60) x 50</td>
                  </tr>
                  <tr>
                    <td>FRQ raw score</td>
                    <td>FRQ 1-6 total out of 34</td>
                  </tr>
                  <tr>
                    <td>FRQ weighted score</td>
                    <td>(FRQ raw score / 34) x 50</td>
                  </tr>
                  <tr>
                    <td>Composite score</td>
                    <td>MCQ weighted score + FRQ weighted score</td>
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
            <h2>How This AP Biology Score Calculator Works</h2>
            <p>
              AP Biology has 60 multiple-choice questions and 6 free-response
              questions. The MCQ and FRQ sections are each weighted as 50% of
              the final exam score.
            </p>
            <p>
              This AP Biology calculator scales your MCQ raw score to 50
              points, scales your FRQ raw score to 50 points, and adds both
              weighted section scores into an estimated AP Biology composite
              score out of 100.
            </p>
            <p>
              MCQ weighted score = (MCQ raw score / 60) x 50
              <br />
              FRQ weighted score = (FRQ raw score / 34) x 50
              <br />
              Composite score = MCQ weighted score + FRQ weighted score
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP Biology Exam Format</h2>
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
                    <td>60 questions</td>
                    <td>1 hour 30 minutes</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>Section II: Free Response</td>
                    <td>6 questions</td>
                    <td>1 hour 30 minutes</td>
                    <td>50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The AP Biology FRQ section includes 2 long questions and 4 short
              questions. Calculators are permitted on the AP Biology exam. AP
              Biology is currently administered in a hybrid digital format for
              most students, so follow your school&apos;s AP exam instructions.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What Is a Good AP Biology Score?</h2>
            <p>
              A 3 is commonly considered a qualified AP score. A 4 or 5 may be
              stronger for college credit or placement, depending on the
              college, major, and AP Biology policy.
            </p>
            <p>
              College credit policies vary by school and subject. AP Score
              Tools does not determine college credit, placement, or official
              score conversions.
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP Biology Score Calculator FAQ</h2>
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
            <h2>Related Science AP Score Calculators</h2>
            <p>
              Compare your AP Biology score estimate with other live Science
              calculators from AP Score Tools.
            </p>
            <div className="hero-actions">
              <TrackedLink
                className="button"
                eventName="calculator_hub_click"
                eventParams={{ source: "ap_biology_related" }}
                href="/ap-score-calculators/"
              >
                View All AP Score Calculators
              </TrackedLink>
              <Link
                className="button secondary"
                href="/ap-chemistry-score-calculator/"
              >
                AP Chemistry Score Calculator
              </Link>
              <Link
                className="button secondary"
                href="/ap-environmental-science-score-calculator/"
              >
                AP Environmental Science Score Calculator
              </Link>
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
