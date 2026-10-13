import { getTopicBySlug } from "@/lib/topics";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TopicPage({ params }) {
  const resolvedParams = await params;
  const topic = await getTopicBySlug(resolvedParams.slug);

  if (!topic) {
    notFound();
  }

  const { frontmatter, htmlContent } = topic;

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      {/* Back button */}
      <Link
        href="/#topics"
        className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-10 group"
      >
        <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to all topics</span>
      </Link>

      {/* Editorial Header */}
      <header className="mb-12 pb-10 border-b border-black/[0.08] dark:border-white/[0.08]">
        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-neutral-500 dark:text-neutral-400 mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] font-medium text-neutral-600 dark:text-neutral-300">
            <Calendar className="h-3 w-3 text-[#0071e3] dark:text-[#2997ff]" />
            {frontmatter.date}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] font-medium text-neutral-600 dark:text-neutral-300">
            <Clock className="h-3 w-3 text-[#0071e3] dark:text-[#2997ff]" />
            {frontmatter.readTime || "5 min read"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mb-6 leading-[1.15]">
          {frontmatter.title}
        </h1>

        {/* Author Byline */}
        <div className="flex items-center gap-3 pt-2">
          <div className="h-9 w-9 rounded-full bg-[#1d1d1f] dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs shadow-sm">
            BJ
          </div>
          <div>
            <div className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
              Bradley Joe (Joseph)
            </div>
            <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
              MEng Computer Science with AI · University of York
            </div>
          </div>
        </div>

        {/* Tags */}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-6">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 dark:text-neutral-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Body */}
      <div
        className="prose-malibu"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Bottom Editorial Card */}
      <div className="mt-20 pt-10 border-t border-black/[0.08] dark:border-white/[0.08]">
        <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#161617] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <div className="font-semibold text-[#1d1d1f] dark:text-white text-sm">
              Follow the Malibu Research Project
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
              Mathematical notes, tokenizer experiments, and model weights are documented openly in the GitHub repository.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/#topics"
              className="px-4 py-2 rounded-full border border-black/[0.1] dark:border-white/[0.12] bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.06] dark:hover:bg-white/[0.1] text-xs font-medium text-[#1d1d1f] dark:text-white transition-all"
            >
              All Articles
            </Link>
            <a
              href="https://github.com/bradleyjoejoseph/malibu"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-[#1d1d1f] dark:bg-white text-white dark:text-black hover:opacity-90 text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-sm"
            >
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
