import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ksh0660.github.io"),
  title: "김선호 | Agentic AI | Maker",
  description:
    "아이디어가 떠오르면 오늘 안에 PoC를 만드는 Maker, 김선호의 포트폴리오.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "김선호 | Agentic AI | Maker",
    description:
      "AI 리서처에서 LLM 풀스택 엔지니어로. 만들 수 있으면 직접 만드는 Maker.",
    type: "website",
    url: "https://ksh0660.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "김선호 | Agentic AI | Maker",
    description:
      "AI 리서처에서 LLM 풀스택 엔지니어로. 만들 수 있으면 직접 만드는 Maker.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t){document.documentElement.setAttribute("data-theme",t)}else if(window.matchMedia("(prefers-color-scheme:dark)").matches){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
