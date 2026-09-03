import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { format } from "date-fns";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Callout } from "@/components/Callout";
import { ShareButton } from "@/components/ShareButton";
import { getAdjacentPosts, getAllPosts, getPostBySlug, getRelatedPosts, slugify } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { PostCard } from "@/components/PostCard";
import { Figure } from "@/components/Figure";
import { ImageGallery } from "@/components/ImageGallery";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.coverImage ? [post.coverImage] : undefined
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined
    }
  };
}

export default function PostPage({ params }: Props) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post);
  const adjacent = getAdjacentPosts(post.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className="text-sm font-medium text-copper">Back to blog</Link>
      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
          <Link href={`/categories/${slugify(post.category)}`} className="font-medium text-copper">{post.category}</Link>
          <span aria-hidden>·</span>
          <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-ink-600 dark:text-ink-300">{post.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ShareButton />
          {post.tags.map((tag) => <Link key={tag} href={`/tags/${slugify(tag)}`} className="rounded border border-ink-200 px-2 py-1 text-sm no-underline hover:border-copper dark:border-ink-800">{tag}</Link>)}
        </div>
      </header>
      {post.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.coverImage} alt={`${post.title} cover illustration`} className="mt-8 aspect-[16/7] w-full rounded-md border border-ink-200 object-cover dark:border-ink-800" />
      ) : null}
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="prose prose-ink max-w-article dark:prose-invert prose-a:text-copper prose-headings:scroll-mt-24 prose-pre:text-sm">
          <MDXRemote source={post.content} components={{ Callout, ArchitectureDiagram, Figure, ImageGallery }} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypeHighlight] } }} />
        </div>
        {post.headings.length ? (
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-md border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900">
              <p className="text-sm font-semibold text-ink-950 dark:text-white">On this page</p>
              <nav className="mt-3 grid gap-2 text-sm">
                {post.headings.map((heading) => <a key={heading.id} href={`#${heading.id}`} className={heading.level === 3 ? "ml-3 text-ink-500 no-underline hover:text-copper" : "text-ink-600 no-underline hover:text-copper dark:text-ink-300"}>{heading.text}</a>)}
              </nav>
            </div>
          </aside>
        ) : null}
      </div>
      <nav className="mt-12 grid gap-4 border-t border-ink-200 pt-8 dark:border-ink-800 sm:grid-cols-2" aria-label="Article navigation">
        {adjacent.previous ? <PostCard post={adjacent.previous} /> : <div />}
        {adjacent.next ? <PostCard post={adjacent.next} /> : null}
      </nav>
      {related.length ? (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink-950 dark:text-white">Related articles</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((item) => <PostCard key={item.slug} post={item} />)}
          </div>
        </section>
      ) : null}
    </article>
  );
}
