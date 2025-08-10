import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import DadaImage from '../images/DADA.jpg';
import DadaGarden from '../images/DADA_GARDEN_JD.jpg';
import GardenEntrance from '../images/GARDEN_ENTRANCE.jpg';
import GardenSitting from '../images/GARDEN_SITTING.jpg';
import NHRCL from '../images/NHRCL.jpg';

const strengthsData = [
  {
    title: 'Government Tender Experts (NHRCL, BNCMC)',
    description:
      'Extensive experience in tender preparation, bid management, compliance and contract administration for major public bodies including NHRCL and BNCMC. We prepare transparent, competitive, and compliant bids that align technical proposals with cost optimization.',
    image: NHRCL,
  },
  {
    title: 'Metro & Urban Infrastructure',
    description:
      'Design and execution for metro civil-support works, urban roads, sidewalks, and civic amenities. Our teams coordinate closely with utility agencies to minimise disruptions and meet stringent quality standards.',
    image: DadaImage,
  },
  {
    title: 'Custom Construction (Residential & Commercial)',
    description:
      'Turnkey delivery for residential and commercial clients — structural works, finishing, utilities and handover, with full QA/QC documentation and client walk-throughs.',
    image: DadaGarden,
  },
  {
    title: 'Stormwater & Drainage Systems',
    description:
      'End-to-end stormwater and sewage network works: survey, hydraulic design support, excavation, pipe laying and chamber construction with maintenance plans.',
    image: GardenEntrance,
  },
  {
    title: 'Road Development & Pavement Rehabilitation',
    description:
      'Pavement design, widening, resurfacing and strengthening projects that extend asset life and improve ride quality using best-in-class materials and test regimes.',
    image: GardenSitting,
  },
];

const timelineData = [
  { year: '2003', text: 'Bubere and Associates was established focusing on infrastructure development in Maharashtra.' },
  { year: '2010', text: 'Achieved registration with BNCMC and executed multiple municipal works successfully.' },
  { year: '2018', text: 'Completed landmark garden development and metro-support projects.' },
  { year: '2024', text: 'Crossed 100+ completed projects with consistent client satisfaction.' },
];

