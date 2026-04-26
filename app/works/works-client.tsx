"use client";

import { motion } from "framer-motion";
import { WorkCard } from "@/components/works/work-card";

export default function WorksClient() {
  return (
    <article className="mx-auto max-w-6xl px-4 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-16">
        <span className="eyebrow">Work by Prasan Bora</span>
        <h1 className="section-heading mt-3">
          Selected Projects by Prasan Bora
        </h1>
        <p className="lead mt-4 max-w-2xl">
          A selection of products I&apos;ve contributed to — from AI platforms
          and SaaS apps to client websites and e-commerce builds.
        </p>
      </motion.div>

      <section className="space-y-12" aria-label="Featured client and product work">
        <WorkCard
          imageSrc="/images/works/chefadora-hero.png"
          imageAlt="Chefadora AI cooking assistant — Prasan Bora built the Cooking Mode feature and AI agents"
          eyebrow="AI Platform · 2024–Present"
          title="Chefadora"
          subtitle="AI-powered cooking assistant"
          description="Built the Cooking Mode feature and AI agents that handle most of the platform's operations. Working across the full stack — React Native, Next.js, and Node.js."
          ctaHref="https://www.chefadora.com/cooking-ai"
          ctaLabel="See the product"
          tags={["React Native", "Next.js", "Node.js", "AI Agents"]}
        />
        <WorkCard
          imageSrc="/images/projects/physio-hero.png"
          imageAlt="Korperheil physiotherapy clinic website built by Prasan Bora"
          eyebrow="Client Work · 2025"
          title="Korperheil"
          subtitle="Physiotherapy clinic website"
          description="A clean, fast website for a physiotherapy clinic. Focused on Core Web Vitals, accessibility, and turning visitors into booked appointments."
          ctaHref="https://korperheil.com"
          ctaLabel="Visit site"
          tags={["Next.js", "Tailwind CSS", "SEO"]}
        />
        <WorkCard
          imageSrc="/images/works/himalayan-valley-hero.png"
          imageAlt="Himalayan Valley premium tea e-commerce platform developed by Prasan Bora"
          eyebrow="E-Commerce · 2025"
          title="Himalayan Valley"
          subtitle="Premium tea e-commerce platform"
          description="Developed a full-stack e-commerce platform for a Himalayan tea brand. Built a custom product catalog with server-side rendering for SEO, integrated cart and checkout flow, and implemented a dynamic blog system (TeaTales) with a headless CMS. Optimized Core Web Vitals with lazy-loaded images and edge caching."
          ctaHref="https://www.himalayanvalleyproduct.com/"
          ctaLabel="Visit site"
          tags={["Next.js", "TypeScript", "Tailwind CSS", "Stripe"]}
        />
      </section>
    </article>
  );
}
