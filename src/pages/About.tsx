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
    <div className="space-y-20 pb-24">
      <section className="section-shell">
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/60 px-8 py-14 shadow-[0_30px_80px_-30px_rgba(56,189,248,0.4)]">
          <SectionHeading
            kicker="About"
            title="Founded by designers who obsess over sustainability metrics"
            subtitle="Our studio blends service design, performance engineering, and climate research to help companies shrink their digital footprint."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-emerald-900/40">
                <h3 className="text-lg font-semibold text-white">Studio snapshot</h3>
                <ul className="mt-6 grid gap-4 text-sm text-emerald-100/80">
                  <li>• 18 specialists across UX, data, and green infrastructure</li>
                  <li>• 60+ audits delivered in B2B, SaaS, public sector, and culture</li>
                  <li>• Partnerships with Wholegrain Digital alumni and climate scientists</li>
                  <li>• Contributors to open climate datasets & utilitarian design standards</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.year} className="relative border-l border-emerald-500/40 pl-8">
                    <span className="absolute -left-[10px] top-0 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/50 bg-slate-950 text-xs font-semibold text-emerald-200">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-emerald-100/80">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-[2.25rem] border border-white/10 bg-emerald-500/5 p-10 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.7)]">
          <SectionHeading
            kicker="Principles"
            title="Designing responsibly across the product lifecycle"
            subtitle="We align with planetary limits without compromising craft, usability, or delight."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-200">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-emerald-100/80">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
