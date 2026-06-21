import type { Metadata } from "next";
import Link from "next/link";
import CalculatorDirectory from "@/components/CalculatorDirectory";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import { liveApCalculators, comingSoonApCalculators } from "@/lib/apCalculatorDirectory";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Tools | Free AP Score Calculators by Subject",
  },
  description:
    "Use free, unofficial AP exam score calculators by subject to estimate AP scores for AP Statistics, AP Calculus BC, AP U.S. Government, AP Psychology, AP English Language, and more.",
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
          <span className="eyebrow">AP score calculators</span>
          <h1>AP Score Tools</h1>
          <p className="lead">
            AP Score Tools helps students estimate unofficial AP exam scores
            from raw multiple-choice and free-response points. Start with
            live calculators for AP Environmental Science and AP Chemistry.
          </p>
          <p className="trust-line">
            Unofficial estimates · Subject-specific calculators · Not affiliated with the College Board
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
          </div>
          <p className="hero-links">
            Start with the <Link href="/ap-environmental-science-score-calculator/">AP Environmental Science Score Calculator</Link> or the <Link href="/ap-chemistry-score-calculator/">AP Chemistry Score Calculator</Link>, then browse the <Link href="/ap-score-calculators/">AP Score Calculators</Link> hub.
          </p>
        </div>
      </section>

      <section className="section" id="live-ap-calculators">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading centered-section-heading">
              <h2>Live AP Score Calculators</h2>
              <p>
                Choose a live AP exam score calculator below. Live tools are
                prioritized for quick access on mobile and desktop.
              </p>
            </div>

            <div className="homepage-live-grid">
              {/* Featured: APES and AP Chemistry first */}
              {liveApCalculators
                .filter((c) =>
                  [
                    "/ap-environmental-science-score-calculator/",
                    "/ap-chemistry-score-calculator/",
                  ].includes(c.href),
                )
                .map((calculator) => (
                  <Link aria-label={`Open ${calculator.title}`} href={calculator.href} key={calculator.href}>
                    <article className="homepage-live-card featured">
                      <div>
                        <h3>{calculator.title}</h3>
                        <p>
                          {calculator.href.includes("environmental")
                            ? "Estimate your unofficial APES score from MCQ and FRQ raw scores."
                            : "Estimate your unofficial AP Chemistry score from MCQ and FRQ raw scores."}
                        </p>
                      </div>
                      <span>Open calculator →</span>
                    </article>
                  </Link>
                ))}

              {/* Other live calculators */}
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

            {/* Compact Coming Soon strip - de-emphasized */}
            <div className="coming-soon-strip mt-4">
              {comingSoonApCalculators.slice(0, 6).map((c) => (
                <div key={c.slug} className="coming-soon-pill" aria-hidden>
                  <span className="pill-title">{c.shortTitle ?? c.title}</span>
                  <small>Coming Soon</small>
                </div>
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
              AP Human Geography, AP Calculus AB, AP Biology, AP Chemistry,
              and more.
            </p>
            <p>
              If you are looking for an AP exam calculator, AP exam score
              calculator, or AP exams score calculator, start with the live
              subject tools and use Coming Soon cards as a roadmap for planned
              coverage.
            </p>
            <CalculatorDirectory />
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
