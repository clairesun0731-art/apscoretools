import type {
  CalculatorFaq,
  RelatedCalculator,
  SubjectCalculatorPageProps,
} from "@/components/SubjectCalculatorPage";
import type { GenericCalculatorProps } from "@/components/GenericScoreCalculator";

type PageConfig = Omit<SubjectCalculatorPageProps, "calculator"> & {
  calculator: GenericCalculatorProps;
  description: string;
  title: string;
};

const goodScoreCopy = (subject: string) => [
  "A 3 is commonly considered a qualified AP score.",
  `A 4 or 5 may be stronger for college credit or placement, depending on the college, major, and ${subject} policy.`,
  "College credit policies vary by school. AP Score Tools does not determine college credit, placement, or official score conversions.",
];

const calculusBcRelated: RelatedCalculator[] = [
  {
    href: "/ap-calculus-ab-score-calculator/",
    status: "live",
    title: "AP Calculus AB Score Calculator",
  },
  {
    href: "/ap-statistics-score-calculator/",
    status: "live",
    title: "AP Statistics Score Calculator",
  },
];

const statisticsRelated: RelatedCalculator[] = [
  {
    href: "/ap-calculus-ab-score-calculator/",
    status: "live",
    title: "AP Calculus AB Score Calculator",
  },
  {
    href: "/ap-calculus-bc-score-calculator/",
    status: "live",
    title: "AP Calculus BC Score Calculator",
  },
];

const govRelated: RelatedCalculator[] = [
  {
    href: "/ap-us-history-score-calculator/",
    status: "live",
    title: "AP U.S. History Score Calculator",
  },
  {
    href: "/ap-psychology-score-calculator/",
    status: "live",
    title: "AP Psychology Score Calculator",
  },
  {
    href: "/ap-world-history-score-calculator/",
    status: "live",
    title: "AP World History Score Calculator",
  },
  {
    status: "coming-soon",
    title: "AP Comparative Government Score Calculator",
  },
];

const psychologyRelated: RelatedCalculator[] = [
  {
    href: "/ap-us-government-score-calculator/",
    status: "live",
    title: "AP U.S. Government Score Calculator",
  },
  {
    href: "/ap-human-geography-score-calculator/",
    status: "live",
    title: "AP Human Geography Score Calculator",
  },
  {
    href: "/ap-us-history-score-calculator/",
    status: "live",
    title: "AP U.S. History Score Calculator",
  },
  {
    href: "/ap-world-history-score-calculator/",
    status: "live",
    title: "AP World History Score Calculator",
  },
];

const englishLanguageRelated: RelatedCalculator[] = [
  {
    status: "coming-soon",
    title: "AP English Literature Score Calculator",
  },
  {
    href: "/ap-us-history-score-calculator/",
    status: "live",
    title: "AP U.S. History Score Calculator",
  },
  {
    href: "/ap-world-history-score-calculator/",
    status: "live",
    title: "AP World History Score Calculator",
  },
];

function defaultFaq({
  calculatorName,
  compositeForFive,
  exactName,
  frqAnswer,
  mcqAnswer,
  scoringAnswer,
}: {
  calculatorName: string;
  compositeForFive: string;
  exactName: string;
  frqAnswer: string;
  mcqAnswer: string;
  scoringAnswer: string;
}): CalculatorFaq[] {
  return [
    {
      question: `Is this ${calculatorName} official?`,
      answer:
        "No. It is an unofficial AP Score Tools estimator and is not affiliated with or endorsed by the College Board.",
    },
    {
      question: `How is ${exactName} scored?`,
      answer: scoringAnswer,
    },
    {
      question: `How many multiple-choice questions are on ${exactName}?`,
      answer: mcqAnswer,
    },
    {
      question: `How many free-response questions are on ${exactName}?`,
      answer: frqAnswer,
    },
    {
      question: `What composite score do I need for a 5 on ${exactName}?`,
      answer: compositeForFive,
    },
    {
      question: "Can this calculator predict my exact AP score?",
      answer:
        "No. It provides an approximate score estimate. Official AP score conversions can vary by year and exam form.",
    },
    {
      question: "What is the difference between raw score and composite score?",
      answer:
        "Raw score means points earned within a section. Composite score is the weighted total after section scores are converted and combined.",
    },
  ];
}

