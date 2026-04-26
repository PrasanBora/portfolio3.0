"use client";

import { motion } from "framer-motion";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function ProjectsClient() {
  return (
    <article className="mx-auto max-w-6xl px-4 section-padding">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 md:mb-24">
        <span className="eyebrow">Side Projects by Prasan Bora</span>
        <h1 className="section-heading mt-3">
          Side Projects by Prasan Bora — Stuff I built to learn
        </h1>
        <p className="lead mt-4 max-w-2xl">
          Not everything needs a business case. These are open-source projects I
          built to understand how something works — full-stack apps, real-time
          systems, browser extensions, and games.
        </p>
      </motion.header>

      <ProjectsGrid />

      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-28 md:mt-36 text-center"
      >
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Want to see more? Check out Prasan Bora&apos;s GitHub for additional
          projects and open-source contributions.
        </p>
        <Button asChild size="lg" className="mt-6">
          <a
            href="https://github.com/PrasanBora"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Prasan Bora's GitHub profile"
          >
            <Github className="mr-2 h-5 w-5" aria-hidden />
            View All Projects
          </a>
        </Button>
      </motion.aside>
    </article>
  );
}
