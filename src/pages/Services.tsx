import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Radar, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/common/SectionHeading';

const services = [
  {
    title: 'Digital sustainability audit',
    description: 'Full-stack assessments across hosting, design systems, analytics stacks, and priority user journeys with quantified savings.',
    deliverables: ['Carbon + performance report', 'Executive summary narrative', '90-day optimisation roadmap'],
    icon: <Radar className="h-5 w-5" />
  },
  {
    title: 'Experience redesign sprints',
    description: 'Collaborative sprints to rebuild journeys, refactor assets, and tighten IA around low-energy principles.',
    deliverables: ['Journey maps & wireframes', 'Component refactors', 'Inclusive motion & tone guidelines'],
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
    detail: 'We analyse usage data, infrastructure, and competitors to establish carbon and experience baselines.'
  },
  {
    title: 'Design & prototype',
    detail: 'Co-create lighter journeys, compress assets, and stress-test with QA, accessibility, and stakeholders.'
  },
  {
    title: 'Embed & evolve',
    detail: 'Operationalise improvements with budgets, dashboards, training, and governance rituals.'
  }
];

export function ServicesPage() {
  return (
    <div className="flow-ux__stack">
      <section className="flow-ux__band flow-ux__band--contrast">
        <div className="flow-ux__section flow-ux__hero">
          <div className="flow-ux__stack text-white">
            <span className="flow-ux__pill text-white/90">Services</span>
            <h1 className="flow-ux__title">Shape a digital presence that champions sustainability and performance.</h1>
            <p className="flow-ux__lead text-white/85">
              Choose the partnership format that meets your team where they are—rapid discovery, deep redesign, or ongoing optimisation with governance baked in.
            </p>
            <div className="flow-ux__cta-group">
              <Button asChild>
                <Link to="/get-started">
                  Book a chemistry call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/resources">Download pricing overview</Link>
              </Button>
            </div>
          </div>
          <div className="flow-ux__hero-panel">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">What teams gain</p>
            <ul className="flow-ux__list">
              <li className="flow-ux__list-item text-white/85">Narratives that connect carbon impact, product velocity, and experience quality.</li>
              <li className="flow-ux__list-item text-white/85">Design and engineering playbooks that scale across squads.</li>
              <li className="flow-ux__list-item text-white/85">Confidence shipping releases within agreed budgets and emissions limits.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flow-ux__band flow-ux__band--surface">
        <div className="flow-ux__section flow-ux__stack">
          <SectionHeading
            kicker="Partnership formats"
            title="Tailored engagements for where you are on the journey"
            subtitle="Progressive enhancement in practice—engineers, designers, and leaders see value in the first sprint and stay aligned."
          />
          <div className="flow-ux__accordion" data-flow-ux-accordion>
            <ul className="flow-ux__accordion-items">
              {services.map((service, index) => {
                const triggerId = `service-accordion-${index}`;
                const panelId = `service-panel-${index}`;
                const isOpen = index === 0;

                return (
                  <li key={service.title} className="flow-ux__accordion-item">
                    <button
                      id={triggerId}
                      className={`flow-ux__accordion-trigger${isOpen ? ' is-open' : ''}`}
                      aria-controls={panelId}
                      aria-expanded={isOpen}
                      data-flow-ux-accordion-trigger
                    >
                      <span className="flow-ux__accordion-icon">{service.icon}</span>
                      <span className="flow-ux__stack">
                        <span>{service.title}</span>
                        <span className="flow-ux__meta">{service.description}</span>
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
                      className="flow-ux__accordion-panel"
                      data-flow-ux-accordion-panel
                      hidden={isOpen ? undefined : true}
                    >
                      <p className="flow-ux__accordion-copy">{service.description}</p>
                      <ul className="flow-ux__list flow-ux__meta">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flow-ux__list-item">
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                      <div className="flow-ux__cta-group">
                        <Button variant="secondary" asChild>
                          <Link to="/get-started">
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

      <section className="flow-ux__band flow-ux__band--tint">
        <div className="flow-ux__section flow-ux__stack">
          <SectionHeading
            kicker="Process"
            title="How we partner"
            subtitle="A rhythm tuned for clarity, velocity, and measurable sustainability results."
          />
          <div className="flow-ux__grid flow-ux__grid--cols-3">
            {process.map((stage, index) => (
              <article key={stage.title} className="flow-ux__card">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Step {index + 1}</span>
                <h3 className="text-lg font-semibold text-slate-900">{stage.title}</h3>
                <p className="flow-ux__meta">{stage.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
