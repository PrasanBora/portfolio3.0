"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ScrollTypewriter } from "@/components/ui/scroll-typewriter"

export function AboutPreview() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" })

  return (
    <section id="about" ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-semibold text-pretty"
        >
          <ScrollTypewriter
            text={"Hi, I'm Prasan Bora"}
            start={inView}
            showCursor={false}
            className="text-foreground"
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          I'm a Full-Stack Software Developer building Chefadora — a global food-tech platform that empowers millions of
          home cooks. I love solving complex engineering challenges, improving performance, and shipping impactful
          features at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          className="mt-6"
        >
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <li className="bg-card/50 border rounded-lg p-4">
              Built AI-powered automation and intelligent agents to boost efficiency.
            </li>
            <li className="bg-card/50 border rounded-lg p-4">Designed scalable APIs and maintainable systems.</li>
            <li className="bg-card/50 border rounded-lg p-4">Enhanced mobile performance and feature delivery.</li>
            <li className="bg-card/50 border rounded-lg p-4">Led end‑to‑end Cooking Mode development.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
