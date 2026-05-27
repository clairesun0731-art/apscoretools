import type { Metadata } from "next";
import WeightedCalculatorPage from "@/components/WeightedCalculatorPage";
import { weightedScoreCalculatorConfigs } from "@/lib/scoreCalculatorConfigs";
import {
  createWeightedCalculatorMetadata,
  weightedCalculatorPageData,
} from "@/lib/weightedCalculatorPageData";

const data = weightedCalculatorPageData.ap_macroeconomics;
const config = weightedScoreCalculatorConfigs.ap_macroeconomics;

export const metadata: Metadata = createWeightedCalculatorMetadata(
  data,
  "AP Macroeconomics Score Calculator | AP Macro Score Estimate",
);

export default function ApMacroeconomicsScoreCalculatorPage() {
  return <WeightedCalculatorPage config={config} data={data} />;
}
