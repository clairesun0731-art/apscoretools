import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ApesCalculator from "./ap-environmental-science-score-calculator/ApesCalculator";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Tools | Free AP Score Calculator Hub",
  },
  description:
    "Use AP Score Tools to estimate AP exam scores with free, unofficial score calculators. Start with the live AP Environmental Science score calculator, with more AP subjects coming soon.",
  alternates: {
    canonical: "https://www.apscoretools.com/",
  },
};

const comingSoonCalculators = [
  { name: "AP Biology", href: "/ap-biology-score-calculator/" },
  { name: "AP Chemistry", href: "/ap-chemistry-score-calculator/" },
  { name: "AP Calculus AB", href: "/ap-calculus-ab-score-calculator/" },
  { name: "AP Lang", href: "/ap-lang-score-calculator/" },
  { name: "APUSH", href: "/apush-score-calculator/" },
];

const faqItems = [
  {
    question: "Is AP Score Tools official?",
    answer:
      "No. AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board.",
  },
  {
    question: "Which calculator is live right now?",
    answer:
      "The AP Environmental Science score calculator is live now. Other AP calculators are coming soon.",
  },
  {
    question: "Are calculator results exact?",
    answer:
      "No. Results are unofficial estimates based on raw scores, section weights, and estimated score ranges.",
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
    "AP Score Tools is a free, unofficial AP score calculator hub for students, starting with the live AP Environmental Science score calculator.",
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

      <section className="hero-tool compact-home-hero">
        <div className="container home-tool-stack">
          <div className="hero-copy compact-hero-copy">
            <span className="eyebrow">AP score calculator hub</span>
            <h1>Free AP Score Tools for Students</h1>
            <p className="lead">
              Start with the live AP Environmental Science score calculator.
              More AP calculators are coming soon.
            </p>
            <p className="trust-line">
              Unofficial score estimates · APES calculator live now · Not
              affiliated with the College Board
            </p>
            <div className="badge-row" aria-label="Calculator status">
              <span>APES calculator live</span>
              <span>Free to use</span>
            </div>
          </div>

          <div className="home-calculator-wrap">
            <ApesCalculator mode="compact" />
            <p className="inline-disclaimer">
              AP Score Tools is unofficial. Results are estimates only.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>Available Calculator</h2>
              <p>The first live AP score calculator is ready to use.</p>
            </div>
            <Link href="/ap-environmental-science-score-calculator/">
              <article className="tool-card active tool-card-compact">
                <div>
                  <span className="status-pill">Live</span>
                  <h3>AP Environmental Science Score Calculator</h3>
                  <p>
                    Estimate your APES score from MCQ and FRQ raw scores, then
                    review the full score breakdown on the dedicated page.
                  </p>
                </div>
                <span>Open full calculator</span>
              </article>
            </Link>
          </section>

          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>AP Score Calculators Coming Soon</h2>
              <p>These planned pages are not live calculators yet.</p>
            </div>
            <div className="cards-grid compact-card-grid">
              {comingSoonCalculators.map((calculator) => (
                <Link href={calculator.href} key={calculator.name}>
                  <article className="tool-card mini-tool-card">
                    <div>
                      <span className="status-pill soon">Coming soon</span>
                      <h3>{calculator.name}</h3>
                    </div>
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
                <h3>Enter raw section scores</h3>
                <p>Add the MCQ and FRQ points you want to test.</p>
              </div>
              <div>
                <span className="step-number">2</span>
                <h3>Get an unofficial estimate</h3>
                <p>See a predicted AP score and composite score.</p>
              </div>
              <div>
                <span className="step-number">3</span>
                <h3>Review scoring guides</h3>
                <p>Use the detailed APES page for charts and context.</p>
              </div>
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
