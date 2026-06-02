import type { Metadata } from "next";
import ComingSoonCalculatorPage from "@/components/ComingSoonCalculatorPage";

export const metadata: Metadata = {
  title: {
    absolute: "APUSH Score Calculator 2026 | AP US History Calculator Coming Soon",
  },
  description:
    "The APUSH score calculator is coming soon to AP Score Tools. Explore planned AP score calculators and try the live APES calculator.",
  alternates: {
    canonical: "https://www.apscoretools.com/apush-score-calculator/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ApushScoreCalculatorPage() {
  return (
    <ComingSoonCalculatorPage
      description="The APUSH score calculator is coming soon to AP Score Tools."
      keywords={[
        "APUSH score calculator",
        "AP US History score calculator",
        "APUSH score predictor",
      ]}
      name="APUSH Score Calculator 2026"
      url="https://www.apscoretools.com/apush-score-calculator/"
    />
  );
}
