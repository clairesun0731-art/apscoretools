import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  comingSoonApCalculators,
  liveApCalculators,
} from "@/lib/apCalculatorDirectory";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Calculators | Free Unofficial AP Score Estimators",
  },
  description:
    "Explore free unofficial AP score calculators for AP Environmental Science, AP Chemistry, and more AP exams. Estimate your AP score from raw MCQ and FRQ scores.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-score-calculators/",
  },
  openGraph: {
    title: "AP Score Calculators | Free Unofficial AP Score Estimators",
    description:
      "Explore free unofficial AP score calculators for AP Environmental Science, AP Chemistry, and more AP exams. Estimate your AP score from raw MCQ and FRQ scores.",
    url: "https://www.apscoretools.com/ap-score-calculators/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const liveCalculatorNames = liveApCalculators
  .map((calculator) => calculator.shortTitle ?? calculator.title)
  .join(", ");

const faqItems = [
  {
    question: "What is an AP score calculator?",
    answer:
      "An AP score calculator is an unofficial tool that estimates a possible AP score from raw exam section scores, such as MCQ and FRQ points. AP Score Tools calculators are designed for practice planning, not official score reporting.",
  },
  {
    question: "Are AP Score Tools calculators official?",
    answer:
      "No. AP Score Tools calculators are unofficial score estimators. They are not affiliated with or endorsed by the College Board, and calculator results are estimates only.",
  },
  {
    question: "How accurate are AP score calculators?",
    answer:
      "AP score calculators can be useful for practice and planning, but accuracy depends on your raw score inputs and the official conversion for that exam year and form. Results may vary from official AP scores.",
  },
  {
    question: "Which AP score calculators are live right now?",
    answer: `Current live AP Score Tools calculators include ${liveCalculatorNames}. Other subjects shown on this page are marked Coming Soon and should not be treated as live tools yet.`,
  },
  {
    question: "Can I use these calculators for 2026 AP exams?",
    answer:
      "Yes. You can use the live calculators for 2026 practice tests or post-exam estimates, but official AP score conversions may vary by exam year and form.",
  },
  {
    question: "Why do AP score cutoffs vary?",
    answer:
      "AP score cutoffs may vary because exam forms, student performance, and official conversion decisions can change by year. AP Score Tools uses estimated ranges, not official cut scores.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AP Score Calculators",
    url: "https://www.apscoretools.com/ap-score-calculators/",
    description:
      "A free, unofficial AP score calculator hub with live subject-specific estimators plus clearly marked coming soon tools.",
    isPartOf: {
      "@type": "WebSite",
      name: "AP Score Tools",
      url: "https://www.apscoretools.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Live AP Score Calculators",
    numberOfItems: liveApCalculators.length,
    itemListElement: liveApCalculators.map((calculator, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: calculator.title,
      item: `https://www.apscoretools.com${calculator.href}`,
    })),
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
    ],
  },
];

export default function ApScoreCalculatorsPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="container hero hub-hero">
        <div>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>AP Score Calculators</span>
          </nav>
          <span className="eyebrow">Unofficial AP score calculator 2026</span>
          <h1>AP Score Calculators</h1>
          <p className="lead">
            Use AP Score Tools to estimate your unofficial AP exam scores from
            raw multiple-choice and free-response scores. Start with current
            live calculators by subject, or browse upcoming AP score calculator
            tools that are clearly marked Coming Soon.
          </p>
          <p className="short-note">
            Results are unofficial estimates and may vary by year. Learn{" "}
            <Link href="/when-do-ap-scores-come-out/">
              when AP scores come out
            </Link>{" "}
            or{" "}
            <Link href="/how-to-check-ap-scores/">how to check AP scores</Link>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <section className="prose-card" id="live-ap-calculators">
            <div className="section-heading compact-heading">
              <h2>Live AP Score Calculators</h2>
              <p>
                Open a live AP exam score calculator and enter raw MCQ and FRQ
                scores to estimate a possible 1-5 result.
              </p>
            </div>
            <div className="featured-live-grid">
              {liveApCalculators.map((calculator) => (
                <Link
                  aria-label={`Open ${calculator.title}`}
                  href={calculator.href}
                  key={calculator.href}
                >
                  <article className="featured-tool-card">
                    <div>
                      <span className="status-pill">Live</span>
                      <h3>{calculator.title}</h3>
                      <p>{calculator.description}</p>
                    </div>
                    <span className="cta">Open calculator</span>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          <section className="prose-card" id="coming-soon-calculators">
            <div className="section-heading compact-heading">
              <h2>Coming Soon Calculators</h2>
              <p>
                These planned AP score calculator tools are shown for discovery
                only. They are not live calculators yet.
              </p>
            </div>
            <div className="coming-soon-grid">
              {comingSoonApCalculators.map((calculator) => (
                <article
                  className="tool-card coming-soon"
                  key={calculator.href}
                >
                  <div>
                    <span className="status-pill soon">Coming Soon</span>
                    <h3>{calculator.title}</h3>
                    <p>
                      A planned unofficial AP score estimator for this subject.
                    </p>
                  </div>
                  <span className="cta muted-cta">View status</span>
                </article>
              ))}
            </div>
          </section>

          <article className="card prose-card" id="how-ap-score-calculators-work">
            <h2>How AP score calculators work</h2>
            <p>
              Most AP exams combine multiple-choice performance and
              free-response performance. An AP score calculator uses raw score
              inputs, such as MCQ and FRQ points, to estimate weighted section
              scores and an estimated composite score.
            </p>
            <p>
              Each AP exam score calculator on AP Score Tools is an unofficial
              AP score estimator. Score cutoffs may vary by exam year and form,
              so students should use estimates for practice planning rather
              than official score prediction.
            </p>
            <p>
              Start with a live calculator like the{" "}
              <Link href="/ap-environmental-science-score-calculator/">
                AP Environmental Science Score Calculator
              </Link>{" "}
              or{" "}
              <Link href="/ap-chemistry-score-calculator/">
                AP Chemistry Score Calculator
              </Link>
              , or browse the full live list above. You can also read{" "}
              <Link href="/how-ap-environmental-science-is-scored/">
                how AP Environmental Science is scored
              </Link>
              .
            </p>
          </article>

          <article className="card prose-card" id="faq">
            <h2>AP Score Calculator FAQ</h2>
            <div className="faq-list">
              {faqItems.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="disclaimer" id="disclaimer">
            <p>
              AP Score Tools is unofficial and is not affiliated with or
              endorsed by the College Board. AP, Advanced Placement, and
              related exam names are trademarks of their respective owners.
              Calculator results are estimates only.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
