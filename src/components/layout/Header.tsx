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

  const baseLinkClasses = 'rounded-full px-4 py-2 text-sm transition-all duration-200';
  const baseMobileClasses = 'rounded-xl px-4 py-3 text-base transition-all';

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white hover:text-emerald-200"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
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
                    'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 hover:shadow-emerald-400/40',
                    isActive ? 'ring-2 ring-emerald-300/80' : ''
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
                      ? 'bg-white/10 text-white shadow-sm shadow-emerald-400/30'
                      : 'text-emerald-100 hover:text-white hover:bg-white/5'
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-lg shadow-emerald-500/10">
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
                        'bg-emerald-500 text-white text-center shadow-lg shadow-emerald-500/30 hover:bg-emerald-400',
                        isActive ? 'ring-2 ring-emerald-300/80' : ''
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
                        isActive ? 'bg-white/10 text-white' : 'text-emerald-100 hover:bg-white/5 hover:text-white'
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
