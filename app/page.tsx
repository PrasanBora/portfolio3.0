"use client";

import { useEffect } from "react";
import { Hero } from "@/components/hero";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { AboutPreview } from "@/components/home/about-preview";
import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";

export default function HomePage() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  const quickLinks = [
    {
      href: "/works",
      icon: Briefcase,
      title: "Works",
      description: "Case studies and highlights",
    },
    {
      href: "/projects",
      icon: Code2,
      title: "Projects",
      description: "All projects and experiments",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {quickLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-lg border border-border p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50">
                <Icon className="h-8 w-8 text-primary mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-medium mb-1">{link.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      <AboutPreview />

      <ScrollToTop />
    </div>
  );
}
