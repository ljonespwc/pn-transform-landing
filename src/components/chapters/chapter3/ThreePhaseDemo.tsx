'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface Phase {
  id: string
  title: string
  subtitle: string
  description: string
  scenario: string
  intervention: string
  color: {
    bg: string
    border: string
    text: string
    accent: string
  }
  icon: string
}

const phases: Phase[] = [
  {
    id: 'anticipate',
    title: 'Anticipate',
    subtitle: '72 Hours Before',
    description: 'TransformOS predicts challenges before they happen',
    scenario: '"Thursday 3PM team meeting → historical stress eating pattern detected"',
    intervention: '"Prep healthy snacks, schedule 10-min walk after meeting"',
    color: {
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      text: 'text-orange-700',
      accent: '#f59e0b'
    },
    icon: '🔮'
  },
  {
    id: 'intervene',
    title: 'Intervene',
    subtitle: 'Real-Time Support',
    description: 'Intelligent intervention precisely when you need it most',
    scenario: '"Driving past trigger restaurant during stressful day"',
    intervention: '"Remember your goal? Your coach suggested that podcast episode for exactly this situation. Drive-through closes in 30 seconds."',
    color: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      text: 'text-red-700',
      accent: '#dc2626'
    },
    icon: '🚨'
  },
  {
    id: 'encourage',
    title: 'Encourage',
    subtitle: 'After Success',
    description: 'Personalized reinforcement that makes healthy choices rewarding',
    scenario: '"You chose the healthy option during a stressful moment!"',
    intervention: '"That\'s 3 stress situations handled well this week. Your new pattern is working."',
    color: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-700',
      accent: '#16a34a'
    },
    icon: '🎉'
  }
]

export function ThreePhaseDemo() {
  const [activePhase, setActivePhase] = useState<string>('anticipate')

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          How TransformOS Makes Healthy Habits Automatic
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          Three breakthrough capabilities that set you up for success
        </p>
      </div>

      {/* TransformOS Technology Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={400}
          height={200}
          description="AI brain or technology interface showing the three phases - represents intelligent system"
        />
      </div>

      {/* Desktop Layout - Horizontal Flow */}
      <div className="hidden md:block mb-12">
        <div className="flex justify-center items-center space-x-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex items-center">
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
                    {phase.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                    {phase.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow */}
              {index < phases.length - 1 && (
                <div className="flex items-center mx-4">
                  <div 
                    className="w-8 h-1 rounded"
                    style={{ backgroundColor: phase.color.accent, opacity: 0.6 }}
                  />
                  <div 
                    className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-l-current border-t-transparent border-b-transparent ml-1"
                    style={{ color: phase.color.accent, opacity: 0.6 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Vertical Stack */}
      <div className="md:hidden max-w-sm mx-auto mb-12">
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <div key={phase.id}>
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
                    <h3 className={`text-lg font-bold ${activePhase === phase.id ? phase.color.text : 'text-gray-700'}`}>
                      {phase.title}
                    </h3>
                    <p className={`text-sm ${activePhase === phase.id ? phase.color.text : 'text-gray-500'}`}>
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Arrow */}
              {index < phases.length - 1 && (
                <div className="flex justify-center py-2">
                  <div 
                    className="w-1 h-6 rounded"
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
        <div className="max-w-4xl mx-auto">
          {phases.filter(phase => phase.id === activePhase).map((phase) => (
            <div 
              key={phase.id}
              className={`${phase.color.bg} border-2 ${phase.color.border} rounded-2xl p-8 shadow-lg`}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{phase.icon}</div>
                <h3 className={`text-2xl font-bold mb-2 ${phase.color.text}`}>
                  {phase.title}: {phase.subtitle}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Scenario */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#6b7280' }}>
                    Example Scenario
                  </h4>
                  <p className="text-base leading-relaxed font-medium" style={{ color: '#1e293b' }}>
                    {phase.scenario}
                  </p>
                </div>

                {/* TransformOS Response */}
                <div className={`bg-white rounded-xl p-6 border-2 ${phase.color.border}`}>
                  <h4 className={`text-lg font-bold mb-3 ${phase.color.text}`}>
                    TransformOS Response
                  </h4>
                  <p className="text-base leading-relaxed font-medium" style={{ color: '#1e293b' }}>
                    {phase.intervention}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Key Insight */}
      <div className="text-center mt-12">
        <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            Notice the pattern? TransformOS doesn&apos;t rely on your willpower.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
            It creates a smart support system that makes healthy choices feel effortless.
          </p>
        </div>
      </div>
    </div>
  )
}