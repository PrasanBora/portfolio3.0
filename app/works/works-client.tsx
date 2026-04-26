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
        <span className="eyebrow">Work</span>
        <h1 className="section-heading mt-3">
          Selected work
        </h1>
        <p className="lead mt-4 max-w-2xl">
          Products I&apos;ve shipped — AI platforms, SaaS apps, client sites,
          a bit of e-commerce.
        </p>
      </motion.div>

      <section className="space-y-12" aria-label="Featured client and product work">
        <WorkCard
          imageSrc="/images/works/chefadora-hero.png"
          imageAlt="Chefadora — AI cooking assistant app"
          eyebrow="AI Platform · 2024–Present"
          title="Chefadora"
          subtitle="AI-powered cooking assistant"
          description="Built the Cooking Mode feature end-to-end and the AI agents that run most of the platform's day-to-day ops. Full stack — React Native, Next.js, Node.js."
          ctaHref="https://www.chefadora.com/cooking-ai"
          ctaLabel="See the product"
          tags={["React Native", "Next.js", "Node.js", "AI Agents"]}
        />
        <WorkCard
          imageSrc="/images/projects/physio-hero.png"
          imageAlt="Korperheil — physiotherapy clinic website"
          eyebrow="Client Work · 2025"
          title="Korperheil"
          subtitle="Physiotherapy clinic website"
          description="Fast, clean site for a physio clinic. Built for Core Web Vitals, accessibility, and turning visitors into booked appointments."
          ctaHref="https://korperheil.com"
          ctaLabel="Visit site"
          tags={["Next.js", "Tailwind CSS", "SEO"]}
        />
        <WorkCard
          imageSrc="/images/works/himalayan-valley-hero.png"
          imageAlt="Himalayan Valley — premium tea e-commerce site"
          eyebrow="E-Commerce · 2025"
          title="Himalayan Valley"
          subtitle="Premium tea e-commerce platform"
          description="Full-stack e-commerce build for a Himalayan tea brand — SSR product catalog for SEO, cart and checkout, plus a headless-CMS-powered blog (TeaTales). Lazy-loaded images and edge caching to keep Core Web Vitals green."
          ctaHref="https://www.himalayanvalleyproduct.com/"
          ctaLabel="Visit site"
          tags={["Next.js", "TypeScript", "Tailwind CSS", "Stripe"]}
        />
      </section>
    </article>
  );
}
