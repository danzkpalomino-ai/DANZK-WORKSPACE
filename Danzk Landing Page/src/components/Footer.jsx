import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">DANZK</h2>
          <p className="footer-slogan">Dark Urban Streetwear.</p>
        </div>
        
        <div className="footer-links">
          <a href="#" className="footer-link">Instagram</a>
          <a href="#" className="footer-link">TikTok</a>
          <a href="#" className="footer-link">Contacto</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Danzk. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
