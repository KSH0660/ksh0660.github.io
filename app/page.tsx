import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import PromptGallery from "@/components/PromptGallery";
import Journey from "@/components/Journey";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Hero />
      <BentoGrid />
      <PromptGallery />
      <Journey />
      <footer className={styles.footer}>
        <p>&copy; 2026 김선호. Built with Next.js.</p>
      </footer>
    </main>
  );
}
