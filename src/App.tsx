import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { LandingPage } from '@/pages/LandingPage';
import { AboutPage } from '@/pages/About';
import { ServicesPage } from '@/pages/Services';
import { AuditPage } from '@/pages/Audit';
import { BlogsPage } from '@/pages/Blogs';
import { ContactPage } from '@/pages/Contact';
import { ResourcesPage } from '@/pages/Resources';
import { BlogArticlePage } from '@/pages/BlogArticle';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
