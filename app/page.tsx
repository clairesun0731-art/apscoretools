import SubjectBrowser from "@/components/SubjectBrowser";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import {
  comingSoonApCalculators,
  liveApCalculators,
} from "@/lib/apCalculatorDirectory";

const title = "AP Score Tools | Free AP Score Calculators by Subject";
const description = `Estimate your AP score from practice exam results with free, unofficial calculators for ${liveApCalculators.length} subjects, including AP Physics, Chemistry, and U.S. History.`;
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://www.apscoretools.com/" },
  openGraph: { title, description, url: "/", siteName: "AP Score Tools", type: "website" },
  twitter: { title, description, card: "summary_large_image" },
};

const faqItems = [
  {
    question: "What scores should I enter from my practice test?",
    answer: "Start with the number of multiple-choice questions you answered correctly. For written responses, use the points you earned on the scoring rubric. Follow the labels on your subject’s calculator for each section.",
  },
  {
    question: "Which AP Physics calculator should I use?",
    answer: "Match the calculator to the exam on your practice paper. AP Physics 1, AP Physics 2, AP Physics C: Mechanics, and AP Physics C: Electricity and Magnetism each have a separate calculator. Check the exam format shown on the calculator before entering your scores.",
  },
  {
    question: "Will my estimated score match my official AP score?",
    answer: "Your estimate may differ. Each calculator applies section weights and estimated score ranges to your raw points. The College Board determines official AP scores, and the cutoffs can vary by exam year.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AP Score Tools",
  url: "https://www.apscoretools.com",
  description,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AP Score Tools",
  url: "https://www.apscoretools.com",
  logo: "https://www.apscoretools.com/logo-ap-score-calculator-square.png",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AP Score Tools",
  url: "https://www.apscoretools.com/",
  description,
  isPartOf: {
    "@type": "WebSite",
    name: "AP Score Tools",
    url: "https://www.apscoretools.com",
  },
};

const faqSchema = {
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
};

export default function Home() {
  return (
    <main className="page">
      <JsonLd data={[websiteSchema, organizationSchema, webPageSchema, faqSchema]} />

      <section className="hero-tool directory-hero">
        <div className="container centered-hero-copy">
          <h1>AP Score Tools</h1>
          <p className="lead">
            Choose from {liveApCalculators.length} free AP score calculators.
            Enter your practice exam points to see how each section contributes
            to your estimated AP score from 1 to 5.
          </p>
          <p className="trust-line">Unofficial estimates · Independent of the College Board</p>
          <div className="hero-actions centered-actions">
            <a className="button" href="#live-ap-calculators">Choose your AP subject</a>
            <Link className="button secondary" href="/ap-score-distributions/">See AP score distributions</Link>
          </div>
        </div>
      </section>

      <section className="section" id="live-ap-calculators">
        <div className="container content-stack">
          <section className="prose-card">
            <div className="section-heading compact-heading centered-section-heading">
              <h2>AP Score Calculators by Subject</h2>
            </div>
            <SubjectBrowser />
            {comingSoonApCalculators.length > 0 && (
              <p className="short-note">
                Looking for another subject?{" "}
                <TrackedLink href="/ap-score-calculators/#coming-soon-calculators"
                  eventName="calculator_hub_click" eventParams={{ source: "homepage_coming_soon" }}>
                  See which calculators are coming soon.
                </TrackedLink>
              </p>
            )}
          </section>

          <section className="card prose-card">
            <h2>How AP Score Tools Works</h2>
            <div className="steps-grid">
              <div>
                <span className="step-number">1</span>
                <h3>Choose an AP subject</h3>
                <p>Start with a calculator built for that exam structure.</p>
              </div>
              <div>
                <span className="step-number">2</span>
                <h3>Enter raw section scores</h3>
                <p>Add MCQ, FRQ, essay, or written-section points as needed.</p>
              </div>
              <div>
                <span className="step-number">3</span>
                <h3>Review an estimate</h3>
                <p>See an unofficial 1-5 score estimate and composite score.</p>
              </div>
            </div>
          </section>

          <section className="card prose-card">
            <h2>Understand Your AP Score</h2>
            <ul>
              <li><Link href="/what-do-ap-scores-mean/">What does an AP score of 1 to 5 mean?</Link></li>
              <li><Link href="/when-do-ap-scores-come-out/">When do AP scores come out?</Link></li>
              <li><Link href="/how-to-check-ap-scores/">How do I check my official AP scores?</Link></li>
            </ul>
            <TrackedLink href="/ap-score-calculators/" eventName="calculator_hub_click"
              eventParams={{ source: "homepage_directory_section" }}>
              Browse the full AP calculator directory
            </TrackedLink>
          </section>

          <section className="card prose-card">
            <h2>FAQ</h2>
            <div className="faq-list">
              {faqItems.map((faq) => (
                <div className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
