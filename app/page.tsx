import Link from "next/link";
import { getAllPosts, getCategories, getTags } from "@/lib/content";
import { PostCard } from "@/components/PostCard";
import { NewsletterPlaceholder } from "@/components/NewsletterPlaceholder";

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const recent = posts.filter((post) => post.slug !== featured?.slug).slice(0, 4);
  const categories = getCategories();
  const tags = getTags().slice(0, 10);

  return (
    <div>
      <section className="border-b border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase text-copper">Homelabs / Linux / Docker / Networking</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-5xl">
              Practical technology notes from building, breaking, and fixing things.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-600 dark:text-ink-300">
              A minimal personal blog for experiments with self-hosting, servers, PC hardware, Linux, Docker, storage, and the odd programming detour.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/blog" className="focus-ring rounded-md bg-ink-950 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-ink-800 dark:bg-ink-100 dark:text-ink-950 dark:hover:bg-white">Read the blog</Link>
              <Link href="/about" className="focus-ring rounded-md border border-ink-200 px-4 py-2 text-sm font-medium text-ink-800 no-underline hover:bg-ink-100 dark:border-ink-700 dark:text-ink-100 dark:hover:bg-ink-900">About this site</Link>
            </div>
          </div>
          {featured ? (
            <div>
              <p className="mb-3 text-sm font-medium text-ink-500 dark:text-ink-400">Featured article</p>
              <PostCard post={featured} />
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
        <div>
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-ink-950 dark:text-white">Recent articles</h2>
            <Link href="/blog" className="text-sm font-medium text-copper">View all</Link>
          </div>
          <div className="grid gap-4">
            {(recent.length ? recent : posts).slice(0, 4).map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        </div>
        <aside className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-ink-950 dark:text-white">Categories</h2>
            <div className="mt-3 grid gap-2">
              {categories.map((category) => (
                <Link key={category.slug} href={`/categories/${category.slug}`} className="flex justify-between rounded-md border border-ink-200 bg-white px-3 py-2 text-sm no-underline hover:border-copper dark:border-ink-800 dark:bg-ink-900">
                  <span>{category.name}</span>
                  <span className="text-ink-500">{category.count}</span>
                </Link>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-ink-950 dark:text-white">Featured topics</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => <Link key={tag.slug} href={`/tags/${tag.slug}`} className="rounded border border-ink-200 px-2 py-1 text-sm no-underline hover:border-copper dark:border-ink-800">{tag.name}</Link>)}
            </div>
          </section>
        </aside>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <NewsletterPlaceholder />
      </section>
    </div>
  );
}
