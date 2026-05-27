"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  calculateWeightedScoreResult,
  clampScore,
  createWeightedDefaultInputValues,
  ensureWeightedSubjectInputValues,
  type WeightedCalculatorField,
  type WeightedScoreCalculatorConfig,
} from "@/lib/scoreCalculatorConfigs";
import { trackEvent } from "@/lib/gtag";

type WeightedScoreCalculatorProps = {
  config: WeightedScoreCalculatorConfig;
};

function formatScore(value: number, max: number) {
  return Math.min(value, max).toFixed(1);
}

function ScoreField({
  field,
  inputId,
  onChange,
  value,
}: {
  field: WeightedCalculatorField;
  inputId: string;
  onChange: (value: number) => void;
  value: number;
}) {
  return (
    <div className="field">
      <label htmlFor={inputId}>{field.label}</label>
      <div className="input-row">
        <input
          id={inputId}
          inputMode="numeric"
          max={field.max}
          min={field.min}
          onChange={(event) =>
            onChange(clampScore(event.target.valueAsNumber, field.min, field.max))
          }
          type="number"
          value={value}
        />
        <span className="raw-score">{value}</span>
      </div>
      <input
        aria-label={`${field.label} slider`}
        className="score-slider"
        max={field.max}
        min={field.min}
        onChange={(event) =>
          onChange(clampScore(event.target.valueAsNumber, field.min, field.max))
        }
        type="range"
        value={value}
      />
      <span className="helper">{field.helper}</span>
    </div>
  );
}

export default function WeightedScoreCalculator({
  config,
}: WeightedScoreCalculatorProps) {
  const [inputValues, setInputValues] = useState<Record<string, number>>(() =>
    createWeightedDefaultInputValues(config),
  );
  const hasStartedRef = useRef(false);
  const hasInteractedRef = useRef(false);
  const safeInputValues = useMemo(
    () => ensureWeightedSubjectInputValues(config, inputValues),
    [config, inputValues],
  );
  const result = useMemo(
    () => calculateWeightedScoreResult(config, safeInputValues),
    [config, safeInputValues],
  );

  function handleInputChange(field: WeightedCalculatorField, nextValue: number) {
    setInputValues((currentValues) => ({
      ...ensureWeightedSubjectInputValues(config, currentValues),
      [field.id]: nextValue,
    }));

    hasInteractedRef.current = true;

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("calculator_start", {
        calculator_name: config.trackingName,
        page_type: "tool_page",
      });
    }

    trackEvent("calculator_input_change", {
      calculator_name: config.trackingName,
      input_field: field.id,
      page_type: "tool_page",
    });
  }

  useEffect(() => {
    if (!hasInteractedRef.current) return;

    const timeoutId = window.setTimeout(() => {
      trackEvent("calculator_result_view", {
        calculator_name: config.trackingName,
        composite_score: Number(result.composite.toFixed(1)),
        page_type: "tool_page",
        predicted_score: result.score,
      });
    }, 800);

    return () => window.clearTimeout(timeoutId);
  }, [config.trackingName, result.composite, result.score]);

  return (
    <section className="calculator-card" aria-label={config.ariaLabel}>
      <div className="calculator-card-header">
        <div>
          <span className="kicker">Live calculator</span>
          <h2>{config.heading}</h2>
        </div>
        <span className="score-chip">{config.scoreChip}</span>
      </div>

      <div className="calculator-body">
        <form
          className="input-card configured-input-card"
          onSubmit={(event) => event.preventDefault()}
        >
          <p className="calculator-helper-copy">{config.helperCopy}</p>
          {config.fields.map((field) => (
            <ScoreField
              field={field}
              inputId={`${config.id}-${field.id}`}
              key={field.id}
              onChange={(value) => handleInputChange(field, value)}
              value={safeInputValues[field.id] ?? field.defaultValue}
            />
          ))}
        </form>

        <aside aria-live="polite" className="result-card">
          <div className="result-top">
            <p>Predicted AP Score</p>
            <strong className="score-number">{result.score}</strong>
          </div>
          <div className="result-details">
            <div className="metric">
              <span>Composite Score</span>
              <strong>
                {formatScore(result.composite, config.compositeMax)} /{" "}
                {config.compositeMax}
              </strong>
            </div>
            {result.sections.map((section) => (
              <div className="metric" key={section.label}>
                <span>{section.resultLabel}</span>
                <strong>
                  {formatScore(section.scaledScore, section.scaledMax)} /{" "}
                  {section.scaledMax}
                  <small>
                    {" "}
                    ({section.rawTotal} / {section.rawMax} raw)
                  </small>
                </strong>
              </div>
            ))}
            <div className="metric">
              <span>Score Band</span>
              <strong>{result.scoreBandLabel}</strong>
            </div>
            <div className="metric">
              <span>Points to next band</span>
              <strong>{result.pointsToNextBand}</strong>
            </div>
            <p className="feedback">
              This is an unofficial estimate. Official AP score conversions may
              vary by year based on exam difficulty and official scoring.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
