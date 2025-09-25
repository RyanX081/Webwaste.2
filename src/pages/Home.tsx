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
    <div className="flow-ux__stack">
      <section className="flow-ux__band flow-ux__band--contrast">
        <div className="flow-ux__section flow-ux__hero">
          <div className="flow-ux__stack">
            <span className="flow-ux__pill">
              <Sprout className="h-4 w-4" /> Digital sustainability studio
            </span>
            <h1 className="flow-ux__title">Build web experiences that feel fast and tread lightly.</h1>
            <p className="flow-ux__lead text-white/90">
              Wholegrain-inspired thinking remixed for modern product teams. We connect climate-aware metrics with UX design so you can ship smaller, smarter releases without sacrificing brand or accessibility.
            </p>
            <div className="flow-ux__cta-group">
              <Button asChild>
                <Link to="/get-started">
                  Start a low-carbon project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/services">See our approach</Link>
              </Button>
              <Link className="flow-ux__cta flow-ux__cta--ghost" to="/resources">
                Browse resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flow-ux__metrics">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flow-ux__metric">
                  <p className="flow-ux__metric-value">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flow-ux__hero-panel">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Impact snapshot</p>
            <figure className="flow-ux__stack">
              <blockquote className="text-base leading-relaxed text-white/90">
                “They transform sustainability from a retrofit into a north star for product &amp; design.”
              </blockquote>
              <cite className="text-sm font-semibold text-white/70">Chief Product Officer · Culture &amp; heritage</cite>
            </figure>
            <div className="grid gap-3 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <Leaf className="mt-1 h-4 w-4" />
                <span>North-star metrics aligned to emission budgets and Core Web Vitals from day zero.</span>
              </div>
              <div className="flex items-start gap-3">
                <LineChart className="mt-1 h-4 w-4" />
                <span>Data stories that resonate with boards, product squads, and procurement.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flow-ux__band flow-ux__band--surface">
        <div className="flow-ux__section">
          <SectionHeading
            kicker="Why WebWaste"
            title="Every engagement cuts waste without cutting corners"
            subtitle="We embed with teams to uncover carbon-heavy journeys, design lightweight experiences, and steward the long-term operational change."
          />
          <div className="flow-ux__grid flow-ux__grid--cols-3">
            {methodology.map((item) => (
              <article key={item.title} className="flow-ux__card">
                <div className="flex items-center gap-3 text-emerald-700">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="flow-ux__meta">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flow-ux__band flow-ux__band--tint">
        <div className="flow-ux__section">
          <SectionHeading
            kicker="What sets us apart"
            title="A studio tuned for climate-conscious product teams"
            subtitle="No greenwashing—just evidence-backed practice, leadership alignment, and continuous enablement."
            align="left"
          />
          <div className="flow-ux__grid flow-ux__grid--cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="flow-ux__card">
                <span className="flow-ux__pill">{item.badge}</span>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="flow-ux__meta">{item.copy}</p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  Explore how it works
                  <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
