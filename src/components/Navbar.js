import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-brand">
        <div className="nav-brand-name">Nidhi Interior Decor</div>
        <div className="nav-brand-tag">Hyderabad · Pan India</div>
      </Link>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" className={isActive('/')}>Home</Link></li>
        <li><Link to="/corporate" className={isActive('/corporate')}>Corporate</Link></li>
        <li><Link to="/home-interior" className={isActive('/home-interior')}>Home Interiors</Link></li>
        <li><Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link></li>
        <li><Link to="/about" className={isActive('/about')}>About</Link></li>
        <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
        <li><Link to="/quote" className="nav-cta">Get Quote</Link></li>
      </ul>
    </nav>
  );
}
