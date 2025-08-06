'use client'

import { useState } from 'react'

interface AssessmentSection {
  id: string
  title: string
  questions: string[]
}

const assessmentSections: AssessmentSection[] = [
  {
    id: 'past-experience',
    title: 'Past Experience Analysis',
    questions: [
      'How many different approaches have you tried in the last 3 years?',
      'What typically causes you to stop following a plan?'
    ]
  },
  {
    id: 'psychological-readiness',
    title: 'Psychological Readiness',
    questions: [
      'Are you looking for quick fixes or lasting change?',
      'How do you handle setbacks and obstacles?'
    ]
  },
  {
    id: 'lifestyle-compatibility',
    title: 'Lifestyle Compatibility',
    questions: [
      'Describe your typical week (work, family, stress levels)',
      'What are your biggest time constraints?'
    ]
  },
  {
    id: 'commitment-assessment',
    title: 'Commitment Assessment',
    questions: [
      'Are you ready to focus on how you eat before what you eat?',
      'Can you commit to working with a coach for 6+ months?'
    ]
  }
]

export function AssessmentPreview() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          The Assessment: Are You Ready?
        </h2>
        <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto" style={{ color: '#475569' }}>
          The assessment helps us understand if this breakthrough can solve your specific situation.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assessmentSections.map((section) => {
            const isExpanded = expandedSections.has(section.id)
            
            return (
              <div 
                key={section.id}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 min-h-[125px]"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#1e293b' }}>
                      {section.title}
                    </h3>
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      style={{ backgroundColor: '#dbeafe' }}
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="#0284c7" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    {section.questions.map((question, index) => (
                      <div key={index} className="flex items-start space-x-3 text-left">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: '#0284c7' }}
                        />
                        <p className="text-base md:text-lg font-medium text-left" style={{ color: '#475569' }}>
                          {question}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-medium" style={{ color: '#1e293b' }}>
              Assessment Preview Only
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}