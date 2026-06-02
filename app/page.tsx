import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Tools | Free AP Score Calculators by Subject",
  },
  description:
    "Use free, unofficial AP score calculators to estimate your AP score from raw section scores, including AP Environmental Science, AP Chemistry, AP Human Geography, AP World History, and more.",
  alternates: {
    canonical: "https://www.apscoretools.com/",
  },
};

const liveCalculators = [
  {
    name: "AP Environmental Science Score Calculator",
    description:
      "Estimate your AP Environmental Science score from MCQ and FRQ raw scores.",
    href: "/ap-environmental-science-score-calculator/",
    badges: ["Live", "MCQ + FRQ"],
  },
  {
    name: "AP Chemistry Score Calculator",
    description:
      "Estimate your AP Chemistry score from multiple-choice and seven free-response question scores.",
    href: "/ap-chemistry-score-calculator/",
    badges: ["Live", "MCQ + FRQ breakdown"],
  },
  {
    name: "AP Human Geography Score Calculator",
    description:
      "Estimate your AP Human Geography, or APHUG, score from MCQ and three FRQ scores.",
    href: "/ap-human-geography-score-calculator/",
    badges: ["Live", "APHUG calculator", "MCQ + FRQ"],
  },
  {
    name: "AP World History Score Calculator",
    description:
      "Estimate your AP World History, or APWH, score from MCQ, SAQ, DBQ, and LEQ raw scores.",
    href: "/ap-world-history-score-calculator/",
    badges: ["Live", "APWH calculator", "MCQ + SAQ + DBQ + LEQ"],
  },
];

const faqItems = [
  {
    question: "Is AP Score Tools official?",
    answer: "No. AP Score Tools provides unofficial AP score estimates only.",
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
  description:
    "Free, unofficial AP score calculators and exam tools for students.",
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
            Estimate your AP score from raw section scores using free,
            unofficial calculators for AP Environmental Science, AP Chemistry,
            AP Human Geography, AP World History, and more.
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
            <a className="button secondary" href="#live-calculators">
              Try a Live Calculator
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="live-calculators">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading centered-section-heading">
              <h2>Live AP Score Calculators</h2>
              <p>
                Choose a live calculator, enter your raw section scores, and
                get an unofficial AP score estimate from 1 to 5.
              </p>
            </div>
            <div className="homepage-live-grid">
              {liveCalculators.map((calculator) => (
                <Link href={calculator.href} key={calculator.name}>
                  <article className="homepage-live-card">
                    <div>
                      <div className="homepage-card-badges">
                        {calculator.badges.map((badge) => (
                          <span key={badge}>{badge}</span>
                        ))}
                      </div>
                      <h3>{calculator.name}</h3>
                      <p>{calculator.description}</p>
                    </div>
                    <span>Open Calculator →</span>
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
              planned calculators by subject.
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
