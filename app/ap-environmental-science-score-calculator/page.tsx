import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import ApesCalculator from "./ApesCalculator";

export const metadata: Metadata = {
  title: {
    absolute: "AP Environmental Science Score Calculator | AP Score Tools",
  },
  description:
    "Use this free, unofficial AP Environmental Science Score Calculator to estimate your APES score from MCQ and FRQ raw scores.",
  alternates: {
    canonical:
      "https://www.apscoretools.com/ap-environmental-science-score-calculator/",
  },
};

const faqs = [
  {
    question: "When is the 2026 AP Environmental Science Exam?",
    answer:
      "The regularly scheduled 2026 AP Environmental Science Exam is Friday, May 15, 2026, at 8 AM local time. Your school or AP coordinator can confirm your exact testing details.",
  },
  {
    question: "When do 2026 AP scores come out?",
    answer:
      "2026 AP scores will be available starting Monday, July 6, 2026. Students can view their scores through their College Board account.",
  },
  {
    question: "Can I use this calculator before the APES exam?",
    answer:
      "Yes. You can use it during review season to test different MCQ and FRQ score scenarios and see how they may affect your estimated AP score.",
  },
  {
    question: "Can I use this calculator after the APES exam?",
    answer:
      "Yes. If you remember your approximate multiple-choice and free-response performance, you can use it to estimate your possible AP score before official scores are released.",
  },
  {
    question: "Is this APES score calculator official?",
    answer:
      "No. This calculator provides an unofficial APES score estimate using estimated score boundaries.",
  },
  {
    question: "Do AP Environmental Science score cutoffs change every year?",
    answer:
      "Yes, official AP score cutoffs can vary by year. This calculator uses estimated ranges based on common APES calculator models and past scoring patterns.",
  },
];

const estimatedScoreBands = [
  { predictedScore: "5", compositeRange: "96-130" },
  { predictedScore: "4", compositeRange: "77-95" },
  { predictedScore: "3", compositeRange: "68-76" },
  { predictedScore: "2", compositeRange: "50-67" },
  { predictedScore: "1", compositeRange: "0-49" },
];

const exampleScenarios = [
  {
    scenario: "Strong 5 range",
    mcq: "72 / 80",
    frq: "27 / 30",
    composite: "118.8 / 130",
    predictedScore: "5",
  },
  {
    scenario: "Solid 4 range",
    mcq: "60 / 80",
    frq: "22 / 30",
    composite: "85.0 / 130",
    predictedScore: "4",
  },
  {
    scenario: "Passing range",
    mcq: "52 / 80",
    frq: "17 / 30",
    composite: "70.0 / 130",
    predictedScore: "3",
  },
  {
    scenario: "Close to a 3",
    mcq: "45 / 80",
    frq: "14 / 30",
    composite: "59.4 / 130",
    predictedScore: "2",
  },
  {
    scenario: "Needs more review",
    mcq: "34 / 80",
    frq: "10 / 30",
    composite: "43.6 / 130",
    predictedScore: "1",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AP Environmental Science Score Calculator",
    alternateName: [
      "APES Score Calculator",
      "APES Score Predictor",
      "AP Environmental Science Score Predictor",
    ],
    url: "https://www.apscoretools.com/ap-environmental-science-score-calculator/",
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
      "Estimate AP Environmental Science scores from MCQ and FRQ raw scores",
      "Convert MCQ raw score to an estimated scaled score out of 78",
      "Convert FRQ raw score to an estimated scaled score out of 52",
      "Estimate APES composite score out of 130",
      "Map estimated composite score to a predicted AP score from 1 to 5",
    ],
    description:
      "A free, unofficial AP Environmental Science score calculator that estimates an APES composite score from multiple-choice and free-response raw scores.",
    creator: {
      "@type": "Organization",
      name: "AP Score Tools",
      url: "https://www.apscoretools.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AP Score Tools",
      url: "https://www.apscoretools.com",
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    educationalUse: "Exam preparation",
    learningResourceType: "Calculator",
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AP Environmental Science Score Calculator 2026",
    url: "https://www.apscoretools.com/ap-environmental-science-score-calculator/",
    description:
      "A free, unofficial APES score calculator page for estimating AP Environmental Science composite scores from MCQ and FRQ raw scores.",
    isPartOf: {
      "@type": "WebSite",
      name: "AP Score Tools",
      url: "https://www.apscoretools.com",
    },
    about: {
      "@type": "SoftwareApplication",
      name: "AP Environmental Science Score Calculator",
      url: "https://www.apscoretools.com/ap-environmental-science-score-calculator/",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
        name: "AP Environmental Science Score Calculator",
        item: "https://www.apscoretools.com/ap-environmental-science-score-calculator/",
      },
    ],
  },
];

