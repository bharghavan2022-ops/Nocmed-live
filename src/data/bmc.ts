export interface BmcBlock {
  id: string;
  title: string;
  content: string[] | null; // null = needs team input
  seedNote?: string; // context from the original spec, shown only as a light seed, not a claim
}

export const bmcBlocks: BmcBlock[] = [
  {
    id: "segments",
    title: "Customer Segments",
    content: null,
    seedNote:
      "Original spec context (not finalized): emergency departments, trauma units, rural/telemedicine clinics facing staffing shortages.",
  },
  {
    id: "value",
    title: "Value Propositions",
    content: [
      "Faster, more consistent, explainable triage support",
      "Reduces clinician cognitive load",
    ],
  },
  {
    id: "channels",
    title: "Channels",
    content: null,
  },
  {
    id: "relationships",
    title: "Customer Relationships",
    content: null,
  },
  {
    id: "revenue",
    title: "Revenue Streams",
    content: null,
  },
  {
    id: "resources",
    title: "Key Resources",
    content: [
      "The hand-curated clinical knowledge graph",
      "The multimodal pipeline (speech, vision, OCR)",
      "Clinical domain expertise",
    ],
  },
  {
    id: "activities",
    title: "Key Activities",
    content: [
      "Model integration",
      "Graph curation",
      "Clinical validation (future work)",
    ],
  },
  {
    id: "partnerships",
    title: "Key Partnerships",
    content: null,
    seedNote: "e.g. potential hospital pilot partners",
  },
  {
    id: "costs",
    title: "Cost Structure",
    content: null,
  },
];
