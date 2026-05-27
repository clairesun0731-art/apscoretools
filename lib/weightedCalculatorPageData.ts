import type { Metadata } from "next";
import type { WeightedCalculatorSubject } from "@/lib/scoreCalculatorConfigs";

export type CalculatorFaq = {
  answer: string;
  question: string;
};

export type RelatedCalculatorLink = {
  href: string;
  label: string;
};

export type WeightedCalculatorPageData = {
  benefitBreakdown: string;
  description: string;
  examName: string;
  faqs: CalculatorFaq[];
  howItWorks: string[];
  intro: string;
  keywords: string[];
  relatedLinks: RelatedCalculatorLink[];
  sectionIntro: string;
  subject: WeightedCalculatorSubject;
  title: string;
  url: string;
};

const commonRelatedLinks: RelatedCalculatorLink[] = [
  {
    href: "/ap-environmental-science-score-calculator/",
    label: "AP Environmental Science Score Calculator",
  },
  {
    href: "/ap-chemistry-score-calculator/",
    label: "AP Chemistry Score Calculator",
  },
  {
    href: "/ap-human-geography-score-calculator/",
    label: "AP Human Geography Score Calculator",
  },
  {
    href: "/ap-macroeconomics-score-calculator/",
    label: "AP Macroeconomics Score Calculator",
  },
  {
    href: "/ap-world-history-score-calculator/",
    label: "AP World History Score Calculator",
  },
];

export const weightedCalculatorPageData: Record<
  WeightedCalculatorSubject,
  WeightedCalculatorPageData
