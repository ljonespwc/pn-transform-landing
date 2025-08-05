import { ChapterContainer } from '@/components/layout/ChapterContainer'
import { ContinueButton } from '@/components/ui/ContinueButton'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { CycleVisualization } from '@/components/chapters/chapter1/CycleVisualization'
import { RecognitionQuiz } from '@/components/chapters/chapter1/RecognitionQuiz'
import { ValidationStats } from '@/components/chapters/chapter1/ValidationStats'
import { MicroSurvey } from '@/components/chapters/chapter1/MicroSurvey'

export default function Chapter1() {
  return (
    <>
      <ScrollProgress />
      <ChapterContainer chapterNumber={1} backgroundColor="white">
        {/* Main Headline Section */}
        <AnimatedSection direction="fade" duration={0.8}>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tight leading-tight" style={{ color: '#1e293b' }}>
              The Real Reason You Can&apos;t Stick to Any Diet
              <span className="block text-4xl md:text-5xl mt-4 font-bold" style={{ color: '#475569' }}>
                (It&apos;s Not What You Think)
              </span>
            </h1>
          </div>
        </AnimatedSection>

      {/* Hero Emotional Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={600}
          height={400}
          mobileWidth={400}
          mobileHeight={300}
          description="Person looking frustrated/overwhelmed in front of mirror or scale - captures the emotional weight of repeated diet failures"
        />
      </div>

        {/* Main Narrative Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="max-w-3xl mx-auto text-left mb-16">
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              You know this story <strong>by heart</strong> because you&apos;ve lived it. <strong>Maybe multiple times.</strong>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              It always starts the same way: <strong>Monday morning motivation</strong>. You&apos;ve done your research, found the perfect plan, and this time—<em>this time</em>—things will be different. <strong>You can feel it.</strong>
            </p>

            {/* Monday Motivation Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={400}
                height={250}
                description="Fresh vegetables, workout gear, meal prep containers - represents the excitement and preparation of starting fresh"
              />
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>Week one is intoxicating.</strong> You follow the plan flawlessly. The scale moves. Your clothes feel looser. You post progress photos and get encouraging comments. Finally, you think, you&apos;ve found something that works. You are <em>crushing</em> this.
            </p>

            {/* Week One Success Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={350}
                height={200}
                description="Person celebrating small victory, loose-fitting clothes, or positive scale reading - captures the early success high"
              />
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Week two starts strong, but <strong>life begins to creep in</strong>. Work gets stressful. Your kid gets sick. You miss one workout, then two. You grab takeout because you didn&apos;t have time to meal prep. But you bounce back. You&apos;re still mostly on track.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              By week three, <strong>the cracks are showing</strong>. The plan that felt so doable when you were motivated now feels <strong>overwhelming</strong> when you&apos;re exhausted. You find yourself eating the foods you swore off, often while standing in the kitchen, barely tasting them. The voice in your head starts getting louder: <span className="italic" style={{ color: '#475569' }}>&quot;You&apos;re doing it again.&quot;</span>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              <strong>Week four arrives like a funeral.</strong> You&apos;ve completely abandoned the plan. The scale has not only stopped moving—it&apos;s moving in the wrong direction. The clothes that felt loose now feel tight again. Worst of all, that <strong>familiar shame</strong> settles in like fog.
            </p>

            {/* Week Four Defeat Image */}
            <div className="flex justify-center my-8">
              <ImagePlaceholder 
                width={450}
                height={300}
                description="Person looking defeated, empty takeout containers, or tight clothes - represents the emotional low point"
              />
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              You tell yourself the same story you&apos;ve told yourself before: <span className="italic" style={{ color: '#475569' }}>&quot;I must be broken. I have no willpower. Other people can stick to things—why can&apos;t I?&quot;</span>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              So you start <strong>researching again</strong>. Maybe it was the wrong plan. Maybe you need something stricter. Maybe you need to try harder. <strong>The cycle begins anew</strong>, and with each restart, your confidence erodes a little more.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#1e293b' }}>
              Here&apos;s what makes this devastating: You&apos;re not just dealing with the physical disappointment of regained weight. You&apos;re carrying the <strong>accumulated emotional damage</strong> of feeling like a failure, <strong>over and over again</strong>.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed font-semibold" style={{ color: '#1e293b' }}>
              But what if I told you that this cycle—every part of it—was entirely predictable? What if the problem was never your willpower, your discipline, or your character?
            </p>
          </div>
        </AnimatedSection>

      {/* Cycle Transition Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={500}
          height={150}
          description="Abstract circular arrows or cycle visualization - bridges story to interactive elements"
        />
      </div>

        {/* Interactive Components Section */}
        <div className="space-y-16 mb-16">
          {/* Cycle Visualization - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.1}>
              <CycleVisualization />
            </AnimatedSection>
          </div>
          
          {/* Recognition Quiz - White Background for contrast */}
          <AnimatedSection direction="up" delay={0.2}>
            <RecognitionQuiz />
          </AnimatedSection>
          
          {/* Statistics Section - Enhanced Warm Background */}
          <div className="section-colored" style={{
            background: 'linear-gradient(135deg, #e8a54e 0%, #f0b862 50%, #e8a54e 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            {/* Statistics Support Image */}
            <div className="flex justify-center mb-8">
              <ImagePlaceholder 
                width={300}
                height={200}
                description="Data visualization or research imagery - reinforces the scientific backing"
              />
            </div>
            
            <AnimatedSection direction="up" delay={0.1}>
              <ValidationStats />
            </AnimatedSection>
          </div>
          
          {/* Micro Survey - Blue Background */}
          <div className="section-interactive">
            <AnimatedSection direction="up" delay={0.2}>
              <MicroSurvey />
            </AnimatedSection>
          </div>
        </div>

      {/* Hope/Anticipation Image */}
      <div className="flex justify-center mb-8">
        <ImagePlaceholder 
          width={400}
          height={250}
          description="Person looking hopeful or sunrise/breakthrough imagery - builds anticipation for Chapter 2"
        />
      </div>

        {/* Chapter Transition - Strong Call-to-Action Background */}
        <div className="section-colored bg-primary-100">
          <AnimatedSection direction="up" delay={0.3}>
            <div className="text-center">
              <p className="text-base md:text-lg mb-4 font-medium" style={{ color: '#475569' }}>
                Next: The shocking truth about why diets are designed to fail
              </p>
              
              <ContinueButton 
                nextChapterPath="/chapter-2" 
                currentChapter={1}
              >
                Show Me What&apos;s Really Happening
              </ContinueButton>
            </div>
          </AnimatedSection>
        </div>
      </ChapterContainer>
    </>
  )
}
