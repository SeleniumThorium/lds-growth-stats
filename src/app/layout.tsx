import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LDS Growth Statistics",
  description:
    "Interactive charts and data visualizations tracking the growth of The Church of Jesus Christ of Latter-day Saints",
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
