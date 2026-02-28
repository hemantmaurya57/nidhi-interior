import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    badge: 'Premium Corporate Interiors',
    title: 'Creating Modern & Productive Workspaces',
    highlight: 'Workspaces',
    desc: 'Quality, innovation, and satisfaction are the hallmarks of Nidhi Interior — Hyderabad\'s premier corporate design studio.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80',
    badge: 'Luxury Residential Design',
    title: 'Elevate Your Living with Timeless Elegance',
    highlight: 'Elegance',
    desc: 'We transform homes into personal sanctuaries — blending aesthetics, function, and soul into every corner.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
    badge: 'Pan India Services',
    title: 'Designing Offices That Reflect Your Brand',
    highlight: 'Brand',
    desc: 'Your workspace is your identity. We design environments that communicate your vision and energize your team.',
  },
];

const SERVICES = [
  { icon: '🏗️', title: 'Architectural Design', desc: 'Functional and aesthetic architectural concepts tailored to your space and brand identity.' },
  { icon: '🛋️', title: 'Modular Furniture', desc: 'Custom and modular furniture solutions designed for modern offices and residences.' },
  { icon: '🏢', title: 'Office Fitout', desc: 'Complete turnkey office fitout services from concept to handover across all scales.' },
  { icon: '⚡', title: 'MEP Services', desc: 'Integrated mechanical, electrical, and plumbing services for seamless build-outs.' },
  { icon: '🏠', title: 'Residential Design', desc: 'Luxury home interiors crafted with bespoke materials, layouts, and personal touches.' },
  { icon: '🏥', title: 'Healthcare Interiors', desc: 'Specialized design for clinics, hospitals and wellness centres with compliance in mind.' },
];

