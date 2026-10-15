import type { ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'

type PageHeaderProps = {
  label: string
  title: ReactNode
  intro?: string
}

/** Shared masthead for every route other than the home page. */
export function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <header className="grain relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[34rem] rounded-full opacity-[0.12] blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, var(--color-brass) 0%, transparent 70%)',
        }}
      />

      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-4">
            <span aria-hidden className="rule-brass" />
            <span className="type-label text-chalk-dim">{label}</span>
          </div>
          <h1 className="mt-7 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-chalk [font-stretch:84%]">
            {title}
          </h1>
          {intro ? (
            <p className="measure mt-7 text-chalk-dim">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </header>
  )
}
