export interface ProjectDuration {
  startDate: string;
  endDate: string;
  totalDays: number;
}

export interface Project {
  id: string;
  title: string;
  category: "Service";
  description: string;
  url: string;
  size: "large" | "medium" | "wide";
  repo?: { owner: string; name: string };
  duration?: ProjectDuration;
}

export const projects: Project[] = [
  {
    id: "mindscope",
    title: "MindScope",
    category: "Service",
    description: "Spectrum-based personality test across five psychological axes",
    url: "https://mind-scope-five.vercel.app/",
    repo: { owner: "KSH0660", name: "MindScope" },
    size: "large",
  },
];
