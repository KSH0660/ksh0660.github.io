"use client";

import { useState } from "react";
import { prompts, categories } from "@/data/prompts";
import type { Prompt } from "@/data/prompts";
import PromptCard from "./PromptCard";
import PromptModal from "./PromptModal";
import styles from "./PromptGallery.module.css";

export default function PromptGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  const filtered =
    activeCategory === "All"
      ? prompts
      : prompts.filter((p) => p.category === activeCategory);

  return (
    <section id="prompts" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Prompt Collection</h2>
          <p className={styles.subtitle}>
            Click any card to view the full prompt and copy it.
          </p>
        </div>

        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filter} ${
                activeCategory === cat ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p) => (
            <PromptCard
              key={p.id}
              prompt={p}
              onClick={() => setSelectedPrompt(p)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No prompts in this category yet.</p>
        )}
      </div>

      <PromptModal
        prompt={selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
      />
    </section>
  );
}