export default function About() {
  const [selected, setSelected] = useState(null);
  const sectionRef = useRef(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const [years, setYears] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [safetyScore, setSafetyScore] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') {
      setCountersStarted(true);
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setCountersStarted(true);
      });
    }, { threshold: 0.25 });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!countersStarted) return;
    let y = 0, p = 0, s = 70;
    const id = setInterval(() => {
      y += 1; if (y > 22) y = 22;
      p += 3; if (p > 150) p = 150;
      s += 1; if (s > 99) s = 99;
      setYears(y);
      setCompletedProjects(p);
      setSafetyScore(s);
      if (y === 22 && p === 150 && s === 99) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, [countersStarted]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
    hover: { scale: 1.03 }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#3C3B3F',
        backgroundImage: 'linear-gradient(to right, #605C3C, #3C3B3F)'
      }}
      className="text-gray-100 min-h-screen py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-amber-100 leading-tight">
              About <span className="text-white">Bubere &amp; Associates</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-gray-200 text-lg">
              Since <strong>2003</strong>, we have specialised in civil infrastructure, government contracting and turnkey construction solutions across Maharashtra. Our strength lies in technical expertise, disciplined execution and a safety-first culture.
            </motion.p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-white/6 p-4 rounded shadow border border-white/8">
                <div className="text-3xl font-bold text-amber-100">{years}+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/6 p-4 rounded shadow border border-white/8">
                <div className="text-3xl font-bold text-amber-100">{completedProjects}+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="bg-white/6 p-4 rounded shadow border border-white/8">
                <div className="text-3xl font-bold text-amber-100">{safetyScore}%</div>
                <div className="text-sm text-gray-300">Avg. Safety Rating</div>
              </div>
              <div className="bg-white/6 p-4 rounded shadow border border-white/8">
                <div className="text-3xl font-bold text-amber-100">ISO</div>
                <div className="text-sm text-gray-300">Aligned Systems</div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="/files/Bubere_and_Associates_Company_Profile.docx" className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-5 py-3 rounded-full font-semibold shadow">Download Profile <FiDownload /></a>
              <button onClick={() => window.location.href = '/contact'} className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 rounded-full text-white">Request Proposal</button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/8">
            <img src={DadaImage} alt="Bubere site" className="w-full h-96 object-cover" />
            <div className="absolute left-6 bottom-6 bg-gradient-to-r from-black/40 to-black/10 p-4 rounded-lg">
              <div className="text-amber-200 font-semibold">Trusted by public agencies</div>
              <div className="text-sm text-gray-300">NHRCL · BNCMC · Municipal bodies</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {strengthsData.map((item, idx) => (
            <motion.div
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              key={idx}
              className="bg-white/6 rounded-2xl p-6 shadow border border-white/8 cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-white/8">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-100">{item.title}</h4>
                  <p className="text-sm text-gray-300 mt-2 line-clamp-3">{item.description}</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-300 font-medium">Click to read more →</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-100 mb-4">Certifications & Awards</h3>
            <ul className="text-gray-300 space-y-3">
              <li className="bg-white/6 p-3 rounded border border-white/8">BNCMC Registered Contractor</li>
              <li className="bg-white/6 p-3 rounded border border-white/8">NHSRCL / Metro Support Vendor</li>
              <li className="bg-white/6 p-3 rounded border border-white/8">ISO-aligned QA/QC procedures</li>
              <li className="bg-white/6 p-3 rounded border border-white/8">Safety Excellence Award 2022</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-100 mb-4">Project Timeline</h3>
            <div className="relative">
              <div className="border-l border-white/8 pl-6">
                {timelineData.map((t, i) => (
                  <div key={i} className="mb-6 relative">
                    <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-amber-500 border border-white/10" />
                    <div className="font-semibold text-gray-100">{t.year}</div>
                    <div className="text-sm text-gray-300">{t.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          <div className="bg-white/6 p-6 rounded-2xl border border-white/8">
            <div className="font-semibold text-amber-100 mb-2">Field Operations</div>
            <p className="text-sm text-gray-300">Experienced supervisors, daily progress reporting and disciplined site logistics to keep projects on schedule.</p>
          </div>
          <div className="bg-white/6 p-6 rounded-2xl border border-white/8">
            <div className="font-semibold text-amber-100 mb-2">Quality & Testing</div>
            <p className="text-sm text-gray-300">In-house material testing, partner labs and documented QA records for every major deliverable.</p>
          </div>
          <div className="bg-white/6 p-6 rounded-2xl border border-white/8">
            <div className="font-semibold text-amber-100 mb-2">Community & CSR</div>
            <p className="text-sm text-gray-300">Local hiring, waste reduction practices and community engagement programs on larger projects.</p>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-gray-900 rounded-2xl max-w-3xl w-full p-6 md:p-10 border border-white/8" initial={{ y: 40 }} animate={{ y: 0 }} exit={{ y: 40 }}>
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded overflow-hidden border border-white/8">
                    <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-100">{selected.title}</h3>
                    <div className="text-sm text-gray-300 mt-1">Detailed overview</div>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="text-gray-300 text-2xl">&times;</button>
              </div>

              <div className="mt-6 text-gray-200 leading-relaxed">{selected.description}</div>

              <div className="mt-6 flex gap-3">
                <a href="/files/Bubere_and_Associates_Company_Profile.docx" className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-4 py-2 rounded font-medium">Download Profile <FiDownload /></a>
                <button onClick={() => window.location.href = '/contact'} className="border border-white/10 px-4 py-2 rounded text-gray-100">Request Meeting</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@300;400;600&display=swap');
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </section>
  );
}
