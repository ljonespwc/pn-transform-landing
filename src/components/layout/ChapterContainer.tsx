'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { ProgressIndicator } from '@/components/ui/ProgressIndicator'

interface ChapterContainerProps {
  children: ReactNode
  chapterNumber: number
  backgroundColor?: 'white' | 'light-blue' | 'primary'
}

export function ChapterContainer({ 
  children, 
  chapterNumber, 
  backgroundColor = 'white' 
}: ChapterContainerProps) {
  
  const backgroundClasses = {
    'white': 'bg-white',
    'light-blue': 'bg-primary-50', 
    'primary': 'bg-primary-500 text-white'
  }

  return (
    <div className={`${backgroundClasses[backgroundColor]} py-8 px-4`}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ProgressIndicator currentChapter={chapterNumber} />
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}