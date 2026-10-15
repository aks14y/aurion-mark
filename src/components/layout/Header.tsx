import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { EASE_OUT_EXPO } from '@/lib/motion'
import { nav } from '@/data/site'
import { LinkButton } from '@/components/ui/Button'
import { Wordmark } from './Wordmark'

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
        className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-[1000px] -translate-x-1/2 rounded-full border border-white/15 bg-ink/90 shadow-[0_14px_50px_rgba(0,0,0,.24)] backdrop-blur-xl transition-[background-color,border-color] duration-300"
      >
        <div className="shell flex h-[68px] items-center justify-between gap-4 sm:h-[72px] sm:gap-6">
          <Link to="/" aria-label="Aurion Mark — home" className="shrink-0 py-2">
            <Wordmark className="text-ink-2" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-7">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => cn(
                      'group relative inline-block whitespace-nowrap py-2 text-[13px] transition-colors duration-300',
                      isActive ? 'text-ink-2' : 'text-ink-2/70 hover:text-ink-2',
                    )}
                  >
                    {({ isActive }) => <>
                      {item.label}
                      <span aria-hidden className={cn(
                        'absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-brass transition-transform duration-300',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )} />
                    </>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden sm:block">
              <LinkButton to="/contact" className="rounded-full px-4 py-2.5 text-[12px] font-semibold tracking-[0.02em]">
                Get a Quote
              </LinkButton>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex size-10 items-center justify-center rounded-full border border-white/25 lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span className={cn('absolute inset-x-0 top-0 h-px bg-ink-2 transition-transform duration-300', open && 'translate-y-1.5 rotate-45')} />
                <span className={cn('absolute inset-x-0 bottom-0 h-px bg-ink-2 transition-transform duration-300', open && '-translate-y-1.5 -rotate-45')} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
            className="fixed inset-0 z-40 bg-ink pt-24 lg:hidden"
          >
            <nav aria-label="Mobile" className="shell h-full overflow-y-auto pb-16 pt-8">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.to} className="border-b border-line">
                    <NavLink to={item.to} className={({ isActive }) => cn(
                      'flex items-center justify-between py-5 font-sans text-2xl font-medium tracking-[-0.02em] transition-colors',
                      isActive ? 'text-brass' : 'text-ink-2',
                    )}>
                      {item.label}
                      <span aria-hidden className="text-chalk-faint">↗</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <LinkButton to="/contact" className="w-full rounded-full">Get a Quote</LinkButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
