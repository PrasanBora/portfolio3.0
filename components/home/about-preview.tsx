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
          I’m a software developer working on Chefadora, contributing to both the web application and mobile app. I love
          solving complex problems, designing scalable systems, and shipping meaningful products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          className="mt-6"
        >
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <li className="bg-card/50 border rounded-lg p-4">
              Developing internal automation tools that reduce manual effort.
            </li>
            <li className="bg-card/50 border rounded-lg p-4">Building scalable APIs and maintainable systems.</li>
            <li className="bg-card/50 border rounded-lg p-4">Enhancing mobile app performance and features.</li>
            <li className="bg-card/50 border rounded-lg p-4">Leading the end‑to‑end Cooking Mode experience.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
