# PN Transform Chapter 4 - Wireframe

## Overall Page Structure
```
┌─────────────────────────────────────────────────────────────┐
│                    PROGRESS INDICATOR                       │
│                  ○● ○● ○● ● ○ (Chapter 1-5)                │
│          (Chapters 1-3 complete, 4 active)                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       MAIN CONTENT                         │
│                    (Max-width: 42rem)                      │
│             (Richer blue background: #e0f2fe)              │
└─────────────────────────────────────────────────────────────┘
```

---

## Desktop Layout (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           PROGRESS DOTS                             │
│                      ○● ○● ○● ● ○                                   │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                                                            │    │
│    │              HEADLINE (3rem, center-aligned)              │    │
│    │      Finally, Results That Last Because They're           │    │
│    │         Built on Systems, Not Willpower                   │    │
│    │                                                            │    │
│    │         SUBHEADLINE (1.25rem, center-aligned)             │    │
│    │    Beta participants are experiencing something           │    │
│    │       they've never had before: effortless consistency.   │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                  NARRATIVE SECTION                        │    │
│    │                (1.25rem, left-aligned)                    │    │
│    │                                                            │    │
│    │  Sarah had tried everything. Keto for six months...       │    │
│    │                                                            │    │
│    │  [Full narrative copy - testimonial-rich storytelling]    │    │
│    │  [Bold emphasis on success stories and breakthrough]      │    │
│    │                                                            │    │
│    │  The breakthrough is real. The results prove it works.    │    │
│    │  And for the first time, you can access it too.           │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                INTERACTIVE COMPONENTS                      │    │
│    │                                                            │    │
│    │  COMPONENT 1: SUCCESS STORY CAROUSEL                      │    │
│    │  "Real People, Real Transformations"                      │    │
│    │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │    │
│    │  │  Sarah   │ │   Mark   │ │ Jennifer │ │  Maria   │     │    │
│    │  │  Serial  │ │Traveling │ │Everything│ │ Working  │     │    │
│    │  │Restarter │ │Executive │ │  Tryer   │ │   Mom    │     │    │
│    │  │          │ │          │ │          │ │          │     │    │
│    │  │[Before/  │ │[Family   │ │[Confident│ │[Twins    │     │    │
│    │  │ After]   │ │ Photo]   │ │  Photo]  │ │ Photo]   │     │    │
│    │  │          │ │          │ │          │ │          │     │    │
│    │  │35 lbs    │ │Different │ │Effortless│ │Systems   │     │    │
│    │  │lost      │ │Person    │ │Now       │ │Work      │     │    │
│    │  └──────────┘ └──────────┘ └──────────┘ └──────────┘     │    │
│    │           [Swipeable carousel with navigation dots]       │    │
│    │                                                            │    │
│    │  COMPONENT 2: RESULTS DASHBOARD                          │    │
│    │  "The Numbers Don't Lie"                                  │    │
│    │  ┌─────────────────────────────────────────────────────┐  │    │
│    │  │              87% still successful at 12 months     │  │    │
│    │  │                    vs. 12% industry average        │  │    │
│    │  │                     [Animated Counter]             │  │    │
│    │  └─────────────────────────────────────────────────────┘  │    │
│    │                                                            │    │
│    │  Supporting Statistics Grid:                               │    │
│    │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐         │    │
│    │  │89% Natural  │ │94% Never    │ │28 Days to   │         │    │
│    │  │Not Forced   │ │Experienced  │ │Automatic    │         │    │
│    │  └─────────────┘ └─────────────┘ └─────────────┘         │    │
│    │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐         │    │
│    │  │93% Maintain │ │91% Works    │ │96% No Longer│         │    │
│    │  │Without      │ │With Real    │ │Blame        │         │    │
│    │  │Effort       │ │Life         │ │Themselves   │         │    │
│    │  └─────────────┘ └─────────────┘ └─────────────┘         │    │
│    │                                                            │    │
│    │  Traditional vs PN Transform Comparison Table             │    │
│    │  ┌─────────────────────────────────────────────────────┐  │    │
│    │  │ Traditional Programs    │    PN Transform           │  │    │
│    │  │ ├ 12% success rate      │    ├ 87% success rate    │  │    │
│    │  │ ├ Rely on willpower     │    ├ Built-in support    │  │    │
│    │  │ ├ Perfect week required │    ├ Works with messy    │  │    │
│    │  │ ├ Blame when fails      │    ├ Adapts when life    │  │    │
│    │  │ └ Temporary compliance  │    └ Permanent transform │  │    │
│    │  └─────────────────────────────────────────────────────┘  │    │
│    │                                                            │    │
│    │  COMPONENT 3: TRANSFORMATION TIMELINE                    │    │
│    │  "What to Expect: Month by Month"                         │    │
│    │  Month 1 ───── Month 2-3 ───── Month 4-6 ───── Month 7-12│    │
│    │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │    │
│    │  │Foundation│ │Integration│ │Transform-│ │ Mastery  │     │    │
│    │  │          │ │          │ │  ation   │ │          │     │    │
│    │  │Learning  │ │Stress    │ │Identity  │ │Life      │     │    │
│    │  │patterns  │ │testing   │ │shift     │ │integration│    │    │
│    │  │          │ │          │ │          │ │          │     │    │
│    │  │"Doesn't  │ │"System   │ │"Friends  │ │"This is  │     │    │
│    │  │feel like │ │proves    │ │notice    │ │who you   │     │    │
│    │  │dieting"  │ │reliable" │ │change"   │ │are now"  │     │    │
│    │  └──────────┘ └──────────┘ └──────────┘ └──────────┘     │    │
│    │              [Expandable for detailed breakdown]          │    │
│    │                                                            │    │
│    │  COMPONENT 4: DIFFERENT TYPES OF SUCCESS                 │    │
│    │  "Success Looks Different for Everyone"                   │    │
│    │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐         │    │
│    │  │Weight Loss  │ │ Behavior    │ │    Life     │         │    │
│    │  │  Focused    │ │Transformation│ │ Integration │         │    │
│    │  │             │ │             │ │             │         │    │
│    │  │• 30-80 lbs  │ │• Stopped    │ │• Health fits│         │    │
│    │  │• Plateaus   │ │  emotional  │ │  schedule   │         │    │
│    │  │• Maintained │ │• No Sunday  │ │• Family     │         │    │
│    │  │  for years  │ │  panic      │ │  meals joy  │         │    │
│    │  └─────────────┘ └─────────────┘ └─────────────┘         │    │
│    │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐         │    │
│    │  │Energy &     │ │   Health    │ │Relationship │         │    │
│    │  │Confidence   │ │Improvements │ │ With Food   │         │    │
│    │  │             │ │             │ │             │         │    │
│    │  │• More energy│ │• Better     │ │• Fuel &     │         │    │
│    │  │• Mental     │ │  sleep      │ │  enjoyment  │         │    │
│    │  │  freedom    │ │• Stable     │ │• Trust      │         │    │
│    │  │• Confidence │ │  energy     │ │  signals    │         │    │
│    │  └─────────────┘ └─────────────┘ └─────────────┘         │    │
│    │                                                            │    │
│    │  COMPONENT 5: 12-MONTH FOLLOW-UP DATA                    │    │
│    │  "The Real Test: Long-Term Results"                       │    │
│    │  ┌─────────────────────────────────────────────────────┐  │    │
│    │  │     87% still actively engaged at 12 months        │  │    │
│    │  │       93% maintained their primary goal            │  │    │
│    │  │        89% report continued improvement            │  │    │
│    │  │          96% would recommend to others             │  │    │
│    │  └─────────────────────────────────────────────────────┘  │    │
│    │                                                            │    │
│    │  Long-term Comparison Chart:                               │    │
│    │  ┌─────────────────────────────────────────────────────┐  │    │
│    │  │ Typical Diet Programs  │   PN Transform Results     │  │    │
│    │  │ Month 3: 60% dropped  │   Month 3: 94% engaged     │  │    │
│    │  │ Month 6: 80% regained │   Month 6: 91% maintaining │  │    │
│    │  │ Month 12: 95% restart │   Month 12: 87% successful │  │    │
│    │  └─────────────────────────────────────────────────────┘  │    │
│    │                                                            │    │
│    │  Long-Term Testimonials:                                   │    │
│    │  "Year later, people ask if I'm still 'on that program.'  │    │
│    │   I tell them this isn't a program—it's just how I        │    │
│    │   live now." - Rachel, 14 months                          │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                 CHAPTER TRANSITION                        │    │
│    │                                                            │    │
│    │         ┌─────────────────────────────────────┐           │    │
│    │         │         I Want Access to This       │           │    │
│    │         │           [CONTINUE BUTTON]         │           │    │
│    │         └─────────────────────────────────────┘           │    │
│    │                                                            │    │
│    │              "Chapter 5 of 5 • 2 minutes remaining"      │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Layout (320px - 767px)

