import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coobyk",
  description: "Website of Coobyk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://lalten.github.io/lmweb/style/latinmodern-roman.css"
          type="text/css"
          charSet="utf-8"
        />
        <link rel="icon" href="/images/coobyk.svg" />
      </head>
      <body className="font-mono">{children}</body>
    </html>
  );
}
