import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Section, SectionHeader } from '../ui/Section'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="contact" glow>
      <div
        ref={ref}
        className={cn(
          'transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="Get in touch"
          title="Book a demo with our team"
          description="See how bean-bag can transform your design, technology, and systems workflow."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
                <p className="text-lg font-semibold text-white">Thank you!</p>
                <p className="mt-2 text-sm text-zinc-400">
                  We&apos;ll be in touch within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-zinc-400">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-zinc-400">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                    placeholder="Tell us about your team and what you're looking to build..."
                  />
                </div>

                <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-6 lg:col-span-2">
            {[
              { icon: Mail, label: 'Email', value: 'hello@bean-bag.io' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
              { icon: MapPin, label: 'Office', value: 'San Francisco, CA' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <item.icon className="h-5 w-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">{item.label}</p>
                  <p className="text-base text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
