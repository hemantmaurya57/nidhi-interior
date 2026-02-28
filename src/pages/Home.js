import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UNSPLASH = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const portfolioItems = [
  { id: 'photo-1497366216548-37526070297c', cat: 'Corporate', title: 'Tech HQ, Hyderabad', large: true },
  { id: 'photo-1497366754035-f200968a5db7', cat: 'Corporate', title: 'Co-working Hub' },
  { id: 'photo-1618221195710-dd6b41faaea6', cat: 'Home', title: 'Luxury Living Room' },
  { id: 'photo-1524758631624-e2822e304c36', cat: 'Corporate', title: 'Executive Suite' },
  { id: 'photo-1600121848594-d8644e57abab', cat: 'Home', title: 'Master Bedroom' },
];

const testimonials = [
  {
    quote: "Nidhi Interior completely transformed our 12,000 sq ft Hyderabad office. The attention to detail, ergonomics, and brand identity integration was exceptional.",
    name: "Raghavendra Rao",
    role: "CEO, TechNova Solutions",
    init: "R"
  },
  {
    quote: "From concept to handover in 48 days. Our new co-working space in HITEC City is now a benchmark. The team's professionalism is unmatched.",
    name: "Priya Menon",
    role: "Founder, WorkNest Spaces",
    init: "P"
  },
  {
    quote: "We engaged Nidhi Interior for our Mumbai and Pune offices after seeing their Hyderabad work. Consistency of quality across cities is remarkable.",
    name: "Aditya Sharma",
    role: "COO, FinEdge Capital",
    init: "A"
  },
];

