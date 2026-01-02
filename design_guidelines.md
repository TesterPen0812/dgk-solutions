# DGK Solutions Ltd - Design Guidelines

## Design Approach
**Utility-Focused, Trust-Building Service Design**
- Modern professional aesthetic balanced with emergency-ready urgency
- Conversion-optimized for trade services
- Mobile-first, SEO-friendly approach

## Visual Identity

### Color System
```
--primary: Professional Blue (trust, expertise, reliability)
--accent: Emergency Red (ONLY for emergency banners and "Call Now" CTAs)
--neutral-bg: Clean background
--neutral-text: High contrast for readability
--neutral-border: Subtle separation
```

### Typography
- **Headings (H1-H3, Hero)**: Outfit font family
- **Body, Navigation, Forms**: DM Sans font family
- Establish consistent type scale across all pages

### Visual Style: Modern Glass-Card Aesthetic
- Subtle backdrop blur effects
- Soft, professional gradients
- Light borders with gentle shadows
- Rounded corners throughout
- Apply glass-card treatment to: trust blocks, service cards, booking form container, key content sections

## Layout System

### Spacing
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20** for consistent rhythm

### Homepage Hero (Critical)
**Two-column desktop layout, stacked mobile:**

Left Column:
- Pill badge: "Available 24/7 for Emergencies"
- Strong problem-focused headline
- Supporting text with service areas (Essex, M25, Cambridge, Luton) + "30+ years combined experience"
- Two CTAs: (1) Call Now (Emergency Red, dominant), (2) Book Online (secondary)
- Trust row using ONLY real certifications/facts

Right Column:
- Professional hero image (neutral, trade-appropriate)
- NO fake testimonials or people

### Global Components

**Emergency Banner (All Pages):**
- "24/7 Emergency Call-Outs • 365 Days a Year"
- Subtext: "Plumbing, Drainage & Tanker Services"
- Emergency Red background
- Subtle attention animation on load (once)

**Sticky Mobile CTA Bar (All Pages):**
- Primary: Call Now button
- Secondary: Book Online
- Never obscures content
- Always visible on scroll

## Component Library

### Buttons
- **Primary (Call Now)**: Emergency Red, most visually dominant
- **Secondary (Book Online)**: Professional Blue
- **Buttons on images**: Blurred glass-effect backgrounds
- Clear hover/active states (no custom interactions needed)

### Cards
- Glass-card styling for services, trust blocks, content sections
- Consistent padding and spacing
- Subtle elevation

### Forms (Booking)
Glass-card container with fields:
1. Full Name*, Phone*, Postcode*, Service dropdown*, Emergency toggle*, Preferred date/time, Description*, Photo upload
2. Clear validation states
3. Honeypot anti-spam field
4. Success state after submission
5. Label date/time as "Preferred – subject to confirmation"

### Navigation
- Clean, professional header
- Mobile menu with smooth open/close
- Consistent across all 10 pages

## Images

### Hero Image
Large professional hero image showing plumbing/drainage work in clean, modern context. Neutral, trustworthy aesthetic - avoid stock photo clichés. Image should communicate expertise without dominating the conversion-focused left column content.

### Supporting Images
Service page images showing real equipment (CCTV cameras, jetting equipment, tanker vehicles) where appropriate.

## Animations
**CSS-first, subtle, purposeful:**
- Section fade/slide-in on scroll
- Button feedback
- Mobile menu transitions
- Form validation states
- Respect `prefers-reduced-motion`
- Fast timing (200-300ms)

## Page Structure
10 pages: Home, Services, Emergency, Drainage, Drain Repairs, Tanker & Waste, Sectors Served, Areas Covered, About, Contact/Book Online

Each page: Unique H1, logical heading hierarchy, emergency banner, sticky CTA bar, glass-card content sections

## Accessibility
- High contrast ratios
- Clear focus states
- Semantic HTML structure
- Mobile-first responsive breakpoints
- Touch-friendly tap targets (min 44px)

## Key Design Principles
1. **Call Now** is always the most visually dominant action
2. Emergency Red reserved for urgent actions only
3. Professional over flashy
4. Trustworthy over clever
5. Conversion-focused without fake urgency
6. Real information only - no invented claims