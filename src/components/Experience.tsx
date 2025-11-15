import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experiences } from '../data/experience'
import { FaCalendarAlt, FaBuilding, FaArrowRight } from 'react-icons/fa'
import { Parallax } from './Parallax'

const Experience = () => {
  const { ref, isInView } = useScrollAnimation()

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
            <span className="text-sm font-mono text-accent-primary font-bold">02</span>
          </span>
          <div className="h-px flex-1 bg-accent-primary/30" />
        </div>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary text-center">
          Work <span className="text-accent-primary">Experience</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical connecting line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent-primary/30 hidden lg:block" />

        <div className="space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => (
            <Parallax key={index} speed={0.1 + index * 0.05} direction={index % 2 === 0 ? 'up' : 'down'}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="relative lg:pl-24"
            >
              {/* Timeline dot with pulse */}
              <div className="absolute left-0 top-8 hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-primary rounded-full animate-ping opacity-20" />
                  <div className="relative w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-bg" />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="bg-dark-elevated border-2 border-accent-primary/20 rounded-2xl p-8 hover:border-accent-primary/50 transition-all relative overflow-hidden group"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <FaBuilding className="text-accent-primary" />
                        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                          {exp.position}
                        </h3>
                      </div>
                      <p className="text-xl text-text-secondary font-semibold ml-6">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-accent-primary/10 border-2 border-accent-primary/30 rounded-lg">
                      <FaCalendarAlt className="text-accent-primary" />
                      <span className="text-sm font-mono text-accent-primary font-bold">
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 pt-6 border-t-2 border-accent-primary/10">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-text-secondary group/item">
                        <FaArrowRight className="text-accent-primary mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        <span className="text-sm sm:text-base flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
