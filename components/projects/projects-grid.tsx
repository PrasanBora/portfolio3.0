"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github } from "lucide-react";

type Project = {
  id: string;
  title: string;
  date: string;
  description: string;
  features: string[];
  stats: { value: string; label: string }[];
  tech: string[];
  tags: string[];
  demo?: string;
  repo?: string;
  image?: string;
  imageAlt?: string;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function ProjectsGrid() {
  const { data = [], isLoading } = useSWR<Project[]>("/api/projects", fetcher);

  if (isLoading) {
    return (
      <div className="space-y-24">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-80 animate-pulse rounded-2xl bg-muted"
            aria-hidden
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-28 md:space-y-36">
      {data.map((project, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col gap-8 lg:gap-12 ${
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center`}
          >
            {/* Content Side */}
            <div className="flex-1 space-y-6">
              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                {project.description}
              </p>

              {/* Key Features */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border/50 bg-muted/50 px-4 py-2.5 text-center"
                  >
                    <div className="text-sm font-semibold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 pt-2">
                {project.demo ? (
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Project
                    </a>
                  </Button>
                ) : null}
                {project.repo ? (
                  <Button asChild variant="outline">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>

            {/* Image Side */}
            {project.image ? (
              <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/30 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    loading="lazy"
                    className="w-full object-cover aspect-video transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}
