'use client'

import { useChapterStore } from '@/lib/store'
import { CHAPTERS } from '@/lib/types'

interface ProgressIndicatorProps {
  currentChapter: number
}

export function ProgressIndicator({ currentChapter }: ProgressIndicatorProps) {
  const { completedChapters } = useChapterStore()

  return (
    <div className="flex justify-center gap-3 mb-12">
      {CHAPTERS.map((chapter) => {
        const isActive = chapter.id === currentChapter
        const isCompleted = completedChapters.includes(chapter.id)
        
        return (
          <div
            key={chapter.id}
            className={`
              w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
              ${isActive 
                ? 'bg-primary-500 scale-120' 
                : isCompleted
                ? 'bg-primary-500'
                : 'bg-primary-100 border border-primary-300'
              }
              hover:bg-primary-600
            `}
            title={`Chapter ${chapter.id}: ${chapter.title}`}
          />
        )
      })}
    </div>
  )
}