import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Radar, Ruler, Sparkles, Gauge, Users, Globe2, Lightbulb, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { HeroBanner } from '@/components/common/HeroBanner';

const services = [
  {
    title: 'Digital sustainability audit',
    description: 'Full-stack assessment covering hosting, design system, analytics, and third-party stacks with quantified savings.',
    deliverables: ['Carbon + performance report', 'Executive summary deck', '90-day optimisation roadmap'],
    icon: <Radar className="h-5 w-5" />,
    accent: 'emerald'
  },
  {
    title: 'Experience redesign sprints',
    description: 'Collaborative design sprints to rebuild journeys, refactor assets, and tighten IA around low-energy principles.',
    deliverables: ['Journey maps & wireframes', 'Component refactors', 'Inclusive motion and tone guidelines'],
    icon: <Layers className="h-5 w-5" />,
    accent: 'teal'
  },
  {
    title: 'Ongoing optimisation partnership',
    description: 'Monthly governance, release reviews, and experimentation to keep emissions, costs, and flows in healthy ranges.',
    deliverables: ['Carbon budget dashboards', 'Experiment backlog', 'Quarterly leadership reporting'],
    icon: <Ruler className="h-5 w-5" />,
    accent: 'sky'
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

const serviceHighlights = [
  {
    title: 'Low-carbon discovery sprint',
    description: 'Co-design a lighter journey in five days with rapid research, data baselining, and a measurable action plan.',
    ctaLabel: 'Plan a sprint',
    to: '/contact',
    icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
    accent: 'emerald'
  },
  {
    title: 'Sustainable UX audit',
    description: 'Audit content, design systems, and flows to identify high-impact reductions in weight, energy, and emissions.',
    ctaLabel: 'Book an audit',
    to: '/audit',
    icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
    accent: 'teal'
  },
  {
    title: 'Inclusive performance review',
    description: 'Pair with your engineers to trim scripts, improve Core Web Vitals, and keep accessibility guardrails intact.',
    ctaLabel: 'Schedule review',
    to: '/contact',
    icon: <Users className="h-5 w-5" aria-hidden="true" />,
    accent: 'sky'
  },
  {
    title: 'Green infrastructure roadmap',
    description: 'Map infrastructure decisions—hosting, CDN, caching—to low-carbon options aligned with regulatory needs.',
    ctaLabel: 'Start roadmap',
    to: '/contact',
    icon: <Globe2 className="h-5 w-5" aria-hidden="true" />,
    accent: 'emerald-dark'
  },
  {
    title: 'Behavioural experimentation lab',
    description: 'Run lightweight experiments that test copy, motion, and asset changes for measurable carbon reductions.',
    ctaLabel: 'Run experiments',
    to: '/contact',
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
    accent: 'amber'
  },
  {
    title: 'Sustainability enablement playbook',
    description: 'Upskill your team with workshops, templates, and budgets so climate-aware delivery sticks long-term.',
    ctaLabel: 'Get the playbook',
    to: '/resources',
    icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
    accent: 'forest'
  }
];

export function ServicesPage() {
  return (
    <div className="flow-ux__stack">
      <HeroBanner
        eyebrow="Services"
        eyebrowClassName="text-emerald-100"
        title="Partnerships that shrink digital waste"
        description="Audits, sprints, and enablement programmes that make sustainable product delivery measurable and repeatable."
        primaryCta={{ to: '/contact', label: 'Request a proposal' }}
        secondaryCta={{ to: '/audit', label: 'See the audit kit' }}
        gradientClass="from-[#065f46] via-[#0d9488] to-[#38bdf8]"
        overlayClassName="bg-emerald-950/40"
        textAlign="left"
      />

      <section className="section-shell flow-ux__band">
        <div className="flow-ux__stack">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Choose your focus</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Six ways to work with us right now</h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Mix and match engagements to suit your roadmap—every box leads to a tangible collaboration that trims waste without slowing delivery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceHighlights.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col justify-between rounded-[1.9rem] border border-transparent bg-white p-7 shadow-[0_32px_80px_-55px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_-50px_rgba(6,95,70,0.35)]"
                data-accent={item.accent}
                style={{
                  background:
                    item.accent === 'emerald'
                      ? 'linear-gradient(145deg, rgba(16,185,129,0.1), rgba(59,130,246,0.08))'
                      : item.accent === 'teal'
                        ? 'linear-gradient(145deg, rgba(13,148,136,0.12), rgba(94,234,212,0.08))'
                        : item.accent === 'sky'
                          ? 'linear-gradient(145deg, rgba(56,189,248,0.12), rgba(14,165,233,0.1))'
                          : item.accent === 'emerald-dark'
                            ? 'linear-gradient(145deg, rgba(6,95,70,0.16), rgba(20,184,166,0.1))'
                            : item.accent === 'amber'
                              ? 'linear-gradient(145deg, rgba(251,191,36,0.16), rgba(253,224,71,0.09))'
                              : 'linear-gradient(145deg, rgba(15,118,110,0.14), rgba(16,185,129,0.08))'
                }}
              >
                <div className="flex items-center gap-3 text-emerald-700">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/50 shadow-inner">
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
                  to={item.to}
                >
                  {item.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell flow-ux__band">
        <div
          className="rounded-[2.5rem] border border-slate-200 bg-white px-8 py-14 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.35)] flow-ux__stack"
          data-flow-animate="fade-up"
        >
          <SectionHeading
            kicker="Service menu"
            title="Shape a digital presence that champions sustainability and performance"
            subtitle="Choose the partnership format that meets your team where they are—discovery, redesign, or ongoing optimisation."
            align="left"
          />
          <div
            className="mt-10 flow-ux__accordion"
            data-flow-ux-accordion
            data-flow-animate="fade-up"
            data-flow-animate-delay="140ms"
          >
            <ul className="flow-ux__accordion-items">
              {services.map((service, index) => {
                const triggerId = `service-accordion-${index}`;
                const panelId = `service-panel-${index}`;
                const isOpen = index === 0;
                return (
                  <li key={service.title} className="flow-ux__accordion-item">
                    <button
                      id={triggerId}
                      className="flow-ux__accordion-trigger"
                      aria-controls={panelId}
                      aria-expanded={isOpen}
                      data-accent={service.accent}
                      data-flow-ux-accordion-trigger
                    >
                      <span className="flow-ux__accordion-trigger-content">
                        <span className="flow-ux__icon-wrap">{service.icon}</span>
                        <span>
                          {service.title}
                          <span className="flow-ux__accordion-meta">{service.description}</span>
                        </span>
                      </span>
                      <svg aria-hidden="true" focusable="false" className="flow-ux__chevron" viewBox="0 0 20 20">
                        <path
                          d="M7.25 4.75L13.25 10.25L7.25 15.25"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className={`flow-ux__accordion-panel${isOpen ? ' is-open' : ''}`}
                      data-flow-ux-accordion-panel
                      hidden={isOpen ? undefined : true}
                    >
                      <p className="flow-ux__accordion-copy text-sm text-slate-600">
                        {service.description}
                      </p>
                      <ul className="flow-ux__bullet-list">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable}>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                      <div className="flow-ux__cta-group">
                        <Button asChild variant="secondary">
                          <Link to="/contact">
                            Request proposal
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden flow-ux__band flow-ux__band--alt">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-[#f7fbf9] to-white" />
        <div
          className="section-shell relative py-20 flow-ux__stack"
          data-flow-animate="fade-up"
        >
          <SectionHeading
            kicker="Process"
            title="How we partner"
            subtitle="A rhythm tuned for clarity, velocity, and measurable sustainability results."
          />
          <div className="mt-12 flow-ux__grid">
            {process.map((stage, index) => (
              <div
                key={stage.title}
                className="flow-ux__card"
                data-flow-animate="fade-up"
                data-flow-animate-delay={`${index * 100}ms`}
              >
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
