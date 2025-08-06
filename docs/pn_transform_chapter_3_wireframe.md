# PN Transform Chapter 3 - Wireframe

## Overall Page Structure
```
┌─────────────────────────────────────────────────────────────┐
│                    PROGRESS INDICATOR                       │
│                  ○● ○● ● ○ ○ (Chapter 1-5)                 │
│            (Chapters 1-2 complete, 3 active)               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       MAIN CONTENT                         │
│                    (Max-width: 42rem)                      │
│               (Deeper blue background: #f0f9ff)            │
└─────────────────────────────────────────────────────────────┘
```

---

## Desktop Layout (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           PROGRESS DOTS                             │
│                       ○● ○● ● ○ ○                                   │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                                                            │    │
│    │              HEADLINE (3rem, center-aligned)              │    │
│    │         We Built the First System That Makes              │    │
│    │               Adherence Inevitable                        │    │
│    │                                                            │    │
│    │         SUBHEADLINE (1.25rem, center-aligned)             │    │
│    │    What if adherence wasn't about willpower?              │    │
│    │         What if it was about infrastructure?              │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                  NARRATIVE SECTION                        │    │
│    │                (1.25rem, left-aligned)                    │    │
│    │                                                            │    │
│    │  Think about your smartphone. You check it 150+ times...  │    │
│    │                                                            │    │
│    │  [Full narrative copy - 450-500 words]                    │    │
│    │  [Bold emphasis on breakthrough concepts]                 │    │
│    │                                                            │    │
│    │  For the first time in your life, sticking to something   │    │
│    │  isn't a daily battle. It's genuinely enjoyable.          │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                INTERACTIVE COMPONENTS                      │    │
│    │                                                            │    │
│    │  COMPONENT 1: THREE-PHASE SYSTEM DEMO                     │    │
│    │  "How TransformOS Makes Adherence Automatic"              │    │
│    │  ┌─────────┐    ┌─────────┐    ┌─────────┐                │    │
│    │  │ANTICI-  │ -> │INTER-   │ -> │ENCOUR-  │                │    │
│    │  │PATE     │    │VENE     │    │AGE      │                │    │
│    │  │         │    │         │    │         │                │    │
│    │  │72hrs    │    │Real-time│    │After    │                │    │
│    │  │Before   │    │Support  │    │Success  │                │    │
│    │  │         │    │         │    │         │                │    │
│    │  │[Orange] │    │ [Red]   │    │[Green]  │                │    │
│    │  └─────────┘    └─────────┘    └─────────┘                │    │
│    │       [Interactive click-through with scenarios]          │    │
│    │                                                            │    │
│    │  COMPONENT 2: PERSONAL MOTIVATION LEARNING                │    │
│    │  "TransformOS Learns What Actually Motivates You"         │    │
│    │  ┌─────────────┐ ┌─────────────┐                         │    │
│    │  │Achievement  │ │ Connection  │                         │    │
│    │  │ Oriented    │ │  Focused    │                         │    │
│    │  └─────────────┘ └─────────────┘                         │    │
│    │  ┌─────────────┐ ┌─────────────┐                         │    │
│    │  │ Autonomy    │ │  Security   │                         │    │
│    │  │  Driven     │ │ Motivated   │                         │    │
│    │  └─────────────┘ └─────────────┘                         │    │
│    │                                                            │    │
│    │       Learning Process: Week 1 -> 2-3 -> 4+              │    │
│    │      "73% higher adherence than generic approaches"       │    │
│    │                                                            │    │
│    │  COMPONENT 3: PN METHOD TIMELINE                         │    │
│    │  "Building Behavior Infrastructure from the Ground Up"    │    │
│    │  Week 1-2 ──── Week 3-4 ──── Week 5-6 ──── Week 7+      │    │
│    │  ┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐      │    │
│    │  │Foundation│ │Appetite│   │  Life  │   │ Habit  │      │    │
│    │  │Building │   │Awareness│  │Integra-│   │Automa- │      │    │
│    │  │        │   │        │   │ tion   │   │ tion   │      │    │
│    │  │How you │   │80% full│   │Real-   │   │Identity│      │    │
│    │  │eat     │   │        │   │world   │   │formed  │      │    │
│    │  └────────┘   └────────┘   └────────┘   └────────┘      │    │
│    │         [Expandable details for each phase]              │    │
│    │                                                            │    │
│    │  COMPONENT 4: HEALTHY HABIT ADDICTION COMPARISON         │    │
│    │  "Become Addicted to Healthy Habits (Not Your Phone)"    │    │
│    │  ┌─────────────────┐    ┌─────────────────┐              │    │
│    │  │ PHONE ADDICTION │ VS │HEALTHY ADDICTION│              │    │
│    │  │                 │    │                 │              │    │
│    │  │ Trigger ────────│────│───────> Trigger │              │    │
│    │  │ Behavior ───────│────│──────> Behavior │              │    │
│    │  │ Reward ─────────│────│────────> Reward │              │    │
│    │  │ Result ─────────│────│────────> Result │              │    │
│    │  │                 │    │                 │              │    │
│    │  │ 150+ daily      │    │ Consistent      │              │    │
│    │  │ checks          │    │ healthy choices │              │    │
│    │  └─────────────────┘    └─────────────────┘              │    │
│    │               "Same psychology, different outcome"       │    │
│    │                                                            │    │
│    │  COMPONENT 5: ADHERENCE ECOSYSTEM DIAGRAM                │    │
│    │  "Complete Behavior Change Ecosystem"                     │    │
│    │              ┌─────────────────────────┐                 │    │
│    │            ↗ │     TransformOS AI      │ ↘               │    │
│    │          ↗   │ Anticipate, Intervene,  │   ↘             │    │
│    │        ↗     │      Encourage          │     ↘           │    │
│    │  ┌──────────┐└─────────────────────────┘┌──────────┐     │    │
│    │  │ Pattern  │                           │MotivationPerson│    │
│    │  │Recognition│     ┌─────────────┐     │alization │     │    │
│    │  └──────────┘     │ PN Method   │     └──────────┘     │    │
│    │        ↖          │  Coaching   │          ↙           │    │
│    │          ↖        └─────────────┘        ↙             │    │
│    │            ↖                           ↙               │    │
│    │              ↖ ┌─────────────────┐ ↙                 │    │
│    │                │ Life Context    │                   │    │
│    │                │   Adaptation    │                   │    │
│    │                └─────────────────┘                   │    │
│    │                                                            │    │
│    │         Traditional: 12% ────── PN Transform: 87%        │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                 CHAPTER TRANSITION                        │    │
│    │                                                            │    │
│    │         ┌─────────────────────────────────────┐           │    │
│    │         │          Show Me the Proof          │           │    │
│    │         │           [CONTINUE BUTTON]         │           │    │
│    │         └─────────────────────────────────────┘           │    │
│    │                                                            │    │
│    │              "Chapter 4 of 5 • 3 minutes remaining"      │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Layout (320px - 767px)

