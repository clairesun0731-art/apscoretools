import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "AP Score Calculators 2026 | AP Score Tools",
  },
  description:
    "Explore free, unofficial AP score calculators for AP Environmental Science and planned calculators for AP Biology, AP Chemistry, AP Calculus, APUSH, AP Lang, and more.",
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
    question: "Which AP score calculator is live right now?",
    answer:
      "The AP Environmental Science score calculator is live now. Other subject calculators are planned.",
  },
  {
    question: "Will AP Biology and AP Chemistry calculators be added?",
    answer:
      "Yes. AP Biology and AP Chemistry are high-priority planned calculators.",
  },
  {
    question: "Do AP score calculator cutoffs change every year?",
    answer:
      "Official AP cutoffs can vary by subject and year. AP Score Tools uses estimated scoring models and clearly labels results as unofficial.",
  },
];

const priorityCalculators = [
  {
    name: "AP Biology Score Calculator",
    aliases: "AP Bio score calculator, AP Biology score calculator",
    href: "/ap-biology-score-calculator/",
  },
  {
    name: "AP Chemistry Score Calculator",
    aliases: "AP Chem score calculator, AP Chemistry score calculator",
    href: "/ap-chemistry-score-calculator/",
  },
  {
    name: "AP Calculus AB Score Calculator",
    aliases: "AP Calc AB score calculator, AP Calculus AB score calculator",
    href: "/ap-calculus-ab-score-calculator/",
  },
  {
    name: "AP English Language Score Calculator",
    aliases: "AP Lang score calculator, AP English Language score calculator",
    href: "/ap-lang-score-calculator/",
  },
  {
    name: "APUSH Score Calculator",
    aliases: "APUSH score calculator, AP US History score calculator",
    href: "/apush-score-calculator/",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container hero">
        <div>
          <span className="eyebrow">AP score calculator hub</span>
          <h1>AP Score Calculators 2026</h1>
          <p className="lead">
            AP Score Tools is a clean directory for free, unofficial AP score
            calculators. Start with the live AP Environmental Science score
            calculator, then check planned tools for AP Biology, AP Chemistry,
            AP Calculus, APUSH, AP Lang, and more.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="disclaimer">
            <p>
              Only the AP Environmental Science calculator is live right now.
              Coming soon pages are included to show planned tools and help
              students find future AP score calculator updates.
            </p>
          </article>

          <section className="prose-card">
            <h2>Live AP Score Calculator</h2>
            <Link href="/ap-environmental-science-score-calculator/">
              <article className="tool-card active">
                <div>
                  <span className="status-pill">Live</span>
                  <h3>AP Environmental Science Score Calculator</h3>
                  <p>
                    Estimate your APES score using MCQ and FRQ raw scores,
                    scaled into an estimated composite score out of 130.
                  </p>
                </div>
                <span>Open calculator</span>
              </article>
            </Link>
          </section>

          <section className="prose-card">
            <h2>High-Priority AP Score Calculators Coming Soon</h2>
            <div className="cards-grid">
              {priorityCalculators.map((calculator) => (
                <Link href={calculator.href} key={calculator.name}>
                  <article className="tool-card">
                    <div>
                      <span className="status-pill soon">Coming soon</span>
                      <h3>{calculator.name}</h3>
                      <p>{calculator.aliases}</p>
                    </div>
                    <span>View planned page</span>
                  </article>
                </Link>
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
