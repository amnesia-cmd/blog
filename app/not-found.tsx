import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="font-mono text-sm text-copper">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink-950 dark:text-white">Page not found</h1>
      <p className="mt-4 text-ink-600 dark:text-ink-300">That route is not part of the current build.</p>
      <Link href="/blog" className="mt-7 inline-flex rounded-md bg-ink-950 px-4 py-2 text-sm font-medium text-white no-underline dark:bg-ink-100 dark:text-ink-950">Back to blog</Link>
    </div>
  );
}
