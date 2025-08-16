import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <BrowserRouter>
      {/* Floating Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-600 mix-blend-difference pointer-events-none z-[999]"
        animate={{
          x: cursor.x - 12,
          y: cursor.y - 12,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-transparent border shadow-lg rounded-full px-6 py-3 z-50 w-max flex gap-6">
        <Link to="/" className="text-gray-100 hover:text-yellow-300 font-medium">
          Home
        </Link>
        <Link to="/about" className="text-gray-100 hover:text-yellow-300 font-medium">
          About
        </Link>
        <Link to="/contact" className="text-gray-100 hover:text-yellow-300 font-medium">
          Contact
        </Link>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onMouseEnter={() => toggleMenu('services')}
            onMouseLeave={() => toggleMenu(null)}
            className="text-gray-100 hover:text-yellow-300 font-medium"
          >
            Services
          </button>
          <AnimatePresence>
            {activeMenu === 'services' && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute left-0 top-10 w-48 bg-white border shadow-lg rounded-md p-4 space-y-2"
                onMouseEnter={() => toggleMenu('services')}
                onMouseLeave={() => toggleMenu(null)}
              >
                {['Constructions', 'NHRCL & BNCMC', 'METRO & URBAN ', 'Branding'].map((service) => (
                  <Link
                    key={service}
                    to={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                    className="block text-sm text-gray-700 hover:text-blue-600"
                  >
                    {service}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Page Content with Gradient Background */}
      <div
        className="min-h-screen pt-24 px-4"
        style={{
          background: '#3C3B3F',
          backgroundImage:
            'linear-gradient(to right, #605C3C, #3C3B3F)',
          color: '#f5f5dc' // soft beige text for contrast
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:serviceId" element={<div className="text-xl">Service Detail Page</div>} />
        </Routes>
        <div className="border-t border-white/8 py-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Bubere &amp; Associate | Developed by Murtuza Afsar Peelay. All Rights Reserved.
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