```
┌─────────────────────────────────────┐
│          PROGRESS DOTS              │
│         ○● ○● ○● ● ○                │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │         HEADLINE                │ │
│ │        (2.25rem)                │ │
│ │   Finally, Results That         │ │
│ │   Last Because They're          │ │
│ │   Built on Systems,             │ │
│ │   Not Willpower                 │ │
│ │                                 │ │
│ │       SUBHEADLINE               │ │
│ │  Beta participants are          │ │
│ │  experiencing something         │ │
│ │  they've never had before:      │ │
│ │  effortless consistency.        │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      NARRATIVE SECTION          │ │
│ │       (1.125rem)                │ │
│ │                                 │ │
│ │ Sarah had tried everything...   │ │
│ │                                 │ │
│ │ [Full narrative - testimonial-  │ │
│ │  rich storytelling with bold    │ │
│ │  emphasis on success stories]   │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │    INTERACTIVE COMPONENTS       │ │
│ │                                 │ │
│ │ COMPONENT 1: STORY CAROUSEL     │ │
│ │ "Real People, Real Results"     │ │
│ │     ┌─────────────────┐         │ │
│ │     │     SARAH       │ ← Swipe │ │
│ │     │  Serial         │         │ │
│ │     │  Restarter      │         │ │
│ │     │                 │         │ │
│ │     │ [Before/After]  │         │ │
│ │     │                 │         │ │
│ │     │ "35 lbs lost,   │         │ │
│ │     │  feels natural  │         │ │
│ │     │  for first time"│         │ │
│ │     └─────────────────┘         │ │
│ │           ● ○ ○ ○               │ │
│ │                                 │ │
│ │ COMPONENT 2: RESULTS            │ │
│ │ "The Numbers Don't Lie"         │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │        87% Success          │ │ │
│ │ │     at 12 months            │ │ │
│ │ │         vs.                 │ │ │
│ │ │     12% industry            │ │ │
│ │ │      average                │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ Supporting Stats (Stacked):     │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ 89% Natural, Not Forced     │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ 94% Never Experienced This  │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ [All 6 stats stacked]          │ │
│ │                                 │ │
│ │ COMPONENT 3: TIMELINE          │ │
│ │ "Month by Month"                │ │
│ │     ┌─────────────┐             │ │
│ │     │   Month 1   │             │ │
│ │     │ Foundation  │             │ │
│ │     │             │             │ │
│ │     │"Doesn't feel│             │ │
│ │     │like dieting"│             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │  Month 2-3  │             │ │
│ │     │Integration  │             │ │
│ │     │             │             │ │
│ │     │"System      │             │ │
│ │     │reliable"    │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │ Month 4-6   │             │ │
│ │     │Transformation│            │ │
│ │     │             │             │ │
│ │     │"Friends     │             │ │
│ │     │notice"      │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │ Month 7-12  │             │ │
│ │     │  Mastery    │             │ │
│ │     │             │             │ │
│ │     │"Who you     │             │ │
│ │     │are now"     │             │ │
│ │     └─────────────┘             │ │
│ │                                 │ │
│ │ COMPONENT 4: SUCCESS TYPES      │ │
│ │ "Success Looks Different"       │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │      Weight Loss Focused    │ │ │
│ │ │                             │ │ │
│ │ │ • 30-80 lbs lost            │ │ │
│ │ │ • Broke plateaus            │ │ │
│ │ │ • Maintained for years      │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │    Behavior Transformation  │ │ │
│ │ │                             │ │ │
│ │ │ • Stopped emotional eating  │ │ │
│ │ │ • No Sunday night panic     │ │ │
│ │ │ • Exercise habits stick     │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ [All 6 categories stacked]     │ │
│ │                                 │ │
│ │ COMPONENT 5: 12-MONTH DATA     │ │
│ │ "Long-Term Results"             │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ 87% engaged at 12 months    │ │ │
│ │ │ 93% maintained goal         │ │ │
│ │ │ 89% continued improvement   │ │ │
│ │ │ 96% would recommend         │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │    Typical vs PN Transform  │ │ │
│ │ │                             │ │ │
│ │ │ Month 3: 60% → 94%          │ │ │
│ │ │ Month 6: 80% → 91%          │ │ │
│ │ │ Month 12: 95% → 87%         │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ Long-term Testimonial:          │ │
│ │ "This isn't a program—it's      │ │
│ │ just how I live now."           │ │
│ │ - Rachel, 14 months             │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      CHAPTER TRANSITION         │ │
│ │                                 │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │    I Want Access to This    │ │ │
│ │ │   [FULL WIDTH BUTTON]       │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │  "Chapter 5 of 5 • 2 min"      │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## Component Specifications

### Progress Indicator
- **Position**: Fixed at top, always visible
- **Style**: 5 circles, Chapters 1-3 completed (light blue filled), Chapter 4 active (dark blue filled), Chapter 5 outline
- **Colors**: Completed: #7dd3fc, Active: #068FB9, Inactive: #e6f5fa
- **Spacing**: Centered, 0.75rem gap between dots

### Background & Headlines
- **Background**: Richer blue tint (#e0f2fe) showing near-completion of journey
- **Main**: 3rem desktop / 2.25rem mobile, #20262B, bold, center-aligned
- **Sub**: 1.25rem, #4A5568, medium weight, center-aligned
- **Spacing**: 2rem margin-bottom on main, 1.5rem on sub

### Narrative Section
- **Typography**: 1.25rem desktop / 1.125rem mobile, #20262B
- **Line Height**: 1.75
- **Paragraph Spacing**: 1.5rem between paragraphs
- **Emphasis**: Bold for success stories and breakthrough statements
- **Quote Integration**: Testimonial quotes in slightly different color (#4A5568)

### Interactive Components
- **Spacing**: 4rem margin between each component (maintaining momentum)
- **Component 1**: Horizontal carousel on desktop, swipe cards on mobile
- **Component 2**: Large stats with supporting grid, stacked stats on mobile
- **Component 3**: Horizontal timeline on desktop, vertical progression on mobile
- **Component 4**: 2x3 grid on desktop, stacked categories on mobile
- **Component 5**: Data comparison charts with testimonial integration

### Success Story Carousel
- **Desktop**: 4 visible cards with navigation arrows and dots
- **Mobile**: Single card view with horizontal swipe and progress dots
- **Card Content**: Photo, challenge, breakthrough, result, timeline
- **Visual Style**: Clean cards with subtle shadows, hover effects

### Results Dashboard
- **Main Stat**: Large, animated counter showing 87% vs 12%
- **Supporting Grid**: 2x3 grid on desktop, stacked on mobile
- **Comparison Table**: Side-by-side traditional vs PN Transform
- **Animation**: Count-up effects when section comes into view

### Transformation Timeline
- **Desktop**: Horizontal 4-phase timeline with expandable details
- **Mobile**: Vertical progression with downward arrows
- **Phase Colors**: Progressive blue shading showing evolution
- **Interaction**: Click each phase for detailed breakdown

### Different Types of Success
- **Desktop**: 2x3 grid of success categories with icons
- **Mobile**: Stacked cards with expandable details
- **Content**: Brief bullets for each category, hover reveals examples
- **Visual Style**: Icons representing each success type

### 12-Month Follow-Up Data
- **Main Stats**: 4 key sustainability metrics prominently displayed
- **Comparison Chart**: Traditional vs PN Transform progression
- **Testimonials**: Integrated long-term success quotes
- **Visual Emphasis**: Strong contrast showing lasting results vs typical failures

### Continue Button
- **Desktop**: Max-width 24rem, centered
- **Mobile**: Full width with side margins
- **Style**: #068FB9 background, white text, bold, rounded corners
- **Text**: "I Want Access to This" (direct desire activation)
- **Hover**: Darker blue (#055f7d), slight elevation

### Overall Spacing
- **Container**: Max-width 42rem, centered
- **Padding**: 2rem horizontal on desktop, 1rem on mobile
- **Vertical**: Consistent 4rem between major sections (crescendo building)
