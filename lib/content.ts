import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { initialCategories } from "@/lib/taxonomy";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
  readingTime: string;
  slug: string;
  excerpt: string;
};

export type Post = PostMeta & {
  content: string;
  headings: { id: string; text: string; level: number }[];
};

type Frontmatter = Partial<Omit<PostMeta, "slug" | "excerpt">> & { slug?: string };

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getFiles() {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
}

function stripMdx(content: string) {
  return content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[>#*_`[\]()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractHeadings(content: string) {
  return Array.from(content.matchAll(/^(##|###)\s+(.+)$/gm)).map((match) => {
    const text = match[2].replace(/[#`*]/g, "").trim();
    return { id: slugify(text), text, level: match[1].length };
  });
}

function normalizePost(file: string): Post {
  const source = fs.readFileSync(path.join(blogDirectory, file), "utf8");
  const { content, data } = matter(source);
  const frontmatter = data as Frontmatter;
  const slug = frontmatter.slug ?? file.replace(/\.mdx?$/, "");
  const plain = stripMdx(content);

  return {
    title: frontmatter.title ?? slug,
    description: frontmatter.description ?? plain.slice(0, 160),
    date: frontmatter.date ?? new Date().toISOString(),
    author: frontmatter.author ?? "Akhil",
    category: frontmatter.category ?? "Uncategorized",
    tags: frontmatter.tags ?? [],
    featured: Boolean(frontmatter.featured),
    coverImage: frontmatter.coverImage,
    readingTime: frontmatter.readingTime ?? readingTime(content).text,
    slug,
    excerpt: plain.slice(0, 220),
    content,
    headings: extractHeadings(content)
  };
}

export function getAllPosts(): Post[] {
  return getFiles()
    .map(normalizePost)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getCategories() {
  const counts = new Map<string, number>();
  initialCategories.forEach((category) => counts.set(category, 0));
  getAllPosts().forEach((post) => counts.set(post.category, (counts.get(post.category) ?? 0) + 1));
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getTags() {
  const counts = new Map<string, number>();
  getAllPosts().forEach((post) => post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)));
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function findCategoryBySlug(slug: string) {
  return getCategories().find((category) => category.slug === slug);
}

export function findTagBySlug(slug: string) {
  return getTags().find((tag) => tag.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 3) {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      const categoryScore = candidate.category === post.category ? 2 : 0;
      return { post: candidate, score: sharedTags + categoryScore };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts().slice().reverse();
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    previous: index > 0 ? posts[index - 1] : undefined,
    next: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined
  };
}

export function getSearchIndex() {
  return getAllPosts().map((post) => ({
    title: post.title,
    description: post.description,
    category: post.category,
    tags: post.tags,
    slug: post.slug,
    content: stripMdx(post.content)
  }));
}

export { slugify };
