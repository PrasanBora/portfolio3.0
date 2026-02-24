"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Briefcase, GraduationCap, Award, Users } from "lucide-react"

export type TimelineItem = {
  title: string
  org?: string
  period?: string
  summary?: string
  achievements?: string[]
}

function getRoleIcon(title: string) {
  const t = title.toLowerCase()
  if (t.includes("intern")) return GraduationCap
  if (t.includes("ambassador") || t.includes("head") || t.includes("member")) return Users
  if (t.includes("operations")) return Award
  return Briefcase
}

function isCurrent(period?: string) {
  return !!period && period.toLowerCase().includes("present")
}

const ease = [0.22, 1, 0.36, 1] as const

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease },
  }),
}

const expandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto" as const, opacity: 1, transition: { duration: 0.35, ease } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.25, ease } },
}

export function CareerTimelineFixed({ items }: { items: TimelineItem[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  return (
    <div className="relative">
      <div className="absolute left-4.5 md:left-5.5 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

      <ul className="space-y-2">
        {items.map((it, idx) => {
          const current = isCurrent(it.period)
          const isExpanded = expandedIndex === idx
          const Icon = getRoleIcon(it.title)

          return (
            <motion.li
              key={idx}
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              className="relative pl-12 md:pl-14"
            >
              <motion.span
                className={`absolute left-1.5 md:left-2.5 top-4 flex size-5 items-center justify-center rounded-full ring-2 ring-background transition-colors ${
                  current
                    ? "bg-primary text-primary-foreground"
                    : isExpanded
                      ? "bg-primary/80 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
                animate={{ scale: isExpanded ? 1.15 : 1 }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
              >
                <Icon className="size-2.5" />
              </motion.span>
              {current && (
                <span className="absolute left-1.5 md:left-2.5 top-4 size-5 rounded-full bg-primary/30 animate-ping" aria-hidden="true" />
              )}
              <button
                onClick={() => toggle(idx)}
                className={`w-full text-left rounded-xl border p-4 transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? "bg-muted/50 border-primary/20 shadow-sm"
                    : "bg-transparent border-transparent hover:bg-muted/30 hover:border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {current && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                          Current
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">{it.period}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {it.title}
                    </h3>
                    {it.org && (
                      <p className="text-sm text-muted-foreground">{it.org}</p>
                    )}
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-1 shrink-0 text-muted-foreground"
                  >
                    <ChevronDown className="size-4" />
                  </motion.div>
                </div>

                {it.summary && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {it.summary}
                  </p>
                )}
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && it.achievements && it.achievements.length > 0 && (
                  <motion.div
                    variants={expandVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <ul className="mx-4 mb-2 mt-1 space-y-2 border-l-2 border-primary/20 pl-4">
                      {it.achievements.map((a, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.06 }}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mr-2 text-primary">▸</span>
                          {a}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
