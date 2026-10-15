import { stats } from '@/data/site'
import { Stat } from '@/components/ui/Stat'

/**
 * The three headline figures. Numbers are counted up on first view, which is the
 * only place on the page a value rather than a position is animated.
 */
export function Stats() {
  return (
    <section className="bg-ink text-ink-2">
      <div className="stats-grid">
        {stats.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
