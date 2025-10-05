"use client"

import Link from "next/link"
import { Mail, FileText, Users } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Thanks for stopping by, let&apos;s chat!</h2>

        <div className="grid gap-6 md:grid-cols-3 items-start">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" aria-hidden />
            <a className="hover:underline" href="mailto:prasanbora23@gmail.com">
              prasanbora23@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-muted-foreground" aria-hidden />
            <Link className="hover:underline" href="/resume.pdf" target="_blank">
              Resume
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-muted-foreground" aria-hidden />
            <div className="flex items-center gap-3 text-sm">
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/prasan-bora-943293184/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <span className="text-muted-foreground">|</span>
              <a className="hover:underline" href="https://github.com/PrasanBora" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span className="text-muted-foreground">|</span>
              <a className="hover:underline" href="https://leetcode.com/u/unknown__/" target="_blank" rel="noreferrer">
                LeetCode
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                className="hover:underline"
                href="https://www.instagram.com/prasan_bora/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          © All rights reserved – Prasan Bora {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
