import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const pageUrl = "https://www.apscoretools.com/how-to-check-ap-scores/";
const lastUpdated = "June 4, 2026";

export const metadata: Metadata = {
  title: {
    absolute: "How to Check AP Scores in 2026",
  },
  description:
    "Learn how to check your AP scores in 2026 through your College Board account, what to prepare before score release day, and what to do if your AP scores are not showing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "How to Check AP Scores in 2026",
    description:
      "Learn how to check your AP scores in 2026 through your College Board account, what to prepare before score release day, and what to do if your AP scores are not showing.",
    url: pageUrl,
    siteName: "AP Score Tools",
    type: "article",
    images: [
      {
        url: "https://www.apscoretools.com/images/guides/how-to-check-ap-scores-hero.png",
        width: 1200,
        height: 658,
        alt: "Student checking AP scores online through a secure account",
      },
    ],
  },
};

const quickSteps = [
  "Go to the official College Board AP scores page.",
  "Sign in with the same College Board account you used for My AP or AP exam registration.",
  "Confirm your email and account information are current.",
  "Open the AP Scores section once scores are available.",
  "Check that all current-year and past AP scores are listed.",
  "Download the PDF score report for your own records if needed.",
  "Use College Board score-send tools if you need official scores sent to a college.",
];

const prepChecklist = [
  "Confirm your College Board username and password.",
  "Use the same account you used for My AP.",
  "Update your email address if it changed.",
  "Avoid creating a duplicate account.",
  "Try signing in before scores are released.",
  "Use a supported browser, such as the latest Chrome or Safari.",
  "Know which AP exams you took this year.",
  "Decide whether you need to send official scores to colleges.",
];

const missingScoreReasons = [
  "You signed in with the wrong College Board account.",
  "You may have multiple College Board accounts.",
  "Your account email or identifying information may not match your AP records.",
  "Some scores may take longer to process.",
  "Late testing or delayed testing materials can affect score availability.",
  "Scores from AP Exams taken before 2018 are archived and are not viewable in the online score reporting system.",
  "Browser or login issues may prevent normal access.",
];

const afterCheckingItems = [
  "Save a copy of your score report for your records.",
  "Check college AP credit and placement policies.",
  "Confirm whether official score reports need to be sent.",
  "Understand what your AP score means in context.",
  "Do not overreact to one score.",
  "If a score is missing, wait for official updates or contact AP Services.",
  "If a score is lower than expected, review next steps calmly.",
];

const relatedResources = [
  {
    title: "When Do AP Scores Come Out?",
    description: "Review the 2026 AP score release date and release-day timeline.",
    href: "/when-do-ap-scores-come-out/",
  },
  {
    title: "AP Score Calculators",
    description: "Estimate AP scores with free, unofficial subject calculators.",
    href: "/ap-score-calculators/",
  },
  {
    title: "AP Score Release Guides",
    description: "Browse AP score release timing, checking, and troubleshooting guides.",
    href: "/guides/ap-score-release/",
  },
  {
    title: "AP Score Meaning Guides",
    description: "Understand AP scores from 1 to 5 and how colleges may use scores.",
    href: "/guides/ap-score-meaning/",
  },
  {
    title: "AP Scoring Guides",
    description: "Learn how AP exams are scored and how score calculators estimate results.",
    href: "/guides/ap-scoring-guides/",
  },
  {
    title: "AP Chemistry Score Calculator",
    description: "Estimate an AP Chemistry score from MCQ and FRQ inputs.",
    href: "/ap-chemistry-score-calculator/",
  },
  {
    title: "AP Environmental Science Score Calculator",
    description: "Estimate an APES score from MCQ and FRQ raw scores.",
    href: "/ap-environmental-science-score-calculator/",
  },
  {
    title: "AP World History Score Calculator",
    description: "Estimate an AP World History score from MCQ, SAQ, DBQ, and LEQ scores.",
    href: "/ap-world-history-score-calculator/",
  },
];

const subjectCalculatorLinks = [
  {
    label: "AP Environmental Science",
    href: "/ap-environmental-science-score-calculator/",
  },
  {
    label: "AP Chemistry",
    href: "/ap-chemistry-score-calculator/",
  },
  {
    label: "AP Human Geography",
    href: "/ap-human-geography-score-calculator/",
  },
  {
    label: "AP Macroeconomics",
    href: "/ap-macroeconomics-score-calculator/",
  },
  {
    label: "AP World History",
    href: "/ap-world-history-score-calculator/",
  },
];