> = {
  ap_human_geography: {
    benefitBreakdown: "MCQ + FRQ breakdown",
    description:
      "Use this free AP Human Geography score calculator to estimate your APHUG score from MCQ and FRQ inputs. Unofficial AP score estimate only.",
    examName: "AP Human Geography",
    faqs: [
      {
        question: "Is this AP Human Geography score calculator official?",
        answer:
          "No. AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board. Results are estimates only.",
      },
      {
        question: "How does the AP Human Geography calculator estimate my score?",
        answer:
          "It scales your multiple-choice raw score to 50 points, scales your FRQ raw score to 50 points, then maps the composite score to estimated AP score bands.",
      },
      {
        question: "What is a good APHUG calculator score?",
        answer:
          "In this estimated model, a composite score of 50 or higher is in the predicted 3 range, 65 or higher is in the predicted 4 range, and 80 or higher is in the predicted 5 range.",
      },
      {
        question: "Can AP Human Geography score cutoffs change?",
        answer:
          "Yes. Official AP score conversions can vary by year based on exam difficulty and official scoring decisions.",
      },
    ],
    howItWorks: [
      "This AP Human Geography score calculator uses a simple estimated composite model out of 100 points. Multiple choice contributes up to 50 points, and free response contributes up to 50 points.",
      "MCQ scaled score = (MCQ raw score / 60) x 50. FRQ scaled score = (FRQ raw score / 21) x 50. The two section scores are added and mapped to estimated AP score bands.",
    ],
    intro:
      "Use this AP Human Geography score calculator to estimate your APHUG score from multiple-choice and free-response raw scores. Enter your raw scores to see an unofficial AP score estimate from 1 to 5.",
    keywords: [
      "AP Human Geography Score Calculator",
      "AP HUG Score Calculator",
      "APHUG Calculator",
      "AP Human Geography Score Estimate",
    ],
    relatedLinks: commonRelatedLinks.filter(
      (link) => link.href !== "/ap-human-geography-score-calculator/",
    ),
    sectionIntro:
      "AP Human Geography has multiple-choice and free-response sections. This calculator uses an approximate 50/50 weighting model.",
    subject: "ap_human_geography",
    title: "AP Human Geography Score Calculator",
    url: "https://www.apscoretools.com/ap-human-geography-score-calculator/",
  },
  ap_macroeconomics: {
    benefitBreakdown: "MCQ + FRQ breakdown",
    description:
      "Estimate your AP Macroeconomics score with this free AP Macro score calculator. Enter your MCQ and FRQ scores to get an unofficial AP score estimate.",
    examName: "AP Macroeconomics",
    faqs: [
      {
        question: "Is this AP Macroeconomics score calculator official?",
        answer:
          "No. This calculator is unofficial and is not affiliated with or endorsed by the College Board.",
      },
      {
        question: "How is the AP Macro composite score estimated?",
        answer:
          "The calculator scales MCQ performance to 66 points and FRQ performance to 34 points, then estimates a composite score out of 100.",
      },
      {
        question: "What score do I need for a 5 on AP Macroeconomics?",
        answer:
          "In this estimated model, the predicted AP Macro 5 range starts at a composite score of 77 out of 100. Official cutoffs can vary.",
      },
      {
        question: "Can I use this AP Macro calculator after the exam?",
        answer:
          "Yes. You can enter your best estimate of your MCQ and FRQ raw scores to get an unofficial score estimate before official results are released.",
      },
    ],
    howItWorks: [
      "This AP Macroeconomics score calculator estimates a composite score out of 100 using approximate section weights. Multiple choice contributes up to 66 points, and free response contributes up to 34 points.",
      "MCQ scaled score = (MCQ raw score / 60) x 66. FRQ scaled score = (FRQ raw score / 20) x 34. The total is mapped to estimated score ranges from 1 to 5.",
    ],
    intro:
      "Use this AP Macroeconomics score calculator to estimate your AP Macro score from MCQ and FRQ raw scores. The result is an unofficial estimate, not an official AP score prediction.",
    keywords: [
      "AP Macroeconomics Score Calculator",
      "AP Macro Score Calculator",
      "AP Macro Calculator",
      "AP Macro Score Estimate",
    ],
    relatedLinks: commonRelatedLinks.filter(
      (link) => link.href !== "/ap-macroeconomics-score-calculator/",
    ),
    sectionIntro:
      "AP Macroeconomics includes a multiple-choice section and a free-response section. This calculator uses an approximate 66% MCQ and 34% FRQ model.",
    subject: "ap_macroeconomics",
    title: "AP Macroeconomics Score Calculator",
    url: "https://www.apscoretools.com/ap-macroeconomics-score-calculator/",
  },
  ap_world_history: {
    benefitBreakdown: "MCQ + SAQ + DBQ + LEQ breakdown",
    description:
      "Use this AP World History score calculator to estimate your APWH score from multiple-choice and free-response inputs. Results are unofficial estimates.",
    examName: "AP World History",
    faqs: [
      {
        question: "Is this AP World History score calculator official?",
        answer:
          "No. AP Score Tools is unofficial and is not affiliated with or endorsed by the College Board. Calculator results are estimates only.",
      },
      {
        question: "Why does AP World History use four inputs?",
        answer:
          "AP World History includes multiple-choice, short-answer, document-based question, and long essay question components, so this calculator estimates each part separately.",
      },
      {
        question: "What AP World score is usually passing?",
        answer:
          "A 3 is commonly treated as a passing AP score, though college credit policies vary. In this estimated model, a predicted 3 starts at a composite score of 45 out of 100.",
      },
      {
        question: "Can AP World History score ranges change by year?",
        answer:
          "Yes. Official AP World History score conversions can vary by year and are determined through official scoring processes.",
      },
    ],
    howItWorks: [
      "This AP World History score calculator estimates a composite score out of 100 by scaling each section separately. MCQ contributes up to 40 points, SAQ up to 20, DBQ up to 25, and LEQ up to 15.",
      "Each section is scaled from its raw maximum to its approximate weighted contribution. The scaled section scores are added and mapped to estimated AP score bands from 1 to 5.",
    ],
    intro:
      "Use this AP World History score calculator to estimate your APWH score from MCQ, SAQ, DBQ, and LEQ inputs. Results are unofficial estimates based on approximate score bands.",
    keywords: [
      "AP World History Score Calculator",
      "AP World Score Calculator",
      "APWH Score Calculator",
      "AP World Score Estimate",
    ],
    relatedLinks: commonRelatedLinks.filter(
      (link) => link.href !== "/ap-world-history-score-calculator/",
    ),
    sectionIntro:
      "AP World History has multiple exam components, so this calculator uses separate approximate weights for MCQ, SAQ, DBQ, and LEQ scores.",
    subject: "ap_world_history",
    title: "AP World History Score Calculator",
    url: "https://www.apscoretools.com/ap-world-history-score-calculator/",
  },
};

export function createWeightedCalculatorMetadata(
  data: WeightedCalculatorPageData,
  title: string,
): Metadata {
  return {
    title: {
      absolute: title,
    },
    description: data.description,
    alternates: {
      canonical: data.url,
    },
    openGraph: {
      title,
      description: data.description,
      url: data.url,
      siteName: "AP Score Tools",
      type: "website",
    },
  };
}
