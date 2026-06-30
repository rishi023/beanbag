import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Section, SectionHeader } from '../ui/Section'

const problems = [
  {
    title: 'Fragmented tools',
    description:
      'Teams juggle dozens of disconnected apps, losing context and slowing every decision.',
  },
  {
    title: 'Slow delivery cycles',
    description:
      'Design handoffs, engineering bottlenecks, and manual processes delay time-to-market.',
  },
  {
    title: 'Scaling complexity',
    description:
      'As organizations grow, systems become harder to maintain, audit, and evolve.',
  },
]

export function ValueProposition() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <Section id="solutions" glow>
      <div
        ref={ref}
        className={cn(
          'transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="The challenge"
          title="Modern teams deserve better systems"
          description="Most organizations are held back by tools that weren't built to work together. bean-bag builds unified products like SchoolDash and CollegeDash that connect every workflow."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={cn(
                'rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <span className="text-lg font-bold">!</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/8 bg-gradient-to-br from-indigo-500/10 to-transparent p-8 md:p-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              One platform. Every workflow.
            </h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              From SchoolDash for schools to CollegeDash for colleges — bean-bag products connect
              administration, academics, and communication so your team can focus on education,
              not paperwork.
            </p>
            <Button
              className="mt-6"
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See how it works
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
