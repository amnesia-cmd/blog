import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/content";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="rounded-md border border-ink-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-ink-800 dark:bg-ink-900">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase text-ink-500 dark:text-ink-400">
        <Link href={`/categories/${post.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="no-underline hover:text-copper">{post.category}</Link>
        <span aria-hidden>·</span>
        <time dateTime={post.date}>{format(new Date(post.date), "MMM d, yyyy")}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-3 text-xl font-semibold leading-tight text-ink-950 dark:text-white">
        <Link href={`/blog/${post.slug}`} className="no-underline hover:text-copper">{post.title}</Link>
      </h2>
      <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 4).map((tag) => (
          <Link key={tag} href={`/tags/${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="rounded border border-ink-200 px-2 py-1 text-xs text-ink-600 no-underline hover:border-copper hover:text-copper dark:border-ink-700 dark:text-ink-300">
            {tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
