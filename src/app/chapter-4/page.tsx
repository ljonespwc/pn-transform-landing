import { ChapterContainer } from '@/components/layout/ChapterContainer'
import { ContinueButton } from '@/components/ui/ContinueButton'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { SuccessStoryCarousel } from '@/components/chapters/chapter4/SuccessStoryCarousel'
import { ResultsDashboard } from '@/components/chapters/chapter4/ResultsDashboard'
import { TransformationTimeline } from '@/components/chapters/chapter4/TransformationTimeline'
import { SuccessTypes } from '@/components/chapters/chapter4/SuccessTypes'
import { LongTermResults } from '@/components/chapters/chapter4/LongTermResults'

export default function Chapter4() {
  return (
    <>
      <ScrollProgress />
      <ChapterContainer chapterNumber={4} backgroundColor="white">
        {/* Main Headline Section */}
        <AnimatedSection direction="fade" duration={0.8}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight" style={{ color: '#1e293b' }}>
              Finally, Results That Last Because They&apos;re
              <span className="block">Built on Systems, Not Willpower</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium" style={{ color: '#475569' }}>
              Beta participants are experiencing something they&apos;ve never had before: effortless consistency.
            </p>
          </div>
        </AnimatedSection>

        {/* Before/After Transformation Image */}
        <div className="flex justify-center mb-12">
          <ImagePlaceholder 
            width={600}
            height={400}
            mobileWidth={400}
            mobileHeight={300}
            description="Before/after transformation collage or success celebration - represents lasting results"
          />
        </div>

        {/* Main Narrative Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="max-w-3xl mx-auto text-left mb-16">
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>Sarah had tried everything.</strong> Keto for six months. Weight Watchers for two years. Personal training with macro counting. Intermittent fasting. Each time, the same story: initial success, inevitable breakdown, crushing disappointment.
            </p>
            
            <blockquote className="bg-gray-50 border-l-4 border-blue-400 pl-8 pr-6 py-6 mb-6 relative rounded-r-xl">
              <div className="text-6xl text-blue-300 absolute -top-2 left-2 font-serif">&ldquo;</div>
              <p className="text-lg md:text-xl leading-relaxed italic ml-6" style={{ color: '#475569' }}>
                I thought I was broken. I could stick to anything for a few weeks, but then life would happen and I&apos;d be right back where I started. I was convinced I just didn&apos;t have what other people had.
              </p>
            </blockquote>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Then Sarah joined our beta program.
            </p>

            {/* Sarah Success Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={450}
                height={300}
                description="Sarah's before/after photos or celebrating her success - personal transformation story"
              />
            </div>

            <blockquote className="bg-gray-50 border-l-4 border-blue-400 pl-8 pr-6 py-6 mb-6 relative rounded-r-xl">
              <div className="text-6xl text-blue-300 absolute -top-2 left-2 font-serif">&ldquo;</div>
              <p className="text-lg md:text-xl leading-relaxed italic ml-6" style={{ color: '#475569' }}>
                For the first time in 15 years, healthy choices feel natural instead of forced. I lost 35 pounds and it didn&apos;t feel like dieting. My coach helped me understand that I stress-eat every Thursday after team meetings—TransformOS predicted the pattern, and together we built a different routine. Six months later, I still love the way I eat.
              </p>
            </blockquote>

            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>This is what happens when you solve the real problem instead of ignoring it.</strong> Sarah&apos;s coach used TransformOS data to understand her unique patterns, then guided her through building sustainable solutions that work with her real life.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>Mark, an executive and father of three</strong>: &quot;I travel constantly for work. Every other program fell apart the moment I got on a plane. My coach uses TransformOS data to help me adapt to whatever schedule chaos I&apos;m facing. I&apos;ve maintained my results through client dinners, airport delays, and my kids&apos; soccer tournaments. My wife says I&apos;m a completely different person—calmer, more confident, more present.&quot;
            </p>

            {/* Professional/Family Success Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={500}
                height={350}
                description="Executive with family or business professional - represents work-life balance success"
              />
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>The difference?</strong> These results are built on technology and coaching, not willpower.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>Jennifer, who had tried &quot;everything&quot;</strong>: &quot;The crazy part is how automatic it became. I don&apos;t think about food the way I used to. I don&apos;t have to white-knuckle my way through social events. Healthy choices just feel normal now. My friends keep asking what I&apos;m doing differently, and honestly, it doesn&apos;t feel like I&apos;m doing anything special anymore. It&apos;s just who I am now.&quot;
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 font-bold" style={{ color: '#1e293b' }}>
              <strong>These aren&apos;t testimonials about temporary compliance. They&apos;re stories about permanent transformation.</strong>
            </p>

            {/* Key Stats Callout */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-8 shadow-md">
              <ul className="space-y-3 text-lg font-medium" style={{ color: '#1e293b' }}>
                <li>• 87% of beta participants still following the program at 12 months</li>
                <li>• 89% report healthy choices feel natural, not forced</li>
                <li>• 94% say they&apos;ve never experienced this level of consistency before</li>
                <li>• Average time to automatic habits: 28 days vs. industry average of never</li>
              </ul>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>But here&apos;s what makes these results different from everything else you&apos;ve seen</strong>: They&apos;re not about perfect weeks or superhuman discipline. They&apos;re about building systems that work with real life, not against it.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>Maria, a working mom of twins</strong>: &quot;I used to think successful people just had more willpower than me. Now I realize they just had better systems. When my kids are screaming and dinner needs to happen in 20 minutes, I don&apos;t rely on motivation—I rely on the patterns my coach and I built using TransformOS insights. It&apos;s like having a personal assistant for my health that never gets tired or overwhelmed.&quot;
            </p>

            {/* Working Mom Success Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={450}
                height={300}
                description="Working mom with children in kitchen or family meal scene - represents real-life integration"
              />
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>David, who lost 50 pounds</strong>: &quot;The weight loss was great, but what I didn&apos;t expect was how much easier everything else became. I sleep better, I have more energy for my family, I&apos;m more productive at work. It&apos;s like fixing one thing fixed everything else too. And the best part? I&apos;m not worried about gaining it back because this doesn&apos;t feel like something I&apos;m &apos;doing&apos;—it feels like who I am.&quot;
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6 font-bold text-center" style={{ color: '#1e293b' }}>
              <strong>The breakthrough is real. The results prove it works. And for the first time, you can access it too.</strong>
            </p>
          </div>
        </AnimatedSection>

        {/* Success Overview Image */}
        <div className="flex justify-center mb-8">
          <ImagePlaceholder 
            width={500}
            height={150}
            description="Multiple success stories collage or results dashboard - bridges narrative to interactive proof"
          />
        </div>

        {/* Interactive Components Section */}
        <div className="space-y-16 mb-16">
          {/* Success Story Carousel - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.1}>
              <SuccessStoryCarousel />
            </AnimatedSection>
          </div>
          
          {/* Results Dashboard - White Background for contrast */}
          <AnimatedSection direction="up" delay={0.2}>
            <ResultsDashboard />
          </AnimatedSection>
          
          {/* Transformation Timeline - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.3}>
              <TransformationTimeline />
            </AnimatedSection>
          </div>
          
          {/* Success Types - White Background for contrast */}
          <AnimatedSection direction="up" delay={0.4}>
            <SuccessTypes />
          </AnimatedSection>
          
          {/* Long-Term Results - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.5}>
              <LongTermResults />
            </AnimatedSection>
          </div>
        </div>

        {/* Access/Exclusive Image */}
        <div className="flex justify-center mb-8">
          <ImagePlaceholder 
            width={400}
            height={250}
            description="Exclusive access or VIP invitation visual - builds desire for Chapter 5"
          />
        </div>

        {/* Chapter Transition - Strong Call-to-Action Background */}
        <div className="section-colored bg-primary-100">
          <AnimatedSection direction="up" delay={0.6}>
            <div className="text-center">
              <p className="text-base md:text-lg mb-4 font-medium" style={{ color: '#475569' }}>
                Next: Get exclusive access to this breakthrough system
              </p>
              
              <ContinueButton 
                nextChapterPath="/chapter-5" 
                currentChapter={4}
              >
                I Want Access to This
              </ContinueButton>
            </div>
          </AnimatedSection>
        </div>
      </ChapterContainer>
    </>
  )
}