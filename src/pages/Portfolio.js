import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UNSPLASH = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const allProjects = [
  { id: 'photo-1497366216548-37526070297c', cat: 'corporate', type: 'IT Office', title: 'TechNova HQ', city: 'Hyderabad', sqft: '18,500', tall: true },
  { id: 'photo-1497366754035-f200968a5db7', cat: 'corporate', type: 'Co-working', title: 'WorkNest Hub', city: 'Hyderabad', sqft: '12,000' },
  { id: 'photo-1524758631624-e2822e304c36', cat: 'corporate', type: 'Corporate HQ', title: 'FinEdge Capital', city: 'Mumbai', sqft: '22,000' },
  { id: 'photo-1618221195710-dd6b41faaea6', cat: 'residential', type: 'Luxury Home', title: 'Kapoor Residence', city: 'Hyderabad', sqft: '3,800' },
  { id: 'photo-1464938050520-ef2270bb8ce8', cat: 'healthcare', type: 'Hospital', title: 'MediCure Clinic', city: 'Bengaluru', sqft: '8,000', tall: true },
  { id: 'photo-1586023492125-27b2c045efd7', cat: 'hospitality', type: 'Hotel Lobby', title: 'The Grand Lobby', city: 'Hyderabad', sqft: '4,500' },
  { id: 'photo-1600121848594-d8644e57abab', cat: 'residential', type: 'Villa', title: 'Reddy Villa', city: 'Hyderabad', sqft: '5,200' },
  { id: 'photo-1582037928769-181f2644ecb7', cat: 'retail', type: 'Flagship Store', title: 'StyleHub Store', city: 'Pune', sqft: '3,200' },
  { id: 'photo-1538688525198-9b88f6f53126', cat: 'corporate', type: 'Conference Suite', title: 'Apollo Boardroom', city: 'Chennai', sqft: '2,400' },
  { id: 'photo-1578683010236-d716f9a3f461', cat: 'residential', type: 'Penthouse', title: 'Mehta Penthouse', city: 'Hyderabad', sqft: '4,400' },
  { id: 'photo-1471897488648-5eae4ac6686b', cat: 'hospitality', type: 'Restaurant', title: 'Spice Route', city: 'Hyderabad', sqft: '2,100' },
  { id: 'photo-1513694203232-719a280e022f', cat: 'residential', type: 'Apartment', title: 'Sharma Apartment', city: 'Gachibowli', sqft: '2,100' },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Residential', value: 'residential' },
  { label: 'Retail', value: 'retail' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Hospitality', value: 'hospitality' },
];

export default function Portfolio() {
  const [active, setActive] = useState('all');

  useEffect(() => {
    document.title = 'Portfolio – Nidhi Interior Decor';
  }, []);

  const filtered = active === 'all' ? allProjects : allProjects.filter(p => p.cat === active);

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">Our Work</div>
          <h1>A Portfolio Built<br />on <em>Excellence</em></h1>
          <p>500+ projects. Each one a story of transformation, precision, and craftsmanship.</p>
        </div>
      </div>

      <section className="portfolio-page">
        <div className="section-label">Featured Projects</div>
        <h2 className="section-title">Select <em>Works</em></h2>

        <div className="portfolio-filter">
          {filters.map(f => (
            <button
              key={f.value}
              className={`pf-btn ${active === f.value ? 'active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="portfolio-masonry">
          {filtered.map((p, i) => (
            <div className={`port-full-item ${p.tall ? 'tall' : ''}`} key={p.id + i}>
              <img src={UNSPLASH(p.id)} alt={p.title} />
              <div className="port-full-overlay">
                <div className="port-full-label">
                  <span>{p.type} · {p.city} · {p.sqft} sq ft</span>
                  <h4>{p.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '60px 0' }}>
            No projects in this category yet.
          </p>
        )}
      </section>

      <Footer />
    </>
  );
}
