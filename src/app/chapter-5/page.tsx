import { ChapterContainer } from '@/components/layout/ChapterContainer'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { AssessmentPreview } from '@/components/chapters/chapter5/AssessmentPreview'
import { GeographicAvailability } from '@/components/chapters/chapter5/GeographicAvailability'
import { WaitlistForm } from '@/components/chapters/chapter5/WaitlistForm'

export default function Chapter5() {
  return (
    <>
      <ScrollProgress />
      <ChapterContainer chapterNumber={5} backgroundColor="white">
        {/* Main Headline Section */}
        <AnimatedSection direction="fade" duration={0.8}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight" style={{ color: '#1e293b' }}>
              This Changes Everything. But It&apos;s Not
              <span className="block">Available Everywhere. Yet.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium" style={{ color: '#475569' }}>
              We&apos;re in the middle of a limited rollout. We can only support a small number of people in each region.
            </p>
          </div>
        </AnimatedSection>

        {/* Exclusive Access Image */}
        <div className="flex justify-center mb-12">
          <ImagePlaceholder 
            width={600}
            height={400}
            mobileWidth={400}
            mobileHeight={300}
            description="Exclusive beta program invitation or limited access visual - sets exclusivity tone"
            className="my-8"
          />
        </div>

        {/* Main Narrative Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="max-w-3xl mx-auto text-left mb-16">
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              We&apos;re in the middle of a limited geographic rollout. We can only support a small number of people in each region because this isn&apos;t a typical program—it&apos;s breakthrough technology combined with intensive human coaching.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Every beta participant gets:
            </p>
            
            <ul className="space-y-3 text-lg md:text-xl font-medium mb-8 ml-4" style={{ color: '#1e293b' }}>
              <li>• Full access to TransformOS technology that makes healthy habits automatic</li>
              <li>• Personal coach trained in the PN Method</li>
              <li>• Real-time support when motivation typically fails</li>
              <li>• The system that makes 87% success rates possible</li>
            </ul>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>But here&apos;s what makes this exclusive:</strong> We&apos;re not just accepting anyone.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              The assessment process determines if you&apos;re psychologically ready for this approach. We analyze your past attempts to understand what went wrong and whether our system can solve your specific challenges. We evaluate lifestyle compatibility to ensure the system can work with your actual life circumstances.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>This isn&apos;t for everyone.</strong> It&apos;s for people who&apos;ve been on the roller coaster before. People who recognize they need something fundamentally different. People ready to invest in the breakthrough that makes success inevitable instead of impossible.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Geographic rollout phases mean limited availability in each region. We&apos;re building this carefully, ensuring every participant gets the full attention of our breakthrough methodology. No cutting corners. No compromising the system that makes this work.
            </p>

            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={500}
                height={350}
                description="Geographic rollout or selective process visual - reinforces exclusivity and careful expansion"
                className="my-4"
              />
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>Secure your spot below.</strong> The assessment is free, no-commitment, and determines mutual fit. You&apos;re not buying anything today—you&apos;re getting evaluated for access to something that doesn&apos;t exist anywhere else.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>This is your chance</strong> to get early access to automatic healthy habits. Early access to technology that will eventually transform the entire industry.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-center" style={{ color: '#1e293b' }}>
              <strong>Ready to make healthy habits inevitable?</strong>
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive Components Section */}
        <div className="space-y-16 mb-16">
          {/* Assessment Preview - Orange Background */}
          <div className="section-colored" style={{
            background: 'linear-gradient(135deg, #e8a54e 0%, #f0b862 50%, #e8a54e 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            <AnimatedSection direction="up" delay={0.1}>
              <AssessmentPreview />
            </AnimatedSection>
          </div>
          
          {/* Geographic Availability - White Background for contrast */}
          <AnimatedSection direction="up" delay={0.2}>
            <GeographicAvailability />
          </AnimatedSection>
          
          
          {/* Waitlist Form - White Background for focus */}
          <AnimatedSection direction="up" delay={0.3}>
            <WaitlistForm />
          </AnimatedSection>
          
          {/* What Happens Next - Light Blue Background */}
          <div className="section-colored bg-primary-100">
            <AnimatedSection direction="up" delay={0.4}>
              <div className="py-8 px-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
                    What Happens Next
                  </h2>
                  <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto" style={{ color: '#475569' }}>
                    Your path to transformation is carefully designed for your success.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        1
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
                        Assessment Call
                      </h3>
                      <p className="text-base md:text-lg" style={{ color: '#475569' }}>
                        We&apos;ll dive deep into your history, challenges, and goals to understand exactly what you need for lasting success.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        2
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
                        Coach Matching
                      </h3>
                      <p className="text-base md:text-lg" style={{ color: '#475569' }}>
                        We&apos;ll present you with 2-3 carefully selected coaches whose expertise and approach align perfectly with your specific needs.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        3
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
                        Your Choice
                      </h3>
                      <p className="text-base md:text-lg" style={{ color: '#475569' }}>
                        You&apos;ll have brief conversations with each coach to find the perfect fit, then begin your transformation journey together.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Message */}
                  <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-6 border border-primary-200 max-w-2xl mx-auto">
                      <p className="text-lg md:text-xl font-medium" style={{ color: '#1e293b' }}>
                        <strong>This isn&apos;t a one-size-fits-all approach.</strong> We take the time to match you with the right coach because your success depends on having support that truly understands your unique situation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
        </div>


      </ChapterContainer>
    </>
  )
}