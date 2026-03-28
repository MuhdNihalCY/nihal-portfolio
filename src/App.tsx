import { useState, useEffect, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Header from './components/Header'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import SEO from './components/SEO'
import { smoothScrollTo } from './utils/smoothScroll'
import { Parallax } from './components/Parallax'
import './styles/globals.css'
import './styles/retro-effects.css'

// Lazy-load everything below the fold — these don't affect FCP
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const TextureOverlay = lazy(() => import('./components/TextureOverlay'))
const CursorParticles = lazy(() => import('./components/CursorParticles'))
const EasterEggs = lazy(() => import('./components/EasterEggs'))
const MouseTracker = lazy(() => import('./components/MouseTracker'))

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
      <div className="min-h-screen bg-dark-bg overflow-x-hidden relative page-fade-in">
        <Suspense fallback={null}>
          <TextureOverlay />
          <CursorParticles />
          <EasterEggs />
          <MouseTracker />
        </Suspense>

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

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section — eager, renders immediately */}
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
                aria-label="Scroll to about section"
              >
                <FaChevronDown size={24} />
              </motion.button>
            </motion.div>
          </section>

          {/* All sections below fold — lazy loaded */}
          <Suspense fallback={null}>
            {/* About Section */}
            <section id="about" className="min-h-screen relative flex items-center overflow-hidden">
              <Parallax speed={0.2} direction="up" className="absolute inset-0 bg-dark-surface" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
              <Parallax speed={0.4} direction="down" className="absolute inset-0 bg-dark-elevated opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 15%, 0 100%)' }} />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <About />
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen relative flex items-center overflow-hidden">
              <Parallax speed={0.25} direction="up" className="absolute inset-0 bg-dark-surface" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)' }} />
              <Parallax speed={0.35} direction="down" className="absolute inset-0 bg-dark-elevated opacity-50" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 100%)' }} />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <Experience />
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen relative flex items-center bg-dark-bg overflow-hidden">
              <Parallax speed={0.3} direction="up" className="absolute top-1/4 left-1/6 w-72 h-72 bg-accent-primary/3 rounded-full blur-3xl" />
              <Parallax speed={0.4} direction="down" className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-accent-primary/2 rounded-full blur-3xl" />
              <Parallax speed={0.25} direction="up" className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-primary/2 rounded-full blur-3xl" />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <Projects />
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen relative flex items-center bg-dark-bg overflow-hidden">
              <Parallax speed={0.35} direction="down" className="absolute top-1/3 left-1/5 w-96 h-96 bg-accent-primary/3 rounded-full blur-3xl" />
              <Parallax speed={0.2} direction="up" className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-accent-primary/2 rounded-full blur-3xl" />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <Skills />
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="min-h-screen relative flex items-center overflow-hidden">
              <Parallax speed={0.2} direction="up" className="absolute inset-0 bg-dark-surface" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
              <Parallax speed={0.4} direction="down" className="absolute inset-0 bg-dark-elevated opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 15%, 0 100%)' }} />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <Education />
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen relative flex items-center bg-dark-bg overflow-hidden">
              <Parallax speed={0.3} direction="up" className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-primary/2 rounded-full blur-3xl" />
              <Parallax speed={0.4} direction="down" className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-primary/3 rounded-full blur-3xl" />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <Contact />
              </div>
            </section>

            <Footer />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
