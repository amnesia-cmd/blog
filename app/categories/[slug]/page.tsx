import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findCategoryBySlug, getAllPosts, getCategories } from "@/lib/content";
import { PostCard } from "@/components/PostCard";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;
  const category = findCategoryBySlug(slug);
  return category ? { title: category.name, description: `Articles filed under ${category.name}.` } : {};
}

export default function CategoryPage({ params }: Props) {
  const { slug } = params;
  const category = findCategoryBySlug(slug);
  if (!category) notFound();
  const posts = getAllPosts().filter((post) => post.category === category.name);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">{category.name}</h1>
      <p className="mt-3 text-ink-600 dark:text-ink-300">{posts.length} article{posts.length === 1 ? "" : "s"} in this category.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </div>
  );
}
