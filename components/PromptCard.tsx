"use client";

import { useEffect, useRef } from "react";
import type { Prompt } from "@/data/prompts";
import styles from "./PromptCard.module.css";

interface Props {
  prompt: Prompt;
  focused?: boolean;
  onClick: () => void;
}

export default function PromptCard({ prompt, focused, onClick }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focused && ref.current) {
      ref.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [focused]);

  return (
    <button
      ref={ref}
      className={`${styles.card} ${focused ? styles.focused : ""}`}
      onClick={onClick}
    >
      <span className={styles.category}>{prompt.category}</span>
      <h3 className={styles.title}>{prompt.title}</h3>
      <p className={styles.description}>{prompt.description}</p>
      <span className={styles.action}>View Prompt &rarr;</span>
    </button>
  );
}
