# PN Transform Chapter 2 - Wireframe

## Overall Page Structure
```
┌─────────────────────────────────────────────────────────────┐
│                    PROGRESS INDICATOR                       │
│                  ○● ● ○ ○ ○ (Chapter 1-5)                  │
│              (Chapter 1 complete, 2 active)                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       MAIN CONTENT                         │
│                    (Max-width: 42rem)                      │
│                 (Light blue background: #f8fcfe)           │
└─────────────────────────────────────────────────────────────┘
```

---

## Desktop Layout (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           PROGRESS DOTS                             │
│                        ○● ● ○ ○ ○                                   │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                                                            │    │
│    │              HEADLINE (3rem, center-aligned)              │    │
│    │         After 20 Years of Data, We Discovered             │    │
│    │                Why Every Diet Fails                       │    │
│    │                                                            │    │
│    │         SUBHEADLINE (1.25rem, center-aligned)             │    │
│    │    The entire $78 billion industry has been solving       │    │
│    │                  the wrong equation.                      │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                  NARRATIVE SECTION                        │    │
│    │                (1.25rem, left-aligned)                    │    │
│    │                                                            │    │
│    │  After 20 years of coaching 175,000+ clients...          │    │
│    │                                                            │    │
│    │  [Full narrative copy - 400-450 words]                    │    │
│    │  [Bold emphasis on key revelations]                       │    │
│    │                                                            │    │
│    │  But here's what we discovered: The adherence problem     │    │
│    │  isn't a character flaw. It's an engineering problem.     │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                INTERACTIVE COMPONENTS                      │    │
│    │                                                            │    │
│    │  COMPONENT 1: PROBLEM EQUATION VISUAL                     │    │
│    │  ┌─────────────────┐    ┌─────────────────┐               │    │
│    │  │  WHAT TO EAT    │ VS │  HOW TO STICK   │               │    │
│    │  │ (Body Mechanics)│    │ (Life Mechanics)│               │    │
│    │  │                 │    │                 │               │    │
│    │  │ • Keto          │    │ • Stress eating │               │    │
│    │  │ • Paleo         │    │ • Travel chaos  │               │    │
│    │  │ • Macros        │    │ • Family drama  │               │    │
│    │  │ • Plant-based   │    │ • Work pressure │               │    │
│    │  │                 │    │                 │               │    │
│    │  │ [Red/Orange]    │    │ [PN Blue]      │               │    │
│    │  └─────────────────┘    └─────────────────┘               │    │
│    │                                                            │    │
│    │  COMPONENT 2: INDUSTRY FAILURE STATISTICS                 │    │
│    │  ┌─────────────────────────────────────────────────────┐  │    │
│    │  │        $78,000,000,000 spent annually on diets     │  │    │
│    │  │              95% failure rate within 12 months     │  │    │
│    │  │         3-5 restart attempts per person per year   │  │    │
│    │  │                                                     │  │    │
│    │  │  "The industry profits from your 'failures'"       │  │    │
│    │  └─────────────────────────────────────────────────────┘  │    │
│    │                                                            │    │
│    │  COMPONENT 3: REAL-LIFE SCENARIO BREAKDOWN                │    │
│    │  "When Life Gets Messy, Diets Fall Apart"                 │    │
│    │  ┌──────────┐ ┌──────────┐ ┌──────────┐                 │    │
│    │  │   Work   │ │  Travel  │ │  Family  │                 │    │
│    │  │  Stress  │ │Disruption│ │  Drama   │                 │    │
│    │  └──────────┘ └──────────┘ └──────────┘                 │    │
│    │  ┌──────────┐ ┌──────────┐ ┌──────────┐                 │    │
│    │  │  Social  │ │ Illness/ │ │   Life   │                 │    │
│    │  │  Events  │ │  Injury  │ │ Changes  │                 │    │
│    │  └──────────┘ └──────────┘ └──────────┘                 │    │
│    │           [Expandable cards with details]                │    │
│    │                                                            │    │
│    │  COMPONENT 4: BLAME CYCLE DIAGRAM                        │    │
│    │  "How the Industry Keeps You Coming Back"                │    │
│    │                 ┌─────────────────┐                      │    │
│    │               ↗ │   Try New Diet  │ ↘                    │    │
│    │             ↗   └─────────────────┘   ↘                  │    │
│    │  ┌─────────────┐                   ┌─────────────┐       │    │
│    │  │ Research    │    ┌─────────┐    │ Life Gets   │       │    │
│    │  │ Again       │ ←  │ SYSTEM  │ →  │ Messy       │       │    │
│    │  └─────────────┘    │DESIGNED │    └─────────────┘       │    │
│    │             ↖       │TO FAIL  │           ↙               │    │
│    │               ↖     └─────────┘         ↙                 │    │
│    │                 ┌─────────────────┐ ↙                    │    │
│    │                 │  Blame Yourself │                      │    │
│    │                 └─────────────────┘                      │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                 CHAPTER TRANSITION                        │    │
│    │                                                            │    │
│    │         ┌─────────────────────────────────────┐           │    │
│    │         │         Show Me the Solution        │           │    │
│    │         │           [CONTINUE BUTTON]         │           │    │
│    │         └─────────────────────────────────────┘           │    │
│    │                                                            │    │
│    │              "Chapter 3 of 5 • 4 minutes remaining"      │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Layout (320px - 767px)

