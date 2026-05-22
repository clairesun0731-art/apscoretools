import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Calculators 2026 | AP Score Tools",
  },
  description:
    "Explore free, unofficial AP score calculators for AP Environmental Science and AP Chemistry, plus planned calculators for AP Biology, AP Calculus, APUSH, AP Lang, and more.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-score-calculators/",
  },
};

const faqItems = [
  {
    question: "Are these AP score calculators official?",
    answer:
      "No. AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board.",
  },
  {
    question: "Which AP score calculators are live right now?",
    answer:
      "The AP Environmental Science and AP Chemistry score calculators are live now. Other subject calculators are planned.",
  },
  {
    question: "Will an AP Biology calculator be added?",
    answer:
      "Yes. AP Biology is a high-priority planned calculator.",
  },
  {
    question: "Do AP score calculator cutoffs change every year?",
    answer:
      "Official AP cutoffs can vary by subject and year. AP Score Tools uses estimated scoring models and clearly labels results as unofficial.",
  },
];

const liveCalculators = [
  {
    name: "AP Environmental Science Score Calculator",
    description:
      "Estimate your APES score using MCQ and FRQ raw scores, scaled into an estimated composite score out of 130.",
    href: "/ap-environmental-science-score-calculator/",
  },
  {
    name: "AP Chemistry Score Calculator",
    description:
      "Estimate your AP Chem score from MCQ and FRQ raw scores with a 100-point composite model.",
    href: "/ap-chemistry-score-calculator/",
  },
];

const priorityCalculators = [
  {
    name: "AP Biology Score Calculator",
    aliases: "AP Bio score calculator, AP Biology score calculator",
    href: "/ap-biology-score-calculator/",
    subject: "ap_biology",
  },
  {
    name: "AP Calculus AB Score Calculator",
    aliases: "AP Calc AB score calculator, AP Calculus AB score calculator",
    href: "/ap-calculus-ab-score-calculator/",
    subject: "ap_calculus_ab",
  },
  {
    name: "AP English Language Score Calculator",
    aliases: "AP Lang score calculator, AP English Language score calculator",
    href: "/ap-lang-score-calculator/",
    subject: "ap_lang",
  },
  {
    name: "APUSH Score Calculator",
    aliases: "APUSH score calculator, AP US History score calculator",
    href: "/apush-score-calculator/",
    subject: "apush",
  },
];

const morePlannedCalculators = [
  "AP Calculus BC Score Calculator",
  "AP Psychology Score Calculator",
  "AP Statistics Score Calculator",
  "AP Human Geography Score Calculator",
  "AP World History Score Calculator",
  "AP Computer Science A Score Calculator",
  "AP Computer Science Principles Score Calculator",
  "AP Macroeconomics Score Calculator",
  "AP Physics C Score Calculator",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AP Score Calculators 2026",
    url: "https://www.apscoretools.com/ap-score-calculators/",
    description:
      "A directory of free, unofficial AP score calculators from AP Score Tools, including live AP Environmental Science and AP Chemistry calculators and planned calculators for other AP subjects.",
    isPartOf: {
      "@type": "WebSite",
      name: "AP Score Tools",
      url: "https://www.apscoretools.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AP Score Calculators",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: liveCalculators.length + priorityCalculators.length,
    itemListElement: [
      ...liveCalculators.map((calculator, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: calculator.name,
        item: `https://www.apscoretools.com${calculator.href}`,
      })),
      ...priorityCalculators.map((calculator, index) => ({
        "@type": "ListItem",
        position: index + liveCalculators.length + 1,
        name: calculator.name,
        item: `https://www.apscoretools.com${calculator.href}`,
      })),
    ],
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

      <section className="container hero">
        <div>
          <span className="eyebrow">AP score calculator hub</span>
          <h1>AP Score Calculators 2026</h1>
          <p className="lead">
            AP Score Tools is a clean directory for free, unofficial AP score
            calculators. The AP Environmental Science and AP Chemistry
            calculators are live now. More AP calculators are coming soon.
          </p>
          <p className="short-note">
            AP Score Tools is building calculators gradually so each tool can
            match the scoring structure of its AP subject. AP Biology is a next
            priority, with AP Calculus, APUSH, AP Lang, and more planned.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="disclaimer">
            <p>
              The AP Environmental Science and AP Chemistry calculators are live
              now. Coming soon pages are included to show planned tools and help
              students find future AP score calculator updates.
            </p>
          </article>

          <section className="prose-card">
            <h2>Live AP Score Calculators</h2>
            <div className="cards-grid">
              {liveCalculators.map((calculator) => (
                <Link href={calculator.href} key={calculator.name}>
                  <article className="tool-card active">
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
            <h2>High-Priority AP Score Calculators Coming Soon</h2>
            <div className="cards-grid">
              {priorityCalculators.map((calculator) => (
                <TrackedLink
                  eventName="coming_soon_subject_click"
                  eventParams={{
                    subject: calculator.subject,
                    source: "hub_page",
                  }}
                  href={calculator.href}
                  key={calculator.name}
                >
                  <article className="tool-card">
                    <div>
                      <span className="status-pill soon">Coming soon</span>
                      <h3>{calculator.name}</h3>
                      <p>{calculator.aliases}</p>
                    </div>
                    <span>View planned page</span>
                  </article>
                </TrackedLink>
              ))}
            </div>
          </section>

          <section className="card prose-card">
            <h2>More Planned AP Calculators</h2>
            <ul className="planned-list">
              {morePlannedCalculators.map((calculator) => (
                <li key={calculator}>{calculator}</li>
              ))}
            </ul>
          </section>

          <article className="card prose-card">
            <h2>How AP Score Calculators Work</h2>
            <p>
              AP score calculators estimate a 1-5 AP score by combining raw
              section scores, applying estimated section weights, and mapping
              the result to estimated score ranges. Exact scoring methods and
              cutoffs vary by subject and year, so all results should be
              treated as estimates.
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

          <article className="disclaimer">
            <p>
              AP Score Tools is unofficial and is not affiliated with or
              endorsed by the College Board. AP, Advanced Placement, and related
              exam names are trademarks of their respective owners. Calculator
              results are estimates only.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
