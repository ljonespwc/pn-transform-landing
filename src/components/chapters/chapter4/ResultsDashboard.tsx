'use client'

import { useState, useEffect, useRef } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface Statistic {
  id: string
  percentage: number
  label: string
  description: string
}

const mainStats = {
  pnTransform: 87,
  industry: 12
}

const supportingStats: Statistic[] = [
  {
    id: 'natural',
    percentage: 89,
    label: 'Natural Not Forced',
    description: 'report healthy choices feel natural, not forced'
  },
  {
    id: 'experience',
    percentage: 94,
    label: 'Never Experienced',
    description: 'say they\'ve never had this level of consistency'
  },
  {
    id: 'automatic',
    percentage: 28,
    label: '28 Days to Automatic',
    description: 'vs industry average of never'
  },
  {
    id: 'maintain',
    percentage: 93,
    label: 'Maintain Without Effort',
    description: 'maintain results without constant effort'
  },
  {
    id: 'reallife',
    percentage: 91,
    label: 'Works With Real Life',
    description: 'say the system works with their actual life'
  },
  {
    id: 'blame',
    percentage: 96,
    label: 'No Longer Blame',
    description: 'no longer blame themselves for past failures'
  }
]

const comparisonData = [
  {
    category: 'Success Rate',
    traditional: '12% success rate',
    pnTransform: '87% success rate'
  },
  {
    category: 'Foundation',
    traditional: 'Rely on willpower',
    pnTransform: 'Built-in support system'
  },
  {
    category: 'Requirements',
    traditional: 'Perfect week required',
    pnTransform: 'Works with messy life'
  },
  {
    category: 'When Problems Occur',
    traditional: 'Blame you when it fails',
    pnTransform: 'Adapts when life happens'
  },
  {
    category: 'End Result',
    traditional: 'Temporary compliance',
    pnTransform: 'Permanent transformation'
  }
]

function AnimatedCounter({ 
  targetValue, 
  duration = 2000, 
  isVisible = false,
  suffix = '%',
  className = ''
}: {
  targetValue: number
  duration?: number
  isVisible?: boolean
  suffix?: string
  className?: string
}) {
  const [currentValue, setCurrentValue] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!isVisible) {
      setCurrentValue(0)
      startTimeRef.current = null
      return
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease-out animation curve
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentVal = Math.round(targetValue * easeOut)
      
      setCurrentValue(currentVal)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [targetValue, duration, isVisible])

  return (
    <span className={className}>
      {currentValue}{suffix}
    </span>
  )
}

export function ResultsDashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          The Numbers Don&apos;t Lie
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          Unprecedented success rates that prove this breakthrough works
        </p>
      </div>


      {/* Main Results Comparison */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg text-center">
          <div className="grid md:grid-cols-3 items-center gap-8">
            {/* PN Transform Result */}
            <div>
              <div className="text-6xl md:text-7xl font-black mb-2" style={{ color: '#0284c7' }}>
                <AnimatedCounter 
                  targetValue={mainStats.pnTransform}
                  isVisible={isVisible}
                  className="font-black"
                />
              </div>
              <p className="text-lg font-bold mb-2" style={{ color: '#0284c7' }}>
                PN Transform Success Rate
              </p>
              <p className="text-base" style={{ color: '#475569' }}>
                still successful at 12 months
              </p>
            </div>

            {/* VS Divider */}
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold mb-2" style={{ color: '#6b7280' }}>
                VS
              </div>
              <div className="w-16 h-1 bg-gray-300 rounded"></div>
            </div>

            {/* Industry Average */}
            <div>
              <div className="text-6xl md:text-7xl font-black mb-2" style={{ color: '#dc2626' }}>
                <AnimatedCounter 
                  targetValue={mainStats.industry}
                  isVisible={isVisible}
                  className="font-black"
                />
              </div>
              <p className="text-lg font-bold mb-2" style={{ color: '#dc2626' }}>
                Industry Average
              </p>
              <p className="text-base" style={{ color: '#475569' }}>
                typical program success rate
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Traditional vs PN Transform Comparison Table */}
      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#1e293b' }}>
          Why These Results Are So Different
        </h3>
        
        <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3 bg-gray-50 p-6 border-b-2 border-gray-200">
            <div className="hidden md:block"></div>
            <div className="text-center">
              <h4 className="text-lg font-bold" style={{ color: '#dc2626' }}>
                Traditional Programs
              </h4>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold" style={{ color: '#0284c7' }}>
                PN Transform
              </h4>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {comparisonData.map((row, index) => (
              <div key={index} className="grid md:grid-cols-3 p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="mb-4 md:mb-0">
                  <h5 className="font-semibold text-base" style={{ color: '#1e293b' }}>
                    {row.category}
                  </h5>
                </div>
                <div className="mb-4 md:mb-0 text-center">
                  <p className="text-sm md:text-base" style={{ color: '#dc2626' }}>
                    {row.traditional}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm md:text-base font-medium" style={{ color: '#0284c7' }}>
                    {row.pnTransform}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="text-center">
        <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            These aren&apos;t just better results—they&apos;re a completely different category of success.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
            When you solve the real problem, everything changes.
          </p>
        </div>
      </div>
    </div>
  )
}