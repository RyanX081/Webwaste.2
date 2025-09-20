import React from 'react';
import { ArrowUpRight, Bookmark, Leaf, Timer } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';

const posts = [
  {
    title: 'Designing hero sections that waste fewer bytes',
    summary: 'We decode Wholegrain-inspired hero patterns and share motion principles that respect low-power devices.',
    readTime: '7 min read',
    tag: 'Interface design',
    updated: 'Aug 2024'
  },
  {
    title: 'Migrating analytics without ballooning carbon emissions',
    summary: 'A blueprint for reducing third-party scripts by 38% while keeping marketing and data teams aligned.',
    readTime: '6 min read',
    tag: 'Data & analytics',
    updated: 'Jun 2024'
  },
  {
    title: 'Edge caching tactics for sustainable content delivery networks',
    summary: 'From stale-while-revalidate to regional carbon intensity routing—practical plays you can ship today.',
    readTime: '10 min read',
    tag: 'Engineering',
    updated: 'May 2024'
  },
  {
    title: 'Inclusive low-energy motion principles',
    summary: 'How to layer in atmospheric motion cues without excluding users on reduced-motion preferences or older devices.',
    readTime: '8 min read',
    tag: 'Accessibility',
    updated: 'Mar 2024'
  }
];

export function BlogsPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="section-shell">
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/60 px-8 py-14 shadow-[0_30px_80px_-30px_rgba(129,140,248,0.4)]">
          <SectionHeading
            kicker="Blog"
            title="Insights at the intersection of UX, performance, and climate"
            subtitle="Every article is written by practitioners actively shipping sustainable experiences with our clients."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-emerald-200">
                  <span className="inline-flex items-center gap-2 text-[0.95em] capitalize">
                    <Leaf className="h-4 w-4" /> {post.tag}
                  </span>
                  <span>{post.updated}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{post.title}</h3>
                <p className="mt-4 flex-1 text-sm text-emerald-100/80">{post.summary}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-emerald-100/70">
                  <span className="inline-flex items-center gap-2">
                    <Timer className="h-4 w-4" /> {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2 font-medium text-emerald-200 group-hover:text-white">
                    Read story
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-4 text-sm text-emerald-200/70">
            <Bookmark className="h-4 w-4" />
            Subscribe to our monthly digest for case studies, templates, and carbon experiments.
          </div>
        </div>
      </section>
    </div>
  );
}
