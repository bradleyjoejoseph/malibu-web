import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Malibu — Causal Transformer Research & Engineering Logs",
  description: "An open research journey building a causal Transformer language model from first principles by Bradley Joe (Joseph).",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fbfbfd] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] antialiased selection:bg-[#0071e3]/20 dark:selection:bg-[#2997ff]/30 font-sans relative">
        {/* Apple Frosted Glass Top Navigation */}
        <header className="sticky top-0 z-50 glass-nav">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3.5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1d1d1f] dark:bg-white text-white dark:text-black font-semibold text-xs tracking-tight shadow-sm transition-transform duration-200 group-hover:scale-105">
                M
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-tight text-[#1d1d1f] dark:text-white group-hover:opacity-80 transition-opacity">
                  Malibu
                </span>
                <span className="hidden sm:inline-flex rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
                  Research
                </span>
              </div>
            </Link>

            <nav className="flex items-center gap-5 sm:gap-6 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
              <Link href="/#topics" className="hover:text-black dark:hover:text-white transition-colors">
                Topics & Logs
              </Link>
              <Link href="/#download" className="hover:text-black dark:hover:text-white transition-colors">
                Download
              </Link>
              <a
                href="https://github.com/bradleyjoejoseph/malibu"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 rounded-full border border-black/[0.1] dark:border-white/[0.12] bg-white dark:bg-white/[0.06] hover:bg-neutral-100 dark:hover:bg-white/[0.12] px-3 py-1 text-xs text-[#1d1d1f] dark:text-white shadow-sm transition-all"
              >
                GitHub <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative z-10">{children}</main>

        {/* Apple Style Editorial Footer */}
        <footer className="relative z-10 mt-32 border-t border-black/[0.08] dark:border-white/[0.08] bg-black/[0.015] dark:bg-black/40 py-12 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-1">
              <p className="font-semibold text-[#1d1d1f] dark:text-white">
                Malibu — Causal Transformer Research Initiative
              </p>
              <p>
                Engineered from first principles by Bradley Joe (Joseph) · University of York
              </p>
            </div>
            <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-xs">
              <Link href="/#topics" className="hover:text-black dark:hover:text-white transition-colors">
                Archive
              </Link>
              <a
                href="https://github.com/bradleyjoejoseph/malibu"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
