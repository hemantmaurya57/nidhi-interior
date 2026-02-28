import { Link } from 'react-router-dom';

const SERVICES = [
  { icon: '🛋️', title: 'Living Room Design', desc: 'Curated furniture, lighting, and décor to make your living space both beautiful and functional.' },
  { icon: '🛏️', title: 'Bedroom Interiors', desc: 'Restful, elegant bedrooms designed around your taste — from minimalist to maximalist.' },
  { icon: '🍳', title: 'Modular Kitchens', desc: 'Modern, space-efficient kitchens with premium finishes and smart storage solutions.' },
  { icon: '🚿', title: 'Luxury Bathrooms', desc: 'Spa-inspired bathrooms that bring hotel luxury into your everyday routine.' },
  { icon: '🪟', title: 'Entire Home Design', desc: 'Complete home design and build services for new homes, villas, and apartments.' },
  { icon: '🎨', title: 'Interior Styling', desc: 'Art, accessories, plants, and styling for homes that are already furnished.' },
];

export default function HomeInterior() {
  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Residential Interiors</span>
        </div>
        <h1>Luxury Residential Interiors</h1>
        <p>
          We design homes that feel truly yours — blending beauty, comfort, and character into
          every corner of your space.
        </p>
      </div>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Residential Design Services</h2>
            <p className="section-subtitle">Every home is unique. Our residential services are fully customized to your lifestyle and aesthetic.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section" style={{ background: 'var(--light)', paddingTop: 0 }}>
        <div className="container">
          <div className="text-center" style={{ paddingTop: '80px' }}>
            <span className="section-label">Inspiration</span>
            <h2 className="section-title">Recent Residential Projects</h2>
          </div>
          <div className="portfolio-page-grid" style={{ marginTop: '40px' }}>
            {[
              'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80',
              'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80',
              'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80',
              'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80',
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80',
              'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=700&q=80',
            ].map((img, i) => (
              <div key={i} className="portfolio-page-item">
                <img src={img} alt={`Residential project ${i + 1}`} />
                <div className="portfolio-page-overlay">
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>Residential</div>
                    <h4 style={{ color: 'var(--white)', fontSize: '16px' }}>Luxury Home {i + 1}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="text-center">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How We Design Your Home</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {[
              ['01', 'Discovery Call', 'We learn about your lifestyle, taste, and vision.'],
              ['02', 'Concept & Mood Board', 'We present a visual direction tailored to you.'],
              ['03', 'Design Development', 'Detailed drawings, material selection, and 3D renders.'],
              ['04', 'Execution', 'Our team builds with precision and quality.'],
            ].map(([num, title, desc]) => (
              <div key={num} style={{ textAlign: 'center', padding: '24px 16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700,
                  color: 'var(--accent)', marginBottom: '12px'
                }}>{num}</div>
                <h4 style={{ fontSize: '15px', marginBottom: '8px' }}>{title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>Ready to Transform Your Home?</h2>
          <p>Book a free consultation and let's start designing your dream space.</p>
          <Link to="/quote" className="btn btn-primary">Book a Consultation →</Link>
        </div>
      </section>
    </>
  );
}
