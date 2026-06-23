import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">chenry Urban</h2>
          <p className="footer-slogan">Confecciones y Diseños Palomino</p>
        </div>
        
        <div className="footer-links">
          <a href="#" className="footer-link">Instagram</a>
          <a href="#" className="footer-link">TikTok</a>
          <a href="#" className="footer-link">Contacto</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} chenry Urban. Todos los derechos reservados.</p>
        <p className="developer-tag" style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
          Desarrollado por <span style={{ color: 'var(--color-orange)' }}>Danzk ST Solution Tech</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
