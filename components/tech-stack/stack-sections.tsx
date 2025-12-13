"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Rocket,
  Server,
  Layout,
  Cloud,
  GitBranch,
  Palette,
  Search,
  Container,
  TestTube,
} from "lucide-react";

type Item = { title: string; desc: string; icon: React.ReactNode };

const frontendSkills: Item[] = [
  {
    title: "Tailwind CSS",
    desc: "Utility-first CSS framework",
    icon: <Palette className="size-5" />,
  },
  {
    title: "Bootstrap",
    desc: "Responsive UI components",
    icon: <Layout className="size-5" />,
  },
  {
    title: "React.js",
    desc: "Component-based UI library",
    icon: <Code2 className="size-5" />,
  },
  {
    title: "Next.js",
    desc: "React framework with SSR",
    icon: <Server className="size-5" />,
  },
  {
    title: "React Native",
    desc: "Cross-platform mobile apps",
    icon: <Code2 className="size-5" />,
  },
];

const backendSkills: Item[] = [
  {
    title: "Express.js",
    desc: "Fast Node.js web framework",
    icon: <Rocket className="size-5" />,
  },
  {
    title: "Node.js",
    desc: "JavaScript runtime for servers",
    icon: <Server className="size-5" />,
  },
  {
    title: "Strapi",
    desc: "Headless CMS platform",
    icon: <Container className="size-5" />,
  },
];

const databaseSkills: Item[] = [
  {
    title: "MongoDB",
    desc: "NoSQL document database",
    icon: <Database className="size-5" />,
  },
  {
    title: "PostgreSQL",
    desc: "Advanced relational database",
    icon: <Database className="size-5" />,
  },
  {
    title: "Redis",
    desc: "In-memory data structure store",
    icon: <Cpu className="size-5" />,
  },
];

const toolsSkills: Item[] = [
  {
    title: "Git",
    desc: "Version control system",
    icon: <GitBranch className="size-5" />,
  },
  {
    title: "SQL",
    desc: "Database query language",
    icon: <Database className="size-5" />,
  },
  {
    title: "APIs",
    desc: "RESTful & GraphQL integration",
    icon: <Rocket className="size-5" />,
  },
  {
    title: "Testing",
    desc: "Unit & integration testing",
    icon: <TestTube className="size-5" />,
  },
  {
    title: "AWS",
    desc: "Cloud infrastructure services",
    icon: <Cloud className="size-5" />,
  },
  {
    title: "Vercel",
    desc: "Deployment & hosting platform",
    icon: <Cloud className="size-5" />,
  },
  {
    title: "Terraform",
    desc: "Infrastructure as code",
    icon: <Container className="size-5" />,
  },
];

const services: Item[] = [
  {
    title: "Custom Website Design",
    desc: "Visually engaging, user‑focused experiences.",
    icon: <Layout className="size-5" />,
  },
  {
    title: "Responsive Development",
    desc: "Seamless across all devices.",
    icon: <Cloud className="size-5" />,
  },
  {
    title: "Cutting‑edge Tech",
    desc: "Dynamic sites with React & Next.js.",
    icon: <Rocket className="size-5" />,
  },
  {
    title: "Performance Optimization",
    desc: "Lightning‑fast, optimized builds.",
    icon: <Cpu className="size-5" />,
  },
  {
    title: "SEO‑friendly Development",
    desc: "Search‑friendly websites.",
    icon: <Search className="size-5" />,
  },
  {
    title: "Ongoing Support",
    desc: "Care beyond deployment.",
    icon: <Server className="size-5" />,
  },
];

function SectionGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.35, delay: i * 0.05 }}>
          <div className="mb-3 flex items-center gap-2 text-primary">
            {it.icon}
            <h3 className="text-base font-semibold">{it.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  );
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
          transition={{ duration: 0.35 }}>
          Skills — Tech Stacks
        </motion.h1>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}>
          Tools and technologies I use to design, build, and ship reliable
          products.
        </motion.p>
      </section>

      <section className="space-y-6">
        <motion.h2
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          Frontend
        </motion.h2>
        <SectionGrid items={frontendSkills} />
      </section>

      <section className="space-y-6">
        <motion.h2
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          Backend
        </motion.h2>
        <SectionGrid items={backendSkills} />
      </section>

      <section className="space-y-6">
        <motion.h2
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          Databases
        </motion.h2>
        <SectionGrid items={databaseSkills} />
      </section>

      <section className="space-y-6">
        <motion.h2
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          Tools & Infrastructure
        </motion.h2>
        <SectionGrid items={toolsSkills} />
      </section>

      <section className="space-y-2 pt-4">
        <motion.h2
          className="text-2xl font-semibold md:text-3xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}>
          What I can do — Services
        </motion.h2>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}>
          I specialize in crafting high‑quality, bespoke websites that leave a
          lasting impression.
        </motion.p>
      </section>

      <SectionGrid items={services} />
    </main>
  );
}
