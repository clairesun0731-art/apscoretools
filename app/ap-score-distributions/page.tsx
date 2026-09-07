import type { Metadata } from "next";
import Link from "next/link";
import ApScoreDistributionsTable from "@/components/ApScoreDistributionsTable";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import { apScoreDistributions } from "@/lib/apScoreDistributions";

const pageUrl = "https://www.apscoretools.com/ap-score-distributions/";

export const metadata: Metadata = {
  title: {
    absolute: "2026 AP Score Distributions by Subject | AP Pass Rates",
  },
  description:
    "Compare 2026 AP score distributions for every subject, including 5, 4, 3, 2, 1 percentages and AP pass rates. Explore the latest AP score data and calculators.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "2026 AP Score Distributions by Subject | AP Pass Rates",
    description:
      "Compare 2026 AP score distributions for every subject, including 5, 4, 3, 2, 1 percentages and AP pass rates. Explore the latest AP score data and calculators.",
    url: pageUrl,
    siteName: "AP Score Tools",
    type: "website",
  },
};

const faqItems = [
  {
    question: "What is the AP pass rate?",
    answer:
      "The AP pass rate usually refers to the percentage of students who earn a score of 3 or higher. On score distribution tables, this is commonly shown as the 3+ rate.",
  },
  {
    question: "What percentage of students get a 5 on an AP exam?",
    answer:
      "It varies significantly by subject. In the current 2026 distributions, 5 rates range from 7% for AP 3D Art & Design to 48% for AP Chinese Language and Culture.",
  },
  {
    question: "Which AP exam has the highest pass rate in 2026?",
    answer: "AP Research currently has the highest 3+ rate at 90%.",
  },
  {
    question: "Which AP exam has the lowest pass rate in 2026?",
    answer: "AP Music Theory currently has the lowest 3+ rate at 59%.",
  },
  {
    question: "Which AP exam has the highest percentage of 5s in 2026?",
    answer:
      "AP Chinese Language and Culture has the highest current 5 rate at 48%.",
  },
  {
    question: "Is a 3 a passing AP score?",
    answer:
      "A score of 3 is often described as a qualifying AP score, but college credit and placement policies vary. Individual colleges and departments decide which AP scores they accept.",
  },
  {
    question: "Are these official AP score distributions?",
    answer:
      "The percentages on this page are based on data published by the College Board. AP Score Tools itself is an independent, unofficial website and is not affiliated with or endorsed by the College Board.",
  },
  {
    question: "Can AP score distributions predict my AP score?",
    answer:
      "No. Score distributions describe national results and do not predict an individual student's score. To estimate your own result from practice-test performance, use a subject-specific AP score calculator.",
  },
];

const quickStats = [
  {
    label: "Highest 3+ Rate",
    subject: "AP Research",
    value: "90%",
  },
  {
    label: "Highest 5 Rate",
    subject: "AP Chinese Language and Culture",
    value: "48%",
  },
  {
    label: "Lowest 3+ Rate",
    subject: "AP Music Theory",
    value: "59%",
  },
  {
    label: "Highest 5 Rate Among Our Calculators",
    subject: "AP Calculus BC",
    value: "46%",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "2026 AP Score Distributions by Subject",
    url: pageUrl,
    description:
      "A 2026 AP score distributions hub with subject-level 5, 4, 3, 2, 1, and 3+ rates.",
    isPartOf: {
      "@type": "WebSite",
      name: "AP Score Tools",
      url: "https://www.apscoretools.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "2026 AP Score Distributions by Subject",
    description:
      "AP score distribution percentages by subject for 2026, based on College Board published distribution data.",
    url: pageUrl,
    creator: {
      "@type": "Organization",
      name: "College Board",
    },
    isAccessibleForFree: true,
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
        name: "AP Score Distributions",
        item: pageUrl,
      },
    ],
  },
];

