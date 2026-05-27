import type { Metadata } from "next";
import BetaCalculatorPage from "@/components/BetaCalculatorPage";

const title = "AP Macroeconomics Score Calculator";
const description =
  "The AP Macroeconomics score calculator is currently in beta while AP Score Tools reviews a subject-specific AP Macro scoring model.";
const url = "https://www.apscoretools.com/ap-macroeconomics-score-calculator/";

export const metadata: Metadata = {
  title: {
    absolute: "AP Macroeconomics Score Calculator | Beta AP Macro Tool",
  },
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "AP Macroeconomics Score Calculator | Beta AP Macro Tool",
    description,
    url,
    siteName: "AP Score Tools",
    type: "website",
  },
};

export default function ApMacroeconomicsScoreCalculatorPage() {
  return (
    <BetaCalculatorPage
      description={description}
      examName="AP Macroeconomics"
      examStructure={[
        "AP Macroeconomics includes a multiple-choice section and a free-response section.",
        "Free-response questions may ask students to draw, label, and explain economic graphs and policy effects.",
        "Official score conversions can vary by year, so any future calculator result must be labeled as an estimate.",
      ]}
      keywords={[
        "ap macro score calculator",
        "ap macroeconomics score calculator",
        "ap macro calculator",
        "ap macro exam calculator",
      ]}
      title={title}
      url={url}
      willInclude={[
        "Subject-specific MCQ and FRQ inputs after the scoring model is reviewed.",
        "An estimated AP score range with clear unofficial labeling.",
        "A breakdown of how multiple-choice and free-response performance affect the estimate.",
        "Links to verified live AP Score Tools calculators while this page remains in beta.",
      ]}
    />
  );
}
