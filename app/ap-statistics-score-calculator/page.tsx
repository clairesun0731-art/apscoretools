import type { Metadata } from "next";
import SubjectCalculatorPage from "@/components/SubjectCalculatorPage";
import { batchCalculatorPages } from "@/lib/batchCalculatorPages";

const page = batchCalculatorPages.ap_statistics;

export const metadata: Metadata = {
  title: {
    absolute: page.title,
  },
  description: page.description,
  alternates: {
    canonical: page.url,
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.url,
    siteName: "AP Score Tools",
    type: "website",
  },
};

export default function ApStatisticsScoreCalculatorPage() {
  return <SubjectCalculatorPage {...page} />;
}
