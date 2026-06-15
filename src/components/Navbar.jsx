import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  const navLinks = [
    { label: 'About', to: 'about' },
    { label: 'Experience', to: 'experience' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Certifications', to: 'certifications' },
    { label: 'Contact', to: 'contact' },
  ];
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="/" className="nav-logo">Shrinivas</a>
        <ul className="nav-links">
          {navLinks.map(l => (
            <li key={l.label}>
              <Link to={l.to} smooth={true} duration={600} offset={-68} spy={true}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a href="https://github.com/shridat" target="_blank" rel="noopener noreferrer" style={{color:'var(--text-secondary)',fontSize:'1.2rem',display:'flex',padding:'8px'}} aria-label="GitHub"><FiGithub/></a>
          <a href="https://linkedin.com/in/shrinivas-patil-70536720b" target="_blank" rel="noopener noreferrer" style={{color:'var(--text-secondary)',fontSize:'1.2rem',display:'flex',padding:'8px'}} aria-label="LinkedIn"><FiLinkedin/></a>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
            <div className="theme-toggle-thumb">{darkMode ? '🌙' : '☀️'}</div>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
