export interface Project {
  id: string;
  title: string;
  category: "Service" | "GitPage";
  description: string;
  url: string;
  size: "large" | "medium" | "wide";
}

export const projects: Project[] = [
  {
    id: "mindscope",
    title: "MindScope",
    category: "Service",
    description: "5축 스펙트럼 기반 심리 테스트 서비스",
    url: "https://mind-scope-five.vercel.app/",
    size: "large",
  },
  {
    id: "seminar-kit",
    title: "Seminar Kit",
    category: "GitPage",
    description: "세미나 발표 자료 모음",
    url: "https://ksh0660.github.io/seminar-kit/",
    size: "medium",
  },
];
