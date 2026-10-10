import { getTopicBySlug } from "@/lib/topics";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
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
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      {/* Back button */}
      <Link
        href="/#topics"
        className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-sky-400 transition-colors mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to all topics
      </Link>

      {/* Article Header */}
      <header className="mb-10 pb-8 border-b border-slate-800">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-[1.2]">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-5">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-sky-400" /> {frontmatter.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-sky-400" /> {frontmatter.readTime || "5 min read"}
          </span>
          <span>•</span>
          <span>By <strong>Bradley Joe (Joseph)</strong></span>
        </div>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <Tag className="h-3 w-3 text-slate-500 mr-1" />
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-300"
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

      {/* Bottom Sign-off */}
      <div className="mt-16 pt-8 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
        <p>Published in the <strong>Malibu Research Log</strong></p>
        <Link href="/#topics" className="text-sky-400 hover:underline">
          ← Return to Topic Archive
        </Link>
      </div>
    </article>
  );
}
