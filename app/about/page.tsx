"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CareerTimelineFixed } from "@/components/about/career-timeline-fixed";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6 md:py-16">
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10">
        <h1 className="text-pretty text-3xl font-semibold md:text-4xl">
          About
        </h1>
        <div className="mt-3 text-pretty text-muted-foreground md:text-lg space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}>
            I'm a Full-Stack Software Developer building Chefadora — a global
            food-tech platform that empowers millions of home cooks worldwide.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}>
            I contribute across the entire product lifecycle, developing both
            the web application and mobile app to deliver fast, scalable, and
            user-focused experiences.
          </motion.p>
          <div>
            <p className="font-medium text-foreground">Key Contributions</p>
            <ul className="list-disc pl-5 leading-relaxed">
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}>
                Built AI-powered automation and intelligent agents to eliminate
                manual workflows and boost operational efficiency.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}>
                Designed and developed scalable backend APIs and maintainable
                system architecture to support rapid product growth.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}>
                Enhanced mobile performance and feature delivery, creating a
                faster and smoother in-app experience for users.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}>
                Implemented and maintained CI/CD pipelines and DevOps workflows,
                reducing deployment friction and improving release velocity.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}>
                Led the end-to-end development of Cooking Mode, redefining how
                users cook and interact with recipes.
              </motion.li>
            </ul>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}>
            I love solving complex engineering challenges, improving
            performance, and shipping impactful features that deliver real
            value. I'm constantly learning, adapting, and applying modern
            technologies to grow as a developer.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}>
            I'm excited to continue building high-quality products at scale and
            contributing to experiences that reach a large number of users.
          </motion.p>
        </div>
      </motion.header>

      {/* Career Timeline */}
      <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle>Career Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <CareerTimelineFixed
                items={[
                  {
                    title: "Software Developer",
                    org: "Chefadora",
                    period: "Nov 2024 – Present",
                    summary:
                      "Developing and maintaining Chefadora’s web platform and mobile app; backend APIs, integrations, and shipping features from Figma to production.",
                  },
                  {
                    title: "Software Developer",
                    org: "Zarle Infotech",
                    period: "Nov 2024 – Present",
                    summary:
                      "TypeScript, Vercel and more; contributing to full‑stack initiatives. Hybrid, Noida.",
                  },
                  {
                    title: "Web Developer (Intern)",
                    org: "CantiLever.in",
                    period: "Aug 2024",
                    summary:
                      "Built MERN stack applications; collaborated across teams to design and deliver features.",
                  },
                  {
                    title: "Head of Public Relations",
                    org: "MAIT Alumni Cell",
                    period: "May 2023 – Jun 2024",
                    summary:
                      "Led PR team; managed social media, content design, and branding for alumni community.",
                  },
                  {
                    title: "Design Team Member",
                    org: "MAIT Alumni Cell",
                    period: "Jan 2023 – Jun 2024",
                    summary:
                      "Created social posts, event assets, and coordinated cross‑team design integrations.",
                  },
                  {
                    title: "Campus Ambassador",
                    org: "Shaastra, IIT Madras",
                    period: "Dec 2021 – Feb 2022",
                    summary:
                      "Organized campus events and managed social media outreach to drive engagement.",
                  },
                  {
                    title: "Operations Intern",
                    org: "Jacq",
                    period: "Nov 2021 – Jan 2022",
                    summary:
                      "Hands‑on with e‑commerce ops, WordPress site management, and product onboarding.",
                  },
                ]}
              />
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
