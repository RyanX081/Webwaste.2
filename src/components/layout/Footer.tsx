import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const footerLinks = [
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Services', to: '/services' },
  { label: 'Get Started', to: '/get-started' }
];

export function Footer() {
  return (
    <footer className="relative mt-12 sm:mt-16 flow-ux__footer">
      <div className="section-shell flow-ux__footer-columns">
        <div>
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              WW
            </span>
            WebWaste
          </div>
          <p className="mt-4 max-w-sm text-sm">
            We help modern teams design leaner digital experiences—less carbon, faster journeys, happier users.
          </p>
        </div>

        <div className="flow-ux__newsletter">
          <h3 className="text-base font-semibold text-white">Stay in the loop</h3>
          <p className="text-sm text-emerald-100/80">Monthly dispatches on sustainable UX, performance, and governance.</p>
          <form>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Navigate</p>
          <ul className="mt-4 grid gap-2 text-sm text-emerald-50/80">
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
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Contact</p>
          <ul className="mt-4 grid gap-1 text-sm">
            <li>hello@webwaste.studio</li>
            <li>+44 20 1234 5678</li>
            <li>London · Remote-first</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Follow</p>
          <ul className="mt-4 grid gap-1 text-sm">
            <li><a className="transition hover:text-white" href="#">LinkedIn</a></li>
            <li><a className="transition hover:text-white" href="#">Mastodon</a></li>
            <li><a className="transition hover:text-white" href="#">Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-emerald-100/20 py-6">
        <div className="section-shell flow-ux__legal">
          <p>© {new Date().getFullYear()} WebWaste Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
