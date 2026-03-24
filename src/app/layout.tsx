import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SeleniumThorium Development",
  description:
    "Developer portfolio and projects by SeleniumThorium",
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
