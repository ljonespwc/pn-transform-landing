'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface Scenario {
  id: string
  title: string
  description: string
  icon: string
  situation: string
  traditionalFailure: string
  systemSolution: string
}

export function ScenarioBreakdown() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null)

  const scenarios: Scenario[] = [
    {
      id: 'work-stress',
      title: 'Work Stress',
      description: 'Deadline pressure → stress eating → diet abandoned',
      icon: '💼',
      situation: 'Your biggest project deadline is tomorrow. You\'ve been working 12-hour days. You\'re exhausted, stressed, and grab whatever food is fastest.',
      traditionalFailure: 'Traditional diets give you a meal plan that assumes you have time to prep, cook, and eat mindfully. When stress hits, you abandon the plan and feel like a failure.',
      systemSolution: 'Behavior systems build stress-eating protocols: pre-decided convenience foods, 2-minute meal options, and stress-response habits that don\'t derail your progress.'
    },
    {
      id: 'travel',
      title: 'Travel Disruption', 
      description: 'Business trip → airport food → routine broken',
      icon: '✈️',
      situation: 'You\'re traveling for work. Different time zones, airport food, client dinners, no gym access. Your entire routine is disrupted.',
      traditionalFailure: 'Most diets assume you\'ll maintain your normal routine. When travel disrupts everything, you give up completely and start over when you get home.',
      systemSolution: 'Systems create travel protocols: portable nutrition strategies, movement options for any location, and approaches that adapt to disruption instead of breaking.'
    },
    {
      id: 'family-drama',
      title: 'Family Drama',
      description: 'Kids\' meltdown → emotional eating → shame spiral',
      icon: '👨‍👩‍👧‍👦',
      situation: 'Your toddler has been screaming for an hour. Your teenager just told you they\'re failing math. Your spouse is stressed about work. You eat your feelings.',
      traditionalFailure: 'Diets don\'t account for emotional eating or family chaos. When you stress-eat, you feel guilty and abandon your "failed" diet attempt.',
      systemSolution: 'Systems include emotional eating protocols, family-chaos meal strategies, and approaches that work even when life is messy and overwhelming.'
    },
    {
      id: 'social-events',
      title: 'Social Events',
      description: 'Friend\'s birthday → "just this once" → back to square one',
      icon: '🎉',
      situation: 'It\'s your best friend\'s birthday dinner. Everyone is ordering appetizers and dessert. You don\'t want to be "that person" with dietary restrictions.',
      traditionalFailure: 'Strict diets make social situations awkward. One "cheat" meal makes you feel like you\'ve ruined everything, so you give up entirely.',
      systemSolution: 'Systems create social navigation strategies: how to enjoy events without derailing progress, flexible approaches that don\'t require perfection.'
    },
    {
      id: 'illness-injury',
      title: 'Illness/Injury',
      description: 'Got sick → missed workouts → lost momentum',
      icon: '🤒',
      situation: 'You catch the flu and are bedridden for a week. You can\'t work out, you\'re eating comfort foods, and your routine is completely disrupted.',
      traditionalFailure: 'Most programs fall apart when you can\'t exercise or stick to the meal plan. Missing a week feels like starting over, which kills motivation.',
      systemSolution: 'Systems adapt to illness: modified protocols for low-energy days, recovery strategies, and approaches that maintain progress even when you can\'t be perfect.'
    },
    {
      id: 'life-changes',
      title: 'Life Changes',
      description: 'New job → schedule chaos → healthy habits forgotten',
      icon: '🔄',
      situation: 'You started a new job with different hours, a longer commute, and new stress. Your old routine doesn\'t fit your new life at all.',
      traditionalFailure: 'Rigid diets can\'t adapt to major life changes. When your schedule shifts, the whole system breaks down and you start the cycle again.',
      systemSolution: 'Systems are designed for life transitions: adaptable approaches that flex with schedule changes and strategies for rebuilding habits in new contexts.'
    }
  ]

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          When Life Gets Messy, Diets Fall Apart
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          These aren&apos;t edge cases. This is where real people live.
        </p>
      </div>

      {/* Real Life Scenarios Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={500}
          height={300}
          description="Collage of real life scenarios - work stress, travel, family chaos - that derail diets"
        />
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className={`bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
              selectedScenario === scenario.id
                ? 'border-blue-500 shadow-xl scale-105'
                : 'border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300'
            }`}
            onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">{scenario.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1e293b' }}>
                {scenario.title}
              </h3>
              <p className="text-sm font-medium" style={{ color: '#6b7280' }}>
                {scenario.description}
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                Click to see the breakdown
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Stack Layout */}
      <div className="md:hidden space-y-4 max-w-lg mx-auto mb-12">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className={`bg-white border-2 rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
              selectedScenario === scenario.id
                ? 'border-blue-500 shadow-lg'
                : 'border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300'
            }`}
            onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{scenario.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold" style={{ color: '#1e293b' }}>
                  {scenario.title}
                </h3>
                <p className="text-sm" style={{ color: '#6b7280' }}>
                  {scenario.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Scenario Details */}
      {selectedScenario && (
        <div className="max-w-4xl mx-auto mb-12">
          {scenarios.filter(s => s.id === selectedScenario).map((scenario) => (
            <div key={scenario.id} className="bg-gray-50 border-2 border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#1e293b' }}>
                {scenario.icon} {scenario.title} Breakdown
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* The Situation */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#6b7280' }}>
                    The Situation
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                    {scenario.situation}
                  </p>
                </div>

                {/* How Traditional Diets Fail */}
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#dc2626' }}>
                    How Diets Fail Here
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                    {scenario.traditionalFailure}
                  </p>
                </div>

                {/* System Solution */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#16a34a' }}>
                    System Solution
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                    {scenario.systemSolution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Key Insight */}
      <div className="text-center">
        <div className="max-w-3xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            Notice the pattern? Traditional diets assume perfect conditions.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#16a34a' }}>
            But behavior systems are engineered for real life&apos;s chaos.
          </p>
        </div>
      </div>
    </div>
  )
}