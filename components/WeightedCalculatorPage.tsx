import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WeightedScoreCalculator from "@/components/WeightedScoreCalculator";
import type { WeightedScoreCalculatorConfig } from "@/lib/scoreCalculatorConfigs";
import type { WeightedCalculatorPageData } from "@/lib/weightedCalculatorPageData";

const disclaimer =
  "AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board. AP, Advanced Placement, and related exam names are trademarks of their respective owners. Calculator results are estimates only.";

function rangeLabel(min: number, max: number) {
  return `${min}-${max}`;
}

export default function WeightedCalculatorPage({
  config,
  data,
}: {
  config: WeightedScoreCalculatorConfig;
  data: WeightedCalculatorPageData;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: config.heading,
      alternateName: data.keywords,
      url: data.url,
      applicationCategory: "EducationalApplication",
      applicationSubCategory: "Score calculator",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: data.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
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
          name: config.heading,
          item: data.url,
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
            <Link href="/ap-score-calculators/">AP Score Calculators</Link>
            <span>{config.heading}</span>
          </nav>
          <span className="eyebrow">AP score estimate</span>
          <h1>{data.title}</h1>
          <p className="lead">{data.intro}</p>
          <div className="benefit-row">
            <span>Free to use</span>
            <span>{data.benefitBreakdown}</span>
            <span>Estimated AP score 1-5</span>
          </div>

          <div className="centered-calculator-panel" id="calculator">
            <WeightedScoreCalculator config={config} />
          </div>

          <article className="disclaimer tool-hero-disclaimer">
            <p>{disclaimer}</p>
          </article>
        </div>
      </section>

      <section className="section score-chart-section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Score Breakdown</h2>
            <p>{data.sectionIntro}</p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Raw Score Max</th>
                    <th>Estimated Scaled Points</th>
                    <th>Approximate Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {config.sections.map((section) => (
                    <tr key={section.label}>
                      <td>{section.label}</td>
                      <td>{section.rawMax}</td>
                      <td>{section.scaledMax}</td>
                      <td>{section.scaledMax}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>How This Calculator Works</h2>
            {data.howItWorks.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="card prose-card">
            <h2>Estimated Score Ranges</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Estimated Composite Range</th>
                    <th>Predicted AP Score</th>
                  </tr>
                </thead>
                <tbody>
                  {config.scoreBands.map((band) => (
                    <tr key={band.score}>
                      <td>{rangeLabel(band.min, band.max)}</td>
                      <td>{band.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              These are estimated score bands, not official College Board cut
              scores. Use them as a planning range for {data.examName}, not as a
              guarantee.
            </p>
          </article>

          <article className="card prose-card" id="faq">
            <h2>FAQ</h2>
            <div className="faq-list">
              {data.faqs.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card prose-card">
            <h2>Related AP Score Calculators</h2>
            <p>
              Compare this estimate with other live AP score calculators, or
              browse the full AP score calculator directory.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/ap-score-calculators/">
                AP Score Calculators
              </Link>
              {data.relatedLinks.map((link) => (
                <Link className="button secondary" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </article>

          <article className="disclaimer">
            <p>{disclaimer}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
