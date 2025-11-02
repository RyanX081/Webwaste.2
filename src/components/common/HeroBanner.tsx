import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Cta = {
  label: string;
  to: string;
};

type HeroBannerProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  gradientClass: string;
  eyebrowClassName?: string;
  overlayClassName?: string;
  bottomFadeClassName?: string;
  textAlign?: 'center' | 'left';
  className?: string;
  containerClassName?: string;
  media?: {
    src: string;
    alt: string;
    className?: string;
    imgClassName?: string;
  };
};

const containerClass = 'mx-auto w-full max-w-6xl px-6 sm:px-8';

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

export function HeroBanner({
  id,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  gradientClass,
  eyebrowClassName = 'text-lime-200',
  overlayClassName = 'bg-emerald-950/50',
  bottomFadeClassName = 'from-[#f3f4f0]',
  textAlign = 'center',
  className,
  containerClassName,
  media
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

  const hasMedia = Boolean(media);

  const layoutClasses = hasMedia
    ? 'grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start lg:gap-16 lg:items-center'
    : cx('flex', textAlign === 'left' ? 'justify-start' : 'justify-center');

  const textWidthClass = hasMedia
    ? 'max-w-xl'
    : textAlign === 'left'
      ? 'max-w-3xl'
      : 'mx-auto max-w-3xl';

  const textWrapperClasses = cx(
    'flex flex-col space-y-8 text-white transition duration-700 ease-out',
    alignmentClasses,
    textWidthClass,
    isReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
  );

  const ctaAlignment = textAlign === 'left' ? 'justify-start' : 'justify-center';

  return (
    <section
      id={id}
      className={cx(
        'relative isolate overflow-hidden flow-ux__band flow-ux__band--hero pt-28 sm:pt-36 pb-24 sm:pb-28',
        className
      )}
    >
      <div className={cx('absolute inset-0 bg-gradient-to-br', gradientClass)} aria-hidden="true" />
      <div className={cx('absolute inset-0', overlayClassName)} aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.22),_transparent_65%)]" aria-hidden="true" />
      <div className={cx(containerClass, layoutClasses, containerClassName)}>
        <div className={textWrapperClasses}>
          {eyebrow && (
            <span
              className={cx(
                'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]',
                eyebrowClassName
              )}
            >
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.1rem]">
            {title}
          </h1>
          <p className="text-lg text-emerald-50 sm:text-xl">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className={cx('flex flex-wrap items-center gap-3', ctaAlignment)}>
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
        {hasMedia && media && (
          <figure
            className={cx(
              'relative w-full overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 p-4 shadow-2xl shadow-emerald-900/30 backdrop-blur-sm',
              media.className
            )}
          >
            <img
              src={media.src}
              alt={media.alt}
              className={cx('h-full w-full rounded-[2rem] object-cover', media.imgClassName)}
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-emerald-900/20" aria-hidden="true" />
          </figure>
        )}
      </div>
      <div className={cx('absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent', bottomFadeClassName)} aria-hidden="true" />
    </section>
  );
}
