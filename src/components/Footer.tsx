import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import { personal } from '../data/personal'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-dark-bg border-t border-accent-primary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Contact Info with Icons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group"
              aria-label="Email"
            >
              <FaEnvelope className="text-accent-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm hidden sm:inline">{personal.email}</span>
              <span className="font-mono text-xs sm:text-sm sm:hidden">Email</span>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group"
              aria-label="Phone"
            >
              <FaPhone className="text-accent-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm hidden sm:inline">{personal.phone}</span>
              <span className="font-mono text-xs sm:text-sm sm:hidden">Phone</span>
            </a>
            <div className="flex items-center gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors hover:scale-110 transform"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-xs sm:text-sm font-mono text-center sm:text-right">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
