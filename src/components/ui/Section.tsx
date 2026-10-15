import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
  /** Adds the hairline that separates stacked sections. */
  divided?: boolean
}

export function Section({ children, className, id, divided }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-20 sm:py-28 lg:py-36',
        divided && 'border-t border-line',
        className,
      )}
    >
      {children}
    </section>
  )
}