export default function ApEnvironmentalScienceScoreCalculatorPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="tool-hero-section">
        <div className="container tool-hero-stack">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <TrackedLink
              eventName="calculator_hub_click"
              eventParams={{ source: "apes_breadcrumb" }}
              href="/ap-score-calculators/"
            >
              AP Score Calculators
            </TrackedLink>
            <span>AP Environmental Science Score Calculator</span>
          </nav>
          <span className="eyebrow">APES score predictor</span>
          <h1>AP Environmental Science Score Calculator 2026</h1>
          <p className="lead">
            Use this APES score calculator to estimate your AP Environmental
            Science score from MCQ and FRQ raw scores. Results are unofficial
            estimates and may vary by exam year.
          </p>
          <div className="benefit-row">
            <span>Free to use</span>
            <span>MCQ + FRQ breakdown</span>
            <span>Estimated AP score 1-5</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <ApesCalculator mode="full" />
          </div>

          <p className="inline-disclaimer tool-hero-note">
            Unofficial estimate. Final AP score conversions may vary by year.
          </p>
        </div>
      </section>

      <section className="section score-chart-section" id="score-chart">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Estimated APES Composite Score Chart</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Composite Score Range</th>
                    <th>Predicted AP Score</th>
                  </tr>
                </thead>
                <tbody>
                  {estimatedScoreBands.map((band) => (
                    <tr key={band.predictedScore}>
                      <td>{band.compositeRange}</td>
                      <td>{band.predictedScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              These composite score ranges are estimates based on common APES
              score calculator models and past scoring patterns. Official AP
              score cutoffs are determined by the College Board and may vary by
              year.
            </p>
          </article>

          <article className="card prose-card">
            <h2>
              What Do You Need for a 3, 4, or 5 on AP Environmental Science?
            </h2>
            <p>
              In this estimator, a predicted 3 starts at 68 composite points, a
              predicted 4 starts at 77 composite points, and a predicted 5
              starts at 96 composite points. Use these as planning ranges, not
              guarantees.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Predicted AP Score</th>
                    <th>Estimated Composite Range</th>
                  </tr>
                </thead>
                <tbody>
                  {estimatedScoreBands.map((band) => (
                    <tr key={band.predictedScore}>
                      <td>{band.predictedScore}</td>
                      <td>{band.compositeRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>Example APES Score Scenarios</h2>
            <p>
              These examples show how different MCQ and FRQ combinations can
              land in different estimated APES score bands.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>MCQ Raw</th>
                    <th>FRQ Raw Total</th>
                    <th>Estimated Composite</th>
                    <th>Predicted AP Score</th>
                  </tr>
                </thead>
                <tbody>
                  {exampleScenarios.map((scenario) => (
                    <tr key={scenario.scenario}>
                      <td>{scenario.scenario}</td>
                      <td>{scenario.mcq}</td>
                      <td>{scenario.frq}</td>
                      <td>{scenario.composite}</td>
                      <td>{scenario.predictedScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>How This AP Environmental Science Score Calculator Works</h2>
            <p>
              The calculator first converts the AP Environmental Science
              multiple-choice raw score out of 80 to a scaled score out of 78.
              It then adds the three FRQ raw scores, out of 30 total, and scales
              them to 52 points.
            </p>
            <p>
              The two scaled section scores are added to create a composite
              score out of 130. That composite score is mapped to an estimated
              AP score from 1 to 5.
            </p>
            <p>
              MCQ scaled score = (MCQ raw score ÷ 80) × 78
              <br />
              FRQ scaled score = (FRQ raw total ÷ 30) × 52
              <br />
              Composite score = MCQ scaled score + FRQ scaled score
            </p>
          </article>

          <article className="card prose-card">
            <h2>Why This APES Calculator Uses a 130-Point Composite Score</h2>
            <p>
              The AP Environmental Science exam has MCQ and FRQ sections. This
              calculator converts the MCQ raw score out of 80 to an estimated
              scaled score out of 78, then converts the FRQ raw score out of 30
              to an estimated scaled score out of 52.
            </p>
            <p>
              Together, those section estimates create an estimated composite
              score out of 130. This model reflects the APES exam structure,
              but official AP score cutoffs are determined by the College Board
              and may vary by year. This calculator is unofficial.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What Makes a Useful APES Score Calculator?</h2>
            <ul className="prose-list">
              <li>
                Uses MCQ and FRQ inputs that match the AP Environmental Science
                exam structure
              </li>
              <li>Shows section score estimates, not just a final number</li>
              <li>Explains the composite score model</li>
              <li>Clearly labels results as unofficial estimates</li>
              <li>Works well on mobile before and after exam day</li>
            </ul>
          </article>

          <article className="card prose-card" id="raw-score-conversion">
            <h2>APES Raw Score Conversion</h2>
            <p>
              This AP Environmental Science score calculator uses a common APES
              raw score conversion model. Multiple-choice raw scores are scaled
              to 78 points, while the three free-response questions are
              combined and scaled to 52 points. The two section scores are
              added to estimate a composite score out of 130.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Raw Section</th>
                    <th>Raw Max</th>
                    <th>Estimated Scaled Max</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Multiple Choice</td>
                    <td>80 questions</td>
                    <td>78 points</td>
                  </tr>
                  <tr>
                    <td>Free Response</td>
                    <td>30 raw points</td>
                    <td>52 points</td>
                  </tr>
                  <tr>
                    <td>Composite</td>
                    <td>Not applicable</td>
                    <td>130 points</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              You can read more about{" "}
              <TrackedLink
                eventName="scoring_guide_click"
                eventParams={{ source: "apes_calculator_page" }}
                href="/how-ap-environmental-science-is-scored/"
              >
                how AP Environmental Science is scored
              </TrackedLink>{" "}
              or browse the{" "}
              <TrackedLink
                eventName="apes_explore_click"
                eventParams={{ source: "apes_calculator_page" }}
                href="/ap-score-calculators/"
              >
                AP Score Calculators
              </TrackedLink>{" "}
              hub for planned tools.
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP Environmental Science Exam Format</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Raw Score</th>
                    <th>Scaled Score</th>
                    <th>Time</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Section I: Multiple Choice</td>
                    <td>80 questions</td>
                    <td>78 points</td>
                    <td>1 hour 30 minutes</td>
                    <td>60%</td>
                  </tr>
                  <tr>
                    <td>Section II: Free Response</td>
                    <td>3 questions / 30 raw points</td>
                    <td>52 points</td>
                    <td>1 hour 10 minutes</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>130 points</td>
                    <td>2 hours 40 minutes</td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>2026 AP Environmental Science Exam Date and Score Release</h2>
            <p>
              2026 AP Exams are administered over two weeks: May 4-8 and May
              11-15, 2026. The 2026 AP Environmental Science Exam is scheduled
              for Friday, May 15, 2026, at 8 AM local time. AP scores for 2026
              will be available starting Monday, July 6, 2026. This calculator
              can help you estimate your score before or after the exam, but
              official results are only available through the College Board.
            </p>
          </article>

          <article className="card prose-card" id="faq">
            <h2>APES Score Calculator FAQ</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
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
              Continue with the APES scoring guide, browse all AP score
              calculators, or compare estimates with other live subject tools.
            </p>
            <div className="hero-actions">
              <TrackedLink
                className="button secondary"
                eventName="apes_explore_click"
                eventParams={{ source: "apes_calculator_page" }}
                href="/how-ap-environmental-science-is-scored/"
              >
                How AP Environmental Science Is Scored
              </TrackedLink>
              <TrackedLink
                className="button secondary"
                eventName="scoring_guide_click"
                eventParams={{ source: "apes_calculator_page_related" }}
                href="/guides/ap-scoring-guides/"
              >
                AP Scoring Guides
              </TrackedLink>
              <TrackedLink
                className="button"
                eventName="apes_explore_click"
                eventParams={{ source: "apes_calculator_page" }}
                href="/ap-score-calculators/"
              >
                AP Score Calculators
              </TrackedLink>
              <TrackedLink
                className="button secondary"
                eventName="apes_explore_click"
                eventParams={{
                  subject: "ap_chemistry",
                  source: "apes_calculator_page",
                }}
                href="/ap-chemistry-score-calculator/"
              >
                AP Chemistry Score Calculator
              </TrackedLink>
              <TrackedLink
                className="button secondary"
                eventName="apes_explore_click"
                eventParams={{
                  subject: "ap_human_geography",
                  source: "apes_calculator_page",
                }}
                href="/ap-human-geography-score-calculator/"
              >
                AP Human Geography Score Calculator
              </TrackedLink>
              <TrackedLink
                className="button secondary"
                eventName="apes_explore_click"
                eventParams={{
                  subject: "ap_world_history",
                  source: "apes_calculator_page",
                }}
                href="/ap-world-history-score-calculator/"
              >
                AP World History Score Calculator
              </TrackedLink>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
