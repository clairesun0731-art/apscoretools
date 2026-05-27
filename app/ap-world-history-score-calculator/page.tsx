import type { Metadata } from "next";
import WeightedCalculatorPage from "@/components/WeightedCalculatorPage";
import { weightedScoreCalculatorConfigs } from "@/lib/scoreCalculatorConfigs";
import {
  createWeightedCalculatorMetadata,
  weightedCalculatorPageData,
} from "@/lib/weightedCalculatorPageData";

const data = weightedCalculatorPageData.ap_world_history;
const config = weightedScoreCalculatorConfigs.ap_world_history;

export const metadata: Metadata = createWeightedCalculatorMetadata(
  data,
  "AP World History Score Calculator | APWH Score Estimate",
);

export default function ApWorldHistoryScoreCalculatorPage() {
  return <WeightedCalculatorPage config={config} data={data} />;
}
