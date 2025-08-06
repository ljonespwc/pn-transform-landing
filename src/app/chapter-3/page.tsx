import { ChapterContainer } from '@/components/layout/ChapterContainer'
import { ContinueButton } from '@/components/ui/ContinueButton'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ThreePhaseDemo } from '@/components/chapters/chapter3/ThreePhaseDemo'
import { MotivationLearning } from '@/components/chapters/chapter3/MotivationLearning'
import { PNMethodTimeline } from '@/components/chapters/chapter3/PNMethodTimeline'
import { HealthyHabitAddiction } from '@/components/chapters/chapter3/HealthyHabitAddiction'
import { AdherenceEcosystem } from '@/components/chapters/chapter3/AdherenceEcosystem'

export default function Chapter3() {
  return (
    <>
      <ScrollProgress />
      <ChapterContainer chapterNumber={3} backgroundColor="white">
        {/* Main Headline Section */}
        <AnimatedSection direction="fade" duration={0.8}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight" style={{ color: '#1e293b' }}>
              We Built the First System That Makes
              <span className="block">Healthy Habits Inevitable</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium" style={{ color: '#475569' }}>
              What if sticking to things wasn&apos;t about willpower?
            </p>
          </div>
        </AnimatedSection>

        {/* Breakthrough/Innovation Image */}
        <div className="flex justify-center mb-12">
          <ImagePlaceholder 
            width={600}
            height={400}
            mobileWidth={400}
            mobileHeight={300}
            description="Technology breakthrough, innovation lab, or smartphone with healthy apps - represents the engineering solution"
          />
        </div>

        {/* Main Narrative Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="max-w-3xl mx-auto text-left mb-16">
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Think about your smartphone. You check it <strong>150+ times per day</strong>. Not because you have incredible discipline or motivation, but because it&apos;s designed to be irresistible. Every notification, every red badge, every infinite scroll—engineered to create behavioral patterns that feel automatic.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Social media companies solved the sticking-to-things problem. They figured out how to make behaviors stick without relying on human willpower. They built <em>invisible systems</em> that make habits automatic.
            </p>

            {/* Smartphone Addiction Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={450}
                height={300}
                description="Person on phone with notifications, or phone interface showing habit-forming design - illustrates engineered addiction"
              />
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-6 font-semibold" style={{ color: '#1e293b' }}>
              <strong>So we asked a different question</strong>: What if we applied that same psychology to healthy habits instead of mindless scrolling?
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              After 20 years of coaching data, we cracked the code. We built <strong>TransformOS</strong>—the first technology that makes healthy habits inevitable instead of impossible.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>TransformOS creates a complete support system that learns exactly what motivates you.</strong> It doesn&apos;t just predict problems—it sets you up for success through three breakthrough capabilities:
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 ml-6" style={{ color: '#1e293b' }}>
              <strong>Before challenges hit</strong>: TransformOS anticipates your habit obstacles 72 hours before they occur. &quot;Thursday&apos;s meeting always triggers stress eating.&quot; &quot;Travel disrupts your routine this weekend.&quot; &quot;You historically struggle on day 12 of any new program.&quot; The system prepares you with personalized strategies before willpower even gets tested.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 ml-6" style={{ color: '#1e293b' }}>
              <strong>During difficult moments</strong>: When life inevitably gets messy, TransformOS delivers real-time intervention precisely when you need it most. Not generic reminders—intelligent support based on what actually works for your personality, schedule, and circumstances. &quot;Remember last time this happened? Here&apos;s what helped you then.&quot;
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 ml-6" style={{ color: '#1e293b' }}>
              <strong>After every small win</strong>: This is where the magic happens. TransformOS learns your unique encouragement patterns and delivers personalized reinforcement that makes healthy choices genuinely rewarding. Some people need immediate celebration. Others prefer progress milestones. The system discovers what creates sustainable motivation for <em>you</em> specifically.
            </p>

            {/* Technology + Human Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={500}
                height={350}
                description="AI technology working with human coach, or app interface showing personalized insights - represents tech+human integration"
              />
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 font-bold" style={{ color: '#1e293b' }}>
              <strong>The result? You become addicted to healthy habits the same way you&apos;re addicted to your phone.</strong>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>But technology alone isn&apos;t enough.</strong> That&apos;s why TransformOS works with coaches equipped with the <strong>PN Method</strong>—our proprietary methodology that builds awareness first, optimization second.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              While other programs jump straight to &quot;eat this, not that,&quot; the PN Method focuses on <em>how</em> you eat before <em>what</em> you eat. First, you spend two weeks learning to slow down your eating. Then, you spend two weeks learning to eat to 80% full. No rules about food—just building the foundational awareness that makes everything else automatic.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 font-semibold" style={{ color: '#1e293b' }}>
              <strong>This is how you become someone who naturally makes healthy choices instead of someone fighting their impulses every day.</strong>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Your coach isn&apos;t just giving you meal plans. They&apos;re using TransformOS data to understand your unique patterns—when you succeed, when you struggle, what motivates you, what derails you. Then they help you build supportive systems around your actual life, not some fantasy version of perfect behavior.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 font-bold" style={{ color: '#1e293b' }}>
              <strong>This is smart support</strong>: Technology that handles anticipation, intervention, and encouragement automatically, combined with proven methodology that builds lasting change from the ground up.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>The result?</strong> 87% success rate versus the industry average of 12%. Not because our clients have more willpower. Because they have better systems that make healthy choices irresistible.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 font-bold" style={{ color: '#1e293b' }}>
              <strong>For the first time in your life, sticking to something isn&apos;t a daily battle. It&apos;s genuinely enjoyable.</strong>
            </p>
          </div>
        </AnimatedSection>

        {/* System Overview Image */}
        <div className="flex justify-center mb-8">
          <ImagePlaceholder 
            width={500}
            height={150}
            description="Abstract system diagram or connected network - bridges narrative to interactive demonstrations"
          />
        </div>

        {/* Interactive Components Section */}
        <div className="space-y-16 mb-16">
          {/* Three-Phase Demo - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.1}>
              <ThreePhaseDemo />
            </AnimatedSection>
          </div>
          
          {/* Motivation Learning - White Background for contrast */}
          <AnimatedSection direction="up" delay={0.2}>
            <MotivationLearning />
          </AnimatedSection>
          
          {/* PN Method Timeline - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.3}>
              <PNMethodTimeline />
            </AnimatedSection>
          </div>
          
          {/* Healthy Habit Addiction - White Background for contrast */}
          <AnimatedSection direction="up" delay={0.4}>
            <HealthyHabitAddiction />
          </AnimatedSection>
          
          {/* Adherence Ecosystem - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.5}>
              <AdherenceEcosystem />
            </AnimatedSection>
          </div>
        </div>

        {/* Success/Breakthrough Image */}
        <div className="flex justify-center mb-8">
          <ImagePlaceholder 
            width={400}
            height={250}
            description="Person celebrating success, or upward trending graph - builds anticipation for proof in Chapter 4"
          />
        </div>

        {/* Chapter Transition - Strong Call-to-Action Background */}
        <div className="section-colored bg-primary-100">
          <AnimatedSection direction="up" delay={0.6}>
            <div className="text-center">
              <p className="text-base md:text-lg mb-4 font-medium" style={{ color: '#475569' }}>
                Next: See the proof that this breakthrough actually works
              </p>
              
              <ContinueButton 
                nextChapterPath="/chapter-4" 
                currentChapter={3}
              >
                Show Me the Proof
              </ContinueButton>
            </div>
          </AnimatedSection>
        </div>
      </ChapterContainer>
    </>
  )
}