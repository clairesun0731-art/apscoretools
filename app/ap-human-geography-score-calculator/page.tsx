import type { Metadata } from "next";
import WeightedCalculatorPage from "@/components/WeightedCalculatorPage";
import { weightedScoreCalculatorConfigs } from "@/lib/scoreCalculatorConfigs";
import {
  createWeightedCalculatorMetadata,
  weightedCalculatorPageData,
} from "@/lib/weightedCalculatorPageData";

const data = weightedCalculatorPageData.ap_human_geography;
const config = weightedScoreCalculatorConfigs.ap_human_geography;

export const metadata: Metadata = createWeightedCalculatorMetadata(
  data,
  "AP Human Geography Score Calculator | APHUG Score Estimate",
);

export default function ApHumanGeographyScoreCalculatorPage() {
  return <WeightedCalculatorPage config={config} data={data} />;
}
