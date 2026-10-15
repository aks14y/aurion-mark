import { motion, useReducedMotion } from 'motion/react'
import { EASE_OUT_EXPO, maskLine, stagger } from '@/lib/motion'
import { hero, spec, tagline } from '@/data/site'
import { photos } from '@/data/images'
import { LinkButton } from '@/components/ui/Button'

export function Hero() {
  const reduce = useReducedMotion()
  const container = reduce
    ? {}
    : { variants: stagger(0.09, 0.15), initial: 'hidden' as const, animate: 'show' as const }

  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-ink pb-12 pt-32 sm:pb-16">
      <div className="absolute inset-0 -z-10 bg-ink">
        <img
          src={photos.hero.src}
          alt={photos.hero.alt}
          className="h-full w-full object-cover object-center opacity-55 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,25,27,.94)_0%,rgba(24,25,27,.68)_42%,rgba(24,25,27,.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
      </div>

      <div className="shell">
        <motion.div {...container} className="max-w-6xl">
          <motion.p
            variants={reduce ? undefined : { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.7, ease: EASE_OUT_EXPO } } }}
            className="type-label text-chalk-dim"
          >
            {hero.eyebrow}
          </motion.p>
          <h1 className="mt-5 max-w-[10ch] font-display text-[clamp(4rem,12vw,11rem)] font-normal leading-[0.82] tracking-[-0.055em] text-chalk">
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
            className="mt-8 max-w-xl text-[clamp(1.2rem,2vw,1.65rem)] leading-tight text-chalk"
          >
            {tagline.map(({ lead, emphasis }, i) => (
              <span key={emphasis}>
                {i > 0 ? ' ' : ''}{lead}<em className="font-normal italic text-brass">{emphasis}</em>
              </span>
            ))}
          </motion.p>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <motion.div
              variants={reduce ? undefined : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } } }}
              className="lg:col-span-5"
            >
              <p className="measure text-chalk-dim">{hero.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <LinkButton to="/contact">Start a project</LinkButton>
                <LinkButton to="/projects" variant="outline">See our work</LinkButton>
              </div>
            </motion.div>
            <motion.div
              variants={reduce ? undefined : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } } }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <dl className="border-t border-white/25">
                {spec.slice(0, 4).map(({ key, value }) => (
                  <div key={key} className="flex items-baseline gap-6 border-b border-white/20 py-3">
                    <dt className="w-24 shrink-0 type-label text-chalk-faint">{key}</dt>
                    <dd className="text-sm text-chalk-dim">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
