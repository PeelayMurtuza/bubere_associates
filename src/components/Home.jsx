import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Slide-in animation variants
const slideFrom = (direction = 'bottom', delay = 0) => {
  const variants = {
    top: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    bottom: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  };
  return {
    hidden: variants[direction].hidden,
    visible: {
      ...variants[direction].visible,
      transition: { duration: 0.8, delay },
    },
  };
};

function Home() {
  // Typewriter logic
  const [typedText, setTypedText] = useState('');
  const fullText = 'Bubere & Associate';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { title: 'Government Tenders', desc: 'Decades of experience handling public works with integrity, transparency, and excellence.' },
    { title: 'Civil Construction', desc: 'Highways, bridges, residential & commercial buildings—we build infrastructure that lasts.' },
    { title: 'Turnkey Solutions', desc: 'From design to delivery—your one-stop solution for comprehensive project execution.' },
  ];

  const testimonials = [
    { name: 'Mr. Sharma', role: 'Municipal Officer', quote: 'Bubere & Associate exceeded our expectations with timely delivery and superb quality!' },
    { name: 'Ms. Kulkarni', role: 'Project Consultant', quote: 'Their professionalism and transparency throughout the project were commendable.' },
  ];

  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/NHAI_logo.png',
    'https://upload.wikimedia.org/wikipedia/en/9/9e/Maharashtra_Public_Works_Department_logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/7/7b/Indian_Railways_logo.png',
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 px-6 py-16 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse" />

      {/* Hero Section */}
      <motion.div
        variants={slideFrom('top', 0)}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl mx-auto z-10 relative"
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-blue-600">{typedText}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Trusted experts in government contracts and civil infrastructure projects across India.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Get in Touch
        </motion.a>
      </motion.div>

      {/* Services Section */}
      <motion.div
        variants={slideFrom('left', 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3 mt-20 max-w-6xl mx-auto z-10 relative"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={slideFrom('bottom', 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-28 text-center max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-100"
            >
              <p className="text-gray-600 italic">“{testi.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-blue-700">
                — {testi.name}, <span className="text-gray-500">{testi.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bar Graph */}
      <motion.div
        variants={slideFrom('bottom', 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-28 text-center max-w-5xl mx-auto relative"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Project Statistics</h2>
        <div className="relative flex justify-center items-end gap-6 h-60 px-6">
          {[80, 60, 75, 50, 70, 95].map((height, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-10 bg-blue-600 rounded-t-lg shadow-md z-10"
              style={{ height: `${height}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="flex justify-center gap-9 mt-4 text-sm font-semibold text-gray-700">
          <span>2020</span>
          <span>2021</span>
          <span>2022</span>
          <span>2023</span>
          <span>2024</span>
          <span>2025</span>
        </div>
      </motion.div>

      {/* Partner Logos */}
      <motion.div
        variants={slideFrom('right', 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-28 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="Partner logo"
              className="h-16 grayscale hover:grayscale-0 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
