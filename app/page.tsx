import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Tools | Free AP Score Calculators by Subject",
  },
  description:
    "AP Score Tools helps students estimate unofficial AP exam scores from raw MCQ and FRQ scores, starting with AP Environmental Science and AP Chemistry calculators.",
  alternates: {
    canonical: "https://www.apscoretools.com/",
  },
};

const liveCalculatorCards = [
  {
    title: "AP Environmental Science Score Calculator",
    description:
      "Estimate your unofficial APES score from MCQ and FRQ raw scores.",
    href: "/ap-environmental-science-score-calculator/",
  },
  {
    title: "AP Chemistry Score Calculator",
    description:
      "Estimate your unofficial AP Chemistry score from MCQ and FRQ raw scores.",
    href: "/ap-chemistry-score-calculator/",
  },
];

const comingSoonCalculatorCards = [
  "AP Biology Score Calculator",
  "AP Calculus AB Score Calculator",
  "AP English Language Score Calculator",
  "AP U.S. History Score Calculator",
];

const faqItems = [
  {
    question: "Is AP Score Tools official?",
    answer: "No. AP Score Tools provides unofficial AP score estimates only.",
  },
  {
    question: "What can I estimate with AP Score Tools?",
    answer:
      "You can use live subject-specific AP exam score calculators for AP Environmental Science and AP Chemistry to enter raw section scores and get an unofficial estimated AP score from 1 to 5.",
  },
  {
    question: "Are calculator results exact?",
    answer:
      "No. Results are unofficial estimates based on raw scores, section weights, and estimated score ranges. Official AP score conversions may vary by year.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AP Score Tools",
  url: "https://www.apscoretools.com",
  description:
    "Free, unofficial AP score calculators and AP exam score estimators for students.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AP Score Tools",
  url: "https://www.apscoretools.com",
  logo: "https://www.apscoretools.com/logo-ap-score-calculator-square.png",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AP Score Tools",
  url: "https://www.apscoretools.com/",
  description:
    "AP Score Tools helps students estimate unofficial AP exam scores from MCQ and FRQ raw scores.",
  isPartOf: {
    "@type": "WebSite",
    name: "AP Score Tools",
    url: "https://www.apscoretools.com",
  },
};

const faqSchema = {
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
};

export default function Home() {
  return (
    <main className="page">
      <JsonLd data={[websiteSchema, organizationSchema, webPageSchema, faqSchema]} />

      <section className="hero-tool directory-hero">
        <div className="container centered-hero-copy">
          <span className="eyebrow">AP score calculator by subject</span>
          <h1>AP Score Tools</h1>
          <p className="lead">
            AP Score Tools helps students estimate unofficial AP exam scores
            from raw multiple-choice and free-response scores. Start with live
            calculators for AP Environmental Science and AP Chemistry.
          </p>
          <p className="trust-line">
            Unofficial AP score estimates · MCQ and FRQ raw scores · Not
            affiliated with the College Board
          </p>
          <div className="hero-actions centered-actions">
            <TrackedLink
              className="button"
              eventName="calculator_hub_click"
              eventParams={{ source: "homepage_hero" }}
              href="/ap-score-calculators/"
            >
              Browse AP score calculators
            </TrackedLink>
            <a className="button secondary" href="#live-ap-calculators">
              Try a Live Calculator
            </a>
          </div>
          <p className="short-note">
            Start with the{" "}
            <Link href="/ap-environmental-science-score-calculator/">
              AP Environmental Science Score Calculator
            </Link>{" "}
            or the{" "}
            <Link href="/ap-chemistry-score-calculator/">
              AP Chemistry Score Calculator
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section" id="live-ap-calculators">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading centered-section-heading">
              <h2>Live AP Score Calculators</h2>
              <p>
                Open a live AP score calculator, enter raw MCQ and FRQ scores,
                and review an unofficial estimate from 1 to 5.
              </p>
            </div>
            <div className="featured-live-grid">
              {liveCalculatorCards.map((calculator) => (
                <Link
                  aria-label={`Open ${calculator.title}`}
                  href={calculator.href}
                  key={calculator.title}
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
            <div className="section-heading compact-heading centered-section-heading">
              <h2>Coming Soon Calculators</h2>
              <p>
                Planned AP score calculator tools are listed lightly below.
                They are not live calculators yet.
              </p>
            </div>
            <div className="coming-soon-grid">
              {comingSoonCalculatorCards.map((title) => (
                <article className="tool-card coming-soon" key={title}>
                  <div>
                    <span className="status-pill soon">Coming Soon</span>
                    <h3>{title}</h3>
                    <p>
                      A planned unofficial AP score estimator for this subject.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="card prose-card">
            <h2>How AP Score Tools Works</h2>
            <div className="steps-grid">
              <div>
                <span className="step-number">1</span>
                <h3>Choose an AP subject</h3>
                <p>Start with a calculator built for that exam structure.</p>
              </div>
              <div>
                <span className="step-number">2</span>
                <h3>Enter raw section scores</h3>
                <p>Add MCQ, FRQ, essay, or written-section points as needed.</p>
              </div>
              <div>
                <span className="step-number">3</span>
                <h3>Review an estimate</h3>
                <p>See an unofficial 1-5 score estimate and composite score.</p>
              </div>
            </div>
          </section>

          <section className="prose-card">
            <div className="section-heading compact-heading centered-section-heading">
              <h2>Why Students Use AP Score Tools</h2>
              <p>
                The calculators are built for quick practice-test checks,
                post-exam estimates, and clearer section-by-section review.
              </p>
            </div>
            <div className="why-card-grid">
              <article className="why-card">
                <h3>Subject-specific calculators</h3>
                <p>
                  Each calculator follows the structure of its AP subject,
                  including multiple-choice, free-response, and
                  written-response sections where applicable.
                </p>
              </article>
              <article className="why-card">
                <h3>Clear score breakdowns</h3>
                <p>
                  Review weighted section scores, composite score, and an
                  estimated AP score from 1 to 5.
                </p>
              </article>
              <article className="why-card">
                <h3>Useful before official scores</h3>
                <p>
                  Use AP Score Tools to understand practice test performance
                  while you wait for official AP scores.
                </p>
              </article>
            </div>
          </section>

          <section className="card prose-card">
            <h2>Find Every AP Score Calculator</h2>
            <p>
              The AP Score Calculators hub lists the current live calculators
              first and keeps planned tools clearly marked as Coming Soon.
            </p>
            <div className="hero-actions">
              <TrackedLink
                className="button"
                eventName="calculator_hub_click"
                eventParams={{ source: "homepage_directory_section" }}
                href="/ap-score-calculators/"
              >
                AP Score Calculators
              </TrackedLink>
              <Link className="button secondary" href="/when-do-ap-scores-come-out/">
                When Do AP Scores Come Out?
              </Link>
            </div>
          </section>

          <section className="card prose-card">
            <h2>FAQ</h2>
            <div className="faq-list">
              {faqItems.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
