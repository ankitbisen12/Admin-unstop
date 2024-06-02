import type { Metadata } from "next";
import { inter } from "./lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Find out the best competitions, hackathons & hiring case challenges to participate and compete. Win prizes & job opportunities in top companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
