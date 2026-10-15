import { LinkButton } from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="grain flex min-h-svh items-center pt-32 pb-20">
      <div className="shell">
        <span aria-hidden className="rule-brass" />
        <p className="mt-6 type-label text-chalk-dim">Error 404</p>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,8vw,6rem)] font-semibold uppercase leading-[0.95] tracking-[-0.015em] text-ink-2">
          Page not
          <br />
          <span className="text-ink-2">found.</span>
        </h1>
        <p className="measure mt-7 text-chalk-dim">
          That address does not exist on this site. It may have moved, or the
          link may be out of date.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <LinkButton to="/">Back to home</LinkButton>
          <LinkButton to="/contact" variant="outline">
            Contact us
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
