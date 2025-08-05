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
      position: { desktop: '', mobile: 1 }, // Will be calculated
      industryMessage: '"This revolutionary approach will finally work for you!"',
      reality: 'Every diet markets itself as different, but they all ignore life mechanics.',
      color: '#16a34a'
    },
    {
      id: 'life-messy',
      title: 'Life Gets Messy',
      position: { desktop: '', mobile: 2 }, // Will be calculated
      industryMessage: '"Just stick to the plan, you can do this!"',
      reality: 'Real life emerges: stress, travel, illness, family drama. The plan doesn\'t account for any of it.',
      color: '#d97706'
    },
    {
      id: 'cant-maintain',
      title: 'Can\'t Maintain',
      position: { desktop: '', mobile: 3 }, // Will be calculated
      industryMessage: '"You just need more willpower and discipline."',
      reality: 'No amount of willpower can overcome a system designed for perfect conditions.',
      color: '#dc2626'
    },
    {
      id: 'blame-self',
      title: 'Blame Yourself',
      position: { desktop: '', mobile: 4 }, // Will be calculated
      industryMessage: '"The program works, you must have done something wrong."',
      reality: 'The system failed you, but the industry frames it as your personal failure.',
      color: '#dc2626'
    },
    {
      id: 'research-again',
      title: 'Research Again',
      position: { desktop: '', mobile: 5 }, // Will be calculated
      industryMessage: '"Try this new approach that\'s completely different!"',
      reality: 'Different marketing, same fundamental flaw: ignoring how behavior change actually works.',
      color: '#6b7280'
    }
  ]

  // Calculate positions for equal distribution around circle
  const getCirclePosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2 // Start at top
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    return { x, y, angle }
  }

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
        <div className="relative w-[500px] h-[500px] mx-auto mb-12">
          {/* Circular background guide */}
          <div className="absolute inset-0 border-2 border-gray-200 rounded-full opacity-30"></div>
          
          {/* Center insight */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 z-20"
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

          {/* Cycle stages and arrows */}
          {stages.map((stage, index) => {
            const radius = 200 // Distance from center - moved further out
            const position = getCirclePosition(index, stages.length, radius)
            const nextIndex = (index + 1) % stages.length
            const nextPosition = getCirclePosition(nextIndex, stages.length, radius)
            
            return (
              <div key={stage.id}>
                {/* Stage circle */}
                <div
                  className={`absolute w-20 h-20 cursor-pointer transition-all duration-300 z-10 ${
                    selectedStage === stage.id ? 'scale-110' : 'hover:scale-105'
                  }`}
                  style={{
                    left: `calc(50% + ${position.x}px - 40px)`,
                    top: `calc(50% + ${position.y}px - 40px)`
                  }}
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
                    <span className="text-xs font-bold text-center px-1 leading-tight">
                      {stage.title}
                    </span>
                  </div>
                </div>

                {/* Arrow segment on perfect circle */}
                <svg 
                  className="absolute top-0 left-0 w-full h-full pointer-events-none z-5"
                  style={{ overflow: 'visible' }}
                >
                  <circle
                    cx="250"
                    cy="250" 
                    r="150"
                    stroke={stage.color}
                    strokeWidth="4"
                    fill="none"
                    opacity="0.9"
                    strokeDasharray={`${(2 * Math.PI * 150) / stages.length * 0.8} ${(2 * Math.PI * 150) / stages.length * 0.2}`}
                    strokeDashoffset={`${-index * (2 * Math.PI * 150) / stages.length}`}
                    transform={`rotate(${(360 / stages.length * index)} 250 250)`}
                  />
                  
                  {/* Arrowhead positioned at end of each segment */}
                  <g transform={`rotate(${(360 / stages.length * (index + 0.8))} 250 250)`}>
                    <polygon
                      points="0,-6 12,0 0,6"
                      fill="#6b7280"
                      opacity="0.9"
                      transform={`translate(${250 + 150}, 250) rotate(90)`}
                    />
                  </g>
                </svg>
              </div>
            )
          })}
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