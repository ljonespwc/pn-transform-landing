'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface TimelinePhase {
  id: string
  title: string
  period: string
  summary: string
  details: {
    week1_2?: string
    week3_4?: string
    stressTesting?: string
    systemAdaptation?: string
    identityShift?: string
    effortlessConsistency?: string
    lifeIntegration?: string
    sustainableResults?: string
  }
  result: string
  color: {
    bg: string
    border: string
    text: string
    accent: string
  }
  icon: string
}

const phases: TimelinePhase[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    period: 'Month 1',
    summary: 'Learning patterns and building first automatic choices',
    details: {
      week1_2: 'Your coach helps you learn how you eat, using TransformOS pattern analysis',
      week3_4: 'First automatic choices emerge, initial momentum builds'
    },
    result: 'It doesn\'t feel like dieting anymore',
    color: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      text: 'text-blue-700',
      accent: '#3b82f6'
    },
    icon: '🌱'
  },
  {
    id: 'integration',
    title: 'Integration',
    period: 'Month 2-3',
    summary: 'System proves reliable through real-life challenges',
    details: {
      stressTesting: 'Holiday parties, work deadlines, family chaos—all become opportunities to strengthen patterns',
      systemAdaptation: 'Your coach uses TransformOS insights to adjust strategies based on your actual lifestyle and stress patterns'
    },
    result: 'Confidence builds as system proves reliable',
    color: {
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      text: 'text-orange-700',
      accent: '#f59e0b'
    },
    icon: '🔧'
  },
  {
    id: 'transformation',
    title: 'Transformation',
    period: 'Month 4-6',
    summary: 'Identity shift as healthy choices become your natural default',
    details: {
      identityShift: 'Becoming someone who naturally chooses health—not someone fighting their impulses',
      effortlessConsistency: 'Healthy choices feel normal, not special. No more daily battles with yourself'
    },
    result: 'Friends and family notice the change',
    color: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-700',
      accent: '#10b981'
    },
    icon: '✨'
  },
  {
    id: 'mastery',
    title: 'Mastery',
    period: 'Month 7-12',
    summary: 'Complete integration with lasting results and continued growth',
    details: {
      lifeIntegration: 'System seamlessly works through major life changes—job stress, travel, family events',
      sustainableResults: 'No fear of going back to old patterns because this isn\'t something you\'re \'doing\''
    },
    result: 'This is just who you are now',
    color: {
      bg: 'bg-purple-50',
      border: 'border-purple-300',
      text: 'text-purple-700',
      accent: '#8b5cf6'
    },
    icon: '👑'
  }
]

export function TransformationTimeline() {
  const [activePhase, setActivePhase] = useState<string>('foundation')

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          What to Expect: Month by Month
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          The natural progression from willpower battles to effortless consistency
        </p>
      </div>

      {/* Transformation Journey Image */}
      <div className="flex justify-center mb-12">
        <ImagePlaceholder 
          width={500}
          height={200}
          description="Transformation journey timeline or progress visualization - shows natural evolution"
        />
      </div>

      {/* Desktop Layout - Horizontal Timeline */}
      <div className="hidden md:block mb-12">
        <div className="flex justify-between items-start max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex flex-col items-center flex-1">
              {/* Phase Card */}
              <div
                className={`relative w-64 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activePhase === phase.id
                    ? `${phase.color.bg} ${phase.color.border} shadow-xl scale-105`
                    : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
                }`}
                onClick={() => setActivePhase(phase.id)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{phase.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${activePhase === phase.id ? phase.color.text : 'text-gray-700'}`}>
                    {phase.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${activePhase === phase.id ? phase.color.text : 'text-gray-500'}`}>
                    {phase.period}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                    {phase.summary}
                  </p>
                </div>
              </div>

              {/* Timeline Connection */}
              {index < phases.length - 1 && (
                <div className="flex items-center mt-8 w-full">
                  <div className="flex-1 h-1 bg-gray-300 rounded"></div>
                  <div 
                    className="w-4 h-4 rounded-full mx-2 border-2"
                    style={{ 
                      backgroundColor: phase.color.accent, 
                      borderColor: '#ffffff',
                      opacity: 0.8
                    }}
                  />
                  <div className="flex-1 h-1 bg-gray-300 rounded"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Vertical Timeline */}
      <div className="md:hidden max-w-sm mx-auto mb-12">
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={phase.id} className="relative">
              <div
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activePhase === phase.id
                    ? `${phase.color.bg} ${phase.color.border} shadow-lg`
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                }`}
                onClick={() => setActivePhase(phase.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{phase.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-1 ${activePhase === phase.id ? phase.color.text : 'text-gray-700'}`}>
                      {phase.title}
                    </h3>
                    <p className={`text-sm mb-2 ${activePhase === phase.id ? phase.color.text : 'text-gray-500'}`}>
                      {phase.period}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                      {phase.summary}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Vertical Connection */}
              {index < phases.length - 1 && (
                <div className="flex justify-center py-3">
                  <div 
                    className="w-1 h-8 rounded"
                    style={{ backgroundColor: phase.color.accent, opacity: 0.6 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Phase Details */}
      {activePhase && (
        <div className="max-w-5xl mx-auto mb-12">
          {phases.filter(phase => phase.id === activePhase).map((phase) => (
            <div 
              key={phase.id}
              className={`${phase.color.bg} border-2 ${phase.color.border} rounded-2xl p-8 shadow-lg`}
            >
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">{phase.icon}</div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${phase.color.text}`}>
                  {phase.title}: {phase.period}
                </h3>
                <p className="text-lg" style={{ color: '#475569' }}>
                  {phase.summary}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {Object.entries(phase.details).map(([key, value]) => (
                  <div key={key} className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-lg font-bold mb-3 capitalize" style={{ color: '#6b7280' }}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).replace(/(\d+)_(\d+)/, 'Week $1-$2')}
                    </h4>
                    <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Phase Result */}
              <div className="text-center">
                <div className={`bg-white rounded-xl p-6 border-2 ${phase.color.border} shadow-md`}>
                  <h4 className={`text-lg font-bold mb-3 ${phase.color.text}`}>
                    What You&apos;ll Experience
                  </h4>
                  <p className="text-xl font-semibold" style={{ color: '#1e293b' }}>
                    &quot;{phase.result}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Key Insight */}
      <div className="text-center">
        <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            This isn&apos;t about finding more willpower or being more disciplined.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
            It&apos;s about becoming someone for whom healthy choices feel natural and effortless.
          </p>
        </div>
      </div>
    </div>
  )
}