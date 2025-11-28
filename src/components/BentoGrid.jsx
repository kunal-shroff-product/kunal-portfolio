import React from 'react';
import { motion } from 'framer-motion';

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoItem = ({ className, children, span = 1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        bg-surface rounded-xl border border-white/10 overflow-hidden p-6
        hover:border-primary/50 transition-colors duration-300 group relative
        ${span === 2 ? 'md:col-span-2' : 'md:col-span-1'}
        ${span === 3 ? 'md:col-span-3' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