export default function ApScoreDistributionsPage() {
  return (
    <main className="page">
      <JsonLd data={jsonLd} />

      <section className="hero-tool directory-hero distribution-hero">
        <div className="container centered-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>AP Score Distributions</span>
          </nav>
          <span className="eyebrow">AP pass rates 2026</span>
          <h1>2026 AP Score Distributions by Subject</h1>
          <p className="lead">
            See the latest 2026 AP score distributions for every AP exam.
            Compare the percentage of students who earned a 5, 4, 3, 2, or 1,
            along with the percentage who scored 3 or higher.
          </p>
          <div className="distribution-source-row" aria-label="Source and status">
            <span>Source: College Board 2026 AP Score Distributions</span>
            <span>Last checked: September 2026</span>
          </div>
          <p className="short-note">
            AP Score Tools is an unofficial resource and is not affiliated with
            or endorsed by the College Board.
          </p>
        </div>
      </section>

      <section className="section distribution-section">
        <div className="container content-stack">
          <section className="distribution-stat-grid" aria-label="AP score distribution highlights">
            {quickStats.map((stat) => (
              <article className="distribution-stat-card" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.subject}</p>
              </article>
            ))}
          </section>

          <section className="prose-card" id="distribution-table">
            <div className="section-heading compact-heading centered-section-heading">
              <h2>2026 AP Score Distribution Table</h2>
              <p>
                Search or filter the table to compare AP score distributions by
                subject. A 3+ rate is the percentage of students who earned a
                score of 3, 4, or 5.
              </p>
            </div>
            <ApScoreDistributionsTable distributions={apScoreDistributions} />
            <p className="distribution-data-note">
              Percentages are based on the currently published 2026 College
              Board score distributions. Current-year percentages are rounded,
              so individual score percentages may not always add exactly to the
              published 3+ rate.
            </p>
          </section>

          <section className="distribution-insight-grid">
            <article className="card prose-card">
              <h2>Highest AP Pass Rates in 2026</h2>
              <p>
                The 3+ rate shows the percentage of students earning a 3, 4, or
                5.
              </p>
              <ol className="distribution-ranked-list">
                <li>AP Research &mdash; 90%</li>
                <li>AP Seminar &mdash; 88%</li>
                <li>AP 2D Art & Design &mdash; 85%</li>
                <li>AP Chinese Language and Culture &mdash; 85%</li>
                <li>AP Drawing and AP Spanish Language and Culture &mdash; 83%</li>
              </ol>
              <p>
                A high pass rate does not necessarily mean an AP exam is easier.
                The students taking each AP course can differ substantially in
                experience, preparation, prerequisites, and prior knowledge.
              </p>
            </article>

            <article className="card prose-card">
              <h2>Lowest AP Pass Rates in 2026</h2>
              <ol className="distribution-ranked-list">
                <li>AP Music Theory &mdash; 59%</li>
                <li>AP Statistics &mdash; 62%</li>
                <li>AP Computer Science Principles &mdash; 63%</li>
                <li>AP Calculus AB &mdash; 65%</li>
                <li>
                  AP Human Geography, AP Macroeconomics, and AP World History:
                  Modern &mdash; 66%
                </li>
              </ol>
              <p>
                Lower pass rates should not be treated as a direct ranking of
                exam difficulty. Score distributions describe how a group of
                students performed, not how difficult an exam will be for an
                individual student.
              </p>
            </article>
          </section>

          <article className="card prose-card">
            <h2>Which AP Exams Have the Highest 5 Rates?</h2>
            <ol className="distribution-ranked-list">
              <li>AP Chinese Language and Culture &mdash; 48%</li>
              <li>AP Japanese Language and Culture &mdash; 47%</li>
              <li>AP Calculus BC &mdash; 46%</li>
              <li>AP Precalculus &mdash; 29%</li>
              <li>AP Computer Science A &mdash; 25%</li>
            </ol>
            <p>
              High 5 rates can be strongly affected by the students who choose
              to take an exam. Advanced math and world-language exams may
              include highly prepared or self-selected groups of students.
            </p>
          </article>

          <section className="distribution-insight-grid">
            <article className="card prose-card">
              <h2>What Does an AP Score Distribution Mean?</h2>
              <p>
                An AP score distribution shows what percentage of test takers
                earned each AP score from 1 through 5.
              </p>
              <p>
                For example, if an exam has a 15% 5 rate, that means about 15%
                of students taking that exam earned a 5.
              </p>
              <p>
                The 3+ rate combines students earning a 3, 4, or 5 and is
                commonly used when comparing AP pass rates.
              </p>
              <p>
                However, colleges set their own AP credit and placement
                policies. A score of 3 may earn credit at one college while
                another program may require a 4 or 5.
              </p>
            </article>

            <article className="card prose-card">
              <h2>Does a Higher AP Pass Rate Mean an Easier Exam?</h2>
              <p>Not necessarily.</p>
              <p>
                Score distributions can be influenced by which students choose
                the course, prerequisites and prior coursework, student
                experience with the subject, school and course preparation,
                language background, and differences in the population taking
                each exam.
              </p>
              <p>
                Use score distributions as context for your preparation, not as
                a ranking of which AP exams are easiest or hardest.
              </p>
            </article>
          </section>

          <section className="card prose-card distribution-cta-card">
            <h2>Estimate Your Own AP Score</h2>
            <p>
              National score distributions show how other students performed.
              Your own estimated score depends on your multiple-choice and
              free-response performance.
            </p>
            <div className="hero-actions">
              <TrackedLink
                className="button"
                eventName="distribution_hub_click"
                eventParams={{ source: "ap_score_distributions_cta" }}
                href="/ap-score-calculators/"
              >
                Browse AP Score Calculators
              </TrackedLink>
            </div>
          </section>

          <article className="card prose-card" id="faq">
            <h2>AP Score Distribution FAQ</h2>
            <div className="faq-list">
              {faqItems.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="disclaimer" id="source-disclaimer">
            <p>Source: College Board &mdash; 2026 AP Score Distributions</p>
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
