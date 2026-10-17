import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageProvider';
import { ToastProvider } from './components/Toast';
import { Layout } from './components/Layout';

// Route-level code splitting with React.lazy
const Home = lazy(() => import('./pages/public/Home'));
const About = lazy(() => import('./pages/public/About'));
const Courses = lazy(() => import('./pages/public/Courses'));
const Teachers = lazy(() => import('./pages/public/Teachers'));
const Results = lazy(() => import('./pages/public/Results'));
const Gallery = lazy(() => import('./pages/public/Gallery'));
const Faq = lazy(() => import('./pages/public/Faq'));
const Contact = lazy(() => import('./pages/public/Contact'));
const Admission = lazy(() => import('./pages/public/Admission'));
const AdmissionStatus = lazy(() => import('./pages/public/AdmissionStatus'));
const Foundation = lazy(() => import('./pages/public/Foundation'));
const ComingSoon = lazy(() => import('./pages/public/ComingSoon'));
const NotFound = lazy(() => import('./pages/public/NotFound'));

export default function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Core Public Pages */}
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="courses" element={<Courses />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="results" element={<Results />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="faq" element={<Faq />} />
              <Route path="contact" element={<Contact />} />

              {/* Phase 4: Admission Flow */}
              <Route path="admission" element={<Admission />} />
              <Route path="admission/status" element={<AdmissionStatus />} />

              {/* Foundation Test Page */}
              <Route path="foundation" element={<Foundation />} />

              {/* Deferred to Subsequent Phases */}
              <Route path="portal/login" element={<ComingSoon />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </LanguageProvider>
  );
}
