# Spider-Man Miles Morales - Premium Cinematic Website

## Concept & Vision

A dark, cinematic, immersive experience inspired by Spider-Man Miles Morales. The website feels like stepping into the game itself — pulsing with energy, neon glows, and fluid animations. Every interaction is smooth, every visual element pops with personality. This isn't a landing page; it's an experience.

## Design Language

### Aesthetic Direction
Inspired by the Spider-Man Miles Morales game UI — deep blacks, vibrant reds, electric blue accents, and glowing effects. Glassmorphism with blur creates depth and modern sophistication.

### Color Palette
- **Primary**: `#DC2626` (Spider Red)
- **Secondary**: `#2563EB` (Electric Blue)
- **Accent**: `#F59E0B` (Neon Yellow)
- **Background Dark**: `#0A0A0A`
- **Background Light**: `#141414`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A1A1AA`
- **Glass**: `rgba(255, 255, 255, 0.05)`

### Typography
- **Headings**: Inter (900 weight) - Bold, impactful
- **Body**: Inter (400-600 weight) - Clean, readable
- **Accent**: Special Elit (for decorative elements)

### Spatial System
- Base unit: 4px
- Section padding: 80px-120px vertical
- Component spacing: 24px-48px
- Border radius: 12px-24px for cards, 8px for buttons

### Motion Philosophy
- **Entrance**: Fade up + slide (0.6s ease-out, staggered 0.1s)
- **Hover**: Scale 1.05 + glow intensify (0.3s ease)
- **Scroll**: Parallax layers, reveal on intersection
- **Transitions**: Smooth 0.3s cubic-bezier(0.4, 0, 0.2, 1)

## Layout & Structure

### Page Flow
1. **Hero** - Full viewport, immersive background, floating elements
2. **About** - Split layout, text left, image right, scroll reveal
3. **Abilities** - Grid of glowing cards with hover effects
4. **Gallery** - Masonry/grid with lightbox
5. **Trailer** - Featured video section
6. **CTA** - Bold call-to-action with animated button
7. **Footer** - Minimal, social links, copyright

### Responsive Strategy
- Mobile-first approach
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Stack layouts on mobile, side-by-side on desktop
- Touch-friendly targets (min 44px)

## Features & Interactions

### Navbar
- Transparent on top, solid on scroll (backdrop-blur)
- Logo left, nav links center, CTA right
- Mobile: hamburger menu with slide-in drawer
- Smooth scroll to sections

### Hero Section
- Full-screen with animated gradient background
- Parallax spider web SVG overlay
- Large bold heading with text glow
- Subtext with typewriter effect option
- CTA button with pulse animation
- Mouse parallax on background elements

### About Section
- 50/50 split layout
- Image with glow border
- Text with staggered reveal
- Stats/counters with scroll animation

### Abilities Section
- 3-column grid (1 on mobile)
- Cards with glassmorphism + neon border
- Icon with glow effect
- Hover: lift + border glow intensify

### Gallery Section
- 3-4 column responsive grid
- Image hover: scale + overlay with info
- Click opens lightbox with navigation

### Trailer Section
- Embedded YouTube/video player
- Custom play button overlay
- Glassmorphism container

### CTA Section
- Full-width gradient background
- Large heading + supporting text
- Animated button with hover glow

### Footer
- Logo + tagline
- Social icons with hover glow
- Copyright text

### Custom Cursor
- Circular cursor with glow trail
- Scales on hover over interactive elements

### Loading Screen
- Animated Spider-Man logo
- Progress bar
- Fade out on load complete

## Component Inventory

### Button
- States: default, hover (glow + scale), active (scale down), disabled (opacity)
- Variants: primary (red), secondary (outline), ghost

### Card
- Glassmorphism background
- Neon border (subtle by default, intense on hover)
- Icon, title, description

### Navbar
- States: transparent, solid (on scroll)
- Mobile drawer with backdrop

### Lightbox
- Full-screen overlay
- Image navigation (prev/next)
- Close button
- Keyboard navigation support

## Technical Approach

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom configuration
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)
- **Images**: Unsplash CDN for placeholders

### File Structure
```
/app
  layout.tsx
  page.tsx
  globals.css
/components
  Navbar.tsx
  Hero.tsx
  About.tsx
  Abilities.tsx
  Gallery.tsx
  Trailer.tsx
  CTA.tsx
  Footer.tsx
  CustomCursor.tsx
  LoadingScreen.tsx
  Lightbox.tsx
  Button.tsx
  SectionWrapper.tsx
```

### Performance
- Lazy load images
- Optimize animations with `will-change`
- Preload critical fonts
- Use `next/image` for optimization
