export type CalculatorCategory =
  | "Science"
  | "Math & Computer Science"
  | "History & Social Science"
  | "English"
  | "World Languages"
  | "Arts"
  | "Capstone";

export type CalculatorStatus = "live" | "coming-soon";

export type ApCalculatorDirectoryItem = {
  aliases?: string[];
  category: CalculatorCategory;
  description: string;
  href: string;
  shortTitle?: string;
  slug: string;
  status: CalculatorStatus;
  subjectId: string;
  title: string;
};

export const calculatorCategoryOrder: CalculatorCategory[] = [
  "Science",
  "Math & Computer Science",
  "History & Social Science",
  "English",
  "World Languages",
  "Arts",
  "Capstone",
];

const apCalculatorEntries: Omit<ApCalculatorDirectoryItem, "shortTitle" | "slug">[] = [
  {
    category: "Science",
    title: "AP Environmental Science Score Calculator",
    description:
      "Estimate your AP Environmental Science score from MCQ and FRQ raw scores with this unofficial APES score calculator.",
    href: "/ap-environmental-science-score-calculator/",
    status: "live",
    subjectId: "ap_environmental_science",
    aliases: ["APES Score Calculator", "AP Environmental Science Calculator"],
  },
  {
    category: "Science",
    title: "AP Chemistry Score Calculator",
    description:
      "Estimate your AP Chemistry score from multiple-choice and free-response inputs with this unofficial AP Chem score calculator.",
    href: "/ap-chemistry-score-calculator/",
    status: "live",
    subjectId: "ap_chemistry",
    aliases: ["AP Chem Score Calculator"],
  },
  {
    category: "Science",
    title: "AP Biology Score Calculator",
    description:
      "Estimate your AP Bio score using MCQ and FRQ raw points.",
    href: "/ap-biology-score-calculator/",
    status: "live",
    subjectId: "ap_biology",
    aliases: [
      "AP Bio Score Calculator",
      "AP Biology Score Predictor",
      "AP Bio Score Predictor",
    ],
  },
  {
    category: "Science",
    title: "AP Physics 1 Score Calculator",
    description:
      "A planned AP Physics 1 score calculator for MCQ and free-response score estimates.",
    href: "/ap-physics-1-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_physics_1",
  },
  {
    category: "Science",
    title: "AP Physics 2 Score Calculator",
    description:
      "A planned AP Physics 2 score calculator for unofficial exam score estimates.",
    href: "/ap-physics-2-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_physics_2",
  },
  {
    category: "Science",
    title: "AP Physics C Mechanics Score Calculator",
    description:
      "A planned AP Physics C Mechanics score calculator for mechanics exam estimates.",
    href: "/ap-physics-c-mechanics-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_physics_c_mechanics",
  },
  {
    category: "Science",
    title: "AP Physics C Electricity and Magnetism Score Calculator",
    description:
      "A planned AP Physics C Electricity and Magnetism score calculator for unofficial score estimates.",
    href: "/ap-physics-c-electricity-and-magnetism-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_physics_c_electricity_and_magnetism",
  },
  {
    category: "Math & Computer Science",
    title: "AP Calculus AB Score Calculator",
    description:
      "Estimate your AP Calc AB score using MCQ and FRQ raw points.",
    href: "/ap-calculus-ab-score-calculator/",
    status: "live",
    subjectId: "ap_calculus_ab",
    aliases: [
      "AP Calc AB Score Calculator",
      "AP Calculus AB Score Predictor",
      "AP Calc AB Score Predictor",
    ],
  },
  {
    category: "Math & Computer Science",
    title: "AP Calculus BC Score Calculator",
    description:
      "Estimate your AP Calc BC score using MCQ and FRQ raw points.",
    href: "/ap-calculus-bc-score-calculator/",
    status: "live",
    subjectId: "ap_calculus_bc",
    aliases: [
      "AP Calc BC Score Calculator",
      "AP Calculus BC Score Predictor",
      "AP Calc BC Score Predictor",
    ],
  },
  {
    category: "Math & Computer Science",
    title: "AP Statistics Score Calculator",
    description:
      "Estimate your AP Stats score using MCQ and FRQ raw points.",
    href: "/ap-statistics-score-calculator/",
    status: "live",
    subjectId: "ap_statistics",
    aliases: [
      "AP Stats Score Calculator",
      "AP Statistics Score Predictor",
      "AP Stats Score Predictor",
    ],
  },
  {
    category: "Math & Computer Science",
    title: "AP Computer Science A Score Calculator",
    description:
      "A planned AP Computer Science A score calculator for AP CSA score estimates.",
    href: "/ap-computer-science-a-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_computer_science_a",
    aliases: ["AP CSA Score Calculator"],
  },
  {
    category: "Math & Computer Science",
    title: "AP Computer Science Principles Score Calculator",
    description:
      "A planned AP Computer Science Principles score calculator for AP CSP score estimates.",
    href: "/ap-computer-science-principles-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_computer_science_principles",
    aliases: ["AP CSP Score Calculator"],
  },
  {
    category: "History & Social Science",
    title: "AP Human Geography Score Calculator",
    description:
      "Estimate your AP Human Geography score with an unofficial APHUG calculator for MCQ and FRQ performance, or use it as an AP score calculator for Human Geo practice.",
    href: "/ap-human-geography-score-calculator/",
    status: "live",
    subjectId: "ap_human_geography",
    aliases: [
      "APHUG Score Calculator",
      "AP HUG Score Calculator",
      "AP Human Geo Score Calculator",
      "AP Score Calculator Human Geo",
    ],
  },
  {
    category: "History & Social Science",
    title: "AP Macroeconomics Score Calculator",
    description:
      "Estimate your AP Macroeconomics score from MCQ, long FRQ, and short FRQ inputs with this AP Macro score calculator.",
    href: "/ap-macroeconomics-score-calculator/",
    status: "live",
    subjectId: "ap_macroeconomics",
    aliases: ["AP Macro Score Calculator"],
  },
  {
    category: "History & Social Science",
    title: "AP Microeconomics Score Calculator",
    description:
      "A planned AP Microeconomics score calculator for AP Micro exam estimates.",
    href: "/ap-microeconomics-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_microeconomics",
    aliases: ["AP Micro Score Calculator"],
  },
  {
    category: "History & Social Science",
    title: "AP World History Score Calculator",
    description:
      "Estimate your AP World History score from MCQ, SAQ, DBQ, and LEQ inputs with this unofficial AP World score calculator.",
    href: "/ap-world-history-score-calculator/",
    status: "live",
    subjectId: "ap_world_history",
    aliases: [
      "AP World Calculator",
      "AP World Score Calculator",
      "AP World Scoring Calculator",
      "AP World Score Calculator 2025",
      "APWH Score Calculator",
    ],
  },
  {
    category: "History & Social Science",
    title: "AP U.S. History Score Calculator",
    description:
      "Estimate your APUSH score using MCQ, SAQ, DBQ, and LEQ raw points.",
    href: "/ap-us-history-score-calculator/",
    status: "live",
    subjectId: "ap_us_history",
    aliases: [
      "APUSH Score Calculator",
      "AP US History Score Calculator",
      "AP U.S. History Score Predictor",
      "APUSH Score Predictor",
    ],
  },
  {
    category: "History & Social Science",
    title: "AP European History Score Calculator",
    description:
      "A planned AP European History score calculator for AP Euro score estimates.",
    href: "/ap-european-history-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_european_history",
    aliases: ["AP Euro Score Calculator"],
  },
  {
    category: "History & Social Science",
    title: "AP U.S. Government and Politics Score Calculator",
    description:
      "Estimate your AP Gov score using MCQ and FRQ raw points.",
    href: "/ap-us-government-score-calculator/",
    status: "live",
    subjectId: "ap_us_government",
    aliases: [
      "AP Gov Score Calculator",
      "AP US Gov Score Calculator",
      "AP Government Score Predictor",
    ],
  },
  {
    category: "History & Social Science",
    title: "AP Psychology Score Calculator",
    description:
      "Estimate your AP Psych score using MCQ and FRQ raw points.",
    href: "/ap-psychology-score-calculator/",
    status: "live",
    subjectId: "ap_psychology",
    aliases: [
      "AP Psych Score Calculator",
      "AP Psychology Score Predictor",
      "AP Psych Score Predictor",
    ],
  },
  {
    category: "History & Social Science",
    title: "AP Comparative Government and Politics Score Calculator",
    description:
      "A planned AP Comparative Government and Politics score calculator for AP Comparative Gov score estimates.",
    href: "/ap-comparative-government-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_comparative_government",
    aliases: ["AP Comparative Gov Score Calculator"],
  },
  {
    category: "English",
    title: "AP English Language Score Calculator",
    description:
      "Estimate your AP Lang score using multiple-choice and essay raw scores.",
    href: "/ap-english-language-score-calculator/",
    status: "live",
    subjectId: "ap_english_language",
    aliases: [
      "AP Lang Score Calculator",
      "AP English Language Score Predictor",
      "AP Lang Score Predictor",
    ],
  },
  {
    category: "English",
    title: "AP English Literature Score Calculator",
    description:
      "A planned AP English Literature score calculator for students searching for an AP Lit score calc.",
    href: "/ap-english-literature-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_english_literature",
    aliases: ["AP Lit Score Calculator", "AP Lit Score Calc"],
  },
  {
    category: "World Languages",
    title: "AP Spanish Language Score Calculator",
    description:
      "A planned AP Spanish Language score calculator for AP Spanish exam estimates.",
    href: "/ap-spanish-language-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_spanish_language",
    aliases: ["AP Spanish Score Calculator"],
  },
  {
    category: "World Languages",
    title: "AP Spanish Literature Score Calculator",
    description:
      "A planned AP Spanish Literature score calculator for unofficial score estimates.",
    href: "/ap-spanish-literature-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_spanish_literature",
  },
  {
    category: "World Languages",
    title: "AP French Language Score Calculator",
    description:
      "A planned AP French Language score calculator for unofficial score estimates.",
    href: "/ap-french-language-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_french_language",
  },
  {
    category: "World Languages",
    title: "AP German Language Score Calculator",
    description:
      "A planned AP German Language score calculator for unofficial score estimates.",
    href: "/ap-german-language-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_german_language",
  },
  {
    category: "World Languages",
    title: "AP Italian Language Score Calculator",
    description:
      "A planned AP Italian Language score calculator for unofficial score estimates.",
    href: "/ap-italian-language-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_italian_language",
  },
  {
    category: "World Languages",
    title: "AP Chinese Language Score Calculator",
    description:
      "A planned AP Chinese Language score calculator for unofficial score estimates.",
    href: "/ap-chinese-language-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_chinese_language",
  },
  {
    category: "World Languages",
    title: "AP Japanese Language Score Calculator",
    description:
      "A planned AP Japanese Language score calculator for unofficial score estimates.",
    href: "/ap-japanese-language-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_japanese_language",
  },
  {
    category: "World Languages",
    title: "AP Latin Score Calculator",
    description:
      "A planned AP Latin score calculator for unofficial score estimates.",
    href: "/ap-latin-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_latin",
  },
  {
    category: "Arts",
    title: "AP Art History Score Calculator",
    description:
      "A planned AP Art History score calculator for unofficial score estimates.",
    href: "/ap-art-history-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_art_history",
  },
  {
    category: "Arts",
    title: "AP Music Theory Score Calculator",
    description:
      "A planned AP Music Theory score calculator for unofficial score estimates.",
    href: "/ap-music-theory-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_music_theory",
  },
  {
    category: "Arts",
    title: "AP 2-D Art and Design Score Calculator",
    description:
      "A planned AP 2-D Art and Design score calculator for unofficial score estimates.",
    href: "/ap-2d-art-and-design-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_2d_art_and_design",
  },
  {
    category: "Arts",
    title: "AP 3-D Art and Design Score Calculator",
    description:
      "A planned AP 3-D Art and Design score calculator for unofficial score estimates.",
    href: "/ap-3d-art-and-design-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_3d_art_and_design",
  },
  {
    category: "Arts",
    title: "AP Drawing Score Calculator",
    description:
      "A planned AP Drawing score calculator for unofficial score estimates.",
    href: "/ap-drawing-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_drawing",
  },
  {
    category: "Capstone",
    title: "AP Seminar Score Calculator",
    description:
      "A planned AP Seminar score calculator for unofficial score estimates.",
    href: "/ap-seminar-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_seminar",
  },
  {
    category: "Capstone",
    title: "AP Research Score Calculator",
    description:
      "A planned AP Research score calculator for unofficial score estimates.",
    href: "/ap-research-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_research",
  },
  {
    category: "Math & Computer Science",
    title: "AP Precalculus Score Calculator",
    description:
      "A planned AP Precalculus score calculator for unofficial score estimates.",
    href: "/ap-precalculus-score-calculator/",
    status: "coming-soon",
    subjectId: "ap_precalculus",
  },
];

export const apCalculatorDirectory: ApCalculatorDirectoryItem[] =
  apCalculatorEntries.map((calculator) => ({
    ...calculator,
    shortTitle: calculator.title.replace(" Score Calculator", ""),
    slug: calculator.href,
  }));

export const liveApCalculators = apCalculatorDirectory.filter(
  (calculator) => calculator.status === "live",
);

export const comingSoonApCalculators = apCalculatorDirectory.filter(
  (calculator) => calculator.status === "coming-soon",
);

export function getCalculatorsByCategory(category: CalculatorCategory) {
  return apCalculatorDirectory.filter((calculator) => calculator.category === category);
}

export function getLiveCalculators() {
  return liveApCalculators;
}

export function getComingSoonCalculators() {
  return comingSoonApCalculators;
}

export function getPopularCalculators() {
  return liveApCalculators;
}
