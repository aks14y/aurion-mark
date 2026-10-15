import { why } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { photos } from '@/data/images'

export function Why() {
  return (
    <section id="why" className="bg-ink-2 py-20 text-ink sm:py-28 lg:py-32">
      <div className="shell">
        <div className="overflow-hidden rounded-[1.75rem] bg-ink text-ink-2 lg:grid lg:grid-cols-2">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:min-h-[34rem] lg:p-14">
            <Reveal>
              <p className="mb-8 max-w-[12ch] font-display text-[clamp(2.8rem,5.6vw,5.6rem)] leading-[0.94] tracking-[-0.015em]">
                One partner.<br />Total delivery.
              </p>
              <p className="max-w-[38ch] text-base leading-relaxed text-ink-2/75 sm:text-lg">
                {why.intro}
              </p>
            </Reveal>
            <p className="mt-12 text-sm text-ink-2/50">Designed, fabricated and installed by one accountable team.</p>
          </div>

          <div className="relative flex min-h-[28rem] flex-col justify-end overflow-hidden bg-ink-3 p-7 sm:p-10 lg:min-h-[34rem] lg:p-14">
            <img
              src={photos.welding.src}
              alt={photos.welding.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-45"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/65 to-ink/15" />
            <dl className="relative z-10">
              {why.points.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.08}>
                  <div className="grid gap-2 border-t border-white/25 py-5 sm:grid-cols-[0.85fr_1.15fr] sm:gap-6">
                    <dt className="font-display text-lg leading-tight text-ink-2 sm:text-xl">{point.title}</dt>
                    <dd className="text-sm leading-relaxed text-ink-2/75">{point.body}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
