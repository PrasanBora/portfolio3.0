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
        <span className="eyebrow">Projects</span>
        <h1 className="section-heading mt-3">
          Stuff I built to figure out how things work
        </h1>
        <p className="lead mt-4 max-w-2xl">
          Not everything needs a business case. Open-source side projects —
          full-stack apps, real-time systems, browser extensions, a few games.
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
          More on GitHub — half-finished experiments and the rest.
        </p>
        <Button asChild size="lg" className="mt-6">
          <a
            href="https://github.com/PrasanBora"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prasan Bora on GitHub"
          >
            <Github className="mr-2 h-5 w-5" aria-hidden />
            View All Projects
          </a>
        </Button>
      </motion.aside>
    </article>
  );
}
