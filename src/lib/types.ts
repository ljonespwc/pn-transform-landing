export interface Chapter {
  id: number
  title: string
  subtitle: string
  path: string
  backgroundColor: 'white' | 'light-blue' | 'primary'
}

export interface AssessmentData {
  name: string
  email: string
  previousAttempts: string
  biggestChallenge: string
  goals: string
  location?: string
}

export interface SuccessStory {
  id: string
  quote: string
  author: string
  result: string
  beforeAfter?: {
    before: string
    after: string
  }
}

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "The Cycle",
    subtitle: "The Real Reason You Can't Stick to Any Diet",
    path: "/",
    backgroundColor: "white"
  },
  {
    id: 2,
    title: "The Discovery", 
    subtitle: "Why 95% of Diets Fail",
    path: "/chapter-2",
    backgroundColor: "light-blue"
  },
  {
    id: 3,
    title: "The Solution",
    subtitle: "TransformOS + PN Method",
    path: "/chapter-3", 
    backgroundColor: "white"
  },
  {
    id: 4,
    title: "The Proof",
    subtitle: "Real Results from Beta Testers",
    path: "/chapter-4",
    backgroundColor: "light-blue"
  },
  {
    id: 5,
    title: "The Access",
    subtitle: "Join the Exclusive Beta",
    path: "/chapter-5",
    backgroundColor: "primary"
  }
]