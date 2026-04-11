import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.greeting}>Hi, I&apos;m Sunho Kim.</p>
        <h1 className={styles.title}>
          AI Engineer
          <br />
          <span className={styles.accent}>&amp; Maker</span>
        </h1>
        <p className={styles.subtitle}>
          I build agentic AI systems at Samsung.
          <br />
          On the side, I ship ideas into working products.
        </p>
      </div>
    </section>
  );
}
