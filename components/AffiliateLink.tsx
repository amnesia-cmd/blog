import Link from "next/link";
import type { ReactNode } from "react";

export function AffiliateLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} rel="sponsored nofollow" className="font-medium text-copper">
      {children} <span className="sr-only">(affiliate link)</span>
    </Link>
  );
}
