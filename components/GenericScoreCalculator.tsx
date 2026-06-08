"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";
import { getScoreMessage } from "@/lib/scoreMessages";

export type GenericScoreBand = {
  max: number;
  min: number;
  score: 1 | 2 | 3 | 4 | 5;
};

export type GenericCalculatorField = {
  helper: string;
  id: string;
  label: string;
  max: number;
  min: number;
};

export type GenericCalculatorFieldGroup = {
  fields: GenericCalculatorField[];
  heading: string;
  label: string;
};

export type GenericCalculatorSection = {
  fieldIds: string[];
  id: string;
  rawLabel: string;
  rawMax: number;
  weightedLabel: string;
  weightedMax: number;
};

export type GenericCalculatorProps = {
  ariaLabel: string;
  calculatorName: string;
  compositeMax: number;
  defaultValues: Record<string, number>;
  groups: GenericCalculatorFieldGroup[];
  heading: string;
  scoreBands: GenericScoreBand[];
  scoreChip: string;
  sections: GenericCalculatorSection[];
  subject: string;
};

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

function formatScore(value: number, max: number) {
  return Math.min(value, max).toFixed(1);
}

function formatRawScore(value: number, max: number) {
  const score = Math.min(value, max);
  return Number.isInteger(score) ? score.toString() : score.toFixed(1);
}

function getScoreFromBands(scoreBands: GenericScoreBand[], composite: number) {
  return (
    scoreBands.find((band) => composite >= band.min)?.score ??
    scoreBands[scoreBands.length - 1].score
  );
}

function ScoreField({
  field,
  onChange,
  value,
}: {
  field: GenericCalculatorField;
  onChange: (value: number) => void;
  value: number;
}) {
  const decrease = () => onChange(clamp(value - 1, field.min, field.max));
  const increase = () => onChange(clamp(value + 1, field.min, field.max));

  return (
    <div className="field chem-score-field">
      <div className="chem-field-heading">
        <label htmlFor={field.id}>{field.label}</label>
        <span className="raw-score">
          {value} / {field.max}
        </span>
      </div>
      <div className="chem-slider-row">
        <button
          aria-label={`Decrease ${field.label}`}
          className="stepper-button"
          onClick={decrease}
          type="button"
        >
          -
        </button>
        <input
          aria-valuemax={field.max}
          aria-valuemin={field.min}
          aria-valuenow={value}
          className="score-slider"
          id={field.id}
          max={field.max}
          min={field.min}
          onChange={(event) =>
            onChange(clamp(event.target.valueAsNumber, field.min, field.max))
          }
          step={1}
          type="range"
          value={value}
        />
        <button
          aria-label={`Increase ${field.label}`}
          className="stepper-button"
          onClick={increase}
          type="button"
        >
          +
        </button>
      </div>
      <span className="helper">{field.helper}</span>
    </div>
  );
}

