'use client'

import { useState } from 'react'

interface RolloutPhase {
  id: string
  title: string
  subtitle: string
  status: 'available' | 'coming' | 'planned' | 'future'
  description: string
  details: string[]
  color: string
}

const rolloutPhases: RolloutPhase[] = [
  {
    id: 'phase-1',
    title: 'Phase 1',
    subtitle: 'Available Now',
    status: 'available',
    description: 'Major metropolitan areas in North America',
    details: [
      'Currently accepting applications',
      'Limited spots remaining indicator',
      'Priority review process active'
    ],
    color: '#22c55e'
  },
  {
    id: 'phase-2',
    title: 'Phase 2', 
    subtitle: 'Opening Q2 2025',
    status: 'coming',
    description: 'Additional US cities and select international',
    details: [
      'Join waitlist for priority access',
      'Estimated opening timeline: April 2025',
      'Notification signup available'
    ],
    color: '#3b82f6'
  },
  {
    id: 'phase-3',
    title: 'Phase 3',
    subtitle: 'Planned Q3-Q4 2025', 
    status: 'planned',
    description: 'Broader geographic expansion',
    details: [
      'Express interest for future availability',
      'European and Australian rollout',
      'Capacity dependent on Phase 1-2 success'
    ],
    color: '#f59e0b'
  },
  {
    id: 'phase-4',
    title: 'Phase 4',
    subtitle: 'Future',
    status: 'future',
    description: 'Global availability',
    details: [
      'Full rollout timeline depends on Phase 1-3 success',
      'Worldwide coaching network',
      'Platform optimization complete'
    ],
    color: '#6b7280'
  }
]

export function GeographicAvailability() {
  const [zipCode, setZipCode] = useState('')
  const [availabilityResult, setAvailabilityResult] = useState<string | null>(null)

  const checkAvailability = () => {
    if (!zipCode.trim()) return
    
    // Simple mock logic for availability check
    const code = zipCode.replace(/\s+/g, '').toLowerCase()
    if (/^[0-9]{5}/.test(code)) {
      // US ZIP codes
      if (['10001', '10002', '90210', '60601', '94102', '33101', '77001', '98101', '30301', '19101'].some(zip => code.startsWith(zip.slice(0, 3)))) {
        setAvailabilityResult('✅ Phase 1 Available - Limited spots remaining')
      } else {
        setAvailabilityResult('⏳ Phase 2 - Join waitlist for priority access (Q2 2025)')
      }
    } else if (/^[a-z][0-9][a-z][0-9][a-z][0-9]/.test(code)) {
      // Canadian postal codes
      setAvailabilityResult('⏳ Phase 2 - Join waitlist for priority access (Q2 2025)')
    } else {
      setAvailabilityResult('📍 Phase 3+ - Express interest for future availability')
    }
  }

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          Current Rollout Status
        </h2>
        <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto" style={{ color: '#475569' }}>
          We&apos;re expanding carefully, region by region, to ensure every participant gets the full attention of our breakthrough methodology.
        </p>
      </div>

      {/* Interactive Map Placeholder */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#1e293b' }}>
                Geographic Rollout Map
              </h3>
              <p className="text-base md:text-lg" style={{ color: '#475569' }}>
                Click regions to see availability status and estimated timelines
              </p>
            </div>
            
            {/* Mock Interactive Map */}
            <div className="h-64 md:h-80 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 mb-6">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="#9ca3af" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-lg font-medium text-gray-600">Interactive Map Visualization</p>
                <p className="text-sm text-gray-500 mt-2">Clickable regions showing rollout phases</p>
              </div>
            </div>

            {/* Zip Code Checker */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg md:text-xl font-bold mb-4 text-center" style={{ color: '#1e293b' }}>
                Check Your Area Availability
              </h4>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Enter ZIP/Postal Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-lg text-gray-900 placeholder:text-gray-500"
                />
                <button
                  onClick={checkAvailability}
                  className="px-6 py-3 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors duration-200"
                  style={{ backgroundColor: '#0284c7' }}
                >
                  Check
                </button>
              </div>
              {availabilityResult && (
                <div className="mt-4 p-4 bg-white rounded-lg border-2 border-primary-200 text-center">
                  <p className="text-lg font-medium" style={{ color: '#1e293b' }}>
                    {availabilityResult}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Phase Details Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rolloutPhases.map((phase) => (
            <div
              key={phase.id}
              className="bg-white border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border-gray-200"
            >
              <div className="flex justify-center mb-4">
                <span 
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${
                    phase.status === 'available' 
                      ? 'bg-green-100 text-green-800'
                      : phase.status === 'coming'
                      ? 'bg-blue-100 text-blue-800' 
                      : phase.status === 'planned'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {phase.status}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#1e293b' }}>
                {phase.title}
              </h3>
              <p className="text-base md:text-lg font-medium mb-3" style={{ color: '#0284c7' }}>
                {phase.subtitle}
              </p>
              <p className="text-sm md:text-base" style={{ color: '#475569' }}>
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 max-w-3xl mx-auto">
          <h4 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#1e293b' }}>
            Limited Capacity by Design
          </h4>
          <p className="text-base md:text-lg" style={{ color: '#475569' }}>
            Our geographic rollout ensures every participant receives intensive coaching support. We&apos;d rather help fewer people achieve lasting transformation than compromise the system that makes it possible.
          </p>
        </div>
      </div>
    </div>
  )
}