import { stats } from '@/data/site'
import { Stat } from '@/components/ui/Stat'

/**
 * The three headline figures. Numbers are counted up on first view, which is the
 * only place on the page a value rather than a position is animated.
 */
export function Stats() {
  return (
    <section className="border-y border-line bg-ink-2">
      <div className="shell grid gap-12 py-16 sm:grid-cols-3 sm:gap-8 sm:py-20">
        {stats.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
