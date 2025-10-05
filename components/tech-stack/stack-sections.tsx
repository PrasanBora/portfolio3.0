"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Code2, Cpu, Database, Rocket, Server, Layout, Cloud, GitBranch, Palette, Search } from "lucide-react"

type Item = { title: string; desc: string; icon: React.ReactNode }

const skills: Item[] = [
  { title: "React", desc: "Components, hooks, state", icon: <Code2 className="size-5" /> },
  { title: "Next.js", desc: "App Router, RSC, routes", icon: <Server className="size-5" /> },
  { title: "TypeScript", desc: "Types for safety", icon: <Cpu className="size-5" /> },
  { title: "Node.js", desc: "APIs, auth, tooling", icon: <Rocket className="size-5" /> },
  { title: "Tailwind CSS", desc: "Utility-first UI", icon: <Palette className="size-5" /> },
  { title: "Postgres/Supabase", desc: "Relational data", icon: <Database className="size-5" /> },
  { title: "Git & GitHub", desc: "Collaboration, CI", icon: <GitBranch className="size-5" /> },
  { title: "Vercel", desc: "Deploy & preview", icon: <Cloud className="size-5" /> },
]

const services: Item[] = [
  {
    title: "Custom Website Design",
    desc: "Visually engaging, user‑focused experiences.",
    icon: <Layout className="size-5" />,
  },
  { title: "Responsive Development", desc: "Seamless across all devices.", icon: <Cloud className="size-5" /> },
  { title: "Cutting‑edge Tech", desc: "Dynamic sites with React & Next.js.", icon: <Rocket className="size-5" /> },
  { title: "Performance Optimization", desc: "Lightning‑fast, optimized builds.", icon: <Cpu className="size-5" /> },
  { title: "SEO‑friendly Development", desc: "Search‑friendly websites.", icon: <Search className="size-5" /> },
  { title: "Ongoing Support", desc: "Care beyond deployment.", icon: <Server className="size-5" /> },
]

function SectionGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          className="rounded-xl border bg-card p-5 shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
        >
          <div className="mb-3 flex items-center gap-2 text-primary">
            {it.icon}
            <h3 className="text-base font-semibold">{it.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

export function SkillsAndServices() {
  return (
    <main className="container mx-auto max-w-5xl space-y-12 px-4 py-12">
      <section className="space-y-2">
        <motion.h1
          className="text-balance text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          Skills — Tech Stacks
        </motion.h1>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          Tools I use to design, build, and ship reliable products.
        </motion.p>
      </section>

      <SectionGrid items={skills} />

      <section className="space-y-2 pt-4">
        <motion.h2
          className="text-2xl font-semibold md:text-3xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          What I can do — Services
        </motion.h2>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          I specialize in crafting high‑quality, bespoke websites that leave a lasting impression.
        </motion.p>
      </section>

      <SectionGrid items={services} />
    </main>
  )
}
