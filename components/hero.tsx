"use client";

import { motion } from "framer-motion";
import LiquidEther from "@/components/effects/liquid-ether-client";
import { Typewriter } from "@/components/ui/typewriter";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden border-b border-border">
      <div className="relative w-full h-screen">
        <LiquidEther
          colors={["#6dbfb8", "#5fb0a8", "#7fd3cb"]}
          mouseForce={23}
          cursorSize={90}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
          <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm text-muted-foreground">
              Software Engineer • Problem Solver • Web &amp; Mobile App
              Developer
            </motion.span>

            <motion.h1
              className="text-3xl md:text-5xl font-semibold text-balance"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}>
              <Typewriter
                text={"Hi, I'm Prasan Bora"}
                speed={250}
                showCursor={false}
              />
            </motion.h1>

            <motion.p
              className="max-w-2xl leading-relaxed text-pretty text-muted-foreground"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              I build fast, delightful full-stack web and mobile experiences. I
              love shipping high-impact products, polishing UX, and solving hard
              problems end-to-end.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
