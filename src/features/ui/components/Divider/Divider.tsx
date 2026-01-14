import { type HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type DividerProps = HTMLAttributes<HTMLHRElement>

export function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn('border-[var(--doc-line)]', className)} {...props} />
}
