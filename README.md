# Nidhi Interior Decor — React App 🏢✨

Premium corporate & home interior design company based in **Hyderabad, Telangana**. Pan India services.

## 🚀 Getting Started

```bash
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js       # Sticky navbar with scroll effect + mobile menu
│   └── Footer.js       # Rich footer with contact info
├── pages/
│   ├── Home.js          # Landing page – hero, corporate services, process, portfolio teaser
│   ├── Corporate.js     # Full corporate services page (primary focus)
│   ├── HomeInterior.js  # Residential interiors (secondary offering)
│   ├── Portfolio.js     # Filterable project gallery
│   ├── About.js         # Company story, values, team
│   ├── Contact.js       # Contact form + office info
│   └── Quote.js         # Detailed quote/inquiry form
├── App.js               # React Router v6 routes
├── index.js             # Entry point
└── index.css            # Full design system (gold + charcoal + ivory)
```

## 🎨 Design System

- **Primary Font**: Cormorant Garamond (display headings)
- **Body Font**: Outfit (clean, modern body text)
- **Color Palette**:
  - Gold: `#C8A96E` — accents, CTAs
  - Charcoal: `#1C1C1E` — dark sections, navbar
  - Ivory: `#F7F4EF` — light section backgrounds
- **Aesthetic**: Luxury editorial, refined minimal

## 🔄 Pages & Routes

| Route | Page | Focus |
|---|---|---|
| `/` | Home | Overview, corporate hero, key services |
| `/corporate` | Corporate | Primary service — offices, co-working, retail, healthcare, hospitality, BFSI |
| `/home-interior` | Home Interiors | Secondary offering — luxury residential |
| `/portfolio` | Portfolio | Filterable gallery (Corporate/Residential/Retail/Healthcare/Hospitality) |
| `/about` | About | Story, values, team |
| `/contact` | Contact | Contact form + office locations |
| `/quote` | Get Quote | Full project inquiry form |

## 🏢 About the Company

**Nidhi Interior Decor** is a Hyderabad-based interior design firm founded in 2009.
- **Primary**: Corporate interiors (IT offices, co-working, retail, healthcare, hospitality, BFSI)
- **Secondary**: Premium residential interiors (full homes, villas)
- **Scale**: 500+ projects, 24 cities, 90+ team members

## 📸 Images

Images are loaded from [Unsplash](https://unsplash.com) via CDN. To replace with real project photos:
1. Add images to `/public/images/`
2. Update `UNSPLASH()` references in each page to `process.env.PUBLIC_URL + '/images/your-image.jpg'`
