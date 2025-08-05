'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SurveyOption {
  id: string
  label: string
  percentage: number
}

const surveyOptions: SurveyOption[] = [
  { id: '1-2', label: '1-2 times', percentage: 18 },
  { id: '3-5', label: '3-5 times', percentage: 32 },
  { id: '6-10', label: '6-10 times', percentage: 28 },
  { id: '10-plus', label: 'More than 10 times', percentage: 15 },
  { id: 'lost-count', label: 'I\'ve lost count', percentage: 7 }
]

export function MicroSurvey() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleSelection = (optionId: string) => {
    setSelectedOption(optionId)
    setTimeout(() => {
      setShowResult(true)
    }, 300)
  }

  const selectedPercentage = surveyOptions.find(opt => opt.id === selectedOption)?.percentage || 0

  return (
    <div className="w-full py-6">
      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#1e293b' }}>
        How many times have you started over in the last 2 years?
      </h3>

      <div className="space-y-3 mb-8">
        {surveyOptions.map((option, index) => (
          <motion.button
            key={option.id}
            onClick={() => handleSelection(option.id)}
            disabled={selectedOption !== null}
            className={`
              w-full p-6 rounded-2xl border-2 text-left transition-all duration-300
              ${selectedOption === option.id
                ? 'border-primary-500 bg-primary-50 shadow-lg'
                : selectedOption === null
                ? 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-lg hover:scale-102'
                : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
              }
              shadow-sm hover:shadow-lg
            `}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={selectedOption === null ? { scale: 1.02 } : {}}
            whileTap={selectedOption === null ? { scale: 0.98 } : {}}
          >
            <div className="flex items-center">
              <div className={`
                w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center
                ${selectedOption === option.id 
                  ? 'border-primary-500 bg-primary-500' 
                  : 'border-gray-300'
                }
              `}>
                {selectedOption === option.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                )}
              </div>
              <span className="font-medium" style={{ color: '#1e293b' }}>{option.label}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showResult && selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="p-8 bg-green-50 border-2 border-green-200 rounded-2xl shadow-lg text-center"
          >
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary-500">
                {selectedPercentage}%
              </span>
              <span className="text-xl md:text-2xl ml-3 font-medium" style={{ color: '#1e293b' }}>
                of people selected the same answer
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}