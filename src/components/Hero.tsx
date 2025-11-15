import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown, FaCode, FaRocket } from 'react-icons/fa'
import { personal } from '../data/personal'
import { useTypewriter } from '../hooks/useTypewriter'
import { smoothScrollTo } from '../utils/smoothScroll'

const Hero = () => {
  const typewriterText = useTypewriter('Full-Stack Developer', 80)

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden pt-20"
    >
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-dark-surface" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }} 
        />
        <div 
          className="absolute inset-0 bg-dark-elevated opacity-50" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 100%)' }} 
        />
      </div>

      {/* Subtle background accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          {/* Left - Main content with unique styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:space-y-10 relative"
          >
            {/* Decorative corner accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-accent-primary/30" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent-primary/30" />

            {/* Greeting with icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-dark-elevated border-l-4 border-accent-primary rounded-lg"
            >
              <FaRocket className="text-accent-primary text-lg" />
              <span className="text-sm font-mono text-accent-primary">Hello, I'm</span>
            </motion.div>

            {/* Name - Simple and clear */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight relative z-10"
            >
              <span className="block text-text-primary">{personal.name}</span>
            </motion.h1>

            {/* Typewriter with unique container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent-primary/10 blur-xl" />
              <div className="relative bg-dark-elevated border border-accent-primary/30 rounded-lg px-6 py-4 inline-block">
                <span className="text-text-secondary text-lg sm:text-xl font-mono">I'm a </span>
                <span className="text-accent-primary text-xl sm:text-2xl font-mono font-bold">{typewriterText}</span>
                <span className="terminal-cursor ml-2 text-accent-primary" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl text-text-secondary max-w-xl leading-relaxed pl-4 border-l-2 border-accent-primary/30"
            >
              Building exceptional digital experiences with modern technologies. 
              Passionate about creating scalable solutions that make an impact.
            </motion.p>

            {/* CTA Buttons with unique styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScrollTo('projects')}
                className="px-8 py-4 bg-accent-primary text-white font-bold rounded-lg shadow-lg hover:bg-accent-primary/90 transition-colors"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScrollTo('contact')}
                className="px-8 py-4 bg-dark-elevated border-2 border-accent-primary text-accent-primary font-bold rounded-lg hover:bg-accent-primary/10 transition-all relative overflow-hidden"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links with unique layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-text-muted text-sm font-mono">Connect:</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn' },
                  { icon: FaGithub, href: personal.github, label: 'GitHub' },
                  { icon: FaEnvelope, href: `mailto:${personal.email}`, label: 'Email' },
                ].map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-elevated border-2 border-accent-primary/30 text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all relative group"
                      aria-label={social.label}
                    >
                      <Icon size={20} className="relative z-10" />
                      <div className="absolute inset-0 bg-accent-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Unique code block with stats */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="bg-dark-elevated border-2 border-accent-primary/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden transform perspective-1000">
              {/* Terminal header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-accent-primary/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-xs font-mono text-text-muted">developer.ts</span>
              </div>

              {/* Code content */}
              <div className="space-y-3 font-mono text-sm mb-8">
                <div>
                  <span className="text-accent-primary">const</span>{' '}
                  <span className="text-accent-primary">developer</span>{' '}
                  <span className="text-text-secondary">=</span>{' '}
                  <span className="text-accent-primary">{'{'}</span>
                </div>
                <div className="ml-4">
                  <span className="text-accent-primary">name</span>
                  <span className="text-text-secondary">:</span>{' '}
                  <span className="text-text-primary">"{personal.name.split(' ')[0]}"</span>
                  <span className="text-text-secondary">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-accent-primary">role</span>
                  <span className="text-text-secondary">:</span>{' '}
                  <span className="text-text-primary">"Full-Stack Developer"</span>
                  <span className="text-text-secondary">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-accent-primary">experience</span>
                  <span className="text-text-secondary">:</span>{' '}
                  <span className="text-accent-primary">5+</span>
                  <span className="text-text-secondary"> years</span>
                </div>
                <div>
                  <span className="text-accent-primary">{'}'}</span>
                  <span className="text-text-secondary">;</span>
                </div>
              </div>

              {/* Stats grid with unique design */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-accent-primary/20">
                {[
                  { label: 'Projects', value: '50+' },
                  { label: 'Experience', value: '5+' },
                  { label: 'Skills', value: '20+' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-3 bg-dark-bg rounded-lg border border-accent-primary/20">
                    <div className="text-2xl font-bold mb-1 text-accent-primary">{stat.value}</div>
                    <div className="text-xs text-text-muted font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Unique scroll indicator - Floating text with arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => smoothScrollTo('about')}
            className="group relative flex flex-col items-center gap-3"
          >
            {/* Animated dots trail */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [0, 10, 20]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                  className="w-1.5 h-1.5 bg-accent-primary rounded-full"
                />
              ))}
            </div>
            
            {/* Text with underline animation */}
            <div className="relative">
              <span className="text-sm font-mono text-text-muted group-hover:text-accent-primary transition-colors">
                Explore
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-accent-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Unique arrow design */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-6 h-6 border-r-2 border-b-2 border-accent-primary/50 rotate-45 group-hover:border-accent-primary transition-colors" />
              <div className="w-4 h-4 border-r-2 border-b-2 border-accent-primary/30 rotate-45 group-hover:border-accent-primary transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
