import { Link } from 'react-router-dom'
import { projects } from '@/data/site'
import { photos } from '@/data/images'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'

const projectImages = [photos.structure, photos.glazing, photos.pipelines, photos.oil]

export function Projects() {
  return (
    <Section divided id="projects" className="bg-ink-2">
      <div className="shell">
        <Reveal>
          <span aria-hidden className="rule-brass" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <Heading
              lead={projects.heading.lead}
              emphasis={projects.heading.emphasis}
              className="text-[clamp(2rem,4.4vw,3.5rem)]"
            />
            <p className="measure-tight text-sm text-chalk-dim">
              Delivered across commercial, residential, industrial and oil field
              sectors in the UAE.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12">
          {projects.categories.map((category, i) => {
            const image = projectImages[i]
            const span = i === 0 ? 'lg:col-span-7' : i === 1 ? 'lg:col-span-5' : i === 2 ? 'lg:col-span-5' : 'lg:col-span-7'
            return (
              <Reveal key={category.name} delay={i * 0.08} className={span}>
                <li className="group relative h-full">
                  <Link to="/projects" className="relative flex min-h-[22rem] h-full flex-col justify-end overflow-hidden bg-ink p-6 sm:min-h-[28rem] sm:p-8">
                    <img src={image.src} alt={image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-65 grayscale transition duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 group-hover:opacity-85 group-hover:grayscale-0" />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                    <span className="relative type-label text-chalk-faint transition-colors duration-500 group-hover:text-brass">{String(i + 1).padStart(2, '0')}</span>
                    <span className="relative mt-16 block max-w-sm">
                      <span className="block font-display text-[clamp(1.5rem,2.4vw,2.2rem)] font-normal leading-tight tracking-[-0.02em] text-chalk">{category.name}</span>
                      <span className="mt-2 block text-sm text-chalk-dim">{category.count}</span>
                      <span aria-hidden className="mt-6 block h-1 w-14 bg-brass transition-[width] duration-500 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
