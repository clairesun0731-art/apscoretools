import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ApWorldHistoryCalculator from "./ApWorldHistoryCalculator";

const url = "https://www.apscoretools.com/ap-world-history-score-calculator/";

export const metadata: Metadata = {
  title: {
    absolute: "AP World History Score Calculator | AP Score Tools",
  },
  description:
    "Use this free, unofficial AP World History Score Calculator to estimate your APWH score from MCQ, SAQ, DBQ, and LEQ raw scores for recent exam years.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "AP World History Score Calculator | AP Score Tools",
    description:
      "Use this free, unofficial AP World History Score Calculator to estimate your APWH score from MCQ, SAQ, DBQ, and LEQ raw scores for recent exam years.",
    url,
    siteName: "AP Score Tools",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is this AP World History score calculator official?",
    answer:
      "No. It is an unofficial estimate and is not affiliated with the College Board.",
  },
  {
    question: "What does APWH stand for?",
    answer:
      "APWH usually refers to AP World History, often AP World History: Modern.",
  },
  {
    question: "Can I use this as an AP World score calculator for 2025 or 2026?",
    answer:
      "Yes, this AP World score calculator can be used as an unofficial estimate for recent exam years, including 2025 and 2026, but official cutoffs may vary.",
  },
  {
    question: "How many multiple-choice questions are on AP World History?",
    answer:
      "AP World History: Modern has 55 multiple-choice questions in Section I, Part A.",
  },
  {
    question: "What sections does this AP World History calculator include?",
    answer:
      "It includes multiple choice, short-answer questions, the document-based question, and the long essay question.",
  },
  {
    question: "How is the DBQ scored in this calculator?",
    answer:
      "The DBQ input is scored out of 7 raw points and converted into an estimated weighted score.",
  },
  {
    question: "How is the LEQ scored in this calculator?",
    answer:
      "The LEQ input is scored out of 6 raw points and converted into an estimated weighted score.",
  },
  {
    question: "Can this APWH score calculator predict my exact AP score?",
    answer:
      "No. It estimates a likely score range based on approximate section weighting and estimated score thresholds.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AP World History Score Calculator",
    alternateName: [
      "AP World History: Modern Score Calculator",
      "APWH Score Calculator",
      "AP World Score Calculator",
      "AP World Scoring Calculator",
      "AP World Calculator",
      "AP World History Calculator",
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
      "Estimate AP World History scores from MCQ, SAQ, DBQ, and LEQ raw scores",
      "Convert MCQ raw score to an estimated weighted score out of 40",
      "Convert short-answer raw scores to an estimated weighted score out of 20",
      "Convert DBQ and LEQ scores into estimated weighted section scores",
      "Estimate an AP World History composite score out of 100",
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
        name: "AP World History Score Calculator",
        item: url,
      },
    ],
  },
];

export default function ApWorldHistoryScoreCalculatorPage() {
  return (
    <main className="page world-history-calculator-page">
      <JsonLd data={jsonLd} />

      <section className="tool-hero-section">
        <div className="container tool-hero-stack">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/ap-score-calculators/">AP Score Calculators</Link>
            <span>AP World History Score Calculator</span>
          </nav>
          <span className="eyebrow">APWH score calculator</span>
          <h1>
            <span className="block sm:inline">AP World</span>{" "}
            <span className="block sm:inline">History</span>{" "}
            <span className="block sm:inline">Score Calculator</span>
          </h1>
          <p className="lead">
            Estimate your AP World History: Modern score from MCQ, SAQ, DBQ,
            and LEQ raw scores. This unofficial APWH score calculator also
            works as an AP World score calculator or AP World scoring calculator
            for estimating a score from 1 to 5.
          </p>
          <div className="benefit-row">
            <span>55 MCQs</span>
            <span>SAQ + DBQ + LEQ</span>
            <span>Estimated AP score 1-5</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <ApWorldHistoryCalculator />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>How the AP World History: Modern Exam Is Structured</h2>
            <ul className="prose-list">
              <li>Section I, Part A includes 55 multiple-choice questions.</li>
              <li>Section I, Part B includes short-answer questions.</li>
              <li>
                Section II includes one document-based question and one long
                essay question.
              </li>
              <li>
                The AP World History: Modern exam uses several different
                question types, so this calculator separates MCQ, SAQ, DBQ, and
                LEQ scores.
              </li>
              <li>Official AP score conversions can vary by year.</li>
            </ul>
          </article>

          <article className="card prose-card">
            <h2>How This AP World History Score Calculator Works</h2>
            <ul className="prose-list">
              <li>
                The calculator converts your MCQ raw score into a weighted score
                out of 40.
              </li>
              <li>
                It adds your three short-answer scores into a raw SAQ total out
                of 9 and converts that into a weighted score out of 20.
              </li>
              <li>
                It converts your DBQ score into a weighted score out of 25.
              </li>
              <li>
                It converts your LEQ score into a weighted score out of 15.
              </li>
              <li>
                The weighted section scores are added to create an estimated
                composite score out of 100.
              </li>
              <li>
                The final AP score estimate is based on approximate score ranges
                and may vary from the official conversion.
              </li>
            </ul>
          </article>

          <article className="card prose-card">
            <h2>Estimated AP World History Score Ranges</h2>
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
              These are estimated AP World History score ranges, not official
              cutoffs. Score ranges are approximate and may vary from the
              official AP score conversion.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What Is a Good AP World History Score?</h2>
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
            <h2>APWH Score Calculator vs. Official AP Scores</h2>
            <ul className="prose-list">
              <li>
                This APWH calculator is designed for practice and planning.
              </li>
              <li>
                This AP World score calculator can be used as an unofficial
                estimate for recent exam years, including 2025 and 2026, but
                official cutoffs may vary.
              </li>
              <li>
                It can help students understand how MCQ, SAQ, DBQ, and LEQ
                performance contribute to an estimated score.
              </li>
              <li>It cannot predict an exact official score.</li>
              <li>
                Official AP World History score conversions may change by exam
                year.
              </li>
            </ul>
          </article>

          <article className="card prose-card">
            <h2>AP World History Score Calculator FAQ</h2>
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
              <Link href="/ap-macroeconomics-score-calculator/">
                AP Macroeconomics Score Calculator
              </Link>
              , or use the{" "}
              <Link href="/ap-environmental-science-score-calculator/">
                AP Environmental Science Score Calculator
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
