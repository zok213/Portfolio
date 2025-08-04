import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MessageCircle } from 'lucide-react';
import config from '../../data/config.json';

const Hero = () => {
  const { personal, social } = config;

  // Typing animation state
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const typingTexts = ['AI Engineer', 'MLOps', 'Software Developer'];

  useEffect(() => {
    const currentText = typingTexts[currentIndex];
    
    if (displayText.length < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (currentIndex < typingTexts.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setDisplayText('');
        } else {
          setTimeout(() => {
            setCurrentIndex(0);
            setDisplayText('');
          }, 2000);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex, typingTexts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-start lg:items-center py-8">
          {/* Left Content - Name with Typing Animation & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 lg:pr-6"
          >
            {/* Main Heading with Typing Animation */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                <span className="block text-3xl md:text-4xl mb-2">Hi, I'm</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block min-h-[1.5em] leading-tight">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              
              {/* Decorative Line */}
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-6"></div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personal?.email}`}
                className="p-4 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Center Content - Taller Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Taller Profile Image with better aspect ratio */}
              <div className="w-[400px] h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <img
                    src="/assets/images/img.png"
                    alt="Mai Phuoc Minh Tai"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-white font-bold text-7xl hidden"
                  >
                    MT
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-12 -left-12 w-28 h-28 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl backdrop-blur-sm"
              />
            </div>
          </motion.div>

          {/* Right Content - Simplified Professional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 lg:pl-6"
          >
            {/* Shortened Description */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Building intelligent AI systems that bridge research and production. Creating scalable solutions that make real impact.
              </p>
            </motion.div>

            {/* Compact Stats */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-6 py-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Certifications</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Get In Touch
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personal?.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <Download size={20} />
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
