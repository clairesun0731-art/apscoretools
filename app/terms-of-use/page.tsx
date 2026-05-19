import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Use | AP Score Tools",
  },
  description:
    "Read the AP Score Tools terms of use, including educational use, score estimate disclaimers, and unofficial AP calculator limitations.",
  alternates: {
    canonical: "https://www.apscoretools.com/terms-of-use/",
  },
};

export default function TermsOfUsePage() {
  return (
    <main className="page">
      <section className="container hero">
        <div>
          <span className="eyebrow">Terms</span>
          <h1>Terms of Use</h1>
          <p className="lead">
            These terms explain how AP Score Tools may be used and clarify the
            limits of unofficial AP score calculator estimates.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Acceptance of Terms</h2>
            <p>
              By using AP Score Tools, you agree to these Terms of Use. If you
              do not agree, you should not use the website.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Educational Use Only</h2>
            <p>
              AP Score Tools is provided for educational and informational use.
              The calculators are intended to help students explore possible
              score scenarios and understand AP exam structures.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Unofficial Score Estimates</h2>
            <p>
              The calculators provide estimates only and should not be treated
              as official score predictions, admissions advice, or college
              credit guarantees. Official AP scores and score cutoffs may vary
              by year.
            </p>
          </article>

          <article className="card prose-card">
            <h2>No College Board Affiliation</h2>
            <p>
              AP Score Tools is not affiliated with or endorsed by the College
              Board. AP, Advanced Placement, and related exam names are
              trademarks of their respective owners.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Intellectual Property</h2>
            <p>
              The AP Score Tools website design, calculator presentation, and
              original written content are owned by AP Score Tools unless
              otherwise stated. You may use the site for personal educational
              purposes.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Third-Party Links</h2>
            <p>
              The site may link to third-party websites for reference or
              convenience. AP Score Tools is not responsible for third-party
              content, policies, or practices.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Limitation of Liability</h2>
            <p>
              AP Score Tools is provided as-is. We are not liable for decisions
              made based on calculator estimates or informational content on the
              site.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms of Use from time to time. Changes will
              be posted on this page.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Contact</h2>
            <p>
              For questions about these terms, contact us through the contact
              information provided on this website.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
