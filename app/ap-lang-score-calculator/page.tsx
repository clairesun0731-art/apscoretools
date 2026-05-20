import type { Metadata } from "next";
import ComingSoonCalculatorPage from "@/components/ComingSoonCalculatorPage";

export const metadata: Metadata = {
  title: {
    absolute:
      "AP Lang Score Calculator 2026 | AP English Language Calculator Coming Soon",
  },
  description:
    "The AP Lang score calculator is coming soon to AP Score Tools. Explore planned AP score calculators and try the live APES calculator.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-lang-score-calculator/",
  },
};

export default function ApLangScoreCalculatorPage() {
  return (
    <ComingSoonCalculatorPage
      description="The AP Lang score calculator is coming soon to AP Score Tools."
      keywords={[
        "AP Lang score calculator",
        "AP English Language score calculator",
        "AP English Language score predictor",
      ]}
      name="AP Lang Score Calculator 2026"
      url="https://www.apscoretools.com/ap-lang-score-calculator/"
    />
  );
}
