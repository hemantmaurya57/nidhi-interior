import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UNSPLASH = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const homeServices = [
  { icon: 'fa-couch', title: 'Living & Drawing Room', desc: 'Elegant living spaces that balance comfort, aesthetics, and personality. Custom furniture, statement walls, and bespoke lighting.' },
  { icon: 'fa-bed', title: 'Master & Guest Bedrooms', desc: 'Restful retreats with refined material palettes — wardrobe design, headboard accents, and ambient lighting.' },
  { icon: 'fa-door-open', title: 'Foyer & Entrance', desc: 'A first impression that sets the tone. Artful entry designs with custom joinery and curated art.' },
  { icon: 'fa-bath', title: 'Bathrooms & Powder Rooms', desc: 'Spa-like bathrooms with luxury fixtures, statement tiles, and bespoke vanity units.' },
  { icon: 'fa-paint-roller', title: 'Full Home Design', desc: 'End-to-end interior design for your entire home — a cohesive vision executed with precision.' },
  { icon: 'fa-child', title: "Kids' Rooms", desc: 'Fun, functional, and safe spaces that grow with your child. Smart storage, creative themes.' },
];

const projects = [
  { id: 'photo-1618221195710-dd6b41faaea6', title: 'The Kapoor Residence', detail: '4 BHK · Banjara Hills · 3,800 sq ft' },
  { id: 'photo-1600121848594-d8644e57abab', title: 'Reddy Villa', detail: 'Villa · Jubilee Hills · 5,200 sq ft' },
  { id: 'photo-1586023492125-27b2c045efd7', title: 'Sharma Apartment', detail: '3 BHK · Gachibowli · 2,100 sq ft' },
  { id: 'photo-1578683010236-d716f9a3f461', title: 'Mehta Penthouse', detail: 'Penthouse · Hitec City · 4,400 sq ft' },
];

export default function HomeInterior() {
  useEffect(() => {
    document.title = 'Home Interior Design – Nidhi Interior Decor';
  }, []);

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">Residential Interiors</div>
          <h1>Your Home,<br /><em>Elevated</em></h1>
          <p>
            Luxury residential interiors designed with the same precision and passion
            as our corporate work. No compromises on craft or quality.
          </p>
          <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/quote" className="btn btn-gold">Start Your Home Project</Link>
            <Link to="/portfolio" className="btn btn-outline-white">See Our Homes</Link>
          </div>
        </div>
      </div>

      {/* NOTE ABOUT SCOPE */}
      <div style={{ background: 'var(--gold)', padding: '28px 80px', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <i className="fas fa-info-circle" style={{ fontSize: '20px', color: 'var(--charcoal)', flexShrink: 0 }} />
        <p style={{ fontSize: '14px', color: 'var(--charcoal)', fontWeight: 500, lineHeight: 1.6 }}>
          <strong>Note:</strong> Home interiors are a curated offering at Nidhi Interior Decor. We focus on
          premium full-home and room-by-room projects for discerning homeowners in Hyderabad and select cities.
          Our corporate DNA means meticulous project management and on-time delivery — always.
        </p>
      </div>

      {/* HOME SERVICES */}
      <section className="home-services-section">
        <div className="section-label">Home Services</div>
        <h2 className="section-title">What We Design <em>for You</em></h2>
        <p className="section-desc">
          Every room, designed to reflect your personality and elevate your daily life.
        </p>
        <div className="home-services-grid">
          {homeServices.map((s, i) => (
            <div className="home-service-card" key={i}>
              <div className="home-service-icon">
                <i className={`fas ${s.icon}`} />
              </div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: '100px 80px', background: 'var(--white)' }}>
        <div className="section-label">Residential Portfolio</div>
        <h2 className="section-title">Recent <em>Home Projects</em></h2>
        <div className="portfolio-masonry" style={{ marginTop: '50px' }}>
          {projects.map((p, i) => (
            <div className="port-full-item" key={i}>
              <img src={UNSPLASH(p.id)} alt={p.title} />
              <div className="port-full-overlay">
                <div className="port-full-label">
                  <span>{p.detail}</span>
                  <h4>{p.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{ padding: '100px 80px', background: 'var(--charcoal)' }}>
        <div className="section-label light">Why Nidhi Interior</div>
        <h2 className="section-title light">The Difference in <em>Every Detail</em></h2>
        <div className="corporate-grid" style={{ marginTop: '50px' }}>
          {[
            { icon: 'fa-drafting-compass', title: 'Corporate-Grade Precision', desc: 'Every residential project follows our corporate project management protocols — structured, transparent, on-time.' },
            { icon: 'fa-palette', title: 'No Generic Designs', desc: 'Your home is unique. We never use template designs. Everything is custom-crafted to your lifestyle.' },
            { icon: 'fa-award', title: 'Premium Materials', desc: 'We source quality materials from trusted vendors. No shortcuts on finishes, hardware, or fabrics.' },
            { icon: 'fa-rupee-sign', title: 'Transparent Pricing', desc: 'Detailed, itemized quotes with no hidden costs. You know exactly what you are paying for.' },
            { icon: 'fa-tools', title: 'Skilled Artisans', desc: 'Our installation teams are trained craftspeople — the same crews who build our corporate projects.' },
            { icon: 'fa-headset', title: 'Dedicated Manager', desc: 'A single point of contact manages your project from day one to handover and beyond.' },
          ].map((c, i) => (
            <div className="corp-card" key={i}>
              <div className="corp-card-icon"><i className={`fas ${c.icon}`} /></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2>Ready to Design<br /><em>Your Home?</em></h2>
          <p>Schedule a free in-home consultation with our residential design team.</p>
          <div className="cta-banner-actions">
            <Link to="/quote" className="btn btn-gold">Get Free Quote</Link>
            <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
