'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface AddictionPattern {
  id: string
  title: string
  subtitle: string
  steps: {
    trigger: string
    behavior: string
    reward: string
    result: string
  }
  color: {
    bg: string
    border: string
    text: string
    accent: string
  }
  icon: string
}

const patterns: AddictionPattern[] = [
  {
    id: 'phone',
    title: 'Phone Addiction',
    subtitle: 'Current Reality',
    steps: {
      trigger: 'Boredom, stress, transition moments',
      behavior: 'Check phone automatically',
      reward: 'Dopamine hit from notifications, content',
      result: '150+ daily checks, feels effortless'
    },
    color: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      text: 'text-red-700',
      accent: '#dc2626'
    },
    icon: '📱'
  },
  {
    id: 'healthy',
    title: 'Healthy Habits',
    subtitle: 'TransformOS Goal',
    steps: {
      trigger: 'Meal time, exercise window, stress moment',
      behavior: 'Choose healthy option automatically',
      reward: 'Energy boost, progress celebration, identity reinforcement',
      result: 'Consistent healthy choices, feels effortless'
    },
    color: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-700',
      accent: '#16a34a'
    },
    icon: '🌱'
  }
]

const behaviorLoop = [
  { 
    id: 'trigger', 
    title: 'Trigger',
    description: 'Environmental or emotional cue that initiates the behavior',
    icon: '⚡'
  },
  { 
    id: 'behavior', 
    title: 'Behavior',
    description: 'The automatic action performed in response to the trigger',
    icon: '🔄'
  },
  { 
    id: 'reward', 
    title: 'Reward',
    description: 'The immediate benefit that reinforces the behavior',
    icon: '🎁'
  },
  { 
    id: 'result', 
    title: 'Result',
    description: 'The long-term outcome of repeated behavior patterns',
    icon: '📊'
  }
]

export function HealthyHabitAddiction() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null)

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          Become Addicted to Healthy Habits (Not Your Phone)
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          Same psychology, different outcome
        </p>
      </div>

      {/* Psychology Parallel Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={500}
          height={200}
          description="Split brain or parallel pathways showing phone vs healthy habits - represents psychological parallel"
        />
      </div>

      {/* Desktop Side-by-Side Comparison */}
      <div className="hidden md:block mb-12">
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {patterns.map((pattern) => (
            <div
              key={pattern.id}
              className={`${pattern.color.bg} border-2 ${pattern.color.border} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedPattern(selectedPattern === pattern.id ? null : pattern.id)}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{pattern.icon}</div>
                <h3 className={`text-2xl font-bold mb-2 ${pattern.color.text}`}>
                  {pattern.title}
                </h3>
                <p className="text-lg font-medium" style={{ color: '#6b7280' }}>
                  {pattern.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {behaviorLoop.map((step) => (
                  <div
                    key={step.id}
                    className={`bg-white rounded-xl p-4 border transition-all duration-200 ${
                      hoveredStep === `${pattern.id}-${step.id}` 
                        ? `border-2 ${pattern.color.border} shadow-md` 
                        : 'border-gray-200'
                    }`}
                    onMouseEnter={() => setHoveredStep(`${pattern.id}-${step.id}`)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{step.icon}</div>
                      <div className="flex-1">
                        <div className={`text-lg font-bold mb-1 ${pattern.color.text}`}>
                          {step.title}
                        </div>
                        <div className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                          {pattern.steps[step.id as keyof typeof pattern.steps]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Central VS Message */}
        <div className="text-center my-8">
          <div className="inline-block bg-blue-100 border-2 border-blue-300 rounded-full px-8 py-4">
            <span className="text-2xl font-bold text-blue-700">VS</span>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Comparison */}
      <div className="md:hidden max-w-lg mx-auto mb-12">
        {patterns.map((pattern, index) => (
          <div key={pattern.id}>
            <div
              className={`${pattern.color.bg} border-2 ${pattern.color.border} rounded-2xl p-6 shadow-md mb-6`}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{pattern.icon}</div>
                <h3 className={`text-xl font-bold mb-1 ${pattern.color.text}`}>
                  {pattern.title}
                </h3>
                <p className="text-base" style={{ color: '#6b7280' }}>
                  {pattern.subtitle}
                </p>
              </div>

              <div className="space-y-3">
                {behaviorLoop.map((step) => (
                  <div key={step.id} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="text-xl">{step.icon}</div>
                      <div className="flex-1">
                        <div className={`text-base font-bold mb-1 ${pattern.color.text}`}>
                          {step.title}
                        </div>
                        <div className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                          {pattern.steps[step.id as keyof typeof pattern.steps]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {index === 0 && (
              <div className="text-center mb-6">
                <div className="inline-block bg-blue-100 border border-blue-300 rounded-full px-6 py-2">
                  <span className="text-lg font-bold text-blue-700">VS</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Core Psychology Explanation */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
              The Behavioral Loop is Identical
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {behaviorLoop.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className="bg-white rounded-xl p-4 border-2 border-blue-200 mb-2">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <div className="text-lg font-bold text-blue-700 mb-1">{step.title}</div>
                  <div className="text-xs text-gray-600">{step.description}</div>
                </div>
                {index < behaviorLoop.length - 1 && (
                  <div className="hidden md:block text-blue-400 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-purple-200 text-center">
            <p className="text-lg font-bold mb-3" style={{ color: '#7c3aed' }}>
              Same Psychology, Different Outcome
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
              TransformOS hijacks the same psychological mechanisms that make you check your phone 150+ times per day, 
              but redirects them toward healthy behaviors instead of mindless scrolling.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Feature Showcase */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#1e293b' }}>
            How TransformOS Creates Healthy Addiction
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="text-2xl">🎯</div>
              <div>
                <div className="font-bold text-green-700">Trigger Engineering</div>
                <div className="text-sm" style={{ color: '#1e293b' }}>
                  Creates environmental cues that automatically prompt healthy choices
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-2xl">🔄</div>
              <div>
                <div className="font-bold text-blue-700">Behavior Simplification</div>
                <div className="text-sm" style={{ color: '#1e293b' }}>
                  Makes healthy actions as easy as picking up your phone
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="text-2xl">🎁</div>
              <div>
                <div className="font-bold text-purple-700">Reward Optimization</div>
                <div className="text-sm" style={{ color: '#1e293b' }}>
                  Delivers personalized reinforcement that feels genuinely rewarding
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Insight */}
      <div className="text-center">
        <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            You&apos;re not lacking willpower. You&apos;re missing the right infrastructure.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
            TransformOS gives you the same behavioral advantage that Big Tech uses, but for your health.
          </p>
        </div>
      </div>
    </div>
  )
}