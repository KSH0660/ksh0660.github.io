export interface Project {
  id: string;
  title: string;
  category: "Service";
  description: string;
  url: string;
  size: "large" | "medium" | "wide";
}

export const projects: Project[] = [
  {
    id: "mindscope",
    title: "MindScope",
    category: "Service",
    description: "Spectrum-based personality test across five psychological axes",
    url: "https://mind-scope-five.vercel.app/",
    size: "large",
  },
];
