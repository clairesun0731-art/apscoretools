import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { liveApCalculators } from "@/lib/apCalculatorDirectory";

const featuredLiveCalculators = liveApCalculators.slice(0, 5);

type ComingSoonCalculatorPageProps = {
  description: string;
  keywords: string[];
  name: string;
  url: string;
};

export function calculatorPageJsonLd({
  description,
  name,
  url,
}: Omit<ComingSoonCalculatorPageProps, "keywords">) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name,
      url,
      description,
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
          name,
          item: url,
        },
      ],
    },
  ];
}

export default function ComingSoonCalculatorPage({
  description,
  keywords,
  name,
  url,
}: ComingSoonCalculatorPageProps) {
  const jsonLd = calculatorPageJsonLd({ description, name, url });

  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="container hero">
        <div>
          <span className="eyebrow">Coming soon</span>
          <h1>{name}</h1>
          <p className="lead">
            {description} This calculator is not live yet, and AP Score Tools
            does not provide scoring inputs or cutoffs for this subject yet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Calculator Not Live Yet</h2>
            <p>
              This planned page is included so students can find future AP score
              calculator updates. AP Score Tools has multiple live subject
              calculators right now, and planned tools are clearly marked until
              they have real scoring inputs.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What This Future Calculator Will Help Estimate</h2>
            <p>
              When released, this tool will estimate an unofficial 1-5 AP score
              using subject-specific section inputs and estimated score ranges.
              We will add the calculator only after building a model that is
              clearly labeled and specific to this exam.
            </p>
            <p>{keywords.join(", ")}.</p>
          </article>

          <article className="card prose-card">
            <h2>Use a Live AP Score Calculator</h2>
            <p>
              Use one of the current live calculators if you want to try a
              working AP score calculator.
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
        </div>
      </section>
    </main>
  );
}
