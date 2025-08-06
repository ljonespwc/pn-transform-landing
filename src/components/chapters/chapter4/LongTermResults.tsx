'use client'

import { useState, useEffect, useRef } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface LongTermStat {
  percentage: number
  label: string
  description: string
}

const longTermStats: LongTermStat[] = [
  {
    percentage: 87,
    label: 'Still Actively Engaged',
    description: 'at 12 months (vs 5% industry average)'
  },
  {
    percentage: 93,
    label: 'Maintained Primary Goal',
    description: 'without constant effort or restriction'
  },
  {
    percentage: 89,
    label: 'Continued Improvement',
    description: 'still getting better after one year'
  },
  {
    percentage: 96,
    label: 'Would Recommend',
    description: 'to family and friends'
  }
]

const comparisonData = [
  {
    timepoint: 'Month 3',
    traditional: '60% dropped out',
    pnTransform: '94% still engaged'
  },
  {
    timepoint: 'Month 6', 
    traditional: '80% regained weight',
    pnTransform: '91% maintaining results'
  },
  {
    timepoint: 'Month 12',
    traditional: '95% back to starting point',
    pnTransform: '87% still successful'
  }
]

const longTermTestimonials = [
  {
    quote: "Year later, people ask if I'm still 'on that program.' I tell them this isn't a program—it's just how I live now.",
    author: 'Rachel',
    timeframe: '14 months'
  },
  {
    quote: "My doctor was shocked at my one-year labs. Asked what I'd been doing differently. The answer? Nothing feels different anymore.",
    author: 'Tom',
    timeframe: '16 months'
  },
  {
    quote: "I used to be the person who gained it all back. Now I'm the person my friends come to for advice.",
    author: 'Lisa',
    timeframe: '18 months'
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

export function LongTermResults() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % longTermTestimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={ref} className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          The Real Test: Long-Term Results
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          What happens when the initial motivation wears off? Here&apos;s the proof.
        </p>
      </div>

      {/* Long-Term Success Image */}
      <div className="flex justify-center mb-12">
        <ImagePlaceholder 
          width={500}
          height={200}
          description="Long-term success visualization or year-over-year comparison chart - shows sustained results"
        />
      </div>

      {/* Sustained Success Metrics */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#1e293b' }}>
          12-Month Follow-Up Results
        </h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          {longTermStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-3" style={{ color: '#0284c7' }}>
                  <AnimatedCounter 
                    targetValue={stat.percentage}
                    isVisible={isVisible}
                    duration={2000 + (index * 200)} // Stagger animations slightly
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2" style={{ color: '#1e293b' }}>
                  {stat.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Long-Term Testimonials */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#1e293b' }}>
          What People Say After One Year
        </h3>
        
        <div className="relative">
          {/* Active Testimonial */}
          <div className="bg-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg text-center">
            <div className="text-6xl text-blue-300 mb-4">&quot;</div>
            <blockquote className="text-lg md:text-xl leading-relaxed mb-6 italic" style={{ color: '#1e293b' }}>
              {longTermTestimonials[activeTestimonial].quote}
            </blockquote>
            <cite className="text-lg font-bold not-italic" style={{ color: '#0284c7' }}>
              - {longTermTestimonials[activeTestimonial].author}
            </cite>
            <p className="text-sm mt-2" style={{ color: '#6b7280' }}>
              {longTermTestimonials[activeTestimonial].timeframe}
            </p>
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {longTermTestimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  activeTestimonial === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Key Differentiation */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-center mb-6" style={{ color: '#1e293b' }}>
            The Difference is Sustainability
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">
                Traditional Programs
              </div>
              <p className="text-base" style={{ color: '#475569' }}>
                Focus on short-term compliance through restrictions and willpower. Success measured in weeks.
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                PN Transform
              </div>
              <p className="text-base" style={{ color: '#475569' }}>
                Build long-term systems that become your natural way of living. Success measured in years.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Insight */}
      <div className="text-center">
        <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            This isn&apos;t about perfect compliance. It&apos;s about building something that lasts.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
            When you solve the real problem, the results take care of themselves.
          </p>
        </div>
      </div>
    </div>
  )
}