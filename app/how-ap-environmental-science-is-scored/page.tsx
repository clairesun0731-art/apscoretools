import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "How AP Environmental Science Is Scored | APES Composite Score Guide",
  },
  description:
    "Learn how the AP Environmental Science exam is scored, including MCQ weighting, FRQ weighting, composite score estimates, and how APES scores are converted to a 1-5 AP score.",
  alternates: {
    canonical:
      "https://www.apscoretools.com/how-ap-environmental-science-is-scored/",
  },
};

const faqs = [
  {
    question: "Is the APES composite score out of 130 official?",
    answer:
      "No. The 130-point composite model is a common unofficial calculator model. Official AP score cutoffs are determined by the College Board and may vary by year.",
  },
  {
    question: "How much is the MCQ section worth in AP Environmental Science?",
    answer:
      "In this model, the AP Environmental Science multiple-choice section is scaled to 78 points and represents 60% of the estimated score.",
  },
  {
    question: "How much is the FRQ section worth in AP Environmental Science?",
    answer:
      "In this model, the three AP Environmental Science free-response questions are worth 30 raw points total and are scaled to 52 composite points, or 40% of the estimated score.",
  },
  {
    question: "What composite score do I need for a 5 on APES?",
    answer:
      "This guide uses an estimated AP Score 5 range of 96-130 composite points. The official cutoff may vary by year.",
  },
  {
    question: "Can AP score cutoffs change every year?",
    answer:
      "Yes. Official AP score cutoffs can vary from year to year, so unofficial calculators should be used as estimates only.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How AP Environmental Science Is Scored",
    description:
      "A student-friendly guide to AP Environmental Science MCQ weighting, FRQ weighting, composite score estimates, and estimated AP score conversion.",
    url: "https://www.apscoretools.com/how-ap-environmental-science-is-scored/",
    author: {
      "@type": "Organization",
      name: "AP Score Tools",
    },
    publisher: {
      "@type": "Organization",
      name: "AP Score Tools",
      logo: {
        "@type": "ImageObject",
        url: "https://www.apscoretools.com/logo-ap-score-calculator-square.png",
      },
    },
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.apscoretools.com/how-ap-environmental-science-is-scored/",
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
        name: "How AP Environmental Science Is Scored",
        item: "https://www.apscoretools.com/how-ap-environmental-science-is-scored/",
      },
    ],
  },
];

export default function HowApEnvironmentalScienceIsScoredPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="container hero">
        <div>
          <span className="eyebrow">APES scoring guide</span>
          <h1>How AP Environmental Science Is Scored</h1>
          <p className="lead">
            AP Environmental Science includes a multiple-choice section and a
            free-response section. This guide explains how students can
            understand the scoring structure and how APES score calculators
            estimate a 1-5 score.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>AP Environmental Science Exam Sections</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Raw Score</th>
                    <th>Scaled Score</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Multiple Choice</td>
                    <td>80 questions</td>
                    <td>78 points</td>
                    <td>60%</td>
                  </tr>
                  <tr>
                    <td>Free Response</td>
                    <td>3 questions / 30 raw points</td>
                    <td>52 points</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>130 points</td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>How the APES Composite Score Works</h2>
            <p>
              A common APES calculator model converts the MCQ raw score to 78
              points and the FRQ raw score to 52 points. Together, they create a
              composite score out of 130.
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
            <h2>Estimated APES Score Conversion Chart</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Composite Score Range</th>
                    <th>Estimated AP Score</th>
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
              These are estimated ranges, not official College Board cutoffs.
              Official cutoffs may vary by year.
            </p>
          </article>

          <article className="card prose-card">
            <h2>How FRQs Affect Your APES Score</h2>
            <p>
              FRQs account for 40% of the estimated score in this model. A few
              points on the FRQ section can significantly change the composite
              score, especially near the 3, 4, or 5 cutoff ranges.
            </p>
          </article>

          <article className="card prose-card">
            <h2>How MCQs Affect Your APES Score</h2>
            <p>
              The multiple-choice section accounts for 60% of the estimated
              score. Because there are 80 questions, each additional correct MCQ
              increases the scaled MCQ contribution.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Try the AP Environmental Science Score Calculator</h2>
            <p>
              Enter your MCQ and FRQ raw scores to estimate your APES composite
              score and predicted AP score range.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/ap-environmental-science-score-calculator/">
                Use the AP Environmental Science Score Calculator
              </Link>
              <Link className="button secondary" href="/ap-score-calculators/">
                View All AP Score Calculators
              </Link>
            </div>
          </article>

          <article className="card prose-card">
            <h2>FAQ</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
