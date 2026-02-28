import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Nidhi Interior Decor</div>
          <div className="footer-brand-tag">Hyderabad · Pan India</div>
          <p className="footer-about">
            Premium corporate and residential interior design firm based in Hyderabad.
            We craft exceptional workspaces and living spaces across India with a
            commitment to precision, elegance, and functionality.
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-x-twitter" /></a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><Link to="/corporate">Office Interiors</Link></li>
            <li><Link to="/corporate">Co-working Spaces</Link></li>
            <li><Link to="/corporate">Retail & Showrooms</Link></li>
            <li><Link to="/corporate">Healthcare Spaces</Link></li>
            <li><Link to="/corporate">Hospitality</Link></li>
            <li><Link to="/home-interior">Home Interiors</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/quote">Get a Quote</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact Us</h5>
          <div className="footer-contact-item">
            <i className="fas fa-map-marker-alt" />
            <p>Plot No. 42, Road No. 12, Banjara Hills,<br />Hyderabad, Telangana – 500034</p>
          </div>
          <div className="footer-contact-item">
            <i className="fas fa-phone" />
            <p><a href="tel:+914023456789">+91 40 2345 6789</a><br /><a href="tel:+919876543210">+91 98765 43210</a></p>
          </div>
          <div className="footer-contact-item">
            <i className="fas fa-envelope" />
            <p><a href="mailto:hello@nidhiinterior.in">hello@nidhiinterior.in</a></p>
          </div>
          <div className="footer-contact-item">
            <i className="fas fa-clock" />
            <p>Mon – Sat: 9:30 AM – 7:00 PM</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 Nidhi Interior Decor. All Rights Reserved.</span>
        <span>Designed with precision in Hyderabad</span>
      </div>
    </footer>
  );
}
