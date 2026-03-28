import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
  r: number
  g: number
  b: number
}

const COLORS = [
  { r: 96, g: 165, b: 250 },
  { r: 129, g: 140, b: 248 },
]

const CursorParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // No cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const particles: Particle[] = []
    let lastTime = 0
    let rafId: number

    const onResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    let lastParticleTime = 0
    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastParticleTime < 50) return
      lastParticleTime = now

      const count = Math.floor(Math.random() * 2) + 2
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5
        const speed = 0.5 + Math.random() * 1
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: 2 + Math.random() * 3,
          r: color.r,
          g: color.g,
          b: color.b,
        })
        if (particles.length > 60) particles.shift()
      }
    }

    const animate = (now: number) => {
      const dt = Math.min(now - lastTime, 32) / 16 // capped delta, normalised to ~60fps
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx * dt
        p.y += p.vy * dt
        p.vx *= 0.97
        p.vy *= 0.97
        p.life -= 0.015 * dt

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.life * 0.6})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2]"
      aria-hidden="true"
    />
  )
}

export default CursorParticles
