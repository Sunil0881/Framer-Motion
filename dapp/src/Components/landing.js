import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <motion.div
        className="bg-white p-8 rounded-md shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.5}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <h1 className="text-3xl font-bold mb-4">Welcome to My Landing Page</h1>
        <p className="text-gray-600">Feel free to hover, tap, and drag!</p>
      </motion.div>
    </div>
  );
};

export default LandingPage;
