import { motion, useReducedMotion } from 'motion/react'
import { EASE_OUT_EXPO, maskLine, stagger } from '@/lib/motion'
import { hero, spec } from '@/data/site'
import { photos } from '@/data/images'
import { LinkButton } from '@/components/ui/Button'

export function Hero() {
  const reduce = useReducedMotion()
  const container = reduce
    ? {}
    : { variants: stagger(0.1, 0.2), initial: 'hidden' as const, animate: 'show' as const }

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-ink">
      <motion.img
        src={photos.hero.src}
        alt={photos.hero.alt}
        initial={reduce ? undefined : { scale: 1.12, opacity: 0.45 }}
        animate={reduce ? undefined : { scale: 1, opacity: 0.82 }}
        transition={{ duration: 1.8, ease: EASE_OUT_EXPO }}
        className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[68%_center] lg:object-center"
      />
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { scale: [1, 1.04, 1], opacity: [0.52, 0.42, 0.52] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,25,27,.88)_0%,rgba(24,25,27,.48)_48%,rgba(24,25,27,.12)_100%)]"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/80 to-transparent" />

      <motion.div {...container} className="shell relative flex min-h-svh flex-col justify-end pb-8 pt-36 sm:pb-12 lg:pb-14">
        <div className="max-w-3xl">
          <h1 className="max-w-none font-display text-[clamp(2.8rem,7.2vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.015em] text-ink-2">
            {hero.heading.map((line) => (
              <span key={line} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                <motion.span variants={reduce ? undefined : maskLine} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            variants={reduce ? undefined : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } } }}
            className="mt-7 max-w-lg text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.42] text-ink-2/80"
          >
            {hero.intro}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton to="/services" className="rounded-full px-6">Explore services</LinkButton>
            <LinkButton to="/contact" variant="outline" className="rounded-full border-white/40 text-ink-2 hover:border-white hover:bg-white/10 hover:text-white">Request consultation</LinkButton>
          </div>
        </div>

        <div className="mt-16 border-t border-white/25 pt-5 text-ink-2/75">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 sm:gap-x-12">
            {spec.slice(0, 4).map(({ key, value }) => (
              <div key={key}>
                <dt className="type-label text-ink-2/55">{key}</dt>
                <dd className="mt-1 max-w-[10rem] text-sm leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  )
}
