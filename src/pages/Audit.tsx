import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Globe2,
  LineChart,
  ShieldCheck
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';

const sectionSpacing = 'relative py-20 sm:py-24';
const container = 'mx-auto w-full max-w-6xl px-6 sm:px-8';

export function AuditPage() {
  return (
    <div className="flow-ux__stack">
      <section className={`${sectionSpacing} pt-16`}
      >
        <div className={container}>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#16a34c] via-[#15803d] to-[#0f3815] p-10 sm:p-16 text-white shadow-[0_40px_90px_-45px_rgba(6,95,70,0.85)]">
            <div className="absolute right-[-12%] top-[-20%] h-56 w-56 rounded-full bg-[#facc14]/50 blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-[-30%] left-[-8%] h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc14]">
                  Green Audit Kit
                </span>
                <h1 className="text-4xl font-semibold leading-tight sm:text-[2.75rem]">
                  Launch a carbon-aware roadmap in 30 days.
                </h1>
                <p className="text-lg text-white/85">
                  Our Green Audit Kit bundles diagnostics, co-design, and leadership-ready storytelling. It meets teams where they are and accelerates the path to a leaner, cleaner product experience.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    className="inline-flex items-center gap-2 rounded-full bg-[#facc14] px-6 py-3 text-sm font-semibold text-[#0f3815] transition hover:bg-[#fbbf24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    to="/contact"
                  >
                    Book a discovery call
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    to="/services"
                  >
                    View the playbook
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {auditInclusions.map((item) => (
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

      <section className={`${sectionSpacing} bg-[#0d2616] py-20 sm:py-24`}
      >
        <div className={`${container} text-white`}>
          <SectionHeading
            kicker="Carbon Snapshot"
            title="Estimate your digital footprint in seconds"
            subtitle="Adjust live inputs to understand how content weight, traffic, and renewable energy use impact emissions."
            align="left"
            className="text-left"
          />
          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.9fr_1fr]">
            <div className="space-y-6 text-sm text-white/70">
              <p>
                Our lightweight widget gives product and engineering teams a defensible baseline. Share projections with stakeholders and track improvements sprint by sprint.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#facc14]" aria-hidden="true" />
                  Results update instantly without storing your data beyond this session.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#facc14]" aria-hidden="true" />
                  Export detailed projections as part of the Green Audit Kit deliverables.
                </li>
              </ul>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white"
                to="/services"
              >
                Explore implementation support
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <CarbonWidget />
          </div>
        </div>
      </section>
    </div>
  );
}

const auditInclusions = [
  { label: 'Energy & emissions scan', icon: Globe2 },
  { label: 'Prioritised fix backlog', icon: LineChart },
  { label: 'Executive-ready reporting', icon: CalendarDays },
  { label: 'Team enablement workshop', icon: ShieldCheck }
];

function CarbonWidget() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(25000);
  const [pageWeight, setPageWeight] = useState(1.2);
  const [renewables, setRenewables] = useState(60);

  const { footprintKg, perVisitGrams, treesNeeded } = useMemo(() => {
    const baseline = pageWeight * 1.76;
    const renewableFactor = 1 - renewables / 200;
    const totalGrams = baseline * monthlyVisitors * Math.max(renewableFactor, 0.4);
    const totalKg = totalGrams / 1000;
    const trees = totalKg / 21;
    return {
      footprintKg: totalKg,
      perVisitGrams: baseline * Math.max(renewableFactor, 0.4),
      treesNeeded: trees
    };
  }, [monthlyVisitors, pageWeight, renewables]);

  return (
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
            Invite us to validate data sources, run live audits, and embed dashboards directly into your workflow.
          </p>
        </div>
      </div>
    </div>
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
  const displayValue = Number.isInteger(value) ? value.toLocaleString() : value.toFixed(1);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <label className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70" htmlFor={id}>
        <span>{label}</span>
        <span className="text-sm font-semibold text-white">{displayValue} {unit}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="range-input mt-4"
      />
    </div>
  );
}
