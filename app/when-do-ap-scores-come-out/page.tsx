import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const pageUrl = "https://www.apscoretools.com/when-do-ap-scores-come-out/";
const lastUpdated = "June 4, 2026";

export const metadata: Metadata = {
  title: {
    absolute: "When Do AP Scores Come Out in 2026?",
  },
  description:
    "2026 AP scores will be available starting Monday, July 6. Learn when AP scores come out, how to check your scores, what to do before release day, and how to estimate your AP score while you wait.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "When Do AP Scores Come Out in 2026?",
    description:
      "2026 AP scores will be available starting Monday, July 6. Learn when AP scores come out, how to check your scores, what to do before release day, and how to estimate your AP score while you wait.",
    url: pageUrl,
    siteName: "AP Score Tools",
    type: "article",
    images: [
      {
        url: "https://www.apscoretools.com/images/guides/ap-score-release-hero.png",
        width: 1200,
        height: 658,
        alt: "Student checking AP scores online on AP score release day",
      },
    ],
  },
};

const timelineItems = [
  {
    date: "May 4-8, 2026",
    title: "Main AP exam week 1",
    body: "Many AP exams are administered during the first main testing week.",
  },
  {
    date: "May 11-15, 2026",
    title: "Main AP exam week 2",
    body: "Remaining main AP exams are administered during the second testing week.",
  },
  {
    date: "June 20, 2026",
    title: "Free score-send deadline",
    body: "This is the deadline to choose one free AP score-send recipient.",
  },
  {
    date: "July 6, 2026",
    title: "Scores begin to become available",
    body: "AP scores for 2026 begin becoming available through College Board accounts.",
  },
  {
    date: "Early July",
    title: "Colleges may begin receiving scores",
    body: "Colleges selected for free score sends may begin receiving official score reports.",
  },
  {
    date: "After release",
    title: "Download or send score reports",
    body: "Students can review official scores and send additional reports through College Board.",
  },
];

const checkSteps = [
  "Go to the official College Board AP scores page.",
  "Sign in with the same College Board account used for AP registration or My AP.",
  "Make sure your email and account information are current.",
  "Do not create a duplicate account.",
  "Open the AP Scores section once scores are available.",
  "Download or save a copy of your score report for your records.",
];

const notShowingReasons = [
  "You are signing in with the wrong College Board account.",
  "You have duplicate accounts that need to be merged.",
  "Your email or account information is outdated.",
  "You took a late-testing exam or your score is still processing.",
  "You are looking for older archived scores.",
  "Your browser, password, or login session is causing access trouble.",
  "A score report or score-send request is still being processed.",
];

const releaseChecklist = [
  "Confirm your College Board login.",
  "Update your email address.",
  "Know which AP exams you took.",
  "Decide whether to use your free score send by June 20.",
  "Look up AP credit policies for target colleges.",
  "Estimate your score using an unofficial AP score calculator.",
  "Avoid panic-refreshing on release morning.",
  "Make a plan for what you will do if your score is lower, higher, or exactly as expected.",
];

const afterReleaseItems = [
  "Save or download your official score report.",
  "Compare each score with college AP credit and placement policies.",
  "Check whether your selected college received your score report.",
  "Decide whether to send additional official score reports.",
  "Remember that AP credit policies vary by college and by subject.",
  "Do not overreact to one score. One AP result does not define your academic future.",
  "If you are unhappy with a score, review options such as retaking in a future year, withholding or canceling where applicable, or focusing on future coursework.",
];

const calculatorCards = [
  {
    title: "AP Environmental Science Score Calculator",
    description: "Estimate an APES score from MCQ and FRQ raw scores.",
    href: "/ap-environmental-science-score-calculator/",
  },
  {
    title: "AP Chemistry Score Calculator",
    description: "Estimate an AP Chemistry score from MCQ and FRQ scores.",
    href: "/ap-chemistry-score-calculator/",
  },
  {
    title: "AP Human Geography Score Calculator",
    description: "Estimate an AP Human Geography score from MCQ and FRQ inputs.",
    href: "/ap-human-geography-score-calculator/",
  },
  {
    title: "AP Macroeconomics Score Calculator",
    description: "Estimate an AP Macro score from MCQ and FRQ raw scores.",
    href: "/ap-macroeconomics-score-calculator/",
  },
  {
    title: "AP World History Score Calculator",
    description: "Estimate an AP World History score from MCQ, SAQ, DBQ, and LEQ scores.",
    href: "/ap-world-history-score-calculator/",
  },
];

