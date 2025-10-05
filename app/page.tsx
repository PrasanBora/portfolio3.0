"use client"

import { useEffect } from "react"
import { Hero } from "@/components/hero"
import ScrollToTop from "@/components/ui/scroll-to-top"
import { AboutPreview } from "@/components/home/about-preview"

export default function HomePage() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth"
    }
  }, [])

  return (
    <div className="bg-background text-foreground">
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <a href="/works" className="rounded-lg border border-border p-4 hover:bg-muted/40 transition">
            <h3 className="font-medium">Works</h3>
            <p className="text-sm text-muted-foreground mt-1">Case studies and highlights</p>
          </a>
          <a href="/projects" className="rounded-lg border border-border p-4 hover:bg-muted/40 transition">
            <h3 className="font-medium">Projects</h3>
            <p className="text-sm text-muted-foreground mt-1">All projects and experiments</p>
          </a>
          <a href="/about" className="rounded-lg border border-border p-4 hover:bg-muted/40 transition">
            <h3 className="font-medium">About</h3>
            <p className="text-sm text-muted-foreground mt-1">Intro, tools, and skills</p>
          </a>
        </div>
      </section>

      <AboutPreview />

      <ScrollToTop />
    </div>
  )
}
