import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Radar, Ruler, Sparkles, Gauge, Users, Globe2, Lightbulb, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

const highlightAccentStyles = {
  emerald: {
    card: 'border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/30 text-emerald-900',
    iconWrap: 'bg-emerald-600/10 text-emerald-700',
    link: 'text-emerald-700 hover:text-emerald-600'
  },
  teal: {
    card: 'border-teal-200/60 bg-gradient-to-br from-teal-50 via-white to-teal-100/30 text-teal-900',
    iconWrap: 'bg-teal-600/10 text-teal-700',
    link: 'text-teal-700 hover:text-teal-600'
  },
  sky: {
    card: 'border-sky-200/60 bg-gradient-to-br from-sky-50 via-white to-sky-100/25 text-sky-900',
    iconWrap: 'bg-sky-600/10 text-sky-700',
    link: 'text-sky-700 hover:text-sky-600'
  },
  emeraldDark: {
    card: 'border-emerald-300/60 bg-gradient-to-br from-emerald-900/5 via-white to-emerald-200/25 text-emerald-900',
    iconWrap: 'bg-emerald-700/10 text-emerald-800',
    link: 'text-emerald-800 hover:text-emerald-700'
  },
  amber: {
    card: 'border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-amber-100/30 text-amber-900',
    iconWrap: 'bg-amber-500/10 text-amber-700',
    link: 'text-amber-700 hover:text-amber-600'
  },
  forest: {
    card: 'border-emerald-400/50 bg-gradient-to-br from-emerald-900/10 via-white to-emerald-200/25 text-emerald-900',
    iconWrap: 'bg-emerald-900/10 text-emerald-700',
    link: 'text-emerald-700 hover:text-emerald-600'
  }
} as const;

type HighlightAccent = keyof typeof highlightAccentStyles;

type ServiceHighlight = {
  title: string;
  description: string;
  ctaLabel: string;
  to: string;
  icon: React.ReactNode;
  accent: HighlightAccent;
  category: string;
};

const serviceHighlights: ServiceHighlight[] = [
  {
    title: 'Low-carbon discovery sprint',
    category: 'Sprint',
    description: 'Co-design a lighter journey in five days with rapid research, data baselining, and a measurable action plan.',
    ctaLabel: 'Plan a sprint',
    to: '/contact',
    icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
    accent: 'emerald'
  },
  {
    title: 'Sustainable UX audit',
    category: 'Audit',
    description: 'Audit content, design systems, and flows to identify high-impact reductions in weight, energy, and emissions.',
    ctaLabel: 'Book an audit',
    to: '/audit',
    icon: <Gauge className="h-5 w-5" aria-hidden="true" />,
    accent: 'teal'
  },
  {
    title: 'Inclusive performance review',
    category: 'Performance',
    description: 'Pair with your engineers to trim scripts, improve Core Web Vitals, and keep accessibility guardrails intact.',
    ctaLabel: 'Schedule review',
    to: '/contact',
    icon: <Users className="h-5 w-5" aria-hidden="true" />,
    accent: 'sky'
  },
  {
    title: 'Green infrastructure roadmap',
    category: 'Infrastructure',
    description: 'Map infrastructure decisions—hosting, CDN, caching—to low-carbon options aligned with regulatory needs.',
    ctaLabel: 'Start roadmap',
    to: '/contact',
    icon: <Globe2 className="h-5 w-5" aria-hidden="true" />,
    accent: 'emeraldDark'
  },
  {
    title: 'Behavioural experimentation lab',
    category: 'Experimentation',
    description: 'Run lightweight experiments that test copy, motion, and asset changes for measurable carbon reductions.',
    ctaLabel: 'Run experiments',
    to: '/contact',
    icon: <Lightbulb className="h-5 w-5" aria-hidden="true" />,
    accent: 'amber'
  },
  {
    title: 'Sustainability enablement playbook',
    category: 'Enablement',
    description: 'Upskill your team with workshops, templates, and budgets so climate-aware delivery sticks long-term.',
    ctaLabel: 'Get the playbook',
    to: '/resources',
    icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
    accent: 'forest'
  }
];

const spotlight = {
  title: 'Operationalising greener delivery in every release',
  description:
    'We partner with product, engineering, and operations teams to cut energy and weight while safeguarding business-critical KPIs. Every engagement blends insight, experimentation, and coaching.',
  bullets: [
    'Roadmaps underpinned by real emissions and analytics data',
    'Enablement rituals that stick long after the engagement',
    'Measured experiments to prove impact to leadership'
  ],
  imageWebp:
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80&fm=webp',
  imageFallback:
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
};

const engagementMetrics = [
  {
    label: 'Average page-weight reduction',
    value: '↓48%',
    description: 'Combine asset optimisation with content strategy to keep stories sharp and light.'
  },
  {
    label: 'Faster perceived load',
    value: '1.9×',
    description: 'Lean design systems and motion guidance keep first contentful paint in the green.'
  },
  {
    label: 'Energy saved per visit',
    value: '2.1 g CO₂e',
    description: 'Continuous audits highlight hotspots so teams can maintain the low-carbon baseline.'
  },
  {
    label: 'Team enablement satisfaction',
    value: '96%',
    description: 'Designers, PMs, and engineers rate our playbooks highly for staying power.'
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
          <SectionHeading
            kicker="Choose your focus"
            title="Six accelerated ways to partner with WebWaste"
            subtitle="Stack or sequence engagements to suit your roadmap. Every track blends measurable carbon impact with improved product performance."
            align="left"
            className="max-w-4xl"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceHighlights.map((item) => {
              const accent = highlightAccentStyles[item.accent];
              return (
                <article
                  key={item.title}
                  className={`group flex h-full flex-col rounded-[1.9rem] border p-7 shadow-[0_32px_80px_-55px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_-50px_rgba(6,95,70,0.35)] ${accent.card}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-full shadow-inner ${accent.iconWrap}`}>
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{item.category}</p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-700">{item.description}</p>
                  <Link
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c] ${accent.link}`}
                    to={item.to}
                  >
                    {item.ctaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell flow-ux__band">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading
            kicker="Results without greenwashing"
            title="What our clients see within the first quarter"
            subtitle="We pair carbon and UX improvements so sustainability initiatives unlock stronger business outcomes."
            align="left"
            className="max-w-xl"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {engagementMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-emerald-200/40 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(16,163,76,0.35)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">{metric.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{metric.value}</p>
                <p className="mt-3 text-sm text-slate-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell flow-ux__band flow-ux__band--alt">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Why teams partner with us</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{spotlight.title}</h2>
            <p className="text-base text-slate-600 sm:text-lg">{spotlight.description}</p>
            <ul className="space-y-3 text-sm text-slate-600">
              {spotlight.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">
                  Talk to the team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link className="flow-ux__cta flow-ux__cta--tertiary text-emerald-700 hover:text-emerald-600" to="/resources">
                Download enablement resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-[2.2rem] border border-emerald-200/60 bg-emerald-900/5 shadow-[0_40px_90px_-55px_rgba(6,95,70,0.45)]">
            <picture>
              <source srcSet={spotlight.imageWebp} type="image/webp" />
              <img
                src={spotlight.imageFallback}
                alt="Designers reviewing eco-friendly product metrics on a laptop"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/70 to-transparent p-6 text-sm text-emerald-50">
              Carbon-friendly experimentation session in progress — capturing insights for the next release.
            </figcaption>
          </figure>
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
