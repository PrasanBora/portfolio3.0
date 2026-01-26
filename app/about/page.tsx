"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CareerTimelineFixed } from "@/components/about/career-timeline-fixed";
import { ExternalLink, FileText } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 section-padding md:px-6">
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16">
        <span className="eyebrow">About</span>
        <h1 className="section-heading mt-3">
          A bit about me
        </h1>
        <div className="mt-6 text-pretty text-muted-foreground md:text-lg space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}>
            I&apos;m a software engineer who builds products across the full stack.
            React Native for mobile, Next.js for web, Node.js for backend.
            Whatever the problem needs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}>
            Some things I&apos;ve shipped:
          </motion.p>
          <div>
            <ul className="list-disc pl-5 leading-relaxed space-y-1">
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}>
                Built AI agents that automated 80% of manual operations
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}>
                Shipped the Cooking Mode feature from zero to production
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}>
                Fixed performance issues that were making the mobile app slow
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}>
                Set up CI/CD so deployments stopped being painful
              </motion.li>
            </ul>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}>
            Before this, I did an internship, ran PR for a college club, and built
            random projects to learn things. Still doing that last part.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}>
            I don&apos;t have a grand philosophy about code. I just try to build things
            that work, learn from mistakes, and ship often.
          </motion.p>
        </div>
      </motion.header>

      {/* Writing */}
      <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle>Writing</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="https://dev.to/prasan_bora/upgrading-postgresql-13-to-17-on-aws-rds-with-minimal-downtime-29eo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 -m-4 rounded-xl transition-colors hover:bg-muted/50">
                <div className="shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
                  <FileText className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    Upgrading PostgreSQL 13 to 17 on AWS RDS with Minimal Downtime
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A practical guide on upgrading PostgreSQL on AWS RDS while keeping downtime to a minimum.
                  </p>
                  <span className="inline-flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    dev.to
                    <ExternalLink className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Career Timeline */}
      <section className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle>Where I&apos;ve been</CardTitle>
            </CardHeader>
            <CardContent>
              <CareerTimelineFixed
                items={[
                  {
                    title: "Software Developer",
                    org: "Chefadora",
                    period: "Nov 2024 – Present",
                    summary:
                      "Developing and maintaining Chefadora's web platform and mobile app; backend APIs, integrations, and shipping features from Figma to production.",
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
