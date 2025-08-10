import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const servicesData = [
  { id: 1, title: 'Government Tendering', text: 'Tender preparation, pre-bid, execution & compliance' },
  { id: 2, title: 'Civil Construction', text: 'Roads, drains, buildings, and metro civil support' },
  { id: 3, title: 'Turnkey Projects', text: 'End-to-end delivery: design, procurement, execution' },
  { id: 4, title: 'Maintenance & Demolition', text: 'Site clearance, demolition, and scheduled maintenance' },
  { id: 5, title: 'Structural Rehabilitation', text: 'Repair, retrofitting and strengthening of existing structures' },
  { id: 6, title: 'Drainage & Sewage Works', text: 'Design and construction of stormwater & sewage networks' },
];

const projectsData = [
  { id: 1, title: 'Male Garden Development', year: '2018', img: '/assets/project-1.jpg', short: 'Garden beautification & civil works', long: 'Complete landscaping, paving, and small-structure construction.' },
  { id: 2, title: 'Metro Water Supply Works', year: '2019', img: '/assets/project-2.jpg', short: 'Underground water works for metro support', long: 'Large-bore pipeline installation and chamber works near metro alignments.' },
  { id: 3, title: 'Stormwater Drainage', year: '2021', img: '/assets/project-3.jpg', short: 'Storm drainage & pipeline cleaning', long: 'Widening drains, new RCC channels and desilting operations.' },
];

const timelineData = [
  { year: '2003', text: 'Bubere and Associates was established focusing on infrastructure development in Maharashtra.' },
  { year: '2010', text: 'Achieved registration with BNCMC and executed multiple municipal works successfully.' },
  { year: '2018', text: 'Completed landmark garden development and metro-support projects.' },
  { year: '2024', text: 'Crossed 100+ completed projects with consistent client satisfaction.' },
];

const slides = [
  { id: 1, src: '/assets/slide-1.jpg', caption: 'Highway Rehabilitation - Phase I' },
  { id: 2, src: '/assets/slide-2.jpg', caption: 'Drainage & Pipeline Works' },
  { id: 3, src: '/assets/slide-3.jpg', caption: 'Urban Landscaping & Parks' },
  { id: 4, src: '/assets/slide-4.jpg', caption: 'Metro Support Structural Works' },
];

const testimonials = [
  { id: 1, name: 'Mr. Sharma', role: 'Municipal Officer', quote: 'Delivered on schedule and maintained excellent standards.' },
  { id: 2, name: 'Ms. Kulkarni', role: 'Project Consultant', quote: 'Very professional team with strong site management.' },
  { id: 3, name: 'Mr. Desai', role: 'Client', quote: 'Transparent processes and great communication throughout.' },
];

const awards = [
  { id: 1, title: 'Best Contractor Award', year: '2019' },
  { id: 2, title: 'Safety Excellence', year: '2022' },
];

