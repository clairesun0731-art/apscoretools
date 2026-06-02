import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Tools | Free AP Score Calculators by Subject",
  },
  description:
    "Use AP Score Tools to estimate AP exam scores with free, unofficial AP score calculators for AP Environmental Science, AP Chemistry, AP Human Geography, AP Macroeconomics, AP World History, and more.",
  alternates: {
    canonical: "https://www.apscoretools.com/",
  },
};

const popularCalculators = [
  {
    name: "AP Chemistry Score Calculator",
    description:
      "Estimate your AP Chem score from MCQ and FRQ inputs with a composite score breakdown.",
    href: "/ap-chemistry-score-calculator/",
    status: "Live",
    cta: "Use AP Chemistry Score Calculator",
  },
  {
    name: "AP Environmental Science Score Calculator",
    description:
      "Estimate your APES score from MCQ and FRQ raw scores with an unofficial AP score estimate.",
    href: "/ap-environmental-science-score-calculator/",
    status: "Live",
    cta: "Use AP Environmental Science Score Calculator",
  },
  {
    name: "AP Human Geography Score Calculator",
    description:
      "Estimate your AP Human Geography score from MCQ and three FRQ raw scores.",
    href: "/ap-human-geography-score-calculator/",
    status: "Live",
    cta: "Use AP Human Geography Score Calculator",
  },
  {
    name: "AP Macroeconomics Score Calculator",
    description:
      "Estimate your AP Macroeconomics score from MCQ, one long FRQ, and two short FRQ scores.",
    href: "/ap-macroeconomics-score-calculator/",
    status: "Live",
    cta: "Use AP Macroeconomics Score Calculator",
  },
  {
    name: "AP World History Score Calculator",
    description:
      "Estimate your AP World History score from MCQ, SAQ, DBQ, and LEQ raw scores.",
    href: "/ap-world-history-score-calculator/",
    status: "Live",
    cta: "Use AP World History Score Calculator",
  },
];

const faqItems = [
  {
    question: "Is AP Score Tools official?",
    answer:
      "No. AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board.",
  },
  {
    question: "What can I estimate with AP Score Tools?",
    answer:
      "You can use subject-specific calculators to enter raw section scores and get an unofficial estimated AP score from 1 to 5.",
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
  description: "Free, unofficial AP score calculators and exam tools for students.",
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
            calculators for AP Environmental Science, AP Chemistry, AP Human
            Geography, AP Macroeconomics, AP World History, and more.
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
              Browse AP Score Calculators
            </TrackedLink>
            <a className="button secondary" href="#popular-calculators">
              View Popular Calculators
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="popular-calculators">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>Popular AP Score Calculators</h2>
              <p>
                Choose a live calculator, enter your raw section scores, and
                review an unofficial AP score estimate from 1 to 5.
              </p>
            </div>
            <div className="cards-grid">
              {popularCalculators.map((calculator) => (
                <Link href={calculator.href} key={calculator.name}>
                  <article
                    className={`tool-card tool-card-compact ${
                      calculator.status === "Live" ? "active" : ""
                    }`}
                  >
                    <div>
                      <span
                        className={`status-pill ${
                          calculator.status.includes("Beta") ? "beta" : ""
                        }`}
                      >
                        {calculator.status}
                      </span>
                      <h3>{calculator.name}</h3>
                      <p>{calculator.description}</p>
                    </div>
                    <span>{calculator.cta}</span>
                  </article>
                </Link>
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
                  Live calculators use subject-specific inputs and estimated
                  weights for each AP exam structure.
                </p>
              </article>
              <article className="why-card">
                <h3>Clear 1-5 score estimates</h3>
                <p>
                  See an estimated AP score, composite score, and section
                  breakdown so you can understand what moved the result.
                </p>
              </article>
              <article className="why-card">
                <h3>Unofficial, student-friendly guidance</h3>
                <p>
                  Every result is clearly labeled as an estimate, with plain
                  language that helps you decide what to review next.
                </p>
              </article>
            </div>
          </section>

          <section className="card prose-card">
            <h2>Find Every AP Score Calculator</h2>
            <p>
              The AP Score Calculators hub lists live tools, beta pages under
              review, and clearly marked planned calculators by subject.
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
