import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills } from '../data/skills'

const Skills = () => {
  const { ref, isInView } = useScrollAnimation()

  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    database: skills.filter((s) => s.category === 'database'),
    tools: skills.filter((s) => s.category === 'tools'),
    other: skills.filter((s) => s.category === 'other'),
  }

  const categoryLabels: Record<keyof typeof skillsByCategory, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools',
    other: 'Other',
  }

  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dark-surface/50">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Unique section header */}
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
              <span className="text-sm font-mono text-accent-primary font-bold">04</span>
            </span>
            <div className="h-px flex-1 bg-accent-primary/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary text-center">
            Technical <span className="text-accent-primary">Skills</span>
          </h2>
        </motion.div>

        {/* Unique skills grid with colored borders */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], catIndex) => {
            const color = { border: 'accent-primary', bg: 'accent-primary' }
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -10 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-dark-elevated border-2 border-accent-primary/20 rounded-2xl p-6 sm:p-8 hover:border-accent-primary/50 transition-all group relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Category header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-accent-primary/10">
                  <div className="w-2 h-10 rounded-full bg-accent-primary" />
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    {categoryLabels[category as keyof typeof skillsByCategory]}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + idx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 bg-dark-bg border border-accent-primary/20 text-text-primary text-xs sm:text-sm font-mono rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
