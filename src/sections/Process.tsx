import { motion, useReducedMotion } from 'motion/react'
import { process } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { EASE_OUT_EXPO, VIEWPORT } from '@/lib/motion'

/**
 * The five stages from enquiry to handover.
 *
 * These genuinely run in order, so they are numbered and joined by a rail that
 * draws left to right as the section comes into view. The rail runs vertically
 * on narrow screens, where the steps stack.
 */
export function Process() {
  const reduce = useReducedMotion()

  return (
    <Section id="process">
      <div className="shell">
        <Reveal>
          <span aria-hidden className="rule-brass" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <Heading
              lead={process.heading.lead}
              emphasis={process.heading.emphasis}
              className="text-[clamp(2rem,4.4vw,3.5rem)]"
            />
            <p className="measure-tight text-sm text-chalk-dim">
              Every project follows the same five stages, with approvals handled
              before anything is fabricated.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 lg:mt-24">
          {/* Rail — horizontal on desktop. */}
          <motion.span
            aria-hidden
            initial={reduce ? undefined : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
            className="absolute inset-x-0 top-[7px] hidden h-px origin-left bg-line-2 lg:block"
          />

          {/* Rail — vertical on narrow screens. */}
          <motion.span
            aria-hidden
            initial={reduce ? undefined : { scaleY: 0 }}
            whileInView={reduce ? undefined : { scaleY: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
            className="absolute bottom-6 left-[3px] top-2 w-px origin-top bg-line-2 lg:hidden"
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-8">
            {process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12}>
                <li className="group relative pl-8 lg:pl-0">
                  {/* Marker */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-[3px] size-[7px] rounded-full bg-line-2 transition-colors duration-500 group-hover:bg-brass lg:static lg:mb-7 lg:block lg:size-3.5 lg:ring-8 lg:ring-ink"
                  />

                  <div className="lg:pr-6">
                    <span className="type-label text-brass">{step.n}</span>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.015em] text-chalk">
                      {step.title}
                    </h3>
                    <p className="measure mt-2.5 text-sm text-chalk-dim">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
