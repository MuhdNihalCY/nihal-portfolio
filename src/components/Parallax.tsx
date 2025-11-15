import { ReactNode } from 'react'
import { useParallax } from '../hooks/useParallax'

interface ParallaxProps {
  children?: ReactNode
  speed?: number
  direction?: 'up' | 'down'
  disabled?: boolean
  offset?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export const Parallax = ({
  children,
  speed = 0.5,
  direction = 'up',
  disabled = false,
  offset = 0,
  className = '',
  as: Component = 'div',
}: ParallaxProps) => {
  const { ref, style } = useParallax({ speed, direction, disabled, offset })

  return (
    <Component ref={ref as any} style={style} className={className}>
      {children}
    </Component>
  )
}

