export const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (!element) return

  // Get header height for offset (header is fixed)
  const header = document.querySelector('header')
  const headerHeight = header ? header.offsetHeight : 80
  
  // Get element position
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - headerHeight - 20 // 20px extra padding

  // Check if smooth scrolling is supported
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style

  if (supportsSmoothScroll) {
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  } else {
    // Fallback for browsers that don't support smooth scroll
    // Use requestAnimationFrame for smooth animation
    const startPosition = window.pageYOffset
    const distance = offsetPosition - startPosition
    const duration = 500
    let start: number | null = null

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percentage = Math.min(progress / duration, 1)
      
      // Easing function (ease-in-out)
      const ease = percentage < 0.5
        ? 2 * percentage * percentage
        : 1 - Math.pow(-2 * percentage + 2, 2) / 2

      window.scrollTo(0, startPosition + distance * ease)

      if (progress < duration) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }
}

