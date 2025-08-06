'use client'

import { useScrollProgress } from '@/lib/hooks'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}