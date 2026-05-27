export type ScoreBand = 1 | 2 | 3 | 4 | 5;

export type CalculatorSubject = "apes" | "ap_chemistry";

export type CalculatorField = {
  helper: string;
  id: string;
  label: string;
  max: number;
  min: number;
};

export type ScoreBandRange = {
  max: number;
  min: number;
  score: ScoreBand;
};

export type ScoreCalculatorConfig = {
  ariaLabel: string;
  compositeMax: number;
  defaultValues: Record<string, number>;
  fields: CalculatorField[];
  frqFieldIds: string[];
  frqRawMax: number;
  frqScaledMax: number;
  heading: string;
  id: CalculatorSubject;
  mcqFieldId: string;
  mcqRawMax: number;
  mcqScaledMax: number;
  scoreBands: ScoreBandRange[];
  scoreChip: string;
  trackingName: "apes_score_calculator" | "ap_chemistry_score_calculator";
};

export type CalculatorResult = {
  composite: number;
  frqRawTotal: number;
  frqScaled: number;
  mcqScaled: number;
  pointsToNextBand: string;
  score: ScoreBand;
  scoreBandLabel: string;
};

export const scoreCalculatorConfigs: Record<
  CalculatorSubject,
  ScoreCalculatorConfig
> = {
  apes: {
    ariaLabel: "APES score calculator",
    compositeMax: 130,
    defaultValues: {
      frq1: 8,
      frq2: 8,
      frq3: 8,
      mcq: 60,
    },
    fields: [
      {
        helper: "Raw score out of 80 questions",
        id: "mcq",
        label: "Section I: Multiple Choice",
        max: 80,
        min: 0,
      },
      {
        helper: "Raw score out of 10",
        id: "frq1",
        label: "FRQ 1",
        max: 10,
        min: 0,
      },
      {
        helper: "Raw score out of 10",
        id: "frq2",
        label: "FRQ 2",
        max: 10,
        min: 0,
      },
      {
        helper: "Raw score out of 10",
        id: "frq3",
        label: "FRQ 3",
        max: 10,
        min: 0,
      },
    ],
    frqFieldIds: ["frq1", "frq2", "frq3"],
    frqRawMax: 30,
    frqScaledMax: 52,
    heading: "AP Environmental Science Score Calculator",
    id: "apes",
    mcqFieldId: "mcq",
    mcqRawMax: 80,
    mcqScaledMax: 78,
    scoreBands: [
      { max: 130, min: 96, score: 5 },
      { max: 95, min: 77, score: 4 },
      { max: 76, min: 68, score: 3 },
      { max: 67, min: 50, score: 2 },
      { max: 49, min: 0, score: 1 },
    ],
    scoreChip: "130-point composite",
    trackingName: "apes_score_calculator",
  },
  ap_chemistry: {
    ariaLabel: "AP Chemistry score calculator",
    compositeMax: 100,
    defaultValues: {
      long_frq_1: 7,
      long_frq_2: 7,
      long_frq_3: 7,
      mcq: 42,
      short_frq_4: 3,
      short_frq_5: 3,
      short_frq_6: 3,
      short_frq_7: 3,
    },
    fields: [
      {
        helper: "Raw score out of 60 questions",
        id: "mcq",
        label: "Section I: Multiple Choice",
        max: 60,
        min: 0,
      },
      {
        helper: "Raw score out of 10",
        id: "long_frq_1",
        label: "Long FRQ 1",
        max: 10,
        min: 0,
      },
      {
        helper: "Raw score out of 10",
        id: "long_frq_2",
        label: "Long FRQ 2",
        max: 10,
        min: 0,
      },
      {
        helper: "Raw score out of 10",
        id: "long_frq_3",
        label: "Long FRQ 3",
        max: 10,
        min: 0,
      },
      {
        helper: "Raw score out of 4",
        id: "short_frq_4",
        label: "Short FRQ 4",
        max: 4,
        min: 0,
      },
      {
        helper: "Raw score out of 4",
        id: "short_frq_5",
        label: "Short FRQ 5",
        max: 4,
        min: 0,
      },
      {
        helper: "Raw score out of 4",
        id: "short_frq_6",
        label: "Short FRQ 6",
        max: 4,
        min: 0,
      },
      {
        helper: "Raw score out of 4",
        id: "short_frq_7",
        label: "Short FRQ 7",
        max: 4,
        min: 0,
      },
    ],
    frqFieldIds: [
      "long_frq_1",
      "long_frq_2",
      "long_frq_3",
      "short_frq_4",
      "short_frq_5",
      "short_frq_6",
      "short_frq_7",
    ],
    frqRawMax: 46,
    frqScaledMax: 50,
    heading: "AP Chemistry Score Calculator",
    id: "ap_chemistry",
    mcqFieldId: "mcq",
    mcqRawMax: 60,
    mcqScaledMax: 50,
    scoreBands: [
      { max: 100, min: 75, score: 5 },
      { max: 74, min: 60, score: 4 },
      { max: 59, min: 45, score: 3 },
      { max: 44, min: 30, score: 2 },
      { max: 29, min: 0, score: 1 },
    ],
    scoreChip: "100-point composite",
    trackingName: "ap_chemistry_score_calculator",
  },
};

