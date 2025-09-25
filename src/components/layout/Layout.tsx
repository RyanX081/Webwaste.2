import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_65%)]" />
        <div className="absolute -top-64 left-1/2 h-[28rem] w-[36rem] -translate-x-1/2 rounded-[8rem] bg-emerald-200/30 blur-[200px]" />
        <div className="absolute bottom-[-18rem] right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-200/30 blur-[180px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[18rem] bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>
      <Header />
      <main className="relative z-10 flex min-h-0 flex-1 flex-col pb-12 pt-28 md:pb-16 md:pt-32 flow-ux flow-ux__page">
        {children}
      </main>
      <Footer />
    </div>
  );
}
