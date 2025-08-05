'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface QuizOption {
  id: string
  title: string
  description: string
  icon: string
}

const dietApproaches: QuizOption[] = [
  {
    id: 'keto',
    title: 'Keto',
    description: 'Cut carbs completely',
    icon: '🥓'
  },
  {
    id: 'intermittent-fasting',
    title: 'Intermittent Fasting',
    description: '16:8 eating windows',
    icon: '⏰'
  },
  {
    id: 'macro-counting',
    title: 'Macro Counting',
    description: 'Track every gram',
    icon: '📊'
  },
  {
    id: 'gym-membership',
    title: 'Gym Membership',
    description: 'This time I&apos;ll go daily',
    icon: '💪'
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'Someone to hold me accountable',
    icon: '🏃‍♀️'
  },
  {
    id: 'meal-delivery',
    title: 'Meal Delivery',
    description: 'Take the thinking out of it',
    icon: '📦'
  }
]

export function RecognitionQuiz() {
  const [selectedApproaches, setSelectedApproaches] = useState<Set<string>>(new Set())

  const toggleApproach = (id: string) => {
    const newSelected = new Set(selectedApproaches)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedApproaches(newSelected)
  }

  const selectedCount = selectedApproaches.size

  return (
    <div className="w-full py-8">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: '#1e293b' }}>
        How Many of These Sound Familiar?
      </h3>
      <p className="text-base mb-12 text-center font-medium" style={{ color: '#475569' }}>
        ✨ Select all the approaches you&apos;ve tried before
      </p>
      
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-4 mb-8">
        {dietApproaches.map((approach, index) => (
          <motion.button
            key={approach.id}
            onClick={() => toggleApproach(approach.id)}
            className={`
              p-6 rounded-2xl border-2 text-left transition-all duration-300
              ${selectedApproaches.has(approach.id)
                ? 'border-primary-500 bg-primary-50 shadow-xl transform scale-105'
                : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-lg hover:scale-102'
              }
              shadow-md hover:shadow-xl
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: selectedApproaches.has(approach.id) ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{approach.icon}</span>
              <h4 className="font-semibold" style={{ color: '#1e293b' }}>{approach.title}</h4>
              {selectedApproaches.has(approach.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto"
                >
                  <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </div>
            <p className="text-sm" style={{ color: '#475569' }}>{approach.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Mobile Stack */}
      <div className="md:hidden space-y-3 mb-8">
        {dietApproaches.map((approach, index) => (
          <motion.button
            key={approach.id}
            onClick={() => toggleApproach(approach.id)}
            className={`
              w-full p-6 rounded-2xl border-2 text-left transition-all duration-300
              ${selectedApproaches.has(approach.id)
                ? 'border-primary-500 bg-primary-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
              }
              shadow-sm hover:shadow-lg
            `}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center">
              <span className="text-xl mr-3">{approach.icon}</span>
              <div className="flex-1">
                <h4 className="font-semibold" style={{ color: '#1e293b' }}>{approach.title}</h4>
                <p className="text-xs" style={{ color: '#475569' }}>{approach.description}</p>
              </div>
              {selectedApproaches.has(approach.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-2"
                >
                  <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Enhanced Results Display */}
      <motion.div
        className={`text-center p-8 rounded-2xl shadow-lg border-2 ${
          selectedCount === 0 ? 'bg-gray-50 border-gray-200' :
          selectedCount <= 2 ? 'bg-blue-50 border-blue-200' :
          selectedCount <= 4 ? 'bg-yellow-50 border-yellow-200' :
          'bg-red-50 border-red-200'
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1 
        }}
        transition={{ duration: 0.3 }}
      >
        {selectedCount === 0 && (
          <div>
            <div className="text-4xl mb-4">🤔</div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#1e293b' }}>
              Ready to be honest with yourself?
            </h4>
            <p className="text-base" style={{ color: '#475569' }}>
              Click the approaches you&apos;ve tried above. This is anonymous—no judgment here.
            </p>
          </div>
        )}

        {selectedCount === 1 && (
          <div>
            <div className="text-4xl mb-4">😌</div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#1e293b' }}>
              Just getting started?
            </h4>
            <p className="text-base" style={{ color: '#475569' }}>
              Most people have tried way more than this. Keep clicking if you want the full picture.
            </p>
          </div>
        )}

        {selectedCount >= 2 && selectedCount <= 4 && (
          <div>
            <div className="text-4xl mb-4">😬</div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#1e293b' }}>
              Starting to see the pattern?
            </h4>
            <p className="text-base mb-4" style={{ color: '#475569' }}>
              You&apos;ve tried <span className="font-bold text-2xl text-primary-500">{selectedCount}</span> different approaches. Each time thinking &quot;this will be the one.&quot;
            </p>
            <p className="text-sm italic" style={{ color: '#475569' }}>
              Sound familiar? You&apos;re in good company—73% of people restart 3+ times per year.
            </p>
          </div>
        )}

        {selectedCount >= 5 && (
          <div>
            <div className="text-4xl mb-4">😤</div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#1e293b' }}>
              Okay, now we&apos;re being real.
            </h4>
            <p className="text-base mb-4" style={{ color: '#475569' }}>
              <span className="font-bold text-3xl text-red-500">{selectedCount}</span> different attempts. Each failure chipping away at your confidence a little more.
            </p>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-400 mt-4">
              <p className="text-sm font-medium" style={{ color: '#1e293b' }}>
                Here&apos;s the truth: It was never about your willpower. The system is designed to fail.
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}