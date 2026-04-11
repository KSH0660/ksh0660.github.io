"use client";

import { useState, useEffect, useCallback } from "react";
import { prompts, categories } from "@/data/prompts";
import type { Prompt } from "@/data/prompts";
import PromptCard from "./PromptCard";
import PromptModal from "./PromptModal";
import styles from "./PromptGallery.module.css";

export default function PromptGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [showShortcuts, setShowShortcuts] = useState(false);

  const selectPrompt = useCallback((prompt: Prompt | null) => {
    setSelectedPrompt(prompt);
    if (prompt) {
      history.replaceState(null, "", `#prompt/${prompt.id}`);
    } else {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#prompt/")) {
      const id = hash.replace("#prompt/", "");
      const found = prompts.find((p) => p.id === id);
      if (found) setSelectedPrompt(found);
    }
  }, []);

  const filtered =
    activeCategory === "All"
      ? prompts
      : prompts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    setFocusedIndex(-1);
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (selectedPrompt) return;

      if (e.key === "?") {
        e.preventDefault();
        setShowShortcuts((prev) => !prev);
        return;
      }

      if (e.key === "Escape") {
        setShowShortcuts(false);
        setFocusedIndex(-1);
        return;
      }

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= categories.length) {
        e.preventDefault();
        setActiveCategory(categories[num - 1]);
        return;
      }

      if (e.key === "ArrowRight" || e.key === "j") {
        e.preventDefault();
        setFocusedIndex((prev) =>
          filtered.length === 0 ? -1 : Math.min(prev + 1, filtered.length - 1)
        );
        return;
      }

      if (e.key === "ArrowLeft" || e.key === "k") {
        e.preventDefault();
        setFocusedIndex((prev) =>
          filtered.length === 0 ? -1 : Math.max(prev - 1, 0)
        );
        return;
      }

      if (e.key === "Enter" && focusedIndex >= 0 && focusedIndex < filtered.length) {
        e.preventDefault();
        selectPrompt(filtered[focusedIndex]);
        return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedPrompt, filtered, focusedIndex, selectPrompt]);

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
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`${styles.filter} ${
                activeCategory === cat ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              <span className={styles.filterKey}>{i + 1}</span>
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <PromptCard
              key={p.id}
              prompt={p}
              focused={i === focusedIndex}
              onClick={() => selectPrompt(p)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No prompts in this category yet.</p>
        )}
      </div>

      <PromptModal
        prompt={selectedPrompt}
        onClose={() => selectPrompt(null)}
      />

      <button
        className={styles.shortcutHint}
        onClick={() => setShowShortcuts((prev) => !prev)}
        aria-label="Show keyboard shortcuts"
      >
        ?
      </button>

      {showShortcuts && (
        <div
          className={styles.shortcutOverlay}
          onClick={() => setShowShortcuts(false)}
        >
          <div
            className={styles.shortcutPanel}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.shortcutTitle}>Keyboard Shortcuts</h3>
            <div className={styles.shortcutList}>
              <div className={styles.shortcutRow}>
                <kbd className={styles.kbd}>1</kbd>–<kbd className={styles.kbd}>{categories.length}</kbd>
                <span>Switch category</span>
              </div>
              <div className={styles.shortcutRow}>
                <kbd className={styles.kbd}>←</kbd><kbd className={styles.kbd}>→</kbd>
                <span>Navigate cards</span>
              </div>
              <div className={styles.shortcutRow}>
                <kbd className={styles.kbd}>Enter</kbd>
                <span>Open prompt</span>
              </div>
              <div className={styles.shortcutRow}>
                <kbd className={styles.kbd}>Esc</kbd>
                <span>Close / deselect</span>
              </div>
              <div className={styles.shortcutRow}>
                <kbd className={styles.kbd}>?</kbd>
                <span>Toggle this panel</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
