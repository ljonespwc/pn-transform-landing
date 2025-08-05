import { create } from 'zustand'

interface ChapterState {
  currentChapter: number
  completedChapters: number[]
  setCurrentChapter: (chapter: number) => void
  markChapterComplete: (chapter: number) => void
  resetProgress: () => void
}

export const useChapterStore = create<ChapterState>((set, get) => ({
  currentChapter: 1,
  completedChapters: [],
  
  setCurrentChapter: (chapter: number) => {
    set({ currentChapter: chapter })
  },
  
  markChapterComplete: (chapter: number) => {
    const { completedChapters } = get()
    if (!completedChapters.includes(chapter)) {
      set({ 
        completedChapters: [...completedChapters, chapter].sort()
      })
    }
  },
  
  resetProgress: () => {
    set({ 
      currentChapter: 1, 
      completedChapters: [] 
    })
  }
}))

interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  setSubmitting: (submitting: boolean) => void
  setSuccess: (success: boolean) => void
  reset: () => void
}

export const useFormStore = create<FormState>((set) => ({
  isSubmitting: false,
  isSuccess: false,
  
  setSubmitting: (submitting: boolean) => {
    set({ isSubmitting: submitting })
  },
  
  setSuccess: (success: boolean) => {
    set({ isSuccess: success })
  },
  
  reset: () => {
    set({ isSubmitting: false, isSuccess: false })
  }
}))