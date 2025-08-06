'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface TimelinePhase {
  id: string
  week: string
  title: string
  focus: string
  techSupport: string
  outcome: string
  description: string
  keyInsight: string
  color: string
  icon: string
}

const phases: TimelinePhase[] = [
  {
    id: 'foundation',
    week: 'Week 1-2',
    title: 'Foundation Building',
    focus: '"How you eat" (slow eating practice)',
    techSupport: 'TransformOS tracks eating pace, provides gentle reminders',
    outcome: 'Awareness and mindfulness established',
    description: 'Before we tell you what to eat, we focus on how you eat. You spend two weeks simply learning to slow down your eating pace. No food restrictions, just building awareness.',
    keyInsight: 'Most people eat so fast they miss hunger and satiety signals completely',
    color: '#e0f2fe',
    icon: '🧘'
  },
  {
    id: 'awareness',
    week: 'Week 3-4',
    title: 'Appetite Awareness',
    focus: '"Eating to 80% full" (hunger/satiety recognition)',
    techSupport: 'Pattern recognition helps identify true hunger vs. habits',
    outcome: 'Internal signals restored and trusted',
    description: 'Now that you can eat slowly, you learn to recognize when you\'re actually satisfied. Still no food restrictions - just learning to trust your body\'s natural signals.',
    keyInsight: 'Your body knows when it\'s satisfied, but diet culture taught you to ignore it',
    color: '#e8f5e8',
    icon: '🎯'
  },
  {
    id: 'integration',
    week: 'Week 5-6',
    title: 'Life Integration',
    focus: '"Real-world application" (stress, travel, social situations)',
    techSupport: 'Scenario-specific coaching triggered automatically',
    outcome: 'Skills work in actual life circumstances',
    description: 'Time to practice your new eating awareness in real-life chaos. Stressful meetings, travel, social events - you learn to maintain awareness no matter what life throws at you.',
    keyInsight: 'Skills that only work in perfect conditions aren\'t real skills',
    color: '#fff7ed',
    icon: '🌪️'
  },
  {
    id: 'automation',
    week: 'Week 7+',
    title: 'Habit Automation',
    focus: '"Identity formation" (becoming someone who naturally eats well)',
    techSupport: 'Reinforcement patterns create sustainable motivation',
    outcome: 'Healthy choices feel normal, not forced',
    description: 'The behaviors become automatic. You\'re no longer someone trying to eat well - you\'re someone who does eat well. Now we can talk about food quality because the foundation is solid.',
    keyInsight: 'Identity change happens when behaviors become effortless',
    color: '#f3e8ff',
    icon: '✨'
  }
]

export function PNMethodTimeline() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null)

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          PN Method: Building Lasting Habits from the Ground Up
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          Healthy patterns first, food restrictions second
        </p>
      </div>

      {/* Methodology Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={500}
          height={200}
          description="Progressive building blocks or foundation laying - represents methodical approach"
        />
      </div>

      {/* Desktop Timeline - Horizontal */}
      <div className="hidden md:block mb-12">
        <div className="flex justify-between items-start max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex flex-col items-center flex-1">
              {/* Timeline Item */}
              <div
                className={`relative w-48 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  expandedPhase === phase.id
                    ? 'border-blue-500 shadow-xl scale-105'
                    : 'bg-white border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300'
                }`}
                style={{ 
                  backgroundColor: expandedPhase === phase.id ? phase.color : 'white'
                }}
                onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{phase.icon}</div>
                  <div className="text-sm font-bold mb-2 text-blue-600">
                    {phase.week}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#1e293b' }}>
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    {phase.focus}
                  </p>
                </div>
                
                <div className="text-center mt-4">
                  <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {expandedPhase === phase.id ? 'Hide Details' : 'Show Details'}
                  </span>
                </div>
              </div>
              
              {/* Connection Line */}
              {index < phases.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-16 h-1 bg-blue-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="md:hidden max-w-sm mx-auto mb-12">
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={phase.id}>
              <div
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  expandedPhase === phase.id
                    ? 'border-blue-500 shadow-lg'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                }`}
                style={{ 
                  backgroundColor: expandedPhase === phase.id ? phase.color : 'white'
                }}
                onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{phase.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-blue-600 mb-1">
                      {phase.week}
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: '#1e293b' }}>
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                  {phase.focus}
                </p>
              </div>
              
              {/* Mobile Connection Arrow */}
              {index < phases.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-1 h-8 bg-blue-300 rounded" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Phase Details */}
      {expandedPhase && (
        <div className="max-w-4xl mx-auto mb-12">
          {phases.filter(phase => phase.id === expandedPhase).map((phase) => (
            <div 
              key={phase.id}
              className="rounded-2xl p-8 shadow-lg border-2 border-blue-200"
              style={{ backgroundColor: phase.color }}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{phase.icon}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1e293b' }}>
                  {phase.week}: {phase.title}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* Focus */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#4f46e5' }}>
                    Primary Focus
                  </h4>
                  <p className="text-base leading-relaxed font-medium" style={{ color: '#1e293b' }}>
                    {phase.focus}
                  </p>
                </div>

                {/* Tech Support */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#059669' }}>
                    TransformOS Support
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                    {phase.techSupport}
                  </p>
                </div>

                {/* Outcome */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#dc2626' }}>
                    Expected Outcome
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                    {phase.outcome}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 mb-6">
                <h4 className="text-lg font-bold mb-3" style={{ color: '#1e293b' }}>
                  What This Looks Like
                </h4>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#1e293b' }}>
                  {phase.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-sm font-semibold text-blue-700">
                    Key Insight: {phase.keyInsight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Key Methodology Insight */}
      <div className="text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
              The Revolutionary Insight
            </h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 border-2 border-green-300 mb-6">
            <p className="text-lg font-bold mb-4" style={{ color: '#16a34a' }}>
              No food restrictions until healthy habits are automatic
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
              Traditional diets fail because they pile restrictions on top of unconscious eating patterns. 
              The PN Method builds new patterns first, then optimization becomes natural and sustainable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <div className="text-lg font-bold mb-2 text-red-700">
                Traditional Approach
              </div>
              <div className="text-sm text-red-600">
                Rules first, awareness never
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-lg font-bold mb-2 text-green-700">
                PN Method
              </div>
              <div className="text-sm text-green-600">
                Awareness first, rules become natural
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}