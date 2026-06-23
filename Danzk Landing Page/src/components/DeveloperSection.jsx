import React from 'react';
import './DeveloperSection.css';

const DeveloperSection = () => {
  return (
    <section className="developer-section">
      {/* Imagen de fondo: background2.png */}
      <div className="dev-bg-image"></div>
      {/* Oscurecido superior e inferior */}
      <div className="dev-top-fade"></div>
      <div className="dev-bottom-fade"></div>
      {/* Capa oscura central semi-transparente */}
      <div className="dev-center-overlay"></div>

      <div className="container dev-container">

        {/* Línea decorativa */}
        <div className="dev-line"></div>

        {/* Etiqueta pequeña superior */}
        <span className="dev-pre-label">Sitio web creado por</span>

        {/* Título principal */}
        <h2 className="dev-title">
          Danzk <span className="text-orange">Solutions Tech</span>
        </h2>

        {/* Descripción pequeña en 14px */}
        <p className="dev-subtitle">
          Empresa dedicada a la consultoría y desarrollo de soluciones tecnológicas modernas.
        </p>

        {/* Línea decorativa inferior */}
        <div className="dev-line"></div>

      </div>
    </section>
  );
};

export default DeveloperSection;
