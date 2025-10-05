"use client"

import { ProjectsGrid } from "@/components/projects/projects-grid"

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h1>
      <ProjectsGrid />
    </div>
  )
}
