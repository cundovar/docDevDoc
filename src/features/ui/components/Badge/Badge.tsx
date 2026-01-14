import { type HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type BadgeVariant = 'primary' | 'success' | 'neutral'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-[var(--doc-accent-soft)] text-[var(--doc-accent-strong)]',
  success: 'bg-[var(--doc-success-soft)] text-[var(--doc-success-strong)]',
  neutral: 'bg-[var(--doc-surface-muted)] text-[var(--doc-muted)]',
}

export function Badge({ variant = 'neutral', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  )
}
