import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { EASE_OUT_EXPO } from '@/lib/motion'
import { nav } from '@/data/site'
import { LinkButton } from '@/components/ui/Button'
import { Wordmark } from './Wordmark'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const { pathname } = useLocation()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // Close the panel whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  // Hold the page still behind the open panel.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Escape closes the panel.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-[var(--ease-out-expo)]',
          scrolled || open
            ? 'border-b border-line bg-ink/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="shell flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            aria-label="Aurion Mark — home"
            className="shrink-0 py-2"
          >
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'group relative inline-block py-2 type-label transition-colors duration-300',
                        isActive
                          ? 'text-chalk'
                          : 'text-chalk-dim hover:text-chalk',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          aria-hidden
                          className={cn(
                            'absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brass transition-transform duration-400 ease-[var(--ease-out-expo)]',
                            isActive
                              ? 'scale-x-100'
                              : 'scale-x-0 group-hover:scale-x-100',
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LinkButton to="/contact" className="hidden px-5 py-3 sm:inline-flex">
              Get a Quote
            </LinkButton>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex size-11 items-center justify-center rounded-[2px] border border-line-2 lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    'absolute inset-x-0 top-0 h-px bg-chalk transition-transform duration-300 ease-[var(--ease-out-expo)]',
                    open && 'translate-y-1.5 rotate-45',
                  )}
                />
                <span
                  className={cn(
                    'absolute inset-x-0 bottom-0 h-px bg-chalk transition-transform duration-300 ease-[var(--ease-out-expo)]',
                    open && '-translate-y-1.5 -rotate-45',
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
            className="fixed inset-0 z-40 bg-ink/97 pt-20 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile" className="shell h-full overflow-y-auto pb-16 pt-10">
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: EASE_OUT_EXPO,
                      delay: 0.05 + i * 0.045,
                    }}
                    className="border-b border-line"
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          'flex items-baseline justify-between py-5 font-display text-2xl font-medium tracking-[-0.02em] transition-colors',
                          isActive ? 'text-brass' : 'text-chalk',
                        )
                      }
                    >
                      {item.label}
                      <span className="type-label text-chalk-faint">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: EASE_OUT_EXPO,
                  delay: 0.05 + nav.length * 0.045,
                }}
                className="mt-10"
              >
                <LinkButton to="/contact" className="w-full">
                  Get a Quote
                </LinkButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
