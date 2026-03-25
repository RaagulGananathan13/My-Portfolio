import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Portfolio</p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">Raagul Gananathan</h1>
              <div className="mx-auto mt-5 h-[2px] w-40 overflow-hidden rounded-full bg-neutral-700">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gradient Background */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Main Container */}
      <motion.div
        className="container mx-auto px-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 8 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </motion.div>
    </div>
  );
};

export default App;
