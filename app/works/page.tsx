"use client"

import { WorkCard } from "@/components/works/work-card"

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Selected Works</h1>

      <div className="space-y-10">
        <WorkCard
          imageSrc="/images/works/chefadora-hero.png"
          imageAlt="Chefadora AI Cooking Assistant"
          eyebrow="Product + AI"
          title="Chefadora – AI Cooking Assistant"
          subtitle="Building the future of cooking with AI"
          description="Contributing across web and mobile to deliver intelligent recipe assistance, hands‑free mode, and a smoother, faster user experience."
          role="Software Developer"
          duration="2024–Present"
          team="Chefadora"
          ctaHref="https://www.chefadora.com/cooking-ai"
          ctaLabel="See related work"
        />
        <WorkCard
          imageSrc="/images/projects/physio-hero.png"
          imageAlt="Physiotherapy website hero"
          eyebrow="Web Development"
          title="Physiotherapy Clinic Website"
          subtitle="Modern, accessible landing with strong value proposition"
          description="A clean medical services site with clear hierarchy, responsive layouts, and focused CTAs to improve conversions and user trust."
          role="Frontend Developer"
          duration="2025"
          team="Solo"
          ctaHref="https://korperheil.com"
          ctaLabel="View project"
        />
      </div>
    </div>
  )
}
