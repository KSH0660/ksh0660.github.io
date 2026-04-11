import { journeyEntries } from "@/data/journey";
import styles from "./Journey.module.css";

export default function Journey() {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Journey</h2>
          <p className={styles.sectionSubtitle}>
            AI 리서처에서 LLM 풀스택 엔지니어로. 연구실에서 프로덕션으로.
          </p>
        </div>
        <div className={styles.timeline}>
          {journeyEntries.map((entry) => (
            <div
              key={entry.id}
              className={`${styles.entry}${entry.type === "education" ? ` ${styles.education}` : ""}`}
            >
              <div className={styles.marker}>
                <div className={styles.dot} />
              </div>
              <div className={styles.content}>
                <span className={styles.period}>{entry.period}</span>
                <h3 className={styles.organization}>{entry.organization}</h3>
                <p className={styles.description}>{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
