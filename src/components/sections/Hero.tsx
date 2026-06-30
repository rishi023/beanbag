import { ArrowRight } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-clip pt-16"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left — copy */}
        <div className="max-w-xl animate-[fadeInUp_0.7s_ease-out_both] lg:max-w-none">
          <Badge dot className="mb-8">
            Design &amp; Technology Studio
          </Badge>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block text-white">Design.</span>
            <span className="block text-white">Technology.</span>
            <span className="block text-zinc-500">Systems.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:text-xl">
            We create visual identities, digital products, and business systems — including{' '}
            <span className="text-white">SchoolDash</span> and{' '}
            <span className="text-white">CollegeDash</span> — that help organizations operate,
            communicate, and grow more effectively.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
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

        {/* Right — graphics */}
        <div className="min-w-0 animate-[fadeInUp_0.9s_ease-out_0.2s_both] lg:pl-2">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
