'use client'

import { useState } from 'react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface SuccessStory {
  id: string
  name: string
  title: string
  imageDescription: string
  challenge: string
  breakthrough: string
  result: string
  timeline: string
  photoWidth: number
  photoHeight: number
}

const successStories: SuccessStory[] = [
  {
    id: 'sarah',
    name: 'Sarah',
    title: 'The Serial Restarter',
    imageDescription: 'Before/after photos of Sarah showing confident transformation',
    challenge: '15 years of diet failures, convinced she was broken',
    breakthrough: 'Coach helped identify Thursday stress-eating pattern using TransformOS data',
    result: '35 pounds lost, feels natural for first time ever',
    timeline: '6 months maintained without struggle',
    photoWidth: 300,
    photoHeight: 400
  },
  {
    id: 'mark',
    name: 'Mark',
    title: 'The Traveling Executive',
    imageDescription: 'Professional headshot of Mark with his family',
    challenge: 'Constant travel, every program failed on business trips',
    breakthrough: 'System adapts to schedule, works in airports and hotels',
    result: 'Maintained through client dinners and family chaos',
    timeline: 'Wife says he\'s a completely different person',
    photoWidth: 300,
    photoHeight: 400
  },
  {
    id: 'jennifer',
    name: 'Jennifer',
    title: 'The Everything Tryer',
    imageDescription: 'Confident after photo of Jennifer looking radiant and happy',
    challenge: 'Tried everything, exhausted from willpower battles',
    breakthrough: 'Healthy choices became automatic, no more white-knuckling',
    result: 'Friends ask what\'s different, feels effortless now',
    timeline: 'It\'s just who I am now',
    photoWidth: 300,
    photoHeight: 400
  },
  {
    id: 'maria',
    name: 'Maria',
    title: 'The Working Mom',
    imageDescription: 'Action shot of Maria with her twins in a happy kitchen scene',
    challenge: 'Twin mom, no time, thought she lacked willpower',
    breakthrough: 'Coach and client built systems that work with chaotic family life',
    result: 'Personal health assistant that never gets overwhelmed',
    timeline: 'Dinner chaos no longer derails healthy eating',
    photoWidth: 300,
    photoHeight: 400
  }
]

export function SuccessStoryCarousel() {
  const [activeStory, setActiveStory] = useState<string>('sarah')

  const activeStoryData = successStories.find(story => story.id === activeStory)

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          Real People, Real Transformations
        </h2>
        <p className="text-lg md:text-xl" style={{ color: '#475569' }}>
          These aren&apos;t testimonials about perfect weeks—they&apos;re stories about lasting change
        </p>
      </div>

      {/* Success Transformation Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={500}
          height={200}
          description="Success transformation montage or celebration collage - represents multiple victories"
          className="my-8"
        />
      </div>

      {/* Desktop Layout - Story Cards */}
      <div className="hidden md:block mb-12">
        <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {successStories.map((story) => (
            <div
              key={story.id}
              className={`cursor-pointer transition-all duration-300 rounded-2xl border-2 p-6 ${
                activeStory === story.id
                  ? 'bg-blue-50 border-blue-300 shadow-xl scale-105'
                  : 'bg-white border-gray-200 shadow-md hover:shadow-lg hover:scale-102'
              }`}
              onClick={() => setActiveStory(story.id)}
            >
              <div className="text-center">
                <ImagePlaceholder
                  width={180}
                  height={240}
                  description={story.imageDescription}
                  className="mx-auto mb-4"
                />
                <h3 className={`text-lg font-bold mb-2 ${activeStory === story.id ? 'text-blue-700' : 'text-gray-700'}`}>
                  {story.name}
                </h3>
                <p className={`text-sm font-medium mb-3 ${activeStory === story.id ? 'text-blue-600' : 'text-gray-500'}`}>
                  {story.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                  {story.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Swipeable Cards */}
      <div className="md:hidden max-w-sm mx-auto mb-12">
        <div className="space-y-4">
          {successStories.map((story) => (
            <div
              key={story.id}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                activeStory === story.id
                  ? 'bg-blue-50 border-blue-300 shadow-lg'
                  : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
              }`}
              onClick={() => setActiveStory(story.id)}
            >
              <div className="flex items-start space-x-4">
                <ImagePlaceholder
                  width={80}
                  height={100}
                  description={story.imageDescription}
                  className="flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className={`text-lg font-bold mb-1 ${activeStory === story.id ? 'text-blue-700' : 'text-gray-700'}`}>
                    {story.name}
                  </h3>
                  <p className={`text-sm mb-2 ${activeStory === story.id ? 'text-blue-600' : 'text-gray-500'}`}>
                    {story.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                    {story.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {successStories.map((story) => (
            <button
              key={story.id}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                activeStory === story.id ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => setActiveStory(story.id)}
            />
          ))}
        </div>
      </div>

      {/* Active Story Details */}
      {activeStoryData && (
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Photo */}
              <div className="flex-shrink-0 mx-auto md:mx-0 mb-6 md:mb-0 md:mr-8">
                <ImagePlaceholder
                  width={activeStoryData.photoWidth}
                  height={activeStoryData.photoHeight}
                  description={activeStoryData.imageDescription}
                  className="rounded-xl shadow-md"
                />
              </div>

              {/* Story Details */}
              <div className="flex-1">
                <div className="text-center md:text-left mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-blue-700">
                    {activeStoryData.name}: {activeStoryData.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {/* Challenge */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-lg font-bold mb-3 text-red-600">
                      The Challenge
                    </h4>
                    <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                      {activeStoryData.challenge}
                    </p>
                  </div>

                  {/* Breakthrough */}
                  <div className="bg-white rounded-xl p-6 border-2 border-orange-300">
                    <h4 className="text-lg font-bold mb-3 text-orange-600">
                      The Breakthrough
                    </h4>
                    <p className="text-base leading-relaxed" style={{ color: '#1e293b' }}>
                      {activeStoryData.breakthrough}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                    <h4 className="text-lg font-bold mb-3 text-green-600">
                      The Result
                    </h4>
                    <p className="text-base leading-relaxed font-medium" style={{ color: '#1e293b' }}>
                      {activeStoryData.result}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-300">
                    <h4 className="text-lg font-bold mb-3 text-blue-600">
                      Long-Term Success
                    </h4>
                    <p className="text-base leading-relaxed font-medium" style={{ color: '#1e293b' }}>
                      {activeStoryData.timeline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Key Insight */}
      <div className="text-center mt-12">
        <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
          <p className="text-lg font-medium mb-4" style={{ color: '#1e293b' }}>
            Notice the pattern? These aren&apos;t stories about perfect compliance.
          </p>
          <p className="text-lg font-semibold" style={{ color: '#0284c7' }}>
            They&apos;re stories about building systems that work with real life, not against it.
          </p>
        </div>
      </div>
    </div>
  )
}