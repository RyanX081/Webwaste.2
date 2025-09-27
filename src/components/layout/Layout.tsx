import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f7f8f4] text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="absolute inset-x-0 top-[-30%] h-[480px] bg-[radial-gradient(circle_at_top,_rgba(22,163,76,0.25),_transparent_60%)]" aria-hidden="true" />
        <div className="absolute left-[-10%] top-[25%] h-[22rem] w-[22rem] rounded-full bg-[#facc14]/20 blur-[160px]" aria-hidden="true" />
        <div className="absolute right-[-15%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#16a34c]/15 blur-[180px]" aria-hidden="true" />
      </div>
      <Header />
      <main className="relative z-10 flex-1 pb-4 sm:pb-6">{children}</main>
      <Footer />
    </div>
  );
}
