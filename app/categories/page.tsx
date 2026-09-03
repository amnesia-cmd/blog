import type { Metadata } from "next";
import Link from "next/link";
import { getCategories } from "@/lib/content";

export const metadata: Metadata = { title: "Categories", description: "Browse technology articles by category." };

export default function CategoriesPage() {
  const categories = getCategories();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">Categories</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`} className="rounded-md border border-ink-200 bg-white p-5 no-underline hover:border-copper dark:border-ink-800 dark:bg-ink-900">
            <p className="font-semibold text-ink-950 dark:text-white">{category.name}</p>
            <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{category.count} article{category.count === 1 ? "" : "s"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
