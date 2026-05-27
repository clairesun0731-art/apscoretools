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
