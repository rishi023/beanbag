import { cn } from '../../lib/utils'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
  glow?: boolean
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  glow = false,
}: SectionProps) {
  return (
    <section id={id} className={cn('relative py-20 md:py-28', className)}>
      {glow && (
        <div className="pointer-events-none absolute inset-0 section-glow" aria-hidden />
      )}
      <div
        className={cn(
          'relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        align === 'left' && 'max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
