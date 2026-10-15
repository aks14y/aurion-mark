import { cn } from '@/lib/utils'

type HeadingProps = {
  /** The quieter first half of the heading. */
  lead: string
  /** The emphasised half. Rendered heavier and brighter than the lead. */
  emphasis?: string
  className?: string
}

/**
 * Section heading with a two-tone weight split.
 *
 * The client's own headings are written in pairs — "One Partner. Total
 * Delivery.", "Integrated Expertise" — so the emphasis is carried by weight and
 * brightness rather than a decorative colour, and stays consistent everywhere.
 */
export function Heading({ lead, emphasis, className }: HeadingProps) {
  return (
    <h2 className={cn('text-balance', className)}>
      <span className="font-normal text-chalk-dim">{lead}</span>
      {emphasis ? (
        <span className="font-semibold text-chalk">{emphasis}</span>
      ) : null}
    </h2>
  )
}
