import type { MetadataRoute } from "next";
import { getAllPosts, getCategories, getTags } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/categories", "/about", "/contact", "/privacy", "/terms", "/affiliate-disclosure"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
  const posts = getAllPosts().map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}`, lastModified: new Date(post.date) }));
  const categories = getCategories().map((category) => ({ url: `${siteConfig.url}/categories/${category.slug}`, lastModified: new Date() }));
  const tags = getTags().map((tag) => ({ url: `${siteConfig.url}/tags/${tag.slug}`, lastModified: new Date() }));
  return [...staticRoutes, ...posts, ...categories, ...tags];
}
