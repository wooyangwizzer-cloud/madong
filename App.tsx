
import React, { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import FuturisticBackground from './components/FuturisticBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-blue-500 selection:text-white bg-slate-950">
      <FuturisticBackground />
      <Header activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
          <About />
        </section>

        <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900/50">
          <Skills />
        </section>

        <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
          <Experience />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-950">
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 py-12 text-center text-slate-500 border-t border-slate-800 bg-slate-950">
        <p>© 2024 MA DONG SEOK. All Rights Reserved.</p>
        <p className="text-xs mt-2 uppercase tracking-widest">Future Strategy Architect</p>
      </footer>
    </div>
  );
};

export default App;
