"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button type="button" onClick={copy} className="focus-ring inline-flex items-center gap-2 rounded-md border border-ink-200 px-3 py-2 text-sm hover:bg-ink-100 dark:border-ink-700 dark:hover:bg-ink-800">
      <Copy aria-hidden size={16} />
      {copied ? "Copied" : "Copy link"}
    </button>
  );
}
