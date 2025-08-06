# PN Transform Chapter 5 - Wireframe

## Overall Page Structure
```
┌─────────────────────────────────────────────────────────────┐
│                    PROGRESS INDICATOR                       │
│                  ○● ○● ○● ○● ● (Chapter 1-5)               │
│            (Chapters 1-4 complete, 5 active)               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       MAIN CONTENT                         │
│                    (Max-width: 42rem)                      │
│                 (Clean white background)                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Desktop Layout (1024px+)

```
┌──────────────────────────────────────────────────────────────────────┐
│                           PROGRESS DOTS                             │
│                      ○● ○● ○● ○● ●                                 │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                                                            │    │
│    │              HEADLINE (3rem, center-aligned)              │    │
│    │        This Changes Everything. But It's Not              │    │
│    │           Available Everywhere. Yet.                      │    │
│    │                                                            │    │
│    │         SUBHEADLINE (1.25rem, center-aligned)             │    │
│    │    We're in the middle of a limited rollout.              │    │
│    │   We can only support a small number of people            │    │
│    │                  in each region.                          │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                  NARRATIVE SECTION                        │    │
│    │                (1.25rem, left-aligned)                    │    │
│    │                                                            │    │
│    │  We're in the middle of a limited geographic rollout...   │    │
│    │                                                            │    │
│    │  [Full narrative copy - exclusivity and access]           │    │
│    │  [Bold emphasis on scarcity and benefits]                 │    │
│    │                                                            │    │
│    │  Ready to finally solve your consistency problem?         │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                INTERACTIVE COMPONENTS                      │    │
│    │                                                            │    │
│    │  COMPONENT 1: ASSESSMENT PREVIEW                         │    │
│    │  "The Assessment: Are You Ready?"                          │    │
│    │  ┌─────────────────┐ ┌─────────────────┐                 │    │
│    │  │ Past Experience │ │  Psychological  │                 │    │
│    │  │    Analysis     │ │   Readiness     │                 │    │
│    │  │                 │ │                 │                 │    │
│    │  │• 3 years tried? │ │• Quick fixes or │                 │    │
│    │  │• What stops you?│ │  lasting change?│                 │    │
│    │  │• Most success?  │ │• Handle setbacks│                 │    │
│    │  └─────────────────┘ └─────────────────┘                 │    │
│    │  ┌─────────────────┐ ┌─────────────────┐                 │    │
│    │  │   Lifestyle     │ │   Commitment    │                 │    │
│    │  │ Compatibility   │ │   Assessment    │                 │    │
│    │  │                 │ │                 │                 │    │
│    │  │• Typical week?  │ │• Ready for how  │                 │    │
│    │  │• Time constraints│ │  before what?  │                 │    │
│    │  │• Home support?  │ │• 6+ months?     │                 │    │
│    │  └─────────────────┘ └─────────────────┘                 │    │
│    │      [Expandable sections showing sample questions]       │    │
│    │                                                            │    │
│    │  COMPONENT 2: GEOGRAPHIC AVAILABILITY MAP                │    │
│    │  "Current Rollout Status"                                 │    │
│    │  ┌─────────────────────────────────────────────────────┐  │    │
│    │  │                 [INTERACTIVE MAP]                   │  │    │
│    │  │                                                     │  │    │
│    │  │ Phase 1 (Available Now)    Phase 2 (Q2 2025)       │  │    │
│    │  │ • Major Metro Areas        • Additional US Cities   │  │    │
│    │  │ • Accepting Applications   • Join Waitlist          │  │    │
│    │  │ • Limited Spots Remaining  • Priority Access        │  │    │
│    │  │                                                     │  │    │
│    │  │ Phase 3 (Q3-Q4 2025)       Phase 4 (Future)        │  │    │
│    │  │ • Broader Expansion        • Global Availability    │  │    │
│    │  │ • Express Interest         • TBD Timeline           │  │    │
│    │  │                                                     │  │    │
│    │  │           [Zip Code Checker Widget]                 │  │    │
│    │  └─────────────────────────────────────────────────────┘  │    │
│    │                                                            │    │
│    │  COMPONENT 3: EXCLUSIVE COMMUNITY PREVIEW                │    │
│    │  "Join the Founding Members"                              │    │
│    │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐         │    │
│    │  │First Access │ │Direct       │ │ Community   │         │    │
│    │  │             │ │Support      │ │ Connection  │         │    │
│    │  │• Try first  │ │• Priority   │ │• Success    │         │    │
│    │  │• Shape      │ │  coaching   │ │  stories    │         │    │
│    │  │  platform   │ │• Dev team   │ │• Private    │         │    │
│    │  │• Lifetime   │ │  access     │ │  community  │         │    │
│    │  │  status     │ │• Exclusive  │ │• Shared     │         │    │
│    │  │             │ │  events     │ │  journey    │         │    │
│    │  └─────────────┘ └─────────────┘ └─────────────┘         │    │
│    │  ┌─────────────────────────────────────────────────────┐  │    │
│    │  │            Future Benefits                          │  │    │
│    │  │  • Grandfathered pricing   • Early feature access  │  │    │
│    │  │  • Pioneer recognition     • 147 members & counting │  │    │
│    │  └─────────────────────────────────────────────────────┘  │    │
│    │                                                            │    │
│    │  COMPONENT 4: WAITLIST FORM                              │    │
│    │  "Secure Your Assessment Spot"                            │    │
│    │  ┌─────────────────────────────────────────────────────┐  │    │
│    │  │ ┌─────────────────┐ ┌─────────────────┐             │  │    │
│    │  │ │ First Name      │ │ Last Name       │             │  │    │
│    │  │ │ [____________]  │ │ [____________]  │             │  │    │
│    │  │ └─────────────────┘ └─────────────────┘             │  │    │
│    │  │                                                     │  │    │
│    │  │ Email Address                                       │  │    │
│    │  │ [_________________________________]                │  │    │
│    │  │                                                     │  │    │
│    │  │ Phone Number                                        │  │    │
│    │  │ [_________________________________]                │  │    │
│    │  │                                                     │  │    │
│    │  │ Location (City, State/Province, Country)           │  │    │
│    │  │ [_________________________________]                │  │    │
│    │  │                                                     │  │    │
│    │  │ Which best describes you?                           │  │    │
│    │  │ ○ Ready to start immediately if accepted            │  │    │
│    │  │ ○ Want to learn more first, then decide             │  │    │
│    │  │ ○ Exploring options, timeline flexible              │  │    │
│    │  │                                                     │  │    │
│    │  │        [CALENDAR WIDGET - Assessment Slots]        │  │    │
│    │  │                                                     │  │    │
│    │  │     ┌─────────────────────────────────────┐         │  │    │
│    │  │     │       Schedule My Assessment        │         │  │    │
│    │  │     └─────────────────────────────────────┘         │  │    │
│    │  │                                                     │  │    │
│    │  │ ✓ No payment required  ✓ Mutual fit evaluation     │  │    │
│    │  │ ✓ 20-30 minutes via video  ✓ SSL Secure           │  │    │
│    │  └─────────────────────────────────────────────────────┘  │    │
│    │                                                            │    │
│    │  COMPONENT 5: FUTURE VISION TIMELINE                     │    │
│    │  "The Future of Behavior Change Starts Here"             │    │
│    │  2025 ────────── 2026 ────────── 2027+ ──────────        │    │
│    │  ┌──────────┐   ┌──────────┐   ┌──────────┐              │    │
│    │  │   Beta   │   │Platform  │   │Industry  │              │    │
│    │  │Expansion │   │ Launch   │   │Transform │              │    │
│    │  │          │   │          │   │          │              │    │
│    │  │• Prove   │   │• Full    │   │• Behavior│              │    │
│    │  │  system  │   │  public  │   │  change  │              │    │
│    │  │• Refine  │   │• Enhanced│   │  revolution│             │    │
│    │  │  tech    │   │  AI      │   │• Industry│              │    │
│    │  │• Build   │   │• National│   │  adapts  │              │    │
│    │  │  community│  │  network │   │• You were│              │    │
│    │  │          │   │          │   │  pioneer │              │    │
│    │  └──────────┘   └──────────┘   └──────────┘              │    │
│    │                                                            │    │
│    │  "Founding members will be recognized as the pioneers     │    │
│    │   who proved this breakthrough works in real life."       │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│    ┌────────────────────────────────────────────────────────────┐    │
│    │                 FINAL CONVERSION                          │    │
│    │                                                            │    │
│    │         ┌─────────────────────────────────────┐           │    │
│    │         │      Join the Exclusive Waitlist    │           │    │
│    │         │           [PRIMARY CTA]             │           │    │
│    │         └─────────────────────────────────────┘           │    │
│    │                                                            │    │
│    │         ┌─────────────────────────────────────┐           │    │
│    │         │   Learn More About the Assessment   │           │    │
│    │         │          [SECONDARY CTA]            │           │    │
│    │         └─────────────────────────────────────┘           │    │
│    │                                                            │    │
│    │      Free assessment • No commitment required             │    │
│    │              • Mutual fit evaluation                      │    │
│    │                                                            │    │
│    │  SCARCITY & TRUST SIGNALS:                                │    │
│    │  • Limited spots remaining in Phase 1 rollout            │    │
│    │  • Join 147 founding members already accepted             │    │
│    │  • 4.9/5 satisfaction rating from beta participants       │    │
│    │  • 94% of assessed candidates receive acceptance          │    │
│    │                                                            │    │
│    └────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Layout (320px - 767px)

