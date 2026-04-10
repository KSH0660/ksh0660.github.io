import { projects } from "@/data/projects";
import BentoCard from "./BentoCard";
import styles from "./BentoGrid.module.css";

export default function BentoGrid() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <BentoCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
