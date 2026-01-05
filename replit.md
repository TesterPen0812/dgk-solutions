# DGK Solutions Ltd Website

## Overview
A production-ready website for DGK Solutions Ltd, a UK plumbing, drainage, and waste management company based in Essex. The site is designed to be professional, conversion-focused, and mobile-first.

## Tech Stack
- **Frontend**: React with TypeScript, Wouter routing, TanStack Query, Tailwind CSS, shadcn/ui
- **Backend**: Express.js with in-memory storage
- **Styling**: Custom design system with glass-card aesthetic

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Footer, EmergencyBanner, etc.)
│   │   ├── ui/              # shadcn/ui components
│   │   ├── BookingForm.tsx  # Main booking form component
│   │   ├── ThemeProvider.tsx # Dark/light mode provider
│   │   └── ThemeToggle.tsx  # Theme toggle button
│   ├── hooks/
│   │   └── useSEO.ts        # Per-page SEO hook
│   └── pages/               # All 10 pages
├── public/
│   ├── robots.txt           # Search engine robots file
│   └── sitemap.xml          # XML sitemap
server/
├── routes.ts                # API routes for bookings
└── storage.ts               # In-memory storage for bookings
shared/
└── schema.ts                # Shared types and Zod schemas
```

## Pages
1. **Home** (/) - Hero section, services overview, areas covered, certifications
2. **Services** (/services) - Complete services overview
3. **Emergency** (/emergency) - 24/7 emergency services
4. **Drainage** (/drainage) - Drain clearing, CCTV, jetting
5. **Drain Repairs** (/drain-repairs) - No-dig repairs, lining, excavations
6. **Tanker & Waste** (/tanker-waste) - Septic tanks, grease traps
7. **Sectors Served** (/sectors-served) - Industries we serve
8. **Areas Covered** (/areas-covered) - Essex, M25, Cambridge, Luton
9. **About** (/about) - Company info, team, certifications
10. **Contact** (/contact) - Booking form

## Key Features
- **Emergency Banner**: Red banner on all pages promoting 24/7 service
- **Sticky Mobile CTA**: Fixed bottom bar with Call Now and Book Online buttons
- **Glass-Card Aesthetic**: Modern backdrop blur, soft gradients, rounded corners
- **Dark Mode**: Toggle between light and dark themes
- **Booking Form**: Full validation with honeypot spam protection
- **SEO**: LocalBusiness JSON-LD, per-page meta tags, sitemap

## Design Tokens
- **Primary**: Professional Blue (trust, expertise) - HSL 210 95% 42%
- **Emergency**: Emergency Red (CTAs, emergency content) - HSL 0 84% 45%
- **Fonts**: Outfit (headings), DM Sans (body)

## API Endpoints
- `POST /api/bookings` - Create a new booking request
- `GET /api/bookings` - List all bookings
- `GET /api/bookings/:id` - Get a specific booking

## Running the Project
The workflow runs `npm run dev` which starts both the Express backend and Vite frontend on port 5000.

## Business Information
- **Company**: DGK Solutions Ltd
- **Location**: Based in Essex, UK
- **Coverage**: Essex, M25 radius, Cambridge, Luton
- **Experience**: 30+ years combined, trading for 2 years
- **Team**: Dean (Director), Duncan (Lead Engineer), Office Manager
- **Certifications**: HPWJ Jetting, NVQ Level 3 Plumbing, PASMA, IPAF, SSSTS, STREETWORKS

## Notes for Future Development
- The booking form uses in-memory storage - connect to a real database for production
- Phone numbers are placeholders (tel:+44XXXXXXXXXX) - replace with actual numbers
- Email: info@dgksolutions.co.uk
- Consider adding Formspree/Netlify Forms for email notifications
