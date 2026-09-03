import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">Privacy Policy</h1>
      <div className="prose prose-ink mt-6 dark:prose-invert">
        <p><strong>Starter template:</strong> review and customize this page before commercial launch.</p>
        <p>This site does not collect newsletter signups, run invasive analytics, or store visitor accounts in the initial version.</p>
        <p>If analytics, comments, advertising, affiliate programs, or contact forms are added later, update this policy to explain what data is collected and why.</p>
      </div>
    </div>
  );
}
