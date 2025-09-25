import React from 'react';
import { ArrowUpRight, Bookmark, Leaf, Timer } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';

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
    <div className="flow-ux__stack">
      <section className="flow-ux__band flow-ux__band--surface">
        <div className="flow-ux__section flow-ux__surface-panel">
          <SectionHeading
            kicker="Blog"
            title="Insights at the intersection of UX, performance, and climate"
            subtitle="Every article is written by practitioners actively shipping sustainable experiences with our clients."
          />
          <div className="flow-ux__grid flow-ux__grid--cols-2">
            {posts.map((post) => (
              <article key={post.title} className="flow-ux__card">
                <div className="flow-ux__card-meta text-emerald-600">
                  <span className="inline-flex items-center gap-2 text-[0.95em] capitalize">
                    <Leaf className="h-4 w-4" /> {post.tag}
                  </span>
                  <span>{post.updated}</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{post.title}</h3>
                <p className="flow-ux__meta">{post.summary}</p>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <Timer className="h-4 w-4 text-emerald-600" /> {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold text-emerald-700">
                    Read story
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="flow-ux__card items-center justify-between gap-4 sm:flex">
            <div className="flex items-center gap-3 text-sm text-emerald-700">
              <Bookmark className="h-5 w-5" />
              Subscribe to our monthly digest for case studies, templates, and carbon experiments.
            </div>
            <Button variant="secondary">Join the list</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