```
┌─────────────────────────────────────┐
│          PROGRESS DOTS              │
│           ○● ● ○ ○ ○                │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │         HEADLINE                │ │
│ │        (2.25rem)                │ │
│ │   After 20 Years of Data,       │ │
│ │    We Discovered Why            │ │
│ │    Every Diet Fails             │ │
│ │                                 │ │
│ │       SUBHEADLINE               │ │
│ │  The entire $78 billion         │ │
│ │  industry has been solving      │ │
│ │   the wrong equation.           │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      NARRATIVE SECTION          │ │
│ │       (1.125rem)                │ │
│ │                                 │ │
│ │ After 20 years of coaching...   │ │
│ │                                 │ │
│ │ [Full narrative - stacked       │ │
│ │  paragraphs with bold           │ │
│ │  emphasis on revelations]       │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │    INTERACTIVE COMPONENTS       │ │
│ │                                 │ │
│ │ COMPONENT 1: PROBLEM EQUATION   │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │       WHAT TO EAT           │ │ │
│ │ │    (Body Mechanics)         │ │ │
│ │ │                             │ │ │
│ │ │ • Keto    • Paleo           │ │ │
│ │ │ • Macros  • Plant-based     │ │ │
│ │ │        [Red/Orange]         │ │ │
│ │ └─────────────────────────────┘ │ │
│ │               VS                │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │       HOW TO STICK          │ │ │
│ │ │     (Life Mechanics)        │ │ │
│ │ │                             │ │ │
│ │ │ • Stress   • Travel         │ │ │
│ │ │ • Family   • Work           │ │ │
│ │ │        [PN Blue]            │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ COMPONENT 2: STATISTICS         │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ $78B spent annually         │ │ │
│ │ │ 95% failure rate            │ │ │
│ │ │ 3-5 restart attempts        │ │ │
│ │ │                             │ │ │
│ │ │ "Industry profits from      │ │ │
│ │ │  your 'failures'"           │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ COMPONENT 3: SCENARIOS (Stack)  │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │        Work Stress          │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │     Travel Disruption       │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ [All 6 cards stacked]          │ │
│ │                                 │ │
│ │ COMPONENT 4: BLAME CYCLE        │ │
│ │     ┌─────────────┐             │ │
│ │     │ Try New     │             │ │
│ │     │ Diet        │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │ Life Gets   │             │ │
│ │     │ Messy       │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │ Blame       │             │ │
│ │     │ Yourself    │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │ Research    │             │ │
│ │     │ Again       │             │ │
│ │     └─────────────┘             │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      CHAPTER TRANSITION         │ │
│ │                                 │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │    Show Me the Solution     │ │ │
│ │ │   [FULL WIDTH BUTTON]       │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │  "Chapter 3 of 5 • 4 min"      │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## Component Specifications

### Progress Indicator
- **Position**: Fixed at top, always visible
- **Style**: 5 circles, Chapter 1 completed (light blue filled), Chapter 2 active (dark blue filled), others outline
- **Colors**: Completed: #7dd3fc, Active: #068FB9, Inactive: #e6f5fa
- **Spacing**: Centered, 0.75rem gap between dots

### Background & Headlines
- **Background**: Very light blue (#f8fcfe) to signal progression from Chapter 1
- **Main**: 3rem desktop / 2.25rem mobile, #20262B, bold, center-aligned
- **Sub**: 1.25rem, #4A5568, medium weight, center-aligned
- **Spacing**: 2rem margin-bottom on main, 1.5rem on sub

### Narrative Section
- **Typography**: 1.25rem desktop / 1.125rem mobile, #20262B
- **Line Height**: 1.75
- **Paragraph Spacing**: 1.5rem between paragraphs
- **Emphasis**: Bold for key revelations (**WHAT**, **The real challenge**, etc.)

### Interactive Components
- **Spacing**: 4rem margin between each component (more than Chapter 1)
- **Component 1**: Side-by-side cards on desktop, stacked on mobile
- **Component 2**: Large animated statistics with count-up effects
- **Component 3**: 2x3 grid on desktop, stacked cards on mobile
- **Component 4**: Circular diagram on desktop, vertical flow on mobile

### Problem Equation Visual
- **Desktop**: Two side-by-side cards with clear visual contrast
- **Mobile**: Stacked cards with "VS" separator
- **Colors**: Left side (#dc2626), Right side (#068FB9)
- **Hover**: Expanded details for each side

### Blame Cycle Diagram
- **Desktop**: Circular flow with arrows and center text
- **Mobile**: Vertical flow with downward arrows
- **Interaction**: Clickable stages reveal messaging vs. reality
- **Colors**: Gray for cycle, red for blame stage, blue for breakthrough insight

### Continue Button
- **Desktop**: Max-width 24rem, centered
- **Mobile**: Full width with side margins
- **Style**: #068FB9 background, white text, bold, rounded corners
- **Text**: "Show Me the Solution" (promises breakthrough)
- **Hover**: Darker blue (#055f7d), slight elevation

### Overall Spacing
- **Container**: Max-width 42rem, centered
- **Padding**: 2rem horizontal on desktop, 1rem on mobile
- **Vertical**: Larger spacing than Chapter 1 (4rem between major sections)

---

## Key Design Principles

1. **Visual Progression**: Light blue background signals advancement from Chapter 1
2. **Authority Building**: Clean, professional layout supports "20 years of data" positioning
3. **Problem Revelation**: Visual contrast emphasizes wrong vs. right equation
4. **Interactive Proof**: Each component validates the narrative claims
5. **Emotional Transition**: Design supports shift from self-blame to system blame
6. **Solution Anticipation**: Continue button creates maximum curiosity for Chapter 3