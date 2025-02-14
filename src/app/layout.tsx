import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const notSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Ai SaaS Application",
  description: "AIの機能を使ったWEBサービスです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body className={`${notSansJP.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
