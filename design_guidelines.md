# ReentryRiches Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern fintech applications (Stripe, Cash App, Acorns) combined with empowerment-focused platforms. The design balances professional credibility with warmth and accessibility, creating a dignified experience that builds confidence and trust.

## Core Design Principles
1. **Empowerment Over Sympathy**: Sophisticated, modern design that treats users as capable individuals
2. **Growth-Oriented**: Visual language emphasizing progress, renewal, and financial health
3. **Clarity & Accessibility**: Information hierarchy that makes complex financial concepts approachable
4. **Trust Through Transparency**: Clean, honest design without dark patterns

## Color Palette

### Primary Colors (Dark Mode)
- **Primary Green**: 142 76% 36% - Main brand color for CTAs, highlights, and success states
- **Deep Green**: 142 72% 28% - Darker variant for hover states and depth
- **Background**: 220 13% 9% - Rich, professional dark background
- **Surface**: 220 13% 13% - Elevated cards and sections

### Primary Colors (Light Mode)  
- **Primary Green**: 142 76% 42% - Vibrant yet professional green
- **Light Green Accent**: 142 68% 92% - Subtle backgrounds and highlights
- **Background**: 0 0% 98% - Clean, bright base
- **Surface**: 0 0% 100% - Pure white for cards

### Supporting Colors
- **Text Primary (Dark)**: 0 0% 95%
- **Text Secondary (Dark)**: 0 0% 70%
- **Text Primary (Light)**: 220 13% 13%
- **Text Secondary (Light)**: 220 9% 46%

## Typography

### Font Stack
- **Primary Font**: Inter (via Google Fonts) - Modern, highly legible, professional
- **Display Font**: Inter (weights 600-800) - Bold statements and headlines
- **Body Font**: Inter (weights 400-500) - All body text and UI elements

### Type Scale
- **Hero Headline**: text-5xl lg:text-7xl, font-bold (Building wealth messaging)
- **Section Headlines**: text-3xl lg:text-4xl, font-semibold
- **Catchphrase**: text-lg lg:text-xl, font-medium
- **Body Text**: text-base lg:text-lg
- **Small Text**: text-sm
- **Button Text**: text-base, font-medium

## Layout System

### Spacing Primitives
Consistent use of Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24**
- Tight spacing: p-2, gap-4
- Component padding: p-6, p-8
- Section padding: py-16 lg:py-24
- Large gaps: gap-12, gap-16

### Container Strategy
- **Full-width sections**: w-full with max-w-7xl mx-auto px-6 lg:px-8
- **Content sections**: max-w-6xl
- **Centered content**: mx-auto text-center for heroes

### Grid Layouts
- **Feature Cards**: grid-cols-1 md:grid-cols-3 gap-8
- **Two-column splits**: grid-cols-1 lg:grid-cols-2
- **Consistent gaps**: gap-6 to gap-12

## Component Library

### Navigation Bar
- **Height**: h-16 lg:h-20
- **Layout**: Flex with justify-between, logo left, mock auth buttons right
- **Styling**: Subtle border-b, backdrop blur for elegance
- **Buttons**: Login (outline), Signup (filled primary green)

### Hero Section
- **Height**: min-h-[85vh] - Substantial but not forced viewport lock
- **Image Strategy**: Large background image with gradient overlay (dark mode: from-black/60, light mode: from-white/60)
- **Content Layout**: Centered, stacked vertically with z-index layering
- **CTA Prominence**: Primary "Build me a plan" button (lg size, primary green, bold)

### Value Proposition Cards
- **Layout**: Three columns on desktop (grid-cols-1 md:grid-cols-3)
- **Card Design**: Rounded borders (rounded-xl), subtle shadow, p-8
- **Icon Treatment**: Green accent icons (size-12 to size-16), top of card
- **CTA Buttons**: Individual buttons per card, outline variant with green accent

### Bottom Benefits Section
- **Layout**: Three distinct sections, each with statement + CTA
- **Spacing**: py-20 lg:py-32, generous whitespace between items
- **Typography**: Large, bold statements (text-2xl lg:text-3xl)
- **CTAs**: Green filled buttons, clear hierarchy

## Images

### Hero Image
- **Subject**: Aspirational wealth-building imagery - diverse individual reviewing financial charts/planning, upward growth visualization, or peaceful financial planning scene
- **Treatment**: Overlay with gradient (opacity 60-70%) to ensure text readability
- **Placement**: Full hero section background, background-cover, background-center
- **Mood**: Hopeful, professional, forward-looking

### Supporting Imagery (If Used)
- **Icons**: Heroicons or Font Awesome via CDN for feature cards
- **Illustrations**: Consider subtle financial growth illustrations in benefit sections

## Responsive Behavior

### Breakpoints
- **Mobile**: Base styles, single column, reduced padding
- **Tablet (md: 768px)**: Two columns where appropriate, increased spacing
- **Desktop (lg: 1024px)**: Full multi-column layouts, maximum visual impact

### Mobile-First Specifics
- Stack all grid layouts to single column
- Reduce hero headline size (text-4xl to text-5xl on mobile)
- Full-width buttons on mobile, inline on desktop
- Reduce section padding: py-12 on mobile vs py-24 on desktop

## Key User Experience Elements

### Call-to-Action Hierarchy
1. **Primary**: "Build me a plan" hero button - largest, most prominent
2. **Secondary**: Individual benefit CTAs - clear but supporting
3. **Tertiary**: Mock signup/login - accessible but not competing

### Trust & Credibility Signals
- Professional typography and spacing
- Consistent green theme (growth, financial health)
- Clean, modern interface without clutter
- Dignified language in catchphrase and statements

### Emotional Design
- **Empowerment**: Bold typography, strong CTAs, capable aesthetic
- **Renewal**: Green color psychology, upward visual momentum
- **Confidence**: Spacious layouts, clear hierarchy, professional polish