import { contact } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'

/**
 * Closing call to action.
 *
 * Deliberately quiet after the Projects grid: one heading, the practical contact
 * details in a plain definition list, and a single button.
 */
export function CTA() {
  const details = [
    { key: 'Office', value: contact.office },
    {
      key: 'Phone',
      value: contact.phones.join(' · '),
      href: `tel:${contact.phones[0].replace(/\s/g, '')}`,
    },
    {
      key: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    { key: 'Hours', value: contact.hours },
  ]

  return (
    <Section id="contact" className="grain relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full opacity-[0.13] blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, var(--color-brass) 0%, transparent 70%)',
        }}
      />

      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <span aria-hidden className="rule-brass" />
            <Heading
              lead={contact.heading.lead}
              emphasis={contact.heading.emphasis}
              className="mt-6 text-[clamp(2.25rem,5.5vw,4.25rem)]"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="measure mt-7 text-chalk-dim">
              Send us your drawings, a scope note or a site address. We will come
              back with a design direction, a bill of quantities and a programme.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LinkButton to="/contact">Get a Quote</LinkButton>
              <LinkButton
                to="/services"
                variant="outline"
                className="sm:inline-flex"
              >
                Review our services
              </LinkButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="lg:col-span-5 lg:col-start-8">
          <dl className="border-t border-line">
            {details.map(({ key, value, href }) => (
              <div
                key={key}
                className="flex items-baseline gap-6 border-b border-line py-4"
              >
                <dt className="w-20 shrink-0 type-label text-chalk-faint">
                  {key}
                </dt>
                <dd className="text-sm text-chalk-dim">
                  {href ? (
                    <a
                      href={href}
                      className="transition-colors duration-300 hover:text-brass"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
