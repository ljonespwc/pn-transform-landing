'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface EcosystemElement {
  id: string
  title: string
  description: string
  contribution: string
  features: string[]
  color: string
  icon: string
  position: {
    desktop: string
    mobile: number
  }
}

const ecosystemElements: EcosystemElement[] = [
  {
    id: 'transform-os',
    title: 'TransformOS AI',
    description: 'Intelligent behavior change technology',
    contribution: 'Handles anticipation, intervention, and encouragement automatically',
    features: [
      'Predicts challenges 72 hours in advance',
      'Delivers real-time personalized support',
      'Creates sustainable motivation patterns',
      'Learns from 175,000+ client database'
    ],
    color: '#0284c7',
    icon: '🤖',
    position: {
      desktop: 'top-2 left-1/2 transform -translate-x-1/2',
      mobile: 1
    }
  },
  {
    id: 'pn-method',
    title: 'PN Method Coaching',
    description: 'Human guidance with proven methodology',
    contribution: 'Builds awareness first, food choices second',
    features: [
      '20 years of coaching methodology',
      'Behavior-first approach',
      'Human coach integration',
      'Real-world application focus'
    ],
    color: '#16a34a',
    icon: '👨‍🏫',
    position: {
      desktop: 'top-12 right-8',
      mobile: 2
    }
  },
  {
    id: 'life-context',
    title: 'Life Context Adaptation',
    description: 'Real-world circumstance handling',
    contribution: 'Adapts to your actual life, not fantasy conditions',
    features: [
      'Stress situation protocols',
      'Travel adaptation strategies',
      'Social event navigation',
      'Family dynamic integration'
    ],
    color: '#dc2626',
    icon: '🌍',
    position: {
      desktop: 'bottom-8 right-12',
      mobile: 3
    }
  },
  {
    id: 'motivation-system',
    title: 'Motivation Personalization',
    description: 'Individual psychology optimization',
    contribution: 'Discovers what makes healthy choices irresistible for you',
    features: [
      'Personality-based encouragement',
      'Learning motivation patterns',
      'Adaptive reinforcement timing',
      '73% higher adherence rates'
    ],
    color: '#7c3aed',
    icon: '💜',
    position: {
      desktop: 'bottom-8 left-12',
      mobile: 4
    }
  },
  {
    id: 'pattern-recognition',
    title: 'Pattern Recognition',
    description: 'Data-driven behavior insights',
    contribution: 'Learns from massive client database to predict your success patterns',
    features: [
      '175,000+ client success patterns',
      'Habit obstacle identification',
      'Success factor analysis',
      'Predictive behavior modeling'
    ],
    color: '#f59e0b',
    icon: '📊',
    position: {
      desktop: 'top-12 left-8',
      mobile: 5
    }
  }
]

const successFactors = [
  'Technology + Human integration',
  'Behavior-first methodology',
  'Personalized motivation system',
  'Real-world stress testing',
  'Massive data learning advantage'
]

export function AdherenceEcosystem() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null)

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          Complete Support System
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          Five integrated elements that make success inevitable
        </p>
      </div>

      {/* Ecosystem Overview Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={500}
          height={250}
          description="Complex ecosystem diagram or interconnected network - represents integrated system approach"
        />
      </div>

      {/* Desktop Interconnected Diagram */}
      <div className="hidden md:block mb-12">
        <div className="relative w-96 h-96 mx-auto">
          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
            <div className="text-center">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-white text-sm font-bold">87%</div>
              <div className="text-white text-xs">Success</div>
            </div>
          </div>

          {/* Ecosystem Elements */}
          {ecosystemElements.map((element, index) => (
            <div key={element.id}>
              {/* Element Circle */}
              <div
                className={`absolute w-24 h-24 ${element.position.desktop} cursor-pointer transition-all duration-300 ${
                  selectedElement === element.id ? 'scale-110 z-10' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedElement(selectedElement === element.id ? null : element.id)}
              >
                <div 
                  className="w-full h-full rounded-full border-4 flex items-center justify-center shadow-lg font-bold"
                  style={{ 
                    backgroundColor: selectedElement === element.id ? element.color : '#ffffff',
                    borderColor: element.color,
                    color: selectedElement === element.id ? '#ffffff' : element.color
                  }}
                >
                  <div className="text-center">
                    <div className="text-lg">{element.icon}</div>
                    <div className="text-xs leading-tight">{element.title.split(' ')[0]}</div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Mobile Simplified Flow */}
      <div className="md:hidden max-w-sm mx-auto mb-12">
        <div className="space-y-4">
          {ecosystemElements.map((element, index) => (
            <div key={element.id}>
              <div
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedElement === element.id
                    ? 'shadow-xl scale-105'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
                style={{ 
                  backgroundColor: selectedElement === element.id ? `${element.color}20` : 'white',
                  borderColor: element.color
                }}
                onClick={() => setSelectedElement(selectedElement === element.id ? null : element.id)}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: element.color }}
                  >
                    {element.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold" style={{ color: element.color }}>
                      {element.title}
                    </h3>
                    <p className="text-sm" style={{ color: '#6b7280' }}>
                      {element.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Connection Arrow */}
              {index < ecosystemElements.length - 1 && (
                <div className="flex justify-center py-2">
                  <div 
                    className="w-1 h-6 rounded"
                    style={{ backgroundColor: element.color, opacity: 0.6 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Element Details */}
      {selectedElement && (
        <div className="max-w-4xl mx-auto mb-12">
          {ecosystemElements.filter(element => element.id === selectedElement).map((element) => (
            <div 
              key={element.id}
              className="border-2 rounded-2xl p-8 shadow-lg"
              style={{ 
                backgroundColor: `${element.color}10`,
                borderColor: element.color
              }}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{element.icon}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: element.color }}>
                  {element.title}
                </h3>
                <p className="text-lg" style={{ color: '#6b7280' }}>
                  {element.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Contribution */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: element.color }}>
                    How It Contributes
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                    {element.contribution}
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#1e293b' }}>
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {element.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div 
                          className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1"
                          style={{ backgroundColor: element.color }}
                        >
                          ✓
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Results Comparison - Prominent Display */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-red-50 via-white to-green-50 border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
              The Success Revolution
            </h3>
            <p className="text-lg" style={{ color: '#6b7280' }}>
              Integrated system vs. traditional approaches
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Traditional */}
            <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200 text-center">
              <div className="text-6xl font-black mb-4 text-red-600">12%</div>
              <div className="text-xl font-bold mb-2 text-red-700">Traditional Approach</div>
              <div className="text-base text-red-600 mb-4">Industry average adherence rate</div>
            </div>
            
            {/* PN Transform */}
            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200 text-center">
              <div className="text-6xl font-black mb-4 text-green-600">87%</div>
              <div className="text-xl font-bold mb-2 text-green-700">PN Transform Ecosystem</div>
              <div className="text-base text-green-600 mb-4">Integrated system adherence rate</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA Insight */}
      <div className="text-center">
        <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            This isn&apos;t about trying harder. It&apos;s about having better support systems.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
            When all five elements work together, success becomes inevitable.
          </p>
        </div>
      </div>
    </div>
  )
}