import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CheckCircle2, Compass, Gauge, Users } from 'lucide-react';

const timeline = [
  {
    year: '2016',
    title: 'Noticing the hidden footprint',
    copy: 'Our founders led performance transformations in large organisations and saw the untapped emissions reduction in every lightweight release.'
  },
  {
    year: '2019',
    title: 'Bridging design and sustainability',
    copy: 'We launched the first design system tuned for carbon budgets, partnering with climate researchers and content strategists.'
  },
  {
    year: '2022',
    title: 'Scaling impact across teams',
    copy: 'Today we embed with product, data, and engineering squads to make climate-aware delivery the default, not the exception.'
  }
];

const principles = [
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: 'Human-centred efficiency',
    copy: 'We optimise journeys for clarity first—shorter flows reduce emissions and make users happier.'
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: 'Evidence-led decisions',
    copy: 'Every recommendation is tied to metrics: carbon intensity, Core Web Vitals, and product KPIs.'
  },
  {
    icon: <Compass className="h-5 w-5" />,
    title: 'Responsible creativity',
    copy: 'We craft compelling experiences that stay accessible and inclusive across bandwidths and abilities.'
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Co-create with teams',
    copy: 'Workshops, playbooks, and pairing make sustainable practices stick long after the engagement.'
  }
];

export function AboutPage() {
  return (
    <div className="flow-ux__stack">
      <section className="flow-ux__band flow-ux__band--surface">
        <div className="flow-ux__section flow-ux__surface-panel">
          <SectionHeading
            kicker="About"
            title="Founded by designers who obsess over sustainability metrics"
            subtitle="Our studio blends service design, performance engineering, and climate research to help companies shrink their digital footprint."
          />
          <div className="flow-ux__grid flow-ux__grid--cols-2">
            <aside className="flow-ux__card">
              <h3 className="text-lg font-semibold text-slate-900">Studio snapshot</h3>
              <ul className="flow-ux__list flow-ux__meta">
                <li className="flow-ux__list-item">18 specialists across UX, data, and green infrastructure</li>
                <li className="flow-ux__list-item">60+ audits delivered in B2B, SaaS, public sector, and culture</li>
                <li className="flow-ux__list-item">Partnerships with Wholegrain Digital alumni and climate scientists</li>
                <li className="flow-ux__list-item">Contributors to open climate datasets &amp; utilitarian design standards</li>
              </ul>
            </aside>
            <div className="flow-ux__stack">
              {timeline.map((item) => (
                <article key={item.year} className="flow-ux__card">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">{item.year}</span>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="flow-ux__meta">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flow-ux__band flow-ux__band--tint">
        <div className="flow-ux__section flow-ux__surface-panel">
          <SectionHeading
            kicker="Principles"
            title="Designing responsibly across the product lifecycle"
            subtitle="We align with planetary limits without compromising craft, usability, or delight."
          />
          <div className="flow-ux__grid flow-ux__grid--cols-2">
            {principles.map((item) => (
              <article key={item.title} className="flow-ux__card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  {item.icon}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="flow-ux__meta">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
