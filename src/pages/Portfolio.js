import { useState } from 'react';
import { Link } from 'react-router-dom';

const ALL_PROJECTS = [
  { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', cat: 'Corporate', title: 'TechMahindra HQ', city: 'Hyderabad' },
  { img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', cat: 'Residential', title: 'Villa Serena', city: 'Bengaluru' },
  { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', cat: 'Corporate', title: 'CloudSpaces', city: 'Mumbai' },
  { img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80', cat: 'Healthcare', title: 'Apollo Wellness', city: 'Hyderabad' },
  { img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', cat: 'Residential', title: 'Sky Penthouse', city: 'Pune' },
  { img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80', cat: 'Corporate', title: 'Infosys Campus', city: 'Chennai' },
  { img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', cat: 'Retail', title: 'LuxeBoutique Store', city: 'Delhi' },
  { img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80', cat: 'Corporate', title: 'Zenq Technologies', city: 'Hyderabad' },
  { img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', cat: 'Residential', title: 'Urban Loft', city: 'Bengaluru' },
  { img: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80', cat: 'Hospitality', title: 'The Grand Lobby', city: 'Hyderabad' },
  { img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80', cat: 'Healthcare', title: 'MediCity Clinic', city: 'Mumbai' },
  { img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80', cat: 'Retail', title: 'Signature Showroom', city: 'Chennai' },
];

const FILTERS = ['All', 'Corporate', 'Residential', 'Healthcare', 'Retail', 'Hospitality'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.cat === active);

  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Portfolio</span>
        </div>
        <h1>Our Project Portfolio</h1>
        <p>
          Explore our completed projects spanning corporate offices, luxury residences,
          healthcare facilities, retail spaces, and hospitality venues across India.
        </p>
      </div>

      <section className="section">
        <div className="container">
          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '56px',
            padding: '32px',
            background: 'var(--light)',
            borderRadius: '16px'
          }}>
            {[['500+', 'Projects Completed'], ['24', 'Cities'], ['15+', 'Years'], ['100%', 'Client Satisfaction']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, color: 'var(--accent)' }}>{num}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="portfolio-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-page-grid">
            {filtered.map((p, i) => (
              <div key={i} className="portfolio-page-item">
                <img src={p.img} alt={p.title} />
                <div className="portfolio-page-overlay">
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>{p.cat} · {p.city}</div>
                    <h4 style={{ color: 'var(--white)', fontSize: '18px' }}>{p.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)' }}>
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      <section className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>Have a Project in Mind?</h2>
          <p>Let's collaborate to create your next award-winning space.</p>
          <Link to="/quote" className="btn btn-primary">Get Started →</Link>
        </div>
      </section>
    </>
  );
}
