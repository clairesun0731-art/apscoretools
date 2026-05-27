import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: {
    absolute:
      "AP Score Calculators | Free AP Exam Score Calculator by Subject",
  },
  description:
    "Explore free AP score calculators by subject. Estimate your AP exam score for AP Environmental Science, AP Chemistry, AP Human Geography, AP Macroeconomics, AP World History, and more.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-score-calculators/",
  },
  openGraph: {
    title: "AP Score Calculators | Free AP Exam Score Calculator by Subject",
    description:
      "Explore free AP score calculators by subject from AP Score Tools. Results are unofficial estimates and may vary by year.",
    url: "https://www.apscoretools.com/ap-score-calculators/",
    siteName: "AP Score Tools",
    type: "website",
  },
};

const liveCalculators = [
  {
    category: "Science",
    name: "AP Environmental Science Score Calculator",
    description:
      "Estimate your APES score from MCQ and FRQ raw scores with a composite score out of 130.",
    href: "/ap-environmental-science-score-calculator/",
  },
  {
    category: "Science",
    name: "AP Chemistry Score Calculator",
    description:
      "Estimate your AP Chem score from MCQ and FRQ inputs with a composite score breakdown.",
    href: "/ap-chemistry-score-calculator/",
  },
  {
    category: "History & Social Science",
    name: "AP Human Geography Score Calculator",
    description:
      "Estimate your APHUG score from multiple-choice and free-response raw scores.",
    href: "/ap-human-geography-score-calculator/",
  },
  {
    category: "History & Social Science",
    name: "AP Macroeconomics Score Calculator",
    description:
      "Estimate your AP Macro score from MCQ and FRQ raw scores using approximate section weights.",
    href: "/ap-macroeconomics-score-calculator/",
  },
  {
    category: "History & Social Science",
    name: "AP World History Score Calculator",
    description:
      "Estimate your APWH score from MCQ, SAQ, DBQ, and LEQ raw scores.",
    href: "/ap-world-history-score-calculator/",
  },
];

const comingSoonCalculators = [
  {
    category: "Science",
    name: "AP Biology Score Calculator",
    aliases: "AP Bio score calculator",
    href: "/ap-biology-score-calculator/",
    subject: "ap_biology",
  },
  {
    category: "Math & Computer Science",
    name: "AP Calculus AB Score Calculator",
    aliases: "AP Calc AB score calculator",
    href: "/ap-calculus-ab-score-calculator/",
    subject: "ap_calculus_ab",
  },
  {
    category: "English",
    name: "AP English Language Score Calculator",
    aliases: "AP Lang score calculator",
    href: "/ap-lang-score-calculator/",
    subject: "ap_lang",
  },
  {
    category: "History & Social Science",
    name: "APUSH Score Calculator",
    aliases: "AP US History score calculator",
    href: "/apush-score-calculator/",
    subject: "apush",
  },
];

const morePlannedByCategory = [
  {
    category: "Science",
    items: [
      "AP Psychology Score Calculator",
      "AP Statistics Score Calculator",
      "AP Physics C Score Calculator",
    ],
  },
  {
    category: "Math & Computer Science",
    items: [
      "AP Calculus BC Score Calculator",
      "AP Computer Science A Score Calculator",
      "AP Computer Science Principles Score Calculator",
    ],
  },
  {
    category: "Arts & Languages",
    items: [
      "AP Spanish Language Score Calculator",
      "AP French Language Score Calculator",
      "AP Art History Score Calculator",
    ],
  },
];

const faqItems = [
  {
    question: "Are these AP score calculators official?",
    answer:
      "No. AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board.",
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
    question: "Do AP score calculator cutoffs change every year?",
    answer:
      "Official AP score conversions may vary by subject, exam form, and year. AP Score Tools uses estimated score bands, not official cut scores.",
  },
  {
    question: "Can I use these as AP grade calculators?",
    answer:
      "You can use them as unofficial AP exam score estimators, but college credit policies and official AP scores are determined separately.",
  },
];

const categories = [
  "Science",
  "History & Social Science",
  "Math & Computer Science",
  "English",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AP Score Calculators by Subject",
    url: "https://www.apscoretools.com/ap-score-calculators/",
    description:
      "A directory of free, unofficial AP score calculators by subject from AP Score Tools.",
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
    numberOfItems: liveCalculators.length,
    itemListElement: liveCalculators.map((calculator, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: calculator.name,
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

      <section className="container hero">
        <div>
          <span className="eyebrow">AP score calculator by subject</span>
          <h1>AP Score Calculators by Subject</h1>
          <p className="lead">
            AP Score Tools provides free, unofficial AP score calculators by
            subject. Choose a live AP exam score calculator, enter raw section
            scores, and review an estimated AP score from 1 to 5.
          </p>
          <p className="short-note">
            Results are approximate estimates and may vary by year. Coming soon
            pages are clearly labeled when a live calculator is not available
            yet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>Live AP Score Calculators</h2>
              <p>
                These calculators are live tools with subject-specific inputs
                and estimated score ranges.
              </p>
            </div>
            <div className="cards-grid">
              {liveCalculators.map((calculator) => (
                <Link href={calculator.href} key={calculator.name}>
                  <article className="tool-card active">
                    <div>
                      <span className="status-pill">Live</span>
                      <h3>{calculator.name}</h3>
                      <p>{calculator.description}</p>
                    </div>
                    <span>{calculator.name}</span>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          <section className="card prose-card">
            <h2>Browse Calculators by Category</h2>
            <div className="category-grid">
              {categories.map((category) => {
                const liveItems = liveCalculators.filter(
                  (calculator) => calculator.category === category,
                );
                const plannedItems = comingSoonCalculators.filter(
                  (calculator) => calculator.category === category,
                );

                return (
                  <div className="category-group" key={category}>
                    <h3>{category}</h3>
                    <ul>
                      {liveItems.map((calculator) => (
                        <li key={calculator.href}>
                          <Link href={calculator.href}>{calculator.name}</Link>
                          <span>Live</span>
                        </li>
                      ))}
                      {plannedItems.map((calculator) => (
                        <li key={calculator.href}>
                          <TrackedLink
                            eventName="coming_soon_subject_click"
                            eventParams={{
                              subject: calculator.subject,
                              source: "hub_category",
                            }}
                            href={calculator.href}
                          >
                            {calculator.name}
                          </TrackedLink>
                          <span>Coming soon</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="prose-card">
            <div className="section-heading compact-heading">
              <h2>Coming Soon AP Score Calculators</h2>
              <p>
                These pages are planned or informational. They are not live
                calculators yet.
              </p>
            </div>
            <div className="cards-grid">
              {comingSoonCalculators.map((calculator) => (
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
                    <span>View planned calculator page</span>
                  </article>
                </TrackedLink>
              ))}
            </div>
          </section>

          <section className="card prose-card">
            <h2>More Planned AP Calculators</h2>
            <div className="category-grid">
              {morePlannedByCategory.map((group) => (
                <div className="category-group" key={group.category}>
                  <h3>{group.category}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span>{item}</span>
                        <span>Planned</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
              tools are useful for practice tests and planning, but they are not
              official AP score reports.
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
