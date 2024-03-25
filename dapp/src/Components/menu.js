import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="text-white focus:outline-none" onClick={toggleMenu}>
        Menu
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="absolute right-0 mt-2 w-48 bg-yellow-400 shadow-lg rounded-md overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, type: 'tween' }}
          >
            <ul>
              <motion.li
                className="py-2 px-4 hover:bg-yellow-500 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.li>
              <motion.li
                className="py-2 px-4 hover:bg-yellow-500 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.li>
              <motion.li
                className="py-2 px-4 hover:bg-yellow-500 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
              </motion.li>
              <motion.li
                className="py-2 px-4 hover:bg-yellow-500 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedMenu;
