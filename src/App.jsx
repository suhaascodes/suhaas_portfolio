import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Preloader />
      <Navbar />
      <Hero />
      <About />
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
