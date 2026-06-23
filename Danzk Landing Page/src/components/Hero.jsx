import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        {/* REEMPLAZAR: La imagen de fondo de tu compañía debe configurarse en Hero.css o como un elemento <img> aquí */}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="text-outline">DARK</span><br/>
          <span className="text-solid">URBAN</span>
        </h1>
        <p className="hero-subtitle">Prendas exclusivas con diseño.</p>
        <button className="btn-primary hero-btn">Descubrir Colección</button>
      </div>
    </section>
  );
};

export default Hero;