export default function Home() {
  const [typed, setTyped] = useState('');
  const title = 'Bubere & Associate';

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(title.slice(0, i + 1));
      i += 1;
      if (i >= title.length) clearInterval(id);
    }, 80);
    return () => clearInterval(id);
  }, []);

  const statsRef = useRef(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    if (!statsRef.current || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setCountersStarted(true);
      });
    }, { threshold: 0.3 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!countersStarted) return;
    let p = 0, c = 0, s = 0;
    const intId = setInterval(() => {
      if (p < 240) p += 6;
      if (c < 150) c += 4;
      if (s < 99) s += 1;
      setProjectsCount(Math.min(p, 240));
      setClientsCount(Math.min(c, 150));
      setSuccessRate(Math.min(s, 99));
      if (p >= 240 && c >= 150 && s >= 99) clearInterval(intId);
    }, 40);
    return () => clearInterval(intId);
  }, [countersStarted]);

  const [selected, setSelected] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  function prevSlide() {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }

  function goContact() {
    if (typeof window !== 'undefined') window.location.href = '/contact';
  }

  return (
    <div style={{ backgroundColor: '#3C3B3F', backgroundImage: 'linear-gradient(to right, #605C3C, #3C3B3F)', fontFamily: "'Poppins', 'Inter', sans-serif" }} className="relative min-h-screen text-gray-100">
      

      <section id="home" className="pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-amber-100">
              Trusted Civil Contractors
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-100 to-white">{typed}</span>
            </h1>
            <p className="mt-4 text-gray-200 max-w-xl">Established in 2003 — delivering infrastructure projects across Maharashtra with a commitment to quality, timeliness and client satisfaction.</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white/6 backdrop-blur rounded-lg p-4 shadow border border-white/8">
                <div className="text-2xl font-bold text-white">{projectsCount}</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="bg-white/6 backdrop-blur rounded-lg p-4 shadow border border-white/8">
                <div className="text-2xl font-bold text-white">{clientsCount}+</div>
                <div className="text-sm text-gray-300">Clients</div>
              </div>
              <div className="bg-white/6 backdrop-blur rounded-lg p-4 shadow border border-white/8">
                <div className="text-2xl font-bold text-white">{successRate}%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button onClick={goContact} className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 text-gray-900 px-5 py-3 rounded-full shadow-lg">Request a Quote</button>
              <button onClick={() => setSelected({ title: 'Capability Statement', year: '', long: 'Download our capability statement or request a meeting to discuss your project requirements.' })} className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 rounded-full text-gray-100">Capability</button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-white/6 shadow border border-white/8">
                <div className="font-semibold text-white">Safety First</div>
                <div className="text-sm text-gray-300">Zero compromise on site safety protocols and trained safety officers.</div>
              </div>
              <div className="p-4 rounded-lg bg-white/6 shadow border border-white/8">
                <div className="font-semibold text-white">Quality Assurance</div>
                <div className="text-sm text-gray-300">Independent material testing & documented QA/QC procedures.</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/8">
              <img src="/assets/company-hero.jpg" alt="Bubere & Associate" className="w-full h-[420px] object-cover" />
              <div className="absolute left-6 bottom-6 bg-gradient-to-r from-black/40 to-black/20 rounded-xl p-4 shadow-md w-64">
                <div className="font-semibold text-amber-200 text-sm">20+ Years Experience</div>
                <div className="text-xs text-gray-300 mt-1">Registered with BNCMC & NHSRCL</div>
                <div className="mt-3 text-xs font-medium text-amber-300">On-time delivery & safety certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-3xl font-bold text-center mb-8 text-amber-100">Services</motion.h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesData.map(s => (
              <motion.div key={s.id} whileHover={{ y: -6, scale: 1.02 }} className="bg-white/6 backdrop-blur rounded-2xl p-6 shadow border border-white/8">
                <h3 className="font-semibold text-lg mb-2 text-amber-100">{s.title}</h3>
                <p className="text-sm text-gray-300">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-amber-100">Selected Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData.map(p => (
              <div key={p.id} className="bg-white/6 rounded-xl overflow-hidden shadow border border-white/8">
                <div className="h-40 bg-gray-800/30 flex items-center justify-center">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-amber-100">{p.title}</h4>
                    <div className="text-sm text-gray-300">{p.year}</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">{p.short}</p>
                  <div className="mt-4 flex gap-2">
                    <button type="button" onClick={() => setSelected(p)} className="px-3 py-2 rounded bg-gradient-to-r from-amber-500 to-amber-300 text-gray-900 text-sm">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-100">Company Timeline</h3>
            <div className="space-y-6">
              {timelineData.map((t, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-600 text-white font-semibold">{t.year}</div>
                  <div>
                    <div className="font-semibold text-gray-100">{t.year}</div>
                    <div className="text-sm text-gray-300">{t.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-3 text-amber-100">Certifications & Registrations</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>BNCMC Registered Contractor</li>
                <li>NHSRCL / Metro Support Vendor</li>
                <li>ISO-aligned Quality Procedures</li>
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-3 text-amber-100">Sustainability & CSR</h4>
              <p className="text-sm text-gray-300">We prioritise low-impact construction practices, waste reduction and community engagement in all our projects.</p>
            </div>
          </div>

          <div ref={statsRef}>
            <h3 className="text-2xl font-bold mb-4 text-amber-100">Why Choose Us</h3>
            <p className="text-gray-300 mb-4">We combine decades of experience with a commitment to innovation and quality, delivering projects that meet and exceed client expectations.</p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/6 p-4 rounded shadow border border-white/8">
                <div className="text-xl font-bold text-white">{projectsCount}</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white/6 p-4 rounded shadow border border-white/8">
                <div className="text-xl font-bold text-white">{clientsCount}+</div>
                <div className="text-sm text-gray-300">Clients & Partners</div>
              </div>
              <div className="bg-white/6 p-4 rounded shadow border border-white/8">
                <div className="text-xl font-bold text-white">{successRate}%</div>
                <div className="text-sm text-gray-300">Delivery Success</div>
              </div>

              <div className="mt-6 bg-white/6 p-4 rounded shadow border border-white/8">
                <div className="font-semibold mb-2 text-amber-100">Equipment & Fleet</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/8 rounded-lg">
                    <div className="font-bold text-white">8+</div>
                    <div className="text-xs text-gray-300">Excavators</div>
                  </div>
                  <div className="p-3 bg-white/8 rounded-lg">
                    <div className="font-bold text-white">12+</div>
                    <div className="text-xs text-gray-300">Dump Trucks</div>
                  </div>
                  <div className="p-3 bg-white/8 rounded-lg">
                    <div className="font-bold text-white">6+</div>
                    <div className="text-xs text-gray-300">Concrete Mixers</div>
                  </div>
                  <div className="p-3 bg-white/8 rounded-lg">
                    <div className="font-bold text-white">5+</div>
                    <div className="text-xs text-gray-300">Bulldozers</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-amber-100">Clients & Partners</h3>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <div className="h-16 w-40 bg-white/6 rounded flex items-center justify-center shadow border border-white/8 text-gray-200">NHAI</div>
            <div className="h-16 w-40 bg-white/6 rounded flex items-center justify-center shadow border border-white/8 text-gray-200">BNCMC</div>
            <div className="h-16 w-40 bg-white/6 rounded flex items-center justify-center shadow border border-white/8 text-gray-200">Indian Railways</div>
            <div className="h-16 w-40 bg-white/6 rounded flex items-center justify-center shadow border border-white/8 text-gray-200">Metro</div>
          </div>
        </div>
      </section>

      <section id="gallery-slider" className="px-6 py-12 bg-white/6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-amber-100">Project Highlights</h2>
          <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/8 bg-gray-900">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map(slide => (
                <div key={slide.id} className="min-w-full h-80 flex items-center justify-center bg-gray-800 relative">
                  <img src={slide.src} alt={slide.caption} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  <div className="relative z-10 bg-black/30 w-full h-full flex items-end">
                    <div className="p-6 text-white max-w-3xl">
                      <div className="text-lg font-semibold">{slide.caption}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={prevSlide} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/8 p-2 rounded-full shadow text-white">◀</button>
            <button onClick={nextSlide} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/8 p-2 rounded-full shadow text-white">▶</button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((s, i) => (
                <button key={s.id} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-amber-300' : 'bg-white/30'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-amber-100">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white/6 p-6 rounded-lg shadow border border-white/8">
                <div className="italic text-gray-200">“{t.quote}”</div>
                <div className="mt-4 font-semibold text-amber-100">— {t.name}</div>
                <div className="text-sm text-gray-300">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline" className="px-6 py-12 bg-white/6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-amber-100">Project Pipeline</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">Metro Support Expansion <span>60%</span></div>
              <div className="w-full bg-white/8 rounded-full h-3 overflow-hidden">
                <div className="h-3 bg-amber-400" style={{ width: '60%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">Drainage Rehabilitation <span>35%</span></div>
              <div className="w-full bg-white/8 rounded-full h-3 overflow-hidden">
                <div className="h-3 bg-amber-400" style={{ width: '35%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">Urban Landscaping <span>80%</span></div>
              <div className="w-full bg-white/8 rounded-full h-3 overflow-hidden">
                <div className="h-3 bg-amber-400" style={{ width: '80%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gray-900 rounded-xl max-w-2xl w-full p-6 border border-white/8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-amber-100">{selected.title}</h3>
                <div className="text-sm text-gray-300">{selected.year}</div>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="text-gray-300">Close</button>
            </div>
            <div className="mt-4 text-gray-200">
              {selected.long}
            </div>
          </div>
        </div>
      )}

      <footer className="mt-12 py-12 text-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="font-semibold text-amber-100">Bubere &amp; Associate</div>
            <div className="text-sm text-gray-300 mt-2">181, Gala No. 1, Rose Apartment, Saudagar Mohalla, Bhiwandi – 412302</div>
            <div className="flex items-center gap-3 mt-3 text-sm text-gray-300">
              <FiPhone /> <span>+91 9823990100</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-sm text-gray-300">
              <FiMail /> <span>muqtadirbubere@yahoo.com</span>
            </div>
          </div>

          <div>
            <div className="font-semibold text-amber-100">Office Hours</div>
            <div className="text-sm text-gray-300 mt-2">Mon – Sat: 09:00 – 19:00</div>
            <div className="mt-4">
              <div className="font-semibold text-amber-100">Core Capabilities</div>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>— Tender Management & Compliance</li>
                <li>— Heavy Civil Construction</li>
                <li>— Site Supervision & QA/QC</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="font-semibold text-amber-100">Location</div>
            <div className="text-sm text-gray-300 mt-2">Bhiwandi, Maharashtra, India</div>
            <div className="mt-3 rounded overflow-hidden shadow mt-2">
              <iframe title="Bhiwandi location" width="100%" height="150" loading="lazy" src="https://www.google.com/maps?q=181+Gala+No.+1+Rose+Apartment+Saudagar+Mohalla+Bhiwandi+412302&output=embed" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-6 text-center text-sm text-gray-300">© {new Date().getFullYear()} Created By Murtuza Afsar Peelay All Right Reserved </div>
      </footer>

      <div className="fixed right-6 bottom-6 z-50">
        <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} onClick={goContact} className="bg-gradient-to-r from-amber-500 to-amber-300 text-gray-900 p-4 rounded-full shadow-xl">
          <FiMessageSquare size={20} />
        </motion.button>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@300;400;600&display=swap');
        .animate-spin-slow { animation: spin 28s linear infinite; }
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.06); } 100% { transform: scale(1); } }
      `}</style>
    </div>
  );
}
