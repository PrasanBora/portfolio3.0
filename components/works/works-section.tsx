"use client"

import { WorkCard } from "@/components/works/work-card"
import { motion } from "framer-motion"

export function WorksSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-balance text-2xl font-semibold md:mb-8 md:text-3xl"
      >
        Selected Works
      </motion.h2>

      <div className="space-y-8">
        <WorkCard
          category="Tablet Design | Education"
          title="Storyville"
          description="An efficient book-discovery solution for a children's education tablet app, achieving a 92% NPS through exploring a range of design approaches."
          role="UI/UX Design, UX Research"
          duration="6 Weeks"
          imageSrc="/images/works/storyville.png"
          ctaHref="#"
        />

        <WorkCard
          category="AR+VR Design | XR"
          title="Float Mind (The Global XR Challenge Finalist)"
          description="An AI-powered, gamified meditation tool using AR/VR for effective emotional processing in just 10 minutes a day."
          role="UX Design, 3D Design"
          duration="Dec 2024 - Jan 2025"
          team="UX + 3D Designer, AI + XR Engineer"
          imageSrc="/images/works/float-mind.png"
          ctaHref="#"
        />
      </div>
    </section>
  )
}
