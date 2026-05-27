import type { Metadata } from "next";
import BetaCalculatorPage from "@/components/BetaCalculatorPage";

const title = "AP World History Score Calculator";
const description =
  "The AP World History score calculator is currently in beta while AP Score Tools reviews a subject-specific APWH scoring model.";
const url = "https://www.apscoretools.com/ap-world-history-score-calculator/";

export const metadata: Metadata = {
  title: {
    absolute: "AP World History Score Calculator | Beta APWH Tool",
  },
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "AP World History Score Calculator | Beta APWH Tool",
    description,
    url,
    siteName: "AP Score Tools",
    type: "website",
  },
};

export default function ApWorldHistoryScoreCalculatorPage() {
  return (
    <BetaCalculatorPage
      description={description}
      examName="AP World History"
      examStructure={[
        "AP World History includes multiple-choice questions, short-answer questions, a document-based question, and a long essay question.",
        "The written sections measure evidence use, historical reasoning, contextualization, and argument development.",
        "Official score conversions can vary by year, so any future calculator result must be labeled as an estimate.",
      ]}
      keywords={[
        "ap world score calculator",
        "ap world history score calculator",
        "apwh score calculator",
        "ap world score calculator 2026",
      ]}
      title={title}
      url={url}
      willInclude={[
        "Separate inputs for MCQ, SAQ, DBQ, and LEQ performance after the scoring model is reviewed.",
        "An estimated composite score with clear unofficial labeling.",
        "A section-by-section breakdown that explains how written responses affect the estimate.",
        "Links to verified live AP Score Tools calculators while this page remains in beta.",
      ]}
    />
  );
}
