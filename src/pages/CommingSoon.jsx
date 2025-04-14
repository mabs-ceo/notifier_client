import React from 'react';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center p-6 bg-white shadow-xl rounded-2xl"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Coming Soon 🚀</h1>
        <p className="text-gray-500">We're working hard to launch this page. Stay tuned!</p>
      </motion.div>
    </div>
  );
}
