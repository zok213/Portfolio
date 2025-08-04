import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import config from '../../data/config.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gray-900 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-gray-400">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-gray-400">by {config.personal.name}</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} {config.personal.name}. All rights reserved.
          </p>
          
          <p className="text-gray-600 text-xs mt-2">
            Built with React, Vite, TailwindCSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
