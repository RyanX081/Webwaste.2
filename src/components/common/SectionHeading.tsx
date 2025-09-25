import React from 'react';

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(' ');
}

export function SectionHeading({ kicker, title, subtitle, align = 'center', className }: SectionHeadingProps) {
  return (
    <div
      className={cx(
        'mx-auto max-w-3xl flow-ux__intro',
        align === 'center' ? 'text-center' : 'text-left flow-ux__intro--left',
        className
      )}
    >
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 flow-ux__kicker">{kicker}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl flow-ux__title">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-600 sm:text-lg flow-ux__lead">{subtitle}</p>
      )}
    </div>
  );
}
