import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock, Users } from 'lucide-react';
import { HeroBanner } from '@/components/common/HeroBanner';
import type { BlogPost } from '@/data/blogPosts';
import { blogPosts } from '@/data/blogPosts';

function PostMeta({ author, publishedAt, readTime }: { author?: string; publishedAt: string; readTime: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
      {author && (
        <span className="inline-flex items-center gap-2">
          <Users className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          {author}
        </span>
      )}
      <span className="inline-flex items-center gap-2">
        <CalendarDays className="h-4 w-4 text-emerald-600" aria-hidden="true" />
        <time dateTime={new Date(publishedAt).toISOString()}>{publishedAt}</time>
      </span>
      <span className="inline-flex items-center gap-2">
        <Clock className="h-4 w-4 text-emerald-600" aria-hidden="true" />
        {readTime}
      </span>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_70px_-55px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-[0_36px_90px_-50px_rgba(15,23,42,0.4)]">
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <img
          src={post.heroImage.src}
          alt={post.heroImage.alt}
          className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">
          {post.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-5 px-6 pb-8 pt-8">
        <PostMeta author={post.author.name} publishedAt={post.publishedAt} readTime={post.readTime} />
        <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600">{post.summary}</p>
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
          to={`/blog/${post.slug}`}
        >
          Read article
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function BlogsPage() {
  if (!blogPosts.length) {
    return (
      <div className="flow-ux__stack">
        <HeroBanner
          eyebrow="Blog"
          eyebrowClassName="text-emerald-100"
          title="Ideas for lighter, faster, climate-friendly products"
          description="Field notes, experiments, and case studies to help your team embed sustainable practices with confidence."
          primaryCta={{ to: '/resources', label: 'Get the playbooks' }}
          secondaryCta={{ to: '/contact', label: 'Pitch a collaboration' }}
          gradientClass="from-[#0f3d32] via-[#0284c7] to-[#38bdf8]"
          overlayClassName="bg-slate-950/50"
          textAlign="left"
        />

        <section className="section-shell flow-ux__band">
          <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-slate-200 bg-white/90 p-10 text-center shadow-[0_30px_70px_-55px_rgba(15,23,42,0.35)]">
            <h2 className="text-2xl font-semibold text-slate-900">New stories coming soon</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We’re preparing research-backed articles and playbooks. In the meantime, explore our{' '}
              <Link className="font-semibold text-emerald-700" to="/resources">
                resources
              </Link>{' '}
              or{' '}
              <Link className="font-semibold text-emerald-700" to="/contact">
                get in touch
              </Link>{' '}
              to share your challenge.
            </p>
          </div>
        </section>
      </div>
    );
  }

  const [featuredPost, ...otherPosts] = blogPosts;
  const secondaryPosts =
    otherPosts.length > 0 ? otherPosts : blogPosts.filter((post) => post.slug !== featuredPost.slug).slice(0, 2);

  return (
    <div className="flow-ux__stack">
      <HeroBanner
        eyebrow="Blog"
        eyebrowClassName="text-emerald-100"
        title="Ideas for lighter, faster, climate-friendly products"
        description="Field notes, experiments, and case studies to help your team embed sustainable practices with confidence."
        primaryCta={{ to: '/resources', label: 'Get the playbooks' }}
        secondaryCta={{ to: '/contact', label: 'Pitch a collaboration' }}
        gradientClass="from-[#0f3d32] via-[#0284c7] to-[#38bdf8]"
        overlayClassName="bg-slate-950/50"
        textAlign="left"
      />

      <section className="section-shell flow-ux__band">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <article className="grid gap-10 overflow-hidden rounded-[2.75rem] border border-slate-200 bg-white/95 p-6 shadow-[0_40px_90px_-60px_rgba(15,23,42,0.35)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:p-10">
            <figure className="relative overflow-hidden rounded-[2.25rem] bg-slate-900">
              <img
                src={featuredPost.heroImage.src}
                alt={featuredPost.heroImage.alt}
                className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900">
                {featuredPost.tag}
              </span>
            </figure>
            <div className="flex flex-col justify-center gap-6">
              <PostMeta author={featuredPost.author.name} publishedAt={featuredPost.publishedAt} readTime={featuredPost.readTime} />
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{featuredPost.title}</h2>
                <p className="text-base leading-relaxed text-slate-600">{featuredPost.summary}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-[#16a34c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#16a34c]/30 transition hover:bg-[#15803d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
                  to={`/blog/${featuredPost.slug}`}
                >
                  Read the full story
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
                  to="/resources"
                >
                  Download templates
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Latest stories</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">Fresh experiments from the studio</h3>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
                to="/contact"
              >
                Pitch a collaboration
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {secondaryPosts.map((post) =>
                post ? <BlogCard key={post.slug} post={post} /> : null
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell flow-ux__band flow-ux__band--alt">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-[2.5rem] border border-emerald-200 bg-white/85 p-10 text-center shadow-[0_30px_80px_-60px_rgba(16,163,76,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Monthly digest</p>
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">Stay ahead of sustainable product practice</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            Join thousands of product, design, and engineering leaders receiving practical tactics on cutting digital waste.
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16a34c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#16a34c]/30 transition hover:bg-[#15803d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
              to="/contact"
            >
              Subscribe to updates
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
              to="/resources"
            >
              Explore free resources
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
