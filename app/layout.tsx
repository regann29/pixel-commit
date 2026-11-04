import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixel-Commit",
  description: "Design a contribution calendar pattern and plan the real work behind it.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
