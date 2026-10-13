import { getAllTopics } from "@/lib/topics";
import TerminalCard from "@/components/TerminalCard";
import MalibuLogo from "@/components/MalibuLogo";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const topics = getAllTopics();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
      {/* Editorial Header / Hero */}
      <section className="mb-20 sm:mb-28">
        {/* Subtle Author & Affiliation Capsule */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.03] dark:bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-6">
          <MalibuLogo className="h-4 w-4" withBorder={false} />
          <span>Bradley Joe (Joseph) · University of York MEng AI</span>
        </div>

        {/* Headline: Clean, commanding Apple typography (no marketing buzzwords) */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 leading-[1.1]">
          Building a Transformer from first principles.
        </h1>

        {/* Subtext: <20 words, strictly disciplined per taste-skill */}
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal max-w-2xl mb-8">
          Raw PyTorch tensors, causal self-attention mathematics, and an open research journal. Zero wrapper frameworks.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
          <a
            href="#topics"
            className="px-5 py-2.5 rounded-full bg-[#1d1d1f] dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
          >
            Read Engineering Logs <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://github.com/bradleyjoejoseph/malibu"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full border border-black/[0.12] dark:border-white/[0.16] bg-white dark:bg-white/[0.05] hover:bg-neutral-50 dark:hover:bg-white/[0.1] text-[#1d1d1f] dark:text-white font-medium text-sm transition-all flex items-center gap-1.5 shadow-sm"
          >
            GitHub Repository <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>

        {/* Quick Context Strip */}
        <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] p-4 text-xs text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1d1d1f] dark:text-white">Goal:</span>
            <span>Develop a deep, firsthand mastery of LLM architectures from scratch.</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <span>Status:</span>
            <span className="font-medium text-emerald-600 dark:text-emerald-400">Phase 1 (Tokenization & Math)</span>
          </div>
        </div>
      </section>

      {/* Download & Run Section */}
      <section id="download" className="mb-24 sm:mb-32 scroll-mt-24">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              Run & Verify Locally
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              Clone the repository and test the tensor pipeline on your machine.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400">python &gt;= 3.10</span>
        </div>

        {/* Interactive macOS Terminal Window */}
        <div className="mb-8">
          <TerminalCard />
        </div>

        {/* Apple Technical Specifications Card (replaces generic 3 SaaS boxes) */}
        <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#161617] p-6 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
            Technical Specification
          </h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xs">
            <div className="pb-3 border-b border-black/[0.04] dark:border-white/[0.04]">
              <dt className="text-neutral-500 dark:text-neutral-400 mb-1">Architecture</dt>
              <dd className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                Decoder-only causal Transformer (RoPE + RMSNorm)
              </dd>
            </div>
            <div className="pb-3 border-b border-black/[0.04] dark:border-white/[0.04]">
              <dt className="text-neutral-500 dark:text-neutral-400 mb-1">Compute Target</dt>
              <dd className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                Apple Silicon MPS (Metal) GPU &amp; NVIDIA CUDA Native
              </dd>
            </div>
            <div className="pb-3 sm:pb-0 border-b sm:border-b-0 border-black/[0.04] dark:border-white/[0.04]">
              <dt className="text-neutral-500 dark:text-neutral-400 mb-1">Core Dependencies</dt>
              <dd className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                PyTorch Core &amp; NumPy (Zero high-level wrappers)
              </dd>
            </div>
            <div>
              <dt className="text-neutral-500 dark:text-neutral-400 mb-1">Verification</dt>
              <dd className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
                Automated PyTest suite for shape and loss invariants
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Research Topics & Vlogs (Editorial Index) */}
      <section id="topics" className="scroll-mt-24">
        <div className="flex items-end justify-between mb-8 pb-3 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              Research Topics &amp; Logs
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              Weekly mathematical breakdowns, implementation decisions, and progress logs.
            </p>
          </div>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-neutral-600 dark:text-neutral-300">
            {topics.length} Entries
          </span>
        </div>

        {topics.length === 0 ? (
          <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#161617] p-8 text-center text-neutral-500 text-sm">
            No research topics published yet.
          </div>
        ) : (
          <div className="divide-y divide-black/[0.06] dark:divide-white/[0.08] border-y border-black/[0.06] dark:border-white/[0.08]">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="group block py-6 sm:py-7 transition-colors hover:bg-black/[0.015] dark:hover:bg-white/[0.02] -mx-4 px-4 rounded-xl"
              >
                <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-mono">
                  <span>{topic.date}</span>
                  <span>·</span>
                  <span>{topic.readTime}</span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
                    {topic.title}
                  </h3>
                  <span className="text-[#0071e3] dark:text-[#2997ff] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 pt-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2 mb-4 font-normal max-w-2xl">
                  {topic.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.04] dark:border-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
