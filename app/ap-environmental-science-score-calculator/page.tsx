import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import ApesCalculator from "./ApesCalculator";

export const metadata: Metadata = {
  title: {
    absolute:
      "AP Environmental Science Score Calculator 2026 | APES Score Predictor",
  },
  description:
    "Estimate your AP Environmental Science score with our free APES score calculator. Enter your MCQ and FRQ raw scores to predict your unofficial AP score from 1 to 5.",
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
      "No. This calculator is unofficial and is not affiliated with or endorsed by the College Board. It uses estimated score boundaries.",
  },
  {
    question: "Do AP Environmental Science score cutoffs change every year?",
    answer:
      "Yes, official AP score cutoffs can vary by year. This calculator uses estimated ranges based on common APES calculator models and past scoring patterns.",
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

      <section className="container hero">
        <div>
          <span className="eyebrow">APES score predictor</span>
          <h1>AP Environmental Science Score Calculator 2026</h1>
          <p className="lead">
            Use this APES score calculator to estimate your AP Environmental
            Science score from your multiple-choice and free-response raw
            scores. The calculator converts your MCQ score to a scaled score
            out of 78, your FRQ score to a scaled score out of 52, and combines
            them into an estimated APES composite score out of 130. You can use
            it as an AP Environmental Science score predictor or APES composite
            score calculator while you study.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/">
              Explore AP Score Tools
            </Link>
          </div>
          <nav className="quick-links" aria-label="APES page sections">
            <a href="#calculator">Calculator</a>
            <a href="#raw-score-conversion">Raw score conversion</a>
            <a href="#score-chart">Score chart</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </section>

      <section className="section" id="calculator">
        <div className="container content-stack">
          <ApesCalculator mode="full" />
          <article className="disclaimer">
            <p>
              This AP Environmental Science score calculator is unofficial. It
              uses estimated score boundaries based on publicly available AP
              exam structures and past scoring patterns. Official AP scores are
              determined by the College Board and may vary by year.
            </p>
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
                eventName="calculator_hub_click"
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

          <article className="card prose-card" id="score-chart">
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
                  <tr>
                    <td>96-130</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>77-95</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>68-76</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>50-67</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>0-49</td>
                    <td>1</td>
                  </tr>
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
              What Score Do You Need for a 3, 4, or 5 on AP Environmental
              Science?
            </h2>
            <p>
              In this estimator, you need about 68 composite points for a
              predicted 3, 77 composite points for a predicted 4, and 96
              composite points for a predicted 5. Because official AP score
              cutoffs can vary by year, use these numbers as planning estimates
              instead of guarantees.
            </p>
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
              More calculators are planned for AP Biology, AP Chemistry, AP
              Psychology, and AP Statistics. The APES score chart and APES raw
              score conversion on this page are estimates, and future subject
              calculators will be labeled clearly when they go live.
            </p>
            <div className="hero-actions">
              <Link className="button secondary" href="/">
                AP Score Tools home
              </Link>
              <TrackedLink
                className="button"
                eventName="calculator_hub_click"
                eventParams={{ source: "apes_calculator_page" }}
                href="/ap-score-calculators/"
              >
                View AP score calculators
              </TrackedLink>
              <TrackedLink
                className="button secondary"
                eventName="scoring_guide_click"
                eventParams={{ source: "apes_calculator_page" }}
                href="/how-ap-environmental-science-is-scored/"
              >
                How APES is scored
              </TrackedLink>
              <TrackedLink
                className="button secondary"
                eventName="coming_soon_subject_click"
                eventParams={{
                  subject: "ap_biology",
                  source: "apes_calculator_page",
                }}
                href="/ap-biology-score-calculator/"
              >
                AP Biology Score Calculator
              </TrackedLink>
              <TrackedLink
                className="button secondary"
                eventName="coming_soon_subject_click"
                eventParams={{
                  subject: "ap_chemistry",
                  source: "apes_calculator_page",
                }}
                href="/ap-chemistry-score-calculator/"
              >
                AP Chemistry Score Calculator
              </TrackedLink>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
