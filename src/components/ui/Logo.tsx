import { cn } from '../../lib/utils'

interface LogoProps {
  showWordmark?: boolean
  size?: 'sm' | 'md'
  className?: string
}

const sizeStyles = {
  sm: {
    box: 'h-6 w-6 rounded',
    mark: 'text-[10px] tracking-tight',
  },
  md: {
    box: 'h-8 w-8 rounded-md',
    mark: 'text-xs tracking-tight',
  },
} as const

export function Logo({ showWordmark = true, size = 'md', className }: LogoProps) {
  const styles = sizeStyles[size]

  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'flex shrink-0 items-center justify-center bg-white',
          styles.box,
        )}
        aria-hidden
      >
        <span className={cn('font-bold text-black', styles.mark)}>BB</span>
      </span>
      {showWordmark && (
        <span className="text-sm font-bold tracking-widest text-white">BEAN-BAG</span>
      )}
    </span>
  )
}
