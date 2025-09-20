import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { ResourcesPage } from '@/pages/Resources';
import { BlogsPage } from '@/pages/Blogs';
import { ServicesPage } from '@/pages/Services';
import { GetStartedPage } from '@/pages/GetStarted';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
