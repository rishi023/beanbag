import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

const footerLinks = {
  Products: [
    { label: 'SchoolDash', href: 'https://schooldash.in/', external: true },
    { label: 'CollegeDash', href: 'https://collegedash.in/', external: true },
    { label: 'Platform', href: '#platform' },
    { label: 'All products', href: '#product' },
  ],
  Solutions: [
    { label: 'Schools', href: '#product' },
    { label: 'Colleges', href: '#product' },
    { label: 'Enterprise', href: '#solutions' },
    { label: 'Agencies', href: '#solutions' },
  ],
  Company: [
    { label: 'About', href: '#company' },
    { label: 'Careers', href: '#company' },
    { label: 'Press', href: '#company' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'DPA', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer id="company" className="border-t border-white/8 bg-black">
      {/* Final CTA */}
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build systems that scale?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">
            Join teams using bean-bag to design, ship, and operate digital products with
            confidence.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
                <span className="text-sm font-bold text-black">b</span>
              </span>
              <span className="text-sm font-bold tracking-widest text-white">BEAN-BAG</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Design, technology, and systems — including SchoolDash and CollegeDash for
              education.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...('external' in link && link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-sm text-zinc-500 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} bean-bag. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
