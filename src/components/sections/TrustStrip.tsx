import { Section } from '../ui/Section'

const logos = [
  'SchoolDash',
  'CollegeDash',
  'Northwind',
  'Globex',
  'Acme Corp',
  'Initech',
]

export function TrustStrip() {
  return (
    <Section className="border-y border-white/8 py-12 md:py-16">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-zinc-600">
        Trusted by schools, colleges, and forward-thinking teams worldwide
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((logo) => (
          <span
            key={logo}
            className="text-sm font-semibold text-zinc-600 transition-colors duration-300 hover:text-zinc-400"
          >
            {logo}
          </span>
        ))}
      </div>
    </Section>
  )
}
