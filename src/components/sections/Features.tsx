import {
  BarChart3,
  Layers,
  Lock,
  Palette,
  Rocket,
  Workflow,
  Zap,
} from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Card } from '../ui/Card'
import { Section, SectionHeader } from '../ui/Section'

const features = [
  {
    icon: Palette,
    title: 'Design System Engine',
    description:
      'Maintain a single source of truth for tokens, components, and brand guidelines across every touchpoint.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Automate repetitive tasks across design, development, and ops with visual, no-code workflow builders.',
  },
  {
    icon: Layers,
    title: 'Unified Platform',
    description:
      'Replace fragmented toolchains with one integrated environment for projects, assets, and deployments.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description:
      'Track system health, team velocity, and product metrics from a centralized observability dashboard.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified with SSO, role-based access, audit logs, and end-to-end encryption.',
  },
  {
    icon: Rocket,
    title: 'Instant Deployments',
    description:
      'Ship changes to production in seconds with preview environments, rollbacks, and CI/CD built in.',
  },
]

export function Features() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <Section id="platform">
      <div
        ref={ref}
        className={cn(
          'transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="Platform"
          title="Built for reliability at scale"
          description="Shared infrastructure and capabilities that power every bean-bag product — from design systems to secure deployments."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Card
              key={feature.title}
              hover
              className={cn(
                'transition-all duration-500',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <feature.icon className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-base font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
          <Zap className="h-4 w-4 text-indigo-400" />
          <span>Shared across SchoolDash, CollegeDash, and all bean-bag products</span>
        </div>
      </div>
    </Section>
  )
}
