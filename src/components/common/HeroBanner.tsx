import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Cta = {
  label: string;
  to: string;
};

type HeroBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  gradientClass: string;
  eyebrowClassName?: string;
  overlayClassName?: string;
  bottomFadeClassName?: string;
  textAlign?: 'center' | 'left';
};

const containerClass = 'mx-auto w-full max-w-6xl px-6 sm:px-8';

export function HeroBanner({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  gradientClass,
  eyebrowClassName = 'text-lime-200',
  overlayClassName = 'bg-emerald-950/50',
  bottomFadeClassName = 'from-[#f3f4f0]',
  textAlign = 'center'
}: HeroBannerProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const alignmentClasses =
    textAlign === 'left'
      ? 'items-start text-left'
      : 'items-center text-center';

  const ctaAlignment = textAlign === 'left' ? 'justify-start' : 'justify-center';

  return (
    <section className="relative isolate overflow-hidden flow-ux__band flow-ux__band--hero pt-28 sm:pt-36">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} aria-hidden="true" />
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.22),_transparent_65%)]" aria-hidden="true" />
      <div className={`${containerClass} flex ${textAlign === 'left' ? '' : 'justify-center'}`}>
        <div
          className={`mx-auto flex max-w-3xl flex-col space-y-8 text-white transition duration-700 ease-out ${
            alignmentClasses
          } ${isReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] ${eyebrowClassName}`}
          >
            {eyebrow}
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.1rem]">
            {title}
          </h1>
          <p className="text-lg text-emerald-50 sm:text-xl">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className={`flex flex-wrap items-center gap-3 ${ctaAlignment}`}>
              {primaryCta && (
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-[#facc14] px-6 py-3 text-sm font-semibold text-[#0b3d2c] shadow-lg shadow-[#facc14]/30 transition hover:bg-[#fbbf24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  to={primaryCta.to}
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  to={secondaryCta.to}
                >
                  {secondaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${bottomFadeClassName} to-transparent`} aria-hidden="true" />
    </section>
  );
}
