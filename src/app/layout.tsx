import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seth Manwaring — Senior Product Leader",
  description:
    "Senior product leader. Regulated SaaS, genomic and operational data, M&A integration. AI-native operator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
