import { useEffect, useState, useRef } from 'react'

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const targetPosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = {
        x: e.clientX,
        y: e.clientY,
      }
      setIsVisible(true)

      if (!rafRef.current) {
        const animate = () => {
          // Smooth interpolation for fluid movement
          currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * 0.1
          currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * 0.1

          setMousePosition({
            x: currentPosition.current.x,
            y: currentPosition.current.y,
          })

          // Continue animation if there's still movement
          if (
            Math.abs(targetPosition.current.x - currentPosition.current.x) > 0.5 ||
            Math.abs(targetPosition.current.y - currentPosition.current.y) > 0.5
          ) {
            rafRef.current = requestAnimationFrame(animate)
          } else {
            rafRef.current = null
          }
        }
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      return
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {/* Main blurry circle following mouse - minimal - using theme colors */}
      <div
        className={`absolute transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />

      {/* Secondary smaller blurry circle - accent-secondary */}
      <div
        className={`absolute transition-opacity duration-900 ease-out ${
          isVisible ? 'opacity-25' : 'opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.06) 0%, transparent 60%)',
          filter: 'blur(50px)',
          willChange: 'transform',
        }}
      />

      {/* Small accent dot - very minimal - accent-primary */}
      <div
        className={`absolute transition-opacity duration-500 ease-out ${
          isVisible ? 'opacity-35' : 'opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 50%)',
          filter: 'blur(40px)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}

export default MouseTracker

