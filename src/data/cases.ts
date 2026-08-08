// Real, verified example outputs from the MET-Agent prototype.
// These are used verbatim in the workflow simulation — do not alter or invent new cases.

export type Severity = "critical" | "urgent" | "moderate" | "low" | "minimal";

export interface SimCase {
  id: string;
  label: string;
  esi: number;
  esiName: string;
  severity: Severity;
  hardOverride: string | null;
  graphSignal: string | null;
  narration: string;
  counterfactual: string;
  transcriptSample?: string;
  imageFinding?: {
    modality: string;
    finding: string;
    concerning: boolean;
    confidence: number;
  };
  ocrFinding?: {
    source: string;
    extracted: string;
    concerning: boolean;
    confidence: number;
  };
  vitalsNote?: string;
}

const esiMeta: Record<number, { esiName: string; severity: Severity }> = {
  1: { esiName: "Immediate", severity: "critical" },
  2: { esiName: "Emergent", severity: "urgent" },
  3: { esiName: "Urgent", severity: "moderate" },
  4: { esiName: "Less urgent", severity: "low" },
  5: { esiName: "Non-urgent", severity: "minimal" },
};

export const simCases: SimCase[] = [
  {
    id: "normal",
    label: "Normal",
    esi: 5,
    ...esiMeta[5],
    hardOverride: null,
    graphSignal: null,
    narration: "ESI 5 (Non-urgent). No graph matches contributed to this triage.",
    counterfactual:
      "No escalation factors present: vitals are within all hard override thresholds, there are no graph matches, and risk_score is below the ESI-4 band (0.25).",
  },
  {
    id: "moderate",
    label: "Moderate",
    esi: 3,
    ...esiMeta[3],
    hardOverride: null,
    graphSignal: "abdominal_pain → gi_bleed (weight 0.40)",
    narration:
      "ESI 3 (Urgent). Leading graph signal: abdominal_pain linked to gi_bleed (weight 0.40).",
    counterfactual:
      "If abdominal_pain were not present (currently linked to gi_bleed, weight 0.40), recomputed risk_score would be 0.35 (ESI 4), moving out of ESI 3.",
  },
  {
    id: "hypoxic",
    label: "Hypoxic",
    esi: 1,
    ...esiMeta[1],
    hardOverride: "critical_vitals_override",
    graphSignal: "low_spo2 → hypoxia (weight 0.95)",
    narration:
      "ESI 1 (Immediate). Hard override: critical_vitals_override. Leading graph signal: low_spo2 linked to hypoxia (weight 0.95).",
    counterfactual:
      "If SpO₂ rises to 90% or above (currently 86%), this presentation would likely avoid the current hard vital override (ESI 1).",
    transcriptSample:
      "“I'm having trouble breathing and I have a really high fever.”",
    imageFinding: {
      modality: "Chest X-ray",
      finding: "Left lung opacity",
      concerning: true,
      confidence: 0.8,
    },
    vitalsNote: "SpO₂ 86%",
  },
  {
    id: "septic",
    label: "Septic",
    esi: 1,
    ...esiMeta[1],
    hardOverride: "critical_vitals_override",
    graphSignal: "hypotension → shock (weight 0.90)",
    narration:
      "ESI 1 (Immediate). Hard override: critical_vitals_override. Leading graph signal: hypotension linked to shock (weight 0.90).",
    counterfactual:
      "If SBP rises above 90 mmHg (currently 88 mmHg), this presentation would likely avoid the current hard vital override (ESI 1).",
    vitalsNote: "SBP 88 mmHg",
  },
  {
    id: "septic-pattern",
    label: "Septic pattern (no single critical vital)",
    esi: 2,
    ...esiMeta[2],
    hardOverride: "septic_pattern_override",
    graphSignal: null,
    narration:
      "ESI 2 (Emergent). Hard override: septic_pattern_override. No graph matches contributed to this triage.",
    counterfactual:
      "If the septic-pattern override clears — temperature falls below 39.0°C, or fever is no longer paired with tachycardia (HR ≥ 100 bpm) or tachypnea (RR ≥ 24/min) (currently 39.2°C, HR 112 bpm, RR 20/min), this presentation would likely avoid the current hard vital override (ESI 2).",
    vitalsNote: "Temp 39.2°C, HR 112 bpm, RR 20/min",
  },
  {
    id: "mews-driven",
    label: "MEWS-driven, no graph match",
    esi: 4,
    ...esiMeta[4],
    hardOverride: null,
    graphSignal: null,
    narration: "ESI 4 (Less urgent). No graph matches contributed to this triage.",
    counterfactual:
      "No graph matches; risk_score 0.27 (ESI 4) is driven by MEWS=4. If SpO₂ rises to 96% or above (currently 95%), the vitals contribution to risk would ease.",
    vitalsNote: "SpO₂ 95%, MEWS = 4",
  },
  {
    id: "combined",
    label: "Multiple combined moderate symptoms",
    esi: 2,
    ...esiMeta[2],
    hardOverride: null,
    graphSignal: "sym_a → t_a (weight 0.35)",
    narration:
      "ESI 2 (Emergent). Leading graph signal: sym_a linked to t_a (weight 0.35).",
    counterfactual:
      "Removing sym_a alone (linked to t_a, weight 0.35) would not change ESI 2 (recomputed risk_score 0.73 stays in band); escalation reflects the combination of sym_a, sym_b, sym_c, sym_d.",
  },
];

export const ocrExample = {
  source: "Lab slip",
  extracted: "“elevated troponin”",
  concerning: true,
  confidence: 0.9,
};