export default function GenericScoreCalculator({
  ariaLabel,
  calculatorName,
  compositeMax,
  defaultValues,
  groups,
  heading,
  scoreBands,
  scoreChip,
  sections,
  subject,
}: GenericCalculatorProps) {
  const [values, setValues] = useState(defaultValues);
  const hasStartedRef = useRef(false);
  const hasInteractedRef = useRef(false);

  const result = useMemo(() => {
    const sectionResults = sections.map((section) => {
      const raw = section.fieldIds.reduce(
        (total, fieldId) => total + (values[fieldId] ?? 0),
        0,
      );
      const weighted = (raw / section.rawMax) * section.weightedMax;

      return {
        ...section,
        raw,
        weighted: Math.min(weighted, section.weightedMax),
      };
    });
    const composite = Math.min(
      sectionResults.reduce((total, section) => total + section.weighted, 0),
      compositeMax,
    );
    const score = getScoreFromBands(scoreBands, composite);
    const scoreBand =
      scoreBands.find((band) => band.score === score) ?? scoreBands[0];
    const nextBand = scoreBands.find((band) => band.score === score + 1);
    const pointsToNextBand = nextBand
      ? `${Math.max(0, nextBand.min - composite).toFixed(1)} points to AP Score ${
          nextBand.score
        }`
      : "Top estimated band";

    return {
      composite,
      pointsToNextBand,
      score,
      scoreBand: `AP Score ${score} (${scoreBand.min}-${scoreBand.max} composite)`,
      scoreMessage: getScoreMessage(score),
      sectionResults,
    };
  }, [compositeMax, scoreBands, sections, values]);

  function handleInputChange(fieldId: string, value: number) {
    setValues((currentValues) => ({ ...currentValues, [fieldId]: value }));
    hasInteractedRef.current = true;

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("calculator_start", {
        calculator_name: calculatorName,
        page_type: "tool_page",
        subject,
      });
    }

    trackEvent("calculator_input_change", {
      calculator_name: calculatorName,
      input_field: fieldId,
      page_type: "tool_page",
      subject,
    });
  }

  useEffect(() => {
    if (!hasInteractedRef.current) return;

    const timeoutId = window.setTimeout(() => {
      trackEvent("calculator_result_view", {
        calculator_name: calculatorName,
        composite_score: Number(result.composite.toFixed(1)),
        page_type: "tool_page",
        predicted_score: result.score,
        subject,
      });
    }, 800);

    return () => window.clearTimeout(timeoutId);
  }, [calculatorName, result.composite, result.score, subject]);

  return (
    <section aria-label={ariaLabel} className="calculator-card">
      <div className="chem-calculator-header">
        <div className="chem-calculator-meta">
          <span>Live calculator</span>
          <span>{scoreChip}</span>
        </div>
        <h2>{heading}</h2>
        <p>
          Enter your section raw scores below to estimate a composite score and
          AP score range.
        </p>
      </div>

      <div className="calculator-body chemistry-calculator-body">
        <form
          className="input-card chemistry-input-card"
          onSubmit={(event) => event.preventDefault()}
        >
          {groups.map((group) => (
            <div className="chem-input-section" key={group.heading}>
              <div className="chem-input-section-heading">
                <span>{group.label}</span>
                <h3>{group.heading}</h3>
              </div>
              {group.fields.map((field) => (
                <ScoreField
                  field={field}
                  key={field.id}
                  onChange={(value) => handleInputChange(field.id, value)}
                  value={values[field.id] ?? field.min}
                />
              ))}
            </div>
          ))}
        </form>

        <aside aria-live="polite" className="chem-result-card">
          <div className="chem-result-header">
            <span className="kicker">Results</span>
            <span className="score-chip">{scoreChip}</span>
          </div>

          <div className="chem-score-panel">
            <p>Estimated AP Score</p>
            <div className="chem-score-line">
              <strong>{result.score}</strong>
              <span>/5</span>
            </div>
            <div className="chem-result-message">
              <strong>{result.scoreMessage.title}</strong>
              <p>{result.scoreMessage.body}</p>
            </div>
          </div>

          <div className="chem-breakdown-card">
            <h3>Score Breakdown</h3>
            {result.sectionResults.map((section) => (
              <div key={section.id}>
                <div className="chem-breakdown-row">
                  <span>{section.rawLabel}</span>
                  <strong>
                    {formatRawScore(section.raw, section.rawMax)} /{" "}
                    {section.rawMax}
                  </strong>
                </div>
                <div className="chem-breakdown-row">
                  <span>{section.weightedLabel}</span>
                  <strong>
                    {formatScore(section.weighted, section.weightedMax)} /{" "}
                    {section.weightedMax}
                  </strong>
                </div>
              </div>
            ))}
            <div className="chem-breakdown-row">
              <span>Composite Score</span>
              <strong>
                {formatScore(result.composite, compositeMax)} / {compositeMax}
              </strong>
            </div>
            <div className="chem-breakdown-row">
              <span>Score Range</span>
              <strong>{result.scoreBand}</strong>
            </div>
            <div className="chem-breakdown-row">
              <span>Next Band</span>
              <strong>{result.pointsToNextBand}</strong>
            </div>
          </div>

          <div className="chem-result-actions">
            <Link className="button secondary" href="/ap-score-calculators/">
              View All AP Score Calculators
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
