import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import PromptGallery from "@/components/PromptGallery";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <PromptGallery />
      <footer className={styles.footer}>
        <p>&copy; 2026 Maker. Built with Next.js.</p>
      </footer>
    </main>
  );
}
