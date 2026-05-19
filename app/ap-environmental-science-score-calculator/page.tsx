import type { Metadata } from "next";
import Link from "next/link";
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
    question: "Is this APES score calculator official?",
    answer:
      "No. This calculator is unofficial and is not affiliated with or endorsed by the College Board.",
  },
  {
    question: "How accurate is this AP Environmental Science score calculator?",
    answer:
      "It provides an estimate based on the exam structure and estimated score boundaries. Actual AP score cutoffs can vary from year to year.",
  },
  {
    question: "What is a good AP Environmental Science score?",
    answer:
      "A 3 is often considered passing, while a 4 or 5 is usually stronger for college credit. Each college sets its own AP credit policy.",
  },
  {
    question: "What score do I need to get a 5 on APES?",
    answer:
      "In this calculator, the estimated AP Score 5 range starts at a composite score of 96 out of 130. The actual cutoff may vary.",
  },
  {
    question: "Can I use this calculator after the APES exam?",
    answer:
      "Yes. If you remember your approximate MCQ and FRQ performance, you can use it to estimate your possible score.",
  },
  {
    question: "Does the AP Environmental Science exam include FRQs?",
    answer:
      "Yes. The AP Environmental Science exam includes 3 free-response questions, which account for 40% of the exam score.",
  },
];

const jsonLd = [
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
    "@type": "SoftwareApplication",
    name: "AP Environmental Science Score Calculator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "A free unofficial APES score calculator that estimates an AP Environmental Science score from MCQ and FRQ raw scores.",
    url: "https://www.apscoretools.com/ap-environmental-science-score-calculator/",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container hero">
        <div>
          <span className="eyebrow">APES score predictor</span>
          <h1>AP Environmental Science Score Calculator 2026</h1>
          <p className="lead">
            Estimate your APES score by entering your multiple-choice and
            free-response raw scores. This free AP Environmental Science score
            calculator gives you an unofficial predicted AP score from 1 to 5.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/">
              Explore AP Score Tools
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <ApesCalculator />
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
              Psychology, and AP Statistics.
            </p>
            <div>
              <Link className="button secondary" href="/">
                View all AP score calculators
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
