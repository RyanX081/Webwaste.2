import React from 'react';
import { DownloadCloud, Lock, Sparkle } from 'lucide-react';
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
      <section className="flow-ux__band flow-ux__band--muted">
        <div className="flow-ux__section flow-ux__surface-panel">
          <SectionHeading
            kicker="Resources"
            title="Toolkits to launch a climate-positive roadmap"
            subtitle="Each PDF is handcrafted by our strategists and refreshed quarterly as the landscape shifts."
          />
          <div className="flow-ux__grid flow-ux__grid--cols-3">
            {products.map((product) => (
              <article key={product.title} className="flow-ux__card">
                <div className="flow-ux__card-meta text-emerald-700">
                  <span>{product.badge}</span>
                  {product.priceLabel === 'Free' ? <Sparkle className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
                <p className="flow-ux__meta">{product.description}</p>
                <ul className="flow-ux__list flow-ux__meta">
                  {product.features.map((feature) => (
                    <li key={feature} className="flow-ux__list-item">{feature}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
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
