import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Contact – Nidhi Interior Decor';
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">Get in Touch</div>
          <h1>Let's Start a<br /><em>Conversation</em></h1>
          <p>Our team is ready to discuss your project, answer your questions, or schedule a site visit.</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="section-label">Contact Us</div>
        <h2 className="section-title">Reach Out to <em>Our Team</em></h2>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>Nidhi Interior Decor</h3>
            <p>Hyderabad's leading corporate interior design firm. Pan India presence.</p>

            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fas fa-map-marker-alt" /></div>
              <div className="contact-detail-text">
                <p>Head Office</p>
                <strong>Plot 42, Road 12, Banjara Hills,<br />Hyderabad, Telangana – 500034</strong>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fas fa-phone" /></div>
              <div className="contact-detail-text">
                <p>Call Us</p>
                <strong><a href="tel:+914023456789" style={{ color: 'white' }}>+91 40 2345 6789</a></strong>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fas fa-mobile-alt" /></div>
              <div className="contact-detail-text">
                <p>WhatsApp</p>
                <strong><a href="https://wa.me/919876543210" style={{ color: 'white' }}>+91 98765 43210</a></strong>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fas fa-envelope" /></div>
              <div className="contact-detail-text">
                <p>Email</p>
                <strong><a href="mailto:hello@nidhiinterior.in" style={{ color: 'white' }}>hello@nidhiinterior.in</a></strong>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fas fa-clock" /></div>
              <div className="contact-detail-text">
                <p>Working Hours</p>
                <strong>Mon–Sat: 9:30 AM – 7:00 PM</strong>
              </div>
            </div>

            <div style={{ marginTop: '36px', paddingTop: '30px', borderTop: '1px solid rgba(200,169,110,0.15)' }}>
              <p style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>
                Other Offices
              </p>
              {['Mumbai', 'Bengaluru', 'Chennai', 'Pune'].map((city) => (
                <div key={city} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <i className="fas fa-circle" style={{ fontSize: '6px', color: 'var(--gold)' }} />
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{city}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-card">
            {sent ? (
              <div className="form-success">
                <div className="form-success-icon"><i className="fas fa-check-circle" /></div>
                <h3>Message Received!</h3>
                <p>Thank you, {form.name}. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '26px', color: 'var(--text-dark)', marginBottom: '30px' }}>
                  Send Us a Message
                </h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input name="name" type="text" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea name="message" placeholder="Tell us about your project or inquiry..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '16px' }}>
                  Send Message <i className="fas fa-arrow-right" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
