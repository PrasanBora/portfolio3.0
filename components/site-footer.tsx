"use client"
import { Mail, FileText, Github, Linkedin, Code2, Instagram } from "lucide-react"

export function SiteFooter() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/prasan-bora-943293184/",
      icon: Linkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-[#0077b5]",
    },
    {
      href: "https://github.com/PrasanBora",
      icon: Github,
      label: "GitHub",
      hoverColor: "hover:text-[#333]",
    },
    {
      href: "https://leetcode.com/u/unknown__/",
      icon: Code2,
      label: "LeetCode",
      hoverColor: "hover:text-[#ffa116]",
    },
    {
      href: "https://www.instagram.com/prasan_bora/",
      icon: Instagram,
      label: "Instagram",
      hoverColor: "hover:text-[#e4405f]",
    },
  ]

  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Thanks for stopping by, let&apos;s chat!</h2>

        <div className="grid gap-6 md:grid-cols-2 items-start mb-8">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" aria-hidden />
            <a className="hover:underline hover:text-primary transition-colors" href="mailto:prasanbora23@gmail.com">
              prasanbora23@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-muted-foreground" aria-hidden />
            <a
              className="hover:underline hover:text-primary transition-colors"
              href="https://drive.google.com/file/d/1dPPUjzVTe544kEZB2ZwwFyqXBLDFQxXR/view"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`text-muted-foreground transition-all hover:scale-110 ${social.hoverColor}`}
                aria-label={social.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>

        <p className="text-sm text-muted-foreground">© All rights reserved – Prasan Bora {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
