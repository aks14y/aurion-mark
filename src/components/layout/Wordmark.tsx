import { cn } from '@/lib/utils'

/**
 * The company wordmark.
 *
 * The brass block is a punch mark — the layout mark a fabricator strikes on a
 * member before cutting. It sits ahead of the name rather than decorating it.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span aria-hidden className="size-1.5 shrink-0 bg-brass" />
      <span className="font-display text-[0.9375rem] font-semibold uppercase leading-none tracking-[0.18em] text-chalk">
        Aurion Mark
      </span>
    </span>
  )
}
