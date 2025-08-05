'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: number
  label: string
  suffix: string
}

const stats: Stat[] = [
  {
    value: 95,
    label: 'of diets fail within 12 months',
    suffix: '%'
  },
  {
    value: 73,
    label: 'of people restart 3+ times per year',
    suffix: '%'
  },
  {
    value: 89,
    label: 'blame themselves instead of the system',
    suffix: '%'
  }
]

function AnimatedCounter({ 
  targetValue, 
  suffix, 
  isInView 
}: { 
  targetValue: number
  suffix: string
  isInView: boolean 
}) {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetValue / steps
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const newValue = Math.min(Math.round(increment * step), targetValue)
      setCurrentValue(newValue)
      
      if (step >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [targetValue, isInView])

  return (
    <motion.span
      className="text-5xl md:text-7xl font-black text-white"
      style={{ 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.1)' 
      }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {currentValue}{suffix}
    </motion.span>
  )
}

export function ValidationStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="w-full py-6">
      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#1e293b' }}>
        You&apos;re Not Broken—The System Is
      </h3>
      
      <div className="space-y-16 md:space-y-20">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center hover:transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.3,
              ease: "easeOut"
            }}
          >
            <div className="mb-6">
              <AnimatedCounter 
                targetValue={stat.value} 
                suffix={stat.suffix}
                isInView={isInView}
              />
            </div>
            <p className="text-xl md:text-2xl max-w-lg mx-auto leading-relaxed font-medium" style={{ color: '#1e293b' }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 p-8 bg-white border-2 border-white rounded-2xl shadow-xl max-w-3xl mx-auto"
        style={{
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <p className="text-center text-xl md:text-2xl leading-relaxed font-medium" style={{ color: '#1e293b' }}>
          If you&apos;ve been on this cycle, you&apos;re experiencing normal human behavior responding to fundamentally flawed systems.
        </p>
      </motion.div>
    </div>
  )
}