import type { Metadata } from "next";
import Link from "next/link";
import ApMacroeconomicsCalculator from "./ApMacroeconomicsCalculator";
import JsonLd from "@/components/JsonLd";

const url = "https://www.apscoretools.com/ap-macroeconomics-score-calculator/";

export const metadata: Metadata = {
  title: {
    absolute: "AP Macroeconomics Score Calculator | AP Score Tools",
  },
  description:
    "Use this free, unofficial AP Macroeconomics Score Calculator to estimate your AP Macro score from MCQ and FRQ raw scores.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "AP Macroeconomics Score Calculator | AP Score Tools",
    description:
      "Use this free, unofficial AP Macroeconomics Score Calculator to estimate your AP Macro score from MCQ and FRQ raw scores.",
    url,
    siteName: "AP Score Tools",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is this AP Macroeconomics score calculator official?",
    answer:
      "No. It is an unofficial estimate and is not affiliated with the College Board.",
  },
  {
    question:
      "How many multiple-choice questions are on the AP Macroeconomics exam?",
    answer: "The exam has 60 multiple-choice questions.",
  },
  {
    question: "How many free-response questions are on AP Macroeconomics?",
    answer:
      "There are 3 free-response questions: 1 long question and 2 short questions.",
  },
  {
    question: "What does this AP Macro calculator estimate?",
    answer:
      "It estimates a composite score out of 100 and an approximate AP score from 1 to 5.",
  },
  {
    question: "Can this calculator predict my exact AP score?",
    answer:
      "No. It estimates a likely score range based on approximate section weighting and estimated score thresholds.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AP Macroeconomics Score Calculator",
    alternateName: [
      "AP Macro Score Calculator",
      "AP Macroeconomics Calculator",
      "AP Macro Calculator",
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
      "Estimate AP Macroeconomics scores from MCQ and FRQ raw scores",
      "Convert MCQ raw score to an estimated weighted score out of 66",
      "Convert long and short AP Macroeconomics FRQ scores to an estimated weighted score out of 34",
      "Estimate an AP Macroeconomics composite score out of 100",
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
        name: "AP Macroeconomics Score Calculator",
        item: url,
      },
    ],
  },
];

export default function ApMacroeconomicsScoreCalculatorPage() {
  return (
    <main className="page macro-calculator-page">
      <JsonLd data={jsonLd} />

      <section className="tool-hero-section">
        <div className="container tool-hero-stack">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/ap-score-calculators/">AP Score Calculators</Link>
            <span>AP Macroeconomics Score Calculator</span>
          </nav>
          <span className="eyebrow">AP Macro score calculator</span>
          <h1>
            <span className="block sm:inline">AP</span>{" "}
            <span className="block sm:inline">Macroeconomics</span>{" "}
            <span className="block sm:inline">Score Calculator</span>
          </h1>
          <p className="lead">
            Estimate your AP Macroeconomics score from your multiple-choice
            score and free-response question scores. This AP Macro calculator
            gives an unofficial score estimate from 1 to 5.
          </p>
          <div className="benefit-row">
            <span>60 MCQs</span>
            <span>1 long FRQ + 2 short FRQs</span>
            <span>Estimated AP score 1-5</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <ApMacroeconomicsCalculator />
          </div>
          <div className="release-note-card mt-6">
            <h3>Waiting for Official AP Scores?</h3>
            <p>
              Official 2026 AP scores are available starting July 6 through
              College Board. This calculator gives an unofficial estimate only
              and may vary from your actual AP score.
            </p>
            <div className="hero-actions">
              <Link className="button secondary" href="/when-do-ap-scores-come-out/">
                When Do AP Scores Come Out?
              </Link>
              <Link className="button secondary" href="/how-to-check-ap-scores/">
                How to Check AP Scores
              </Link>
              <Link className="button" href="/ap-score-calculators/">
                Browse all AP score calculators
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>How the AP Macroeconomics Exam Is Structured</h2>
            <ul className="prose-list">
              <li>Section I has 60 multiple-choice questions.</li>
              <li>
                Section II includes 1 long free-response question and 2 short
                free-response questions.
              </li>
              <li>
                The calculator uses an estimated weighted model based on the
                exam section structure.
              </li>
              <li>AP Macroeconomics score conversions can vary by year.</li>
            </ul>
          </article>

          <article className="card prose-card">
            <h2>How This AP Macroeconomics Score Calculator Works</h2>
            <ul className="prose-list">
              <li>
                The calculator converts your MCQ raw score into a weighted score
                out of 66.
              </li>
              <li>
                It adds the long and short FRQ scores into a raw FRQ total out
                of 20.
              </li>
              <li>
                It converts the FRQ raw total into a weighted score out of 34.
              </li>
              <li>
                The MCQ and FRQ weighted scores are added to create an estimated
                composite score out of 100.
              </li>
              <li>
                The final AP score estimate is based on approximate score ranges
                and may vary from the official conversion.
              </li>
            </ul>
          </article>

          <article className="card prose-card">
            <h2>Estimated AP Macroeconomics Score Ranges</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Estimated Composite Score Range</th>
                    <th>Estimated AP Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>75-100</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>62-74</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>50-61</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>38-49</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>0-37</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These are estimated AP Macroeconomics score ranges, not official
              cutoffs. Score ranges are approximate and may vary from the
              official AP score conversion.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What Is a Good AP Macroeconomics Score?</h2>
            <ul className="prose-list">
              <li>AP scores range from 1 to 5.</li>
              <li>
                A 3 is often considered a passing score, but college credit
                policies vary by school.
              </li>
              <li>A 4 or 5 generally suggests stronger performance.</li>
              <li>
                Students should check individual college AP credit policies
                before making decisions.
              </li>
            </ul>
          </article>

          <article className="card prose-card">
            <h2>AP Macroeconomics Score Calculator FAQ</h2>
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
            <h2>Related AP Score Calculators</h2>
            <p>
              Browse{" "}
              <Link href="/ap-score-calculators/">AP Score Calculators</Link>,
              compare with the{" "}
              <Link href="/ap-human-geography-score-calculator/">
                AP Human Geography Score Calculator
              </Link>
              , try the{" "}
              <Link href="/ap-world-history-score-calculator/">
                AP World History Score Calculator
              </Link>
              , or use the{" "}
              <Link href="/ap-chemistry-score-calculator/">
                AP Chemistry Score Calculator
              </Link>
              . You can also browse{" "}
              <Link href="/guides/ap-scoring-guides/">AP Scoring Guides</Link>{" "}
              for subject-by-subject scoring explanations.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
