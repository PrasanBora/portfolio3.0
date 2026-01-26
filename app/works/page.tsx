"use client";

import { motion } from "framer-motion";
import { WorkCard } from "@/components/works/work-card";

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-16">
        <span className="eyebrow">Work</span>
        <h1 className="section-heading mt-3">Selected Projects</h1>
        <p className="lead mt-4 max-w-2xl">
          A selection of projects I&apos;ve contributed to—from AI platforms
          to client websites.
        </p>
      </motion.div>

      <div className="space-y-12">
        <WorkCard
          imageSrc="/images/works/chefadora-hero.png"
          imageAlt="Chefadora AI Cooking Assistant"
          eyebrow="AI Platform · 2024–Present"
          title="Chefadora"
          subtitle="AI-powered cooking assistant"
          description="Built the Cooking Mode feature and AI agents that handle most of the platform's operations. Working across the full stack—React Native, Next.js, and Node.js."
          ctaHref="https://www.chefadora.com/cooking-ai"
          ctaLabel="See the product"
        />
        <WorkCard
          imageSrc="/images/projects/physio-hero.png"
          imageAlt="Physiotherapy website hero"
          eyebrow="Client Work · 2025"
          title="Korperheil"
          subtitle="Physiotherapy clinic website"
          description="A clean, fast website for a physiotherapy clinic. Focused on performance and getting visitors to book appointments."
          ctaHref="https://korperheil.com"
          ctaLabel="Visit site"
        />
      </div>
    </div>
  )
}
