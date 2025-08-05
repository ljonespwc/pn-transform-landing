import { ChapterContainer } from '@/components/layout/ChapterContainer'
import { ContinueButton } from '@/components/ui/ContinueButton'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ProblemEquation } from '@/components/chapters/chapter2/ProblemEquation'
import { IndustryStats } from '@/components/chapters/chapter2/IndustryStats'
import { ScenarioBreakdown } from '@/components/chapters/chapter2/ScenarioBreakdown'
import { BlameCycle } from '@/components/chapters/chapter2/BlameCycle'

export default function Chapter2() {
  return (
    <>
      <ScrollProgress />
      <ChapterContainer chapterNumber={2} backgroundColor="white">
        {/* Main Headline Section */}
        <AnimatedSection direction="fade" duration={0.8}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tight leading-tight" style={{ color: '#1e293b' }}>
              After 20 Years of Coaching, We Discovered
              <span className="block">Why Every Diet Fails</span>
            </h1>
          </div>
        </AnimatedSection>

        {/* Research/Data Image */}
        <div className="flex justify-center mb-12">
          <ImagePlaceholder 
            width={600}
            height={400}
            mobileWidth={400}
            mobileHeight={300}
            description="Research data, charts, or scientists analyzing data - represents 20 years of discovery"
          />
        </div>

        {/* Main Narrative Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="max-w-3xl mx-auto text-left mb-16">
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              After 20 years of coaching 175,000+ clients, we discovered something that will change how you think about every diet failure you&apos;ve ever experienced.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              The entire <strong>$78 billion diet industry</strong> has been solving the <strong>wrong equation</strong>.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Every program focuses obsessively on <strong>WHAT</strong> to eat. Keto tells you to cut carbs. Paleo tells you to eat like a caveman. Macro counting tells you to hit specific numbers. The debates rage endlessly about carbs versus fats, meal timing, and supplement protocols.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              But that&apos;s not actually the <strong>limiting factor</strong> for you, is it?
            </p>

            {/* Overwhelm Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={450}
                height={300}
                description="Person overwhelmed by diet information, books, or conflicting advice - represents information overload"
              />
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              You probably <strong>already know</strong> what&apos;s healthy. You&apos;ve had access to more nutritional information than any generation in human history. You could spend years learning about metabolism and insulin response. <strong>Most of you already have.</strong>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 font-semibold" style={{ color: '#1e293b' }}>
              <strong>The real challenge isn&apos;t how the body works—it&apos;s how life works.</strong>
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              How do you stick to <em>anything</em> in the context of your actual, messy human life? Not in your thinking brain when you&apos;re planning what next week might look like, feeling motivated and organized. But in the chaos of your real life. On your worst day. On your busiest day when the unexpected disasters pile up.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              What happens when you&apos;re stressed about work and drive past that restaurant? How do you eat well when you&apos;re exhausted and your kids are screaming? What about when you&apos;re traveling, dealing with illness, or navigating family drama?
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6 font-medium" style={{ color: '#1e293b' }}>
              These aren&apos;t edge cases. <strong>This is life.</strong>
            </p>

            {/* Real Life Chaos Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={500}
                height={350}
                description="Busy parent juggling work, kids, travel - represents real life chaos that derails diets"
              />
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              But the diet industry <strong>pretends these situations don&apos;t exist</strong>. They hand you a meal plan designed for someone who lives in a <strong>controlled laboratory</strong>, then act surprised when you can&apos;t follow it in the real world.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6 font-semibold" style={{ color: '#1e293b' }}>
              <strong>Here&apos;s the devastating part</strong>: When you inevitably can&apos;t maintain perfect adherence, who gets blamed? You do.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              The program doesn&apos;t fail—you fail. The approach doesn&apos;t fail—your willpower fails. The system doesn&apos;t fail—your character fails.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              This isn&apos;t an accident. <strong>It&apos;s a feature, not a bug.</strong> Because when you blame yourself instead of the flawed system, you become the <strong>perfect customer</strong>. You&apos;ll try the next program, and the next one, and the next one.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Meanwhile, you&apos;re carrying an increasingly heavy load of shame and self-doubt. Each restart feels harder than the last because you&apos;re not just fighting your habits—you&apos;re fighting the accumulated evidence that you can&apos;t stick to anything.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6 font-bold" style={{ color: '#1e293b' }}>
              <strong>But here&apos;s what we discovered</strong>: The adherence problem isn&apos;t a character flaw. It&apos;s an engineering problem. And engineering problems can be solved.
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive Components Section */}
        <div className="space-y-16 mb-16">
          {/* Problem Equation Visual - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.1}>
              <ProblemEquation />
            </AnimatedSection>
          </div>
          
          {/* Industry Statistics - Enhanced Warm Background */}
          <div className="section-colored" style={{
            background: 'linear-gradient(135deg, #e8a54e 0%, #f0b862 50%, #e8a54e 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            {/* Statistics Support Image */}
            <div className="flex justify-center mb-8">
              <ImagePlaceholder 
                width={350}
                height={200}
                description="Charts, graphs, or money imagery representing the massive diet industry statistics"
              />
            </div>
            
            <AnimatedSection direction="up" delay={0.2}>
              <IndustryStats />
            </AnimatedSection>
          </div>
          
          {/* Scenario Breakdown - White Background for contrast */}
          <AnimatedSection direction="up" delay={0.3}>
            <ScenarioBreakdown />
          </AnimatedSection>
          
          {/* Blame Cycle - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.4}>
              <BlameCycle />
            </AnimatedSection>
          </div>
        </div>

        {/* Solution Anticipation Image */}
        <div className="flex justify-center mb-8">
          <ImagePlaceholder 
            width={400}
            height={250}
            description="Light at end of tunnel or breakthrough moment - builds anticipation for the solution"
          />
        </div>

        {/* Chapter Transition - Strong Call-to-Action Background */}
        <div className="section-colored bg-primary-100">
          <AnimatedSection direction="up" delay={0.5}>
            <div className="text-center">
              <p className="text-base md:text-lg mb-4 font-medium" style={{ color: '#475569' }}>
                Next: The engineering solution that changes everything
              </p>
              
              <ContinueButton 
                nextChapterPath="/chapter-3" 
                currentChapter={2}
              >
                Show Me the Solution
              </ContinueButton>
              
              <p className="text-sm mt-4" style={{ color: '#64748b' }}>
                Chapter 3 of 5 • 4 minutes remaining
              </p>
            </div>
          </AnimatedSection>
        </div>
      </ChapterContainer>
    </>
  )
}