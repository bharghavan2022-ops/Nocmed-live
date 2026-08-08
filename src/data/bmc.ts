export interface BmcSection {
  heading?: string;
  items: string[];
}

export interface BmcBlock {
  id: string;
  number: number;
  title: string;
  intro?: string;
  sections: BmcSection[];
  wide?: boolean; // render full-width in the grid
}

export const bmcMission =
  "Empower every clinician with intelligent insights to make faster, safer, and better decisions.";

export const bmcSubtitle = "AI Clinical Intelligence & Emergency Triage Platform";

export const bmcBlocks: BmcBlock[] = [
  {
    id: "segments",
    number: 1,
    title: "Customer Segments",
    sections: [
      {
        heading: "Primary customers (economic buyers)",
        items: [
          "Government hospitals",
          "District hospitals",
          "Private hospital chains",
          "Emergency departments",
          "Rural PHCs & CHCs",
          "Telemedicine providers",
          "Ambulance networks",
          "Disaster response agencies",
          "Defence & military medical units",
        ],
      },
      {
        heading: "End users",
        items: [
          "Emergency physicians",
          "Triage nurses",
          "Rural medical officers",
          "Paramedics / EMTs",
          "Ambulance personnel",
          "Junior residents",
          "Emergency technicians",
        ],
      },
      {
        heading: "Future markets",
        items: [
          "Medical colleges",
          "Clinical training centers",
          "NGOs",
          "Insurance companies",
          "Digital health platforms",
        ],
      },
    ],
  },
  {
    id: "value",
    number: 2,
    title: "Value Propositions",
    intro:
      "An explainable AI clinical intelligence platform that assists healthcare professionals in performing faster, more consistent, evidence-backed patient triage by combining multimodal clinical data into one intelligent workflow.",
    sections: [
      {
        heading: "Functional value",
        items: [
          "Faster emergency triage",
          "Early identification of high-risk patients",
          "AI-assisted second opinion",
          "Continuous patient monitoring",
          "Standardized triage across hospitals",
          "Reduced cognitive workload",
        ],
      },
      {
        heading: "Clinical value",
        items: [
          "Integrates X-rays, voice consultation, symptoms, vitals, patient state, clinical reasoning & explainability",
        ],
      },
      {
        heading: "Operational value",
        items: [
          "Reduced waiting time",
          "Better patient prioritization",
          "Higher clinician productivity",
          "Improved emergency workflow",
          "Better resource allocation",
        ],
      },
    ],
  },
  {
    id: "channels",
    number: 3,
    title: "Channels",
    sections: [
      {
        heading: "Direct enterprise sales",
        items: [
          "Hospital procurement teams",
          "Hospital administrators",
          "State health departments",
          "Corporate hospital chains",
        ],
      },
      {
        heading: "Partnerships",
        items: [
          "HIS / EMR vendors",
          "PACS / RIS providers",
          "Telemedicine platforms",
          "Health tech integrators",
        ],
      },
      {
        heading: "Digital channels",
        items: [
          "SaaS platform (web dashboard)",
          "API integrations",
          "Cloud deployment",
          "On-premise deployment",
        ],
      },
    ],
  },
  {
    id: "relationships",
    number: 4,
    title: "Customer Relationships",
    sections: [
      {
        items: [
          "Enterprise onboarding",
          "Clinical workflow customization",
          "Staff training & workshops",
          "AI explainability sessions",
          "Dedicated customer success manager",
          "Technical support (24/7)",
          "Regular model updates",
          "Clinical validation updates",
          "Feedback-driven improvement",
        ],
      },
    ],
  },
  {
    id: "revenue",
    number: 5,
    title: "Revenue Streams",
    sections: [
      {
        items: [
          "SaaS subscriptions (primary) — monthly / annual plans, priced per hospital size",
          "Enterprise licensing — annual licensing for hospital networks",
          "Integration & implementation fees — EMR / HIS / PACS workflow integration",
          "API licensing — pay-per-assessment / API calls",
          "White-label licensing — license the AI engine to other platforms",
          "Government contracts — state-wide / national health initiatives",
          "Premium analytics — advanced dashboards & insights",
          "Training & consulting — onboarding, training & workflow optimization",
        ],
      },
    ],
  },
  {
    id: "resources",
    number: 6,
    title: "Key Resources",
    sections: [
      {
        items: [
          "AI models (X-ray, risk, patient-state engine)",
          "Explainability engine (SHAP)",
          "Clinical knowledge base & guidelines",
          "FastAPI backend & React frontend",
          "Supabase database & storage",
          "Cloud infrastructure (AWS / GCP / Azure)",
          "Clinical datasets (MIMIC-IV, public ED data)",
          "Team: AI engineers, developers, data scientists, clinical advisors",
          "IP: algorithms, workflows, data pipelines",
        ],
      },
      {
        heading: "Acquired via partnerships",
        items: [
          "Clinical expertise & physician validation",
          "Real-world clinical data & imaging datasets",
          "Hospital deployment environments",
          "EMR / PACS APIs & integration tools",
          "Cloud infrastructure & GPU credits",
          "Clinical guidelines & protocols",
          "Regulatory & compliance guidance",
          "Research & publication support",
        ],
      },
    ],
  },
  {
    id: "activities",
    number: 7,
    title: "Key Activities",
    sections: [
      {
        items: [
          "AI model development & optimization",
          "Clinical decision-support development",
          "Multimodal data processing & monitoring",
          "Clinical validation & performance testing",
          "Hospital system integration (EMR / PACS)",
          "Clinical knowledge & guideline updates",
          "Platform development & maintenance",
          "Security, compliance & data governance",
          "Customer onboarding, training & support",
        ],
      },
    ],
  },
  {
    id: "partnerships",
    number: 8,
    title: "Key Partners",
    sections: [
      {
        items: [
          "Hospitals & emergency departments",
          "Medical colleges & research institutions",
          "Government health departments (NHM)",
          "Cloud service providers (AWS, Azure, GCP)",
          "EMR / HIS / PACS vendors",
          "Clinical AI & dataset providers (MIMIC-IV, etc.)",
          "Regulatory & compliance consultants",
          "Universities & research labs",
        ],
      },
    ],
  },
  {
    id: "costs",
    number: 9,
    title: "Cost Structure",
    wide: true,
    sections: [
      {
        heading: "Product development",
        items: ["AI/ML engineers", "Software developers", "UI/UX designers", "Product management"],
      },
      {
        heading: "AI & cloud infrastructure",
        items: [
          "GPU servers (training & inference)",
          "Cloud hosting & services",
          "Database & storage",
          "Networking & monitoring",
        ],
      },
      {
        heading: "Clinical & compliance",
        items: [
          "Clinical validation & trials",
          "Medical expert consultations",
          "Regulatory approvals",
          "Security & data compliance",
        ],
      },
      {
        heading: "Operations & go-to-market",
        items: [
          "Customer onboarding",
          "Training & support",
          "Sales & marketing",
          "Administrative costs",
        ],
      },
      {
        heading: "AI & API costs",
        items: [
          "LLM API usage",
          "Speech-to-text APIs",
          "OCR / imaging APIs",
          "Model retraining costs",
        ],
      },
    ],
  },
];
