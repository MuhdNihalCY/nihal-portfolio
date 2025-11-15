import { useEffect, useState } from 'react'

const TextureOverlay = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <>
      {/* Grid texture - more visible */}
      <div 
        className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-1000 ${
          isLoaded ? 'opacity-[0.08]' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.08) 2px,
              rgba(255, 255, 255, 0.08) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.08) 2px,
              rgba(255, 255, 255, 0.08) 4px
            )
          `,
          backgroundSize: '40px 40px',
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />
      
      {/* Grain texture - more visible */}
      <div 
        className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-1000 ${
          isLoaded ? 'opacity-[0.12]' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 0.5px 0.5px,
              rgba(255, 255, 255, 0.3) 0.5px,
              transparent 0
            )
          `,
          backgroundSize: '16px 16px',
          mixBlendMode: 'overlay',
          animation: prefersReducedMotion ? 'none' : 'grain 8s steps(10) infinite',
        }}
        aria-hidden="true"
      />
      
      {/* Additional subtle noise texture */}
      <div 
        className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-1000 ${
          isLoaded ? 'opacity-[0.06]' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 1px,
              rgba(255, 255, 255, 0.05) 1px,
              rgba(255, 255, 255, 0.05) 2px
            )
          `,
          backgroundSize: '8px 8px',
          mixBlendMode: 'soft-light',
        }}
        aria-hidden="true"
      />
    </>
  )
}

export default TextureOverlay

