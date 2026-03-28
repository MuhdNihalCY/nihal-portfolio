import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'
import { Parallax } from './Parallax'

const Projects = () => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12 lg:mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-accent-primary/30" />
          <span className="px-5 py-2 bg-dark-elevated border-2 border-accent-primary rounded-lg">
            <span className="text-sm font-mono text-accent-primary font-bold">Projects</span>
          </span>
          <div className="h-px flex-1 bg-accent-primary/30" />
        </div>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary text-center">
          Featured <span className="text-accent-primary">Projects</span>
        </h2>
      </motion.div>

      {/* Projects list */}
      <div className="space-y-6 lg:space-y-8">
        {projects.map((project, index) => (
          <Parallax key={index} speed={0.1 + index * 0.05} direction={index % 2 === 0 ? 'up' : 'down'}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="w-full"
          >
            <div className="bg-dark-elevated border-2 border-accent-primary/20 rounded-2xl p-6 sm:p-8 lg:p-10 group hover:border-accent-primary/50 transition-all relative overflow-hidden hover-lift smooth-transition">
              {/* Hover overlay */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                  {/* Left side - Icon and number */}
                  <div className="flex items-start gap-4 flex-shrink-0">
                    <div className="text-4xl sm:text-5xl font-bold text-accent-primary/20 group-hover:text-accent-primary/30 transition-colors font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors flex-shrink-0">
                      <FaRocket className="text-accent-primary text-xl" />
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-grow">
                    {/* Title row with optional badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="px-3 py-1 bg-accent-primary/10 border border-accent-primary/40 text-accent-primary text-xs font-mono font-bold rounded-full uppercase tracking-wider">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-text-secondary mb-6 text-base sm:text-lg leading-relaxed max-w-4xl">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mb-6 space-y-2">
                        {project.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-text-secondary text-sm sm:text-base leading-relaxed">
                            <FaCheckCircle className="text-accent-primary/60 mt-0.5 flex-shrink-0 text-sm" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Stats grid */}
                    {project.stats && project.stats.length > 0 && (
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6 p-4 bg-dark-bg/60 rounded-xl border border-accent-primary/10">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-accent-primary font-mono">{stat.value}</div>
                            <div className="text-text-secondary text-xs mt-0.5 leading-tight">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-dark-bg border border-accent-primary/20 text-text-secondary text-xs sm:text-sm font-mono rounded-lg hover:border-accent-primary/50 hover:text-accent-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t-2 border-accent-primary/10">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-sm sm:text-base font-mono font-semibold link-underline smooth-transition interactive-element"
                          aria-label={`View ${project.title} source code`}
                        >
                          <FaGithub className="smooth-transition" />
                          <span>Code</span>
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-sm sm:text-base font-mono font-semibold link-underline smooth-transition interactive-element"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <FaExternalLinkAlt className="smooth-transition" />
                          <span>Live</span>
                        </motion.a>
                      )}
                      {!project.githubUrl && !project.liveUrl && (
                        <span className="text-text-secondary/40 text-sm font-mono italic">Private codebase</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </Parallax>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
