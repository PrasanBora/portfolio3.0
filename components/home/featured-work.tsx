"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredWorks = [
  {
    id: 1,
    category: "AI Platform",
    title: "Chefadora",
    subtitle: "AI-powered cooking assistant",
    description:
      "Built the Cooking Mode feature and AI agents that handle most of the platform's operations. Working across the full stack—React Native, Next.js, and Node.js.",
    image: "/images/works/chefadora-hero.png",
    href: "https://www.chefadora.com/cooking-ai",
    tags: ["React Native", "Next.js", "Node.js"],
  },
  {
    id: 2,
    category: "Client Work",
    title: "Korperheil",
    subtitle: "Physiotherapy clinic website",
    description:
      "A clean, fast website for a physiotherapy clinic. Focused on performance and getting visitors to book appointments.",
    image: "/images/projects/physio-hero.png",
    href: "https://korperheil.com",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    category: "E-Commerce",
    title: "Himalayan Valley",
    subtitle: "Premium tea e-commerce platform",
    description:
      "Developed a full-stack e-commerce platform for a Himalayan tea brand. Built a custom product catalog with SSR for SEO, integrated cart and checkout flow, and implemented a dynamic blog system (TeaTales) with a headless CMS.",
    image: "/images/works/himalayan-valley-hero.png",
    href: "https://www.himalayanvalleyproduct.com/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FeaturedWork() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth ?? 400;
    const gap = 32;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="section-heading mt-3">Featured Work</h2>
          </div>
          <div className="flex items-center gap-2">
            {/* Scroll arrows */}
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Button
              asChild
              variant="ghost"
              className="hidden md:flex items-center gap-2 group ml-2">
              <Link href="/works">
                View All
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Horizontal scroll container */}
        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
        >
          {featuredWorks.map((work) => (
            <motion.article
              key={work.id}
              variants={itemVariants}
              className="group relative shrink-0 w-[85vw] md:w-[calc(50%-0.75rem)] snap-start overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              {/* Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-muted">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full border">
                  {work.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  {work.title}
                </h3>
                <p className="text-muted-foreground font-medium mb-3">
                  {work.subtitle}
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {work.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 group/link">
                  View Project
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/works">
              View All Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
