import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">Terms of Use</h1>
      <div className="prose prose-ink mt-6 dark:prose-invert">
        <p><strong>Starter template:</strong> review and customize this page before commercial launch.</p>
        <p>Articles are provided for general educational purposes. Commands and configurations should be tested carefully in your own environment.</p>
        <p>No warranty is provided. You are responsible for backups, security, compliance, and operational decisions on systems you manage.</p>
      </div>
    </div>
  );
}
