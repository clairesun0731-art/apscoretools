import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { practiceGuides } from "@/lib/practiceGuides";

type Guide = (typeof practiceGuides)[number];
const origin = "https://www.apscoretools.com";

export function scoringMetadata(guide: Guide): Metadata {
  const url = origin + guide.href;
  return {
    title: guide.title, description: guide.description, alternates: { canonical: url },
    openGraph: { type: "article", title: guide.title, description: guide.description, url, siteName: "AP Score Tools" },
  };
}

export default function ScoringArticle({ guide, quickAnswer, intro, sections, children }: {
  guide: Guide; quickAnswer: string; intro: ReactNode; sections: {id: string; title: string}[]; children: ReactNode;
}) {
  return (
    <main className="page guide-article-page">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, url: origin + guide.href, author: { "@type": "Organization", name: "AP Score Tools" } }} />
      <section className="container hero">
        <div>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/guides/">AP Score Guides</Link>
            <Link href="/guides/ap-scoring-guides/">AP Scoring Guides</Link>
            <span>{guide.subject}</span>
          </nav>
          <h1>{guide.title}</h1>
          <div className="answer-box scoring-quick-answer"><strong>Quick Answer</strong><p>{quickAnswer}</p></div>
        </div>
      </section>
      <section className="section">
        <div className="container article-layout">
          <article className="article-content"><div className="prose-card">{intro}</div>{children}</article>
          <aside className="article-sidebar"><nav className="article-sidebar-card" aria-label="Article contents">
            <strong>On this page</strong>
            {sections.map(section => <a key={section.id} href={"#" + section.id}>{section.title}</a>)}
            <Link href="/guides/ap-scoring-guides/">Browse AP scoring guides</Link>
          </nav></aside>
        </div>
      </section>
    </main>
  );
}
