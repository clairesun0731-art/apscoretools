import type { Metadata } from "next";
import Link from "next/link";
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

const featuredCalculators = [
  {
    name: "AP Environmental Science Score Calculator",
    description: "Live APES calculator for MCQ, FRQ, and composite estimates.",
    href: "/ap-environmental-science-score-calculator/",
    status: "Live",
  },
  {
    name: "AP Biology Score Calculator",
    description: "Coming soon. This tool is planned and not live yet.",
    href: "/ap-biology-score-calculator/",
    status: "Coming soon",
  },
  {
    name: "AP Chemistry Score Calculator",
    description: "Coming soon. This tool is planned and not live yet.",
    href: "/ap-chemistry-score-calculator/",
    status: "Coming soon",
  },
  {
    name: "AP Calculus AB Score Calculator",
    description: "Coming soon. This AP Calc AB tool is planned and not live yet.",
    href: "/ap-calculus-ab-score-calculator/",
    status: "Coming soon",
  },
  {
    name: "AP English Language Score Calculator",
    description: "Coming soon. This AP Lang tool is planned and not live yet.",
    href: "/ap-lang-score-calculator/",
    status: "Coming soon",
  },
  {
    name: "APUSH Score Calculator",
    description: "Coming soon. This AP US History tool is planned and not live yet.",
    href: "/apush-score-calculator/",
    status: "Coming soon",
  },
];

const comingSoonCalculators = [
  { name: "AP Psychology Score Calculator", status: "Planned" },
  { name: "AP Statistics Score Calculator", status: "Planned" },
  { name: "AP Calculus AB Score Calculator", status: "Planned" },
  { name: "AP English Language Score Calculator", status: "Planned" },
  { name: "APUSH Score Calculator", status: "Planned" },
  { name: "AP World History Score Calculator", status: "Planned" },
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

export default function Home() {
  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema, organizationSchema]),
        }}
      />

      <section className="hero-tool">
        <div className="container hero-tool-grid">
          <div className="hero-copy">
            <span className="eyebrow">AP score tools for students</span>
            <h1>Free AP Score Calculator Tools for Students</h1>
            <p className="lead">
              Start with our live AP Environmental Science score calculator.
              More AP score calculators for Biology, Chemistry, Calculus,
              APUSH, AP Lang, and other AP subjects are coming soon.
            </p>
            <p className="trust-line">
              Unofficial AP score estimates · APES calculator live now · More AP
              calculators coming soon
            </p>
            <div className="badge-row" aria-label="Calculator features">
              <span>First live tool: APES</span>
              <span>MCQ + FRQ</span>
              <span>Free to use</span>
              <span>2026 estimate</span>
            </div>
            <p className="short-note">
              AP Score Tools is a free AP score calculator hub. This is our
              first live AP score calculator, and more subject tools are
              planned.
            </p>
          </div>

          <div className="hero-calculator">
            <ApesCalculator />
            <div className="disclaimer">
              <p>
                This calculator is unofficial and is not affiliated with or
                endorsed by the College Board. Predicted AP scores are estimates
                only and may vary from official scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading">
              <h2>Popular AP Score Calculators</h2>
              <p>
                AP Score Tools is building a collection of unofficial AP score
                calculators for high-demand AP subjects. The AP Environmental
                Science calculator is live now, and more calculators are
                planned.
              </p>
            </div>
            <div className="cards-grid">
              {featuredCalculators.map((calculator) => (
                <Link href={calculator.href} key={calculator.name}>
                  <article
                    className={`tool-card ${
                      calculator.status === "Live" ? "active" : ""
                    }`}
                  >
                    <div>
                      <span
                        className={`status-pill ${
                          calculator.status === "Coming soon" ? "soon" : ""
                        }`}
                      >
                        {calculator.status}
                      </span>
                      <h3>{calculator.name}</h3>
                      <p>{calculator.description}</p>
                    </div>
                    <span>
                      {calculator.status === "Live"
                        ? "Open calculator"
                        : "View status"}
                    </span>
                  </article>
                </Link>
              ))}
            </div>
            <div>
              <Link className="button" href="/ap-score-calculators/">
                Explore all AP score calculators
              </Link>
            </div>
          </section>

          <section className="prose-card">
            <h2>More AP Calculators Coming Soon</h2>
            <div className="cards-grid">
              {comingSoonCalculators.map((calculator) => (
                <article className="tool-card" key={calculator.name}>
                  <div>
                    <span className="status-pill soon">{calculator.status}</span>
                    <h3>{calculator.name}</h3>
                    <p>This AP score calculator is planned and not live yet.</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <article className="card prose-card">
            <h2>How This AP Score Calculator Works</h2>
            <p>
              The live AP Environmental Science calculator uses your raw
              multiple-choice score and free-response scores. It scales Section
              I from 80 raw questions to 78 composite points, scales the three
              FRQs from 30 raw points to 52 composite points, then combines both
              sections into an estimated APES composite score out of 130.
            </p>
          </article>

          <article className="card prose-card">
            <h2>AP Environmental Science Exam Format</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Raw Score</th>
                    <th>Scaled Score</th>
                    <th>Time</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Section I: Multiple Choice</td>
                    <td>80 questions</td>
                    <td>78 points</td>
                    <td>1 hour 30 minutes</td>
                    <td>60%</td>
                  </tr>
                  <tr>
                    <td>Section II: Free Response</td>
                    <td>3 questions / 30 raw points</td>
                    <td>52 points</td>
                    <td>1 hour 10 minutes</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>-</td>
                    <td>130 points</td>
                    <td>2 hours 40 minutes</td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className="card prose-card">
            <h2>Estimated APES Composite Score Chart</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Composite Score Range</th>
                    <th>Predicted AP Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>96-130</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>77-95</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>68-76</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>50-67</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>0-49</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These composite score ranges are estimates based on common APES
              score calculator models and past scoring patterns. Official AP
              score cutoffs are determined by the College Board and may vary by
              year.
            </p>
          </article>

          <article className="card prose-card">
            <h2>What Score Do You Need for a 3, 4, or 5?</h2>
            <p>
              In this AP Environmental Science estimate, a 3 starts at 68
              composite points, a 4 starts at 77 composite points, and a 5
              starts at 96 composite points. Official score cutoffs can change
              by year, so use these as planning estimates.
            </p>
          </article>

          <article className="card prose-card">
            <h2>FAQ</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Are these AP score calculators official?</h3>
                <p>
                  No. AP Score Tools is unofficial and not affiliated with or
                  endorsed by the College Board.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can I use AP Score Tools before or after the AP exam?</h3>
                <p>
                  Yes. You can use the live AP Environmental Science calculator
                  to test study scenarios before the exam or estimate your
                  possible score after the exam.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
