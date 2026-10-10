import "./globals.css";

export const metadata = {
  title: "Malibu — Foundational AI Research & Engineering Logs",
  description: "An open research journey building a causal Transformer language model from scratch by Bradley Joe (Joseph).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#07090e]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-2 group">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500 font-bold text-black text-sm group-hover:scale-105 transition-transform">
                M
              </span>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                MALIBU
              </span>
              <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold text-sky-400">
                RESEARCH
              </span>
            </a>
            <div className="flex items-center gap-5 text-sm font-medium text-slate-400">
              <a href="#topics" className="hover:text-white transition-colors">
                Topics & Logs
              </a>
              <a href="#download" className="hover:text-white transition-colors">
                Download & Test
              </a>
              <a
                href="https://github.com/bradleyjoejoseph/malibu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-all"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-20 border-t border-slate-800/80 py-10 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Malibu Project · Engineered from scratch by Bradley Joe (Joseph) @ University of York</p>
        </footer>
      </body>
    </html>
  );
}
