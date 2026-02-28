# Nidhi Interior Decor — React App 🏢✨

Premium corporate & home interior design company based in **Hyderabad, Telangana**. Pan India services.

## 🚀 Getting Started

```bash
npm install
npm start
```

Open http://localhost:3000

## ✨ What's New (Redesign)

This redesign is inspired by [interiainfrastructure.in](https://interiainfrastructure.in/) and includes:

- **Hero Slider** — Full-screen auto-cycling image slider with Ken Burns effect, stats bar, and slide dots
- **Marquee Strip** — Animated service keyword scroll under the hero
- **Services Grid** — Hover-animated service cards with bottom accent line
- **About Split** — Two-column layout with badge overlay
- **Process Steps** — Numbered 5-step process on dark gradient background
- **Portfolio Grid** — Masonry-style grid with hover overlays and category filters
- **Client Logos** — Trust bar with well-known brand names
- **Testimonials** — Cards with large quote mark and author details
- **Blog Section** — Card grid with thumbnail, tag, date, and read-more
- **CTA Banner** — Bold call-to-action with phone number
- **Scroll-to-Top** — Fixed floating button
- **Mobile Responsive** — Full responsive across all breakpoints

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js         # Sticky navbar with transparent-to-dark scroll + mobile menu
│   └── Footer.js         # Rich 4-column footer with contact info and social links
├── pages/
│   ├── Home.js           # Landing page — hero slider, services, about, process, portfolio, blogs, CTA
│   ├── Corporate.js      # Full corporate services (primary offering)
│   ├── HomeInterior.js   # Residential interiors (secondary offering)
│   ├── Portfolio.js      # Filterable project gallery with stats
│   ├── About.js          # Company story, values, team, stats
│   ├── Contact.js        # Contact form + office info cards
│   └── Quote.js          # 2-step project inquiry form
├── App.js                # React Router v6 routes + ScrollToTop
├── index.js              # Entry point
└── index.css             # Full design system (navy + gold + ivory)
```

## 🎨 Design System

| Token | Value | Use |
|-------|-------|-----|
| `--primary` | `#1a2744` | Navy — Navbar, dark backgrounds, headings |
| `--accent` | `#c9a84c` | Gold — CTAs, accents, highlights |
| `--light` | `#f5f6fa` | Light grey — section backgrounds |
| `--muted` | `#7a7f9a` | Body text, descriptions |

**Fonts:** Playfair Display (headings) + DM Sans (body)

## 📸 Images

All images are loaded from [Unsplash](https://unsplash.com) via CDN. Replace with actual project photos:

1. Add images to `/public/images/`
2. Update image `src` URLs in each page file

## 🔄 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home — full landing page |
| `/corporate` | Corporate services |
| `/home-interior` | Residential interiors |
| `/portfolio` | Filterable gallery |
| `/about` | Company story + team |
| `/contact` | Contact form + offices |
| `/quote` | 2-step project inquiry |
