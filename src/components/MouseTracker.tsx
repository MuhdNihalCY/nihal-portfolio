import { useEffect, useRef } from 'react'

const MouseTracker = () => {
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const targetPos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  const visibleRef = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // No cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const setOpacity = (v: string) => {
      if (blob1Ref.current) blob1Ref.current.style.opacity = v
      if (blob2Ref.current) blob2Ref.current.style.opacity = v
      if (blob3Ref.current) blob3Ref.current.style.opacity = v
    }

    const applyTransform = (x: number, y: number) => {
      const t = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`
      if (blob1Ref.current) blob1Ref.current.style.transform = t
      if (blob2Ref.current) blob2Ref.current.style.transform = t
      if (blob3Ref.current) blob3Ref.current.style.transform = t
    }

    const animate = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1
      applyTransform(currentPos.current.x, currentPos.current.y)

      const dx = Math.abs(targetPos.current.x - currentPos.current.x)
      const dy = Math.abs(targetPos.current.y - currentPos.current.y)
      if (dx > 0.5 || dy > 0.5) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        rafRef.current = null
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY }
      if (!visibleRef.current) {
        visibleRef.current = true
        setOpacity('1')
      }
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    const onMouseLeave = () => {
      visibleRef.current = false
      setOpacity('0')
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      <div
        ref={blob1Ref}
        className="absolute top-0 left-0 opacity-0 transition-opacity duration-700"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute top-0 left-0 opacity-0 transition-opacity duration-700"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.06) 0%, transparent 60%)',
          filter: 'blur(50px)',
          willChange: 'transform',
        }}
      />
      <div
        ref={blob3Ref}
        className="absolute top-0 left-0 opacity-0 transition-opacity duration-500"
        style={{
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
