import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand">Nidhi Interior</span>
            <span className="tagline-text">Decor & Design Studio</span>
            <p>
              We are passionate about crafting workspaces and homes that breathe excellence
              in design, beauty, and ergonomics. Founded in 2009, serving Pan India with
              500+ successful projects.
            </p>
            <div className="footer-socials">
              {['f', 'in', 'ig', '▶'].map((s, i) => (
                <a key={i} href="#" className="social-btn" aria-label={s}>{s}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/corporate">Corporate</Link></li>
              <li><Link to="/home-interior">Residential</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/quote">Get a Quote</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul className="footer-links">
              <li><a href="#">Architectural Design</a></li>
              <li><a href="#">Modular Furniture</a></li>
              <li><a href="#">Civil & Interiors</a></li>
              <li><a href="#">MEP Services</a></li>
              <li><a href="#">Office Fitout</a></li>
              <li><a href="#">Healthcare Design</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact Us</h5>
            <div className="footer-contact-item">
              <span className="contact-icon">📍</span>
              <span>
                4th Floor, Krishe Sapphire, Hitech City Main Road,
                Hyderabad – 500081, Telangana
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 98765 43210 / 040-12345678</span>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@nidhiinteriordecor.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Nidhi Interior Decor. All Rights Reserved.</p>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>
          Designed with care in Hyderabad
        </p>
      </div>
    </footer>
  );
}
