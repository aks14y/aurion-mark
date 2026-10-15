import { facility } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

/**
 * The in-house workshop.
 *
 * Set as one large condensed statement over a faint technical grid, because the
 * claim — that everything is built and inspected in-house — is the commercial
 * point of the section.
 */
export function Facility() {
  return (
    <Section id="facility" className="grain relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-line-2) 1px, transparent 1px), linear-gradient(90deg, var(--color-line-2) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage:
            'radial-gradient(ellipse 70% 70% at 30% 50%, black 20%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 70% at 30% 50%, black 20%, transparent 100%)',
        }}
      />

      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <span aria-hidden className="rule-brass" />
            <p className="mt-6 type-label text-chalk-dim">
              {facility.heading.lead}
              {facility.heading.emphasis}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-chalk [font-stretch:84%]">
              {facility.statement.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="measure mt-8 text-chalk-dim">{facility.body}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
          <h3 className="type-label text-chalk-faint">Workshops</h3>
          <ul className="mt-5 border-t border-line">
            {facility.workshops.map((shop) => (
              <li
                key={shop}
                className="flex items-center gap-4 border-b border-line py-4"
              >
                <span aria-hidden className="size-1 shrink-0 bg-brass" />
                <span className="text-sm text-chalk-dim">{shop}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-chalk-faint">
            Every unit is inspected and approved before it leaves the facility.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
