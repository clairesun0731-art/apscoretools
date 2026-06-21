import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { liveApCalculators } from "@/lib/apCalculatorDirectory";

const featuredLiveCalculators = liveApCalculators.slice(0, 4);

export type BetaCalculatorPageProps = {
  description: string;
  examName: string;
  examStructure: string[];
  keywords: string[];
  title: string;
  url: string;
  willInclude: string[];
};

export default function BetaCalculatorPage({
  description,
  examName,
  examStructure,
  keywords,
  title,
  url,
  willInclude,
}: BetaCalculatorPageProps) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url,
      description,
      isPartOf: {
        "@type": "WebSite",
        name: "AP Score Tools",
        url: "https://www.apscoretools.com",
      },
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
          name: title,
          item: url,
        },
      ],
    },
  ];

  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="container hero">
        <div>
          <span className="eyebrow">Beta / under review</span>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p className="short-note">
            This page is indexable while AP Score Tools reviews the scoring
            model. It does not currently provide a functional score estimate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card beta-notice-card">
            <span className="status-pill beta">Beta / Under Review</span>
            <h2>{title}</h2>
            <p>
              This {examName} score calculator is currently being reviewed. AP
              Score Tools is working on a subject-specific scoring model based
              on the current AP exam structure. Calculator results will be
              estimates only and may vary by year.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/ap-score-calculators/">
                View All AP Score Calculators
              </Link>
              <Link
                className="button secondary"
                href="/ap-environmental-science-score-calculator/"
              >
                Try AP Environmental Science Score Calculator
              </Link>
              <Link className="button secondary" href="/ap-chemistry-score-calculator/">
                Try AP Chemistry Score Calculator
              </Link>
            </div>
          </article>

          <article className="card prose-card">
            <h2>How the {examName} Exam Is Structured</h2>
            <ul>
              {examStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Official AP scoring and score conversions can vary by exam year.
              AP Score Tools will only publish an interactive calculator here
              after the subject-specific model has been reviewed.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What the Calculator Will Include</h2>
            <ul>
              {willInclude.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card prose-card">
            <h2>Use a Verified Live AP Calculator</h2>
            <p>
              AP Score Tools has multiple live subject calculators right now.
              The {examName} calculator will move out of beta only after its
              scoring model is reviewed.
            </p>
            <div className="hero-actions">
              {featuredLiveCalculators.map((calculator, index) => (
                <Link
                  className={index === 0 ? "button" : "button secondary"}
                  href={calculator.href}
                  key={calculator.href}
                >
                  {calculator.title}
                </Link>
              ))}
              <Link className="button secondary" href="/ap-score-calculators/">
                AP Score Calculators
              </Link>
            </div>
          </article>

          <article className="card prose-card">
            <h2>Related Search Terms</h2>
            <p>{keywords.join(", ")}.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
