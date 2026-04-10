import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.label}>Maker</p>
        <h1 className={styles.title}>
          Build, Share,
          <br />
          Repeat.
        </h1>
        <p className={styles.subtitle}>
          Services I&apos;ve built and
          <br />
          resources I&apos;ve shared.
        </p>
        <a href="#projects" className={styles.cta}>
          Explore &darr;
        </a>
      </div>
    </section>
  );
}
