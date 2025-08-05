'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/lib/hooks'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  distance?: number
  duration?: number
  once?: boolean
}

export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  distance = 30,
  duration = 0.6,
  once = true
}: AnimatedSectionProps) {
  const { ref, hasIntersected, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-20px'
  })

  const shouldAnimate = once ? hasIntersected : isIntersecting

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, opacity: 0 }
      case 'down': return { y: -distance, opacity: 0 }
      case 'left': return { x: distance, opacity: 0 }
      case 'right': return { x: -distance, opacity: 0 }
      case 'fade': return { opacity: 0 }
      default: return { y: distance, opacity: 0 }
    }
  }

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down': return { y: 0, opacity: 1 }
      case 'left':
      case 'right': return { x: 0, opacity: 1 }
      case 'fade': return { opacity: 1 }
      default: return { y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={shouldAnimate ? getFinalPosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}