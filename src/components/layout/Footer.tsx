import React from 'react';
import { NavLink } from 'react-router-dom';

const footerLinks = [
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Services', to: '/services' },
  { label: 'Get Started', to: '/get-started' }
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
              WW
            </span>
            WebWaste
          </div>
          <p className="mt-4 max-w-sm text-sm text-emerald-100/80">
            We help modern teams design leaner digital experiences—less carbon, faster journeys, happier users.
          </p>
        </div>

        <div className="grid gap-6 text-sm text-emerald-100/80 lg:col-span-7 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Navigate</p>
            <ul className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink className="transition hover:text-white" to={link.to}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Contact</p>
            <ul className="mt-4 grid gap-1">
              <li>hello@webwaste.studio</li>
              <li>+44 20 1234 5678</li>
              <li>London · Remote-first</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Follow</p>
            <ul className="mt-4 grid gap-1">
              <li><a className="transition hover:text-white" href="#">LinkedIn</a></li>
              <li><a className="transition hover:text-white" href="#">Mastodon</a></li>
              <li><a className="transition hover:text-white" href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-xs text-emerald-100/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} WebWaste Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
