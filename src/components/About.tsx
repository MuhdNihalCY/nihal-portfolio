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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12 lg:mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-accent-primary/30" />
          <span className="px-5 py-2 bg-dark-elevated border-2 border-accent-primary rounded-lg">
            <span className="text-sm font-mono text-accent-primary font-bold">01</span>
          </span>
          <div className="h-px flex-1 bg-accent-primary/30" />
        </div>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary text-center">
          About <span className="text-accent-primary">Me</span>
        </h2>
      </motion.div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-xl sm:text-2xl text-text-primary leading-relaxed">
            I'm a passionate <span className="text-accent-primary font-bold">Full-Stack Developer</span> with expertise in building scalable web applications and high-performance WordPress plugins.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            With experience working on products used by over <span className="text-accent-secondary font-bold">500,000 brands</span> globally, I specialize in creating exceptional user experiences through clean code and modern technologies.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            My approach combines technical excellence with user-centric design, ensuring that every project I work on is not only functional but also performant, accessible, and SEO-optimized.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark-elevated border-2 border-accent-primary/20 rounded-xl p-6 hover:border-accent-primary/50 transition-all group"
              >
                <Icon className="text-3xl text-accent-primary mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-base text-text-primary font-semibold">{highlight.text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
