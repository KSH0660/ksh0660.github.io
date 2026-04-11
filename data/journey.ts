export interface JourneyEntry {
  id: string;
  period: string;
  organization: string;
  description: string;
  type: "work" | "education";
}

export const journeyEntries: JourneyEntry[] = [
  {
    id: "samsung-ds",
    period: "2025 — Present",
    organization: "Samsung DS AI Center",
    description: "LLM training and agentic AI pipeline development",
    type: "work",
  },
  {
    id: "samsung-sait",
    period: "2023 — 2024",
    organization: "Samsung SAIT",
    description: "Semiconductor defect image analysis · Biosimilar RAG system",
    type: "work",
  },
  {
    id: "vuno",
    period: "2020 — 2022",
    organization: "VUNO",
    description: "Medical ML model training and deployment across clinical domains",
    type: "work",
  },
  {
    id: "kaist-ms",
    period: "2018 — 2020",
    organization: "KAIST M.S.",
    description: "Brain tumor MRI data augmentation research",
    type: "education",
  },
  {
    id: "kaist-bs",
    period: "2012 — 2018",
    organization: "KAIST B.S.",
    description: "Electrical Engineering",
    type: "education",
  },
];
