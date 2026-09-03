export function ArchitectureDiagram() {
  return (
    <figure className="my-8 rounded-md border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <div className="grid gap-3 text-center font-mono text-sm">
        <div className="rounded border border-ink-200 bg-ink-50 px-3 py-2 dark:border-ink-700 dark:bg-ink-950">Internet / LAN</div>
        <div aria-hidden className="text-ink-400">|</div>
        <div className="rounded border border-ink-200 bg-ink-50 px-3 py-2 dark:border-ink-700 dark:bg-ink-950">Linux host</div>
        <div aria-hidden className="text-ink-400">|</div>
        <div className="rounded border border-terminal/50 bg-terminal/10 px-3 py-2 text-ink-900 dark:text-ink-100">Docker</div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["App 1", "App 2", "App 3", "Monitoring"].map((item) => (
            <div key={item} className="rounded border border-ink-200 bg-ink-50 px-3 py-3 dark:border-ink-700 dark:bg-ink-950">{item}</div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-ink-500 dark:text-ink-400">A simple mental model for a Docker-based homelab.</figcaption>
    </figure>
  );
}
