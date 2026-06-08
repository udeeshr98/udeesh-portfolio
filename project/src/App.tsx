import { useState } from 'react';
import IntroVideo from './components/IntroVideo';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showWebsite, setShowWebsite] = useState(false);

  return (
    <div className="min-h-screen bg-black text-slate-200">
      {!showWebsite ? (
        <IntroVideo onEnter={() => setShowWebsite(true)} />
      ) : (
        <>
          <main>
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}