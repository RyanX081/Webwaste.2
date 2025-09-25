import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Green Audit Kit', href: '#audit' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const motionQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  const prefersReducedMotion = motionQuery?.matches ?? false;

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 88;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(y, 0), behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    } else {
      window.location.hash = targetId;
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        isScrolled ? 'bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <a
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900"
          href="#home"
          onClick={(event) => handleNavigate(event, '#home')}
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#16a34c]/10 text-[#16a34c]">
            WW
          </span>
          WebWaste
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-[#16a34c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
              href={item.href}
              onClick={(event) => handleNavigate(event, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#16a34c] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#16a34c]/30 transition hover:bg-[#15803d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
            href="#audit"
            onClick={(event) => handleNavigate(event, '#audit')}
          >
            Run a Green Audit
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#16a34c]/60 hover:text-[#16a34c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>
      <div
        className={`lg:hidden ${
          isMenuOpen
            ? 'pointer-events-auto max-h-[480px] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        } transition-all duration-300 ease-out`}
      >
        <div className="mx-auto w-full max-w-6xl px-6 pb-6 sm:px-8">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-600 transition hover:bg-[#16a34c]/10 hover:text-[#15803d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
                  href={item.href}
                  onClick={(event) => handleNavigate(event, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#16a34c] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#16a34c]/30 transition hover:bg-[#15803d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
                href="#audit"
                onClick={(event) => handleNavigate(event, '#audit')}
              >
                Run a Green Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
