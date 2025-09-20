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
    <footer className="relative mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              WW
            </span>
            WebWaste
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate-600">
            We help modern teams design leaner digital experiences—less carbon, faster journeys, happier users.
          </p>
        </div>

        <div className="grid gap-6 text-sm text-slate-600 lg:col-span-7 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">Navigate</p>
            <ul className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink className="transition hover:text-slate-900" to={link.to}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">Contact</p>
            <ul className="mt-4 grid gap-1 text-slate-600">
              <li>hello@webwaste.studio</li>
              <li>+44 20 1234 5678</li>
              <li>London · Remote-first</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">Follow</p>
            <ul className="mt-4 grid gap-1">
              <li><a className="transition hover:text-slate-900" href="#">LinkedIn</a></li>
              <li><a className="transition hover:text-slate-900" href="#">Mastodon</a></li>
              <li><a className="transition hover:text-slate-900" href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} WebWaste Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Accessibility</a>
            <a href="#" className="hover:text-slate-900">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
