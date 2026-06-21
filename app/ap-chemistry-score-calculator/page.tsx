import type { Metadata } from "next";
import Link from "next/link";
import APChemCalculator from "@/components/APChemCalculator";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "AP Chemistry Score Calculator | Estimate Your AP Chem Score",
  },
  description:
    "Use this unofficial AP Chemistry score calculator to estimate your AP Chem score from MCQ and FRQ raw scores. Results are estimates and may vary.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
  },
  openGraph: {
    title: "AP Chemistry Score Calculator | AP Score Tools",
    description:
      "Use this free, unofficial AP Chemistry Score Calculator to estimate your AP Chem score from multiple-choice and free-response question scores.",
    url: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is this AP Chemistry score calculator official?",
    answer:
      "No. This AP Chemistry score calculator is unofficial. Results are estimates and may vary by year; it is not endorsed by the College Board.",
  },
  {
    question: "How is the AP Chemistry exam scored?",
    answer:
      "The exam combines multiple-choice and free-response sections. This estimator converts MCQ raw points to a 50-point MCQ section and FRQ raw points to a 50-point FRQ section, then sums them to a composite out of 100.",
  },
  {
    question: "What composite score do I need for a 5 on AP Chemistry?",
    answer:
      "In this estimator, a predicted 5 corresponds to a composite in the 75–100 range. Use these ranges as guidance — official cutoffs can change each year.",
  },
  {
    question: "How are AP Chemistry MCQ and FRQ scores weighted?",
    answer:
      "This calculator treats MCQ and FRQ as roughly equal halves, scaling MCQ to 50 and FRQ to 50 before combining them into a composite out of 100.",
  },
  {
    question: "Can I use this AP Chemistry calculator for 2026?",
    answer:
      "Yes. You may use it for 2026 practice or post-exam estimates, but official scores are released by College Board and may differ.",
  },
  {
    question: "How accurate is this AP Chem score calculator?",
    answer:
      "Accuracy depends on input quality and year-to-year conversion differences. This calculator gives an unofficial estimate for practice and planning, not an exact or guaranteed score.",
  },
];


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AP Chemistry Score Calculator",
    alternateName: ["AP Chem Score Calculator", "AP Chemistry Score Predictor"],
    url: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
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
      "Estimate AP Chemistry scores from MCQ and FRQ raw scores",
      "Convert MCQ raw score to an estimated scaled score out of 50",
      "Convert FRQ raw score to an estimated scaled score out of 50",
      "Estimate AP Chemistry composite score out of 100",
      "Map estimated composite score to a predicted AP score from 1 to 5",
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
        name: "AP Chemistry Score Calculator",
        item: "https://www.apscoretools.com/ap-chemistry-score-calculator/",
      },
    ],
  },
];

export default function ApChemistryScoreCalculatorPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="tool-hero-section">
        <div className="container tool-hero-stack">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/ap-score-calculators/">AP Score Calculators</Link>
            <span>AP Chemistry Score Calculator</span>
          </nav>
          <span className="eyebrow">AP Chem score estimator</span>
          <h1>AP Chemistry Score Calculator</h1>
          <p className="lead">
            Enter your AP Chemistry MCQ and FRQ raw scores to estimate your
            unofficial AP score. This calculator converts your raw section
            scores into an estimated composite score.
          </p>

          <div className="centered-calculator-panel" id="calculator">
            <APChemCalculator mode="full" />
          </div>

          <div className="brief-explain card mt-6">
            <h3>How this AP Chemistry estimate works</h3>
            <p>
              This calculator scales MCQ raw points (0–60) to a 50-point MCQ
              section and converts FRQ raw total (0–46) to a 50-point FRQ
              section. The two scaled section scores are added to give an
              estimated composite out of 100 and mapped to an unofficial AP
              score band.
            </p>
            <p>
              Learn more in <Link href="/ap-score-calculators/">AP score calculators</Link> or compare with the <Link href="/ap-environmental-science-score-calculator/">AP Environmental Science Score Calculator</Link>. Check <Link href="/when-do-ap-scores-come-out/">AP score release dates</Link> for official timing.
            </p>
          </div>

          <div className="release-note-card mt-4">
            <p>
              This calculator is unofficial and provides estimates only. Final
              AP score conversions may vary by exam form and year.
            </p>
            <div className="disclaimer mt-4">
              AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board. AP, Advanced Placement, and related exam names are trademarks of their respective owners. Calculator results are estimates only.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>How the AP Chemistry Exam Is Structured</h2>
            <ul className="prose-list">
              <li>
                Section I has 60 multiple-choice questions and counts for 50%
                of the exam score.
              </li>
              <li>
                Section II has 7 free-response questions and counts for 50% of
                the exam score.
              </li>
              <li>
                The free-response section includes 3 long-answer questions and
                4 short-answer questions.
              </li>
              <li>
                Long-answer questions are commonly scored out of 10 points each,
                while short-answer questions are commonly scored out of 4 points
                each.
              </li>
            </ul>
          </article>

          <article className="card prose-card">
            <h2>How This AP Chemistry Score Calculator Works</h2>
            <ul className="prose-list">
              <li>
                The calculator converts your MCQ raw score into a weighted score
                out of 50.
              </li>
              <li>
                It adds your seven FRQ question scores into a raw FRQ total out
                of 46.
              </li>
              <li>
                It converts the FRQ raw total into a weighted score out of 50.
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
            <h2>Estimated AP Chemistry Score Chart</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Composite Score Range</th>
                    <th>Predicted AP Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>75-100</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>60-74</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>45-59</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>30-44</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>0-29</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These AP Chemistry score ranges are estimates, not official
              College Board cutoffs. Official cutoffs may vary by year.
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP Chemistry FRQ Score Breakdown</h2>
            <p>
              The AP Chemistry free-response section includes 3 long-answer
              questions worth 10 points each and 4 short-answer questions worth
              4 points each, for 46 raw FRQ points total. This calculator lets
              students enter each FRQ separately to estimate the FRQ
              contribution.
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP Chemistry Score Calculator FAQ</h2>
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
              <Link href="/ap-biology-score-calculator/">
                AP Biology Score Calculator
              </Link>
              , use the{" "}
              <Link href="/ap-environmental-science-score-calculator/">
                AP Environmental Science Score Calculator
              </Link>
              , or check the{" "}
              <Link href="/ap-human-geography-score-calculator/">
                AP Human Geography Score Calculator
              </Link>
              . For scoring explanations, browse the{" "}
              <Link href="/guides/ap-scoring-guides/">AP Scoring Guides</Link>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
