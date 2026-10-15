import { divisions } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'

/**
 * The nine trade divisions.
 *
 * This is a register, so it is numbered — the client's own site lists them as a
 * numbered set. Rows stay a constant height so nothing shifts under the pointer;
 * the interaction is carried by colour, the brass edge and a small slide.
 */
export function Divisions() {
  return (
    <Section divided id="services" className="bg-ink-2">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span aria-hidden className="rule-brass" />
              <Heading
                lead={divisions.heading.lead}
                emphasis={divisions.heading.emphasis}
                className="mt-6 text-[clamp(2rem,4vw,3.25rem)]"
              />
              <p className="mt-4 font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-normal text-chalk-faint">
                {divisions.subheading}
              </p>
              <p className="measure mt-7 text-sm text-chalk-dim">
                Nine divisions, one contract. Each trade is delivered by our own
                teams and coordinated under a single point of responsibility.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="lg:col-span-7 lg:col-start-6">
          {divisions.items.map((item, i) => (
            <Reveal key={item.id} delay={Math.min(i * 0.04, 0.3)}>
              <li className="group relative border-b border-line first:border-t">
                {/* Brass edge that grows in from the left on hover or focus. */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-brass transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100 group-focus-within:scale-y-100"
                />
                <div className="flex items-baseline gap-5 py-5 transition-[padding] duration-500 ease-[var(--ease-out-expo)] group-hover:pl-5 sm:gap-8 sm:group-hover:pl-7">
                  <span className="w-8 shrink-0 type-label text-chalk-faint transition-colors duration-400 group-hover:text-brass">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.0625rem,2.1vw,1.5rem)] font-medium leading-tight tracking-[-0.015em] text-chalk-dim transition-colors duration-400 group-hover:text-chalk">
                      {item.name}
                    </h3>
                    <p className="measure mt-2 text-sm text-chalk-faint transition-colors duration-400 group-hover:text-chalk-dim">
                      {item.summary}
                    </p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
