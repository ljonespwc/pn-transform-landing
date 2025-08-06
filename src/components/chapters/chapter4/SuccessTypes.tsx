'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface SuccessCategory {
  id: string
  title: string
  description: string
  benefits: string[]
  examples: string[]
  icon: string
  color: {
    bg: string
    border: string
    text: string
    accent: string
  }
}

const successCategories: SuccessCategory[] = [
  {
    id: 'weightloss',
    title: 'Weight Loss Focused',
    description: 'Sustainable weight management without the deprivation cycle',
    benefits: [
      'Lost 30-80 pounds without feeling deprived',
      'Finally broke through longtime plateaus',
      'Maintained loss for first time in years'
    ],
    examples: [
      '"I lost 50 pounds and it didn\'t feel like dieting" - David',
      '"Broke through a 2-year plateau in 6 weeks" - Amanda',
      '"First time I\'m not afraid of gaining it back" - Steve'
    ],
    icon: '⚖️',
    color: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      text: 'text-blue-700',
      accent: '#3b82f6'
    }
  },
  {
    id: 'behavior',
    title: 'Behavior Transformation',
    description: 'Breaking free from destructive eating patterns and habits',
    benefits: [
      'Stopped emotional eating patterns',
      'No more Sunday night panic about Monday',
      'Built exercise habits that actually stick'
    ],
    examples: [
      '"I don\'t stress eat anymore, even during work crises" - Jennifer',
      '"My coach helped me turn Sunday meal prep from stressful to enjoyable" - Carlos',
      '"Exercise feels automatic now, not forced" - Lisa'
    ],
    icon: '🔄',
    color: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-700',
      accent: '#10b981'
    }
  },
  {
    id: 'integration',
    title: 'Life Integration',
    description: 'Health that works seamlessly with your actual lifestyle',
    benefits: [
      'Health fits seamlessly into busy schedule',
      'Family meals became enjoyable, not stressful',
      'Travel and social events no longer derail progress'
    ],
    examples: [
      '"Client dinners and travel don\'t affect my results" - Mark',
      '"Family dinners are fun again, not food battles" - Maria',
      '"Vacation habits are as good as home habits" - Rachel'
    ],
    icon: '🏠',
    color: {
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      text: 'text-orange-700',
      accent: '#f59e0b'
    }
  },
  {
    id: 'energy',
    title: 'Energy & Confidence',
    description: 'Mental and physical transformation beyond the scale',
    benefits: [
      'More energy for work and family',
      'Stopped food obsession, mental freedom',
      'Confidence in ability to maintain changes'
    ],
    examples: [
      '"I have energy for evening activities with my kids" - Tom',
      '"Food thoughts don\'t consume my day anymore" - Sarah',
      '"I trust myself around food for the first time" - Monica'
    ],
    icon: '⚡',
    color: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-300',
      text: 'text-yellow-700',
      accent: '#eab308'
    }
  },
  {
    id: 'health',
    title: 'Health Improvements',
    description: 'Measurable improvements in overall health and wellness',
    benefits: [
      'Better sleep, stable energy throughout day',
      'Reduced stress, improved mood',
      'Lab results improved across the board'
    ],
    examples: [
      '"Doctor was shocked at my yearly labs" - David',
      '"I sleep through the night consistently now" - Linda',
      '"Mood swings are completely gone" - Kevin'
    ],
    icon: '❤️',
    color: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      text: 'text-red-700',
      accent: '#ef4444'
    }
  },
  {
    id: 'relationship',
    title: 'Relationship with Food',
    description: 'Healing your connection with food and eating',
    benefits: [
      'Food is fuel and enjoyment, not anxiety',
      'Trust body signals for first time in years',
      'No more guilt or shame around eating'
    ],
    examples: [
      '"Food is finally just food—not emotional drama" - Jennifer',
      '"I can eat dessert without spiral thoughts" - Patricia',
      '"My kids see a healthy relationship with eating" - Maria'
    ],
    icon: '🤝',
    color: {
      bg: 'bg-purple-50',
      border: 'border-purple-300',
      text: 'text-purple-700',
      accent: '#8b5cf6'
    }
  }
]

export function SuccessTypes() {
  const [activeCategory, setActiveCategory] = useState<string>('weightloss')

  const activeCategoryData = successCategories.find(cat => cat.id === activeCategory)

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          Success Looks Different for Everyone
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          Your transformation might look different, but the system works for everyone
        </p>
      </div>


      {/* Desktop Layout - 2x3 Grid */}
      <div className="hidden md:block mb-12">
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {successCategories.map((category) => (
            <div
              key={category.id}
              className={`cursor-pointer transition-all duration-300 rounded-2xl border-2 p-6 ${
                activeCategory === category.id
                  ? `${category.color.bg} ${category.color.border} shadow-xl scale-105`
                  : 'bg-white border-gray-200 shadow-md hover:shadow-lg hover:scale-102'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`text-lg font-bold mb-3 ${activeCategory === category.id ? category.color.text : 'text-gray-700'}`}>
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#1e293b' }}>
                  {category.description}
                </p>
                <ul className="text-xs space-y-1 text-left">
                  {category.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span style={{ color: '#475569' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Stacked Cards */}
      <div className="md:hidden max-w-sm mx-auto mb-12">
        <div className="space-y-4">
          {successCategories.map((category) => (
            <div
              key={category.id}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color.bg} ${category.color.border} shadow-lg`
                  : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{category.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold mb-2 ${activeCategory === category.id ? category.color.text : 'text-gray-700'}`}>
                    {category.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Category Details */}
      {activeCategoryData && (
        <div className="max-w-5xl mx-auto mb-12">
          <div className={`${activeCategoryData.color.bg} border-2 ${activeCategoryData.color.border} rounded-2xl p-8 shadow-lg`}>
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">{activeCategoryData.icon}</div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${activeCategoryData.color.text}`}>
                {activeCategoryData.title}
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: '#475569' }}>
                {activeCategoryData.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="text-lg font-bold mb-4" style={{ color: '#6b7280' }}>
                  Typical Results
                </h4>
                <ul className="space-y-3">
                  {activeCategoryData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-0.5">✓</span>
                      <span className="text-base text-left" style={{ color: '#1e293b' }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real Examples */}
              <div className={`bg-white rounded-xl p-6 border-2 ${activeCategoryData.color.border}`}>
                <h4 className={`text-lg font-bold mb-4 ${activeCategoryData.color.text}`}>
                  What People Say
                </h4>
                <div className="space-y-4">
                  {activeCategoryData.examples.map((example, index) => (
                    <blockquote 
                      key={index}
                      className="text-sm italic leading-relaxed p-3 bg-gray-50 rounded-lg border-l-4"
                      style={{ borderLeftColor: activeCategoryData.color.accent }}
                    >
                      <span style={{ color: '#1e293b' }}>{example}</span>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Gallery Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={600}
          height={200}
          description="Collage showing different types of success - scale victories, energy improvements, confidence, health metrics"
        />
      </div>

      {/* Key Message */}
      <div className="text-center">
        <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            Your definition of success might be completely different from these examples.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
            That&apos;s exactly why TransformOS adapts to <em>your</em> goals and <em>your</em> life.
          </p>
        </div>
      </div>
    </div>
  )
}