export function clampScore(value: number, min: number, max: number) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

export function createDefaultInputValues(config: ScoreCalculatorConfig) {
  return { ...config.defaultValues };
}

export function inputValuesMatchSubject(
  config: ScoreCalculatorConfig,
  values: Record<string, number>,
) {
  const expectedIds = config.fields.map((field) => field.id).sort();
  const valueIds = Object.keys(values).sort();

  if (expectedIds.length !== valueIds.length) {
    return false;
  }

  return expectedIds.every((id, index) => id === valueIds[index]);
}

export function ensureSubjectInputValues(
  config: ScoreCalculatorConfig,
  values: Record<string, number>,
) {
  if (!inputValuesMatchSubject(config, values)) {
    return createDefaultInputValues(config);
  }

  return values;
}

export function calculateScoreResult(
  config: ScoreCalculatorConfig,
  values: Record<string, number>,
): CalculatorResult {
  const checkedValues = ensureSubjectInputValues(config, values);
  const mcqRaw = checkedValues[config.mcqFieldId] ?? 0;
  const frqRawTotal = config.frqFieldIds.reduce(
    (total, fieldId) => total + (checkedValues[fieldId] ?? 0),
    0,
  );
  const mcqScaled = Math.min(
    (mcqRaw / config.mcqRawMax) * config.mcqScaledMax,
    config.mcqScaledMax,
  );
  const frqScaled = Math.min(
    (frqRawTotal / config.frqRawMax) * config.frqScaledMax,
    config.frqScaledMax,
  );
  const composite = Math.min(
    mcqScaled + frqScaled,
    config.compositeMax,
  );
  const scoreBand =
    config.scoreBands.find((band) => composite >= band.min) ??
    config.scoreBands[config.scoreBands.length - 1];
  const nextBand = config.scoreBands
    .slice()
    .reverse()
    .find((band) => band.score === scoreBand.score + 1);
  const pointsToNextBand = nextBand
    ? `${Math.max(0, nextBand.min - composite).toFixed(1)} points to AP Score ${
        nextBand.score
      }`
    : "Top estimated band";

  return {
    composite,
    frqRawTotal,
    frqScaled,
    mcqScaled,
    pointsToNextBand,
    score: scoreBand.score,
    scoreBandLabel: `AP Score ${scoreBand.score} (${scoreBand.min}-${scoreBand.max} composite)`,
  };
}

export type WeightedCalculatorSubject =
  | "ap_human_geography"
  | "ap_macroeconomics"
  | "ap_world_history";

export type WeightedCalculatorField = CalculatorField & {
  defaultValue: number;
};

export type WeightedCalculatorSection = {
  fieldIds: string[];
  label: string;
  rawMax: number;
  scaledMax: number;
  resultLabel: string;
};

export type WeightedScoreCalculatorConfig = {
  ariaLabel: string;
  compositeMax: number;
  defaultValues: Record<string, number>;
  fields: WeightedCalculatorField[];
  helperCopy: string;
  heading: string;
  id: WeightedCalculatorSubject;
  sections: WeightedCalculatorSection[];
  scoreBands: ScoreBandRange[];
  scoreChip: string;
  trackingName: string;
};

