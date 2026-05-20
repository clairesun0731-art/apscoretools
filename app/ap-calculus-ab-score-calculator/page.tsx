import type { Metadata } from "next";
import ComingSoonCalculatorPage from "@/components/ComingSoonCalculatorPage";

export const metadata: Metadata = {
  title: {
    absolute:
      "AP Calculus AB Score Calculator 2026 | AP Calc AB Calculator Coming Soon",
  },
  description:
    "The AP Calculus AB score calculator is coming soon to AP Score Tools. Explore planned AP score calculators and try the live APES calculator.",
  alternates: {
    canonical: "https://www.apscoretools.com/ap-calculus-ab-score-calculator/",
  },
};

export default function ApCalculusAbScoreCalculatorPage() {
  return (
    <ComingSoonCalculatorPage
      description="The AP Calculus AB score calculator is coming soon to AP Score Tools."
      keywords={[
        "AP Calc AB score calculator",
        "AP Calculus AB score calculator",
        "AP Calculus AB score predictor",
        "AP Calc score calculator",
      ]}
      name="AP Calculus AB Score Calculator 2026"
      url="https://www.apscoretools.com/ap-calculus-ab-score-calculator/"
    />
  );
}
