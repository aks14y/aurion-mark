import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Variant = 'solid' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 rounded-[2px] px-6 py-3.5 type-label transition-colors duration-300 ease-[var(--ease-out-expo)] select-none'

const variants: Record<Variant, string> = {
  solid: 'bg-brass text-ink hover:bg-chalk',
  outline:
    'border border-line-2 text-chalk hover:border-brass hover:bg-ink-3',
}

type LinkButtonProps = {
  to: string
  variant?: Variant
  className?: string
  children: ReactNode
}

export function LinkButton({
  to,
  variant = 'solid',
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  )
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & { variant?: Variant }

export function Button({
  variant = 'solid',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
