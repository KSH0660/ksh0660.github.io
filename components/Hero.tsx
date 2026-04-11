import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.greeting}>안녕하세요, 김선호입니다</p>
        <h1 className={styles.title}>
          Agentic AI
          <br />
          <span className={styles.accent}>| Maker</span>
        </h1>
        <p className={styles.subtitle}>
          아이디어가 떠오르면, 오늘 안에 PoC를 만듭니다.
          <br />
          만들 수 있으면 직접 만듭니다.
        </p>
        <a href="#projects" className={styles.cta}>
          더 알아보기 &darr;
        </a>
      </div>
    </section>
  );
}
