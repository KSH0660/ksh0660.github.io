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
    description: "LLM Training · Agentic AI 파이프라인 구축",
    type: "work",
  },
  {
    id: "samsung-sait",
    period: "2023 — 2024",
    organization: "Samsung SAIT (종합기술원)",
    description: "반도체 불량 영상 분석 · 바이오 에피스 RAG 시스템",
    type: "work",
  },
  {
    id: "vuno",
    period: "2020 — 2022",
    organization: "VUNO (전문연구요원)",
    description: "다양한 의료 도메인 ML 모델 학습 및 배포",
    type: "work",
  },
  {
    id: "kaist-ms",
    period: "2018 — 2020",
    organization: "KAIST M.S.",
    description: "뇌 종양 영상 MRI 데이터 증강 연구",
    type: "education",
  },
  {
    id: "kaist-bs",
    period: "2012 — 2018",
    organization: "KAIST B.S.",
    description: "전기및전자공학부",
    type: "education",
  },
];
