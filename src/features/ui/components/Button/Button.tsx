import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--doc-accent)] text-white hover:bg-[var(--doc-accent-strong)] focus-visible:outline-[var(--doc-accent)]',
  secondary:
    'bg-[var(--doc-surface)] text-[var(--doc-ink)] border border-[var(--doc-line)] hover:border-[var(--doc-accent)] focus-visible:outline-[var(--doc-accent)]',
  ghost:
    'bg-transparent text-[var(--doc-ink)] hover:bg-[var(--doc-surface-muted)] focus-visible:outline-[var(--doc-accent)]',
  danger:
    'bg-[var(--doc-danger)] text-white hover:bg-[var(--doc-danger-strong)] focus-visible:outline-[var(--doc-danger)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      ) : (
        leftIcon
      )}
      {children}
      {rightIcon}
    </button>
  )
}
