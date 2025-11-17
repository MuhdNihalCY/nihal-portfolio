import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
  color: string
}

const CursorParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const particleIdRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastParticleTime = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle particle creation
      const now = Date.now()
      if (now - lastParticleTime.current < 50) return // Create particle every 50ms
      lastParticleTime.current = now

      // Create 2-3 random particles at cursor position
      const particleCount = Math.floor(Math.random() * 2) + 2
      const newParticles: Particle[] = []

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5
        const speed = 0.5 + Math.random() * 1
        const size = 2 + Math.random() * 3 // Random size between 2-5px
        const colors = [
          'rgba(96, 165, 250, 0.6)', // accent-primary
          'rgba(129, 140, 248, 0.5)', // accent-secondary
          'rgba(96, 165, 250, 0.4)', // lighter primary
        ]
        
        newParticles.push({
          id: particleIdRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      setParticles((prev) => {
        const updated = [...prev, ...newParticles].slice(-50) // Keep last 50 particles
        return updated
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Animate particles
    const animate = () => {
      setParticles((prev) => {
        return prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 0.015,
            vx: particle.vx * 0.97, // Friction
            vy: particle.vy * 0.97,
          }))
          .filter((particle) => particle.life > 0)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Check for reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[2] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: 'translate(-50%, -50%)',
            opacity: particle.life * 0.8,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: particle.life }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </div>
  )
}

export default CursorParticles

