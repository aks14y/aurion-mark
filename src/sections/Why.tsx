import { why } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'

export function Why() {
  return (
    <Section>
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <span aria-hidden className="rule-brass" />
          <Heading
            lead={why.heading.lead}
            emphasis={why.heading.emphasis}
            className="mt-6 text-[clamp(2rem,4.4vw,3.5rem)]"
          />
          <p className="measure mt-7 text-chalk-dim">{why.intro}</p>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <dl className="border-t border-line">
            {why.points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="border-b border-line py-7">
                  <dt className="font-display text-lg font-semibold tracking-[-0.01em] text-chalk">
                    {point.title}
                  </dt>
                  <dd className="measure mt-2.5 text-sm text-chalk-dim">
                    {point.body}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
