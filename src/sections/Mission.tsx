import { mission } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Mission, vision and values.
 *
 * The client's copy here is long and already well written, so the job is
 * legibility rather than decoration: three columns, generous leading, and a
 * hanging rule on each that lifts it clear of the body text.
 */
export function Mission() {
  return (
    <Section divided id="about" className="bg-ink-2">
      <div className="shell">
        <Reveal>
          <span aria-hidden className="rule-brass" />
          <Heading
            lead={mission.heading.lead}
            emphasis={mission.heading.emphasis}
            className="mt-6 text-[clamp(2rem,4.4vw,3.5rem)]"
          />
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-12 lg:mt-20 lg:grid-cols-3 lg:gap-x-10">
          {mission.blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.09}>
              <article className="border-t border-line-2 pt-7">
                <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-chalk">
                  {block.title}
                </h3>
                <p className="mt-5 text-sm leading-[1.85] text-chalk-dim">
                  {block.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
