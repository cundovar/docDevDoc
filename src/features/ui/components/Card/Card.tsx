import { type HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: 'default' | 'muted'
}

const toneStyles: Record<NonNullable<CardProps['tone']>, string> = {
  default: 'bg-[var(--doc-surface)] border border-[var(--doc-line)]',
  muted: 'bg-[var(--doc-surface-muted)] border border-transparent',
}

export function Card({ tone = 'default', className, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-2xl p-4 shadow-sm', toneStyles[tone], className)}
      {...props}
    />
  )
}
