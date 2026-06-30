import { Check } from 'lucide-react'
import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Section, SectionHeader } from '../ui/Section'

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, annual: 0 },
    description: 'For individuals and small teams getting started.',
    features: [
      'Up to 3 projects',
      '5 team members',
      'Basic analytics',
      'Community support',
      '1 GB storage',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: { monthly: 49, annual: 39 },
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Unlimited projects',
      '50 team members',
      'Advanced analytics',
      'Priority support',
      '100 GB storage',
      'Custom workflows',
      'SSO integration',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    description: 'For organizations with advanced security and scale needs.',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Dedicated support',
      'Custom SLA',
      'Advanced security',
      'Audit logs',
      'White-label options',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <Section id="pricing" glow className="bg-white/[0.01]">
      <div
        ref={ref}
        className={cn(
          'w-full min-w-0 transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Start free and scale as you grow. No hidden fees, no surprises."
          className="mb-8 md:mb-12"
        />

        {/* Billing toggle */}
        <div className="mb-10 flex flex-col items-center gap-3 sm:mb-12">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex w-full max-w-xs rounded-full border border-white/10 bg-white/[0.03] p-1 sm:w-auto sm:max-w-none"
          >
            <button
              type="button"
              aria-pressed={!annual}
              className={cn(
                'flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 sm:flex-none sm:px-5',
                !annual
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white',
              )}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={annual}
              className={cn(
                'flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 sm:flex-none sm:px-5',
                annual
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white',
              )}
              onClick={() => setAnnual(true)}
            >
              Annual
            </button>
          </div>
          {annual && (
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Save 20% with annual billing
            </span>
          )}
        </div>

        <div className="grid w-full min-w-0 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex w-full min-w-0 flex-col rounded-2xl border p-6 md:p-8 transition-all duration-500',
                plan.popular
                  ? 'order-first border-indigo-500/50 bg-indigo-500/5 shadow-lg shadow-indigo-500/10 lg:order-none lg:-mt-2 lg:mb-2'
                  : 'border-white/8 bg-white/[0.02]',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-indigo-500 px-3 py-0.5 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>
              </div>

              <div className="mt-6">
                {plan.price.monthly === null ? (
                  <p className="text-3xl font-bold text-white">Custom</p>
                ) : plan.price.monthly === 0 ? (
                  <p className="text-3xl font-bold text-white">
                    Free
                  </p>
                ) : (
                  <p className="text-3xl font-bold text-white">
                    <span>${annual ? plan.price.annual : plan.price.monthly}</span>
                    <span className="text-base font-normal text-zinc-500">/mo</span>
                  </p>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-400">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                variant={plan.popular ? 'primary' : 'secondary'}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
