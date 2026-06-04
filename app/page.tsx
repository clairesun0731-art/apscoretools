import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import {
  calculatorCategoryOrder,
  getCalculatorsByCategory,
  liveApCalculators,
} from "@/lib/apCalculatorDirectory";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Tools | Free AP Score Calculators by Subject",
  },
  description:
    "Use free, unofficial AP exam score calculators by subject to estimate AP scores for AP Chemistry, AP Environmental Science, AP Human Geography, AP World History, AP Macroeconomics, and more.",
  alternates: {
    canonical: "https://www.apscoretools.com/",
  },
};

const faqItems = [
  {
    question: "Is AP Score Tools official?",
    answer: "No. AP Score Tools provides unofficial AP score estimates only.",
  },
  {
    question: "What can I estimate with AP Score Tools?",
    answer:
      "You can use subject-specific AP exam score calculators to enter raw section scores and get an unofficial estimated AP score from 1 to 5.",
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
    "Free, unofficial AP score calculators and AP exam score calculators for students.",
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
    "AP Score Tools is a free, unofficial AP score calculator directory for students, with calculators by AP subject.",
  isPartOf: {
    "@type": "WebSite",
    name: "AP Score Tools",
    url: "https://www.apscoretools.com",
  },
};

export default function Home() {
  return (
    <main className="page">
      <JsonLd data={[websiteSchema, organizationSchema, webPageSchema]} />

      <section className="hero-tool directory-hero">
        <div className="container centered-hero-copy">
          <span className="eyebrow">AP score calculator by subject</span>
          <h1>Free AP Score Calculators by Subject</h1>
          <p className="lead">
            Estimate your AP exam score with free, unofficial AP score
            calculators for AP Chemistry, AP Environmental Science, AP Human
            Geography, AP World History, AP Macroeconomics, and more.
          </p>
          <p className="trust-line">
            Unofficial AP score estimates · Subject-specific calculators · Not
            affiliated with the College Board
          </p>
          <div className="hero-actions centered-actions">
            <TrackedLink
              className="button"
              eventName="calculator_hub_click"
              eventParams={{ source: "homepage_hero" }}
              href="/ap-score-calculators/"
            >
              View All AP Score Calculators
            </TrackedLink>
            <a className="button secondary" href="#live-ap-calculators">
              Try a Live Calculator
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="live-ap-calculators">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading centered-section-heading">
              <h2>Live AP Score Calculators</h2>
              <p>
                Choose a live AP exam score calculator, enter your raw section
                scores, and get an unofficial AP score estimate from 1 to 5.
              </p>
            </div>
            <div className="homepage-live-grid">
              {liveApCalculators.map((calculator) => (
                <Link
                  aria-label={`Use ${calculator.title}`}
                  href={calculator.href}
                  key={calculator.title}
                >
                  <article className="homepage-live-card">
                    <div>
                      <div className="homepage-card-badges">
                        <span>Live</span>
                        {calculator.aliases?.slice(0, 1).map((alias) => (
                          <span key={alias}>{alias}</span>
                        ))}
                      </div>
                      <h3>{calculator.title}</h3>
                      <p>{calculator.description}</p>
                    </div>
                    <span>Use Calculator →</span>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          <section className="card prose-card" id="all-ap-calculators">
            <div className="section-heading compact-heading centered-section-heading">
              <h2>All AP Score Calculators</h2>
              <p>
                Find AP score calculators by subject. Live calculators are
                available now, and more AP exam calculators are being added
                soon.
              </p>
            </div>
            <p>
              Browse AP exam score calculators by subject, including AP World
              History, AP U.S. History, AP Statistics, AP English Literature,
              AP Human Geography, AP Chemistry, and more.
            </p>
            <p>
              If you are looking for an AP exam calculator, AP exam score
              calculator, or AP exams score calculator, start with the live
              subject tools and use Coming Soon cards as a roadmap for planned
              coverage.
            </p>
            <div className="category-grid">
              {calculatorCategoryOrder.map((category) => (
                <div className="category-group" key={category}>
                  <h3>{category}</h3>
                  <ul>
                    {getCalculatorsByCategory(category).map((calculator) => (
                      <li key={calculator.title}>
                        <span className="calculator-list-copy">
                          {calculator.status === "live" ? (
                            <Link
                              aria-label={`Use ${calculator.title}`}
                              href={calculator.href}
                            >
                              {calculator.title}
                            </Link>
                          ) : (
                            <span>{calculator.title}</span>
                          )}
                          {calculator.aliases && (
                            <span className="calculator-list-aliases">
                              {calculator.aliases.slice(0, 2).join(" · ")}
                            </span>
                          )}
                        </span>
                        <span
                          className={
                            calculator.status === "live"
                              ? "status-live"
                              : "status-soon"
                          }
                        >
                          {calculator.status === "live" ? "Live" : "Coming Soon"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              The AP Score Calculators hub lists live tools and clearly marked
              planned calculators by subject, including AP scoring calculator
              and AP grade calculator variations students commonly search for.
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
              <Link className="button secondary" href="/guides/">
                AP Score Guides
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
