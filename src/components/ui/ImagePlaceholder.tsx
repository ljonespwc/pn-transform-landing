'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/lib/hooks'

interface ImagePlaceholderProps {
  width: number
  height: number
  mobileWidth?: number
  mobileHeight?: number
  description: string
  className?: string
}

export function ImagePlaceholder({ 
  width, 
  height, 
  mobileWidth, 
  mobileHeight, 
  description, 
  className = "" 
}: ImagePlaceholderProps) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-20px'
  })
  const desktopStyle = {
    width: `${width}px`,
    height: `${height}px`
  }
  
  const mobileStyle = mobileWidth && mobileHeight ? {
    width: `${mobileWidth}px`,
    height: `${mobileHeight}px`
  } : {
    width: `${Math.round(width * 0.8)}px`,
    height: `${Math.round(height * 0.8)}px`
  }

  return (
    <motion.div 
      ref={ref}
      className={`mx-auto my-8 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={hasIntersected ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Desktop placeholder */}
      <motion.div 
        className="hidden md:flex items-center justify-center bg-gray-200 border-2 border-gray-300 border-dashed rounded-lg"
        style={desktopStyle}
        whileHover={{ scale: 1.02, borderColor: '#068FB9' }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-center p-4">
          <div className="text-sm font-mono text-gray-600 mb-2">
            {width}×{height}px
          </div>
          <div className="text-xs text-gray-500 max-w-xs leading-tight">
            {description}
          </div>
        </div>
      </motion.div>
      
      {/* Mobile placeholder */}
      <motion.div 
        className="md:hidden flex items-center justify-center bg-gray-200 border-2 border-gray-300 border-dashed rounded-lg mx-auto"
        style={mobileStyle}
        whileHover={{ scale: 1.02, borderColor: '#068FB9' }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-center p-3">
          <div className="text-xs font-mono text-gray-600 mb-1">
            {mobileWidth || Math.round(width * 0.8)}×{mobileHeight || Math.round(height * 0.8)}px
          </div>
          <div className="text-xs text-gray-500 max-w-xs leading-tight">
            {description}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}