import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Info, Lightbulb } from "lucide-react";

const styles = {
  important: { label: "Important", icon: Info, className: "border-copper/40 bg-copper/10 text-copper" },
  tip: { label: "Tip", icon: Lightbulb, className: "border-terminal/40 bg-terminal/10 text-terminal" },
  warning: { label: "Warning", icon: AlertTriangle, className: "border-amber-400/50 bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300" },
  learned: { label: "What I learned", icon: CheckCircle2, className: "border-sky-400/40 bg-sky-100 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300" }
};

export function Callout({ type, children }: { type: keyof typeof styles; children: ReactNode }) {
  const item = styles[type];
  const Icon = item.icon;
  return (
    <aside className={`my-6 rounded-md border p-4 ${item.className}`}>
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <Icon aria-hidden size={18} />
        {item.label}
      </p>
      <div className="text-sm leading-6 text-ink-800 dark:text-ink-100">{children}</div>
    </aside>
  );
}
