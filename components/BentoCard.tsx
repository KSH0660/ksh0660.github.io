import type { Project } from "@/data/projects";
import styles from "./BentoCard.module.css";

interface Props {
  project: Project;
}

const categoryLabel: Record<Project["category"], string> = {
  Service: "Service",
};

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
      <p className={styles.description}>{project.description}</p>
      <span className={styles.action}>Visit &rarr;</span>
    </a>
  );
}
