import React from 'react';
import './DeveloperSection.css';

const DeveloperSection = () => {
  return (
    <section className="developer-section">
      <div className="dev-bg-overlay"></div>
      
      <div className="container dev-container">
        <div className="dev-text-content">
          <span className="dev-tagline">Soluciones Digitales a Medida</span>
          <h2 className="dev-title">
            Desarrollado por <br />
            <span className="text-orange">Danzk Solution Tech</span>
          </h2>
          <p className="dev-description">
            Diseñamos y programamos plataformas web interactivas, catálogos digitales y sistemas optimizados para impulsar la captación de clientes de tu negocio.
          </p>
          <a href="https://danzk-solutions.com" target="_blank" rel="noopener noreferrer" className="btn-outline dev-btn">
            Ver Portafolio
          </a>
        </div>

        <div className="dev-logo-area">
          <div className="dev-logo-large-placeholder">
            {/* Espacio para el logotipo real de Danzk Solution Tech */}
            <div className="logo-glow"></div>
            <div className="logo-box">
              <span className="logo-symbol">⚡</span>
              <span className="logo-text">DANZK</span>
            </div>
            <span className="logo-caption">Logotipo de la Agencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
