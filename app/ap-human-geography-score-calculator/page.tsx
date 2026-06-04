import type { Metadata } from "next";
import Link from "next/link";
import ApHumanGeographyCalculator from "./ApHumanGeographyCalculator";
import JsonLd from "@/components/JsonLd";

const url = "https://www.apscoretools.com/ap-human-geography-score-calculator/";

export const metadata: Metadata = {
  title: {
    absolute: "AP Human Geography Score Calculator | AP Score Tools",
  },
  description:
    "Use this free, unofficial AP Human Geography Score Calculator to estimate your APHUG score from MCQ and FRQ raw scores.",
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "AP Human Geography Score Calculator | AP Score Tools",
    description:
      "Use this free, unofficial AP Human Geography Score Calculator to estimate your APHUG score from MCQ and FRQ raw scores.",
    url,
    siteName: "AP Score Tools",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is this AP Human Geography score calculator official?",
    answer:
      "No. It is an unofficial estimate and is not affiliated with the College Board.",
  },
  {
    question:
      "How many multiple-choice questions are on the AP Human Geography exam?",
    answer: "The exam has 60 multiple-choice questions in Section I.",
  },
  {
    question: "How many FRQs are on AP Human Geography?",
    answer: "There are 3 free-response questions.",
  },
  {
    question:
      "What is the difference between AP Human Geography FRQ 1, 2, and 3?",
    answer:
      "FRQ 1 has no stimulus, FRQ 2 has one stimulus, and FRQ 3 has two stimuli.",
  },
  {
    question: "Can this calculator predict my exact AP score?",
    answer:
      "No. It estimates a likely score range based on approximate section weighting and estimated score thresholds.",
  },
  {
    question: "What score do I need for a 5 on AP Human Geography?",
    answer:
      "In this AP Human Geography calculator, the estimated 5 range starts at a composite score of 75 out of 100. Official conversions may vary by year.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AP Human Geography Score Calculator",
    alternateName: [
      "APHUG Score Calculator",
      "AP HuG Calculator",
      "AP Human Geography Calculator",
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
      "Estimate AP Human Geography scores from MCQ and FRQ raw scores",
      "Convert MCQ raw score to an estimated weighted score out of 50",
      "Convert three AP Human Geography FRQ scores to an estimated weighted score out of 50",
      "Estimate an AP Human Geography composite score out of 100",
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
        name: "AP Human Geography Score Calculator",
        item: url,
      },
    ],
  },
];

export default function ApHumanGeographyScoreCalculatorPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="tool-hero-section">
        <div className="container tool-hero-stack">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/ap-score-calculators/">AP Score Calculators</Link>
            <span>AP Human Geography Score Calculator</span>
          </nav>
          <span className="eyebrow">APHUG score calculator</span>
          <h1>
            <span className="block sm:inline">AP Human</span>{" "}
            <span className="block sm:inline">Geography</span>{" "}
            <span className="block sm:inline">Score Calculator</span>
          </h1>
          <p className="lead">
            Estimate your AP Human Geography score from your multiple-choice
            score and three free-response question scores. This APHUG calculator
            gives an unofficial score estimate from 1 to 5.
          </p>
          <div className="benefit-row">
            <span>60 MCQs</span>
            <span>3 FRQs</span>
            <span>Estimated AP score 1-5</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <ApHumanGeographyCalculator />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>How the AP Human Geography Exam Is Structured</h2>
            <ul className="prose-list">
              <li>
                Section I has 60 multiple-choice questions and counts for 50%
                of the exam score.
              </li>
              <li>
                Section II has 3 free-response questions and counts for 50% of
                the exam score.
              </li>
              <li>Free-response Question 1 has no stimulus.</li>
              <li>
                Free-response Question 2 includes one stimulus, such as data,
                an image, or a map.
              </li>
              <li>
                Free-response Question 3 includes two stimuli, such as data,
                images, and/or maps.
              </li>
            </ul>
          </article>

          <article className="card prose-card">
            <h2>How This AP Human Geography Score Calculator Works</h2>
            <ul className="prose-list">
              <li>
                The calculator converts your MCQ raw score into a weighted score
                out of 50.
              </li>
              <li>
                It adds the three FRQ question scores into a raw FRQ total out
                of 21.
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
            <h2>Estimated AP Human Geography Score Ranges</h2>
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
              These are estimated AP Human Geography score ranges, not official
              cutoffs. Score ranges are approximate and may vary from the
              official AP score conversion.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What Is a Good AP Human Geography Score?</h2>
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
            <h2>AP Human Geography Score Calculator FAQ</h2>
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
              <Link href="/ap-world-history-score-calculator/">
                AP World History Score Calculator
              </Link>
              , or try the{" "}
              <Link href="/ap-macroeconomics-score-calculator/">
                AP Macroeconomics Score Calculator
              </Link>
              , and the{" "}
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
