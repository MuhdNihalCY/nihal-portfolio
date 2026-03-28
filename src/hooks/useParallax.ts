import { useEffect, useRef, useState } from 'react'

interface UseParallaxOptions {
  speed?: number
  direction?: 'up' | 'down'
  disabled?: boolean
  offset?: number
}

export const useParallax = ({
  speed = 0.5,
  direction = 'up',
  disabled = false,
  offset = 0,
}: UseParallaxOptions = {}) => {
  const elementRef = useRef<HTMLElement | null>(null)
  const [transform, setTransform] = useState('translate3d(0, 0, 0)')
  const rafRef = useRef<number | null>(null)
  const isVisibleRef = useRef(false)

  useEffect(() => {
    if (disabled) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Disable on touch/mobile devices — parallax doesn't work on scroll and hurts performance
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    const element = elementRef.current
    if (!element) return

    // IntersectionObserver to only animate when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting
        })
      },
      { threshold: 0, rootMargin: '50px' }
    )

    observer.observe(element)

    // Single scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!isVisibleRef.current || !element) {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
        return
      }

      if (rafRef.current) return // Already scheduled

      rafRef.current = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height

        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
        )

        // Calculate parallax offset
        const parallaxOffset = (scrollProgress - 0.5) * speed * 100
        const directionMultiplier = direction === 'up' ? -1 : 1
        const finalOffset = parallaxOffset * directionMultiplier + offset

        // Use translate3d for GPU acceleration
        setTransform(`translate3d(0, ${finalOffset}px, 0)`)
        rafRef.current = null
      })
    }

    // Throttled scroll listener
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [speed, direction, disabled, offset])

  return {
    ref: elementRef,
    style: {
      transform,
      willChange: disabled ? 'auto' : 'transform',
    },
  }
}

