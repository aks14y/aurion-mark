import { facility } from '@/data/site'
import { photos } from '@/data/images'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'

export function Facility() {
  return (
    <Section id="facility" className="bg-ink-2 text-ink">
      <div className="shell">
        <div className="overflow-hidden rounded-[1.75rem] bg-ink-3 lg:grid lg:grid-cols-2">
          <Reveal className="relative min-h-[22rem] lg:min-h-[38rem]">
            <img
              src={photos.workshops.src}
              alt={photos.workshops.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Reveal>

          <div className="flex flex-col justify-center p-7 text-ink-2 sm:p-10 lg:p-14">
            <Reveal>
              <p className="max-w-[14ch] font-display text-[clamp(2.5rem,4.4vw,4.2rem)] leading-[0.96] tracking-[-0.015em]">
                Built here.<br />Ready on time.
              </p>
              <p className="mt-7 max-w-[42ch] text-base leading-relaxed text-ink-2/75 sm:text-lg">
                {facility.body}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-ink-2/90">
                {facility.workshops.map((shop) => (
                  <li key={shop} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-brass" />
                    {shop}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm text-ink-2/55">Each unit is inspected and approved before it leaves the workshop.</p>
              <LinkButton to="/facility" variant="outline" className="mt-8 w-fit rounded-full border-white/35 text-ink-2 hover:bg-white/10 hover:text-ink-2">
                Inside our facility
              </LinkButton>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
