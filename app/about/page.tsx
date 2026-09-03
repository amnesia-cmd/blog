import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "About Packet & Process." };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">About</h1>
      <div className="prose prose-ink mt-6 dark:prose-invert">
        <p>Packet & Process is a personal technology blog for practical experiments: homelabs, Linux, Docker, networking, servers, self-hosting, PC hardware, storage, and programming notes.</p>
        <p>The site is built around local Markdown/MDX posts so the writing can grow without redesigning the homepage every time a new article is published.</p>
      </div>
    </div>
  );
}
