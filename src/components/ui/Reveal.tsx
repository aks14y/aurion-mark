import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE_OUT_EXPO, VIEWPORT } from '@/lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Seconds to wait before this element animates. */
  delay?: number
  /** Distance travelled, in pixels. */
  y?: number
  duration?: number
}

/**
 * Fades and lifts its children once they scroll into view.
 *
 * Motion is skipped entirely when the visitor has asked for reduced motion —
 * the content renders in place rather than being animated into place.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  duration = 0.65,
}: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  )
}
