import type { Metadata } from "next";

export const metadata: Metadata = { title: "Affiliate Disclosure" };

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">Affiliate Disclosure</h1>
      <div className="prose prose-ink mt-6 dark:prose-invert">
        <p><strong>Starter template:</strong> review and customize this page before using affiliate links.</p>
        <p>Some future articles may include affiliate links. When they do, those links should be clearly marked and relevant to the article.</p>
        <p>This starter site does not automatically insert affiliate links and does not contain fake advertisements.</p>
      </div>
    </div>
  );
}
