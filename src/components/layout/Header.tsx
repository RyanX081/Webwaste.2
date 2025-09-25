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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-100/40 bg-white/70 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1220px] items-center justify-between px-5 sm:px-6 lg:px-10">
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

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) =>
            item.cta ? (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    baseLinkClasses,
                    'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-200/40 hover:from-emerald-400 hover:to-emerald-600',
                    isActive ? 'ring-2 ring-emerald-200/70' : 'hover:shadow-xl hover:-translate-y-0.5'
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
                      ? 'bg-emerald-100 text-emerald-700 shadow-inner shadow-emerald-200/60'
                      : 'text-slate-600 hover:bg-white/70 hover:text-slate-900 hover:-translate-y-0.5'
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-white/80 text-slate-700 shadow-md shadow-emerald-100/50 transition hover:text-emerald-600 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-[1220px] px-5 pb-6 sm:px-6 lg:px-10 md:hidden">
          <div className="rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-2xl shadow-emerald-100/60 backdrop-blur-lg">
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
                        'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center shadow-lg shadow-emerald-200/40 hover:from-emerald-400 hover:to-emerald-600',
                        isActive ? 'ring-2 ring-emerald-200/60' : ''
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
                        isActive
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'text-slate-600 hover:bg-white/70 hover:text-slate-900'
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
