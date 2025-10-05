"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LikeButton({ initial = 0 }: { initial?: number }) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(initial)

  function toggle() {
    setLiked((prev) => !prev)
    setCount((c) => (!liked ? c + 1 : Math.max(0, c - 1)))
  }

  return (
    <Button
      type="button"
      variant={liked ? "default" : "secondary"}
      onClick={toggle}
      className="gap-2"
      aria-pressed={liked}
      aria-label={liked ? "Unlike project" : "Like project"}
    >
      <motion.span
        initial={false}
        animate={{ scale: liked ? 1.2 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <Heart className={liked ? "fill-current" : ""} size={18} />
      </motion.span>
      <span>{count}</span>
    </Button>
  )
}
