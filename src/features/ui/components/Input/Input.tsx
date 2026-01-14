import { type InputHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean
}

export function Input({ hasError, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-xl border bg-white px-4 text-sm text-[var(--doc-ink)] placeholder:text-[var(--doc-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--doc-accent)]',
        hasError ? 'border-[var(--doc-danger)]' : 'border-[var(--doc-line)]',
        className,
      )}
      {...props}
    />
  )
}
