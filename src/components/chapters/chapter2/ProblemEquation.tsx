'use client'

import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

export function ProblemEquation() {

  const wrongApproachItems = [
    'Keto', 'Paleo', 'Intermittent Fasting', 'Macros', 'Plant-Based', 'Low-Carb'
  ]

  const rightApproachItems = [
    'Stress eating', 'Travel disruption', 'Family chaos', 'Work pressure', 'Emotional triggers', 'Schedule conflicts'
  ]

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          The Wrong Equation vs. What You Actually Need
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          The industry focuses on the wrong side of the problem
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
        {/* Wrong Approach - Left Side */}
        <div className="bg-white border-2 border-red-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍎</span>
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#dc2626' }}>
              What to Eat
            </h3>
            <p className="text-base font-medium" style={{ color: '#6b7280' }}>
              (Body Mechanics)
            </p>
          </div>

          <div className="space-y-3">
            {wrongApproachItems.map((item, index) => (
              <div key={index} 
                className="bg-red-50 border border-red-200 rounded-lg p-3 text-center font-medium hover:bg-red-100 hover:border-red-300 hover:scale-105 transition-all duration-200 cursor-pointer"
                style={{ color: '#dc2626' }}
              >
                • {item}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm font-medium" style={{ color: '#dc2626' }}>
              This is what every diet program focuses on. But you probably already know this stuff, don&apos;t you?
            </p>
          </div>
        </div>

        {/* Right Approach - Right Side */}
        <div className="bg-white border-2 border-blue-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#0284c7' }}>
              What Derails You
            </h3>
            <p className="text-base font-medium" style={{ color: '#6b7280' }}>
              (Life Mechanics)
            </p>
          </div>

          <div className="space-y-3">
            {rightApproachItems.map((item, index) => (
              <div key={index} 
                className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center font-medium hover:bg-blue-100 hover:border-blue-300 hover:scale-105 transition-all duration-200 cursor-pointer"
                style={{ color: '#0284c7' }}
              >
                • {item}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-medium" style={{ color: '#0284c7' }}>
              This is where you actually need help. This is where diets fall apart in real life.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden max-w-lg mx-auto space-y-6">
        {/* Wrong Approach */}
        <div className="bg-white border-2 border-red-300 rounded-2xl p-6 shadow-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍎</span>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#dc2626' }}>
              What to Eat (Body Mechanics)
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {wrongApproachItems.map((item, index) => (
              <div key={index} 
                className="bg-red-50 border border-red-200 rounded-lg p-2 text-center text-sm font-medium"
                style={{ color: '#dc2626' }}
              >
                • {item}
              </div>
            ))}
          </div>
        </div>

        {/* VS Separator */}
        <div className="text-center">
          <div className="inline-block bg-gray-100 border-2 border-gray-300 rounded-full px-6 py-2">
            <span className="text-lg font-bold" style={{ color: '#6b7280' }}>VS</span>
          </div>
        </div>

        {/* Right Approach */}
        <div className="bg-white border-2 border-blue-300 rounded-2xl p-6 shadow-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#0284c7' }}>
              What Derails You (Life Mechanics)
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {rightApproachItems.map((item, index) => (
              <div key={index} 
                className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center text-sm font-medium"
                style={{ color: '#0284c7' }}
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting Image */}
      <div className="flex justify-center mt-8">
        <ImagePlaceholder 
          width={400}
          height={200}
          description="Split illustration showing diet plans vs real life scenarios - emphasizes the disconnect"
        />
      </div>

      <div className="text-center mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-200 max-w-3xl mx-auto">
          <p className="text-lg font-medium" style={{ color: '#1e293b' }}>
            Notice the gap? The industry gives you solutions for problems you don&apos;t have, 
            while ignoring the problems that actually derail you.
          </p>
        </div>
      </div>
    </div>
  )
}