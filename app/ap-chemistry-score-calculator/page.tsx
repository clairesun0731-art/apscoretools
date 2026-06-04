import type { Metadata } from "next";
import Link from "next/link";
import APChemCalculator from "@/components/APChemCalculator";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "AP Chemistry Score Calculator | AP Score Tools",
  },
  description:
    "Use this free, unofficial AP Chemistry Score Calculator to estimate your AP Chem score from multiple-choice and free-response question scores.",
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
      "No. This calculator provides an unofficial AP Chemistry score estimate.",
  },
  {
    question: "How accurate is this AP Chem score calculator?",
    answer:
      "It provides an estimate based on the AP Chemistry exam structure and estimated score ranges. Official AP score cutoffs can vary by year and exam form.",
  },
  {
    question: "How are AP Chemistry MCQs and FRQs weighted?",
    answer:
      "This calculator uses an approximate 50/50 model: MCQ raw score is scaled to 50 points and FRQ raw score is scaled to 50 points.",
  },
  {
    question: "How many FRQs are on the AP Chemistry Exam?",
    answer:
      "The AP Chemistry free-response section has 7 questions: 3 long-answer questions worth 10 points each and 4 short-answer questions worth 4 points each.",
  },
  {
    question: "What score do I need for a 5 on AP Chemistry?",
    answer:
      "In this calculator, the estimated AP Chemistry 5 range starts at a composite score of 75 out of 100. The actual cutoff may vary.",
  },
  {
    question: "Can I use this calculator for the 2026 AP Chemistry exam?",
    answer:
      "Yes. You can use it for 2026 AP Chemistry practice and post-exam estimates, but official score conversions may vary by exam year and form.",
  },
  {
    question: "Can I use this calculator after the AP Chemistry exam?",
    answer:
      "Yes. If you remember your approximate MCQ and FRQ performance, you can use the calculator to estimate your possible score before official scores are released.",
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
          <span className="eyebrow">AP Chem score estimate</span>
          <h1>AP Chemistry Score Calculator</h1>
          <p className="lead">
            Use this AP Chemistry score calculator to estimate your AP Chem
            score from MCQ and FRQ inputs. Enter your raw section scores to get
            an unofficial estimate with a composite score breakdown.
          </p>
          <div className="benefit-row">
            <span>Free to use</span>
            <span>MCQ + FRQ breakdown</span>
            <span>Estimated AP score 1-5</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <APChemCalculator mode="full" />
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
              <Link href="/ap-environmental-science-score-calculator/">
                AP Environmental Science Score Calculator
              </Link>
              , or check the{" "}
              <Link href="/ap-human-geography-score-calculator/">
                AP Human Geography Score Calculator
              </Link>
              , and{" "}
              <Link href="/ap-macroeconomics-score-calculator/">
                AP Macroeconomics Score Calculator
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
