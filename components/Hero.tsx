import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.label}>Maker</p>
        <h1 className={styles.title}>
          I build things &<br />
          share what works.
        </h1>
        <p className={styles.subtitle}>
          A curated collection of prompts I use every day
          <br />
          to think better, code faster, and create more.
        </p>
        <a href="#prompts" className={styles.cta}>
          Browse Prompts &darr;
        </a>
      </div>
    </section>
  );
}
