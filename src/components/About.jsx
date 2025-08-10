import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DadaImage from '../images/DADA.jpg'
import DadaGarden from '../images/DADA_GARDEN_JD.jpg'
import GardenEntrance from '../images/GARDEN_ENTRANCE.jpg'
import GardenSitting from '../images/GARDEN_SITTING.jpg'
import NHRCL from '../images/NHRCL.jpg'



const strengthsData = [
  {
    title: 'Government Tender Experts (NHRCL, BNCMC)',
    description:
      'We have vast experience in bidding, managing, and executing government tenders efficiently and professionally for bodies like NHRCL, BNCMC, and more.',
    image: NHRCL, // Update this to your actual path
  },
  {
    title: 'Metro & Urban Infrastructure',
    description:
      'We participate in metro civil works and urban development projects, including stormwater drainage, road construction, and civic buildings.',
    image: DadaImage,
  },
  {
    title: 'Custom Construction (Residential/Commercial)',
    description:
      'We construct high-quality custom residential and commercial structures tailored to client specifications and building standards.',
    image: DadaGarden,
  },
  {
    title: 'Stormwater & Drainage Systems',
    description:
      'We handle the design, excavation, laying, and maintenance of effective drainage and stormwater management systems.',
    image: '/images/drainage.jpg',
  },
  {
    title: 'Road Development & Repair',
    description:
      'We’ve completed multiple municipal road laying, repair, and resurfacing projects, ensuring durable and well-engineered roads.',
    image: GardenEntrance,
  },
  {
    title: 'Water Supply Projects',
    description:
      'We implement STEM and water supply systems for public infrastructure and private developments with quality and compliance.',
    image: GardenSitting,
  },
];


const About = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-white text-gray-800 py-12 px-4 md:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          About Bubere & Associates
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          Established in <strong>2003</strong>, <span className="font-semibold">Bubere and Associates</span> is a reputed tendering and contracting firm delivering high-quality civil engineering and infrastructure projects across Maharashtra. We actively participate in government tenders for organizations like <strong>NHRCL</strong>, <strong>BNCMC</strong>, and other public bodies, ensuring timely execution and superior workmanship.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Over the years, we’ve successfully executed a wide range of projects — from urban infrastructure like drainage systems, stormwater pipelines, and roadworks, to public utility buildings such as marriage halls, function malls, and residential/commercial structures.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Our team brings extensive experience, technical knowledge, and commitment to every project — whether it’s a large-scale metro project or a customized private structure. Our strength lies in delivering value, maintaining deadlines, and upholding the highest construction standards.
        </p>
      </motion.div>

      {/* Core Strengths with Popup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-16"
      >
        <h3 className="text-3xl font-semibold mb-10 text-center text-indigo-600">
          🏗️ Our Core Strengths
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
          {strengthsData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition border"
              onClick={() => setSelected(item)}
            >
              <h4 className="text-lg font-semibold text-indigo-600">
                {item.title} <br /> <br /> Click Me
              </h4>
            </motion.div>
          ))}

        </div>
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white p-6 md:p-8 rounded-2xl max-w-lg w-full relative mx-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>

              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="rounded-xl w-full h-48 object-cover mb-4"
                />
              )}

              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                {selected.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{selected.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default About;
