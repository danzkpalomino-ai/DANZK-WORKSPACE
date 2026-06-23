import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo" onClick={() => setIsOpen(false)}>
          chenry <span className="text-orange">Urban</span>
        </a>
        
        {/* Botón Hamburguesa */}
        <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Abrir menú">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Enlaces de Navegación */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#" className="navbar-link" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#catalogo" className="navbar-link" onClick={() => setIsOpen(false)}>Catálogo</a>
          <a href="#nosotros" className="navbar-link" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#contacto" className="navbar-link" onClick={() => setIsOpen(false)}>Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
