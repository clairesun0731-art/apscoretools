import type { Metadata } from "next";
import Link from "next/link";
import HomeCalculatorSwitcher from "@/components/HomeCalculatorSwitcher";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Tools | Free AP Score Calculators for Students",
  },
  description:
    "Use AP Score Tools to estimate AP exam scores with free, unofficial calculators. AP Environmental Science and AP Chemistry calculators are live now, with more AP subjects coming soon.",
  alternates: {
    canonical: "https://www.apscoretools.com/",
  },
};

const comingSoonCalculators = [
  {
    name: "AP Biology Score Calculator",
    href: "/ap-biology-score-calculator/",
    subject: "ap_biology",
  },
  {
    name: "AP Calculus AB Score Calculator",
    href: "/ap-calculus-ab-score-calculator/",
    subject: "ap_calculus_ab",
  },
  {
    name: "AP Lang Score Calculator",
    href: "/ap-lang-score-calculator/",
    subject: "ap_lang",
  },
  {
    name: "APUSH Score Calculator",
    href: "/apush-score-calculator/",
    subject: "apush",
  },
];

const liveCalculators = [
  {
    name: "AP Environmental Science Score Calculator",
    description:
      "Estimate your APES score using MCQ and FRQ raw scores with a composite score out of 130.",
    href: "/ap-environmental-science-score-calculator/",
  },
  {
    name: "AP Chemistry Score Calculator",
    description:
      "Estimate your AP Chem score using MCQ and FRQ raw scores with a composite score out of 100.",
    href: "/ap-chemistry-score-calculator/",
  },
];

const faqItems = [
  {
    question: "Is AP Score Tools official?",
    answer:
      "No. AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board.",
  },
  {
    question: "Which calculators are live right now?",
    answer:
      "The AP Environmental Science and AP Chemistry score calculators are live now. Other AP calculators are coming soon.",
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
    "AP Score Tools is a free, unofficial AP score calculator hub for students, with live AP Environmental Science and AP Chemistry score calculators.",
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
              Start with live AP score calculators for AP Environmental Science
              and AP Chemistry. More AP calculators are coming soon.
            </p>
            <p className="trust-line">
              Unofficial score estimates · APES and AP Chemistry live now · Not
              affiliated with the College Board
            </p>
          </div>

          <div className="home-calculator-wrap">
            <HomeCalculatorSwitcher />
            <p className="inline-disclaimer">
              AP Score Tools is unofficial and is not affiliated with or
              endorsed by the College Board. Results are estimates only.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>Live AP Score Calculators</h2>
              <p>
                Use a live calculator here, or visit the{" "}
                <TrackedLink
                  eventName="calculator_hub_click"
                  eventParams={{ source: "homepage_live_section" }}
                  href="/ap-score-calculators/"
                >
                  AP score calculators hub
                </TrackedLink>{" "}
                for the full list.
              </p>
            </div>
            <div className="cards-grid">
              {liveCalculators.map((calculator) => (
                <Link href={calculator.href} key={calculator.name}>
                  <article className="tool-card active tool-card-compact">
                    <div>
                      <span className="status-pill">Live</span>
                      <h3>{calculator.name}</h3>
                      <p>{calculator.description}</p>
                    </div>
                    <span>Open calculator</span>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>AP Score Calculators Coming Soon</h2>
              <p>These planned pages are not live calculators yet.</p>
            </div>
            <div className="cards-grid compact-card-grid">
              {comingSoonCalculators.map((calculator) => (
                <TrackedLink
                  eventName="coming_soon_subject_click"
                  eventParams={{
                    subject: calculator.subject,
                    source: "homepage",
                  }}
                  href={calculator.href}
                  key={calculator.name}
                >
                  <article className="tool-card mini-tool-card">
                    <div>
                      <span className="status-pill soon">Coming soon</span>
                      <h3>{calculator.name}</h3>
                    </div>
                  </article>
                </TrackedLink>
              ))}
            </div>
            <div>
              <TrackedLink
                className="button secondary"
                eventName="calculator_hub_click"
                eventParams={{ source: "homepage" }}
                href="/ap-score-calculators/"
              >
                View all AP score calculators
              </TrackedLink>
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
                <p>
                  Use the{" "}
                  <TrackedLink
                    eventName="scoring_guide_click"
                    eventParams={{ source: "homepage" }}
                    href="/how-ap-environmental-science-is-scored/"
                  >
                    APES scoring guide
                  </TrackedLink>{" "}
                  for charts and context.
                </p>
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
