'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface CycleStage {
  id: string
  title: string
  position: { desktop: string, mobile: number }
  industryMessage: string
  reality: string
  color: string
}

export function BlameCycle() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null)
  const [showCenter, setShowCenter] = useState(false)

  const stages: CycleStage[] = [
    {
      id: 'try-diet',
      title: 'Try New Diet',
      position: { desktop: 'top-0 left-1/2 transform -translate-x-1/2', mobile: 1 },
      industryMessage: '"This revolutionary approach will finally work for you!"',
      reality: 'Every diet markets itself as different, but they all ignore life mechanics.',
      color: '#6b7280'
    },
    {
      id: 'life-messy',
      title: 'Life Gets Messy',
      position: { desktop: 'top-1/4 right-0', mobile: 2 },
      industryMessage: '"Just stick to the plan, you can do this!"',
      reality: 'Real life emerges: stress, travel, illness, family drama. The plan doesn\'t account for any of it.',
      color: '#d97706'
    },
    {
      id: 'cant-maintain',
      title: 'Can\'t Maintain',
      position: { desktop: 'bottom-1/4 right-0', mobile: 3 },
      industryMessage: '"You just need more willpower and discipline."',
      reality: 'No amount of willpower can overcome a system designed for perfect conditions.',
      color: '#dc2626'
    },
    {
      id: 'blame-self',
      title: 'Blame Yourself',
      position: { desktop: 'bottom-0 left-1/2 transform -translate-x-1/2', mobile: 4 },
      industryMessage: '"The program works, you must have done something wrong."',
      reality: 'The system failed you, but the industry frames it as your personal failure.',
      color: '#dc2626'
    },
    {
      id: 'research-again',
      title: 'Research Again',
      position: { desktop: 'bottom-1/4 left-0', mobile: 5 },
      industryMessage: '"Try this new approach that\'s completely different!"',
      reality: 'Different marketing, same fundamental flaw: ignoring how behavior change actually works.',
      color: '#6b7280'
    }
  ]

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          How the Industry Keeps You Coming Back
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          The blame cycle is designed to create repeat customers
        </p>
      </div>

      {/* Cycle Illustration Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={350}
          height={200}
          description="Circular arrows or cycle diagram representing the endless diet cycle trap"
        />
      </div>

      {/* Desktop Circular Layout */}
      <div className="hidden md:block">
        <div className="relative w-96 h-96 mx-auto mb-12">
          {/* Circular background */}
          <div className="absolute inset-0 border-4 border-gray-300 rounded-full opacity-30"></div>
          
          {/* Center insight */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setShowCenter(!showCenter)}
          >
            {showCenter ? (
              <p className="text-sm font-bold text-center px-4" style={{ color: '#0284c7' }}>
                The system is designed to fail, then blame you for failing
              </p>
            ) : (
              <p className="text-base font-bold text-center" style={{ color: '#1e293b' }}>
                Click to reveal the truth
              </p>
            )}
          </div>

          {/* Cycle stages */}
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`absolute w-24 h-24 ${stage.position.desktop} cursor-pointer transition-all duration-300 ${
                selectedStage === stage.id ? 'scale-110 z-10' : 'hover:scale-105'
              }`}
              onClick={() => setSelectedStage(selectedStage === stage.id ? null : stage.id)}
            >
              <div 
                className="w-full h-full rounded-full border-4 flex items-center justify-center shadow-lg"
                style={{ 
                  backgroundColor: selectedStage === stage.id ? stage.color : '#ffffff',
                  borderColor: stage.color,
                  color: selectedStage === stage.id ? '#ffffff' : stage.color
                }}
              >
                <span className="text-xs font-bold text-center px-2">
                  {stage.title}
                </span>
              </div>
              
              {/* Arrow to next stage */}
              <div 
                className="absolute top-1/2 left-full w-8 h-1 transform -translate-y-1/2"
                style={{ backgroundColor: stage.color, opacity: 0.6 }}
              >
                <div 
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-current border-t-transparent border-b-transparent"
                  style={{ color: stage.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Vertical Layout */}
      <div className="md:hidden max-w-lg mx-auto mb-12">
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <div key={stage.id}>
              <div
                className={`bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedStage === stage.id
                    ? 'shadow-xl scale-105'
                    : 'shadow-md hover:shadow-lg'
                }`}
                style={{ borderColor: stage.color }}
                onClick={() => setSelectedStage(selectedStage === stage.id ? null : stage.id)}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm"
                    style={{ backgroundColor: stage.color }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold flex-1" style={{ color: stage.color }}>
                    {stage.title}
                  </h3>
                </div>
              </div>
              
              {/* Arrow to next stage (except last) */}
              {index < stages.length - 1 && (
                <div className="flex justify-center py-2">
                  <div 
                    className="w-1 h-8"
                    style={{ backgroundColor: stage.color, opacity: 0.6 }}
                  ></div>
                </div>
              )}
              
              {/* Last arrow points back to first */}
              {index === stages.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-1 h-4"
                      style={{ backgroundColor: stage.color, opacity: 0.6 }}
                    ></div>
                    <div 
                      className="text-xs font-medium"
                      style={{ color: stage.color }}
                    >
                      Back to Start
                    </div>
                    <div 
                      className="w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent"
                      style={{ borderTopColor: stage.color }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile center insight */}
        <div 
          className="mt-8 bg-blue-50 border-2 border-blue-500 rounded-2xl p-6 cursor-pointer"
          onClick={() => setShowCenter(!showCenter)}
        >
          <div className="text-center">
            {showCenter ? (
              <p className="text-base font-bold" style={{ color: '#0284c7' }}>
                The system is designed to fail, then blame you for failing
              </p>
            ) : (
              <p className="text-base font-bold" style={{ color: '#1e293b' }}>
                Tap to reveal the truth
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Selected Stage Details */}
      {selectedStage && (
        <div className="max-w-3xl mx-auto mb-12">
          {stages.filter(s => s.id === selectedStage).map((stage) => (
            <div 
              key={stage.id} 
              className="bg-white border-2 rounded-2xl p-8 shadow-lg"
              style={{ borderColor: stage.color }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: stage.color }}>
                {stage.title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#dc2626' }}>
                    What The Industry Says
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                    {stage.industryMessage}
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#0284c7' }}>
                    What&apos;s Actually Happening
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                    {stage.reality}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center">
        {showCenter ? (
          <div className="max-w-3xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
            <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
              This cycle generates billions in revenue because it creates repeat customers.
            </p>
            <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
              But behavior systems break this cycle by solving the actual problem.
            </p>
          </div>
        ) : (
          <p className="text-lg" style={{ color: '#6b7280' }}>
            Click any stage above to see the gap between industry messaging and reality.
          </p>
        )}
      </div>
    </div>
  )
}