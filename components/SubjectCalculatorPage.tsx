import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import GenericScoreCalculator, {
  type GenericCalculatorProps,
  type GenericScoreBand,
} from "@/components/GenericScoreCalculator";

export type CalculatorFaq = {
  answer: string;
  question: string;
};

export type RelatedCalculator = {
  href?: string;
  status: "live" | "coming-soon";
  title: string;
};

export type SubjectCalculatorPageProps = {
  calculator: GenericCalculatorProps;
  calculatorTitle: string;
  chartTitle: string;
  description: string;
  examFormat: Array<{
    detail: string;
    section: string;
    weight: string;
  }>;
  examIntro: string[];
  faqItems: CalculatorFaq[];
  goodScore: string[];
  heroEyebrow: string;
  h1: string;
  howItWorks: string[];
  jsonLdName: string;
  keywords: string[];
  relatedCalculators: RelatedCalculator[];
  relatedIntro: string;
  subtitle: string;
  url: string;
};

function formatScoreBands(scoreBands: GenericScoreBand[]) {
  return scoreBands
    .slice()
    .sort((first, second) => second.score - first.score);
}

export default function SubjectCalculatorPage({
  calculator,
  calculatorTitle,
  chartTitle,
  description,
  examFormat,
  examIntro,
  faqItems,
  goodScore,
  heroEyebrow,
  h1,
  howItWorks,
  jsonLdName,
  keywords,
  relatedCalculators,
  relatedIntro,
  subtitle,
  url,
}: SubjectCalculatorPageProps) {
  const scoreBands = formatScoreBands(calculator.scoreBands);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: jsonLdName,
      alternateName: keywords,
      url,
      applicationCategory: "EducationalApplication",
      applicationSubCategory: "Score calculator",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description,
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
        {
          "@type": "ListItem",
          position: 3,
          name: h1,
          item: url,
        },
      ],
    },
  ];

  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="tool-hero-section">
        <div className="container tool-hero-stack">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <TrackedLink
              eventName="calculator_hub_click"
              eventParams={{ source: `${calculator.subject}_breadcrumb` }}
              href="/ap-score-calculators/"
            >
              AP Score Calculators
            </TrackedLink>
            <span>{h1}</span>
          </nav>
          <span className="eyebrow">{heroEyebrow}</span>
          <h1>{h1}</h1>
          <p className="lead">{subtitle}</p>
          <p className="inline-disclaimer tool-hero-note">
            Unofficial score estimate. Actual AP score conversions may vary.
          </p>
          <div className="benefit-row">
            <span>{calculator.scoreChip}</span>
            <span>Estimated AP score 1-5</span>
            <span>Section score breakdown</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <GenericScoreCalculator {...calculator} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>{chartTitle}</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Composite Score Range</th>
                    <th>Estimated AP Score</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreBands.map((band) => (
                    <tr key={band.score}>
                      <td>
                        {band.min}-{band.max}
                      </td>
                      <td>{band.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              These score ranges are estimates only. Official AP score
              conversions may differ by year and exam form.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Detailed {calculatorTitle} Breakdown</h2>
            <p>
              The calculator converts raw section points into weighted section
              scores, then combines them into an estimated composite score and
              AP score.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Score Part</th>
                    <th>How This Calculator Displays It</th>
                  </tr>
                </thead>
                <tbody>
                  {calculator.sections.map((section) => (
                    <tr key={section.id}>
                      <td>{section.rawLabel}</td>
                      <td>
                        Raw total out of {section.rawMax}, weighted to{" "}
                        {section.weightedMax} points
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>Composite score</td>
                    <td>
                      Weighted section scores added into a /{calculator.compositeMax}{" "}
                      estimate
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>How This {calculatorTitle} Works</h2>
            {howItWorks.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="card prose-card">
            <h2>Exam Format</h2>
            {examIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Details</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {examFormat.map((row) => (
                    <tr key={row.section}>
                      <td>{row.section}</td>
                      <td>{row.detail}</td>
                      <td>{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>What Is a Good Score?</h2>
            {goodScore.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="card prose-card">
            <h2>{calculatorTitle} FAQ</h2>
            <div className="faq-list">
              {faqItems.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card prose-card">
            <h2>Related AP Score Calculators</h2>
            <p>{relatedIntro}</p>
            <div className="calculator-item-grid">
              {relatedCalculators.map((calculator) => {
                const item = (
                  <article
                    className={`calculator-directory-item ${
                      calculator.status === "live" ? "is-live" : "is-coming-soon"
                    }`}
                  >
                    <div className="calculator-directory-copy">
                      <h4>{calculator.title}</h4>
                    </div>
                    <span
                      className={
                        calculator.status === "live"
                          ? "directory-status live"
                          : "directory-status soon"
                      }
                    >
                      {calculator.status === "live" ? "Live" : "Coming Soon"}
                    </span>
                  </article>
                );

                if (calculator.status === "live" && calculator.href) {
                  return (
                    <Link
                      className="calculator-directory-link"
                      href={calculator.href}
                      key={calculator.title}
                    >
                      {item}
                    </Link>
                  );
                }

                return (
                  <div
                    aria-disabled="true"
                    className="calculator-directory-disabled"
                    key={calculator.title}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="hero-actions">
              <TrackedLink
                className="button"
                eventName="calculator_hub_click"
                eventParams={{ source: `${calculator.subject}_related` }}
                href="/ap-score-calculators/"
              >
                View All AP Score Calculators
              </TrackedLink>
              <Link className="button secondary" href="/guides/ap-scoring-guides/">
                Read AP Scoring Guides
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
