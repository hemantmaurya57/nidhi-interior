import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <span className="brand">Nidhi Interior</span>
          <span className="tagline">Decor & Design Studio</span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/corporate">Corporate</NavLink></li>
          <li><NavLink to="/home-interior">Residential</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <NavLink to="/quote" className="nav-cta">Get Quote</NavLink>
          </li>
        </ul>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span style={mobileOpen ? { transform: 'rotate(45deg) translateY(7px)' } : {}} />
          <span style={mobileOpen ? { opacity: 0 } : {}} />
          <span style={mobileOpen ? { transform: 'rotate(-45deg) translateY(-7px)' } : {}} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'var(--dark)',
          padding: '20px 24px 32px',
          borderTop: '1px solid rgba(255,255,255,0.08)'
        }}>
          {['/', '/corporate', '/home-interior', '/portfolio', '/about', '/contact', '/quote'].map((path, i) => {
            const labels = ['Home', 'Corporate', 'Residential', 'Portfolio', 'About', 'Contact', 'Get Quote'];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '15px',
                  fontWeight: '500',
                  borderBottom: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}
