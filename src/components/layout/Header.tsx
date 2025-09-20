import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Services', to: '/services' },
  { label: 'Get Started', to: '/get-started', cta: true }
];

export function Header() {
  const [open, setOpen] = useState(false);

  const baseLinkClasses = 'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200';
  const baseMobileClasses = 'rounded-xl px-4 py-3 text-base font-medium transition-all';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 hover:text-emerald-700"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            WW
          </span>
          WebWaste
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.cta ? (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    baseLinkClasses,
                    'bg-emerald-600 text-white shadow-sm shadow-emerald-200/60 hover:bg-emerald-500',
                    isActive ? 'ring-2 ring-emerald-300/70' : ''
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    baseLinkClasses,
                    isActive
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:text-emerald-600 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-6xl px-6 pb-6 lg:px-8 md:hidden">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="grid gap-3">
              {navItems.map((item) =>
                item.cta ? (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        baseMobileClasses,
                        'bg-emerald-600 text-white text-center shadow-sm hover:bg-emerald-500',
                        isActive ? 'ring-2 ring-emerald-300/70' : ''
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        baseMobileClasses,
                        isActive ? 'bg-emerald-100 text-emerald-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
