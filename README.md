# Spider-Man: Miles Morales - Premium Website

A high-end, cinematic, fully responsive website inspired by the Spider-Man Miles Morales game. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Spider-Man Website](https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&q=80)
live website Link : https://spiderman-website-git-main-formulareddys-projects.vercel.app

## Features

- **Premium Design**: Dark theme with glassmorphism, neon glows, and smooth gradients
- **Smooth Animations**: Framer Motion powered scroll reveals, parallax effects, and hover interactions
- **Custom Cursor**: Glowing cursor effect that responds to interactive elements
- **Loading Screen**: Animated Spider-Man themed loading experience
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Performance**: Optimized images, lazy loading, and smooth transitions

## Sections

1. **Hero Section** - Full-screen with parallax background, animated web SVG, and bold typography
2. **About Section** - Split layout with scroll reveal animations and stats
3. **Abilities Section** - Cards with glow effects and hover animations
4. **Gallery Section** - Grid layout with lightbox preview functionality
5. **Trailer Section** - Embedded video with custom controls
6. **CTA Section** - Bold call-to-action with animated buttons
7. **Footer** - Clean minimal layout with social links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spiderman-miles-morales
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and custom CSS
│   ├── layout.tsx       # Root layout
│   └── page.tsx        # Main page component
├── components/
│   ├── Navbar.tsx      # Sticky navigation
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx        # About/Story section
│   ├── Abilities.tsx    # Abilities cards
│   ├── Gallery.tsx      # Gallery with lightbox
│   ├── Trailer.tsx      # Video section
│   ├── CTA.tsx         # Call-to-action
│   ├── Footer.tsx      # Footer
│   ├── CustomCursor.tsx # Custom cursor effect
│   └── LoadingScreen.tsx # Loading animation
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  spider: {
    red: "#DC2626",
    blue: "#2563EB",
    yellow: "#F59E0B",
  },
  // ...
}
```

### Content

Update the content in each component file to customize text, images, and links.

## Performance

- Lazy loaded images with Next.js Image component
- Optimized animations with `will-change` hints
- Preloaded critical fonts
- Intersection Observer for scroll animations

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is for educational purposes. Spider-Man and related characters are trademarks of Marvel Comics and Sony Interactive Entertainment.

---

Built with passion for an incredible superhero experience.
