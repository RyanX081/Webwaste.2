import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f3f4f0] text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_60%)]" />
        <div className="absolute -top-32 right-[-20%] h-[28rem] w-[28rem] rounded-full bg-[#9ce5d0]/40 blur-[180px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-[#c4ddff]/35 blur-[170px]" />
      </div>
      <Header />
      <main className="relative z-10 flex-1 pt-24 pb-12 sm:pb-16 flow-ux flow-ux__page">{children}</main>
      <Footer />
    </div>
  );
}
