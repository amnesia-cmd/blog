import type { Metadata } from "next";
import { getAllPosts, getCategories, getSearchIndex, getTags } from "@/lib/content";
import { PostCard } from "@/components/PostCard";
import { SearchPosts } from "@/components/SearchPosts";

export const metadata: Metadata = {
  title: "Blog",
  description: "All articles about homelabs, Linux, networking, Docker, servers, hardware, and self-hosting."
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories().map((category) => category.name);
  const tags = getTags().map((tag) => tag.name);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">Blog</h1>
        <p className="mt-3 text-ink-600 dark:text-ink-300">Every article is loaded from local Markdown/MDX content. Add a file, rebuild, and it joins the archive.</p>
      </div>
      <div className="mt-8">
        <SearchPosts posts={getSearchIndex()} categories={categories} tags={tags} />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {posts.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </div>
  );
}
