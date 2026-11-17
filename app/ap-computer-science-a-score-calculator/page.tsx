import type { Metadata } from "next";
import SubjectCalculatorPage from "@/components/SubjectCalculatorPage";
import { newCalculatorPages } from "@/lib/newCalculatorPages";

const page = newCalculatorPages.ap_computer_science_a;
export const metadata: Metadata = {
  title: { absolute: page.title }, description: page.description,
  alternates: { canonical: page.url },
  openGraph: { title: page.title, description: page.description, url: page.url, siteName: "AP Score Tools", type: "website" },
};
export default function CalculatorPage() { return <SubjectCalculatorPage {...page} />; }
