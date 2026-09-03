"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200/80 bg-ink-50/90 backdrop-blur dark:border-ink-800 dark:bg-ink-950/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="focus-ring rounded-sm font-mono text-sm font-semibold tracking-normal text-ink-950 no-underline dark:text-ink-50">
          Packet & Process
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-ink-700 no-underline hover:bg-ink-100 hover:text-ink-950 dark:text-ink-300 dark:hover:bg-ink-900 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/blog#search" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 no-underline hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-900" aria-label="Search posts" title="Search posts">
            <Search aria-hidden size={18} />
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Open navigation">
            {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-ink-200 px-4 py-3 dark:border-ink-800 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {[...siteConfig.nav, { href: "/blog#search", label: "Search" }].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-ink-700 no-underline hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-900">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
