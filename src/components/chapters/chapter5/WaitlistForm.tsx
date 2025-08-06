'use client'

import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  heardAbout: string
  commitment: string
  selectedDate: string
  selectedTime: string
}

interface TimeSlot {
  time: string
  available: boolean
}

const timeSlots: TimeSlot[] = [
  { time: '9:00 AM', available: true },
  { time: '10:00 AM', available: false },
  { time: '11:00 AM', available: true },
  { time: '1:00 PM', available: true },
  { time: '2:00 PM', available: true },
  { time: '3:00 PM', available: false },
  { time: '4:00 PM', available: true }
]

export function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    heardAbout: '',
    commitment: '',
    selectedDate: '',
    selectedTime: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCommitmentChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      commitment: value
    }))
  }

  const handleTimeSlotSelect = (time: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTime: time
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const getNextWeekDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })
      })
    }
    return dates
  }

  if (submitted) {
    return (
      <div className="py-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1e293b' }}>
              Assessment Scheduled!
            </h2>
            <p className="text-lg md:text-xl mb-6" style={{ color: '#475569' }}>
              Thank you for joining our exclusive waitlist. We&apos;ve sent confirmation details and preparation materials to your email.
            </p>
            <div className="bg-white rounded-xl p-6 border border-green-200">
              <p className="text-base md:text-lg font-medium mb-2" style={{ color: '#1e293b' }}>
                Your Assessment: {formData.selectedDate} at {formData.selectedTime}
              </p>
              <p className="text-sm md:text-base" style={{ color: '#475569' }}>
                We&apos;ll call you on {formData.phone} for your 20-30 minute video assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && 
                     formData.phone && formData.location && formData.commitment && 
                     formData.selectedDate && formData.selectedTime

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
          Secure Your Assessment Spot
        </h2>
        <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto" style={{ color: '#475569' }}>
          Complete the form below to schedule your free assessment and secure your place in our exclusive beta program.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#1e293b' }}>
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm md:text-base font-medium mb-2" style={{ color: '#1e293b' }}>
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-base text-gray-900 placeholder:text-gray-500"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-medium mb-2" style={{ color: '#1e293b' }}>
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-base text-gray-900 placeholder:text-gray-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm md:text-base font-medium mb-2" style={{ color: '#1e293b' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-base text-gray-900 placeholder:text-gray-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-medium mb-2" style={{ color: '#1e293b' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-base text-gray-900 placeholder:text-gray-500"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm md:text-base font-medium mb-2" style={{ color: '#1e293b' }}>
                Location (City, State/Province, Country) *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-base text-gray-900 placeholder:text-gray-500"
                placeholder="New York, NY, USA"
              />
            </div>

            <div>
              <label className="block text-sm md:text-base font-medium mb-2" style={{ color: '#1e293b' }}>
                How did you hear about us? (Optional)
              </label>
              <select
                name="heardAbout"
                value={formData.heardAbout}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:outline-none text-base text-gray-900"
              >
                <option value="">Please select...</option>
                <option value="search">Google Search</option>
                <option value="social">Social Media</option>
                <option value="referral">Friend/Family Referral</option>
                <option value="pn-content">PN Content/Newsletter</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Commitment Level */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#1e293b' }}>
              Which best describes you? *
            </h3>
            
            <div className="space-y-4">
              {[
                { value: 'ready-immediately', label: 'Ready to start immediately if accepted', description: 'I want to begin transformation as soon as possible' },
                { value: 'learn-more', label: 'Want to learn more first, then decide', description: 'I need more details before making a commitment' },
                { value: 'exploring', label: 'Exploring options, timeline flexible', description: 'I\'m researching different approaches' }
              ].map((option) => (
                <div
                  key={option.value}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                    formData.commitment === option.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleCommitmentChange(option.value)}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="commitment"
                      value={option.value}
                      checked={formData.commitment === option.value}
                      onChange={() => handleCommitmentChange(option.value)}
                      className="w-5 h-5 text-primary-600"
                    />
                    <div className="text-left">
                      <p className="text-base md:text-lg font-medium text-left" style={{ color: '#1e293b' }}>
                        {option.label}
                      </p>
                      <p className="text-sm text-left" style={{ color: '#475569' }}>
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Scheduling */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#1e293b' }}>
              Schedule Your Assessment
            </h3>
            
            <p className="text-base md:text-lg mb-6" style={{ color: '#475569' }}>
              Assessment takes 20-30 minutes via video call. We&apos;ll send confirmation and preparation materials.
            </p>

            {/* Date Selection */}
            <div className="mb-6">
              <label className="block text-sm md:text-base font-medium mb-3" style={{ color: '#1e293b' }}>
                Select Date *
              </label>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                {getNextWeekDates().map((dateOption) => (
                  <button
                    key={dateOption.date}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, selectedDate: dateOption.display }))}
                    className={`px-3 py-3 text-sm md:text-base font-medium rounded-xl border-2 transition-all duration-200 ${
                      formData.selectedDate === dateOption.display
                        ? 'border-primary-500 bg-primary-500 text-white'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {dateOption.display}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {formData.selectedDate && (
              <div>
                <label className="block text-sm md:text-base font-medium mb-3" style={{ color: '#1e293b' }}>
                  Select Time (EST) *
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => slot.available && handleTimeSlotSelect(slot.time)}
                      disabled={!slot.available}
                      className={`px-4 py-3 text-sm md:text-base font-medium rounded-xl border-2 transition-all duration-200 ${
                        formData.selectedTime === slot.time
                          ? 'border-primary-500 bg-primary-500 text-white'
                          : slot.available
                          ? 'border-gray-200 hover:border-gray-300 text-gray-700'
                          : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                      {!slot.available && <div className="text-xs mt-1">Taken</div>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Trust Signals */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="text-green-600 text-2xl mb-1">✓</div>
                <p className="text-xs md:text-sm font-medium" style={{ color: '#1e293b' }}>No payment required</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-green-600 text-2xl mb-1">✓</div>
                <p className="text-xs md:text-sm font-medium" style={{ color: '#1e293b' }}>Mutual fit evaluation</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-green-600 text-2xl mb-1">✓</div>
                <p className="text-xs md:text-sm font-medium" style={{ color: '#1e293b' }}>20-30 minutes via video</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full text-xl md:text-2xl font-bold py-6 px-8 rounded-2xl transition-all duration-300 ${
              isFormValid && !isSubmitting
                ? 'bg-primary-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            style={{
              backgroundColor: isFormValid && !isSubmitting ? '#0284c7' : undefined
            }}
          >
            {isSubmitting ? 'Scheduling Assessment...' : 'Schedule My Assessment'}
          </button>

          {/* Privacy & Terms */}
          <div className="mt-6 text-center">
            <p className="text-xs md:text-sm" style={{ color: '#475569' }}>
              By submitting this form, you agree to our privacy policy and terms of service. 
              We&apos;ll only contact you about your assessment and program eligibility.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}