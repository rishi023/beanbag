import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Section, SectionHeader } from '../ui/Section'

const steps = [
  {
    step: '01',
    title: 'Connect your stack',
    description:
      'Integrate with your existing design tools, repos, and cloud infrastructure in minutes. No migration required.',
    visual: (
      <div className="space-y-2">
        {['Figma', 'GitHub', 'AWS', 'Slack'].map((tool) => (
          <div
            key={tool}
            className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3"
          >
            <div className="h-8 w-8 rounded-md bg-white/10" />
            <span className="text-sm font-medium text-white">{tool}</span>
            <span className="ml-auto text-xs text-emerald-400">Connected</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    step: '02',
    title: 'Design & build',
    description:
      'Create products with shared components, automated workflows, and real-time collaboration across teams.',
    visual: (
      <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
        <div className="mb-3 flex gap-2">
          {['Components', 'Tokens', 'Layouts'].map((tab, i) => (
            <span
              key={tab}
              className={`rounded-md px-3 py-1 text-xs ${
                i === 0 ? 'bg-white/10 text-white' : 'text-zinc-500'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg bg-white/5" />
          ))}
        </div>
      </div>
    ),
  },
  {
    step: '03',
    title: 'Ship & scale',
    description:
      'Deploy with confidence using built-in monitoring, automated testing, and one-click rollbacks.',
    visual: (
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3">
          <span className="text-sm text-white">Production deploy</span>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">
            Success
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
        </div>
        <p className="text-xs text-zinc-500">Deployed in 12s · 0 errors · 99.9% uptime</p>
      </div>
    ),
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <Section glow className="bg-white/[0.01]">
      <div
        ref={ref}
        className={cn(
          'transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="How it works"
          title="From idea to production in three steps"
          description="A streamlined workflow that eliminates handoffs and accelerates delivery."
        />

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={cn(
                'grid items-center gap-8 md:grid-cols-2 md:gap-16',
                i % 2 === 1 && 'md:[direction:rtl]',
              )}
            >
              <div className={cn(i % 2 === 1 && 'md:[direction:ltr]')}>
                <span className="text-sm font-medium text-indigo-400">{step.step}</span>
                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">{step.description}</p>
              </div>
              <div
                className={cn(
                  'rounded-2xl border border-white/8 bg-white/[0.02] p-6',
                  i % 2 === 1 && 'md:[direction:ltr]',
                )}
              >
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
