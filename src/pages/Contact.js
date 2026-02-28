import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </div>
        <h1>Get in Touch</h1>
        <p>Have a project in mind or a question? We'd love to hear from you. Reach out and our team will respond within 24 hours.</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-split">
            {/* Form */}
            <div className="contact-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ marginBottom: '12px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--muted)' }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ marginBottom: '24px', fontSize: '22px' }}>Send Us a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input type="text" placeholder="Rajiv Sharma" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" placeholder="rajiv@company.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Your Message *</label>
                    <textarea placeholder="Tell us about your project or question..." required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Info cards */}
            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Hyderabad Office</h4>
                  <p>4th Floor, Krishe Sapphire, Hitech City Main Road, Madhapur, Hyderabad – 500081</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Bengaluru Office</h4>
                  <p>No. 16, 13th A Cross, Prakruthi Layout, Kalyan Nagar, Bengaluru – 560043</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210<br />040-12345678 (Hyderabad)<br />080-98765432 (Bengaluru)</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">✉️</div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@nidhiinteriordecor.com<br />sales@nidhiinteriordecor.com</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">🕐</div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday – Saturday: 9:00 AM – 7:00 PM<br />Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
