import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, LineChart, PlugZap, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/common/SectionHeading';

const heroStats = [
  { value: '↓48%', label: 'Median page weight after one quarter' },
  { value: '11M', label: 'Annual sessions analysed for waste' },
  { value: '2.1 g', label: 'Avg. CO₂ saved per visit' }
];

const methodology = [
  {
    icon: <Leaf className="h-5 w-5" />,
    title: 'Measure what matters',
    copy: 'We blend carbon intensity data with Core Web Vitals and business KPIs to map where waste shows up first.'
  },
  {
    icon: <PlugZap className="h-5 w-5" />,
    title: 'Design lightweight journeys',
    copy: 'From IA to components, we favour clarity, reusable patterns, and low-energy states across devices.'
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: 'Bake into delivery',
    copy: 'Performance budgets, CI gates, and governance playbooks keep sites lean long after launch.'
  }
];

const highlights = [
  {
    title: 'Climate-positive audits',
    copy: 'Full-stack audits with actionable roadmaps, benchmarks, and leadership-ready narratives.',
    badge: 'Assessment'
  },
  {
    title: 'Design system refits',
    copy: 'Component libraries and content patterns optimised for minimal weight and maximal clarity.',
    badge: 'Design ops'
  },
  {
    title: 'Team enablement sprints',
    copy: 'Upskill squads with hands-on workshops, measurement frameworks, and playbooks for ongoing wins.',
    badge: 'Enablement'
  }
];

export function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-500 to-sky-500 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_65%)]" />
        <div className="absolute -top-48 right-[-20%] h-[30rem] w-[30rem] rounded-full bg-white/30 blur-[200px]" />
        <div className="absolute bottom-[-30%] left-[-25%] h-[26rem] w-[26rem] rounded-full bg-black/30 blur-[180px] opacity-30" />
        <div className="section-shell relative flex flex-col gap-12 py-24 lg:flex-row lg:items-center lg:gap-20">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              <Sprout className="h-4 w-4" /> Digital sustainability studio
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Build web experiences that feel fast and tread lightly.
            </h1>
            <p className="mt-6 text-base text-white/85 sm:text-lg">
              Wholegrain-inspired thinking, remixed for modern product teams. We connect climate-aware metrics with UX design so you can ship smaller, smarter releases.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button className="px-6 py-3 text-base" asChild>
                <Link to="/get-started">
                  Start a low-carbon project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="px-6 py-3 text-base text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link to="/resources">Browse resources</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-md self-start rounded-3xl bg-white/12 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.5em] text-white/70">Impact snapshot</p>
            <div className="mt-6 grid gap-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 p-5">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-6 text-sm text-white/85">
              “They transform sustainability from a retrofit into a north star for product & design.”
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f3f4f0] to-transparent" />
      </section>

      <section className="relative isolate overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.25),_transparent_70%)]" />
        <div className="absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(14,165,233,0.2)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="section-shell relative">
          <SectionHeading
            kicker="Why WebWaste"
            title="We turn waste into wins"
            subtitle="Every audit blends carbon, performance, accessibility, and product outcomes across the lifecycle."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {methodology.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]">
                <div className="flex items-center gap-3 text-emerald-600">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-[#f6faf7] to-white" />
        <div className="absolute -right-32 top-[-4rem] h-[22rem] w-[22rem] rounded-full bg-emerald-100 blur-[140px]" />
        <div className="section-shell relative py-24">
          <SectionHeading
            kicker="What sets us apart"
            title="A studio built for climate-conscious product teams"
            subtitle="No greenwashing—just deeply-researched practice, leadership alignment, and continuous enablement."
            align="left"
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="space-y-4">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  {item.badge}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.copy}</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
                  Explore how it works
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
