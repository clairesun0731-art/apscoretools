import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const pageUrl = "https://www.apscoretools.com/what-do-ap-scores-mean/";
const lastUpdated = "June 4, 2026";

export const metadata: Metadata = {
  title: {
    absolute: "What Do AP Scores Mean? AP Scores 1-5 Explained",
  },
  description:
    "AP scores range from 1 to 5. Learn what each AP score means, how colleges may use AP scores for credit or placement, and what to do after checking your score.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "What Do AP Scores Mean? AP Scores 1-5 Explained",
    description:
      "AP scores range from 1 to 5. Learn what each AP score means, how colleges may use AP scores for credit or placement, and what to do after checking your score.",
    url: pageUrl,
    siteName: "AP Score Tools",
    type: "article",
    images: [
      {
        url: "https://www.apscoretools.com/images/guides/what-do-ap-scores-mean-hero.png",
        width: 1693,
        height: 929,
        alt: "Student reviewing AP scores from 1 to 5",
      },
    ],
  },
};

const scoreMeanings = [
  {
    score: "5",
    officialMeaning: "Extremely well qualified",
    studentMeaning: "Strongest score; often viewed as excellent",
  },
  {
    score: "4",
    officialMeaning: "Very well qualified",
    studentMeaning: "Strong score; commonly accepted by many colleges",
  },
  {
    score: "3",
    officialMeaning: "Qualified",
    studentMeaning: "Often considered passing, but credit varies by school",
  },
  {
    score: "2",
    officialMeaning: "Possibly qualified",
    studentMeaning: "Usually limited credit value",
  },
  {
    score: "1",
    officialMeaning: "No recommendation",
    studentMeaning: "Usually no credit value",
  },
];

const scoreDetails = [
  {
    id: "score-5",
    heading: "What Does a 5 on an AP Exam Mean?",
    body:
      "A 5 is the highest AP score. College Board describes it as extremely well qualified, with a college course grade equivalent of A+ or A. A 5 is often a strong signal of mastery and may be useful for credit or placement, but credit is still not guaranteed at every college.",
  },
  {
    id: "score-4",
    heading: "What Does a 4 on an AP Exam Mean?",
    body:
      "A 4 means very well qualified, with a college course grade equivalent of A-, B+, or B. It is a strong AP score, and many colleges may grant credit or placement for a 4 depending on the subject and department policy.",
  },
  {
    id: "score-3",
    heading: "What Does a 3 on an AP Exam Mean?",
    body:
      "A 3 means qualified, with a college course grade equivalent of B-, C+, or C. It is often considered a passing AP score, but college credit varies. Some colleges accept 3s, while others require a 4 or 5 for certain subjects.",
  },
  {
    id: "score-2",
    heading: "What Does a 2 on an AP Exam Mean?",
    body:
      "A 2 means possibly qualified. It is usually less likely to earn college credit, but it can still reflect exposure to college-level work and can help you understand what to strengthen next.",
  },
  {
    id: "score-1",
    heading: "What Does a 1 on an AP Exam Mean?",
    body:
      "A 1 means no recommendation. It usually does not earn college credit, but it does not erase the value of taking a challenging AP course or the work you put into learning the material.",
  },
];

const afterScoreChecklist = [
  "Save or download your score report for your records.",
  "Check college AP credit policies by subject.",
  "Decide whether to send official score reports.",
  "Talk to your school counselor if you are unsure what to do next.",
  "Use the score to plan future courses.",
  "If the score is lower than expected, do not panic.",
  "If the score is higher than expected, check whether it can help with credit or placement.",
];

const calculatorCards = [
  {
    title: "AP Environmental Science Score Calculator",
    description: "Estimate an APES score from MCQ and FRQ raw scores.",
    href: "/ap-environmental-science-score-calculator/",
  },
  {
    title: "AP Chemistry Score Calculator",
    description: "Estimate an AP Chemistry score from MCQ and FRQ inputs.",
    href: "/ap-chemistry-score-calculator/",
  },
  {
    title: "AP Human Geography Score Calculator",
    description: "Estimate an AP Human Geography score from MCQ and FRQ scores.",
    href: "/ap-human-geography-score-calculator/",
  },
  {
    title: "AP Macroeconomics Score Calculator",
    description: "Estimate an AP Macroeconomics score from MCQ and FRQ scores.",
    href: "/ap-macroeconomics-score-calculator/",
  },
  {
    title: "AP World History Score Calculator",
    description: "Estimate an AP World History score from MCQ, SAQ, DBQ, and LEQ scores.",
    href: "/ap-world-history-score-calculator/",
  },
];

