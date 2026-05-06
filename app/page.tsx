import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Journey from "@/components/Journey";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Hero />
      <BentoGrid />
      <Journey />
      <footer className={styles.footer}>
        <p>&copy; 2026 Sunho Kim</p>
      </footer>
    </main>
  );
}
