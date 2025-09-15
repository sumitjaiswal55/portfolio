import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Loader from './components/Loader'
import Certification from './components/Certification'
import Footer from "./components/Footer"

function App() {
  return (
    
   <div className=" font-poppins w-full bg-gradient-to-br from-teal-50 via-purple-100 via-pink-50  to-blue-100">
        <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certification />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App