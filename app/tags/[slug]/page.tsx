import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findTagBySlug, getAllPosts, getTags } from "@/lib/content";
import { PostCard } from "@/components/PostCard";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getTags().map((tag) => ({ slug: tag.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;
  const tag = findTagBySlug(slug);
  return tag ? { title: `#${tag.name}`, description: `Articles tagged ${tag.name}.` } : {};
}

export default function TagPage({ params }: Props) {
  const { slug } = params;
  const tag = findTagBySlug(slug);
  if (!tag) notFound();
  const posts = getAllPosts().filter((post) => post.tags.includes(tag.name));
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">#{tag.name}</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </div>
  );
}
