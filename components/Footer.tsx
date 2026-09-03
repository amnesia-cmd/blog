import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900/50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-ink-600 dark:text-ink-400 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-mono font-semibold text-ink-900 dark:text-ink-100">Packet & Process</p>
          <p className="mt-2 max-w-xl">Practical notes from the useful edge of homelabs, Linux, networking, Docker, servers, and self-hosting.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-ink-950 dark:hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-ink-950 dark:hover:text-white">Terms</Link>
          <Link href="/affiliate-disclosure" className="hover:text-ink-950 dark:hover:text-white">Affiliate Disclosure</Link>
        </div>
      </div>
    </footer>
  );
}
