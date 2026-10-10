import { getAllTopics } from "@/lib/topics";
import { Terminal, Download, ArrowRight, BookOpen, Cpu, Sparkles } from "lucide-react";

export default function HomePage() {
  const topics = getAllTopics();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400 mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Independent AI Research Initiative</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Building an Autoregressive Transformer{" "}
          <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            From First Principles.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 font-normal">
          <strong>Malibu</strong> is a ground-up engineering deep dive into the complete architecture of modern Large Language Models. 
          No wrapper frameworks, no LangChain, and zero third-party API dependencies—just raw PyTorch tensors, custom causal self-attention math, and an open research log.
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 border-l-2 border-sky-500 pl-4 py-1">
          <span>By <strong>Bradley Joe (Joseph)</strong></span>
          <span>•</span>
          <span>Second-Year MEng Computer Science with AI @ University of York</span>
          <span>•</span>
          <span>Open-Source Research</span>
        </div>
      </section>

      {/* Download & Test Section */}
      <section id="download" className="mb-24 scroll-mt-24">
        <div className="rounded-xl border border-slate-800 bg-[#0d1117] p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Download className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Download & Test Malibu</h2>
              <p className="text-xs text-slate-400">Clone the repository and inspect the codebase locally.</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 mb-5 leading-relaxed">
            Malibu is engineered to run locally on consumer hardware. Training and inference leverage native 
            Apple Silicon <strong>MPS (Metal Performance Shaders)</strong> GPU acceleration with zero cloud bills.
          </p>

          <div className="rounded-lg border border-slate-800 bg-black/60 p-4 font-mono text-xs text-slate-200">
            <div className="flex items-center justify-between text-slate-500 pb-2 mb-2 border-b border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5" /> Terminal
              </span>
              <span>bash</span>
            </div>
            <div className="space-y-1">
              <p><span className="text-slate-500"># 1. Clone the public research repository</span></p>
              <p className="text-sky-300">git clone https://github.com/bradleyjoejoseph/malibu.git</p>
              <p className="text-sky-300">cd malibu</p>
              <p className="pt-2"><span className="text-slate-500"># 2. Inspect the roadmap and tokenization tests</span></p>
              <p className="text-emerald-400">pytest -v tests/</p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5 text-sky-400" /> Target: MPS (Apple M-Series) / CUDA / CPU
            </span>
            <a
              href="https://github.com/bradleyjoejoseph/malibu"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Topic Archive & Devlogs */}
      <section id="topics" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-sky-400" /> Research Topics & Vlogs
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              My unfiltered notes, mathematical breakdowns, and weekly insights as I build Malibu brick by brick.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
            {topics.length} {topics.length === 1 ? "Entry" : "Entries"}
          </span>
        </div>

        {topics.length === 0 ? (
          <p className="text-slate-500 text-sm">No research topics published yet. First entry dropping soon!</p>
        ) : (
          <div className="space-y-4">
            {topics.map((topic) => (
              <a
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="group block rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 transition-all hover:border-sky-500/40 hover:bg-slate-900/80"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                    {topic.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 shrink-0">
                    <span>{topic.date}</span>
                    <span>•</span>
                    <span>{topic.readTime}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {topic.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {topic.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read topic <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
