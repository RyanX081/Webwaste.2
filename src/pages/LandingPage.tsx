import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Gauge,
  Globe2,
  Leaf,
  LineChart,
  LucideIcon,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const sectionSpacing = 'relative py-20 sm:py-24';
const container = 'mx-auto w-full max-w-6xl px-6 sm:px-8';

export function LandingPage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AuditKitSection />
      <CarbonWidgetSection />
      <BlogSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="home"
      className={`${sectionSpacing} pt-28 sm:pt-36`}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-[#102a18] via-[#0b2012] to-transparent" />
        <div className="absolute left-[-15%] top-10 h-72 w-72 rounded-full bg-[#16a34c]/30 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] h-72 w-72 rounded-full bg-[#facc14]/30 blur-3xl" />
      </div>
      <div className={container}>
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div
            className={`max-w-xl space-y-8 text-slate-100 transition duration-700 ease-out ${
              isReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc14]">
              Digital sustainability
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Make every pixel count for the planet—and your customers.
            </h1>
            <p className="text-lg text-slate-200/90 sm:text-xl">
              WebWaste helps organisations design faster, low-carbon journeys. We combine data-informed UX practices with sustainable engineering to reduce emissions without sacrificing delight.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-[#16a34c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#16a34c]/30 transition hover:bg-[#15803d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="#audit"
              >
                Run a Green Audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="#services"
              >
                Explore services
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  label: 'Average load time improvement',
                  value: '41%'
                },
                {
                  label: 'Emissions reduced per project',
                  value: '2.8 tCO₂e'
                },
                {
                  label: 'Sustainable score increase',
                  value: '3.2×'
                }
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                  <p className="text-[#facc14]">{stat.value}</p>
                  <p className="mt-2 text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative rounded-[2rem] bg-slate-900/40 p-6 shadow-2xl shadow-[#102a18]/30 ring-1 ring-white/10 backdrop-blur-xl transition duration-700 ease-out ${
              isReady ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-2xl" aria-hidden="true" />
            <div className="relative flex flex-col gap-6 text-sm text-white/80">
              <div>
                <p className="text-xs text-white/60">Current footprint</p>
                <p className="mt-2 text-3xl font-semibold text-white">312 kg CO₂e</p>
                <p className="mt-3 flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  18% lower than industry benchmark
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Page weight', value: '0.89 MB' },
                  { label: 'Renewables mix', value: '82%' },
                  { label: 'Core Web Vitals', value: '97 score' },
                  { label: 'Optimised assets', value: '42' }
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-xs uppercase tracking-wide text-white/50">{metric.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#16a34c]/20 via-transparent to-transparent p-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#facc14]">
                  <Sparkles className="h-4 w-4 text-[#facc14]" aria-hidden="true" />
                  Next milestone
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Launch automated eco-reporting dashboard to share progress with stakeholders every sprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const pillars: Array<{ title: string; description: string; icon: LucideIcon }> = [
    {
      title: 'Measure what matters',
      description:
        'We baseline every journey with actual energy, emissions, and performance data so optimisation is transparent and defensible.',
      icon: Gauge
    },
    {
      title: 'Design for longevity',
      description:
        'From typography to microcopy, each choice is tested for clarity, accessibility, and long-term maintainability.',
      icon: Leaf
    },
    {
      title: 'Ship meaningful change',
      description:
        'Roadmaps prioritise low-carbon quick wins and structural improvements that uplift UX, SEO, and engineering velocity together.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className={sectionSpacing}>
      <div className={container}>
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#16a34c]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#16a34c]">
              Why WebWaste
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Sustainable UX is smart business.
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              We partner with product leaders to translate sustainability targets into tangible product improvements. By aligning eco-design with growth metrics, teams see faster pages, happier users, and measurable reductions in digital waste.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#16a34c]/20 bg-white p-5 shadow-sm shadow-emerald-100">
                <p className="text-sm font-semibold text-[#16a34c]">Certified sustainable design specialists</p>
                <p className="mt-2 text-sm text-slate-600">Team with UX, performance, and climate science backgrounds.</p>
              </div>
              <div className="rounded-2xl border border-[#facc14]/40 bg-[#fef7d6] p-5">
                <p className="text-sm font-semibold text-slate-900">Global collaboration, remote-first</p>
                <p className="mt-2 text-sm text-slate-700">Working across timezones with inclusive processes.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-[#16a34c]/50 hover:shadow-[0_30px_80px_-50px_rgba(22,163,76,0.45)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16a34c]/10 text-[#16a34c]">
                    <pillar.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services: Array<{ title: string; description: string; icon: LucideIcon; benefits: string[] }> = [
    {
      title: 'Sustainable UX Audits',
      description:
        'Diagnose the energy hotspots across user journeys with actionable, prioritised fixes.',
      icon: BarChart3,
      benefits: ['Footprint, performance & accessibility scoring', 'Benchmarking against climate-positive leaders', 'Implementation roadmap in 3 sprints']
    },
    {
      title: 'Eco-first Design Systems',
      description: 'Build flexible libraries that balance brand expression with efficient, reusable components.',
      icon: Sparkles,
      benefits: ['Accessible Figma libraries & tokens', 'Low-impact motion & colour guidance', 'Pairing sessions with in-house teams']
    },
    {
      title: 'Low-impact Engineering',
      description: 'Modernise infrastructure and delivery for cleaner builds and happier engineers.',
      icon: Cpu,
      benefits: ['Asset optimisation pipelines', 'Green hosting & CDN advisory', 'Monitoring dashboards for ongoing reporting']
    }
  ];

  return (
    <section id="services" className={`${sectionSpacing} bg-gradient-to-b from-white via-white to-[#f6f7f2]`}>
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-[#facc14]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#d97706]">
            Services
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">Everything you need to shrink digital waste.</h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether you need to overhaul a platform or embed a sustainable workflow, our team integrates with yours to deliver confident, data-backed change.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-[#16a34c]/40 hover:shadow-[0_36px_80px_-40px_rgba(22,163,76,0.35)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#16a34c]/10 text-[#16a34c]">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#16a34c]" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#16a34c] transition group-hover:translate-x-1">
                Plan your engagement
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="absolute inset-x-6 bottom-6 h-12 rounded-full bg-gradient-to-r from-[#16a34c]/0 via-[#16a34c]/10 to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuditKitSection() {
  const inclusions = [
    { label: 'Energy & emissions scan', icon: Globe2 },
    { label: 'Prioritised fix backlog', icon: LineChart },
    { label: 'Executive-ready reporting', icon: CalendarDays },
    { label: 'Team enablement workshop', icon: ShieldCheck }
  ];

  return (
    <section id="audit" className={`${sectionSpacing} pt-16`}
    >
      <div className={container}>
        <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#16a34c] via-[#15803d] to-[#0f3815] p-10 sm:p-14 text-white shadow-[0_30px_80px_-40px_rgba(6,95,70,0.85)]">
          <div className="absolute right-[-10%] top-[-15%] h-48 w-48 rounded-full bg-[#facc14]/60 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-[-25%] left-[-5%] h-56 w-56 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc14]">
                Green Audit Kit
              </span>
              <h2 className="text-3xl font-semibold leading-tight sm:text-[2.5rem]">
                Launch a carbon-aware roadmap in 30 days.
              </h2>
              <p className="text-lg text-white/80">
                Our Green Audit Kit bundles diagnostics, co-design, and leadership-ready storytelling. It meets teams where they are and accelerates the path to a leaner, cleaner product experience.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#facc14] px-6 py-3 text-sm font-semibold text-[#0f3815] transition hover:bg-[#fbbf24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  href="#contact"
                >
                  Book a discovery call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  href="#faq"
                >
                  View the playbook
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {inclusions.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#facc14]/20 text-[#facc14]">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[1.75rem] border border-white/20 bg-[#0f3a17]/50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#facc14]">What teams say</p>
                <p className="mt-3 text-base text-white/80">
                  “We cut 1.6 tonnes of CO₂e in eight weeks and saw bounce rate drop 22%. The toolkit made sustainability a shared language across product, content, and engineering.”
                </p>
                <p className="mt-4 text-sm text-white/60">— Priya Sharma, Head of Product, TerraPay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarbonWidgetSection() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(25000);
  const [pageWeight, setPageWeight] = useState(1.2);
  const [renewables, setRenewables] = useState(60);

  const { footprintKg, perVisitGrams, treesNeeded } = useMemo(() => {
    const baseline = pageWeight * 1.76; // estimated grams CO2 per visit for given weight
    const renewableFactor = 1 - renewables / 200; // rewards higher renewable mix
    const totalGrams = baseline * monthlyVisitors * Math.max(renewableFactor, 0.4);
    const totalKg = totalGrams / 1000;
    const trees = totalKg / 21; // 21kg CO2 per tree per year
    return {
      footprintKg: totalKg,
      perVisitGrams: baseline * Math.max(renewableFactor, 0.4),
      treesNeeded: trees
    };
  }, [monthlyVisitors, pageWeight, renewables]);

  return (
    <section id="widget" className={`${sectionSpacing} bg-[#0d2616] py-20 sm:py-24`}
    >
      <div className={`${container} text-white`}>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc14]">
              Carbon Snapshot
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
              Estimate your digital footprint in seconds.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Adjust live inputs to understand how content weight, traffic, and renewable energy use impact emissions. We use industry-backed heuristics to keep estimates trustworthy yet lightweight.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-white/70">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#facc14]" aria-hidden="true" />
                Results update instantly without tracking your data.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#facc14]" aria-hidden="true" />
                Export detailed projections in the Green Audit Kit.
              </li>
            </ul>
          </div>
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_36px_90px_-50px_rgba(16,163,76,0.75)] backdrop-blur">
            <div className="grid gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#facc14]">Monthly impact</p>
                <p className="mt-3 text-3xl font-semibold text-white">{footprintKg.toFixed(2)} kg CO₂e</p>
                <p className="mt-2 text-sm text-white/60">≈ {treesNeeded < 0.5 ? 'less than one' : treesNeeded.toFixed(1)} trees to rebalance yearly</p>
                <p className="mt-1 text-xs text-white/50">Per visit: {perVisitGrams.toFixed(1)} g CO₂e</p>
              </div>
              <WidgetSlider
                id="visitors"
                label="Monthly visitors"
                unit="visits"
                min={1000}
                max={100000}
                step={1000}
                value={monthlyVisitors}
                onChange={setMonthlyVisitors}
              />
              <WidgetSlider
                id="page-weight"
                label="Average page weight"
                unit="MB"
                min={0.3}
                max={5}
                step={0.1}
                value={pageWeight}
                onChange={setPageWeight}
              />
              <WidgetSlider
                id="renewables"
                label="Renewable energy mix"
                unit="%"
                min={0}
                max={100}
                step={5}
                value={renewables}
                onChange={setRenewables}
              />
              <div className="rounded-2xl border border-white/10 bg-[#0a1c10] p-5 text-sm text-white/70">
                <p className="font-semibold text-white">Next step</p>
                <p className="mt-2">
                  Drop your estimates into our reporting template to track improvements sprint by sprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type WidgetSliderProps = {
  id: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
};

function WidgetSlider({ id, label, unit, min, max, step, value, onChange }: WidgetSliderProps) {
  return (
    <label className="flex flex-col gap-3 text-sm" htmlFor={id}>
      <div className="flex items-center justify-between text-white/70">
        <span>{label}</span>
        <span className="font-semibold text-white">{value.toLocaleString(undefined, { maximumFractionDigits: step < 1 ? 1 : 0 })} {unit}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="range-input"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={label}
      />
    </label>
  );
}

function BlogSection() {
  const posts = [
    {
      title: 'Reducing UX friction and carbon with purposeful motion',
      excerpt: 'Strategic micro-interactions can delight users without adding unnecessary weight. See the data behind motion budgets.',
      image:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=60',
      tags: ['Design systems', 'Motion'],
      href: '#'
    },
    {
      title: 'How to green your engineering pipeline in two sprints',
      excerpt: 'Composable optimisation tasks help teams ship impact quickly. Here is the play-by-play we use across industries.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60',
      tags: ['Engineering', 'Tooling'],
      href: '#'
    },
    {
      title: 'Building stakeholder buy-in for sustainable decisions',
      excerpt: 'Translate emissions data into stories that resonate with leadership, customers, and regulators.',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=60',
      tags: ['Strategy', 'Communication'],
      href: '#'
    }
  ];

  return (
    <section id="blog" className={`${sectionSpacing} bg-white`}
    >
      <div className={container}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#16a34c]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#16a34c]">
              Insights
            </span>
            <h2 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">Latest from the WebWaste blog.</h2>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Stories, checklists, and case studies to help teams embed sustainable thinking into everyday product decisions.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#16a34c]/50 hover:text-[#16a34c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16a34c]"
            href="#"
          >
            View all posts
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-[#16a34c]/40 hover:shadow-[0_40px_80px_-45px_rgba(22,163,76,0.3)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#16a34c]/10 px-3 py-1 text-xs font-semibold text-[#15803d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <a
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#16a34c] transition group-hover:gap-3"
                  href={post.href}
                >
                  Read the story
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: 'How fast can we see results from a sustainability engagement?',
      answer:
        'Teams typically implement high-impact improvements within the first three sprints. Our audits surface quick wins alongside longer-term roadmap items so you can show progress quickly.'
    },
    {
      question: 'Can WebWaste work with our in-house designers and engineers?',
      answer:
        'Yes. Most of our work happens alongside internal teams. We provide the strategy, tooling, and enablement so your people can scale best practices after we leave.'
    },
    {
      question: 'What level of data do you need to start an audit?',
      answer:
        'We can begin with analytics exports and hosting information. The Green Audit Kit includes lightweight scripts to gather missing details without invasive tracking.'
    },
    {
      question: 'Do you help with reporting to regulators or sustainability frameworks?',
      answer:
        'Absolutely. We translate technical improvements into the language of CSRD, GHG Protocol, and B Corp reporting, giving stakeholders clarity and confidence.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={`${sectionSpacing} bg-[#f6f7f2]`}
    >
      <div className={container}>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div className="space-y-6 lg:pr-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#16a34c]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#16a34c]">
              FAQs & Resources
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Answers for curious, climate-minded teams.</h2>
            <p className="text-lg text-slate-600">
              If you do not see what you need, reach out. We have templates, calculators, and workshop decks ready to share.
            </p>
            <div className="rounded-[1.75rem] border border-[#facc14]/40 bg-white p-6">
              <p className="text-sm font-semibold text-[#d97706]">Resource spotlight</p>
              <p className="mt-2 text-sm text-slate-600">
                Download the Sustainability Sprint Planning worksheet to identify low-carbon backlog items every iteration.
              </p>
              <a
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#facc14] px-5 py-2 text-xs font-semibold text-[#0f3815] transition hover:bg-[#fbbf24]"
                href="#"
              >
                Get the worksheet
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <button
                  key={faq.question}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full rounded-[1.5rem] border p-6 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16a34c] ${
                    isOpen
                      ? 'border-[#16a34c]/40 bg-white shadow-[0_24px_60px_-45px_rgba(22,163,76,0.4)]'
                      : 'border-slate-200 bg-white/80 hover:border-[#16a34c]/40 hover:bg-white'
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-base font-semibold text-slate-900">{faq.question}</p>
                      <div
                        className={`overflow-hidden text-sm leading-relaxed text-slate-600 transition-[max-height,opacity] duration-300 ease-out ${
                          isOpen ? 'mt-3 max-h-60 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </div>
                    <span
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition ${
                        isOpen
                          ? 'border-[#16a34c]/30 bg-[#16a34c]/10 text-[#16a34c]'
                          : 'border-slate-200 bg-white text-slate-500'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? '–' : '+'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className={`${sectionSpacing} bg-white pb-24`}
    >
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#16a34c]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#16a34c]">
              Contact
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Let’s build a low-impact, high-performing product.</h2>
            <p className="text-lg text-slate-600">
              Share a few details and we will schedule a 30-minute discovery call to scope the right approach for your team.
            </p>
            <div className="rounded-[1.75rem] border border-[#16a34c]/20 bg-[#f0fdf4] p-6 text-sm text-slate-700">
              <p className="font-semibold text-[#14532d]">Looking for something quick?</p>
              <p className="mt-2">Grab our 10-minute carbon reducer checklist for product teams.</p>
              <a
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#16a34c] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#15803d]"
                href="#"
              >
                Download checklist
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Email</p>
                <a className="mt-2 block text-base font-semibold text-slate-900" href="mailto:hello@webwaste.studio">
                  hello@webwaste.studio
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Office</p>
                <p className="mt-2 text-base font-semibold text-slate-900">London · Remote-first</p>
              </div>
            </div>
          </div>
          <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.4)]">
            <div className="grid gap-5">
              <Field label="Full name" id="full-name" type="text" autoComplete="name" />
              <Field label="Work email" id="work-email" type="email" autoComplete="email" />
              <Field label="Organisation" id="organisation" type="text" autoComplete="organization" />
              <div>
                <label className="block text-sm font-semibold text-slate-900" htmlFor="project-goals">
                  What are you hoping to achieve?
                </label>
                <textarea
                  id="project-goals"
                  name="project-goals"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#16a34c] focus:outline-none focus:ring-2 focus:ring-[#16a34c]/30"
                  placeholder="Share context, timelines, or sustainability targets."
                  required
                />
              </div>
              <div className="flex flex-col gap-4 rounded-2xl bg-[#f6f7f2] p-4 text-xs text-slate-500">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#16a34c]" aria-hidden="true" />
                  We never resell or store personal data beyond this conversation.
                </p>
                <p>
                  By submitting, you agree to receive one follow-up email with scheduling links and relevant resources.
                </p>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16a34c] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#16a34c]/30 transition hover:bg-[#15803d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16a34c]"
              >
                Send message
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  type: string;
  autoComplete?: string;
};

function Field({ label, id, type, autoComplete }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required
        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#16a34c] focus:outline-none focus:ring-2 focus:ring-[#16a34c]/30"
      />
    </div>
  );
}
