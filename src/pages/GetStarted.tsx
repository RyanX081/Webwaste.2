import React from 'react';
import { Calendar, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/common/SectionHeading';

export function GetStartedPage() {
  return (
    <div className="flow-ux__stack">
      <section className="section-shell flow-ux__band">
        <div
          className="grid gap-10 rounded-[2.5rem] border border-slate-200 bg-white px-8 py-14 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.35)] lg:grid-cols-2 lg:gap-16"
          data-flow-animate="fade-up"
        >
          <div data-flow-animate="fade-up">
            <SectionHeading
              kicker="Get started"
              title="Ready to build a lighter, faster, more responsible web?"
              subtitle="Share a few details and we’ll curate the right mix of audits, design interventions, and enablement."
              align="left"
            />
            <div className="mt-10 space-y-6 text-sm text-slate-600">
              <div className="flex gap-3">
                <Calendar className="mt-1 h-5 w-5 text-emerald-600" />
                <p>We respond within two working days with a tailored agenda for a 45-minute scoping call.</p>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-emerald-600" />
                <p>
                  Prefer email? Send any briefs to <span className="font-medium text-emerald-700">studio@webwaste.studio</span>.
                </p>
              </div>
              <div className="flex gap-3">
                <MessageCircle className="mt-1 h-5 w-5 text-emerald-600" />
                <p>We’ll share a tangible carbon snapshot along with opportunities for the first 90 days.</p>
              </div>
            </div>
          </div>

          <form
            className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8"
            data-flow-animate="fade-left"
            data-flow-animate-delay="120ms"
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Name</label>
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Website or product</label>
              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
                placeholder="https://"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Goals</label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none"
                placeholder="Tell us about performance, carbon or UX goals."
              />
            </div>
            <Button type="submit" className="w-full justify-center">
              Book chemistry call
            </Button>
            <p className="text-xs text-slate-500">By submitting, you agree to our privacy policy and consent to receiving project-related emails.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