const faqs = [
  {
    question: "When do AP scores come out in 2026?",
    answer:
      "2026 AP scores will be available starting Monday, July 6, 2026. Students need to sign in to their College Board account to view official scores.",
  },
  {
    question: "Where can I check my AP scores?",
    answer:
      "Official AP scores are available through your College Board account. AP Score Tools cannot display official AP score reports.",
  },
  {
    question: "Can AP Score Tools show my official AP scores?",
    answer:
      "No. AP Score Tools provides unofficial score calculators and guides only. Official AP scores must be checked through College Board.",
  },
  {
    question: "What time do AP scores come out?",
    answer:
      "College Board announces the score release date, but exact access timing can vary. Students should sign in to their College Board account on score release day and check again later if scores are not visible yet.",
  },
  {
    question: "Why is my AP score not showing?",
    answer:
      "Common reasons include using the wrong account, duplicate accounts, late testing, processing delays, outdated account information, archived older scores, or browser and login issues.",
  },
  {
    question: "Do AP scores come out all at once?",
    answer:
      "Scores begin becoming available on the release date, but individual access can vary by account, processing status, or login issue.",
  },
  {
    question: "Can I see my old AP scores?",
    answer:
      "Older AP scores may still be available through College Board, but some older scores may be archived and may require extra steps to request or send.",
  },
  {
    question: "Do colleges automatically receive my AP scores?",
    answer:
      "Colleges receive AP scores when you choose them as score-send recipients. Students can use one free AP score send by the June 20, 2026 deadline.",
  },
  {
    question: "What is the free AP score send deadline?",
    answer:
      "For 2026, the free AP score-send deadline is June 20. After the free deadline, additional score reports may require a fee.",
  },
  {
    question: "Can I estimate my AP score before the official release?",
    answer:
      "Yes. AP Score Tools offers free, unofficial AP score calculators by subject. Estimates may differ from final official scores because score conversions can vary by year and exam form.",
  },
  {
    question: "What should I do if my score is lower than expected?",
    answer:
      "First, compare the score with your college credit policy. Then decide whether any next step is useful, such as focusing on future coursework, retaking a subject in a later year, or reviewing College Board options where applicable.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "When Do AP Scores Come Out in 2026?",
    description:
      "A student-friendly guide to the 2026 AP score release date, how to check AP scores, what to do before score release day, and how to estimate AP scores while waiting.",
    url: pageUrl,
    image:
      "https://www.apscoretools.com/images/guides/ap-score-release-hero.png",
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
        name: "AP Score Release",
        item: "https://www.apscoretools.com/guides/ap-score-release/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "When Do AP Scores Come Out?",
        item: pageUrl,
      },
    ],
  },
];

