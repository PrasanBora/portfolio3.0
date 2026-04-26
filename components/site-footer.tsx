"use client";

import Link from "next/link";
import {
  Mail,
  FileText,
  Github,
  Linkedin,
  Code2,
  Instagram,
} from "lucide-react";

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
      hoverColor: "hover:text-[#333] dark:hover:text-white",
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
  ];

  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-primary" aria-hidden />
              <span className="font-semibold text-lg">Prasan Bora</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Prasan Bora — Software Engineer & Full Stack Developer based in
              India. Building web, mobile, and AI products with Next.js, React
              Native, and TypeScript.
            </p>
            {/* Social Links */}
            <ul className="flex items-center gap-4 list-none p-0 m-0" aria-label="Prasan Bora on social media">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className={`text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${social.hoverColor}`}
                      aria-label={`Prasan Bora on ${social.label}`}
                      title={`Prasan Bora on ${social.label}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Links Column */}
          <nav aria-label="Footer">
            <h2 className="font-semibold mb-4 text-base">Quick Links</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="About Prasan Bora">
                  About Prasan Bora
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="Selected work by Prasan Bora">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="Side projects by Prasan Bora">
                  Side Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/tech-stack"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="Prasan Bora tech stack and skills">
                  Tech Stack
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Column */}
          <div>
            <h2 className="font-semibold mb-4 text-base">Get In Touch</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  href="mailto:prasanbora23@gmail.com"
                  aria-label="Email Prasan Bora at prasanbora23@gmail.com">
                  <Mail className="h-4 w-4" aria-hidden />
                  prasanbora23@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  href="https://drive.google.com/file/d/1dPPUjzVTe544kEZB2ZwwFyqXBLDFQxXR/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Prasan Bora's resume (PDF)">
                  <FileText className="h-4 w-4" aria-hidden />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prasan Bora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
