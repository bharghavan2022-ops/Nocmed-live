export interface PipelineStage {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detail: string;
}

export const pipelineStages: PipelineStage[] = [
  {
    id: "perception",
    title: "Perception",
    tagline: "Unstructured input → structured findings",
    description:
      "Audio is transcribed locally by faster-whisper. Images are routed by declared type: X-rays and ultrasound go to a local vision-language model (Ollama, qwen2.5vl:7b) for a JSON-only findings report; lab slips and clinical notes go through EasyOCR followed by a keyword red-flag scan. Vitals come from a pre-defined patient profile or manual entry.",
    detail:
      "This stage only ever extracts data — symptoms, findings, numbers. It never assigns a severity score.",
  },
  {
    id: "reasoning",
    title: "Reasoning",
    tagline: "Structured findings → risk score",
    description:
      "Extracted symptoms and findings are matched against a hand-curated NetworkX knowledge graph. Every asserted relationship (e.g. \"dyspnea is linked to pulmonary embolism\") traces back to a specific, explainable graph entry — not a black-box association. This graph signal is blended with a MEWS vitals score via a noisy-OR combination into a single 0–1 risk_score.",
    detail:
      "Hand-curated, not scraped: the graph is small and explainable by design, so every match can be traced to a specific edge.",
  },
  {
    id: "safety",
    title: "Safety",
    tagline: "Deterministic override — never a model call",
    description:
      "Critical vital signs are checked against hard-coded thresholds (e.g. SpO₂ below a critical floor, systolic blood pressure below a critical floor, or a septic-pattern combination of fever with tachycardia/tachypnea). If a threshold is crossed, it forces the correct ESI regardless of what any model or graph match produced.",
    detail:
      "This is the single most protected piece of the architecture: deterministic, rule-based, and never probabilistic.",
  },
  {
    id: "counterfactual",
    title: "Counterfactual",
    tagline: "What would need to change",
    description:
      "For every score, the system re-runs the scoring logic with a hypothesized change (a vital normalizing, a symptom removed) to compute what would actually need to change to shift the ESI band — not a guess, an actual recomputation.",
    detail:
      "Every counterfactual shown in this site's simulation was produced this way, not written by hand.",
  },
  {
    id: "narration",
    title: "Narration",
    tagline: "Grounded spoken summary",
    description:
      "A template-based narrator turns the computed ESI, graph matches, override reason, and counterfactual into a spoken-language summary, read aloud in-browser via the Web Speech API. It only ever restates fields the system already computed — it never adds a new clinical claim.",
    detail:
      "Deliberately not a free-form LLM call, specifically to avoid hallucinated recommendations.",
  },
];

export const dataContracts = [
  {
    name: "transcript",
    shape: `{
  "language": str,
  "segments": [
    { "start": float, "end": float, "text": str }
  ]
}`,
  },
  {
    name: "image findings",
    shape: `{
  "modality": str,
  "findings": [str],
  "concerning": bool,
  "confidence": float
}`,
  },
  {
    name: "vitals",
    shape: `{
  "heart_rate": int,
  "spo2": int,
  "respiratory_rate": int,
  "systolic_bp": int,
  "diastolic_bp": int,
  "temperature_c": float
}`,
  },
  {
    name: "pipeline output",
    shape: `{
  "esi": int,
  "risk_score": float,
  "graph_matches": [...],
  "override_reason": str | None,
  "counterfactual": str,
  "narration": str
}`,
  },
];

export const flowDiagram = `Audio (upload) --> faster-whisper (local, VAD built-in) --> transcript JSON

Image (upload) --> routed by declared type:
    xray | ultrasound   --> Ollama qwen2.5vl:7b (JSON-only prompt) --> findings
    lab_slip | clinical_note --> EasyOCR --> keyword red-flag scan --> findings

Vitals --> a pre-defined patient profile (or manual entry)

All three merge into  Perception  (symptom / finding extraction)
                   --> Reasoning  (NetworkX knowledge-graph lookup + MEWS vitals
                                   score, blended via noisy-OR into risk_score)
                   --> Safety     (deterministic hard vital-sign overrides —
                                   NEVER a model call, NEVER probabilistic)
                   --> Counterfactual  (template-based: "what would need to change")
                   --> Narration  (template-based spoken summary — restates
                                   computed data, never invents new claims)
                   --> ESI score (1-5) + full reasoning trace + spoken summary`;
