import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Contact information for Packet & Process." };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-ink-950 dark:text-white">Contact</h1>
      <p className="mt-6 leading-7 text-ink-600 dark:text-ink-300">
        Add your preferred public contact method here before launch. This starter version intentionally does not include private email addresses, phone numbers, addresses, or account identifiers.
      </p>
    </div>
  );
}
