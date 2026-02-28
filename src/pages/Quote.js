import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Quote() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    projectType: '', city: '', area: '', budget: '', timeline: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Get a Quote – Nidhi Interior Decor';
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">Start Your Project</div>
          <h1>Get a Free<br /><em>Project Quote</em></h1>
          <p>Fill in the details below. Our team will prepare a customized proposal within 48 hours.</p>
        </div>
      </div>

      <section className="quote-section">
        <div className="quote-grid">
          <div className="quote-sidebar">
            <h3>Why Work With Us?</h3>
            <p>
              Trusted by 500+ clients across India. Here's what you can expect
              when you choose Nidhi Interior Decor.
            </p>
            {[
              'Free initial consultation & site visit',
              'Detailed 3D visualization before execution',
              'Transparent, itemized pricing',
              'Dedicated project manager assigned',
              '100% on-time delivery commitment',
              '1-year post-handover support',
              'Quality materials from certified vendors',
              'Pan India project capability',
            ].map((b, i) => (
              <div className="quote-benefit" key={i}>
                <i className="fas fa-check" />
                <p>{b}</p>
              </div>
            ))}

            <div style={{ marginTop: '36px', paddingTop: '28px', borderTop: '1px solid rgba(200,169,110,0.15)' }}>
              <p style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
                Speak Directly
              </p>
              <a href="tel:+914023456789" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--gold)', fontSize: '15px', fontWeight: 500 }}>
                <i className="fas fa-phone" /> +91 40 2345 6789
              </a>
              <a href="https://wa.me/919876543210" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginTop: '10px' }}>
                <i className="fab fa-whatsapp" style={{ color: '#25d366' }} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><i className="fas fa-check-circle" /></div>
                <h3>Quote Request Received!</h3>
                <p>
                  Thank you, {form.name || 'there'}! Our team will review your requirements
                  and send a detailed proposal to {form.email || 'your email'} within 48 hours.
                </p>
                <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-light)' }}>
                  For urgent queries, call us at <a href="tel:+914023456789" style={{ color: 'var(--gold-dark)' }}>+91 40 2345 6789</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '26px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                  Project Details
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '28px' }}>
                  The more detail you provide, the more accurate our quote will be.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input name="name" type="text" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Company / Building Name</label>
                    <input name="company" type="text" placeholder="Optional" value={form.company} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Project Type *</label>
                    <select name="projectType" value={form.projectType} onChange={handleChange} required>
                      <option value="">Select type</option>
                      <optgroup label="Corporate (Primary)">
                        <option value="it-office">IT / Technology Office</option>
                        <option value="coworking">Co-working / Flex Space</option>
                        <option value="corporate-hq">Corporate HQ / Head Office</option>
                        <option value="retail">Retail / Showroom</option>
                        <option value="healthcare">Healthcare / Clinic</option>
                        <option value="hospitality">Hotel / Restaurant / Banquet</option>
                        <option value="bfsi">Bank / Financial Office</option>
                        <option value="other-corporate">Other Corporate Space</option>
                      </optgroup>
                      <optgroup label="Residential">
                        <option value="full-home">Full Home Interior</option>
                        <option value="partial-home">Partial (Specific Rooms)</option>
                        <option value="villa">Villa / Bungalow</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>City / Location *</label>
                    <select name="city" value={form.city} onChange={handleChange} required>
                      <option value="">Select city</option>
                      <option>Hyderabad</option>
                      <option>Mumbai</option>
                      <option>Bengaluru</option>
                      <option>Chennai</option>
                      <option>Pune</option>
                      <option>Delhi NCR</option>
                      <option>Kolkata</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Approx. Area (sq ft)</label>
                    <select name="area" value={form.area} onChange={handleChange}>
                      <option value="">Select range</option>
                      <option>Under 1,000 sq ft</option>
                      <option>1,000 – 3,000 sq ft</option>
                      <option>3,000 – 8,000 sq ft</option>
                      <option>8,000 – 20,000 sq ft</option>
                      <option>20,000 – 50,000 sq ft</option>
                      <option>50,000+ sq ft</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select range</option>
                      <option>Under ₹10 Lakhs</option>
                      <option>₹10 – ₹30 Lakhs</option>
                      <option>₹30 – ₹75 Lakhs</option>
                      <option>₹75 Lakhs – ₹2 Crore</option>
                      <option>₹2 Crore+</option>
                      <option>To be discussed</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Expected Timeline</label>
                  <select name="timeline" value={form.timeline} onChange={handleChange}>
                    <option value="">Select timeline</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>6+ months</option>
                    <option>Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Project Description</label>
                  <textarea name="message" placeholder="Describe your project, specific requirements, inspiration, or any special considerations..." value={form.message} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '16px' }}>
                  Submit Quote Request <i className="fas fa-arrow-right" />
                </button>
                <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-light)', marginTop: '14px' }}>
                  We'll respond within 48 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
