import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaCode, FaRocket, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa'

const About = () => {
  const { ref, isInView } = useScrollAnimation()

  const highlights = [
    { icon: FaCode, text: 'Clean & Maintainable', color: 'accent-primary' },
    { icon: FaRocket, text: 'Performance Focused', color: 'accent-primary' },
    { icon: FaUsers, text: 'User-Centric', color: 'accent-primary' },
    { icon: FaLightbulb, text: 'Innovative Solutions', color: 'accent-primary' },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Unique section header with diagonal accent */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20 relative"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-accent-primary/30" />
            <span className="px-5 py-2 bg-dark-elevated border-2 border-accent-primary rounded-lg">
              <span className="text-sm font-mono text-accent-primary font-bold">01</span>
            </span>
            <div className="h-px flex-1 bg-accent-primary/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary text-center">
            About <span className="text-accent-primary">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text content with unique border design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent-primary/20 rounded-full blur-2xl" />
            
            <div className="relative bg-dark-elevated border-2 border-accent-primary/20 rounded-2xl p-8 lg:p-10">
              <p className="text-xl sm:text-2xl text-text-primary leading-relaxed mb-6">
                I'm a passionate <span className="text-accent-primary font-bold">Full-Stack Developer</span> with expertise in building scalable web applications and high-performance WordPress plugins.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
                With experience working on products used by over <span className="text-accent-secondary font-bold">500,000 brands</span> globally, I specialize in creating exceptional user experiences through clean code and modern technologies.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
                My approach combines technical excellence with user-centric design, ensuring that every project I work on is not only functional but also performant, accessible, and SEO-optimized.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                I thrive in collaborative environments and enjoy solving complex problems with elegant solutions.
              </p>
            </div>
          </motion.div>

          {/* Right - Zigzag highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  whileHover={{ x: index % 2 === 0 ? -10 : 10, scale: 1.02 }}
                  className={`flex items-center gap-6 bg-dark-elevated border-2 border-accent-primary/20 rounded-xl p-6 hover:border-accent-primary/50 transition-all group relative overflow-hidden ${
                    index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-8'
                  }`}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-accent-primary/5" />
                  
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 bg-accent-primary/10 group-hover:bg-accent-primary/20">
                    <Icon className="text-2xl text-accent-primary" />
                  </div>
                  <p className="text-text-primary font-semibold text-lg relative z-10">{highlight.text}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
