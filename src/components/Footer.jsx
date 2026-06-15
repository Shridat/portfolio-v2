import React from 'react';
const Footer=()=>(
  <footer className="footer">
    <div className="footer-inner">
      <p className="footer-copy">&copy; {new Date().getFullYear()} <span>Shrinivas Patil</span>. Built with React & ☕</p>
      <div className="footer-links">
        <a href="https://github.com/shridat" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/shrinivas-patil-70536720b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
);
export default Footer;
