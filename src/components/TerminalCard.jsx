"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Cpu } from "lucide-react";

export default function TerminalCard() {
  const [copied, setCopied] = useState(false);

  const cloneCommand = "git clone https://github.com/bradleyjoejoseph/malibu.git\ncd malibu\npytest -v tests/";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cloneCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-[#161618] border border-black/10 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all">
      {/* macOS Window Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#1c1c1f]">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/60" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/60" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]/60" />
          <span className="ml-2 font-mono text-xs text-neutral-400 tracking-tight flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-neutral-400" />
            zsh — malibu
          </span>
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy terminal commands"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.08] transition-all"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-neutral-300" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm bg-[#121214] text-neutral-200 space-y-2 select-text overflow-x-auto leading-relaxed">
        <div className="text-neutral-500 select-none"># 1. Clone the open research repository</div>
        <div className="flex items-center gap-2">
          <span className="text-[#0071e3] dark:text-[#2997ff] select-none font-bold">~ %</span>
          <span className="text-white">git clone https://github.com/bradleyjoejoseph/malibu.git</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#0071e3] dark:text-[#2997ff] select-none font-bold">~ %</span>
          <span className="text-white">cd malibu</span>
        </div>

        <div className="pt-2 text-neutral-500 select-none"># 2. Run local test suite & architecture verification</div>
        <div className="flex items-center gap-2 text-emerald-400 font-medium">
          <span className="text-[#0071e3] dark:text-[#2997ff] select-none font-bold">~ %</span>
          <span>pytest -v tests/</span>
        </div>
      </div>

      {/* macOS Hardware Acceleration Status Bar */}
      <div className="px-4 py-2.5 bg-[#18181b] border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-neutral-300 font-mono">
            <Cpu className="h-3 w-3 text-[#2997ff]" /> Acceleration: Apple MPS & CUDA Native
          </span>
        </div>
        <a
          href="https://github.com/bradleyjoejoseph/malibu"
          target="_blank"
          rel="noreferrer"
          className="text-[11px] text-[#2997ff] hover:text-white transition-colors flex items-center gap-1"
        >
          View source on GitHub ↗
        </a>
      </div>
    </div>
  );
}
