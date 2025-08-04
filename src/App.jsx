import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import ThemeToggle from './components/ui/ThemeToggle';
import ScrollToTop from './components/ui/ScrollToTop';

// Configuration
import config from './data/config.json';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : config.theme.darkMode;
  });

  const [isLoading, setIsLoading] = useState(true);

  // Force scroll to top immediately on component mount
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Force immediate scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Simulate loading time and ensure we start at top
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Force scroll to top immediately
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      // Also scroll to hero section by ID
      setTimeout(() => {
        const heroElement = document.getElementById('home');
        if (heroElement) {
          heroElement.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      }, 100);
    }, 800); // Reduced loading time

    return () => clearTimeout(timer);
  }, []);

  // Ensure page always starts at top on route changes
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    
    // Listen for browser navigation
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
          <p className="text-blue-100">Preparing something amazing...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 min-h-screen">
          
          {/* Navigation */}
          <Header darkMode={darkMode} />
          
          {/* Theme Toggle */}
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          {/* Main Content */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  <About />
                  <Projects />
                  <Skills />
                  <Experience />
                  <Certifications />
                  <Contact />
                </main>
              } />
            </Routes>
          </AnimatePresence>
          
          {/* Footer */}
          <Footer />
          
          {/* Scroll to Top */}
          <ScrollToTop />
          
        </div>
      </div>
    </Router>
  );
}

export default App;
