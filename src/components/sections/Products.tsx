import { ArrowUpRight, Check } from 'lucide-react'
import { accentStyles, products } from '../../data/products'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Section, SectionHeader } from '../ui/Section'

export function Products() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <Section id="product" glow className="bg-white/[0.01]">
      <div
        ref={ref}
        className={cn(
          'w-full min-w-0 transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="Products"
          title="Software that powers education"
          description="Purpose-built platforms for schools and colleges — designed, built, and maintained by bean-bag."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product, i) => {
            const styles = accentStyles[product.accent]
            return (
              <article
                key={product.id}
                className={cn(
                  'group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 md:p-8',
                  styles.border,
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className={cn(
                    'pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br to-transparent opacity-60 blur-2xl',
                    styles.glow,
                  )}
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white',
                        styles.logo,
                      )}
                    >
                      {product.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.name}</h3>
                      <p className="text-sm text-zinc-500">{product.tagline}</p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      'shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider',
                      styles.badge,
                    )}
                  >
                    {product.category}
                  </span>
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-zinc-400">
                  {product.description}
                </p>

                <ul className="relative mt-6 grid gap-2.5 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-zinc-400">
                      <Check className={cn('mt-0.5 h-4 w-4 shrink-0', styles.check)} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-black transition-all duration-200',
                      'hover:bg-zinc-100 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto',
                    )}
                  >
                    Visit {product.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Request demo
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
