import { ReactNode, CSSProperties, ElementType } from 'react'
import { useParallax } from '../hooks/useParallax'

interface ParallaxProps {
  children?: ReactNode
  speed?: number
  direction?: 'up' | 'down'
  disabled?: boolean
  offset?: number
  className?: string
  style?: CSSProperties
  as?: ElementType
}

export const Parallax = ({
  children,
  speed = 0.5,
  direction = 'up',
  disabled = false,
  offset = 0,
  className = '',
  style: externalStyle,
  as: Component = 'div',
}: ParallaxProps) => {
  const { ref, style: parallaxStyle } = useParallax({ speed, direction, disabled, offset })

  return (
    <Component ref={ref} style={{ ...parallaxStyle, ...externalStyle }} className={className}>
      {children}
    </Component>
  )
}

