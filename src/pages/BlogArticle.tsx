import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Users } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <div className="section-shell flow-ux__band">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Not found</p>
          <h1 className="text-3xl font-semibold text-slate-900">We couldn’t locate that story</h1>
          <p className="text-sm text-slate-600">
            The article you’re looking for may have been renamed. Explore the latest ideas from the journal instead.
          </p>
          <Link
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#16a34c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#16a34c]/30 transition hover:bg-[#15803d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
            to="/blog"
          >
            Browse the blog
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((entry) => entry.slug !== post.slug);

  return (
    <article className="flow-ux__stack">
      <header className="section-shell flow-ux__band pb-0">
        <div className="mx-auto max-w-3xl space-y-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
            to="/blog"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all stories
          </Link>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              <span className="rounded-full bg-emerald-100/80 px-4 py-2 text-emerald-900">{post.tag}</span>
              <span className="inline-flex items-center gap-2 tracking-normal text-slate-500">
                <CalendarDays className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                {post.publishedAt}
              </span>
              <span className="inline-flex items-center gap-2 tracking-normal text-slate-500">
                <Clock className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{post.title}</h1>
            <p className="text-lg leading-relaxed text-slate-600">{post.summary}</p>
            <div className="inline-flex items-center gap-2 text-sm text-slate-500">
              <Users className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              {post.author.name} · {post.author.role}
            </div>
          </div>
        </div>
      </header>

      <section className="section-shell flow-ux__band pt-0">
        <figure className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2.75rem] border border-slate-200 bg-white shadow-[0_50px_120px_-70px_rgba(15,23,42,0.45)]">
          <img
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>

      <section className="section-shell flow-ux__band">
        <div className="mx-auto max-w-3xl space-y-14">
          {post.sections.map((section) => (
            <div key={section.heading} className="space-y-5">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{section.heading}</h2>
              {section.highlight && (
                <blockquote className="rounded-3xl border border-emerald-200 bg-emerald-50/70 px-6 py-5 text-base leading-relaxed text-emerald-900 shadow-[0_20px_60px_-45px_rgba(16,163,76,0.5)]">
                  {section.highlight}
                </blockquote>
              )}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50/80 px-6 py-5 text-sm text-slate-700">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <section className="space-y-4 rounded-[2.25rem] border border-emerald-200/70 bg-emerald-50/70 p-8 shadow-[0_30px_80px_-60px_rgba(16,163,76,0.45)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Key takeaways</p>
            <ul className="grid gap-3 text-sm text-emerald-900">
              {post.keyTakeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm shadow-emerald-100">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section-shell flow-ux__band flow-ux__band--alt">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">More to explore</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">Next up in the journal</h3>
              </div>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16a34c]"
                to="/blog"
              >
                View all posts
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-60px_rgba(15,23,42,0.4)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_-55px_rgba(15,23,42,0.45)]"
                  to={`/blog/${item.slug}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.heroImage.src}
                      alt={item.heroImage.alt}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">
                      {item.tag}
                    </span>
                  </div>
                  <div className="space-y-3 px-6 pb-6 pt-6">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      <span>{item.publishedAt}</span>
                      <span className="inline-flex items-center gap-1 tracking-normal text-xs font-normal">
                        <Clock className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                        {item.readTime}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-600">{item.summary}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-600">
                      Read story
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