const relatedResources = [
  {
    title: "When Do AP Scores Come Out?",
    description: "Review the 2026 AP score release date and release-day timeline.",
    href: "/when-do-ap-scores-come-out/",
  },
  {
    title: "How to Check AP Scores",
    description: "Learn how to view official AP scores through a College Board account.",
    href: "/how-to-check-ap-scores/",
  },
  {
    title: "AP Score Calculators",
    description: "Estimate AP scores with free, unofficial subject calculators.",
    href: "/ap-score-calculators/",
  },
  {
    title: "AP Score Meaning Guides",
    description: "Browse guides about AP scores from 1 to 5.",
    href: "/guides/ap-score-meaning/",
  },
  {
    title: "AP Score Release Guides",
    description: "Find guides about score release dates, checking scores, and delays.",
    href: "/guides/ap-score-release/",
  },
  {
    title: "AP Scoring Guides",
    description: "Learn how AP exams are scored and how calculators estimate scores.",
    href: "/guides/ap-scoring-guides/",
  },
];

const faqs = [
  {
    question: "What do AP scores mean?",
    answer:
      "AP scores are reported from 1 to 5. They are recommendations about how qualified a student is to receive college credit or placement in that subject.",
  },
  {
    question: "What is the highest AP score?",
    answer:
      "The highest AP score is a 5. College Board describes a 5 as extremely well qualified.",
  },
  {
    question: "Is a 3 a passing AP score?",
    answer:
      "A 3 is generally considered qualified and is often treated as a passing AP score, but college credit depends on the school and subject.",
  },
  {
    question: "Is a 4 a good AP score?",
    answer:
      "Yes. A 4 is a strong AP score and means very well qualified. Many colleges may use a 4 for credit or placement, but policies vary.",
  },
  {
    question: "Is a 5 a good AP score?",
    answer:
      "Yes. A 5 is the strongest AP score and usually signals very strong performance. It still does not guarantee credit at every college.",
  },
  {
    question: "Do colleges accept AP scores of 3?",
    answer:
      "Some colleges accept 3s for credit or placement, while others require a 4 or 5. Check each college's AP credit policy by subject.",
  },
  {
    question: "Do all colleges accept AP scores?",
    answer:
      "No. Each college sets its own AP credit and placement policy, and policies can vary by department or major.",
  },
  {
    question: "Do AP scores affect college admissions?",
    answer:
      "AP scores can provide additional academic context, but they are not the same as AP course grades. Follow each college's reporting guidance.",
  },
  {
    question: "Should I send a low AP score to colleges?",
    answer:
      "It depends on the college, the score, and your goals. Review each school's guidance and talk with a counselor if you are unsure.",
  },
  {
    question: "Can AP Score Tools tell me my official AP score?",
    answer:
      "No. AP Score Tools cannot access or display official AP scores. Official scores must be viewed through College Board.",
  },
  {
    question: "Can I estimate my AP score before official scores are released?",
    answer:
      "Yes. AP Score Tools offers free, unofficial AP score calculators by subject. Estimates are approximate and may vary from final official scores.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Do AP Scores Mean? AP Scores 1-5 Explained",
    description:
      "A student-friendly guide to AP scores from 1 to 5, college credit and placement policies, admissions context, and next steps after checking AP scores.",
    url: pageUrl,
    image:
      "https://www.apscoretools.com/images/guides/what-do-ap-scores-mean-hero.png",
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    author: {
      "@type": "Organization",
      name: "AP Score Tools",
    },
    publisher: {
      "@type": "Organization",
      name: "AP Score Tools",
      logo: {
        "@type": "ImageObject",
        url: "https://www.apscoretools.com/logo-ap-score-calculator-square.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
        name: "Guides",
        item: "https://www.apscoretools.com/guides/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AP Score Meaning",
        item: "https://www.apscoretools.com/guides/ap-score-meaning/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "What Do AP Scores Mean?",
        item: pageUrl,
      },
    ],
  },
];

