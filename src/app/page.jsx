import { getAllTopics } from "@/lib/topics";
import TerminalCard from "@/components/TerminalCard";
import Link from "next/link";
import { Sparkles, ArrowRight, ArrowUpRight, Cpu, Layers, Zap } from "lucide-react";

export default function HomePage() {
  const topics = getAllTopics();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="mb-24 sm:mb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-apple-blue" />
          <span>Independent AI Research Initiative</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.08]">
          Building an Autoregressive Transformer{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
            From First Principles.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-normal max-w-2xl mb-10">
          <strong className="text-white font-medium">Malibu</strong> is a ground-up engineering deep dive into the 
          mathematical foundations and systems architecture of modern Large Language Models. 
          Zero wrapper frameworks, zero LangChain, and zero third-party API dependencies—just raw PyTorch tensors, custom causal self-attention math, and an open research log.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#topics"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            Explore Research Topics <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/bradleyjoejoseph/malibu"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/[0.15] bg-white/[0.05] hover:bg-white/[0.1] hover:border-white/30 text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 backdrop-blur-md"
          >
            GitHub Repository <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </div>

        {/* Author / Academic Credentials Card */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-apple-blue to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
              BJ
            </div>
            <div>
              <div className="font-semibold text-white">Bradley Joe (Joseph)</div>
              <div className="text-neutral-400 text-[11px]">
                MEng Computer Science with AI · University of York
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-neutral-400 border-t sm:border-t-0 border-white/[0.08] pt-2 sm:pt-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Active Research & Development</span>
          </div>
        </div>
      </section>

      {/* Download & Run Section */}
      <section id="download" className="mb-28 sm:mb-36 scroll-mt-24">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
            Download & Run Locally
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl">
            Inspect the codebase, run unit tests, and verify tensor shapes directly on your own machine.
          </p>
        </div>

        {/* Interactive macOS Terminal */}
        <div className="mb-8">
          <TerminalCard />
        </div>

        {/* Architecture Spec Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-panel rounded-2xl p-5">
            <div className="h-8 w-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-apple-blue mb-3">
              <Layers className="h-4 w-4" />
            </div>
            <div className="font-semibold text-white text-sm mb-1">Architecture</div>
            <div className="text-xs text-neutral-400 leading-relaxed">
              Causal decoder-only Transformer with rotary position embeddings (RoPE) and RMSNorm.
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-5">
            <div className="h-8 w-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-apple-blue mb-3">
              <Cpu className="h-4 w-4" />
            </div>
            <div className="font-semibold text-white text-sm mb-1">Acceleration</div>
            <div className="text-xs text-neutral-400 leading-relaxed">
              Targeted for Apple Silicon MPS (Metal Performance Shaders) GPU & CUDA with zero cloud cost.
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-5">
            <div className="h-8 w-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-apple-blue mb-3">
              <Zap className="h-4 w-4" />
            </div>
            <div className="font-semibold text-white text-sm mb-1">Zero Bloat</div>
            <div className="text-xs text-neutral-400 leading-relaxed">
              Written purely in PyTorch and NumPy. No HuggingFace wrappers or high-level abstractions.
            </div>
          </div>
        </div>
      </section>

      {/* Topic Archive & Vlogs */}
      <section id="topics" className="scroll-mt-24">
        <div className="flex items-end justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
              Research Topics & Vlogs
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Unfiltered engineering notes, mathematical derivations, and weekly insights as Malibu is built brick by brick.
            </p>
          </div>
          <div className="hidden sm:inline-flex px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-neutral-400">
            {topics.length} {topics.length === 1 ? "Article" : "Articles"}
          </div>
        </div>

        {topics.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center text-neutral-500 text-sm">
            No research topics published yet.
          </div>
        ) : (
          <div className="space-y-4">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 block group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-apple-blue transition-colors duration-200">
                    {topic.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 shrink-0 font-medium">
                    <span>{topic.date}</span>
                    <span>·</span>
                    <span>{topic.readTime}</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 mb-5 leading-relaxed line-clamp-2 font-normal">
                  {topic.summary}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {topic.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-apple-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200">
                    Read article <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
