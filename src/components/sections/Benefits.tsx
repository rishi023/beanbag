import { Check, Shield, Zap } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Section, SectionHeader } from '../ui/Section'

const integrations = [
  'SchoolDash', 'CollegeDash', 'Figma', 'GitHub', 'Slack', 'Google Workspace',
  'AWS', 'GCP', 'Razorpay', 'SMS Gateway', 'WhatsApp API', 'Zoom',
]

const securityFeatures = [
  'SOC 2 Type II certified',
  'End-to-end encryption',
  'SSO & SAML support',
  'Role-based access control',
  'Audit logs & compliance',
  '99.9% uptime SLA',
]

export function Benefits() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <Section id="resources" glow>
      <div
        ref={ref}
        className={cn(
          'transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="Reliability"
          title="Enterprise-grade from the ground up"
          description="Security, performance, and integrations that meet the demands of modern organizations."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Integrations */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <Zap className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">200+ Integrations</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-white/15 hover:text-white"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <Shield className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Security & Compliance</h3>
            </div>
            <ul className="space-y-3">
              {securityFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: '10M+', label: 'API requests/day' },
            { value: '500+', label: 'Enterprise customers' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<50ms', label: 'Avg response time' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 text-center"
            >
              <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
