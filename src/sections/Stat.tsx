import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { EASE_OUT_EXPO } from '@/lib/motion'

type StatProps = {
  /** A figure such as "200+", "25+" or "09". */
  value: string
  label: string
}

/**
 * A figure that counts up the first time it scrolls into view.
 *
 * This is the page's one number moment, so it is the only place that animates a
 * value rather than a position. Reduced-motion visitors see the final figure.
 */
export function Stat({ value, label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -18% 0px' })
  const reduce = useReducedMotion()

  const parts = /^(\D*)(\d+)(.*)$/.exec(value)
  const prefix = parts?.[1] ?? ''
  const digits = parts?.[2] ?? ''
  const suffix = parts?.[3] ?? ''
  const target = digits ? Number(digits) : 0

  const [shown, setShown] = useState(reduce ? target : 0)

  useEffect(() => {
    if (!digits) return
    if (reduce) {
      setShown(target)
      return
    }
    if (!inView) return

    const controls = animate(0, target, {
      duration: 1.5,
      ease: EASE_OUT_EXPO,
      onUpdate: (v) => setShown(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, target, digits])

  const display = digits ? String(shown).padStart(digits.length, '0') : value

  return (
    <div ref={ref}>
      <div
        className="font-sans text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-white"
        style={{ color: '#ffffff' }}
      >
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-3 type-label text-ink-2/65">{label}</div>
    </div>
  )
}
