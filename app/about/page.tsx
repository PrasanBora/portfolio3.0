"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CareerTimelineFixed } from "@/components/about/career-timeline-fixed"

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6 md:py-16">
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h1 className="text-pretty text-3xl font-semibold md:text-4xl">About</h1>
        <div className="mt-3 text-pretty text-muted-foreground md:text-lg space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            I’m a software developer working on Chefadora, a global food-tech platform, where I contribute to the
            development of both the web application and the mobile app.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            My role covers everything from creating backend APIs with Node.js and Strapi to turning Figma designs into
            user-ready experiences with Next.js and React Native.
          </motion.p>
          <div>
            <p className="font-medium text-foreground">Some of my recent contributions include:</p>
            <ul className="list-disc pl-5 leading-relaxed">
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                Developing internal automation tools that significantly reduced manual effort.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                Building scalable APIs and designing maintainable systems that support future growth.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Working on the mobile app to deliver new features and enhance overall app performance to create a
                faster, smoother experience.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                Leading the end-to-end development of Cooking Mode, an innovative feature that redefines the cooking
                experience for users.
              </motion.li>
            </ul>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            I enjoy solving complex problems, designing systems that scale, and working across the stack to deliver
            products that make a real impact. Always curious and adaptable, I continuously learn and apply modern
            practices to keep improving as a developer.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            I’m excited to keep growing by tackling challenging problems at scale and contributing to products that
            reach millions of users.
          </motion.p>
        </div>
      </motion.header>

      {/* Career Timeline */}
      <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
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
                    summary: "TypeScript, Vercel and more; contributing to full‑stack initiatives. Hybrid, Noida.",
                  },
                  {
                    title: "Web Developer (Intern)",
                    org: "CantiLever.in",
                    period: "Aug 2024",
                    summary: "Built MERN stack applications; collaborated across teams to design and deliver features.",
                  },
                  {
                    title: "Head of Public Relations",
                    org: "MAIT Alumni Cell",
                    period: "May 2023 – Jun 2024",
                    summary: "Led PR team; managed social media, content design, and branding for alumni community.",
                  },
                  {
                    title: "Design Team Member",
                    org: "MAIT Alumni Cell",
                    period: "Jan 2023 – Jun 2024",
                    summary: "Created social posts, event assets, and coordinated cross‑team design integrations.",
                  },
                  {
                    title: "Campus Ambassador",
                    org: "Shaastra, IIT Madras",
                    period: "Dec 2021 – Feb 2022",
                    summary: "Organized campus events and managed social media outreach to drive engagement.",
                  },
                  {
                    title: "Operations Intern",
                    org: "Jacq",
                    period: "Nov 2021 – Jan 2022",
                    summary: "Hands‑on with e‑commerce ops, WordPress site management, and product onboarding.",
                  },
                ]}
              />
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  )
}