const faqs = [
  {
    question: "How do I check my AP scores?",
    answer:
      "Sign in to your College Board account and open the AP Scores section once scores are available. Use the same account you used for My AP or AP exam registration.",
  },
  {
    question: "Where do I check AP scores?",
    answer:
      "Students should check official AP scores on the AP Students score page through College Board. AP Score Tools cannot access official score records.",
  },
  {
    question: "When can I check AP scores in 2026?",
    answer:
      "2026 AP scores will be available starting Monday, July 6, 2026.",
  },
  {
    question: "What time do AP scores come out?",
    answer:
      "College Board announces the release date, but exact access timing can vary. If your score is not visible right away, check again later and verify your account information.",
  },
  {
    question: "Why are my AP scores not showing?",
    answer:
      "Possible reasons include the wrong account, multiple accounts, mismatched account information, late testing, delayed materials, archived older scores, or browser and login issues.",
  },
  {
    question: "What should I do if I have multiple College Board accounts?",
    answer:
      "Do not create another account. Use College Board account help or contact AP Services so your records can be matched correctly.",
  },
  {
    question: "Can I download my AP score report?",
    answer:
      "Yes. Students can download a PDF version of their score report for personal records after signing in.",
  },
  {
    question: "Is a downloaded AP score report official?",
    answer:
      "No. The downloaded PDF is useful for your own records, but official score reports for colleges must be sent through College Board score-send options.",
  },
  {
    question: "Can AP Score Tools show my official AP scores?",
    answer:
      "No. AP Score Tools provides unofficial AP score calculators and guides only. Official AP scores are provided by College Board.",
  },
  {
    question: "Can I estimate my AP score before official scores are released?",
    answer:
      "Yes. AP Score Tools offers free, unofficial AP score calculators by subject. Estimates may vary from final official AP scores.",
  },
  {
    question: "Do old AP scores appear in my online score report?",
    answer:
      "Scores from AP Exams taken before 2018 are archived and are not viewable in the online score reporting system.",
  },
  {
    question: "What should I do if my score is still missing by August 15?",
    answer:
      "Follow College Board guidance and contact AP Services for Students if current-year scores are still missing by August 15.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Check AP Scores in 2026",
    description:
      "A practical guide to checking AP scores through College Board, preparing your account before score release day, troubleshooting missing scores, and understanding score reports.",
    url: pageUrl,
    image:
      "https://www.apscoretools.com/images/guides/how-to-check-ap-scores-hero.png",
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
        name: "How to Check AP Scores",
        item: pageUrl,
      },
    ],
  },
];

