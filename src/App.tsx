import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import SEO from './components/SEO'
import { smoothScrollTo } from './utils/smoothScroll'
import './styles/globals.css'
import './styles/retro-effects.css'

const App = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' },
  ]

  return (
    <ErrorBoundary>
      <SEO />
      <div className="min-h-screen bg-dark-bg overflow-x-hidden">
        <Header />
        
        {/* Floating Navigation Dots */}
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => smoothScrollTo(section.id)}
              className="group relative flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeSection === section.id
                      ? 'bg-accent-primary w-8'
                      : 'bg-accent-primary/30 hover:bg-accent-primary/60'
                  }`}
                  whileHover={{ scale: 1.5 }}
                />
                <span
                  className={`text-xs font-mono transition-all whitespace-nowrap ${
                    activeSection === section.id
                      ? 'text-accent-primary opacity-100 translate-x-0'
                      : 'text-text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
                >
                  {section.name}
                </span>
              </div>
            </motion.button>
          ))}
        </nav>

        {/* Main Content - Diagonal Split Layout */}
        <main className="relative">
          {/* Hero Section - Full Screen */}
          <section id="hero" className="min-h-screen relative">
            <Hero />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.button
                onClick={() => smoothScrollTo('about')}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-accent-primary/60 hover:text-accent-primary transition-colors"
              >
                <FaChevronDown size={24} />
              </motion.button>
            </motion.div>
          </section>

          {/* About Section - Diagonal Split */}
          <section id="about" className="min-h-screen relative flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-dark-surface" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
            <div className="absolute inset-0 bg-dark-elevated opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 15%, 0 100%)' }} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
              <About />
            </div>
          </section>

          {/* Experience Section - Diagonal Split Reverse */}
          <section id="experience" className="min-h-screen relative flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-dark-surface" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)' }} />
            <div className="absolute inset-0 bg-dark-elevated opacity-50" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 100%)' }} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
              <Experience />
            </div>
          </section>

          {/* Projects Section - Full Width */}
          <section id="projects" className="min-h-screen relative flex items-center bg-dark-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <Projects />
            </div>
          </section>

          {/* Skills Section - Floating Panel Style */}
          <section id="skills" className="min-h-screen relative flex items-center bg-dark-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <Skills />
            </div>
          </section>

          {/* Education Section - Diagonal Split */}
          <section id="education" className="min-h-screen relative flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-dark-surface" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
            <div className="absolute inset-0 bg-dark-elevated opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 15%, 0 100%)' }} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
              <Education />
            </div>
          </section>

          {/* Contact Section - Full Width */}
          <section id="contact" className="min-h-screen relative flex items-center bg-dark-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <Contact />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App

