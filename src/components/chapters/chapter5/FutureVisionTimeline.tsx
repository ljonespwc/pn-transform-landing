'use client'

interface TimelinePhase {
  id: string
  year: string
  title: string
  subtitle: string
  description: string
  milestones: string[]
  color: string
  bgColor: string
  position: 'left' | 'right'
}

const timelinePhases: TimelinePhase[] = [
  {
    id: 'beta-expansion',
    year: '2025',
    title: 'Beta Expansion',
    subtitle: 'Proving the System Works',
    description: 'Validate breakthrough technology with real-world results',
    milestones: [
      'Prove the system works at scale',
      'Refine technology based on real-world use', 
      'Build community of successful transformations',
      'Establish coaching network foundation'
    ],
    color: '#0284c7',
    bgColor: '#dbeafe',
    position: 'left'
  },
  {
    id: 'platform-launch',
    year: '2026', 
    title: 'Platform Launch',
    subtitle: 'Ready for the World',
    description: 'Full platform available to general public',
    milestones: [
      'Full platform available to general public',
      'AI capabilities enhanced with beta learnings',
      'Coaching network expanded nationally',
      'Advanced features based on founding member feedback'
    ],
    color: '#059669',
    bgColor: '#dcfce7',
    position: 'right'
  },
  {
    id: 'industry-transformation',
    year: '2027+',
    title: 'Industry Transformation', 
    subtitle: 'The Revolution Begins',
    description: 'Behavior change revolution reaches mainstream',
    milestones: [
      'Behavior change revolution reaches mainstream',
      'Traditional diet industry forced to adapt',
      'Global expansion and accessibility',
      'You were part of the breakthrough from the beginning'
    ],
    color: '#7c3aed',
    bgColor: '#ede9fe',
    position: 'left'
  }
]

export function FutureVisionTimeline() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          The Future of Behavior Change Starts Here
        </h2>
        <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto" style={{ color: '#475569' }}>
          You&apos;re not just joining a program—you&apos;re becoming part of a movement that will transform how people change forever.
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:block max-w-6xl mx-auto">
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 rounded-full" />
          
          <div className="space-y-24">
            {timelinePhases.map((phase) => (
              <div key={phase.id} className="relative">
                {/* Timeline Node */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
                  style={{ backgroundColor: phase.color }}
                />
                
                {/* Content Card */}
                <div className={`w-5/12 ${phase.position === 'left' ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}>
                  <div 
                    className="rounded-2xl p-8 shadow-lg border-2 relative"
                    style={{ 
                      backgroundColor: phase.bgColor,
                      borderColor: phase.color
                    }}
                  >
                    {/* Arrow Pointer */}
                    <div 
                      className={`absolute top-8 w-4 h-4 transform rotate-45 border-2 ${
                        phase.position === 'left' 
                          ? 'right-[-10px] border-r-0 border-b-0' 
                          : 'left-[-10px] border-l-0 border-t-0'
                      }`}
                      style={{ 
                        backgroundColor: phase.bgColor,
                        borderColor: phase.color
                      }}
                    />
                    
                    <div className="mb-6">
                      <div 
                        className="text-4xl md:text-5xl font-black mb-2"
                        style={{ color: phase.color }}
                      >
                        {phase.year}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1e293b' }}>
                        {phase.title}
                      </h3>
                      <p 
                        className="text-lg md:text-xl font-medium mb-4"
                        style={{ color: phase.color }}
                      >
                        {phase.subtitle}
                      </p>
                      <p className="text-base md:text-lg" style={{ color: '#475569' }}>
                        {phase.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {phase.milestones.map((milestone, milestoneIndex) => (
                        <li key={milestoneIndex} className="flex items-start space-x-3">
                          <div 
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: phase.color }}
                          />
                          <p className="text-base md:text-lg font-medium" style={{ color: '#1e293b' }}>
                            {milestone}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden max-w-2xl mx-auto">
        <div className="relative">
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 rounded-full" />
          
          <div className="space-y-16">
            {timelinePhases.map((phase, index) => (
              <div key={phase.id} className="relative pl-20">
                {/* Mobile Timeline Node */}
                <div 
                  className="absolute left-6 w-6 h-6 rounded-full border-4 border-white shadow-lg"
                  style={{ backgroundColor: phase.color }}
                />
                
                {/* Mobile Content Card */}
                <div 
                  className="rounded-2xl p-6 shadow-lg border-2"
                  style={{ 
                    backgroundColor: phase.bgColor,
                    borderColor: phase.color
                  }}
                >
                  <div className="mb-6">
                    <div 
                      className="text-3xl md:text-4xl font-black mb-2"
                      style={{ color: phase.color }}
                    >
                      {phase.year}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#1e293b' }}>
                      {phase.title}
                    </h3>
                    <p 
                      className="text-base md:text-lg font-medium mb-4"
                      style={{ color: phase.color }}
                    >
                      {phase.subtitle}
                    </p>
                    <p className="text-sm md:text-base" style={{ color: '#475569' }}>
                      {phase.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <li key={milestoneIndex} className="flex items-start space-x-3">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: phase.color }}
                        />
                        <p className="text-sm md:text-base font-medium" style={{ color: '#1e293b' }}>
                          {milestone}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Mobile Arrow Down */}
                {index < timelinePhases.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="#6b7280" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pioneer Recognition */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Your Legacy as a Founding Member
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-4xl">🏆</div>
              <h4 className="text-xl font-bold text-yellow-300">Pioneer Status</h4>
              <p className="text-sm md:text-base text-gray-300">
                Forever recognized as one of the first to prove this breakthrough works in real life
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl">🚀</div>
              <h4 className="text-xl font-bold text-blue-300">Shape the Future</h4>
              <p className="text-sm md:text-base text-gray-300">
                Your feedback and results directly influence how millions of people will transform their lives
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl">💫</div>
              <h4 className="text-xl font-bold text-purple-300">Industry Impact</h4>
              <p className="text-sm md:text-base text-gray-300">
                Be part of the movement that forces the entire diet industry to evolve or become obsolete
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6">
            <blockquote className="text-lg md:text-xl italic">
              &quot;Founding members will be recognized as the pioneers who proved this breakthrough works in real life. You&apos;re not just changing your own life—you&apos;re helping revolutionize how people change.&quot;
            </blockquote>
            <p className="text-sm md:text-base mt-4 text-blue-200">
              — The PN Transform Team
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Bridge */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border-2 border-primary-200 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1e293b' }}>
            The Future Starts With Your Decision Today
          </h3>
          <p className="text-lg md:text-xl font-medium" style={{ color: '#475569' }}>
            Join the exclusive group of founding members who will make behavior change history. Limited spots available in Phase 1 rollout.
          </p>
        </div>
      </div>
    </div>
  )
}