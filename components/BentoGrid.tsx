import { projects } from "@/data/projects";
import { projectDurations } from "@/data/projectDurations";
import BentoCard from "./BentoCard";
import styles from "./BentoGrid.module.css";

export default function BentoGrid() {
  const projectsWithDuration = projects.map((p) => ({
    ...p,
    duration: projectDurations[p.id] ?? undefined,
  }));

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What I Build</h2>
          <p className={styles.sectionSubtitle}>
            Side projects. Idea to prototype, usually in a day.
          </p>
        </div>
        <div className={styles.grid}>
          {projectsWithDuration.map((project) => (
            <BentoCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
