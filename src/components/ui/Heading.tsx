import { cn } from '@/lib/utils'

type HeadingProps = {
  /** The quieter first half of the heading. */
  lead: string
  /** The emphasised half. Rendered heavier and brighter than the lead. */
  emphasis?: string
  className?: string
  tone?: 'light' | 'dark'
}

/**
 * Section heading with a two-tone weight split.
 *
 * The client's own headings are written in pairs — "One Partner. Total
 * Delivery.", "Integrated Expertise" — so the emphasis is carried by weight and
 * brightness rather than a decorative colour, and stays consistent everywhere.
 */
export function Heading({ lead, emphasis, className, tone = 'light' }: HeadingProps) {
  const leadColor = tone === 'dark' ? 'text-ink-2/80' : 'text-chalk-dim'
  const emphasisColor = tone === 'dark' ? 'text-ink-2' : 'text-chalk'
  return (
    <h2 className={cn('text-balance', className)}>
      <span className={cn('font-normal', leadColor)}>{lead}</span>
      {emphasis ? (
        <span className={cn('font-semibold', emphasisColor)}>{emphasis}</span>
      ) : null}
    </h2>
  )
}
