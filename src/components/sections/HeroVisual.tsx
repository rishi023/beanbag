import {
  BarChart3,
  GraduationCap,
  Layers,
  School,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Logo } from '../ui/Logo'

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl px-2 pb-6 sm:px-0 lg:max-w-none">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-full bg-indigo-500/15 blur-3xl"
        aria-hidden
      />

      {/* Orbit ring */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 text-white/[0.04]"
        viewBox="0 0 400 400"
        aria-hidden
      >
        <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
      </svg>

      {/* Floating accent cards */}
      <div className="pointer-events-none absolute -left-1 top-6 z-20 hidden animate-[float_6s_ease-in-out_infinite] rounded-xl border border-white/10 bg-black/80 p-3 shadow-xl backdrop-blur-md sm:block lg:left-0">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20">
            <School className="h-4 w-4 text-sky-400" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">Product</p>
            <p className="text-xs font-semibold text-white">SchoolDash</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-1/4 z-20 hidden animate-[float_7s_ease-in-out_1s_infinite] rounded-xl border border-white/10 bg-black/80 p-3 shadow-xl backdrop-blur-md sm:block">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20">
            <GraduationCap className="h-4 w-4 text-violet-400" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">Product</p>
            <p className="text-xs font-semibold text-white">CollegeDash</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-2 z-20 hidden animate-[float_5s_ease-in-out_0.5s_infinite] rounded-xl border border-white/10 bg-black/80 px-3 py-2 shadow-xl backdrop-blur-md sm:block">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <p className="text-xs font-medium text-zinc-300">All systems operational</p>
        </div>
      </div>

      {/* Main dashboard mockup */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-indigo-500/10">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
                <div className="mx-auto flex h-5 w-36 items-center justify-center rounded-md bg-white/5 text-[10px] text-zinc-500">
                  schooldash.in
                </div>
        </div>

        <div className="grid grid-cols-[88px_1fr]">
          {/* Sidebar */}
          <div className="border-r border-white/8 bg-black/50 p-3">
            <div className="mb-4">
              <Logo size="sm" showWordmark={false} />
            </div>
                  {['Overview', 'Students', 'Academics'].map((item, i) => (
              <div
                key={item}
                className={`mb-0.5 rounded-md px-2 py-1.5 text-[10px] ${
                  i === 0 ? 'bg-white/10 text-white' : 'text-zinc-600'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main panel */}
          <div className="p-3">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[9px] text-zinc-600">Dashboard</p>
                      <p className="text-xs font-semibold text-white">Attendance</p>
              </div>
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            </div>

            <div className="mb-3 grid grid-cols-2 gap-2">
                {[
                { label: 'Students', value: '840', icon: Layers },
                { label: 'Attendance', value: '96%', icon: BarChart3 },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/8 bg-white/[0.03] p-2"
                >
                  <stat.icon className="mb-1 h-3 w-3 text-indigo-400" />
                  <p className="text-[9px] text-zinc-600">{stat.label}</p>
                  <p className="text-sm font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-lg border border-white/8 bg-white/[0.02] p-2.5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[10px] font-medium text-white">Performance</p>
                <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[8px] text-emerald-400">
                  Live
                </span>
              </div>
              <div className="flex h-14 items-end gap-1">
                {[35, 55, 40, 70, 50, 85, 60, 90, 65, 80].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-indigo-600/80 to-indigo-400/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary cards stack */}
      <div className="absolute -bottom-6 left-4 right-4 z-0 hidden translate-y-4 opacity-60 lg:block">
        <div className="rounded-xl border border-white/5 bg-zinc-950/80 p-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Workflow className="h-4 w-4 text-zinc-500" />
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/5" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