export default function Home() {
  useEffect(() => {
    document.title = 'Nidhi Interior Decor | Premium Corporate & Home Interiors, Hyderabad';
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Hyderabad · Pan India Since 2009</span>
          </div>
          <h1>
            Spaces That<br />
            <em>Inspire</em> &<br />
            Perform
          </h1>
          <p className="hero-desc">
            Premium corporate and residential interior design firm. We design
            exceptional offices, commercial spaces, and luxury homes across India.
          </p>
          <div className="hero-actions">
            <Link to="/corporate" className="btn btn-gold">Corporate Solutions</Link>
            <Link to="/portfolio" className="btn btn-outline-white">View Portfolio</Link>
          </div>

          <div className="hero-stats">
            {[
              { num: '500+', label: 'Projects Done' },
              { num: '15+', label: 'Years Experience' },
              { num: '24', label: 'Cities Served' },
              { num: '98%', label: 'Client Retention' },
            ].map((s, i) => (
              <div key={i}>
                <div className="hero-stat-num">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* FOCUS STRIP */}
      <div className="focus-strip">
        {['Corporate Offices', 'Co-working Spaces', 'Retail & Showrooms', 'Healthcare', 'Hospitality', 'Home Interiors'].map((item, i, arr) => (
          <React.Fragment key={i}>
            <div className="focus-item">
              <i className="fas fa-diamond" />
              {item}
            </div>
            {i < arr.length - 1 && <div className="focus-divider" />}
          </React.Fragment>
        ))}
      </div>

      {/* SERVICES INTRO */}
      <section className="services-intro">
        <div className="services-intro-grid">
          <div className="services-intro-visual">
            <img
              src={UNSPLASH('photo-1497366216548-37526070297c')}
              alt="Corporate Interior"
              className="services-intro-img"
            />
            <div className="services-intro-badge">
              <div className="services-intro-badge-num">15+</div>
              <div className="services-intro-badge-text">Years of<br />Excellence</div>
            </div>
          </div>

          <div>
            <div className="section-label">Our Expertise</div>
            <h2 className="section-title">Corporate-First,<br /><em>Excellence Always</em></h2>
            <p className="section-desc" style={{ marginBottom: '40px' }}>
              Nidhi Interior Decor is Hyderabad's leading corporate interior design firm.
              We specialize in transforming commercial and office spaces — and also bring that
              same precision to luxury residential projects.
            </p>

            <div className="service-type-cards">
              {[
                { icon: 'fa-building', title: 'Corporate Spaces', desc: 'Offices, HQs, co-working, retail, healthcare, and hospitality — our primary domain.' },
                { icon: 'fa-home', title: 'Home Interiors', desc: 'Curated luxury residential design for those who want more than the ordinary.' },
                { icon: 'fa-map-marker-alt', title: 'Pan India', desc: 'Headquarters in Hyderabad, delivering across 24+ cities nationwide.' },
                { icon: 'fa-medal', title: 'End-to-End', desc: 'From concept and design to execution, handover, and post-project support.' },
              ].map((s, i) => (
                <div className="service-type-card" key={i}>
                  <i className={`fas ${s.icon}`} />
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE SERVICES HIGHLIGHT */}
      <section className="corporate-section">
        <div className="section-label light">Core Business</div>
        <h2 className="section-title light" style={{ marginBottom: '8px' }}>Corporate Interior<br /><em>Solutions</em></h2>
        <p className="section-desc light">
          Our primary expertise — designing workspaces that drive productivity, reflect brand identity, and impress clients.
        </p>
        <div className="corporate-grid">
          {[
            { icon: 'fa-laptop-code', title: 'IT & Tech Offices', desc: 'Modern, agile workspaces for technology companies. We understand how tech teams work and design accordingly.' },
            { icon: 'fa-users', title: 'Co-working Spaces', desc: 'Vibrant, flexible co-working environments that attract talent and foster community.' },
            { icon: 'fa-store', title: 'Retail & Showrooms', desc: 'Immersive retail environments that drive footfall, showcase products, and convert visitors.' },
            { icon: 'fa-hospital', title: 'Healthcare Interiors', desc: 'Calming, functional clinical spaces that put patients at ease and improve workflow.' },
            { icon: 'fa-hotel', title: 'Hospitality', desc: 'Hotels, restaurants, and banquet halls with a refined aesthetic that elevates guest experience.' },
            { icon: 'fa-chart-line', title: 'BFSI & Corporate HQ', desc: 'Authoritative, elegant headquarters for banks, financial institutions, and large enterprises.' },
          ].map((c, i) => (
            <div className="corp-card" key={i}>
              <div className="corp-card-icon"><i className={`fas ${c.icon}`} /></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '50px' }}>
          <Link to="/corporate" className="btn btn-gold">Explore Corporate Services</Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div style={{ textAlign: 'center', marginBottom: '0' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Design <em>Process</em></h2>
        </div>
        <div className="process-steps">
          {[
            { n: '01', title: 'Discovery', desc: 'Understanding your brand, culture, and space requirements.' },
            { n: '02', title: 'Concept', desc: 'Curated design concepts aligned with your vision.' },
            { n: '03', title: 'Design Dev', desc: '3D visualization and detailed technical drawings.' },
            { n: '04', title: 'Execution', desc: 'Expert installation with daily progress updates.' },
            { n: '05', title: 'Handover', desc: 'Snag-free delivery with full documentation.' },
          ].map((s, i) => (
            <div className="process-step" key={i}>
              <div className="process-step-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="portfolio-teaser">
        <div className="portfolio-header">
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="section-title">Featured <em>Projects</em></h2>
          </div>
          <Link to="/portfolio" className="btn btn-outline-gold">View All Projects</Link>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, i) => (
            <div className={`port-item ${item.large ? 'large' : ''}`} key={i}>
              <img src={UNSPLASH(item.id)} alt={item.title} />
              <div className="port-overlay">
                <div className="port-label">
                  <div className="port-label-cat">{item.cat}</div>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        {[
          { num: '500+', label: 'Projects Completed' },
          { num: '₹200Cr+', label: 'Work Executed' },
          { num: '24', label: 'Cities Served' },
          { num: '98%', label: 'On-Time Delivery' },
        ].map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="section-label">Client Stories</div>
        <h2 className="section-title">What Our Clients <em>Say</em></h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-quote-icon">"</div>
              <blockquote>{t.quote}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.init}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2>Ready to Transform<br /><em>Your Space?</em></h2>
          <p>Talk to our design team today. Free consultation for corporate projects.</p>
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
