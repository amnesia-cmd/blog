export function NewsletterPlaceholder() {
  return (
    <section className="rounded-md border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <p className="font-mono text-xs uppercase text-copper">Newsletter</p>
      <h2 className="mt-2 text-2xl font-semibold text-ink-950 dark:text-white">Field notes, eventually.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-600 dark:text-ink-300">
        A newsletter slot is ready for later, but this version does not collect or store email addresses.
      </p>
      <button className="mt-5 cursor-not-allowed rounded-md border border-ink-200 px-4 py-2 text-sm text-ink-500 dark:border-ink-700" disabled>
        Coming later
      </button>
    </section>
  );
}
