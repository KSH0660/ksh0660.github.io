import type { Project } from "@/data/projects";
import styles from "./BentoCard.module.css";

interface Props {
  project: Project;
}

const categoryLabel: Record<Project["category"], string> = {
  Service: "Service",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export default function BentoCard({ project }: Props) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${styles[project.size]}`}
    >
      <span className={styles.category}>
        {categoryLabel[project.category]}
      </span>
      <h3 className={styles.title}>{project.title}</h3>
      {project.duration && (
        <span className={styles.duration}>
          {formatDate(project.duration.startDate)} ~{" "}
          {formatDate(project.duration.endDate)} ({project.duration.totalDays}
          일간)
        </span>
      )}
      <p className={styles.description}>{project.description}</p>
      <span className={styles.action}>Visit &rarr;</span>
    </a>
  );
}
