import type { GenericCalculatorProps, GenericScoreBand } from "../components/GenericScoreCalculator";

export function scoreFromBands(bands: GenericScoreBand[], composite: number) {
  return [...bands].sort((a, b) => b.min - a.min).find((band) => composite >= band.min)?.score ?? 1;
}

export function calculateGenericScore(
  config: Pick<GenericCalculatorProps, "groups" | "sections" | "compositeMax" | "scoreBands">,
  values: Record<string, number>,
) {
  const bounded = Object.fromEntries(config.groups.flatMap((group) => group.fields).map((field) => {
    const value = values[field.id];
    return [field.id, Number.isFinite(value) ? Math.min(field.max, Math.max(field.min, value)) : field.min];
  }));
  const sectionResults = config.sections.map((section) => {
    const raw = section.fieldIds.reduce((sum, id) => sum + (bounded[id] ?? 0), 0);
    return { ...section, raw, weighted: Math.min(raw / section.rawMax * section.weightedMax, section.weightedMax) };
  });
  const composite = Math.min(sectionResults.reduce((sum, section) => sum + section.weighted, 0), config.compositeMax);
  return { sectionResults, composite, score: scoreFromBands(config.scoreBands, composite) };
}