```
┌─────────────────────────────────────┐
│          PROGRESS DOTS              │
│          ○● ○● ● ○ ○                │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │         HEADLINE                │ │
│ │        (2.25rem)                │ │
│ │   We Built the First System     │ │
│ │   That Makes Adherence          │ │
│ │        Inevitable               │ │
│ │                                 │ │
│ │       SUBHEADLINE               │ │
│ │  What if adherence wasn't       │ │
│ │    about willpower?             │ │
│ │  What if it was about           │ │
│ │    infrastructure?              │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      NARRATIVE SECTION          │ │
│ │       (1.125rem)                │ │
│ │                                 │ │
│ │ Think about your smartphone...  │ │
│ │                                 │ │
│ │ [Full narrative - stacked       │ │
│ │  paragraphs with bold           │ │
│ │  emphasis on breakthroughs]     │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │    INTERACTIVE COMPONENTS       │ │
│ │                                 │ │
│ │ COMPONENT 1: THREE-PHASE DEMO   │ │
│ │ "How TransformOS Works"         │ │
│ │     ┌─────────────────┐         │ │
│ │     │   ANTICIPATE    │         │ │
│ │     │   72 Hours      │         │ │
│ │     │    Before       │         │ │
│ │     │   [Orange]      │         │ │
│ │     └─────────────────┘         │ │
│ │           ↓ Swipe               │ │
│ │     ┌─────────────────┐         │ │
│ │     │   INTERVENE     │         │ │
│ │     │   Real-time     │         │ │
│ │     │   Support       │         │ │
│ │     │    [Red]        │         │ │
│ │     └─────────────────┘         │ │
│ │           ↓ Swipe               │ │
│ │     ┌─────────────────┐         │ │
│ │     │   ENCOURAGE     │         │ │
│ │     │    After        │         │ │
│ │     │   Success       │         │ │
│ │     │   [Green]       │         │ │
│ │     └─────────────────┘         │ │
│ │                                 │ │
│ │ COMPONENT 2: MOTIVATION TYPES   │ │
│ │ "What Motivates You?"           │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │     Achievement Oriented    │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │     Connection Focused      │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │      Autonomy Driven        │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │     Security Motivated      │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ "73% higher adherence"          │ │
│ │                                 │ │
│ │ COMPONENT 3: PN METHOD         │ │
│ │ "Building from Ground Up"       │ │
│ │     ┌─────────────┐             │ │
│ │     │  Week 1-2   │             │ │
│ │     │ Foundation  │             │ │
│ │     │ Building    │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │  Week 3-4   │             │ │
│ │     │  Appetite   │             │ │
│ │     │ Awareness   │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │  Week 5-6   │             │ │
│ │     │    Life     │             │ │
│ │     │ Integration │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │  Week 7+    │             │ │
│ │     │    Habit    │             │ │
│ │     │ Automation  │             │ │
│ │     └─────────────┘             │ │
│ │                                 │ │
│ │ COMPONENT 4: ADDICTION COMPARE  │ │
│ │ "Same Psychology, Different     │ │
│ │         Outcome"                │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │      PHONE ADDICTION        │ │ │
│ │ │                             │ │ │
│ │ │ Trigger → Behavior →        │ │ │
│ │ │ Reward → Result             │ │ │
│ │ │                             │ │ │
│ │ │ 150+ daily checks           │ │ │
│ │ └─────────────────────────────┘ │ │
│ │               VS                │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │     HEALTHY ADDICTION       │ │ │
│ │ │                             │ │ │
│ │ │ Trigger → Behavior →        │ │ │
│ │ │ Reward → Result             │ │ │
│ │ │                             │ │ │
│ │ │ Consistent healthy choices  │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ COMPONENT 5: ECOSYSTEM         │ │
│ │ "Complete System"               │ │
│ │      ┌─────────────┐            │ │
│ │      │TransformOS  │            │ │
│ │      │     AI      │            │ │
│ │      └─────────────┘            │ │
│ │            ↓                    │ │
│ │      ┌─────────────┐            │ │
│ │      │ PN Method   │            │ │
│ │      │  Coaching   │            │ │
│ │      └─────────────┘            │ │
│ │            ↓                    │ │
│ │      ┌─────────────┐            │ │
│ │      │Life Context │            │ │
│ │      │ Adaptation  │            │ │
│ │      └─────────────┘            │ │
│ │                                 │ │
│ │ Traditional: 12%                │ │
│ │ PN Transform: 87%               │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      CHAPTER TRANSITION         │ │
│ │                                 │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │     Show Me the Proof       │ │ │
│ │ │   [FULL WIDTH BUTTON]       │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │  "Chapter 4 of 5 • 3 min"      │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## Component Specifications

### Progress Indicator
- **Position**: Fixed at top, always visible
- **Style**: 5 circles, Chapters 1-2 completed (light blue filled), Chapter 3 active (dark blue filled), others outline
- **Colors**: Completed: #7dd3fc, Active: #068FB9, Inactive: #e6f5fa
- **Spacing**: Centered, 0.75rem gap between dots

### Background & Headlines
- **Background**: Deeper blue tint (#f0f9ff) to signal advancement toward breakthrough
- **Main**: 3rem desktop / 2.25rem mobile, #20262B, bold, center-aligned
- **Sub**: 1.25rem, #4A5568, medium weight, center-aligned
- **Spacing**: 2rem margin-bottom on main, 1.5rem on sub

### Narrative Section
- **Typography**: 1.25rem desktop / 1.125rem mobile, #20262B
- **Line Height**: 1.75
- **Paragraph Spacing**: 1.5rem between paragraphs
- **Emphasis**: Bold for breakthrough concepts (**TransformOS**, **PN Method**, etc.)

### Interactive Components
- **Spacing**: 4rem margin between each component (building momentum)
- **Component 1**: Three-phase horizontal flow on desktop, vertical swipe on mobile
- **Component 2**: 2x2 grid on desktop, stacked cards on mobile
- **Component 3**: Horizontal timeline on desktop, vertical progression on mobile
- **Component 4**: Side-by-side comparison on desktop, stacked comparison on mobile
- **Component 5**: Interconnected diagram on desktop, simplified flow on mobile

### Three-Phase System Demo
- **Desktop**: Horizontal flow with arrows showing progression
- **Mobile**: Vertical swipe interface with progress dots
- **Colors**: Orange → Red → Green for Anticipate → Intervene → Encourage
- **Interaction**: Click-through scenarios showing real examples

### PN Method Timeline
- **Desktop**: Horizontal timeline with expandable details
- **Mobile**: Vertical progression with downward arrows
- **Phase Colors**: Progressive shading from light to dark blue
- **Key Insight**: "No food restrictions until behavior patterns are automatic"

### Adherence Ecosystem Diagram
- **Desktop**: Central hub with connected elements radiating outward
- **Mobile**: Simplified vertical flow showing key components
- **Stats Emphasis**: 87% vs 12% prominently displayed
- **Interaction**: Clickable elements explain contribution to success rate

### Continue Button
- **Desktop**: Max-width 24rem, centered
- **Mobile**: Full width with side margins
- **Style**: #068FB9 background, white text, bold, rounded corners
- **Text**: "Show Me the Proof" (builds anticipation for Chapter 4)
- **Hover**: Darker blue (#055f7d), slight elevation

### Overall Spacing
- **Container**: Max-width 42rem, centered
- **Padding**: 2rem horizontal on desktop, 1rem on mobile
- **Vertical**: Progressive spacing increase (4rem between major sections)

