import type { Metadata } from "next";
import BetaCalculatorPage from "@/components/BetaCalculatorPage";

const title = "AP Human Geography Score Calculator";
const description =
  "The AP Human Geography score calculator is currently in beta while AP Score Tools reviews a subject-specific APHUG scoring model.";
const url = "https://www.apscoretools.com/ap-human-geography-score-calculator/";

export const metadata: Metadata = {
  title: {
    absolute: "AP Human Geography Score Calculator | Beta APHUG Tool",
  },
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "AP Human Geography Score Calculator | Beta APHUG Tool",
    description,
    url,
    siteName: "AP Score Tools",
    type: "website",
  },
};

export default function ApHumanGeographyScoreCalculatorPage() {
  return (
    <BetaCalculatorPage
      description={description}
      examName="AP Human Geography"
      examStructure={[
        "AP Human Geography includes a multiple-choice section and a free-response section.",
        "The free-response section asks students to apply geographic concepts, interpret data, and explain spatial patterns.",
        "Official score conversions can vary by year, so any future calculator result must be labeled as an estimate.",
      ]}
      keywords={[
        "ap hug score calculator",
        "aphug calculator",
        "ap human geography score calculator",
        "ap hug exam calculator",
      ]}
      title={title}
      url={url}
      willInclude={[
        "Subject-specific MCQ and FRQ inputs after the scoring model is reviewed.",
        "An estimated composite score with clear unofficial labeling.",
        "A simple explanation of how section performance affects the estimate.",
        "Links to verified live AP Score Tools calculators while this page remains in beta.",
      ]}
    />
  );
}
