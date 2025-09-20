import React from 'react';
import { Calendar, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/common/SectionHeading';

export function GetStartedPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="section-shell">
        <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-slate-900/60 px-8 py-14 shadow-[0_30px_80px_-30px_rgba(126,34,206,0.45)] lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="Get started"
              title="Ready to build a lighter, faster, more responsible web?"
              subtitle="Share a few details and we’ll curate the right mix of audits, design interventions, and enablement."
              align="left"
            />
            <div className="mt-10 space-y-6 text-sm text-emerald-100/80">
              <div className="flex gap-3">
                <Calendar className="mt-1 h-5 w-5 text-emerald-300" />
                <p>We respond within two working days with a tailored agenda for a 45-minute scoping call.</p>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-emerald-300" />
                <p>Prefer email? Send any briefs to <span className="font-medium text-emerald-200">studio@webwaste.studio</span>.</p>
              </div>
              <div className="flex gap-3">
                <MessageCircle className="mt-1 h-5 w-5 text-emerald-300" />
                <p>We’ll share a tangible carbon snapshot along with opportunities for the first 90 days.</p>
              </div>
            </div>
          </div>

          <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-inner shadow-emerald-900/40">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Name</label>
              <input
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-emerald-100/40 focus:border-emerald-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-emerald-100/40 focus:border-emerald-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Website or product</label>
              <input
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-emerald-100/40 focus:border-emerald-400 focus:outline-none"
                placeholder="https://"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Goals</label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-emerald-100/40 focus:border-emerald-400 focus:outline-none"
                placeholder="Tell us about performance, carbon or UX goals."
              />
            </div>
            <Button type="submit" className="w-full justify-center py-3 text-base">
              Book chemistry call
            </Button>
            <p className="text-xs text-emerald-100/60">By submitting, you agree to our privacy policy and consent to receiving project-related emails.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
