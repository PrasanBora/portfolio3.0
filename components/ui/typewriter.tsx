"use client"

import { useEffect, useState } from "react"

export function Typewriter({
  text,
  speed = 80,
  className,
  showCursor = true,
}: {
  text: string
  speed?: number
  className?: string
  showCursor?: boolean
}) {
  const [out, setOut] = useState("")

  useEffect(() => {
    let i = 0
    let raf: number | null = null
    const tick = () => {
      setOut((prev) => {
        if (i >= text.length) return prev
        return prev + text[i++]
      })
      if (i < text.length) {
        raf = window.setTimeout(tick, speed) as unknown as number
      }
    }
    tick()
    return () => {
      if (raf) window.clearTimeout(raf)
    }
  }, [text, speed])

  return (
    <span className={className} aria-label={text}>
      {out}
      {showCursor ? (
        <span className="ml-1 inline-block h-6 w-0.5 translate-y-0.5 bg-foreground animate-pulse" aria-hidden />
      ) : null}
    </span>
  )
}
