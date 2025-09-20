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
      <section className="section-shell">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white px-8 py-14 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.35)]">
          <SectionHeading
            kicker="Services"
            title="Shape a digital presence that champions sustainability and performance"
            subtitle="Choose the partnership format that meets your team where they are—discovery, redesign, or ongoing optimisation."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-300"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                  {service.icon}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-sm text-slate-600">{service.description}</p>
                <ul className="mt-6 grid gap-2 text-sm text-slate-600">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-2">
                      <Recycle className="mt-1 h-4 w-4 text-emerald-600" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-fit px-5">
                  <Link to="/get-started">
                    Request proposal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white p-10 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.35)]">
          <SectionHeading kicker="Process" title="How we partner" subtitle="A rhythm tuned for clarity, velocity, and measurable sustainability results." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((stage, index) => (
              <div
                key={stage.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
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
