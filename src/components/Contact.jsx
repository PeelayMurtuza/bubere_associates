import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Optionally show a toast or send data to a backend
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, rotate: -3, scale: 0.95 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-full max-w-3xl p-10 rounded-3xl shadow-2xl"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-md">
          Contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "subject"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            >
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-gray-800 to to-gray-900 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-cyan-100/50 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
