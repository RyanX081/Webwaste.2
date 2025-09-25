import React from 'react';
import { DownloadCloud, Lock, ShieldCheck, Sparkle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/common/SectionHeading';

const products = [
  {
    title: 'Sustainable Site Checklist',
    description: '25-point PDF covering quick wins for designers, developers, and content folks. Ideal for discovery workshops.',
    priceLabel: 'Free',
    badge: 'Starter',
    features: ['Carbon + UX essentials', 'Implementation tips', 'Team workshop agenda']
  },
  {
    title: 'Carbon Budget Playbook',
    description: 'A 45-page playbook with templates, calculator worksheets, and governance models for product teams.',
    priceLabel: '£149',
    badge: 'Popular',
    features: ['Budget frameworks', 'Stakeholder narrative deck', 'CI guardrail checklist']
  },
  {
    title: 'Executive Strategy Pack',
    description: 'Board-ready storytelling kit including financial impact models, climate commitments matrix, and rollout roadmap.',
    priceLabel: '£299',
    badge: 'Leadership',
    features: ['Narrative slides', 'Investment scenarios', 'Metrics dashboard starter']
  }
];

export function ResourcesPage() {
  return (
    <div className="flow-ux__stack">
      <section className="relative isolate overflow-hidden flow-ux__band flow-ux__band--subtle">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-sky-100" />
        <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_top,_black,transparent_70%)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(16,185,129,0.25)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="section-shell relative py-24">
          <SectionHeading
            kicker="Resources"
            title="Downloadable toolkits to launch your climate-positive roadmap"
            subtitle="Each PDF product is handcrafted by our strategists and updated quarterly as the landscape shifts."
          />
          <div className="mt-14 flow-ux__grid flow-ux__grid--dense">
            {products.map((product) => (
              <article
                key={product.title}
                className="group flex h-full flex-col flow-ux__card"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-emerald-700 flow-ux__card-meta">
                  <span>{product.badge}</span>
                  {product.priceLabel === 'Free' ? <Sparkle className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{product.title}</h3>
                <p className="mt-3 flex-1 text-sm text-slate-600 flow-ux__meta">{product.description}</p>
                <ul className="mt-6 grid gap-2 text-sm text-slate-600 flow-ux__bullet-list">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-900">{product.priceLabel}</span>
                  <Button variant={product.priceLabel === 'Free' ? 'secondary' : 'primary'}>
                    {product.priceLabel === 'Free' ? 'Download PDF' : 'Purchase PDF'}
                    <DownloadCloud className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
