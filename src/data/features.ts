export const techStack = [
  { layer: "Speech-to-text", tech: "faster-whisper (local, CTranslate2, built-in VAD)" },
  { layer: "Image / vision analysis", tech: "Ollama + qwen2.5vl:7b (local)" },
  { layer: "Document / lab OCR", tech: "EasyOCR" },
  { layer: "Knowledge graph", tech: "NetworkX (in-memory, hand-curated triplets)" },
  { layer: "Backend", tech: "FastAPI (Python, async)" },
  { layer: "Frontend", tech: "React + Vite + TypeScript + Tailwind + Chart.js" },
  { layer: "Text-to-speech (output)", tech: "Browser-native Web Speech API (speechSynthesis) — no server-side TTS model" },
  { layer: "Storage", tech: "None — in-memory per session only, no patient data persisted to disk" },
];

export const builtFeatures = [
  "Real audio transcription via faster-whisper, tested against genuine recorded speech.",
  "Real image analysis via qwen2.5vl, tested against a real chest X-ray with visible pathology — confirmed the model distinguishes concerning from non-concerning findings.",
  "Real OCR-based lab slip analysis, tested against genuine extracted text triggering the red-flag path.",
  "A rule-based auto-scenario matcher that suggests a best-matching patient profile from extracted symptoms — never invents new vitals values, only selects among real pre-defined profiles, and always discloses when this happened.",
  "Full explainability chain: every ESI score ships with its graph-matched reasoning, a computed (not guessed) counterfactual, and a grounded spoken narration.",
  "Browser-based text-to-speech reading the real narration text aloud.",
];

export const notBuiltFeatures = [
  "No live video / continuous camera feed analysis — image analysis is single-frame / static upload only.",
  "No live microphone streaming in the deployed build — file upload only.",
  "No cloud deployment of the actual inference pipeline.",
  "No FDA clearance, no clinical validation study, no real-world deployment.",
];

export const evaluationTargets = [
  { metric: "ESI scoring accuracy", target: "≥ 88%", note: "target, unmeasured" },
  { metric: "Differential diagnosis top-3 recall", target: "≥ 90%", note: "target, unmeasured" },
  { metric: "Speech transcription WER", target: "< 7.5%", note: "target, unmeasured" },
  { metric: "Knowledge grounding precision", target: "≥ 95%", note: "target, unmeasured" },
];
