# PN Transform Chapter 1 - Wireframe

## Overall Page Structure
```
┌─────────────────────────────────────────────────────────────┐
│                    PROGRESS INDICATOR                       │
│                  ● ○ ○ ○ ○ (Chapter 1-5)                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       MAIN CONTENT                         │
│                    (Max-width: 42rem)                      │
│                     (Centered on page)                     │
└─────────────────────────────────────────────────────────────┘
```

---

## Desktop Layout (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           PROGRESS DOTS                             │
│                         ● ○ ○ ○ ○                                   │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                                                            │    │
│    │              HEADLINE (3rem, center-aligned)              │    │
│    │         The Real Reason You Can't Stick to Any Diet       │    │
│    │                  (It's Not What You Think)                │    │
│    │                                                            │    │
│    │         SUBHEADLINE (1.25rem, center-aligned)             │    │
│    │      You recognize this story because you've lived it.    │    │
│    │                   Maybe multiple times.                   │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                                                            │    │
│    │                  NARRATIVE SECTION                        │    │
│    │                (1.25rem, left-aligned)                    │    │
│    │                                                            │    │
│    │  You know this story by heart because you've lived it...  │    │
│    │                                                            │    │
│    │  [Full narrative copy - 350-400 words]                    │    │
│    │  [Generous paragraph spacing: 1.5rem]                     │    │
│    │                                                            │    │
│    │  But what if I told you that this cycle—every part        │    │
│    │  of it—was entirely predictable?                          │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                INTERACTIVE COMPONENTS                      │    │
│    │                                                            │    │
│    │  COMPONENT 1: CYCLE VISUALIZATION                         │    │
│    │  ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐             │    │
│    │  │Monday│----│Reality│----│Break │----│Restart│            │    │
│    │  │ ● ──────── ● ──────── ● ──────── ● │             │    │
│    │  └──────┘    └──────┘    └──────┘    └──────┘             │    │
│    │           [Clickable with details cards below]            │    │
│    │                                                            │    │
│    │  COMPONENT 2: RECOGNITION QUIZ                            │    │
│    │  "How Many of These Sound Familiar?"                      │    │
│    │  ┌─────────┐ ┌─────────┐ ┌─────────┐                     │    │
│    │  │  Keto   │ │   IF    │ │ Macros  │                     │    │
│    │  └─────────┘ └─────────┘ └─────────┘                     │    │
│    │  ┌─────────┐ ┌─────────┐ ┌─────────┐                     │    │
│    │  │   Gym   │ │Trainer  │ │ Meals   │                     │    │
│    │  └─────────┘ └─────────┘ └─────────┘                     │    │
│    │        [Counter: "You've tried X approaches"]            │    │
│    │                                                            │    │
│    │  COMPONENT 3: VALIDATION STATISTICS                      │    │
│    │  ┌─────────────────────────────────────────────────────┐  │    │
│    │  │         95% of diets fail within 12 months          │  │    │
│    │  │       73% of people restart 3+ times per year       │  │    │
│    │  │      89% blame themselves instead of the system     │  │    │
│    │  └─────────────────────────────────────────────────────┘  │    │
│    │                                                            │    │
│    │  COMPONENT 4: MICRO-SURVEY                               │    │
│    │  "How many times have you 'started over' in last 2 years?" │   │
│    │  ○ 1-2 times    ○ 3-5 times    ○ 6-10 times             │    │
│    │  ○ More than 10    ○ I've lost count                     │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                 CHAPTER TRANSITION                        │    │
│    │                                                            │    │
│    │         ┌─────────────────────────────────────┐           │    │
│    │         │     Show Me What's Really Happening  │           │    │
│    │         │           [CONTINUE BUTTON]          │           │    │
│    │         └─────────────────────────────────────┘           │    │
│    │                                                            │    │
│    │              "Chapter 2 of 5 • 3 minutes remaining"      │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Layout (320px - 767px)

```
┌─────────────────────────────────────┐
│          PROGRESS DOTS              │
│            ● ○ ○ ○ ○                │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │         HEADLINE                │ │
│ │        (2.25rem)                │ │
│ │   The Real Reason You Can't     │ │
│ │    Stick to Any Diet            │ │
│ │   (It's Not What You Think)     │ │
│ │                                 │ │
│ │       SUBHEADLINE               │ │
│ │    You recognize this story     │ │
│ │   because you've lived it.      │ │
│ │    Maybe multiple times.        │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      NARRATIVE SECTION          │ │
│ │       (1.125rem)                │ │
│ │                                 │ │
│ │ You know this story by heart... │ │
│ │                                 │ │
│ │ [Full narrative - stacked       │ │
│ │  paragraphs with generous       │ │
│ │  spacing for readability]       │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │    INTERACTIVE COMPONENTS       │ │
│ │                                 │ │
│ │ COMPONENT 1: CYCLE (Vertical)   │ │
│ │     ┌─────────┐                 │ │
│ │     │ Monday  │                 │ │
│ │     │    ↓    │                 │ │
│ │     │ Reality │                 │ │
│ │     │    ↓    │                 │ │
│ │     │Breakdown│                 │ │
│ │     │    ↓    │                 │ │
│ │     │Restart  │                 │ │
│ │     └─────────┘                 │ │
│ │                                 │ │
│ │ COMPONENT 2: QUIZ (Stacked)     │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │          Keto               │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │     Intermittent Fasting    │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ [All 6 cards stacked]          │ │
│ │                                 │ │
│ │ COMPONENT 3: STATS              │ │
│ │ [Same layout, smaller text]     │ │
│ │                                 │ │
│ │ COMPONENT 4: SURVEY             │ │
│ │ [Radio buttons stacked]         │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      CHAPTER TRANSITION         │ │
│ │                                 │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ Show Me What's Really       │ │ │
│ │ │     Happening               │ │ │
│ │ │   [FULL WIDTH BUTTON]       │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │  "Chapter 2 of 5 • 3 min"      │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## Component Specifications

### Progress Indicator
- **Position**: Fixed at top, always visible
- **Style**: 5 circles, Chapter 1 filled (●), others outline (○)
- **Colors**: Active: #068FB9, Inactive: #e6f5fa
- **Spacing**: Centered, 0.75rem gap between dots

### Headlines
- **Main**: 3rem desktop / 2.25rem mobile, #20262B, bold, center-aligned
- **Sub**: 1.25rem, #4A5568, medium weight, center-aligned
- **Spacing**: 2rem margin-bottom on main, 1.5rem on sub

### Narrative Section
- **Typography**: 1.25rem desktop / 1.125rem mobile, #20262B
- **Line Height**: 1.75
- **Paragraph Spacing**: 1.5rem between paragraphs
- **Emphasis**: Italics for emotional words, bold for key realizations

### Interactive Components
- **Spacing**: 3rem margin between each component
- **Cards**: Subtle shadows, hover states, click animations
- **Colors**: PN blue (#068FB9) for active states, encouragement messages
- **Layout**: Responsive grid that stacks on mobile

### Continue Button
- **Desktop**: Max-width 24rem, centered
- **Mobile**: Full width with side margins
- **Style**: #068FB9 background, white text, bold, rounded corners
- **Hover**: Darker blue (#055f7d), slight elevation
- **Spacing**: 4rem margin-top, 1rem margin-bottom

### Overall Spacing
- **Container**: Max-width 42rem, centered
- **Padding**: 2rem horizontal on desktop, 1rem on mobile
- **Vertical**: Generous spacing between all sections (3-4rem)

---

## Key Design Principles

1. **Mobile-First**: Ensure all components work perfectly on small screens
2. **Progressive Enhancement**: Add interactions and animations for larger screens
3. **Accessibility**: Proper contrast, keyboard navigation, screen reader support
4. **Performance**: Lazy load animations, optimize for fast initial paint
5. **Emotional Journey**: Visual design supports the psychological progression
6. **Clean Focus**: Minimal distractions, pure focus on the story and interactions