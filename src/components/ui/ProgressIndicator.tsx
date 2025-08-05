'use client'

import { useRouter } from 'next/navigation'
import { useChapterStore } from '@/lib/store'
import { CHAPTERS } from '@/lib/types'

interface ProgressIndicatorProps {
  currentChapter: number
}

export function ProgressIndicator({ currentChapter }: ProgressIndicatorProps) {
  const router = useRouter()
  const { completedChapters } = useChapterStore()

  const handleChapterClick = (chapter: typeof CHAPTERS[0]) => {
    router.push(chapter.path)
  }

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
                ? 'bg-primary-500 scale-125' 
                : isCompleted
                ? 'bg-primary-500'
                : 'bg-primary-100 border border-primary-300'
              }
              hover:bg-primary-600 hover:scale-110
            `}
            title={`Chapter ${chapter.id}: ${chapter.title}`}
            onClick={() => handleChapterClick(chapter)}
          />
        )
      })}
    </div>
  )
}