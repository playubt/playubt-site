import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlayUTB",
  description: "PlayUTB official league website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-white/10 bg-black">
          <nav className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4 text-sm font-semibold uppercase tracking-wide">
            <Link href="/">Home</Link>
            <Link href="/roster">Roster</Link>
            <Link href="/vote">Vote</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/champions">Champions</Link>
            <Link href="/history">History</Link>
          </nav>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}