export type WeightedSectionResult = WeightedCalculatorSection & {
  rawTotal: number;
  scaledScore: number;
};

export type WeightedCalculatorResult = {
  composite: number;
  pointsToNextBand: string;
  score: ScoreBand;
  scoreBandLabel: string;
  sections: WeightedSectionResult[];
};

export const weightedScoreCalculatorConfigs: Record<
  WeightedCalculatorSubject,
  WeightedScoreCalculatorConfig
> = {
  ap_human_geography: {
    ariaLabel: "AP Human Geography score calculator",
    compositeMax: 100,
    defaultValues: {
      frq: 14,
      mcq: 42,
    },
    fields: [
      {
        defaultValue: 42,
        helper: "Raw score out of 60 questions",
        id: "mcq",
        label: "Multiple Choice Score",
        max: 60,
        min: 0,
      },
      {
        defaultValue: 14,
        helper: "Total free-response raw score out of 21",
        id: "frq",
        label: "FRQ Score",
        max: 21,
        min: 0,
      },
    ],
    helperCopy:
      "Enter your AP Human Geography MCQ and FRQ raw scores. Use practice results or your best estimate after the exam.",
    heading: "AP Human Geography Score Calculator",
    id: "ap_human_geography",
    sections: [
      {
        fieldIds: ["mcq"],
        label: "Multiple Choice",
        rawMax: 60,
        resultLabel: "MCQ Scaled Score",
        scaledMax: 50,
      },
      {
        fieldIds: ["frq"],
        label: "Free Response",
        rawMax: 21,
        resultLabel: "FRQ Scaled Score",
        scaledMax: 50,
      },
    ],
    scoreBands: [
      { max: 100, min: 80, score: 5 },
      { max: 79, min: 65, score: 4 },
      { max: 64, min: 50, score: 3 },
      { max: 49, min: 35, score: 2 },
      { max: 34, min: 0, score: 1 },
    ],
    scoreChip: "100-point estimate",
    trackingName: "ap_human_geography_score_calculator",
  },
  ap_macroeconomics: {
    ariaLabel: "AP Macroeconomics score calculator",
    compositeMax: 100,
    defaultValues: {
      frq: 13,
      mcq: 42,
    },
    fields: [
      {
        defaultValue: 42,
        helper: "Raw score out of 60 questions",
        id: "mcq",
        label: "Multiple Choice Score",
        max: 60,
        min: 0,
      },
      {
        defaultValue: 13,
        helper: "Total free-response raw score out of 20",
        id: "frq",
        label: "FRQ Score",
        max: 20,
        min: 0,
      },
    ],
    helperCopy:
      "Enter your AP Macroeconomics MCQ and FRQ raw scores. The calculator applies an approximate 66% MCQ and 34% FRQ weighting.",
    heading: "AP Macroeconomics Score Calculator",
    id: "ap_macroeconomics",
    sections: [
      {
        fieldIds: ["mcq"],
        label: "Multiple Choice",
        rawMax: 60,
        resultLabel: "MCQ Scaled Score",
        scaledMax: 66,
      },
      {
        fieldIds: ["frq"],
        label: "Free Response",
        rawMax: 20,
        resultLabel: "FRQ Scaled Score",
        scaledMax: 34,
      },
    ],
    scoreBands: [
      { max: 100, min: 77, score: 5 },
      { max: 76, min: 62, score: 4 },
      { max: 61, min: 47, score: 3 },
      { max: 46, min: 35, score: 2 },
      { max: 34, min: 0, score: 1 },
    ],
    scoreChip: "100-point estimate",
    trackingName: "ap_macroeconomics_score_calculator",
  },
  ap_world_history: {
    ariaLabel: "AP World History score calculator",
    compositeMax: 100,
    defaultValues: {
      dbq: 5,
      leq: 4,
      mcq: 38,
      saq: 6,
    },
    fields: [
      {
        defaultValue: 38,
        helper: "Raw score out of 55 multiple-choice questions",
        id: "mcq",
        label: "Multiple Choice Score",
        max: 55,
        min: 0,
      },
      {
        defaultValue: 6,
        helper: "Short-answer raw score out of 9",
        id: "saq",
        label: "SAQ Score",
        max: 9,
        min: 0,
      },
      {
        defaultValue: 5,
        helper: "Document-based question raw score out of 7",
        id: "dbq",
        label: "DBQ Score",
        max: 7,
        min: 0,
      },
      {
        defaultValue: 4,
        helper: "Long essay question raw score out of 6",
        id: "leq",
        label: "LEQ Score",
        max: 6,
        min: 0,
      },
    ],
    helperCopy:
      "Enter your AP World History section scores. MCQ, SAQ, DBQ, and LEQ are weighted separately to estimate a composite score out of 100.",
    heading: "AP World History Score Calculator",
    id: "ap_world_history",
    sections: [
      {
        fieldIds: ["mcq"],
        label: "Multiple Choice",
        rawMax: 55,
        resultLabel: "MCQ Scaled Score",
        scaledMax: 40,
      },
      {
        fieldIds: ["saq"],
        label: "Short Answer",
        rawMax: 9,
        resultLabel: "SAQ Scaled Score",
        scaledMax: 20,
      },
      {
        fieldIds: ["dbq"],
        label: "Document-Based Question",
        rawMax: 7,
        resultLabel: "DBQ Scaled Score",
        scaledMax: 25,
      },
      {
        fieldIds: ["leq"],
        label: "Long Essay Question",
        rawMax: 6,
        resultLabel: "LEQ Scaled Score",
        scaledMax: 15,
      },
    ],
    scoreBands: [
      { max: 100, min: 75, score: 5 },
      { max: 74, min: 60, score: 4 },
      { max: 59, min: 45, score: 3 },
      { max: 44, min: 30, score: 2 },
      { max: 29, min: 0, score: 1 },
    ],
    scoreChip: "100-point estimate",
    trackingName: "ap_world_history_score_calculator",
  },
};

