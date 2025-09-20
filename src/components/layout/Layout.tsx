import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-[#f4f6f5] text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_55%)]" />
        <div className="absolute -top-40 right-[-20%] h-[28rem] w-[28rem] rounded-full bg-emerald-200/50 blur-[160px]" />
        <div className="absolute bottom-[-30%] left-[-15%] h-[24rem] w-[24rem] rounded-full bg-sky-200/40 blur-[160px]" />
      </div>
      <Header />
      <main className="relative z-10 pt-24 pb-16">{children}</main>
      <Footer />
    </div>
  );
}
