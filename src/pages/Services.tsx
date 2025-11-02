import React from 'react';
import { HeroBanner } from '@/components/common/HeroBanner';

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
    </div>
  );
}
