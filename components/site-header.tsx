"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-primary" aria-hidden />
          <span className="font-mono text-sm">Prasan Bora</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link className="text-sm hover:underline" href="/about">
            About
          </Link>
          <Link className="text-sm hover:underline" href="/works">
            Works
          </Link>
          <Link className="text-sm hover:underline" href="/projects">
            Projects
          </Link>
          <Link className="text-sm hover:underline" href="/tech-stack">
            Skills — Tech Stacks
          </Link>
          <Link className="text-sm hover:underline" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
