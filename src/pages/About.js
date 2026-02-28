import { Link } from 'react-router-dom';

const TEAM = [
  { name: 'Nidhi Sharma', role: 'Founder & Creative Director', initial: 'N' },
  { name: 'Arjun Mehta', role: 'Head of Corporate Design', initial: 'A' },
  { name: 'Priya Reddy', role: 'Senior Architect', initial: 'P' },
  { name: 'Kiran Babu', role: 'MEP Project Lead', initial: 'K' },
  { name: 'Sneha Patel', role: 'Residential Design Head', initial: 'S' },
  { name: 'Vikram Nair', role: 'Business Development', initial: 'V' },
];

const VALUES = [
  { icon: '🏆', title: 'Excellence', desc: 'We hold our work to the highest standards — from design concept to final nail.' },
  { icon: '💡', title: 'Innovation', desc: 'We continually push the boundaries of design, materials, and process.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honest timelines, transparent pricing, and clear communication always.' },
  { icon: '🌱', title: 'Sustainability', desc: 'We incorporate eco-friendly materials and energy-efficient design wherever possible.' },
];

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
        <h1>About Nidhi Interior Decor</h1>
        <p>
          A decade-and-a-half of crafting spaces that inspire — from boardrooms to bedrooms.
          Hyderabad's most trusted interior design studio.
        </p>
      </div>

      {/* ── STORY ── */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Designing the Future Since 2009</h2>
              <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                Nidhi Interior Decor was founded in 2009 with a single belief: that great design changes
                how people feel and perform. Starting with a small team in Hyderabad, we've grown into
                a 90+ member studio serving clients across 24 Indian cities.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                Our primary strength lies in corporate interiors — IT offices, co-working spaces, retail
                showrooms, healthcare facilities, and hospitality venues. Our secondary and growing passion
                is luxury residential design.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
                We believe every space — no matter the scale — deserves thoughtful design that serves both
                the people within it and the brand it represents.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/portfolio" className="btn btn-dark">Our Work</Link>
                <Link to="/contact" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Get in Touch</Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80"
                alt="Our studio"
                style={{ width: '100%', borderRadius: '16px', height: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section-sm" style={{ background: 'var(--gradient)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[['500+', 'Projects'], ['24', 'Cities'], ['15+', 'Years'], ['90+', 'Team Members']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 700, color: 'var(--accent)' }}>{num}</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="services-grid" style={{ marginTop: '40px' }}>
            {VALUES.map((v, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Meet the Team</span>
            <h2 className="section-title">The People Behind the Spaces</h2>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">{m.initial}</div>
                <h4>{m.name}</h4>
                <div className="role">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>Join 500+ Happy Clients</h2>
          <p>Let's design your next great space together.</p>
          <Link to="/quote" className="btn btn-primary">Start a Project →</Link>
        </div>
      </section>
    </>
  );
}
