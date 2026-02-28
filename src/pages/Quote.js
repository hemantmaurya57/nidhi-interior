import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    type: '', sqft: '', budget: '', timeline: '', city: '', details: ''
  });

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--light)', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <div style={{ fontSize: '72px', marginBottom: '20px' }}>🎉</div>
          <h2 style={{ marginBottom: '12px' }}>Quote Request Received!</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '32px', lineHeight: 1.7 }}>
            Thank you, {form.name}! Our team will review your requirements and reach out within
            <strong> 24–48 hours</strong> with a personalized proposal.
          </p>
          <Link to="/" className="btn btn-dark">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Get a Quote</span>
        </div>
        <h1>Get a Free Quote</h1>
        <p>Tell us about your project and we'll send you a detailed, no-obligation proposal within 48 hours.</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="contact-form">
            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
              {['Your Details', 'Project Info', 'Submit'].map((label, i) => (
                <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{
                    width: '32px', height: '32px',
                    borderRadius: '50%',
                    background: step > i + 1 ? 'var(--accent)' : step === i + 1 ? 'var(--primary)' : 'var(--border)',
                    color: step >= i + 1 ? 'white' : 'var(--muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 6px',
                    fontSize: '13px', fontWeight: 700,
                    transition: 'all 0.3s'
                  }}>
                    {step > i + 1 ? '✓' : i + 1}
                  </div>
                  <div style={{ fontSize: '11px', color: step === i + 1 ? 'var(--primary)' : 'var(--muted)', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <h3 style={{ marginBottom: '24px' }}>Your Contact Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" placeholder="Rajiv Sharma" required value={form.name} onChange={e => update('name', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Company / Organization</label>
                      <input type="text" placeholder="Acme Corp Pvt Ltd" value={form.company} onChange={e => update('company', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" placeholder="rajiv@acme.com" required value={form.email} onChange={e => update('email', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" placeholder="+91 98765 43210" required value={form.phone} onChange={e => update('phone', e.target.value)} />
                    </div>
                  </div>
                  <button type="button" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}
                    onClick={() => {
                      if (form.name && form.email && form.phone) setStep(2);
                    }}>
                    Next: Project Details →
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 style={{ marginBottom: '24px' }}>Project Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Project Type *</label>
                      <select required value={form.type} onChange={e => update('type', e.target.value)}>
                        <option value="">Select type...</option>
                        <option>Corporate Office</option>
                        <option>Co-working Space</option>
                        <option>Retail Showroom</option>
                        <option>Healthcare Facility</option>
                        <option>Residential Home</option>
                        <option>Hospitality</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>City / Location *</label>
                      <input type="text" placeholder="Hyderabad" required value={form.city} onChange={e => update('city', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Area (sq. ft.)</label>
                      <select value={form.sqft} onChange={e => update('sqft', e.target.value)}>
                        <option value="">Select range...</option>
                        <option>Under 2,000 sqft</option>
                        <option>2,000 – 5,000 sqft</option>
                        <option>5,000 – 15,000 sqft</option>
                        <option>15,000 – 50,000 sqft</option>
                        <option>50,000+ sqft</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Approximate Budget</label>
                      <select value={form.budget} onChange={e => update('budget', e.target.value)}>
                        <option value="">Select range...</option>
                        <option>Under ₹10 Lakhs</option>
                        <option>₹10 – ₹50 Lakhs</option>
                        <option>₹50 Lakhs – ₹2 Crore</option>
                        <option>₹2 Crore+</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Expected Timeline</label>
                    <select value={form.timeline} onChange={e => update('timeline', e.target.value)}>
                      <option value="">When do you want to start?</option>
                      <option>Immediately</option>
                      <option>Within 1 month</option>
                      <option>1 – 3 months</option>
                      <option>3 – 6 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Project Description</label>
                    <textarea placeholder="Describe your vision, requirements, or any special needs..." value={form.details} onChange={e => update('details', e.target.value)} style={{ minHeight: '100px' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button type="button" className="btn" style={{ flex: '0 0 auto', padding: '16px 24px', border: '1.5px solid var(--border)', background: 'transparent' }}
                      onClick={() => setStep(1)}>
                      ← Back
                    </button>
                    <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '16px' }}>
                      Submit Quote Request 🚀
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '32px' }}>
            {[
              ['⚡', 'Quick Response', '24–48 hour reply'],
              ['💰', 'Free Consultation', 'No commitment needed'],
              ['🔒', 'Confidential', 'Your details are safe'],
            ].map(([icon, title, sub]) => (
              <div key={title} style={{ textAlign: 'center', padding: '20px', background: 'var(--light)', borderRadius: '10px' }}>
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>{title}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
