import { useEffect, useState, useRef } from 'react'

interface InteractionStats {
  clickCount: number
  longPressCount: number
  scrollDepth: number
  timeSpent: number
  hoverCount: number
}

export const useInteractionTracker = () => {
  const [stats, setStats] = useState<InteractionStats>({
    clickCount: 0,
    longPressCount: 0,
    scrollDepth: 0,
    timeSpent: 0,
    hoverCount: 0,
  })

  const [easterEggs, setEasterEggs] = useState<string[]>([])
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const startTime = useRef<number>(Date.now())
  const maxScroll = useRef<number>(0)

  useEffect(() => {
    // Track time spent
    const timeInterval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        timeSpent: Math.floor((Date.now() - startTime.current) / 1000),
      }))
    }, 1000)

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      maxScroll.current = Math.max(maxScroll.current, scrollPercent)
      setStats((prev) => ({
        ...prev,
        scrollDepth: maxScroll.current,
      }))
    }

    // Track clicks
    const handleClick = () => {
      setStats((prev) => {
        const newCount = prev.clickCount + 1
        return { ...prev, clickCount: newCount }
      })
    }

    // Track long press
    const handleMouseDown = () => {
      longPressTimer.current = setTimeout(() => {
        setStats((prev) => {
          const newCount = prev.longPressCount + 1
          return { ...prev, longPressCount: newCount }
        })
      }, 800) // 800ms for long press
    }

    const handleMouseUp = () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
        longPressTimer.current = null
      }
    }

    // Track hover interactions - throttled
    let hoverThrottle = 0
    const handleMouseMove = () => {
      hoverThrottle++
      if (hoverThrottle % 50 === 0) {
        setStats((prev) => ({
          ...prev,
          hoverCount: prev.hoverCount + 1,
        }))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('click', handleClick)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      clearInterval(timeInterval)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
      }
    }
  }, [])

  // Trigger easter eggs based on stats
  useEffect(() => {
    const newEasterEggs: string[] = []

    if (stats.clickCount >= 10 && !easterEggs.includes('clicker')) {
      newEasterEggs.push('clicker')
    }
    if (stats.clickCount >= 50 && !easterEggs.includes('clicker-master')) {
      newEasterEggs.push('clicker-master')
    }
    if (stats.longPressCount >= 3 && !easterEggs.includes('long-press')) {
      newEasterEggs.push('long-press')
    }
    if (stats.scrollDepth >= 100 && !easterEggs.includes('explorer')) {
      newEasterEggs.push('explorer')
    }
    if (stats.timeSpent >= 60 && !easterEggs.includes('patient')) {
      newEasterEggs.push('patient')
    }
    if (stats.timeSpent >= 300 && !easterEggs.includes('dedicated')) {
      newEasterEggs.push('dedicated')
    }
    if (stats.hoverCount >= 20 && !easterEggs.includes('hoverer')) {
      newEasterEggs.push('hoverer')
    }
    
    // Secret: Triple long press
    if (stats.longPressCount >= 5 && !easterEggs.includes('long-press-master')) {
      newEasterEggs.push('long-press-master')
    }

    if (newEasterEggs.length > 0) {
      setEasterEggs((prev) => [...prev, ...newEasterEggs])
    }
  }, [stats, easterEggs])

  return { stats, easterEggs }
}

