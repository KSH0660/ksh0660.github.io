import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maker | Build, Share, Repeat",
  description:
    "Developer portfolio and service hub. Services I've built and resources I've shared.",
  openGraph: {
    title: "Maker | Build, Share, Repeat",
    description:
      "Developer portfolio and service hub by Maker.",
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
