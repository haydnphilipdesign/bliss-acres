import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesEventsPage from './pages/ServicesEventsPage';
import BookingPage from './pages/BookingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const loadKeapScript = () => {
      if (document.querySelector('script[src^="https://forms.keap.app"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://forms.keap.app/lib/public-form-embed.js?appId=zex739&version=1.1.0';
      script.async = true;
      script.onload = () => {
        if (window.keapForms && typeof window.keapForms.renderAllForms === 'function') {
          window.keapForms.renderAllForms();
        }
      };
      script.onerror = (error) => {
        console.error('Error loading Keap Forms:', error);
      };
      document.body.appendChild(script);
    };

    loadKeapScript();

    return () => {
      const script = document.querySelector('script[src^="https://forms.keap.app"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blissful Existence Healing Acres | Equine Gestalt Coaching & Holistic Healing</title>
        <meta name="description" content="Experience transformative healing through Equine Gestalt Coaching, Meditation Circles, and Holistic Health Coaching at Blissful Existence Healing Acres in East Stroudsburg, PA." />
        <meta name="keywords" content="equine therapy, gestalt coaching, holistic healing, meditation, horse therapy, wellness retreat" />
        <meta property="og:title" content="Blissful Existence Healing Acres | Equine Gestalt Coaching & Holistic Healing" />
        <meta property="og:description" content="Discover healing through connection with horses and nature at Blissful Existence Healing Acres. Offering Equine Gestalt Coaching, Meditation Circles, and Holistic Health Coaching." />
        <meta property="og:image" content="https://images.pixieset.com/48065708/74f124febf65118a5a07b411b36ec4ab-xxlarge.jpg" />
        <meta property="og:url" content="https://www.blissfulexistence.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services-events" element={<ServicesEventsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Newsletter />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;