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
          ctaHref="/projects"
          ctaLabel="See related work"
        />
        <WorkCard
          imageSrc="/images/works/storyville.png"
          imageAlt="Case study cover"
          eyebrow="Product Design | Web"
          title="Portfolio Revamp 2025"
          subtitle="Personalized, interactive developer portfolio"
          description="A fast, subtly animated portfolio with liquid header, accessible UI, and modular case-study cards to highlight impact and process."
          role="Software Engineer, UX"
          duration="2025"
          team="Solo"
          ctaHref="/projects"
        />
        <WorkCard
          imageSrc="/images/works/float-mind.png"
          imageAlt="Immersive scene"
          eyebrow="Engineering | XR + Web"
          title="Interactive Work Highlights"
          subtitle="Immersive storytelling for selected projects"
          description="Reusable work-card layouts with gradient overlays, motion, and crisp typography—optimized for readability and performance."
          role="Full‑stack"
          duration="2024–2025"
          team="Collaborative"
          ctaHref="/projects"
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
          ctaHref="/projects"
          ctaLabel="View project"
        />
      </div>
    </div>
  )
}
