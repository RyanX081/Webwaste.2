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
    <div className="space-y-20 pb-24">
      <section className="section-shell">
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/60 px-8 py-14 shadow-[0_30px_80px_-30px_rgba(30,64,175,0.5)]">
          <SectionHeading
            kicker="Resources"
            title="Downloadable toolkits to launch your climate-positive roadmap"
            subtitle="Each PDF product is handcrafted by our strategists and updated quarterly as the landscape shifts."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-emerald-200">
                  <span>{product.badge}</span>
                  {product.priceLabel === 'Free' ? <Sparkle className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{product.title}</h3>
                <p className="mt-3 flex-1 text-sm text-emerald-100/80">{product.description}</p>
                <ul className="mt-6 grid gap-2 text-sm text-emerald-100/80">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{product.priceLabel}</span>
                  <Button variant={product.priceLabel === 'Free' ? 'secondary' : 'primary'} className="px-5">
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
