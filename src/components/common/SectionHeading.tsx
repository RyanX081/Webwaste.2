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
    <div className={cx('mx-auto max-w-4xl', align === 'center' ? 'text-center' : 'text-left', className)}>
      {kicker && <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">{kicker}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-emerald-100/90 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
