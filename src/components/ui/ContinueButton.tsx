'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useChapterStore } from '@/lib/store'

interface ContinueButtonProps {
  children: React.ReactNode
  nextChapterPath?: string
  currentChapter: number
  variant?: 'primary' | 'secondary'
}

export function ContinueButton({ 
  children, 
  nextChapterPath, 
  currentChapter,
  variant = 'primary'
}: ContinueButtonProps) {
  const router = useRouter()
  const { markChapterComplete, setCurrentChapter } = useChapterStore()

  const handleClick = () => {
    markChapterComplete(currentChapter)
    
    if (nextChapterPath) {
      setCurrentChapter(currentChapter + 1)
      router.push(nextChapterPath)
    }
  }

  const baseClasses = `
    relative overflow-hidden font-bold py-4 px-8 rounded-lg
    transition-all duration-200 w-full md:max-w-96 md:mx-auto md:block
    text-center text-base leading-6 tracking-wide
    transform hover:scale-105 hover:-translate-y-0.5
    touch-manipulation min-h-[44px] active:scale-95
    mt-8
  `

  const variantClasses = {
    primary: `
      bg-primary-500 text-white 
      hover:bg-primary-600 
      shadow-lg hover:shadow-xl hover:shadow-primary-500/20
    `,
    secondary: `
      bg-white text-primary-500 border-2 border-white
      hover:bg-primary-50 hover:text-primary-600
      shadow-lg hover:shadow-xl
    `
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 hover:left-full" />
    </motion.button>
  )
}