import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BookOpenText,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Globe,
  HelpCircle,
  Leaf,
  Recycle,
  Shield,
  Sparkles
} from 'lucide-react';

function Nav() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 text-white">
        <a href="#home" className="font-bold text-xl">
          WebWaste
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#crisis" className="hover:underline">
            The Crisis
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#principles" className="hover:underline">
            Principles
          </a>
          <a href="#calculator" className="hover:underline">
            Calculator
          </a>
          <a href="#practices" className="hover:underline">
            Practices
          </a>
          <a href="#stories" className="hover:underline">
            Stories
          </a>
          <a href="#resources" className="hover:underline">
            Resources
          </a>
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-2xl">
            Get started
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative text-center text-white py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900 via-black to-green-950" />
        <div className="absolute -top-24 right-0 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-20 bg-emerald-400" />
        <div className="absolute bottom-[-6rem] left-[-6rem] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20 bg-green-300" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold tracking-tight">
          <span className="text-green-400">Web</span>Waste
        </h1>
        <p className="mt-6 text-lg text-slate-200">
          The internet produces ~3–4% of global CO₂ emissions — more than air travel. It’s time to build greener.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button
            className="bg-green-600 hover:bg-green-700 text-white rounded-2xl px-6 py-3"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            className="rounded-2xl px-6 py-3"
            onClick={() => document.getElementById('practices')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn strategies
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: '65%', label: 'of traffic is mobile' },
            { value: '100,000+', label: 'sites audited yearly' },
            { value: 'Free', label: 'starter toolkit' }
          ].map((stat) => (
            <div key={stat.value} className="bg-white/10 backdrop-blur border border-white/10 rounded-xl p-5">
              <p className="text-3xl font-bold text-green-300">{stat.value}</p>
              <p className="text-sm text-emerald-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none select-none mt-16" aria-hidden>
        <svg viewBox="0 0 1440 120" className="block w-full text-white/10">
          <path
            fill="currentColor"
            d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {kicker && <p className="text-green-700 font-semibold">{kicker}</p>}
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function Crisis() {
  const metrics = [
    { icon: <Leaf className="h-5 w-5" />, big: '4%', small: 'of global CO₂ is from the internet' },
    { icon: <Globe className="h-5 w-5" />, big: '4.6–7.7Mt', small: 'annual e-waste from data centers' },
    { icon: <Calculator className="h-5 w-5" />, big: '1.5GB', small: 'avg. page weight on top sites' }
  ];
  return (
    <section id="crisis" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="The Digital Crisis"
          subtitle="Every website choice affects energy, server load, and network traffic."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white shadow-sm rounded-2xl p-6 border">
              <div className="flex items-center gap-2 text-green-700">
                {metric.icon}
                <span className="font-semibold">Fact</span>
              </div>
              <p className="mt-3 text-3xl font-bold text-slate-900">{metric.big}</p>
              <p className="text-slate-600">{metric.small}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-green-600 text-white p-6 text-center">
          Build smaller, ship faster, spend less energy — start with a lightweight audit.
        </div>
      </div>
    </section>
  );
}

function About() {
  const wins = [
    { label: '60,000+', hint: 'images optimised' },
    { label: '2.5M', hint: 'visits analysed' },
    { label: '160+', hint: 'sites assessed' },
    { label: '68%', hint: 'median transfer reduced' }
  ];
  const pillars = [
    {
      title: 'UX Clarity',
      copy: 'Fewer steps, clearer IA, faster decisions.',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />
    },
    {
      title: 'Content-First',
      copy: 'Ship the message, not the bloat.',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />
    },
    {
      title: 'Sane Assets',
      copy: 'Modern formats, subsetting, and caching.',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />
    },
    {
      title: 'Power Budgets',
      copy: 'Set CO₂ and kb budgets per page.',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />
    }
  ];
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About WebWaste"
          subtitle="Simple methods and tools to make the web cleaner and more efficient."
        />
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-sm rounded-2xl p-6 border">
            <h3 className="text-xl font-semibold">The problem we're solving</h3>
            <p className="mt-2 text-slate-600">
              Bloated pages waste energy and patience. We help you cut image weight, trim scripts, and redesign flows to reduce compute and transfers without harming UX.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {wins.map((win) => (
                <div key={win.label} className="rounded-xl border bg-slate-50 p-4 text-center">
                  <p className="text-xl font-bold text-slate-900">{win.label}</p>
                  <p className="text-xs text-slate-500">{win.hint}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white shadow-sm rounded-2xl p-6 border">
                <div className="flex items-center gap-2">
                  {pillar.icon}
                  <h4 className="font-semibold">{pillar.title}</h4>
                </div>
                <p className="mt-2 text-slate-600">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-green-600 text-white p-6 text-center">
          Ready to make a difference?{' '}
          <Button className="ml-3 rounded-2xl bg-white text-green-700 hover:bg-white/90">Start free assessment</Button>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const items = [
    {
      icon: <Recycle className="h-5 w-5" />,
      title: 'Reduce',
      copy: 'Ship fewer bytes and requests. Prefer static over dynamic where possible.'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Respect',
      copy: "Design accessibly and transparently. Save users' time, battery, and data."
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Reuse',
      copy: 'Cache aggressively, reuse components, and favour long-lived assets.'
    }
  ];
  return (
    <section id="principles" className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Guiding ideas"
          title="Principles for a Low-Carbon Web"
          subtitle="Clear, human, and efficient by default."
        />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-green-700">
                {item.icon}
                <h4 className="font-semibold">{item.title}</h4>
              </div>
              <p className="mt-2 text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  const [pageKb, setPageKb] = useState(1200);
  const [visits, setVisits] = useState(10000);
  const [gridIntensity, setGridIntensity] = useState(475);
  const [cacheHit, setCacheHit] = useState(60);
  const gramsPerKb = 0.0003;
  const estimate = Math.round(pageKb * gramsPerKb * visits * (1 - cacheHit / 100));
  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-emerald-50 to-white" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-green-900 via-slate-900 to-transparent opacity-90" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Carbon Calculator"
          subtitle="Roughly estimate CO₂ from page weight, traffic, grid intensity, and caching (demo)."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/80 backdrop-blur border p-6 shadow-sm">
            <h3 className="font-semibold">Website Assessment</h3>
            <label className="mt-4 block text-sm">Avg. page weight (KB)</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2"
              type="number"
              value={pageKb}
              onChange={(event) => setPageKb(Number(event.target.value))}
            />
            <label className="mt-4 block text-sm">Monthly visits</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2"
              type="number"
              value={visits}
              onChange={(event) => setVisits(Number(event.target.value))}
            />
            <label className="mt-4 block text-sm">Cache hit rate (%)</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2"
              type="number"
              min={0}
              max={100}
              value={cacheHit}
              onChange={(event) => setCacheHit(Number(event.target.value))}
            />
            <label className="mt-4 block text-sm">Grid intensity (gCO₂/kWh)</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2"
              type="number"
              value={gridIntensity}
              onChange={(event) => setGridIntensity(Number(event.target.value))}
            />
            <Button className="mt-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white">
              Get basic estimate
            </Button>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur border p-6 shadow-sm">
            <h3 className="font-semibold">Estimated Emissions</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Very rough demo. Swap in your preferred methodology later.
            </p>
            <div className="mt-4 rounded-xl bg-slate-50 p-4">
              <p className="text-3xl font-extrabold text-slate-900">{estimate} g CO₂ / month</p>
              <p className="text-xs text-slate-500">
                Includes a simple cache factor. Grid intensity placeholder not applied in this demo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type PracticeItemProps = {
  title: string;
  copy: string;
  tips: string[];
};

function PracticeItem({ title, copy, tips }: PracticeItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-slate-600 mt-1">{copy}</p>
        </div>
        <Button variant="secondary" className="rounded-2xl" onClick={() => setOpen(!open)}>
          {open ? 'Hide tips' : 'Show tips'} <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      {open && (
        <ul className="mt-4 grid gap-2 text-sm text-slate-700 list-disc pl-5">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Practices() {
  const items = [
    {
      title: 'Optimise images',
      copy: 'Use AVIF/WebP, proper sizes, lazy-loading where sensible.',
      tips: ['Serve responsive srcset', 'Prefer AVIF then WebP then PNG/JPEG', 'Compress aggressively for thumbnails']
    },
    {
      title: 'Minimise code',
      copy: 'Ship less JS/CSS. Tree-shake and split by route.',
      tips: ['Avoid client-side heavy libs', 'Use CSS where possible', 'Inline critical CSS']
    },
    {
      title: 'Green hosting',
      copy: 'Pick renewable-powered hosting and cache at the edge.',
      tips: ['Static-first deployment', 'Long-lived immutable assets', 'Use preload hints appropriately']
    },
    {
      title: 'Kiosk, Print & Design',
      copy: 'Design for reuse and low-energy displays.',
      tips: ['Dark mode where appropriate', 'Limit motion for battery', 'Re-use components']
    },
    {
      title: 'Performance budgeting',
      copy: 'Set per-page budgets (kb, requests, CO₂).',
      tips: ['Block PRs that exceed budgets', 'Track in CI', 'Flag regressions']
    }
  ];
  return (
    <section id="practices" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Sustainable Practices" subtitle="Practical checklists you can apply today." />
        <div className="mt-10 grid gap-6">
          {items.map((item) => (
            <PracticeItem key={item.title} title={item.title} copy={item.copy} tips={item.tips} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button className="rounded-2xl bg-green-600 hover:bg-green-700 text-white">Ready to optimise?</Button>
        </div>
      </div>
    </section>
  );
}

type CaseCardProps = {
  title: string;
  kpi: string;
  desc: string;
};

function CaseCard({ title, kpi, desc }: CaseCardProps) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      <div className="h-40 bg-gradient-to-tr from-emerald-200 via-green-200 to-emerald-100" />
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">Case study</span>
        </div>
        <h4 className="mt-2 text-lg font-semibold">{title}</h4>
        <p className="text-slate-600 mt-1">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-slate-100 px-3 py-1">{kpi}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">AVIF</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Edge cache</span>
        </div>
        <div className="mt-4">
          <Button variant="secondary" className="rounded-2xl">
            Read story
          </Button>
        </div>
      </div>
    </div>
  );
}

function Stories() {
  const cases = [
    { title: 'EcoCommerce', kpi: '-48% transfer', desc: 'A greener storefront with image optimisation and code-splitting.' },
    { title: 'GreenBlog', kpi: '+36 Lighthouse Perf', desc: 'Markdown + image pipeline and fewer client libs.' },
    { title: 'TechStartup', kpi: '-65% JS', desc: 'Route-based splits and removing unused packages.' }
  ];
  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Success Stories"
          subtitle="Real wins by simplifying, optimising, and caching smarter."
        />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <CaseCard key={item.title} title={item.title} kpi={item.kpi} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Diagnostic() {
  const questions = [
    'Is every script on this page essential to the core task?',
    'Can this image be smaller, deferred, or a vector?',
    'Does this flow minimise steps and scrolling?',
    'Are we caching at the edge with long-lived immutable assets?',
    'Do we budget and track kb/req/CO₂ in CI?'
  ];
  return (
    <section id="diagnostic" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Quick checklist"
          title="Sustainability Diagnostics"
          subtitle="Five prompts to spot the biggest wins fast."
        />
        <ul className="mt-8 grid gap-3">
          {questions.map((question) => (
            <li key={question} className="rounded-xl border bg-slate-50 p-4">
              {question}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Resources() {
  const links = [
    {
      title: 'Image optimisation guide',
      desc: 'Modern formats, compression, and responsive patterns.',
      href: '#'
    },
    { title: 'Performance budgets template', desc: 'Track kb/req/CO₂ in CI.', href: '#' },
    { title: 'Green hosting checklist', desc: 'What to ask providers and how to cache.', href: '#' }
  ];
  return (
    <section id="resources" className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Learn more"
          title="Resources & Tools"
          subtitle="Starter templates and how-tos to put ideas into practice."
        />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="rounded-2xl border bg-white p-6 shadow-sm block hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <div className="flex items-center gap-2 text-green-700">
                <BookOpenText className="h-5 w-5" />
                <h4 className="font-semibold">{link.title}</h4>
              </div>
              <p className="mt-2 text-slate-600">{link.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: 'Is this calculator accurate?',
      a: "It's a demo. Replace factors and logic with your preferred methodology before publishing results."
    },
    { q: 'Will optimising for CO₂ hurt UX?', a: 'Our approach improves UX: clearer content, faster pages, fewer steps.' },
    { q: 'Do I need a new CMS?', a: 'No. Start with assets and IA. Many wins are platform-agnostic.' }
  ];
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Good to know" title="Frequently Asked Questions" />
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border bg-slate-50 p-5">
              <div className="flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-green-700" />
                <h4 className="font-semibold">{faq.q}</h4>
              </div>
              <p className="mt-2 text-slate-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="py-10 bg-black text-slate-400 text-center">
      © {new Date().getFullYear()} WebWaste. All rights reserved.
    </footer>
  );
}

function DevSmokeTests() {
  useEffect(() => {
    [
      'home',
      'crisis',
      'about',
      'principles',
      'calculator',
      'practices',
      'stories',
      'diagnostic',
      'resources',
      'faq',
      'contact'
    ].forEach((id) => {
      console.assert(Boolean(document.getElementById(id)), `Section #${id} should exist`);
    });
  }, []);
  return null;
}

export default function App() {
  return (
    <div className="antialiased font-sans">
      <Nav />
      <Hero />
      <Crisis />
      <About />
      <Principles />
      <CalculatorSection />
      <Practices />
      <Diagnostic />
      <Stories />
      <Resources />
      <FAQ />
      <Footer />
      <DevSmokeTests />
    </div>
  );
}
