import type { ReactNode } from "react";

export function Figure({ src, alt, caption }: { src: string; alt: string; caption: ReactNode }) {
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="w-full rounded-md border border-ink-200 dark:border-ink-800" />
      <figcaption className="mt-3 text-center text-sm text-ink-500 dark:text-ink-400">{caption}</figcaption>
    </figure>
  );
}
