"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type WorkCardProps = {
  category?: string
  title: string
  subtitle?: string
  description: string
  role?: string
  duration?: string
  team?: string
  imageSrc: string
  ctaHref?: string
  className?: string
  eyebrow?: string
  imageAlt?: string
  ctaLabel?: string
}

export function WorkCard({
  category,
  title,
  subtitle,
  description,
  role,
  duration,
  team,
  imageSrc,
  ctaHref,
  className,
  eyebrow,
  imageAlt,
  ctaLabel,
}: WorkCardProps) {
  const displayCategory = category ?? eyebrow
  return (
    <motion.section
      tabIndex={0}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg",
        className,
      )}
      aria-label={title}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      >
        <Image
          src={imageSrc || "/placeholder.svg?height=800&width=1600&query=work%20hero%20image"}
          alt={imageAlt ?? ""}
          fill
          priority={false}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-6 p-6 md:grid-cols-2 md:p-12 transition-opacity duration-300 ease-out group-hover:opacity-0 group-focus-within:opacity-0">
        <div className="max-w-xl text-foreground">
          {displayCategory ? <p className="mb-2 text-sm/5 tracking-wide opacity-90">{displayCategory}</p> : null}
          <h3 className="text-pretty text-3xl font-semibold md:text-4xl">{title}</h3>
          {subtitle ? <p className="mt-1 text-pretty text-xl font-medium opacity-90">{subtitle}</p> : null}
          <p className="mt-4 text-pretty text-base/6 opacity-90">{description}</p>

          <div className="mt-8 space-y-5">
            {role ? (
              <div>
                <p className="text-sm/5 opacity-80">Role</p>
                <p className="border-b border-foreground/20 pb-3 text-base/6">{role}</p>
              </div>
            ) : null}
            {duration ? (
              <div>
                <p className="text-sm/5 opacity-80">Duration</p>
                <p className="border-b border-foreground/20 pb-3 text-base/6">{duration}</p>
              </div>
            ) : null}
            {team ? (
              <div>
                <p className="text-sm/5 opacity-80">Team</p>
                <p className="border-b border-foreground/20 pb-3 text-base/6">{team}</p>
              </div>
            ) : null}
          </div>

          {ctaHref ? (
            <div className="mt-8">
              <Button asChild className="rounded-full">
                <Link href={ctaHref}>{ctaLabel ?? "View case study"}</Link>
              </Button>
            </div>
          ) : null}
        </div>

        {/* Right side kept for layout balance; image already fills background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="hidden h-[420px] md:block"
          aria-hidden
        />
      </div>
    </motion.section>
  )
}
