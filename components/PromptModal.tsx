"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { Prompt } from "@/data/prompts";
import styles from "./PromptModal.module.css";

interface Props {
  prompt: Prompt | null;
  onClose: () => void;
}

export default function PromptModal({ prompt, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (prompt) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [prompt]);

  const handleCopy = useCallback(async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [prompt]);

  const handleShare = useCallback(async () => {
    if (!prompt) return;
    const url = `${window.location.origin}${window.location.pathname}#prompt/${prompt.id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: prompt.title, url });
        return;
      } catch {
        /* user cancelled or not supported — fall through to clipboard */
      }
    }
    await navigator.clipboard.writeText(url);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  }, [prompt]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === dialogRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setCopied(false);
    setShared(false);
  }, [prompt]);

  if (!prompt) return null;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClick={handleBackdropClick}
      onClose={onClose}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <span className={styles.category}>{prompt.category}</span>
            <h2 className={styles.title}>{prompt.title}</h2>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>
        <p className={styles.description}>{prompt.description}</p>
        <div className={styles.promptBlock}>
          <pre className={styles.promptText}>{prompt.prompt}</pre>
        </div>
        <div className={styles.actions}>
          <button
            className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy Prompt"}
          </button>
          <button
            className={`${styles.shareButton} ${shared ? styles.shared : ""}`}
            onClick={handleShare}
            aria-label="Share prompt link"
          >
            {shared ? "Link Copied!" : "Share"}
          </button>
        </div>
      </div>
    </dialog>
  );
}
