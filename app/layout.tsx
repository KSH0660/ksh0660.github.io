import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ksh0660.github.io"),
  title: "Sunho Kim",
  description:
    "AI engineer building agentic systems and shipping side projects.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Sunho Kim",
    description:
      "AI engineer building agentic systems and shipping side projects.",
    type: "website",
    url: "https://ksh0660.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunho Kim",
    description:
      "AI engineer building agentic systems and shipping side projects.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