export function createWeightedDefaultInputValues(
  config: WeightedScoreCalculatorConfig,
) {
  return { ...config.defaultValues };
}

export function weightedInputValuesMatchSubject(
  config: WeightedScoreCalculatorConfig,
  values: Record<string, number>,
) {
  const expectedIds = config.fields.map((field) => field.id).sort();
  const valueIds = Object.keys(values).sort();

  if (expectedIds.length !== valueIds.length) {
    return false;
  }

  return expectedIds.every((id, index) => id === valueIds[index]);
}

export function ensureWeightedSubjectInputValues(
  config: WeightedScoreCalculatorConfig,
  values: Record<string, number>,
) {
  if (!weightedInputValuesMatchSubject(config, values)) {
    return createWeightedDefaultInputValues(config);
  }

  return values;
}

export function calculateWeightedScoreResult(
  config: WeightedScoreCalculatorConfig,
  values: Record<string, number>,
): WeightedCalculatorResult {
  const checkedValues = ensureWeightedSubjectInputValues(config, values);
  const sections = config.sections.map((section) => {
    const rawTotal = section.fieldIds.reduce(
      (total, fieldId) => total + (checkedValues[fieldId] ?? 0),
      0,
    );
    const scaledScore = Math.min(
      (rawTotal / section.rawMax) * section.scaledMax,
      section.scaledMax,
    );

    return {
      ...section,
      rawTotal,
      scaledScore,
    };
  });
  const composite = Math.min(
    sections.reduce((total, section) => total + section.scaledScore, 0),
    config.compositeMax,
  );
  const scoreBand =
    config.scoreBands.find((band) => composite >= band.min) ??
    config.scoreBands[config.scoreBands.length - 1];
  const nextBand = config.scoreBands
    .slice()
    .reverse()
    .find((band) => band.score === scoreBand.score + 1);
  const pointsToNextBand = nextBand
    ? `${Math.max(0, nextBand.min - composite).toFixed(1)} points to AP Score ${
        nextBand.score
      }`
    : "Top estimated band";

  return {
    composite,
    pointsToNextBand,
    score: scoreBand.score,
    scoreBandLabel: `AP Score ${scoreBand.score} (${scoreBand.min}-${scoreBand.max} composite)`,
    sections,
  };
}
