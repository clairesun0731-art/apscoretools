import type { Metadata } from "next";
import Link from "next/link";
import CalculatorDirectory from "@/components/CalculatorDirectory";
import JsonLd from "@/components/JsonLd";
import { liveApCalculators } from "@/lib/apCalculatorDirectory";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Calculators by Subject | AP Score Tools",
  },
  description:
    "Browse free, unofficial AP score calculators and AP exam score calculators by subject. Find live AP calculators now and see planned AP scoring calculator tools coming soon.",
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
    question: "Are these AP score calculators official?",
    answer:
      "No. AP Score Tools provides unofficial AP score estimates for practice and planning.",
  },
  {
    question: "Which AP score calculators are live right now?",
    answer:
      "AP Environmental Science, AP Chemistry, AP Human Geography, AP Macroeconomics, and AP World History score calculators are live now.",
  },
  {
    question: "How do AP score calculators work?",
    answer:
      "They combine raw section scores, apply an estimated subject-specific weighting model, and map the result to unofficial score bands from 1 to 5.",
  },
  {
    question: "Is this an AP exam calculator or an AP grade calculator?",
    answer:
      "AP Score Tools calculators are unofficial AP exam score calculators. Students may use them like AP grade calculators for practice exams, but official AP scores and college credit decisions are separate.",
  },
  {
    question: "Do AP score calculator cutoffs change every year?",
    answer:
      "Official AP score conversions may vary by subject, exam form, and year. AP Score Tools uses estimated score bands, not official cut scores.",
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
          <span className="eyebrow">AP score calculator by subject</span>
          <h1>AP Score Calculators by Subject</h1>
          <p className="lead">
            Browse free, unofficial AP score calculators by subject. Use live
            AP exam score calculators for AP Environmental Science, AP
            Chemistry, AP Human Geography, AP Macroeconomics, and AP World
            History, with more AP scoring calculator tools coming soon.
          </p>
          <p className="short-note">
            Results are approximate estimates and may vary by year. Coming Soon
            tools are clearly labeled and are not presented as live calculators.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <section className="prose-card" id="live-ap-calculators">
            <div className="section-heading compact-heading">
              <h2>Live AP Score Calculators</h2>
              <p>
                These calculators are live tools with subject-specific inputs,
                estimated score ranges, and unofficial AP score estimates from
                1 to 5.
              </p>
            </div>
            <div className="cards-grid">
              {liveApCalculators.map((calculator) => (
                <Link
                  aria-label={`Use ${calculator.title}`}
                  href={calculator.href}
                  key={calculator.title}
                >
                  <article className="tool-card active">
                    <div>
                      <span className="status-pill">Live</span>
                      <h3>{calculator.title}</h3>
                      <p>{calculator.description}</p>
                      {calculator.aliases && (
                        <p className="short-note">
                          Also searched as: {calculator.aliases.slice(0, 3).join(", ")}
                        </p>
                      )}
                    </div>
                    <span>Use Calculator</span>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          <section className="card prose-card" id="all-ap-calculators">
            <div className="section-heading compact-heading">
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
              AP Human Geography, AP Chemistry, and more. Coming Soon cards are
              included for discovery, but they do not link to non-existing
              calculator routes.
            </p>
            <p>
              Students looking for an AP exam calculator, AP exam score
              calculator, or AP exams score calculator can start with the live
              subject tools below and use the directory to see what is planned.
            </p>
            <CalculatorDirectory aliasLimit={3} showDescriptions variant="detailed" />
          </section>

          <article className="card prose-card">
            <h2>How AP Score Calculators Work</h2>
            <p>
              AP score calculators estimate a 1-5 AP score by combining raw
              section scores, applying estimated section weights, and mapping
              the result to estimated score ranges. Each AP subject uses a
              different exam structure, so AP Score Tools builds calculators by
              subject instead of using one generic formula.
            </p>
            <p>
              Exact scoring methods and cutoffs vary by subject and year. These
              AP exam calculators are useful for practice tests and planning,
              but they are not official AP score reports.
            </p>
            <p>
              For more background on section weights and composite scores,
              browse the{" "}
              <Link href="/guides/ap-scoring-guides/">AP Scoring Guides</Link>.
            </p>
          </article>

          <article className="card prose-card">
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
        </div>
      </section>
    </main>
  );
}
