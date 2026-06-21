import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { liveApCalculators, comingSoonApCalculators } from "@/lib/apCalculatorDirectory";

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
    title: "AP Score Calculators by Subject | AP Score Tools",
    description:
      "Explore free AP score calculators by subject from AP Score Tools. Results are unofficial estimates and may vary by year.",
    url: "https://www.apscoretools.com/ap-score-calculators/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const faqItems = [
  {
    question: "What is an AP score calculator?",
    answer:
      "An AP score calculator estimates an AP exam score (1–5) by converting raw multiple-choice (MCQ) and free-response (FRQ) points into estimated section weights and a composite score. These are unofficial estimates for practice and planning.",
  },
  {
    question: "Are AP Score Tools calculators official?",
    answer:
      "No. AP Score Tools provides unofficial AP score estimates. Results are estimates and may vary by year; they are not endorsed by the College Board.",
  },
  {
    question: "How accurate are AP score calculators?",
    answer:
      "Accuracy depends on input quality and year-to-year conversion differences. These calculators provide estimated score bands for practice, not exact or guaranteed predictions.",
  },
  {
    question: "Which AP score calculators are live right now?",
    answer:
      "Live calculators include AP Environmental Science and AP Chemistry. Other subjects shown may be Coming Soon and are clearly labeled.",
  },
  {
    question: "Can I use these calculators for 2026 AP exams?",
    answer:
      "Yes. You can use these unofficial calculators for 2026 practice and post-exam estimates, but official scores are released by College Board and may differ.",
  },
  {
    question: "Why do AP score cutoffs vary?",
    answer:
      "Cutoffs change by exam form and year based on exam difficulty and College Board conversion decisions. These tools use estimated mappings that can change over time.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AP Score Calculators by Subject",
    url: "https://www.apscoretools.com/ap-score-calculators/",
    description:
      "A directory of free, unofficial AP score calculators, AP exam score calculators, and planned AP scoring calculator tools by subject.",
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
          <span className="eyebrow">AP score calculators</span>
          <h1>AP Score Calculators</h1>
          <p className="lead">
            Use AP Score Tools to estimate your unofficial AP exam scores from
            raw multiple-choice (MCQ) and free-response (FRQ) scores. Start
            with live calculators for AP Environmental Science and AP
            Chemistry, or browse upcoming AP score calculator tools.
          </p>
          <div className="disclaimer">
            AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board. AP, Advanced Placement, and related exam names are trademarks of their respective owners. Calculator results are estimates only.
          </div>
          <p className="short-note">
            Results are unofficial estimates and may vary by year. Live
            calculators are shown first; Coming Soon tools are clearly
            labeled.
          </p>
        </div>
      </section>


      <section className="section">
        <div className="container content-stack">
          <section className="prose-card" id="live-ap-calculators">
            <div className="section-heading compact-heading">
              <h2>Live AP Score Calculators</h2>
              <p>
                These calculators are live tools with subject-specific inputs
                and unofficial AP score estimates from 1 to 5. Live tools are
                highlighted below.
              </p>
            </div>

            <div className="featured-live-grid">
              {liveApCalculators
                .filter((c) =>
                  [
                    "/ap-environmental-science-score-calculator/",
                    "/ap-chemistry-score-calculator/",
                  ].includes(c.href),
                )
                .map((calculator) => (
                  <Link href={calculator.href} key={calculator.href} aria-label={`Open ${calculator.title}`}>
                    <article className="featured-tool-card">
                      <div>
                        <h3>{calculator.title}</h3>
                        <p>
                          {calculator.title.includes("Environmental")
                            ? "Estimate your unofficial APES score from MCQ and FRQ raw scores."
                            : "Estimate your unofficial AP Chemistry score from MCQ and FRQ raw scores."}
                        </p>
                      </div>
                      <span className="cta">Open calculator →</span>
                    </article>
                  </Link>
                ))}
            </div>

            <div className="cards-grid mt-6">
              {liveApCalculators
                .filter(
                  (c) =>
                    ![
                      "/ap-environmental-science-score-calculator/",
                      "/ap-chemistry-score-calculator/",
                    ].includes(c.href),
                )
                .map((calculator) => (
                  <Link aria-label={`Use ${calculator.title}`} href={calculator.href} key={calculator.title}>
                    <article className="tool-card active">
                      <div>
                        <span className="status-pill">Live</span>
                        <h3>{calculator.title}</h3>
                        <p>{calculator.description}</p>
                      </div>
                      <span>Use Calculator</span>
                    </article>
                  </Link>
                ))}
            </div>
          </section>

          <section className="prose-card" id="coming-soon-calculators">
            <div className="section-heading compact-heading">
              <h2>Coming Soon</h2>
              <p>
                Planned calculators are shown for discovery. These tools are
                not live and are clearly marked as Coming Soon.
              </p>
            </div>

            <div className="cards-grid coming-soon-grid">
              {comingSoonApCalculators.map((calculator) => (
                <div className="tool-card coming-soon" key={calculator.title} aria-disabled>
                  <div>
                    <span className="status-pill soon">Coming Soon</span>
                    <h3>{calculator.title}</h3>
                    <p>{calculator.description}</p>
                  </div>
                  <span>Coming Soon</span>
                </div>
              ))}
            </div>
          </section>

          <article className="card prose-card" id="how-it-works">
            <h2>How AP score calculators work</h2>
            <p>
              AP exams usually combine multiple-choice (MCQ) and free-response
              (FRQ) performance. Raw section scores can be converted into
              estimated scaled section scores and summed to a composite score.
              Score cutoffs may vary by exam form and year. AP Score Tools
              calculators are unofficial AP score estimators for practice and
              planning, not official predictors.
            </p>
          </article>

          <article className="card prose-card" id="start-with-live-tools">
            <h2>Start with these live tools</h2>
            <p>
              Try the <Link href="/ap-environmental-science-score-calculator/">
                AP Environmental Science Score Calculator
              </Link>{" "}
              or the <Link href="/ap-chemistry-score-calculator/">
                AP Chemistry Score Calculator
              </Link>
              . Then review AP score release dates, how to check AP scores, and
              scoring guidance.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/ap-score-calculators/">
                Browse AP Score Calculators
              </Link>
              <Link className="button secondary" href="/when-do-ap-scores-come-out/">
                When Do AP Scores Come Out?
              </Link>
              <Link className="button secondary" href="/how-to-check-ap-scores/">
                How to Check AP Scores
              </Link>
              <Link className="button secondary" href="/guides/ap-scoring-guides/">
                AP Scoring Guides
              </Link>
            </div>
          </article>

          <article className="card prose-card" id="faq">
            <h2>FAQ</h2>
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
            <h2>Disclaimer</h2>
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
