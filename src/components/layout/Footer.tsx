import React from 'react';
import { ArrowRight, Linkedin, Mail, Send, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Green Audit Kit', to: '/audit' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'Twitter', href: 'https://www.twitter.com', icon: Twitter },
  { label: 'Newsletter', href: '#newsletter', icon: Send }
];

export function Footer() {
  return (
    <footer className="bg-[#07140c] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link className="flex items-center gap-3 text-lg font-semibold tracking-tight" to="/">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#16a34c]/20 text-[#16a34c]">
                WW
              </span>
              WebWaste
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              We design digital experiences that move faster, feel better, and tread lighter on the planet. From research to release, sustainability is baked into every decision.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
                <Mail className="h-4 w-4" aria-hidden="true" />
                hello@webwaste.studio
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
                London · Remote-first
              </span>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#16a34c] hover:bg-[#16a34c]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#facc14]">Navigate</p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link className="transition hover:text-white" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#facc14]">Services</p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li>Sustainable UX audits</li>
                <li>Eco-first design systems</li>
                <li>Low-impact engineering</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#facc14]">Newsletter</p>
            <p className="mt-4 text-sm text-white/70">
              Monthly notes with practical tactics and case studies on digital sustainability.
            </p>
            <form className="mt-5 space-y-3" id="newsletter">
              <label className="sr-only" htmlFor="newsletter-input">
                Email address
              </label>
              <input
                id="newsletter-input"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#facc14] focus:outline-none focus:ring-2 focus:ring-[#facc14]/30"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#facc14] px-5 py-3 text-sm font-semibold text-[#0f3815] transition hover:bg-[#fbbf24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc14]"
              >
                Join the list
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WebWaste Studio. All rights reserved.</p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <a className="transition hover:text-white" href="#">
              Privacy
            </a>
            <a className="transition hover:text-white" href="#">
              Accessibility
            </a>
            <a className="transition hover:text-white" href="#">
              Sustainability
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
