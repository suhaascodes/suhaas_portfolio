import { useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'

// Web Audio API UI Click Sound Synthesizer (Professional digital mechanical switch keystroke click)
const playUiClick = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Triangle wave gives a richer, mechanical pop/click timbre than a flat sine
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);
    
    gain.gain.setValueAtTime(0.15, ctx.currentTime); // Increased for clear audibility
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch {
    // Fail silently
  }
};

// Expose click synthesizer globally for manual triggers
if (typeof window !== 'undefined') {
  window.playUiClick = playUiClick;
}

function App() {
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Match any button, link, role button, cursor-pointer, or category selector
      const target = e.target.closest('button, a, [role="button"], .cursor-pointer');
      if (target) {
        playUiClick();
      }
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <>
      <CustomCursor />
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
