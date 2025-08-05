'use client'

import { motion } from 'framer-motion'
import { useScrollProgress } from '@/lib/hooks'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50 origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
    />
  )
}