import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UNSPLASH = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const team = [
  { name: 'Nidhi Sharma', role: 'Founder & Principal Designer', init: 'N', desc: '20+ years in corporate and luxury residential design. Founded the firm in 2009.' },
  { name: 'Arjun Reddy', role: 'Director – Corporate Projects', init: 'A', desc: 'Leads our large-format commercial project delivery across India.' },
  { name: 'Meera Pillai', role: 'Head of Design', init: 'M', desc: 'Award-winning interior designer specializing in hospitality and retail environments.' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About – Nidhi Interior Decor';
  }, []);

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">Our Story</div>
          <h1>Precision, Passion,<br /><em>Purpose</em></h1>
          <p>
            Founded in Hyderabad in 2009, we've grown into one of India's most
            trusted corporate interior design firms. 15 years of spaces that endure.
          </p>
        </div>
      </div>

      {/* STORY */}
      <section className="about-story">
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src={UNSPLASH('photo-1497366216548-37526070297c')} alt="Our Studio" className="about-img-main" />
            <img src={UNSPLASH('photo-1618221195710-dd6b41faaea6')} alt="Our Work" className="about-img-accent" />
          </div>
          <div className="about-content">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">Hyderabad's Corporate<br /><em>Interior Authority</em></h2>
            <p className="section-desc">
              Nidhi Interior Decor was founded with a singular focus: designing exceptional
              commercial spaces for Indian businesses. What began as a boutique studio has grown
              into a 90-person firm delivering projects across 24 cities.
            </p>
            <p className="section-desc" style={{ marginTop: '16px' }}>
              Our primary expertise is corporate interiors — offices, co-working spaces, retail,
              healthcare, and hospitality. We also offer premium residential interiors for clients
              who trust our corporate-grade quality in their homes.
            </p>

            <div className="about-values">
              {[
                { title: 'Precision', desc: 'Every millimeter matters. We obsess over details that most firms overlook.' },
                { title: 'Transparency', desc: 'Honest timelines, clear pricing, no surprises. Always.' },
                { title: 'Sustainability', desc: 'Responsible material choices and long-lasting design — built to last, not replace.' },
                { title: 'Innovation', desc: 'Staying ahead of global design trends while staying rooted in functionality.' },
              ].map((v, i) => (
                <div className="about-value" key={i}>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section style={{ padding: '80px', background: 'var(--charcoal)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0' }}>
          {[
            { num: '2009', label: 'Founded in Hyderabad' },
            { num: '500+', label: 'Projects Completed' },
            { num: '24', label: 'Cities Delivered' },
            { num: '90+', label: 'Team Members' },
          ].map((s, i) => (
            <div className="stat-item" key={i} style={{ borderTop: '1px solid rgba(200,169,110,0.1)' }}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="section-label">Leadership</div>
        <h2 className="section-title">Meet the <em>Team</em></h2>
        <div className="team-grid">
          {team.map((t, i) => (
            <div className="team-card" key={i}>
              <div className="team-card-img">{t.init}</div>
              <div className="team-card-body">
                <h3>{t.name}</h3>
                <div className="role">{t.role}</div>
                <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2>Let's Build<br /><em>Something Great</em></h2>
          <p>Partner with Hyderabad's most trusted interior design firm.</p>
          <div className="cta-banner-actions">
            <Link to="/quote" className="btn btn-gold">Start a Project</Link>
            <Link to="/contact" className="btn btn-outline-white">Get in Touch</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
