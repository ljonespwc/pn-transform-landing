'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface MotivationType {
  id: string
  title: string
  description: string
  examples: string[]
  icon: string
  color: string
}

const motivationTypes: MotivationType[] = [
  {
    id: 'achievement',
    title: 'Achievement-Oriented',
    description: 'Driven by personal progress, goals, and measurable success',
    examples: [
      'Streak counters and personal records',
      'Weekly progress milestones',
      'Challenge completion badges',
      '"You beat your best week by 15%!"'
    ],
    icon: '🏆',
    color: '#0284c7'
  },
  {
    id: 'connection',
    title: 'Connection-Focused',
    description: 'Motivated by relationships, community, and shared goals',
    examples: [
      'Team challenges with friends',
      'Family health goal integration',
      'Community support messages',
      '"Your success inspires 12 people in your group!"'
    ],
    icon: '👥',
    color: '#7c3aed'
  },
  {
    id: 'autonomy',
    title: 'Autonomy-Driven',
    description: 'Values personal choice, flexibility, and self-direction',
    examples: [
      'Flexible timing and approaches',
      'Multiple pathway options',
      'Personal customization controls',
      '"Here are 3 ways to handle this - you choose!"'
    ],
    icon: '🎯',
    color: '#059669'
  },
  {
    id: 'security',
    title: 'Security-Motivated',
    description: 'Focused on health protection, stability, and risk reduction',
    examples: [
      'Health risk reduction metrics',
      'Stability and routine emphasis',
      'Long-term protection focus',
      '"These choices reduce health risks by 23%"'
    ],
    icon: '🛡️',
    color: '#dc2626'
  }
]

const learningWeeks = [
  {
    week: 'Week 1',
    title: 'Testing Different Types',
    description: 'TransformOS experiments with various encouragement approaches to see what resonates with you'
  },
  {
    week: 'Week 2-3',
    title: 'Identifying Patterns',
    description: 'The system analyzes your responses and identifies which motivation styles create the strongest positive reactions'
  },
  {
    week: 'Week 4+',
    title: 'Personalized Delivery',
    description: 'Your unique motivation profile drives all encouragement, creating 73% higher adherence than generic approaches'
  }
]

export function MotivationLearning() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [showLearningProcess, setShowLearningProcess] = useState(false)

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          TransformOS Learns What Actually Motivates You
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          Personalized psychology for sustainable behavior change
        </p>
      </div>

      {/* AI Learning Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={400}
          height={200}
          description="AI brain learning patterns or personality assessment interface - represents personalized learning"
        />
      </div>

      {/* Motivation Types Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {motivationTypes.map((type) => (
          <div
            key={type.id}
            className={`bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
              selectedType === type.id
                ? 'border-blue-500 shadow-xl scale-105'
                : 'border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300'
            }`}
            onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">{type.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: type.color }}>
                {type.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                {type.description}
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                {selectedType === type.id ? 'Hide Examples' : 'See Examples'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Type Details */}
      {selectedType && (
        <div className="max-w-3xl mx-auto mb-12">
          {motivationTypes.filter(type => type.id === selectedType).map((type) => (
            <div 
              key={type.id}
              className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: type.color }}>
                  {type.title}
                </h3>
                <p className="text-lg" style={{ color: '#6b7280' }}>
                  {type.description}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="text-lg font-bold mb-4" style={{ color: '#1e293b' }}>
                  How TransformOS Motivates You:
                </h4>
                <div className="space-y-3">
                  {type.examples.map((example, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                        style={{ backgroundColor: type.color }}
                      >
                        ✓
                      </div>
                      <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                        {example}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Learning Process Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
            How TransformOS Learns Your Motivation Profile
          </h3>
          <button
            onClick={() => setShowLearningProcess(!showLearningProcess)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            {showLearningProcess ? 'Hide Learning Process' : 'Show Learning Process'}
          </button>
        </div>

        {showLearningProcess && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="space-y-8">
              {learningWeeks.map((week, index) => (
                <div key={week.week} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2 text-blue-700">
                      {week.week}: {week.title}
                    </h4>
                    <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                      {week.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Statistics */}
      <div className="text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 shadow-lg">
          <div className="mb-6">
            <div className="text-4xl font-black mb-2" style={{ color: '#16a34a' }}>
              73%
            </div>
            <p className="text-lg font-medium" style={{ color: '#1e293b' }}>
              Higher adherence rate with personalized motivation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="text-2xl font-bold mb-2" style={{ color: '#6b7280' }}>
                Generic Approaches
              </div>
              <div className="text-lg" style={{ color: '#6b7280' }}>
                One-size-fits-all motivation
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 border-2 border-green-300">
              <div className="text-2xl font-bold mb-2" style={{ color: '#16a34a' }}>
                TransformOS Learning
              </div>
              <div className="text-lg" style={{ color: '#16a34a' }}>
                Your unique psychology profile
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Insight Callout */}
      <div className="text-center mt-12">
        <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            Your motivation fingerprint is as unique as you are.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
            TransformOS discovers exactly what makes healthy choices irresistible for you.
          </p>
        </div>
      </div>
    </div>
  )
}