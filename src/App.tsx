import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageProvider';
import { ToastProvider } from './components/Toast';
import { Layout } from './components/Layout';

// Route-level code splitting with React.lazy
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
              {/* Foundation Test Page */}
              <Route index element={<Foundation />} />

              {/* Coming Soon Routes */}
              <Route path="about" element={<ComingSoon />} />
              <Route path="courses" element={<ComingSoon />} />
              <Route path="teachers" element={<ComingSoon />} />
              <Route path="results" element={<ComingSoon />} />
              <Route path="gallery" element={<ComingSoon />} />
              <Route path="admission" element={<ComingSoon />} />
              <Route path="contact" element={<ComingSoon />} />
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