export const batchCalculatorPages: Record<string, PageConfig> = {
  ap_calculus_bc: {
    calculatorTitle: "AP Calculus BC Score Calculator",
    chartTitle: "Estimated AP Calculus BC Score Chart",
    description:
      "Use this free, unofficial AP Calculus BC Score Calculator to estimate your AP Calc BC score from MCQ and FRQ raw points. Review a simple composite score breakdown.",
    heroEyebrow: "AP Calc BC score predictor",
    h1: "AP Calculus BC Score Calculator",
    jsonLdName: "AP Calculus BC Score Calculator",
    keywords: [
      "AP Calc BC Score Calculator",
      "AP Calculus BC Calculator",
      "AP Calc BC Calculator",
      "AP Calculus BC Score Predictor",
      "AP Calc BC Score Predictor",
      "AP Calculus BC FRQ Calculator",
    ],
    relatedCalculators: calculusBcRelated,
    relatedIntro:
      "Compare AP Calculus BC estimates with other live math calculators.",
    subtitle:
      "Estimate your AP Calculus BC score from multiple-choice and free-response raw scores. This unofficial AP Calc BC score calculator converts your MCQ and FRQ points into an estimated composite score and AP score.",
    title: "AP Calculus BC Score Calculator | AP Calc BC Score Predictor",
    url: "https://www.apscoretools.com/ap-calculus-bc-score-calculator/",
    calculator: {
      ariaLabel: "AP Calculus BC score calculator",
      calculatorName: "ap_calculus_bc_score_calculator",
      compositeMax: 108,
      defaultValues: {
        frq1: 6,
        frq2: 6,
        frq3: 6,
        frq4: 6,
        frq5: 6,
        frq6: 6,
        mcq_part_a: 24,
        mcq_part_b: 12,
      },
      groups: [
        {
          fields: [
            {
              helper: "No-calculator questions correct out of 30",
              id: "mcq_part_a",
              label: "MCQ Part A No Calculator",
              max: 30,
              min: 0,
            },
            {
              helper: "Calculator-allowed questions correct out of 15",
              id: "mcq_part_b",
              label: "MCQ Part B Calculator",
              max: 15,
              min: 0,
            },
          ],
          heading: "Multiple Choice",
          label: "Section I",
        },
        {
          fields: [1, 2, 3, 4, 5, 6].map((number) => ({
            helper: "Raw score out of 9",
            id: `frq${number}`,
            label: `FRQ ${number}`,
            max: 9,
            min: 0,
          })),
          heading: "Free Response",
          label: "Section II",
        },
      ],
      heading: "Enter your AP Calculus BC section scores",
      scoreBands: [
        { max: 108, min: 65, score: 5 },
        { max: 64, min: 54, score: 4 },
        { max: 53, min: 42, score: 3 },
        { max: 41, min: 31, score: 2 },
        { max: 30, min: 0, score: 1 },
      ],
      scoreChip: "108-point composite",
      sections: [
        {
          fieldIds: ["mcq_part_a", "mcq_part_b"],
          id: "mcq",
          rawLabel: "MCQ Raw Score",
          rawMax: 45,
          weightedLabel: "MCQ Scaled Score",
          weightedMax: 54,
        },
        {
          fieldIds: ["frq1", "frq2", "frq3", "frq4", "frq5", "frq6"],
          id: "frq",
          rawLabel: "FRQ Raw Score",
          rawMax: 54,
          weightedLabel: "FRQ Score",
          weightedMax: 54,
        },
      ],
      subject: "ap_calculus_bc",
    },
    examFormat: [
      {
        detail: "45 multiple-choice questions with calculator and no-calculator parts",
        section: "Multiple Choice",
        weight: "50%",
      },
      {
        detail: "6 free-response questions with calculator and no-calculator parts",
        section: "Free Response",
        weight: "50%",
      },
    ],
    examIntro: [
      "AP Calculus BC has 45 multiple-choice questions and 6 free-response questions.",
      "AP Calculus BC includes calculator and no-calculator parts and is a hybrid digital exam.",
    ],
    faqItems: defaultFaq({
      calculatorName: "AP Calculus BC score calculator",
      compositeForFive:
        "In this estimator, the estimated 5 range starts at 65 out of 108.",
      exactName: "AP Calculus BC",
      frqAnswer: "AP Calculus BC has 6 free-response questions.",
      mcqAnswer: "AP Calculus BC has 45 multiple-choice questions.",
      scoringAnswer:
        "This calculator scales MCQ raw score to 54 points, adds FRQ raw points out of 54, and estimates a composite score out of 108.",
    }),
    goodScore: goodScoreCopy("AP Calculus BC"),
    howItWorks: [
      "MCQ raw score is the total of Part A and Part B, out of 45.",
      "This calculator multiplies MCQ raw score by 1.2 to estimate the MCQ scaled score out of 54.",
      "FRQ raw score is the total of FRQ 1-6 out of 54. The MCQ and FRQ values are added into an estimated composite score out of 108.",
    ],
  },
  ap_statistics: {
    calculatorTitle: "AP Statistics Score Calculator",
    chartTitle: "Estimated AP Statistics Score Chart",
    description:
      "Use this free, unofficial AP Statistics Score Calculator to estimate your AP Stats score from MCQ and FRQ raw points. Review a simple composite score breakdown.",
    heroEyebrow: "AP Stats score predictor",
    h1: "AP Statistics Score Calculator",
    jsonLdName: "AP Statistics Score Calculator",
    keywords: [
      "AP Stats Score Calculator",
      "AP Statistics Calculator",
      "AP Stats Calculator",
      "AP Statistics Score Predictor",
      "AP Stats Score Predictor",
      "AP Statistics FRQ Score Calculator",
    ],
    relatedCalculators: statisticsRelated,
    relatedIntro:
      "Compare AP Statistics estimates with other live math calculators.",
    subtitle:
      "Estimate your AP Statistics score from multiple-choice and free-response raw scores. This unofficial AP Stats score calculator converts your MCQ and FRQ points into an estimated composite score and AP score.",
    title: "AP Statistics Score Calculator | AP Stats Score Predictor",
    url: "https://www.apscoretools.com/ap-statistics-score-calculator/",
    calculator: {
      ariaLabel: "AP Statistics score calculator",
      calculatorName: "ap_statistics_score_calculator",
      compositeMax: 100,
      defaultValues: {
        frq1: 3,
        frq2: 3,
        frq3: 3,
        frq4: 3,
        frq5: 3,
        frq6: 3,
        mcq: 28,
      },
      groups: [
        {
          fields: [
            {
              helper: "Correct answers out of 40",
              id: "mcq",
              label: "MCQ Correct Answers",
              max: 40,
              min: 0,
            },
          ],
          heading: "Multiple Choice",
          label: "Section I",
        },
        {
          fields: [1, 2, 3, 4, 5].map((number) => ({
            helper: "Raw score out of 4",
            id: `frq${number}`,
            label: `FRQ ${number}`,
            max: 4,
            min: 0,
          })).concat([
            {
              helper: "Raw score out of 4",
              id: "frq6",
              label: "FRQ 6 Investigative Task",
              max: 4,
              min: 0,
            },
          ]),
          heading: "Free Response",
          label: "Section II",
        },
      ],
      heading: "Enter your AP Statistics section scores",
      scoreBands: [
        { max: 100, min: 75, score: 5 },
        { max: 74, min: 60, score: 4 },
        { max: 59, min: 45, score: 3 },
        { max: 44, min: 35, score: 2 },
        { max: 34, min: 0, score: 1 },
      ],
      scoreChip: "100-point composite",
      sections: [
        {
          fieldIds: ["mcq"],
          id: "mcq",
          rawLabel: "MCQ Raw Score",
          rawMax: 40,
          weightedLabel: "MCQ Weighted Score",
          weightedMax: 50,
        },
        {
          fieldIds: ["frq1", "frq2", "frq3", "frq4", "frq5", "frq6"],
          id: "frq",
          rawLabel: "FRQ Raw Score",
          rawMax: 24,
          weightedLabel: "FRQ Weighted Score",
          weightedMax: 50,
        },
      ],
      subject: "ap_statistics",
    },
    examFormat: [
      {
        detail: "40 multiple-choice questions in the current format",
        section: "Multiple Choice",
        weight: "50%",
      },
      {
        detail: "6 free-response questions, including an investigative task",
        section: "Free Response",
        weight: "50%",
      },
    ],
    examIntro: [
      "AP Statistics currently has 40 multiple-choice questions and 6 free-response questions.",
      "The sixth FRQ is commonly treated as the investigative task. AP Statistics is a hybrid digital exam.",
      "College Board has announced future AP Statistics revisions, so this calculator stays focused on the current/2026 format.",
    ],
    faqItems: defaultFaq({
      calculatorName: "AP Statistics score calculator",
      compositeForFive:
        "In this estimator, the estimated 5 range starts at 75 out of 100.",
      exactName: "AP Statistics",
      frqAnswer: "AP Statistics currently has 6 free-response questions.",
      mcqAnswer: "AP Statistics currently has 40 multiple-choice questions.",
      scoringAnswer:
        "This calculator weights MCQ and FRQ performance equally, then estimates a composite score out of 100.",
    }),
    goodScore: goodScoreCopy("AP Statistics"),
    howItWorks: [
      "MCQ raw score is converted into a weighted score out of 50.",
      "FRQ 1-6 are added into a raw score out of 24 and converted into a weighted score out of 50.",
      "The MCQ and FRQ weighted scores are added into an estimated composite score out of 100.",
    ],
  },
  ap_us_government: {
    calculatorTitle: "AP U.S. Government Score Calculator",
    chartTitle: "Estimated AP U.S. Government Score Chart",
    description:
      "Use this free, unofficial AP U.S. Government Score Calculator to estimate your AP Gov score from MCQ and FRQ raw points. Review a simple composite score breakdown.",
    heroEyebrow: "AP Gov score predictor",
    h1: "AP U.S. Government Score Calculator",
    jsonLdName: "AP U.S. Government Score Calculator",
    keywords: [
      "AP Gov Score Calculator",
      "AP Government Score Calculator",
      "AP US Gov Calculator",
      "AP Gov Calculator",
      "AP Government Score Predictor",
      "AP Gov FRQ Calculator",
    ],
    relatedCalculators: govRelated,
    relatedIntro:
      "Compare AP Gov estimates with other live History and Social Science calculators.",
    subtitle:
      "Estimate your AP U.S. Government and Politics score from multiple-choice and free-response raw scores. This unofficial AP Gov score calculator converts your MCQ and FRQ points into an estimated composite score and AP score.",
    title: "AP U.S. Government Score Calculator | AP Gov Score Predictor",
    url: "https://www.apscoretools.com/ap-us-government-score-calculator/",
    calculator: {
      ariaLabel: "AP U.S. Government score calculator",
      calculatorName: "ap_us_government_score_calculator",
      compositeMax: 100,
      defaultValues: {
        frq1: 2,
        frq2: 3,
        frq3: 3,
        frq4: 4,
        mcq: 40,
      },
      groups: [
        {
          fields: [
            {
              helper: "Correct answers out of 55",
              id: "mcq",
              label: "MCQ Correct Answers",
              max: 55,
              min: 0,
            },
          ],
          heading: "Multiple Choice",
          label: "Section I",
        },
        {
          fields: [
            {
              helper: "Raw score out of 3",
              id: "frq1",
              label: "FRQ 1 Concept Application",
              max: 3,
              min: 0,
            },
            {
              helper: "Raw score out of 4",
              id: "frq2",
              label: "FRQ 2 Quantitative Analysis",
              max: 4,
              min: 0,
            },
            {
              helper: "Raw score out of 4",
              id: "frq3",
              label: "FRQ 3 SCOTUS Comparison",
              max: 4,
              min: 0,
            },
            {
              helper: "Raw score out of 6",
              id: "frq4",
              label: "FRQ 4 Argument Essay",
              max: 6,
              min: 0,
            },
          ],
          heading: "Free Response",
          label: "Section II",
        },
      ],
      heading: "Enter your AP U.S. Government section scores",
      scoreBands: [
        { max: 100, min: 80, score: 5 },
        { max: 79, min: 65, score: 4 },
        { max: 64, min: 50, score: 3 },
        { max: 49, min: 35, score: 2 },
        { max: 34, min: 0, score: 1 },
      ],
      scoreChip: "100-point composite",
      sections: [
        {
          fieldIds: ["mcq"],
          id: "mcq",
          rawLabel: "MCQ Raw Score",
          rawMax: 55,
          weightedLabel: "MCQ Weighted Score",
          weightedMax: 50,
        },
        {
          fieldIds: ["frq1", "frq2", "frq3", "frq4"],
          id: "frq",
          rawLabel: "FRQ Raw Score",
          rawMax: 17,
          weightedLabel: "FRQ Weighted Score",
          weightedMax: 50,
        },
      ],
      subject: "ap_us_government",
    },
    examFormat: [
      {
        detail: "55 multiple-choice questions",
        section: "Multiple Choice",
        weight: "50%",
      },
      {
        detail:
          "4 free-response questions: Concept Application, Quantitative Analysis, SCOTUS Comparison, and Argument Essay",
        section: "Free Response",
        weight: "50%",
      },
    ],
    examIntro: [
      "AP U.S. Government and Politics has 55 multiple-choice questions and 4 free-response questions.",
      "AP U.S. Government and Politics is a fully digital exam.",
    ],
    faqItems: defaultFaq({
      calculatorName: "AP Gov score calculator",
      compositeForFive:
        "In this estimator, the estimated 5 range starts at 80 out of 100.",
      exactName: "AP U.S. Government",
      frqAnswer:
        "AP U.S. Government and Politics has 4 free-response questions.",
      mcqAnswer:
        "AP U.S. Government and Politics has 55 multiple-choice questions.",
      scoringAnswer:
        "This calculator weights MCQ and FRQ performance equally, then estimates a composite score out of 100.",
    }),
    goodScore: goodScoreCopy("AP U.S. Government"),
    howItWorks: [
      "MCQ raw score is converted into a weighted score out of 50.",
      "FRQ raw score is the total from Concept Application, Quantitative Analysis, SCOTUS Comparison, and Argument Essay, out of 17.",
      "The MCQ and FRQ weighted scores are added into an estimated composite score out of 100.",
    ],
  },
  ap_psychology: {
    calculatorTitle: "AP Psychology Score Calculator",
    chartTitle: "Estimated AP Psychology Score Chart",
    description:
      "Use this free, unofficial AP Psychology Score Calculator to estimate your AP Psych score from MCQ and FRQ raw points. Review a simple composite score breakdown.",
    heroEyebrow: "AP Psych score predictor",
    h1: "AP Psychology Score Calculator",
    jsonLdName: "AP Psychology Score Calculator",
    keywords: [
      "AP Psych Score Calculator",
      "AP Psychology Calculator",
      "AP Psych Calculator",
      "AP Psychology Score Predictor",
      "AP Psych Score Predictor",
      "AP Psychology FRQ Calculator",
    ],
    relatedCalculators: psychologyRelated,
    relatedIntro:
      "Compare AP Psychology estimates with other live social science calculators.",
    subtitle:
      "Estimate your AP Psychology score from multiple-choice and free-response raw scores. This unofficial AP Psych score calculator converts your MCQ and FRQ points into an estimated composite score and AP score.",
    title: "AP Psychology Score Calculator | AP Psych Score Predictor",
    url: "https://www.apscoretools.com/ap-psychology-score-calculator/",
    calculator: {
      ariaLabel: "AP Psychology score calculator",
      calculatorName: "ap_psychology_score_calculator",
      compositeMax: 100,
      defaultValues: {
        frq1: 5,
        frq2: 5,
        mcq: 55,
      },
      groups: [
        {
          fields: [
            {
              helper: "Correct answers out of 75",
              id: "mcq",
              label: "MCQ Correct Answers",
              max: 75,
              min: 0,
            },
          ],
          heading: "Multiple Choice",
          label: "Section I",
        },
        {
          fields: [
            {
              helper: "Raw score out of 7",
              id: "frq1",
              label: "FRQ 1 Article Analysis Question",
              max: 7,
              min: 0,
            },
            {
              helper: "Raw score out of 7",
              id: "frq2",
              label: "FRQ 2 Evidence-Based Question",
              max: 7,
              min: 0,
            },
          ],
          heading: "Free Response",
          label: "Section II",
        },
      ],
      heading: "Enter your AP Psychology section scores",
      scoreBands: [
        { max: 100, min: 75, score: 5 },
        { max: 74, min: 60, score: 4 },
        { max: 59, min: 45, score: 3 },
        { max: 44, min: 35, score: 2 },
        { max: 34, min: 0, score: 1 },
      ],
      scoreChip: "100-point composite",
      sections: [
        {
          fieldIds: ["mcq"],
          id: "mcq",
          rawLabel: "MCQ Raw Score",
          rawMax: 75,
          weightedLabel: "MCQ Weighted Score",
          weightedMax: 66.7,
        },
        {
          fieldIds: ["frq1", "frq2"],
          id: "frq",
          rawLabel: "FRQ Raw Score",
          rawMax: 14,
          weightedLabel: "FRQ Weighted Score",
          weightedMax: 33.3,
        },
      ],
      subject: "ap_psychology",
    },
    examFormat: [
      {
        detail: "75 multiple-choice questions in the current format",
        section: "Multiple Choice",
        weight: "About two-thirds",
      },
      {
        detail: "2 free-response questions: Article Analysis and Evidence-Based",
        section: "Free Response",
        weight: "About one-third",
      },
    ],
    examIntro: [
      "AP Psychology has 75 multiple-choice questions and 2 free-response questions in the current/2026 format.",
      "AP Psychology is a fully digital exam. This calculator avoids older references to the previous 100-MCQ format.",
    ],
    faqItems: defaultFaq({
      calculatorName: "AP Psychology score calculator",
      compositeForFive:
        "In this estimator, the estimated 5 range starts at 75 out of 100.",
      exactName: "AP Psychology",
      frqAnswer: "AP Psychology has 2 free-response questions.",
      mcqAnswer: "AP Psychology has 75 multiple-choice questions.",
      scoringAnswer:
        "This calculator weights MCQ as about two-thirds and FRQ as about one-third of the estimated composite score.",
    }),
    goodScore: goodScoreCopy("AP Psychology"),
    howItWorks: [
      "MCQ raw score is converted into a weighted score out of 66.7.",
      "FRQ raw score is the Article Analysis and Evidence-Based question total out of 14, converted into a weighted score out of 33.3.",
      "The weighted section scores are added into an estimated composite score out of 100.",
    ],
  },
  ap_english_language: {
    calculatorTitle: "AP English Language Score Calculator",
    chartTitle: "Estimated AP English Language Score Chart",
    description:
      "Use this free, unofficial AP English Language Score Calculator to estimate your AP Lang score from multiple-choice and essay raw scores. Review a simple composite score breakdown.",
    heroEyebrow: "AP Lang score predictor",
    h1: "AP English Language Score Calculator",
    jsonLdName: "AP English Language Score Calculator",
    keywords: [
      "AP Lang Score Calculator",
      "AP English Language Calculator",
      "AP Lang Calculator",
      "AP English Language Score Predictor",
      "AP Lang Score Predictor",
      "AP Lang Essay Score Calculator",
    ],
    relatedCalculators: englishLanguageRelated,
    relatedIntro:
      "Use the live AP English Language calculator or browse planned English tools.",
    subtitle:
      "Estimate your AP English Language and Composition score from multiple-choice and essay raw scores. This unofficial AP Lang score calculator converts your MCQ and essay scores into an estimated composite score and AP score.",
    title: "AP English Language Score Calculator | AP Lang Score Predictor",
    url: "https://www.apscoretools.com/ap-english-language-score-calculator/",
    calculator: {
      ariaLabel: "AP English Language score calculator",
      calculatorName: "ap_english_language_score_calculator",
      compositeMax: 100,
      defaultValues: {
        argument: 4,
        mcq: 32,
        rhetorical_analysis: 4,
        synthesis: 4,
      },
      groups: [
        {
          fields: [
            {
              helper: "Correct answers out of 45",
              id: "mcq",
              label: "MCQ Correct Answers",
              max: 45,
              min: 0,
            },
          ],
          heading: "Multiple Choice",
          label: "Section I",
        },
        {
          fields: [
            {
              helper: "Raw score out of 6",
              id: "synthesis",
              label: "Synthesis Essay",
              max: 6,
              min: 0,
            },
            {
              helper: "Raw score out of 6",
              id: "rhetorical_analysis",
              label: "Rhetorical Analysis Essay",
              max: 6,
              min: 0,
            },
            {
              helper: "Raw score out of 6",
              id: "argument",
              label: "Argument Essay",
              max: 6,
              min: 0,
            },
          ],
          heading: "Free Response",
          label: "Section II",
        },
      ],
      heading: "Enter your AP English Language section scores",
      scoreBands: [
        { max: 100, min: 82, score: 5 },
        { max: 81, min: 68, score: 4 },
        { max: 67, min: 50, score: 3 },
        { max: 49, min: 35, score: 2 },
        { max: 34, min: 0, score: 1 },
      ],
      scoreChip: "100-point composite",
      sections: [
        {
          fieldIds: ["mcq"],
          id: "mcq",
          rawLabel: "MCQ Raw Score",
          rawMax: 45,
          weightedLabel: "MCQ Weighted Score",
          weightedMax: 45,
        },
        {
          fieldIds: ["synthesis", "rhetorical_analysis", "argument"],
          id: "essay",
          rawLabel: "Essay Raw Score",
          rawMax: 18,
          weightedLabel: "Essay Weighted Score",
          weightedMax: 55,
        },
      ],
      subject: "ap_english_language",
    },
    examFormat: [
      {
        detail: "45 multiple-choice questions",
        section: "Multiple Choice",
        weight: "45%",
      },
      {
        detail: "3 essays: Synthesis, Rhetorical Analysis, and Argument",
        section: "Free Response",
        weight: "55%",
      },
    ],
    examIntro: [
      "AP English Language and Composition has 45 multiple-choice questions and 3 essay questions.",
      "AP English Language and Composition is a fully digital exam.",
    ],
    faqItems: defaultFaq({
      calculatorName: "AP English Language score calculator",
      compositeForFive:
        "In this estimator, the estimated 5 range starts at 82 out of 100.",
      exactName: "AP English Language",
      frqAnswer:
        "AP English Language has 3 free-response essay questions: Synthesis, Rhetorical Analysis, and Argument.",
      mcqAnswer: "AP English Language has 45 multiple-choice questions.",
      scoringAnswer:
        "This calculator weights MCQ as 45% and essays as 55% of the estimated composite score.",
    }),
    goodScore: goodScoreCopy("AP English Language"),
    howItWorks: [
      "MCQ raw score is converted into a weighted score out of 45.",
      "The three essay scores are added into a raw score out of 18 and converted into a weighted score out of 55.",
      "The MCQ and essay weighted scores are added into an estimated composite score out of 100.",
    ],
  },
};