export default function WhenDoApScoresComeOutPage() {
  return (
    <main className="page guide-article-page">
      <JsonLd data={jsonLd} />

      <section className="container article-hero">
        <div className="article-hero-copy">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/guides/">Guides</Link>
            <span>
              <Link href="/guides/ap-score-release/">AP Score Release</Link>
            </span>
            <span>When Do AP Scores Come Out?</span>
          </nav>
          <span className="eyebrow">AP score release guide</span>
          <h1>When Do AP Scores Come Out in 2026?</h1>
          <p className="lead">
            2026 AP scores will be available starting Monday, July 6. You will
            need to sign in to your College Board account to view your official
            AP scores.
          </p>
          <p className="article-updated">Last updated: {lastUpdated}</p>
          <div className="answer-box">
            <strong>Short answer</strong>
            <p>
              2026 AP scores will be available starting Monday, July 6. You
              will need to sign in to your College Board account to view your
              official scores.
            </p>
            <p>
              AP Score Tools provides unofficial score calculators and guides.
              It does not display official AP scores.
            </p>
          </div>
        </div>
        <div className="article-hero-media">
          <Image
            alt="Student checking AP scores online on AP score release day"
            height={658}
            priority
            src="/images/guides/ap-score-release-hero.png"
            width={1200}
          />
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <article className="article-content">
            <section className="card prose-card" id="quick-answer">
              <h2>Quick Answer: 2026 AP Score Release Date</h2>
              <p>
                The AP score release date for 2026 is Monday, July 6. Official
                AP scores are checked through a College Board account, not
                through AP Score Tools.
              </p>
              <div className="quick-facts-grid">
                <div>
                  <strong>Date</strong>
                  <span>Monday, July 6, 2026</span>
                </div>
                <div>
                  <strong>Where to check</strong>
                  <span>College Board account</span>
                </div>
                <div>
                  <strong>What to prepare</strong>
                  <span>Login, email, correct account, score-send plan</span>
                </div>
              </div>
              <p>
                Want an estimate before official scores appear? Try a free{" "}
                <Link href="/ap-score-calculators/">
                  AP score calculator by subject
                </Link>
                .
              </p>
            </section>

            <section className="card prose-card" id="official-note">
              <h2>Official Information Note</h2>
              <p>
                AP Score Tools is an unofficial resource. For official AP score
                access, sign in through College Board and follow the official AP
                score instructions for your account.
              </p>
              <p>
                Before score release day, make sure you can sign in, confirm
                your current email address, and avoid creating a new account if
                you already have one. Duplicate accounts can delay score access.
              </p>
              <div className="hero-actions">
                <a
                  className="button secondary"
                  href="https://apstudents.collegeboard.org/view-scores"
                >
                  College Board AP Scores
                </a>
              </div>
            </section>

            <section className="card prose-card" id="timeline">
              <h2>AP Score Release Timeline for 2026</h2>
              <p>
                The 2026 AP score release timeline starts with May exams,
                includes the June free score-send deadline, and leads into July
                score access. Exact score access timing on release day may vary,
                so treat July 6 as the start of availability rather than a
                guaranteed minute-by-minute schedule.
              </p>
              <Image
                alt="2026 AP score release timeline from May exams to July score release"
                className="article-image"
                height={658}
                src="/images/guides/ap-score-release-timeline.png"
                width={1200}
              />
              <div className="timeline-grid">
                {timelineItems.map((item) => (
                  <div className="timeline-card" key={`${item.date}-${item.title}`}>
                    <span>{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="card prose-card" id="how-to-check">
              <h2>How to Check Your AP Scores</h2>
              <p>
                Use the same College Board account connected to your AP
                registration or My AP. If you are not sure which account you
                used, solve that before release day so you are not locked out
                when scores become available.
              </p>
              <ol className="article-numbered-list">
                {checkSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="warning-box">
                <strong>Important</strong>
                <p>
                  AP Score Tools cannot show your official AP scores. Only
                  College Board provides official AP score reports.
                </p>
              </div>
            </section>

            <section
              className="card prose-card"
              id="what-time-do-ap-scores-come-out"
            >
              <h2>What Time Do AP Scores Come Out?</h2>
              <p>
                Do not plan around an unsupported exact release hour. AP scores
                become available starting on the official release date, but your
                access may depend on account status, processing status, or score
                matching.
              </p>
              <p>
                If your score is not visible immediately on July 6, sign in to
                your College Board account again later and verify that your
                account information is correct. For the full login walkthrough,
                read{" "}
                <Link href="/how-to-check-ap-scores/">
                  how to check AP scores
                </Link>
                .
              </p>
            </section>

            <section className="card prose-card" id="score-not-showing">
              <h2>Why Is My AP Score Not Showing?</h2>
              <p>
                A missing AP score does not always mean something is wrong with
                the score itself. Many score access issues are caused by account
                matching, login, or processing details.
              </p>
              <ul className="prose-list">
                {notShowingReasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <div className="tip-grid">
                <div>
                  <h3>Try a supported browser</h3>
                  <p>
                    Use the latest version of Chrome or Safari if the score page
                    is not loading correctly.
                  </p>
                </div>
                <div>
                  <h3>Reset early</h3>
                  <p>
                    Reset your password before release day instead of waiting
                    until everyone is trying to sign in.
                  </p>
                </div>
                <div>
                  <h3>Avoid duplicate accounts</h3>
                  <p>
                    Creating a new account can make score matching harder and
                    may delay access.
                  </p>
                </div>
              </div>
              <p>
                If scores remain missing after the expected window, contact AP
                Services through College Board for official help.
              </p>
            </section>

            <section className="card prose-card" id="before-release">
              <h2>Before AP Score Release Day: Student Checklist</h2>
              <div className="article-split">
                <div>
                  <p>
                    Score release day is much easier when your account and next
                    steps are ready before July. Use this checklist to avoid the
                    common release-morning problems.
                  </p>
                  <ul className="check-list">
                    {releaseChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Image
                  alt="Checklist for students before AP scores are released"
                  className="article-image"
                  height={600}
                  src="/images/guides/ap-score-release-checklist.png"
                  width={1200}
                />
              </div>
              <p>
                Use AP Score Tools to{" "}
                <Link href="/ap-score-calculators/">
                  estimate your score before the official release
                </Link>
                . Live calculators include{" "}
                <Link href="/ap-chemistry-score-calculator/">AP Chemistry</Link>
                ,{" "}
                <Link href="/ap-environmental-science-score-calculator/">
                  AP Environmental Science
                </Link>
                ,{" "}
                <Link href="/ap-human-geography-score-calculator/">
                  AP Human Geography
                </Link>
                ,{" "}
                <Link href="/ap-macroeconomics-score-calculator/">
                  AP Macroeconomics
                </Link>
                , and{" "}
                <Link href="/ap-world-history-score-calculator/">
                  AP World History
                </Link>
                .
              </p>
            </section>

            <section className="card prose-card" id="after-release">
              <h2>After AP Scores Are Released: What Should You Do Next?</h2>
              <p>
                Once AP scores are available, take a few practical steps before
                making assumptions about credit, placement, or next coursework.
              </p>
              <ul className="prose-list">
                {afterReleaseItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="card prose-card" id="score-meaning">
              <h2>What Do AP Scores Mean?</h2>
              <p>
                AP scores are reported from 1 to 5. A 5 is the strongest AP
                score, a 4 is a strong score, and a 3 is often considered a
                qualified or passing-range score. A 2 or 1 is usually less
                likely to earn college credit.
              </p>
              <p>
                College credit and placement policies vary by institution and
                subject. A planned AP Score Tools guide will cover what AP
                scores mean in more detail, but students should always check
                each college&apos;s official AP credit policy.
              </p>
            </section>

            <section className="card prose-card" id="estimate">
              <h2>Can You Estimate Your AP Score Before Scores Come Out?</h2>
              <p>
                Yes, but only unofficially. AP Score Tools provides free AP
                score calculators based on approximate section weighting and
                estimated score ranges. Calculator results are estimates only
                and may vary from final official AP scores.
              </p>
              <p>
                Actual AP score conversions can vary by year and exam form, so
                use a calculator as a planning tool, not as a guarantee.
              </p>
              <div className="guide-list-grid">
                {calculatorCards.map((calculator) => (
                  <Link href={calculator.href} key={calculator.href}>
                    <article className="guide-list-card guide-card-link">
                      <div>
                        <span className="status-pill">Live calculator</span>
                        <h3>{calculator.title}</h3>
                        <p>{calculator.description}</p>
                      </div>
                      <span className="guide-card-action">
                        Estimate your score
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </section>

            <section className="card prose-card" id="faq">
              <h2>Frequently Asked Questions About AP Score Release</h2>
              <div className="faq-list">
                {faqs.map((faq) => (
                  <div className="faq-item" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="card prose-card guide-cta-card">
              <h2>While You Wait for Official AP Scores</h2>
              <p>
                While you wait for official AP scores, you can use AP Score
                Tools to estimate your result and understand how AP scores
                work.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/ap-score-calculators/">
                  Browse AP Score Calculators
                </Link>
                <Link className="button secondary" href="/guides/ap-score-release/">
                  AP Score Release Guides
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
              <a href="#timeline">2026 timeline</a>
              <a href="#how-to-check">How to check scores</a>
              <a href="#what-time-do-ap-scores-come-out">Release timing</a>
              <a href="#score-not-showing">Score not showing</a>
              <a href="#before-release">Student checklist</a>
              <a href="#estimate">Estimate your score</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="article-sidebar-card">
              <strong>Related AP Score Tools</strong>
              <Link href="/guides/">AP Score Guides</Link>
              <Link href="/guides/ap-score-release/">AP Score Release Guides</Link>
              <Link href="/ap-score-calculators/">AP Score Calculators</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
