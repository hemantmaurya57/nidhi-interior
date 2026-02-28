import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UNSPLASH = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const services = [
  {
    icon: 'fa-laptop-code',
    title: 'IT & Technology Offices',
    desc: 'We design agile, modern tech campuses and offices that fuel innovation. From open-plan collaboration zones to focused work pods.',
    features: ['Activity-based workstations', 'Collaboration hubs', 'Tech-integrated meeting rooms', 'Breakout & wellness zones'],
  },
  {
    icon: 'fa-users',
    title: 'Co-working & Flex Spaces',
    desc: 'Flexible, vibrant environments that attract diverse talent and communities. Designed to be operationally efficient and visually compelling.',
    features: ['Hot desk zones', 'Private cabins', 'Lounge & café areas', 'Podcast & event rooms'],
  },
  {
    icon: 'fa-store',
    title: 'Retail & Showrooms',
    desc: 'Immersive retail experiences that tell your brand story and convert visitors. We design for flow, discovery, and desire.',
    features: ['Customer journey mapping', 'Display & fixture design', 'Lighting strategy', 'Point-of-sale integration'],
  },
  {
    icon: 'fa-hospital',
    title: 'Healthcare & Clinics',
    desc: 'Spaces that heal. We create calm, functional, and hygienic interiors for hospitals, clinics, and wellness centres.',
    features: ['Patient-centric design', 'Infection-control materials', 'Wayfinding & signage', 'Staff efficiency zones'],
  },
  {
    icon: 'fa-hotel',
    title: 'Hospitality Spaces',
    desc: 'Memorable hotel lobbies, restaurants, and banquet halls designed to elevate the guest experience at every touchpoint.',
    features: ['Lobby & reception areas', 'F&B spaces', 'Banquet & event halls', 'Guest room concepts'],
  },
  {
    icon: 'fa-chart-line',
    title: 'BFSI & Corporate HQ',
    desc: 'Authoritative, premium headquarters for banks, NBFCs, and large enterprises. Spaces that communicate stability and ambition.',
    features: ['Executive boardrooms', 'Client reception areas', 'Trading & operations floors', 'Brand-aligned design'],
  },
];

const industries = [
  { icon: 'fa-microchip', title: 'Information Technology' },
  { icon: 'fa-university', title: 'Banking & Finance' },
  { icon: 'fa-pills', title: 'Pharmaceuticals' },
  { icon: 'fa-tshirt', title: 'Fashion & Retail' },
  { icon: 'fa-heartbeat', title: 'Healthcare' },
  { icon: 'fa-graduation-cap', title: 'Education' },
  { icon: 'fa-plane', title: 'Aviation & Logistics' },
  { icon: 'fa-cog', title: 'Manufacturing' },
];

const projects = [
  { id: 'photo-1497366216548-37526070297c', title: 'TechNova HQ', city: 'Hyderabad', type: 'IT Office', sqft: '18,500 sq ft' },
  { id: 'photo-1497366754035-f200968a5db7', title: 'WorkNest Co-working', city: 'Hyderabad', type: 'Co-working', sqft: '12,000 sq ft' },
  { id: 'photo-1524758631624-e2822e304c36', title: 'FinEdge Capital', city: 'Mumbai', type: 'Corporate HQ', sqft: '22,000 sq ft' },
  { id: 'photo-1464938050520-ef2270bb8ce8', title: 'MediCure Hospitals', city: 'Bengaluru', type: 'Healthcare', sqft: '8,000 sq ft' },
  { id: 'photo-1586023492125-27b2c045efd7', title: 'The Grand Lobby', city: 'Hyderabad', type: 'Hospitality', sqft: '4,500 sq ft' },
  { id: 'photo-1582037928769-181f2644ecb7', title: 'StyleHub Flagship', city: 'Pune', type: 'Retail', sqft: '3,200 sq ft' },
];

export default function Corporate() {
  useEffect(() => {
    document.title = 'Corporate Interior Design – Nidhi Interior Decor';
  }, []);

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">Corporate Interiors</div>
          <h1>Workspaces That<br /><em>Define Brands</em></h1>
          <p>
            We design high-performance commercial spaces — from 1,000 sq ft offices
            to 50,000 sq ft campuses — across Hyderabad and pan India.
          </p>
          <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/quote" className="btn btn-gold">Start Your Project</Link>
            <Link to="/portfolio" className="btn btn-outline-white">View Portfolio</Link>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="corp-services-grid">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Corporate Design <em>Specialisations</em></h2>
        <p className="section-desc">
          Six distinct verticals, one standard of excellence. Our teams are trained specialists
          in each segment — not generalists.
        </p>
        <div className="corp-services-list">
          {services.map((s, i) => (
            <div className="corp-service-item" key={i}>
              <i className={`fas ${s.icon}`} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries-section">
        <div className="section-label light">Sector Expertise</div>
        <h2 className="section-title light">Industries We <em>Serve</em></h2>
        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div className="industry-card" key={i}>
              <div className="industry-icon"><i className={`fas ${ind.icon}`} /></div>
              <h4>{ind.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section style={{ padding: '100px 80px', background: 'var(--white)' }}>
        <div className="section-label">Recent Work</div>
        <h2 className="section-title">Corporate <em>Projects</em></h2>
        <div className="portfolio-masonry" style={{ marginTop: '50px' }}>
          {projects.map((p, i) => (
            <div className="port-full-item" key={i}>
              <img src={UNSPLASH(p.id)} alt={p.title} />
              <div className="port-full-overlay">
                <div className="port-full-label">
                  <span>{p.type} · {p.city} · {p.sqft}</span>
                  <h4>{p.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        {[
          { num: '350+', label: 'Corporate Projects' },
          { num: '50L+ sq ft', label: 'Space Designed' },
          { num: '48 days', label: 'Avg Delivery Time' },
          { num: '24', label: 'Cities Delivered' },
        ].map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2>Let's Design Your<br /><em>Dream Workspace</em></h2>
          <p>Free site visit and consultation for corporate projects in Hyderabad & pan India.</p>
          <div className="cta-banner-actions">
            <Link to="/quote" className="btn btn-gold">Request Free Consultation</Link>
            <Link to="/contact" className="btn btn-outline-white">Talk to Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
