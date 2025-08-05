'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CycleStage {
  id: string
  title: string
  color: string
  borderColor: string
  details: string
  position: number
}

const stages: CycleStage[] = [
  {
    id: 'monday',
    title: 'Monday Motivation',
    color: 'bg-green-500',
    borderColor: 'border-green-500',
    details: 'This is it! I\'ve got my meal prep done, gym membership renewed, and I can already picture my progress photos. This time is different.',
    position: 0
  },
  {
    id: 'reality',
    title: 'Week 2-3 Reality',
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-500',
    details: 'Okay, missed a few workouts and stress ate some takeout, but I can bounce back. I\'m still mostly on track... right?',
    position: 1
  },
  {
    id: 'breakdown',
    title: 'Week 4 Breakdown',
    color: 'bg-red-500',
    borderColor: 'border-red-500',
    details: 'I\'ve completely fallen off. The scale is moving in the wrong direction and my clothes are tight again. Here comes that familiar shame...',
    position: 2
  },
  {
    id: 'restart',
    title: 'Research & Restart',
    color: 'bg-gray-500',
    borderColor: 'border-gray-500',
    details: 'Maybe I need to try keto this time... or intermittent fasting... or get a personal trainer. There has to be something that works for me.',
    position: 3
  }
]

export function CycleVisualization() {
  const [activeStage, setActiveStage] = useState<string | null>(null)

  return (
    <div className="w-full py-6">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: '#1e293b' }}>
        The Predictable Cycle
      </h3>
      <p className="text-base mb-12 text-center font-medium" style={{ color: '#475569' }}>
        👇 Click each stage to see what really happens
      </p>
      
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="relative flex items-center justify-between max-w-4xl mx-auto">
          {stages.map((stage, index) => (
            <div key={stage.id} className="relative flex flex-col items-center">
              {/* Connection Line */}
              {index < stages.length - 1 && (
                <div className="absolute top-6 left-full w-full h-0.5 bg-gray-300 z-0" 
                     style={{ width: '100px' }} />
              )}
              
              {/* Circle */}
              <motion.button
                onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                className={`
                  relative z-10 w-12 h-12 rounded-full ${stage.color} 
                  shadow-lg hover:shadow-xl transition-all duration-300
                  flex items-center justify-center cursor-pointer
                  hover:scale-110 group
                `}
                title={`Click to see details about ${stage.title}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {stage.id === 'restart' && (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                )}
              </motion.button>
              
              {/* Stage Title */}
              <h4 className="mt-4 text-sm font-semibold text-center max-w-24" style={{ color: '#1e293b' }}>
                {stage.title}
              </h4>
            </div>
          ))}
        </div>
        
        {/* Details Card */}
        <AnimatePresence>
          {activeStage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mt-8 p-6 bg-gray-50 border-l-4 ${stages.find(s => s.id === activeStage)?.borderColor} rounded-lg shadow-lg max-w-md mx-auto relative`}
            >
              <div className={`absolute -top-2 left-4 w-4 h-4 bg-gray-50 border-l border-t ${stages.find(s => s.id === activeStage)?.borderColor} transform rotate-45`}></div>
              <p className="text-center italic" style={{ color: '#1e293b' }}>
                &quot;{stages.find(s => s.id === activeStage)?.details}&quot;
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Stack */}
      <div className="md:hidden space-y-4">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-all duration-300
                ${activeStage === stage.id 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 bg-white hover:border-primary-300'
                }
              `}
            >
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full ${stage.color} flex items-center justify-center mr-4`}>
                  {stage.id === 'restart' && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <h4 className="font-semibold" style={{ color: '#1e293b' }}>{stage.title}</h4>
                {index < stages.length - 1 && (
                  <div className="ml-auto">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
            
            <AnimatePresence>
              {activeStage === stage.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mt-2 p-4 bg-gray-50 border-l-4 ${stage.borderColor} rounded-lg relative`}
                >
                  <div className={`absolute -top-2 left-4 w-3 h-3 bg-gray-50 border-l border-t ${stage.borderColor} transform rotate-45`}></div>
                  <p className="text-sm italic" style={{ color: '#1e293b' }}>&quot;{stage.details}&quot;</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}