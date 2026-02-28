import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: '🏗️',
    title: 'Office Fitout',
    desc: 'Complete turnkey office fitout services from design concept to handover. We manage everything — from shell & core to a fully finished, furniture-ready office.',
    features: ['Space planning', 'False ceiling', 'Flooring & Wall finishes', 'Furniture installation'],
  },
  {
    icon: '🔄',
    title: 'Office Refurbishment',
    desc: 'Revitalize your existing office without a full rebuild. We upgrade specific elements to modernize your workspace while minimizing disruption.',
    features: ['Partial renovation', 'Lighting upgrades', 'Partition redesign', 'Pantry & breakout zones'],
  },
  {
    icon: '🏗️',
    title: 'Architectural Design',
    desc: 'Functional and creative architectural plans tailored to your brand. From initial sketches to detailed technical drawings.',
    features: ['3D visualization', 'BOQ preparation', 'Regulatory compliance', 'Structural planning'],
  },
  {
    icon: '⚡',
    title: 'MEP Services',
    desc: 'Integrated mechanical, electrical, and plumbing services handled by our specialized in-house engineers.',
    features: ['HVAC design', 'Electrical systems', 'Fire safety', 'Data & network cabling'],
  },
  {
    icon: '🛋️',
    title: 'Modular Furniture',
    desc: 'Custom-designed and modular furniture solutions for open offices, cabins, conference rooms and more.',
    features: ['Workstations', 'Collaboration zones', 'Reception desks', 'Storage solutions'],
  },
  {
    icon: '🏥',
    title: 'Healthcare Spaces',
    desc: 'Specialized interior design for hospitals, clinics, and wellness centers meeting all healthcare regulations.',
    features: ['Patient-centric design', 'Hygienic materials', 'Wayfinding systems', 'Compliance ready'],
  },
];

const SECTORS = [
  { icon: '💻', name: 'IT & Technology' },
  { icon: '🏦', name: 'BFSI' },
  { icon: '🛍️', name: 'Retail' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🍽️', name: 'Hospitality' },
  { icon: '🤝', name: 'Co-working' },
];

export default function Corporate() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Corporate Interiors</span>
        </div>
        <h1>Corporate Interior Design</h1>
        <p>
          We design workplaces that energize teams, express your brand, and drive business outcomes.
          Our primary expertise — delivering corporate spaces across India.
        </p>
      </div>

      {/* ── SERVICES GRID ── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">End-to-End Corporate Solutions</h2>
            <p className="section-subtitle">
              From single-floor fitouts to multi-city rollouts, we deliver quality across every scale.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p style={{ marginBottom: '16px' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {s.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 600 }}>→</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Industries</span>
            <h2 className="section-title">Sectors We Serve</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginTop: '40px' }}>
            {SECTORS.map(s => (
              <div key={s.name} className="service-card" style={{ textAlign: 'center', padding: '28px 16px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{s.icon}</div>
                <h4 style={{ fontSize: '15px' }}>{s.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <div>
              <span className="section-label">Why Nidhi Interior</span>
              <h2 className="section-title">What Sets Us Apart</h2>
              <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
                With 15+ years of experience and 500+ projects delivered, we bring unmatched expertise
                in corporate interior design across India. Our in-house team handles everything —
                design, construction, MEP, and furniture — ensuring seamless delivery.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                {[
                  ['🏆', 'ISO 9001 Certified'],
                  ['⏱️', 'On-Time Delivery'],
                  ['🌍', '24 Cities Served'],
                  ['👥', '90+ In-House Team'],
                  ['🔧', 'Full Turnkey Service'],
                  ['📋', 'Transparent Billing'],
                ].map(([icon, label]) => (
                  <div key={label} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ fontSize: '20px' }}>{icon}</span>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{label}</span>
                  </div>
                ))}
              </div>
              <Link to="/quote" className="btn btn-primary">Start Your Project →</Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                alt="Corporate interior"
                style={{ width: '100%', borderRadius: '16px', height: '480px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>Ready to Transform Your Workplace?</h2>
          <p>Talk to our corporate design specialists and get a tailored proposal for your office.</p>
          <div className="cta-actions">
            <Link to="/quote" className="btn btn-primary">Get a Free Proposal</Link>
            <Link to="/portfolio" className="btn btn-outline">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
