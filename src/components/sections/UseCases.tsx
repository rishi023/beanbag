import { Building2, GraduationCap, Megaphone, School } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Section, SectionHeader } from '../ui/Section'

const useCases = [
  {
    icon: School,
    segment: 'Schools',
    title: 'Run your school on one platform',
    description:
      'SchoolDash helps K-12 institutions digitize attendance, academics, exams, fees, and parent communication — reducing admin overhead and improving engagement.',
    stats: 'Powered by SchoolDash',
    href: 'https://schooldash.in/',
  },
  {
    icon: GraduationCap,
    segment: 'Colleges',
    title: 'Automate your entire campus',
    description:
      'CollegeDash unifies admissions, academics, LMS, library, staff, grievances, and NAAC reporting in one college ERP built for higher education.',
    stats: 'Powered by CollegeDash',
    href: 'https://collegedash.in/',
  },
  {
    icon: Building2,
    segment: 'Enterprise',
    title: 'Scale with confidence',
    description:
      'Unify siloed departments under one platform with the security, compliance, and governance large organizations require.',
    stats: '40% reduction in tool spend',
    href: '#contact',
  },
  {
    icon: Megaphone,
    segment: 'Agencies',
    title: 'Deliver more for every client',
    description:
      'Manage multiple client projects from one dashboard with white-label options and granular access controls.',
    stats: '2x project throughput',
    href: '#contact',
  },
]

export function UseCases() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <Section id="customers">
      <div
        ref={ref}
        className={cn(
          'transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="Use cases"
          title="Built for education and beyond"
          description="From schools and colleges to enterprises and agencies — bean-bag products adapt to how you work."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {useCases.map((useCase, i) => (
            <Card
              key={useCase.segment}
              hover
              className={cn(
                'transition-all duration-500',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                  <useCase.icon className="h-5 w-5 text-indigo-400" />
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  {useCase.segment}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{useCase.description}</p>
              <p className="mt-4 text-sm font-semibold text-indigo-400">{useCase.stats}</p>
              {useCase.href.startsWith('http') && (
                <a
                  href={useCase.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  Learn more →
                </a>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Talk to our team
          </Button>
        </div>
      </div>
    </Section>
  )
}
