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
    url: "https://big5mindscope.com/",
    repo: { owner: "KSH0660", name: "MindScope" },
    size: "large",
  },
  {
    id: "shadow-loop",
    title: "Shadow Loop",
    category: "Service",
    description: "YouTube shadowing app that loops video segments with progressively revealed captions",
    url: "https://shadow-loop.vercel.app/",
    repo: { owner: "KSH0660", name: "ShadowLoop" },
    size: "large",
  },
];
