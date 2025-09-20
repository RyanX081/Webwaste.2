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
      <section className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white px-10 py-16 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.4)]">
          <div className="absolute inset-x-12 top-0 h-2 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500" />
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                <Sprout className="h-4 w-4" /> Digital sustainability studio
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Build web experiences that feel fast and tread lightly.
              </h1>
              <p className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg">
                Wholegrain-inspired thinking, remixed for modern product teams. We connect climate-aware metrics with UX design so you can ship smaller, smarter releases.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button className="px-6 py-3 text-base" asChild>
                  <Link to="/get-started">
                    Start a low-carbon project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="secondary" className="px-6 py-3 text-base" asChild>
                  <Link to="/resources">Browse resources</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 right-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
              <div className="absolute -bottom-8 left-4 h-24 w-24 rounded-full bg-teal-100 blur-3xl" />
              <div className="relative grid gap-4 rounded-3xl border border-slate-200 bg-slate-50/70 p-8">
                <p className="text-sm uppercase tracking-[0.5em] text-slate-500">Impact metrics</p>
                <div className="grid gap-4">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-sm text-slate-700">
                  “They transform sustainability from a retrofit into a north star for product & design.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          kicker="Why WebWaste"
          title="We turn waste into wins"
          subtitle="Every audit blends carbon, performance, accessibility, and product outcomes across the lifecycle."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {methodology.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-2 hover:border-emerald-300"
            >
              <div className="flex items-center gap-2 text-emerald-600">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50">
                  {item.icon}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)]">
          <SectionHeading
            kicker="What sets us apart"
            title="A studio built for climate-conscious product teams"
            subtitle="No greenwashing—just deeply-researched practice, leadership alignment, and continuous enablement."
            align="left"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-300"
              >
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.copy}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
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
