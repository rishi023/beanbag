import { Quote } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Card } from '../ui/Card'
import { Section, SectionHeader } from '../ui/Section'

const testimonials = [
  {
    quote:
      'CollegeDash transformed how we manage admissions, academics, and NAAC reporting. Everything our staff needs is in one place — we went fully digital in a single semester.',
    author: 'Dr. Priya Sharma',
    role: 'Principal',
    company: 'Regional College of Science',
    featured: true,
  },
  {
    quote:
      'SchoolDash cut our admin workload in half. Attendance, exams, fees, and parent updates all run through one system — our teachers finally have time to focus on teaching.',
    author: 'Rajesh Kumar',
    role: 'School Administrator',
    company: 'Delhi Public Academy',
    featured: false,
  },
  {
    quote:
      'bean-bag understood our campus workflows and delivered a platform that actually fits how colleges operate. CollegeDash is the ERP we had been searching for.',
    author: 'Elena Rodriguez',
    role: 'IT Director',
    company: 'Metro University',
    featured: false,
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const featured = testimonials.find((t) => t.featured)!
  const others = testimonials.filter((t) => !t.featured)

  return (
    <Section>
      <div
        ref={ref}
        className={cn(
          'transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by educators who ship"
          description="See why schools and colleges choose bean-bag products to power their design, technology, and systems."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Featured testimonial */}
          <Card className="relative lg:row-span-2 lg:flex lg:flex-col lg:justify-between">
            <div>
              <Quote className="mb-4 h-8 w-8 text-indigo-400/50" />
              <blockquote className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-bold text-indigo-300">
                {featured.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div>
                <p className="font-semibold text-white">{featured.author}</p>
                <p className="text-sm text-zinc-500">
                  {featured.role}, {featured.company}
                </p>
              </div>
            </div>
          </Card>

          {/* Other testimonials */}
          {others.map((testimonial) => (
            <Card key={testimonial.author} hover>
              <blockquote className="text-base leading-relaxed text-zinc-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-zinc-300">
                  {testimonial.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
