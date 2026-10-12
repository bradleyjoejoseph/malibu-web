import "./globals.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Malibu — Foundational AI Research & Engineering Logs",
  description: "An open research journey building a causal Transformer language model from first principles by Bradley Joe (Joseph).",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-[#f5f5f7] antialiased selection:bg-apple-blue/30 selection:text-white font-sans relative">
        {/* Apple subtle ambient spotlight */}
        <div className="apple-mesh-bg" />

        {/* Apple Frosted Glass Top Navigation */}
        <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/70 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3.5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <span className="font-semibold text-white text-xs tracking-tight">M</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                  Malibu
                </span>
                <span className="hidden sm:inline-flex rounded-full border border-white/[0.1] bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium tracking-wide text-neutral-400">
                  Research
                </span>
              </div>
            </Link>

            <nav className="flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-400">
              <Link href="/#topics" className="hover:text-white transition-colors duration-200">
                Topics & Logs
              </Link>
              <Link href="/#download" className="hover:text-white transition-colors duration-200">
                Download
              </Link>
              <a
                href="https://github.com/bradleyjoejoseph/malibu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/[0.12] bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/25 px-3 py-1 text-xs text-white transition-all duration-200"
              >
                GitHub <ArrowUpRight className="h-3 w-3 opacity-70" />
              </a>
            </nav>
          </div>
        </header>

        {/* Content Container */}
        <main className="relative z-10">{children}</main>

        {/* Apple Style Footer */}
        <footer className="relative z-10 mt-32 border-t border-white/[0.08] bg-black/40 py-12 text-xs text-neutral-500">
          <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-1">
              <p className="font-medium text-neutral-400">
                Malibu — Causal Transformer Research Initiative
              </p>
              <p>
                Engineered from first principles by Bradley Joe (Joseph) · University of York
              </p>
            </div>
            <div className="flex items-center gap-4 text-neutral-400 text-xs">
              <Link href="/#topics" className="hover:text-white transition-colors">
                Archive
              </Link>
              <a
                href="https://github.com/bradleyjoejoseph/malibu"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-neutral-600">·</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
