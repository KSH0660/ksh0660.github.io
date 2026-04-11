import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import PromptGallery from "@/components/PromptGallery";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Hero />
      <BentoGrid />
      <PromptGallery />
      <footer className={styles.footer}>
        <p>&copy; 2026 Maker. Built with Next.js.</p>
      </footer>
    </main>
  );
}