export default function WhatDoApScoresMeanPage() {
  return (
    <main className="page guide-article-page">
      <JsonLd data={jsonLd} />

      <section className="container article-hero">
        <div className="article-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/guides/">Guides</Link>
            <span>
              <Link href="/guides/ap-score-meaning/">AP Score Meaning</Link>
            </span>
            <span>What Do AP Scores Mean?</span>
          </nav>
          <span className="eyebrow">AP score meaning guide</span>
          <h1>What Do AP Scores Mean? AP Scores 1-5 Explained</h1>
          <p className="lead">
            AP scores are reported on a scale from 1 to 5. A 5 is the strongest
            score, a 3 is generally considered qualified, and each college
            decides how AP scores are used for credit or placement.
          </p>
          <p className="article-updated">Last updated: {lastUpdated}</p>
          <div className="answer-box">
            <strong>Short answer</strong>
            <p>
              AP scores range from 1 to 5. They are recommendations about how
              qualified you are for college credit or placement in that subject,
              but each college sets its own AP credit policy.
            </p>
            <p>
              AP Score Tools provides free AP score calculators and guides. It
              does not make official college credit decisions.
            </p>
          </div>
        </div>
        <div className="article-hero-media">
          <Image
            alt="Student reviewing AP scores from 1 to 5"
            height={929}
            priority
            src="/images/guides/what-do-ap-scores-mean-hero.png"
            width={1693}
          />
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <article className="article-content">
            <section className="card prose-card" id="quick-answer">
              <h2>Quick Answer: What AP Scores Mean</h2>
              <p>
                The final score for each AP Exam is reported from 1 to 5. AP
                scores offer a recommendation about how qualified a student is
                to receive college credit or placement, but each college makes
                its own credit and placement decisions.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>AP Score</th>
                      <th>Official Meaning</th>
                      <th>Simple Student-Friendly Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scoreMeanings.map((row) => (
                      <tr key={row.score}>
                        <td>{row.score}</td>
                        <td>{row.officialMeaning}</td>
                        <td>{row.studentMeaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="warning-box">
                <strong>Official meaning note</strong>
                <p>
                  AP scores are official only when viewed through College Board.
                  AP Score Tools explains score meaning and offers unofficial
                  estimates, but college credit and placement decisions vary by
                  institution.
                </p>
              </div>
            </section>

            <section className="card prose-card" id="score-scale">
              <h2>AP Scores 1-5 Explained</h2>
              <p>
                The AP score scale is meant to summarize exam performance in a
                way colleges can use for credit or placement decisions. The
                score is not a guarantee of credit, and it is not the same as
                your grade in the AP course.
              </p>
              <Image
                alt="AP score scale from 1 to 5 explained"
                className="article-image"
                height={887}
                src="/images/guides/ap-score-scale-1-to-5.png"
                width={1774}
              />
              <div className="tip-grid">
                {scoreDetails.map((score) => (
                  <div id={score.id} key={score.id}>
                    <h3>{score.heading}</h3>
                    <p>{score.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="card prose-card" id="is-a-3-good">
              <h2>Is a 3 a Good AP Score?</h2>
              <p>
                A 3 can be a good AP score depending on your goal and the
                college policy you are trying to meet. It is generally
                considered qualified and is often described as a passing AP
                score.
              </p>
              <p>
                The important caveat is credit. Some colleges grant credit for
                a 3, while more selective programs or departments may require a
                4 or 5. A 3 may still show readiness and effort, especially if
                you also performed well in the AP course.
              </p>
            </section>

            <section className="card prose-card" id="is-4-or-5-good">
              <h2>Is a 4 or 5 a Good AP Score?</h2>
              <p>
                Yes. A 4 or 5 is a strong AP score. These scores are more
                likely to be useful for college credit or placement because they
                indicate strong performance on the exam.
              </p>
              <p>
                Credit is still not automatic. Students should check the AP
                credit policy for each target college and confirm whether the
                policy varies by subject, department, or major.
              </p>
            </section>

            <section className="card prose-card" id="college-credit">
              <h2>Do AP Scores Matter for College Credit?</h2>
              <p>
                AP scores may help students earn college credit or placement.
                Each college and department sets its own policy, so the same AP
                score may be treated differently at different schools.
              </p>
              <p>
                Some schools give credit for a 3, others require a 4 or 5, and
                some use AP scores for placement only. A practical search is
                &quot;[college name] AP credit policy&quot; followed by the
                subject you took.
              </p>
              <div className="answer-box">
                <strong>Practical tip</strong>
                <p>
                  Before sending scores, check your target college&apos;s AP
                  credit policy by subject. Look for both the minimum score and
                  the specific course credit or placement outcome.
                </p>
              </div>
            </section>

            <section className="card prose-card" id="admissions">
              <h2>Do AP Scores Affect College Admissions?</h2>
              <p>
                AP scores can provide additional academic context, but they are
                not the same as AP course grades. In admissions, AP course rigor
                and grades often matter because they show the classes you chose
                and how you performed over the school year.
              </p>
              <p>
                AP exam scores may be self-reported or considered depending on
                the application and school. A lower AP exam score usually does
                not erase a strong course grade. Follow each college&apos;s
                reporting guidance and ask a counselor if you are unsure.
              </p>
            </section>

            <section className="card prose-card" id="after-scores">
              <h2>What to Do After You Check Your AP Scores</h2>
              <p>
                After you see your score, take a few calm next steps before
                deciding whether to send scores or change future course plans.
              </p>
              <Image
                alt="Checklist of what to do after receiving AP scores"
                className="article-image"
                height={887}
                src="/images/guides/ap-score-next-steps-checklist.png"
                width={1774}
              />
              <ul className="check-list">
                {afterScoreChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                If you still need help finding or downloading your score report,
                read{" "}
                <Link href="/how-to-check-ap-scores/">
                  How to Check AP Scores
                </Link>
                . If you want to understand possible score ranges before
                results are released, browse{" "}
                <Link href="/ap-score-calculators/">AP Score Calculators</Link>.
              </p>
            </section>

            <section className="card prose-card" id="estimate-before-release">
              <h2>Can You Estimate Your AP Score Before Results Are Released?</h2>
              <p>
                AP Score Tools provides free, unofficial AP score calculators by
                subject. These calculators estimate composite scores based on
                approximate section weights and estimated score ranges.
              </p>
              <p>
                Calculator results are estimates only. Final official AP scores
                may vary by year, exam form, and the official score conversion.
              </p>
              <div className="guide-list-grid">
                {calculatorCards.map((calculator) => (
                  <Link href={calculator.href} key={calculator.href}>
                    <article className="guide-list-card guide-card-link">
                      <div>
                        <span className="status-pill">Calculator</span>
                        <h3>{calculator.title}</h3>
                        <p>{calculator.description}</p>
                      </div>
                      <span className="guide-card-action">Estimate score</span>
                    </article>
                  </Link>
                ))}
              </div>
            </section>

            <section className="card prose-card" id="faq">
              <h2>Frequently Asked Questions About AP Score Meanings</h2>
              <div className="faq-list">
                {faqs.map((faq) => (
                  <div className="faq-item" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="card prose-card" id="related">
              <h2>Related AP Score Tools Resources</h2>
              <div className="guide-list-grid">
                {relatedResources.map((resource) => (
                  <Link href={resource.href} key={resource.href}>
                    <article className="guide-list-card guide-card-link">
                      <div>
                        <span className="status-pill">Resource</span>
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                      </div>
                      <span className="guide-card-action">Open resource</span>
                    </article>
                  </Link>
                ))}
              </div>
            </section>

            <section className="card prose-card guide-cta-card">
              <h2>Trying to Understand Your Expected AP Result?</h2>
              <p>
                Use AP Score Tools to estimate your score by subject and learn
                how AP scoring works.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/ap-score-calculators/">
                  Browse AP Score Calculators
                </Link>
              </div>
            </section>

            <section className="disclaimer">
              <p>
                AP Score Tools is unofficial and is not affiliated with or
                endorsed by the College Board. AP, Advanced Placement, and
                related exam names are trademarks of their respective owners.
                Calculator results are estimates only.
              </p>
            </section>
          </article>

          <aside className="article-sidebar" aria-label="Guide navigation">
            <div className="article-sidebar-card">
              <strong>In this guide</strong>
              <a href="#quick-answer">Quick answer</a>
              <a href="#score-scale">Scores 1-5</a>
              <a href="#is-a-3-good">Is a 3 good?</a>
              <a href="#is-4-or-5-good">Is a 4 or 5 good?</a>
              <a href="#college-credit">College credit</a>
              <a href="#admissions">Admissions context</a>
              <a href="#after-scores">After checking scores</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="article-sidebar-card">
              <strong>Related AP Score Tools</strong>
              <Link href="/guides/ap-score-meaning/">AP Score Meaning Guides</Link>
              <Link href="/how-to-check-ap-scores/">How to Check AP Scores</Link>
              <Link href="/when-do-ap-scores-come-out/">
                When Do AP Scores Come Out?
              </Link>
              <Link href="/ap-score-calculators/">AP Score Calculators</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