export default function HowToCheckApScoresPage() {
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
            <span>How to Check AP Scores</span>
          </nav>
          <span className="eyebrow">AP score release guide</span>
          <h1>How to Check AP Scores in 2026</h1>
          <p className="lead">
            To check your AP scores, sign in to your College Board account and
            open the AP Scores section once scores are available. AP Score Tools
            cannot show official AP scores.
          </p>
          <p className="article-updated">Last updated: {lastUpdated}</p>
          <div className="answer-box">
            <strong>Short answer</strong>
            <p>
              To check your AP scores, sign in to your College Board account
              and open the AP Scores section once scores are available. 2026 AP
              scores will be available starting Monday, July 6.
            </p>
            <p>
              AP Score Tools provides unofficial AP score calculators and
              guides. It does not display official AP scores.
            </p>
          </div>
        </div>
        <div className="article-hero-media">
          <Image
            alt="Student checking AP scores online through a secure account"
            height={658}
            priority
            src="/images/guides/how-to-check-ap-scores-hero.png"
            width={1200}
          />
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <article className="article-content">
            <section className="card prose-card" id="quick-steps">
              <h2>How to Check Your AP Scores: Quick Steps</h2>
              <p>
                The score-checking process is mostly about using the correct
                account. The same College Board account is used for My AP and
                other College Board resources, so students should sign in with
                the account used to register and enroll in AP class sections.
              </p>
              <Image
                alt="Step-by-step checklist for checking AP scores"
                className="article-image"
                height={600}
                src="/images/guides/how-to-check-ap-scores-steps.png"
                width={1200}
              />
              <ol className="article-numbered-list">
                {quickSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="warning-box">
                <strong>Do not create a duplicate account</strong>
                <p>
                  Do not create a new College Board account if you already have
                  one. Duplicate accounts can delay AP score access.
                </p>
              </div>
            </section>

            <section className="card prose-card" id="before-release">
              <h2>Before AP Score Release Day: What to Prepare</h2>
              <p>
                The best time to solve login problems is before AP score release
                day. Saved passwords may not always work reliably for important
                College Board logins, so know the email address and password
                associated with your account.
              </p>
              <ul className="check-list">
                {prepChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="card prose-card" id="where">
              <h2>Where Do You Check AP Scores?</h2>
              <p>
                Students should use the official AP Students score page.
                Educators, K-12 administrators, and higher education
                professionals use different AP score reporting portals through
                AP Central or other College Board systems.
              </p>
              <p>
                AP Score Tools cannot access official AP score records. It can
                help you estimate scores before release day or understand how AP
                scoring works.
              </p>
              <div className="hero-actions">
                <a
                  className="button secondary"
                  href="https://apstudents.collegeboard.org/view-scores"
                >
                  Official AP Students Score Page
                </a>
                <Link className="button" href="/ap-score-calculators/">
                  Try a Free AP Score Calculator
                </Link>
              </div>
            </section>

            <section className="card prose-card" id="what-time">
              <h2>What Time Do AP Scores Come Out?</h2>
              <p>
                2026 AP scores will be available starting Monday, July 6. Do
                not rely on an exact release hour unless College Board
                officially confirms one.
              </p>
              <p>
                Availability can vary by account, processing status, or score
                matching. If your AP score is not visible immediately, check
                again later and verify that your College Board account
                information is correct.
              </p>
            </section>

            <section className="card prose-card" id="not-showing">
              <h2>Why Are My AP Scores Not Showing?</h2>
              <p>
                Missing AP scores are often an account or processing issue, not
                a final answer about your score. Start by checking the account
                you used and whether your personal information matches your AP
                records.
              </p>
              <Image
                alt="Common reasons AP scores may not be showing"
                className="article-image"
                height={658}
                src="/images/guides/ap-scores-not-showing-troubleshooting.png"
                width={1200}
              />
              <ul className="prose-list">
                {missingScoreReasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <div className="tip-grid">
                <div>
                  <h3>Use a supported browser</h3>
                  <p>
                    Try the latest Chrome or Safari. Latest Firefox and Edge are
                    also supported.
                  </p>
                </div>
                <div>
                  <h3>Check accounts first</h3>
                  <p>
                    If you might have more than one account, do not create a new
                    one. Resolve the account match instead.
                  </p>
                </div>
                <div>
                  <h3>Know the August 15 marker</h3>
                  <p>
                    If current-year scores are not received by August 15, follow
                    College Board guidance and contact AP Services for Students.
                  </p>
                </div>
              </div>
            </section>

            <section className="card prose-card" id="download">
              <h2>How to Download Your AP Score Report</h2>
              <p>
                After you sign in, you can download a PDF version of your AP
                score report for your own records. This can be useful if you
                want a personal copy or need to review scores later.
              </p>
              <p>
                The downloadable PDF is an unofficial copy. It is not the same
                as an official AP score report sent to a college. To send
                official score reports, use College Board score-send options.
              </p>
            </section>

            <section className="card prose-card" id="college-sends">
              <h2>Do Colleges Automatically Receive Your AP Scores?</h2>
              <p>
                Colleges receive AP scores when you choose them through College
                Board score-send options. If you used a free score send, the
                selected institution receives available scores when the report
                is generated.
              </p>
              <p>
                If other current-year scores are delayed, College Board states
                those scores are automatically sent later to the selected
                current-year recipients when available. Additional score reports
                may need to be ordered through College Board.
              </p>
              <p>
                College credit and placement policies vary by college, so check
                both your score-send settings and each school&apos;s AP credit
                policy.
              </p>
            </section>

            <section className="card prose-card" id="after-checking">
              <h2>What to Do After You Check Your AP Scores</h2>
              <p>
                Once you can see your scores, take a few practical next steps
                before making decisions about credit, placement, or future
                coursework.
              </p>
              <ul className="prose-list">
                {afterCheckingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                You can also use{" "}
                <Link href="/ap-score-calculators/">AP Score Tools calculators</Link>{" "}
                to understand how raw section performance may translate into an
                estimated AP score. Live calculators include{" "}
                {subjectCalculatorLinks.map((calculator, index) => (
                  <span key={calculator.href}>
                    <Link href={calculator.href}>{calculator.label}</Link>
                    {index < subjectCalculatorLinks.length - 2
                      ? ", "
                      : index === subjectCalculatorLinks.length - 2
                        ? ", and "
                        : ""}
                  </span>
                ))}
                .
              </p>
            </section>

            <section className="card prose-card" id="can-ap-score-tools-show">
              <h2>Can AP Score Tools Show My Official AP Scores?</h2>
              <p>
                No. AP Score Tools cannot access or display official AP score
                reports. Only College Board provides official AP scores.
              </p>
              <p>
                AP Score Tools provides free, unofficial AP score calculators
                and guides to help students estimate and understand scores.
                Calculator results are estimates only and may vary by year.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/ap-score-calculators/">
                  Browse AP Score Calculators
                </Link>
              </div>
            </section>

            <section className="card prose-card" id="faq">
              <h2>Frequently Asked Questions About Checking AP Scores</h2>
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
              <a href="#quick-steps">Quick steps</a>
              <a href="#before-release">Before release day</a>
              <a href="#where">Where to check</a>
              <a href="#what-time">Release timing</a>
              <a href="#not-showing">Scores not showing</a>
              <a href="#download">Download report</a>
              <a href="#college-sends">College score sends</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="article-sidebar-card">
              <strong>Related AP Score Tools</strong>
              <Link href="/when-do-ap-scores-come-out/">
                When Do AP Scores Come Out?
              </Link>
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
