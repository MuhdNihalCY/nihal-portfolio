import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { education } from '../data/education'
import { FaGraduationCap, FaCalendarAlt, FaAward, FaUniversity } from 'react-icons/fa'

const Education = () => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="education" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Unique section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16 relative"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-accent-primary/30" />
            <span className="px-5 py-2 bg-dark-elevated border-2 border-accent-primary rounded-lg">
              <span className="text-sm font-mono text-accent-primary font-bold">Education</span>
            </span>
            <div className="h-px flex-1 bg-accent-primary/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary text-center">
            Academic <span className="text-accent-primary">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -5, scale: 1.01 }}
          className="bg-dark-elevated border-2 border-accent-primary/20 rounded-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden group hover:border-accent-primary/50 transition-all"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-accent-primary/20 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-accent-primary/20 rounded-br-2xl" />

          {/* Icon header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
              <FaGraduationCap className="text-accent-primary text-2xl" />
            </div>
            <div className="h-16 w-px bg-accent-primary/30" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors">
            {education.institution}
          </h3>
          
          <p className="text-xl sm:text-2xl text-text-secondary font-semibold mb-8">
            {education.degree} in {education.field}
          </p>

          {/* Details grid with unique styling */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-5 bg-dark-bg rounded-xl border-2 border-accent-primary/20 hover:border-accent-primary/50 transition-colors group/item">
              <FaCalendarAlt className="text-accent-primary text-xl flex-shrink-0" />
              <div>
                <div className="text-xs text-text-muted font-mono mb-1 uppercase">Year</div>
                <div className="text-lg font-bold text-text-primary">{education.year}</div>
              </div>
            </div>
            {education.gpa && (
              <div className="flex items-center gap-4 p-5 bg-dark-bg rounded-xl border-2 border-accent-primary/20 hover:border-accent-primary/50 transition-colors group/item">
                <FaAward className="text-accent-primary text-xl flex-shrink-0" />
                <div>
                  <div className="text-xs text-text-muted font-mono mb-1 uppercase">GPA</div>
                  <div className="text-lg font-bold text-text-primary">{education.gpa}</div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
