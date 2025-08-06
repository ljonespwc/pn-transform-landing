'use client'

import { useState, useEffect } from 'react'

interface CommunityBenefit {
  id: string
  title: string
  benefits: string[]
  icon: string
  color: string
}

const communityBenefits: CommunityBenefit[] = [
  {
    id: 'first-access',
    title: 'First Access',
    benefits: [
      'Try the breakthrough before anyone else',
      'Shape the future of the platform with your feedback', 
      'Lifetime founding member status'
    ],
    icon: '🚀',
    color: '#0284c7'
  },
  {
    id: 'direct-support',
    title: 'Direct Support',
    benefits: [
      'Priority coaching access and support',
      'Direct line to the development team',
      'Exclusive member-only events and resources'
    ],
    icon: '🤝',
    color: '#059669'
  },
  {
    id: 'community-connection',
    title: 'Community Connection',
    benefits: [
      'Connect with other successful transformation stories',
      'Private community of people who &quot;get it&quot;',
      'Share experiences with others on the same journey'
    ],
    icon: '🌟',
    color: '#dc2626'
  },
  {
    id: 'future-benefits',
    title: 'Future Benefits', 
    benefits: [
      'Grandfathered pricing as we expand',
      'Early access to new features and capabilities',
      'Recognition as pioneer in behavior change revolution'
    ],
    icon: '💎',
    color: '#7c3aed'
  }
]

export function ExclusiveCommunity() {
  const [memberCount, setMemberCount] = useState(147)
  
  // Simulate live counter with slow incremental updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 5 seconds
        setMemberCount(prev => prev + 1)
      }
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          Join the Founding Members
        </h2>
        <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto" style={{ color: '#475569' }}>
          Be part of the exclusive community that&apos;s proving this breakthrough works in real life.
        </p>
      </div>

      {/* Member Counter */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border-2 border-primary-200">
          <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: '#0284c7' }}>
            {memberCount}
          </div>
          <p className="text-lg md:text-xl font-bold" style={{ color: '#1e293b' }}>
            Founding Members and Counting
          </p>
          <p className="text-sm md:text-base font-medium mt-2" style={{ color: '#475569' }}>
            Join this exclusive group before we reach capacity
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityBenefits.slice(0, 3).map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#1e293b' }}>
                  {benefit.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {benefit.benefits.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: benefit.color }}
                    />
                    <p className="text-base md:text-lg font-medium" style={{ color: '#475569' }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Future Benefits - Full Width */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">{communityBenefits[3].icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1e293b' }}>
                {communityBenefits[3].title}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {communityBenefits[3].benefits.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-purple-200">
                  <div className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: communityBenefits[3].color }}
                    />
                    <p className="text-base md:text-lg font-medium" style={{ color: '#1e293b' }}>
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Community Exclusivity */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Why Founding Member Status Matters
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-300">Today</h4>
              <ul className="space-y-2 text-left">
                <li>• Exclusive access to breakthrough technology</li>
                <li>• Direct influence on platform development</li>
                <li>• Intensive coaching support</li>
                <li>• Private founding member community</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-300">Future</h4>
              <ul className="space-y-2 text-left">
                <li>• Lifetime priority status</li>
                <li>• Grandfathered pricing forever</li>
                <li>• Recognition as behavior change pioneer</li>
                <li>• Early access to all new features</li>
              </ul>
            </div>
          </div>

          <blockquote className="text-lg md:text-xl italic border-l-4 border-blue-400 pl-6 text-gray-200">
            &quot;Founding members will be recognized as the pioneers who proved this breakthrough works in real life. You&apos;re not just changing your own life—you&apos;re helping revolutionize how people change.&quot;
          </blockquote>
        </div>
      </div>

      {/* Social Proof */}
      <div className="text-center mt-12">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-black mb-2" style={{ color: '#059669' }}>
                4.9/5
              </div>
              <p className="text-sm md:text-base font-medium" style={{ color: '#1e293b' }}>
                Average satisfaction rating from beta participants
              </p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black mb-2" style={{ color: '#059669' }}>
                94%
              </div>
              <p className="text-sm md:text-base font-medium" style={{ color: '#1e293b' }}>
                Of assessed candidates receive program acceptance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}