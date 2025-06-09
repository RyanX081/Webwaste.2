import React, { useState, Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

// Lazy load components for performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const ImpactStats = lazy(() => import('./components/ImpactStats'));
const About = lazy(() => import('./components/About'));
const CarbonCalculator = lazy(() => import('./components/CarbonCalculator'));
const BestPractices = lazy(() => import('./components/BestPractices'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Pricing = lazy(() => import('./components/Pricing'));
const Resources = lazy(() => import('./components/Resources'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Footer = lazy(() => import('./components/Footer'));

// Toast notification (custom or use a library like react-toastify)
import ToastContainer, { showToast } from './components/Toast';

// Error Boundary for better error handling
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error(error, info); }
  render() {
    if (this.state.hasError) {
      return <div role="alert" style={{color: 'red', textAlign: 'center'}}>Something went wrong. Please reload.</div>;
    }
    return this.props.children; 
  }
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return visible ? (
    <button 
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
      aria-label="Scroll to top"
      className="scroll-to-top"
    >↑</button>
  ) : null;
}

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Example: Toast on mount
  useEffect(() => {
    showToast('Welcome to Webwaste 2.0!', { type: 'success' });
  }, []);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Helmet>
        <title>Webwaste 2.0 | Sustainable Web Solutions</title>
        <meta name="description" content="Tools, tips, and resources to reduce your web carbon footprint." />
        <meta name="theme-color" content={theme === 'dark' ? '#121212' : '#ffffff'} />
      </Helmet>
      <div className={`App ${theme}`}>
        <ErrorBoundary>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Header />
            {/* Theme toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="theme-toggle"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            <main tabIndex={-1} aria-label="Main content">
              <Hero />
              <ImpactStats />
              <About />
              <CarbonCalculator />
              <BestPractices />
              <CaseStudies />
              <Pricing />
              <Resources />
              <Newsletter />
            </main>
            <Footer />
            <ScrollToTopButton />
            <ToastContainer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
