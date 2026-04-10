import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maker | Prompt Collection",
  description:
    "Essential prompts and tools curated by a Maker. Discover, copy, and use prompts that boost your productivity.",
  openGraph: {
    title: "Maker | Prompt Collection",
    description:
      "Essential prompts and tools curated by a Maker.",
    type: "website",
    url: "https://ksh0660.github.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