```
┌─────────────────────────────────────┐
│          PROGRESS DOTS              │
│        ○● ○● ○● ○● ●                │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │         HEADLINE                │ │
│ │        (2.25rem)                │ │
│ │   This Changes Everything.      │ │
│ │   But It's Not Available        │ │
│ │    Everywhere. Yet.             │ │
│ │                                 │ │
│ │       SUBHEADLINE               │ │
│ │  We're in the middle of a       │ │
│ │    limited rollout.             │ │
│ │  We can only support a          │ │
│ │  small number of people         │ │
│ │    in each region.              │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      NARRATIVE SECTION          │ │
│ │       (1.125rem)                │ │
│ │                                 │ │
│ │ We're in the middle of a        │ │
│ │ limited geographic rollout...   │ │
│ │                                 │ │
│ │ [Full narrative - exclusivity   │ │
│ │  and access with bold           │ │
│ │  emphasis on scarcity]          │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │    INTERACTIVE COMPONENTS       │ │
│ │                                 │ │
│ │ COMPONENT 1: ASSESSMENT         │ │
│ │ "Are You Ready?"                │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │    Past Experience          │ │ │
│ │ │      Analysis               │ │ │
│ │ │                             │ │ │
│ │ │ • How many tried?           │ │ │
│ │ │ • What stops you?           │ │ │
│ │ │ • Most successful?          │ │ │
│ │ │         [Expand ▼]          │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │    Psychological            │ │ │
│ │ │     Readiness               │ │ │
│ │ │                             │ │ │
│ │ │ • Quick fixes or lasting?   │ │ │
│ │ │ • Handle setbacks?          │ │ │
│ │ │         [Expand ▼]          │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ [All 4 sections stacked]       │ │
│ │                                 │ │
│ │ COMPONENT 2: AVAILABILITY       │ │
│ │ "Current Rollout Status"        │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │      [MOBILE MAP VIEW]      │ │ │
│ │ │                             │ │ │
│ │ │ Phase 1 - Available Now     │ │ │
│ │ │ • Major Metro Areas         │ │ │
│ │ │ • Limited Spots Remaining   │ │ │
│ │ │                             │ │ │
│ │ │ Phase 2 - Q2 2025           │ │ │
│ │ │ • Additional Cities         │ │ │
│ │ │ • Join Waitlist             │ │ │
│ │ │                             │ │ │
│ │ │    [Check Your Area]        │ │ │
│ │ │   [_______________]         │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ COMPONENT 3: FOUNDING MEMBERS   │ │
│ │ "Exclusive Community"           │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │       First Access          │ │ │
│ │ │                             │ │ │
│ │ │ • Try breakthrough first    │ │ │
│ │ │ • Shape platform feedback   │ │ │
│ │ │ • Lifetime founding status  │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │      Direct Support         │ │ │
│ │ │                             │ │ │
│ │ │ • Priority coaching access  │ │ │
│ │ │ • Direct dev team line      │ │ │
│ │ │ • Exclusive events          │ │ │
│ │ └─────────────────────────────┘ │ │
│ │ [All 4 benefit cards stacked] │ │
│ │                                 │ │
│ │ "147 founding members           │ │
│ │ and counting"                   │ │
│ │                                 │ │
│ │ COMPONENT 4: WAITLIST FORM     │ │
│ │ "Secure Your Spot"              │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ First Name                  │ │ │
│ │ │ [_____________________]     │ │ │
│ │ │                             │ │ │
│ │ │ Last Name                   │ │ │
│ │ │ [_____________________]     │ │ │
│ │ │                             │ │ │
│ │ │ Email Address               │ │ │
│ │ │ [_____________________]     │ │ │
│ │ │                             │ │ │
│ │ │ Phone Number                │ │ │
│ │ │ [_____________________]     │ │ │
│ │ │                             │ │ │
│ │ │ Location                    │ │ │
│ │ │ [_____________________]     │ │ │
│ │ │                             │ │ │
│ │ │ Which describes you?        │ │ │
│ │ │ ○ Ready immediately         │ │ │
│ │ │ ○ Learn more first          │ │ │
│ │ │ ○ Exploring options         │ │ │
│ │ │                             │ │ │
│ │ │   [CALENDAR PICKER]         │ │ │
│ │ │                             │ │ │
│ │ │ ┌─────────────────────────┐ │ │ │
│ │ │ │  Schedule Assessment    │ │ │ │
│ │ │ │   [SUBMIT BUTTON]       │ │ │ │
│ │ │ └─────────────────────────┘ │ │ │
│ │ │                             │ │ │
│ │ │ ✓ Free • ✓ No commitment   │ │ │
│ │ │ ✓ 20-30 min • ✓ SSL secure │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ COMPONENT 5: FUTURE VISION     │ │
│ │ "Future of Behavior Change"     │ │
│ │     ┌─────────────┐             │ │
│ │     │    2025     │             │ │
│ │     │    Beta     │             │ │
│ │     │  Expansion  │             │ │
│ │     │             │             │ │
│ │     │ • Prove     │             │ │
│ │     │   system    │             │ │
│ │     │ • Build     │             │ │
│ │     │   community │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │    2026     │             │ │
│ │     │  Platform   │             │ │
│ │     │   Launch    │             │ │
│ │     │             │             │ │
│ │     │ • Public    │             │ │
│ │     │   release   │             │ │
│ │     │ • Enhanced  │             │ │
│ │     │   AI        │             │ │
│ │     └─────────────┘             │ │
│ │            ↓                    │ │
│ │     ┌─────────────┐             │ │
│ │     │   2027+     │             │ │
│ │     │  Industry   │             │ │
│ │     │Transform    │             │ │
│ │     │             │             │ │
│ │     │ • Behavior  │             │ │
│ │     │   revolution│             │ │
│ │     │ • You were  │             │ │
│ │     │   pioneer   │             │ │
│ │     └─────────────┘             │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      FINAL CONVERSION           │ │
│ │                                 │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │  Join the Exclusive         │ │ │
│ │ │      Waitlist               │ │ │
│ │ │   [PRIMARY CTA BUTTON]      │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │   Learn More About          │ │ │
│ │ │   the Assessment            │ │ │
│ │ │  [SECONDARY CTA BUTTON]     │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ Free assessment • No commitment │ │
│ │ required • Mutual fit evaluation│ │
│ │                                 │ │
│ │ TRUST SIGNALS:                  │ │
│ │ • Limited Phase 1 spots        │ │
│ │ • 147 founding members          │ │
│ │ • 4.9/5 satisfaction rating    │ │
│ │ • 94% assessment acceptance     │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## Component Specifications

### Progress Indicator
- **Position**: Fixed at top, always visible
- **Style**: 5 circles, Chapters 1-4 completed (light blue filled), Chapter 5 active (dark blue filled)
- **Colors**: Completed: #7dd3fc, Active: #068FB9
- **Spacing**: Centered, 0.75rem gap between dots

### Background & Headlines
- **Background**: Clean white (#ffffff) for focused conversion environment
- **Main**: 3rem desktop / 2.25rem mobile, #20262B, bold, center-aligned
- **Sub**: 1.25rem, #4A5568, medium weight, center-aligned
- **Spacing**: 2rem margin-bottom on main, 1.5rem on sub

### Narrative Section
- **Typography**: 1.25rem desktop / 1.125rem mobile, #20262B
- **Line Height**: 1.75
- **Paragraph Spacing**: 1.5rem between paragraphs
- **Emphasis**: Bold for exclusivity points and scarcity messaging

### Interactive Components
- **Spacing**: 4rem margin between each component (final conversion momentum)
- **Component 1**: 2x2 grid on desktop, stacked expandable cards on mobile
- **Component 2**: Interactive map on desktop, simplified mobile view with zip checker
- **Component 3**: 3-column benefit cards on desktop, stacked cards on mobile
- **Component 4**: Professional form layout, mobile-optimized inputs
- **Component 5**: Horizontal timeline on desktop, vertical progression on mobile

### Assessment Preview
- **Desktop**: 2x2 grid of expandable question categories
- **Mobile**: Stacked cards with expand/collapse functionality
- **Visual Style**: Clean, professional questionnaire preview
- **Interaction**: Expandable sections showing sample questions

### Geographic Availability Map
- **Desktop**: Interactive map with clickable regions and availability status
- **Mobile**: Simplified view with zip code checker widget
- **Visual Elements**: Color-coded phases, availability indicators
- **Information**: Clear phase timelines and access requirements

### Exclusive Community Benefits
- **Desktop**: 3-column cards with icons and benefit descriptions
- **Mobile**: Stacked benefit cards with clear hierarchy
- **Counter**: Live member count with subtle animation
- **Visual Style**: Premium but not pretentious styling

### Waitlist Form
- **Desktop**: Clean, professional form with trust signals
- **Mobile**: Stack inputs vertically with large tap targets
- **Calendar Widget**: Assessment slot selection interface
- **Trust Elements**: Security badges, no-commitment messaging
- **Submit Button**: "Schedule My Assessment" with prominent styling

### Future Vision Timeline
- **Desktop**: Horizontal 3-phase timeline with detailed descriptions
- **Mobile**: Vertical progression with downward arrows
- **Content**: 2025 → 2026 → 2027+ progression
- **Member Positioning**: Historical significance messaging

### Final Conversion CTAs
- **Primary Button**: "Join the Exclusive Waitlist" - Full width mobile, centered desktop
- **Secondary Button**: "Learn More About the Assessment" - Outline style, same width
- **Colors**: Primary (#068FB9), Secondary (outline #068FB9)
- **Trust Reinforcement**: Free assessment, no commitment, mutual fit messaging

### Trust & Scarcity Elements
- **Scarcity Indicators**: Phase rollout timeline, limited spots messaging
- **Social Proof**: Member count, satisfaction ratings, acceptance rates
- **Risk Reversal**: Free assessment, no payment required, withdrawal option
- **Visual Treatment**: Subtle, credible presentation without pressure tactics

### Overall Spacing
- **Container**: Max-width 42rem, centered
- **Padding**: 2rem horizontal on desktop, 1rem on mobile
- **Vertical**: Generous 4rem between major sections for conversion focus
