import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Radar, Recycle, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/common/SectionHeading';

const services = [
  {
    title: 'Digital sustainability audit',
    description: 'Full-stack assessment covering hosting, design system, analytics, and third-party stacks with quantified savings.',
    deliverables: ['Carbon + performance report', 'Executive summary deck', '90-day optimisation roadmap'],
    icon: <Radar className="h-5 w-5" />
  },
  {
    title: 'Experience redesign sprints',
    description: 'Collaborative design sprints to rebuild journeys, refactor assets, and tighten IA around low-energy principles.',
    deliverables: ['Journey maps & wireframes', 'Component refactors', 'Inclusive motion and tone guidelines'],
    icon: <Layers className="h-5 w-5" />
  },
  {
    title: 'Ongoing optimisation partnership',
    description: 'Monthly governance, release reviews, and experimentation to keep emissions, costs, and flows in healthy ranges.',
    deliverables: ['Carbon budget dashboards', 'Experiment backlog', 'Quarterly leadership reporting'],
    icon: <Ruler className="h-5 w-5" />
  }
];

const process = [
  {
    title: 'Discover & benchmark',
    detail: 'We analyse usage data, infrastructure, and competitor benchmarks to establish carbon and experience baselines.'
  },
  {
    title: 'Design & prototype',
    detail: 'Co-create lighter journeys, assets, and content; pressure-test with QA, accessibility, and stakeholders.'
  },
  {
    title: 'Embed & evolve',
    detail: 'Operationalise improvements with budgets, dashboards, training, and governance rituals.'
  }
];

export function ServicesPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-400 to-emerald-300" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_70%)]" />
        <div className="section-shell relative py-24 text-white">
          <SectionHeading
            kicker="Services"
            title="Shape a digital presence that champions sustainability and performance"
            subtitle="Choose the partnership format that meets your team where they are—discovery, redesign, or ongoing optimisation."
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-3xl bg-white/15 p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.6)] backdrop-blur"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                  {service.icon}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm text-white/80">{service.description}</p>
                <ul className="mt-6 grid gap-2 text-sm text-white/80">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2">
                      <Recycle className="mt-1 h-4 w-4" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-fit px-5 text-emerald-700" variant="secondary">
                  <Link to="/get-started">
                    Request proposal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f3f4f0] to-transparent" />
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-[#f7fbf9] to-white" />
        <div className="section-shell relative py-20">
          <SectionHeading kicker="Process" title="How we partner" subtitle="A rhythm tuned for clarity, velocity, and measurable sustainability results." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((stage, index) => (
              <div key={stage.title} className="rounded-3xl bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.3)]">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  Step {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{stage.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{stage.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