const PORTFOLIO = [
  { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', cat: 'Corporate', title: 'TechMahindra HQ', tall: true },
  { img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', cat: 'Residential', title: 'Villa Serena' },
  { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', cat: 'Office', title: 'CloudSpaces' },
  { img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80', cat: 'Healthcare', title: 'Apollo Wellness' },
  { img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', cat: 'Residential', title: 'Sky Penthouse' },
];

const TESTIMONIALS = [
  {
    text: 'Nidhi Interior consistently delivers extremely high quality finished projects within accepted deadlines. Their quality of execution can be attributed to their flexible approach, on-time delivery, and in-depth project coordination.',
    name: 'Rajiv Sharma',
    role: 'Head Facilities — Wipro Ltd.',
    initial: 'R',
  },
  {
    text: 'The quality of work, professionalism, time & cost management skills demonstrated by the team are worthy of commendation. Their proactive approach made it a pleasant experience.',
    name: 'Priya Mehtani',
    role: 'Sr. Director, Real Estate — Google India',
    initial: 'P',
  },
  {
    text: 'We are pleased with the quality and professionalism. Their highly effective project management and hard work guaranteed timely completion with all deliverables outstanding in their detail.',
    name: 'Arun Krishnaswamy',
    role: 'Managing Director — HIL India',
    initial: 'A',
  },
];

const BLOGS = [
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75',
    tag: 'Design',
    date: 'Nov 12, 2024',
    title: 'How to Design a Productive Remote-Work Office at Home',
    desc: 'With hybrid work becoming the norm, designing a home office that fuels focus and creativity is more important than ever.',
  },
  {
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=75',
    tag: 'Corporate',
    date: 'Oct 5, 2024',
    title: 'Office Fitout vs Office Refurbishment: Making the Right Choice',
    desc: 'Unsure whether to do a full fitout or a targeted refurbishment? We break down the key factors to help you decide.',
  },
  {
    img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=75',
    tag: 'Trends',
    date: 'Sep 18, 2024',
    title: 'Biophilic Design: Bringing Nature Into Your Workspace',
    desc: 'Studies show natural elements in offices improve well-being and productivity. Here\'s how to incorporate them effectively.',
  },
];

const PROCESS = [
  { num: '01', title: 'Discovery', desc: 'We understand your requirements, brand, and vision in detail.' },
  { num: '02', title: 'Concept', desc: 'Initial proposals with programming, planning, and concept design.' },
  { num: '03', title: 'Feasibility', desc: 'Detailed data-driven cost and schedule proposal from our team.' },
  { num: '04', title: 'Design', desc: 'Complete design package executed to achieve your vision.' },
  { num: '05', title: 'Build', desc: 'Construction begins and your dream space comes to life.' },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  const nextSlide = useCallback(() => setSlide(s => (s + 1) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(nextSlide, 5500);
    return () => clearInterval(t);
  }, [nextSlide]);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        {SLIDES.map((s, i) => (
          <div key={i} className={`hero-slide ${i === slide ? 'active' : ''}`}>
            <div
              className="hero-bg"
              style={{ backgroundImage: `url('${s.bg}')` }}
              key={i === slide ? 'active' : i}
            />
            <div className="hero-content">
              <div className="hero-badge">{s.badge}</div>
              <h1 className="hero-title">{s.title}</h1>
              <p className="hero-desc">{s.desc}</p>
              <div className="hero-actions">
                <Link to="/portfolio" className="btn btn-primary">View Our Work</Link>
                <Link to="/quote" className="btn btn-outline">Get a Free Quote</Link>
              </div>
            </div>
          </div>
        ))}

        <div className="hero-stats">
          {[['500+', 'Projects'], ['24', 'Cities'], ['15+', 'Years'], ['90+', 'Team']].map(([num, label]) => (
            <div key={label} className="hero-stat">
              <span className="num">{num}</span>
              <span className="label">{label}</span>
            </div>
          ))}
        </div>

        <div className="hero-controls">
          {SLIDES.map((_, i) => (
            <button key={i} className={`hero-dot ${i === slide ? 'active' : ''}`} onClick={() => setSlide(i)} />
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...Array(2)].map((_, rep) =>
            ['Corporate Interiors', 'Office Fitout', 'Residential Design', 'MEP Services', 'Architectural Design', 'Modular Furniture', 'Healthcare Spaces', 'Pan India Services'].map((item, i) => (
              <div key={`${rep}-${i}`} className="marquee-item">
                <span className="dot" />
                {item}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Comprehensive Interior Solutions</h2>
            <p className="section-subtitle">
              From concept to completion, we deliver end-to-end interior and infrastructure
              design services across all sectors.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/corporate" className="service-link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="about-split">
            <div className="about-image-wrap">
              <img
                className="about-image-main"
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80"
                alt="Our Studio"
              />
              <div className="about-image-badge">
                <div className="big">15+</div>
                <div className="small">Years of Excellence</div>
              </div>
            </div>

            <div className="about-content">
              <span className="section-label">About Us</span>
              <h2 className="section-title">Design Your Dream Space With Us</h2>
              <p>
                Nidhi Interior Decor is a Hyderabad-based interior design firm founded in 2009.
                We understand how to design spaces well — offices that energize teams, and homes
                that nourish the soul.
              </p>
              <p>
                Our 13+ years of experience and innovation help us create stunning corporate
                offices and luxury residences across 24 cities in India.
              </p>
              <div className="about-features">
                {['Turnkey Delivery', 'Pan India Coverage', 'ISO Certified', 'On-Time Handover', '500+ Projects', '90+ Professionals'].map(f => (
                  <div key={f} className="about-feature">
                    <span className="check">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-dark">Our Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section process-bg">
        <div className="container">
          <div className="text-center">
            <span className="section-label" style={{ color: 'var(--accent)' }}>Our Process</span>
            <h2 className="section-title">How We Design Stunning Spaces</h2>
            <p className="section-subtitle">
              A proven five-step process that guarantees quality, transparency, and on-time delivery every time.
            </p>
          </div>
          <div className="process-steps">
            {PROCESS.map((s, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle">
              A curated selection of our finest completed projects across corporate, residential, and healthcare sectors.
            </p>
          </div>
          <div className="portfolio-grid">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className={`portfolio-item ${p.tall ? 'tall' : ''}`}>
                <img className="portfolio-img" src={p.img} alt={p.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <div className="cat">{p.cat}</div>
                    <h4>{p.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '32px' }}>
            <Link to="/portfolio" className="btn btn-dark">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="section clients-section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Clients</span>
            <h2 className="section-title">Trusted by Leading Brands</h2>
          </div>
          <div className="clients-logos">
            {['Wipro', 'Google', 'Facebook', 'Zenq', 'Aveva', 'CGI', 'Compass', 'Vodafone'].map(c => (
              <div key={c} className="client-logo">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initial}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className="section blogs">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Insights</span>
            <h2 className="section-title">Latest from Our Blog</h2>
            <p className="section-subtitle">
              Stay updated with design trends, tips, and insights from our studio.
            </p>
          </div>
          <div className="blog-grid">
            {BLOGS.map((b, i) => (
              <div key={i} className="blog-card">
                <div className="blog-thumb-wrap">
                  <img className="blog-thumb" src={b.img} alt={b.title} />
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="tag">{b.tag}</span>
                    <span>{b.date}</span>
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                  <a href="#" className="blog-read-more">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>Have a Project in Mind?</h2>
          <p>Let's talk about your space. Our team is ready to transform your vision into reality.</p>
          <div className="cta-actions">
            <Link to="/quote" className="btn btn-primary" style={{ fontSize: '15px', padding: '16px 36px' }}>
              Get a Free Quote
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ fontSize: '15px', padding: '16px 36px' }}>
              Contact Us
            </Link>
          </div>
          <div className="cta-phone">
            📞 +91 98765 43210
          </div>
        </div>
      </section>
    </>
  );
}
