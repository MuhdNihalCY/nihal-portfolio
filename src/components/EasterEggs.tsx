import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInteractionTracker } from '../hooks/useInteractionTracker'

const EasterEggs = () => {
  const { stats, easterEggs } = useInteractionTracker()
  const [activeEffects, setActiveEffects] = useState<string[]>([])
  const [showNotification, setShowNotification] = useState(false)
  const [notificationText, setNotificationText] = useState('')
  const [clickEffects, setClickEffects] = useState<Array<{ id: number; x: number; y: number }>>([])
  const clickIdRef = useRef(0)

  useEffect(() => {
    easterEggs.forEach((egg) => {
      if (!activeEffects.includes(egg)) {
        setActiveEffects((prev) => [...prev, egg])
        
        // Show notification
        const messages: Record<string, string> = {
          clicker: '🎯 Click enthusiast detected!',
          'clicker-master': '👑 Click Master! You really like clicking!',
          'long-press': '⏱️ Long press pro!',
          'long-press-master': '🔥 Long Press Master! Impressive!',
          explorer: '🗺️ Full explorer! You scrolled everything!',
          patient: '⏰ Patient visitor! Thanks for staying!',
          dedicated: '💎 Dedicated viewer! You\'re amazing!',
          hoverer: '🖱️ Mouse mover extraordinaire!',
        }
        
        setNotificationText(messages[egg] || '🎉 Easter egg unlocked!')
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 3000)
      }
    })
  }, [easterEggs, activeEffects])

  // Track clicks for immediate effects
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newClick = {
        id: clickIdRef.current++,
        x: e.clientX,
        y: e.clientY,
      }
      setClickEffects((prev) => [...prev, newClick])
      
      // Remove after animation
      setTimeout(() => {
        setClickEffects((prev) => prev.filter((click) => click.id !== newClick.id))
      }, 1000)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      {/* Clicker effect - minimal */}
      <AnimatePresence>
        {activeEffects.includes('clicker') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[100]"
            style={{
              background: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Pulsing circles for long-press */}
      <AnimatePresence>
        {activeEffects.includes('long-press') && (
          <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0, 2, 3],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: 'easeOut',
                }}
                className="absolute w-96 h-96 rounded-full border-2 border-accent-secondary/30"
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Minimal explorer effects */}
      <AnimatePresence>
        {activeEffects.includes('explorer') && (
          <>
            {/* Animated gradient waves - primary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 pointer-events-none z-[100]"
              style={{
                background: `linear-gradient(
                  45deg,
                  transparent 35%,
                  rgba(96, 165, 250, 0.1) 50%,
                  transparent 65%
                )`,
                backgroundSize: '200% 200%',
                animation: 'gradientWave 8s ease infinite',
              }}
            />
            
            {/* Animated gradient waves - secondary (counter-rotating) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 pointer-events-none z-[100]"
              style={{
                background: `linear-gradient(
                  -45deg,
                  transparent 35%,
                  rgba(129, 140, 248, 0.08) 50%,
                  transparent 65%
                )`,
                backgroundSize: '200% 200%',
                animation: 'gradientWaveReverse 10s ease infinite',
              }}
            />

            {/* Minimal corner dots */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, i) => (
              <motion.div
                key={corner}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.5, scale: 1 }}
                exit={{ opacity: 0 }}
                className={`fixed ${corner.includes('top') ? 'top-6' : 'bottom-6'} ${
                  corner.includes('left') ? 'left-6' : 'right-6'
                } pointer-events-none z-[100]`}
              >
                <motion.div
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="w-2 h-2 rounded-full bg-accent-primary"
                />
              </motion.div>
            ))}

          </>
        )}
      </AnimatePresence>

      {/* Floating orbs for patient */}
      <AnimatePresence>
        {activeEffects.includes('patient') && (
          <div className="fixed inset-0 pointer-events-none z-[100]">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  x: [
                    `${20 + i * 15}vw`,
                    `${25 + i * 15}vw`,
                    `${20 + i * 15}vw`,
                  ],
                  y: [
                    `${30 + i * 10}vh`,
                    `${25 + i * 10}vh`,
                    `${30 + i * 10}vh`,
                  ],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut',
                }}
                className="absolute w-32 h-32 rounded-full bg-accent-primary/20 blur-3xl"
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Sparkle effect for dedicated */}
      <AnimatePresence>
        {activeEffects.includes('dedicated') && (
          <div className="fixed inset-0 pointer-events-none z-[100]">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeOut',
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                className="absolute w-1 h-1 bg-accent-secondary rounded-full"
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Fire effect for long-press-master */}
      <AnimatePresence>
        {activeEffects.includes('long-press-master') && (
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-[100]">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  y: [0, -100, -200],
                  x: [(i - 5) * 20, (i - 5) * 30, (i - 5) * 40],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeOut',
                }}
                className="absolute w-4 h-4 rounded-full bg-accent-primary/40 blur-sm"
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Notification toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-20 left-1/2 z-[200] pointer-events-none"
          >
            <div className="px-6 py-3 bg-dark-elevated border-2 border-accent-primary/50 rounded-lg shadow-lg backdrop-blur-xl">
              <p className="text-sm font-mono text-accent-primary">{notificationText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click ripple effects */}
      <AnimatePresence>
        {clickEffects.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed pointer-events-none z-[150]"
            style={{
              left: `${click.x}px`,
              top: `${click.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-accent-primary/40" />
          </motion.div>
        ))}
      </AnimatePresence>


      {/* Add CSS animations for gradient waves */}
      <style>{`
        @keyframes gradientWave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradientWaveReverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  )
}

export default EasterEggs

