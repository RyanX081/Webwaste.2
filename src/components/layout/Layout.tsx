import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_55%)]" />
        <div className="absolute -top-52 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-emerald-500/30 blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-teal-500/20 blur-[140px]" />
      </div>
      <Header />
      <main className="relative z-10 pt-24">{children}</main>
      <Footer />
    </div>
  );
}
