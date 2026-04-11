import { projects } from "@/data/projects";
import BentoCard from "./BentoCard";
import styles from "./BentoGrid.module.css";

export default function BentoGrid() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What I Build</h2>
          <p className={styles.sectionSubtitle}>
            아이디어 &rarr; PoC &rarr; 서비스. 빠르게 만들고, 피드백 받고, 개선합니다.
          </p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <BentoCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
