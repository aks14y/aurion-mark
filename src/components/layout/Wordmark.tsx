import { cn } from '@/lib/utils'

/**
 * The company wordmark.
 *
 * The brass block is a punch mark — the layout mark a fabricator strikes on a
 * member before cutting. It sits ahead of the name rather than decorating it.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span aria-hidden className="size-1.5 shrink-0 bg-brass" />
      <span className={cn('font-sans text-[0.9375rem] font-semibold uppercase leading-none tracking-[0.18em]', className)}>
        Aurion Mark
      </span>
    </span>
  )
}
