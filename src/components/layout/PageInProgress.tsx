import { LinkButton } from '@/components/ui/Button'

/**
 * Shown on routes that are routed and reachable but not yet designed.
 *
 * These pages are built out one at a time; this keeps every link on the site
 * working and honest about its state in the meantime.
 */
export function PageInProgress({ note }: { note: string }) {
  return (
    <div className="shell py-20 sm:py-28">
      <div className="border border-line bg-ink-2 p-8 sm:p-12">
        <p className="type-label text-brass">In progress</p>
        <p className="measure mt-5 text-chalk-dim">{note}</p>
        <p className="measure mt-4 text-sm text-chalk-faint">
          The home page is complete and is the reference for the visual language
          — typography, colour, spacing and motion — that this page will follow.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton to="/" variant="outline">
            Back to home
          </LinkButton>
          <LinkButton to="/contact">Get a Quote</LinkButton>
        </div>
      </div>
    </div>
  )
}
