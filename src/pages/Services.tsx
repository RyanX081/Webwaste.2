import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Radar, Ruler } from 'lucide-react';
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
      />

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
