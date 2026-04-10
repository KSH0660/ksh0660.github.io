import type { Prompt } from "@/data/prompts";
import styles from "./PromptCard.module.css";

interface Props {
  prompt: Prompt;
  onClick: () => void;
}

export default function PromptCard({ prompt, onClick }: Props) {
  return (
    <button className={styles.card} onClick={onClick}>
      <span className={styles.category}>{prompt.category}</span>
      <h3 className={styles.title}>{prompt.title}</h3>
      <p className={styles.description}>{prompt.description}</p>
      <span className={styles.action}>View Prompt &rarr;</span>
    </button>
  );
}
