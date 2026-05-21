import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | AP Score Tools",
  },
  description:
    "Read the AP Score Tools privacy policy to learn how this website handles basic usage data, cookies, analytics, and advertising.",
  alternates: {
    canonical: "https://www.apscoretools.com/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page">
      <section className="container hero">
        <div>
          <span className="eyebrow">Policy</span>
          <h1>Privacy Policy</h1>
          <p className="lead">
            AP Score Tools provides free educational calculators and
            informational content. This policy explains how basic website data,
            cookies, analytics, and advertising may be handled.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <article className="card prose-card">
            <h2>Introduction</h2>
            <p>
              AP Score Tools is an unofficial educational website. We aim to
              provide helpful AP score calculator tools and study-related
              information for students.
            </p>
            <p>
              AP Score Tools is not affiliated with or endorsed by the College
              Board. AP, Advanced Placement, and related exam names are
              trademarks of their respective owners.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Information We Collect</h2>
            <p>
              We do not ask students to create accounts to use the calculators.
              The calculator inputs are processed in your browser and are used
              to show an estimated score result.
            </p>
            <p>
              We may collect basic, non-personal usage information such as pages
              visited, browser type, device type, and general interaction data
              to understand website performance and improve the site.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Cookies and Analytics</h2>
            <p>
              We may use cookies or analytics tools to understand website usage,
              improve content, and monitor technical performance. You can
              control cookies through your browser settings.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Cookie Consent</h2>
            <p>
              AP Score Tools uses necessary cookies or local storage to remember
              your cookie preferences. If you choose to accept analytics
              cookies, we may use Google Analytics to understand how visitors
              use the website and improve our calculators and content. If you
              reject analytics cookies, Google Analytics will not be loaded for
              your visit.
            </p>
            <p>
              You can change your cookie preference by clearing your browser
              storage or using the cookie preferences link if available on the
              website.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Advertising</h2>
            <p>
              If advertising is enabled in the future, third-party vendors,
              including Google, may use cookies to serve ads based on a user&apos;s
              prior visits to this website or other websites.
            </p>
            <p>
              Google and third-party vendors may use cookies to serve ads based
              on a user&apos;s prior visits to this website or other websites. Users
              may opt out of personalized advertising by visiting Google Ads
              Settings.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Third-Party Links</h2>
            <p>
              AP Score Tools may link to third-party websites, including
              official AP or College Board resources. We are not responsible for
              the privacy practices or content of third-party websites.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Children&apos;s Privacy</h2>
            <p>
              AP Score Tools is intended as an educational resource. We do not
              knowingly collect personal information from children. If you
              believe personal information has been provided to us, contact us
              using the information on this website.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Data Security</h2>
            <p>
              We use reasonable practices to keep the site secure, but no
              website or internet transmission can be guaranteed to be completely
              secure.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page.
            </p>
          </article>

          <article className="card prose-card">
            <h2>Contact</h2>
            <p>
              For privacy questions, contact us through the contact information
              provided on this website.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
