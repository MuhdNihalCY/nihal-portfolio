import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personal } from '../data/personal'

const Contact = () => {
  const { ref, isInView } = useScrollAnimation()

  const contactItems = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personal.location,
      href: '#',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personal.linkedin,
      external: true,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'View my work',
      href: personal.github,
      external: true,
    },
    {
      icon: FaGlobe,
      label: 'Website',
      value: personal.website.replace('https://', ''),
      href: personal.website,
      external: true,
    },
  ]

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
            <span className="text-sm font-mono text-accent-primary font-bold">05</span>
          </span>
          <div className="h-px flex-1 bg-accent-primary/30" />
        </div>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary text-center">
          Get In <span className="text-accent-primary">Touch</span>
        </h2>
      </motion.div>

      {/* Contact grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {contactItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.a
              key={index}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onClick={!item.external && item.href === '#' ? (e) => e.preventDefault() : undefined}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03, rotateZ: 2 }}
              className="bg-dark-elevated border-2 border-accent-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center group hover:border-accent-primary/50 transition-all relative overflow-hidden"
            >
              {/* Hover overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-accent-primary/10" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors relative z-10 bg-accent-primary/10 group-hover:bg-accent-primary/20 border-2 border-accent-primary/30">
                <Icon className="text-2xl text-accent-primary" />
              </div>

              {/* Label */}
              <p className="text-text-muted text-xs font-mono mb-2 uppercase tracking-wider relative z-10">
                {item.label}
              </p>

              {/* Value */}
              <p className="text-text-primary font-semibold text-sm sm:text-base group-hover:text-accent-primary transition-colors break-all relative z-10">
                {item.value}
              </p>
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Contact
