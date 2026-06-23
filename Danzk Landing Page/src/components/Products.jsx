import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Polera Oversize "Noir"',
      category: 'Poleras',
      price: '$45.000',
      colors: [
        { name: 'Negro', hex: '#0a0a0a' },
        { name: 'Naranja Óxido', hex: '#ff5500' },
        { name: 'Plomo Humo', hex: '#555555' },
        { name: 'Oliva Urbano', hex: '#3d4a3e' }
      ]
    },
    {
      id: 2,
      name: 'Pantalón Polar Largo',
      category: 'Pantalones',
      price: '$55.000',
      colors: [
        { name: 'Negro', hex: '#0a0a0a' },
        { name: 'Plomo Humo', hex: '#555555' }
      ]
    },
    {
      id: 3,
      name: 'Polera Heavyweight "Óxido"',
      category: 'Poleras',
      price: '$48.000',
      colors: [
        { name: 'Naranja Óxido', hex: '#ff5500' },
        { name: 'Negro', hex: '#0a0a0a' }
      ]
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [activeBrand, setActiveBrand] = useState('chenry Urban');

  const openModal = (product) => {
    setSelectedProduct(product);
    setActiveColor(product.colors[0]); // Seleccionar el primer color por defecto
    setActiveBrand('chenry Urban'); // Marca por defecto
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setActiveColor(null);
  };

  return (
    <section id="catalogo" className="products container">
      <div className="products-header">
        <h2 className="section-title">Colección <span className="text-orange">Exclusiva</span></h2>
        <p className="section-subtitle">Diseños únicos. Unidades limitadas.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => openModal(product)}>
            <div className="product-image-placeholder">
              <div className="image-mock">IMG</div>
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <span className="product-price">{product.price}</span>
            </div>
            <div className="product-overlay">
              <button className="btn-outline">Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Vista Previa de Prenda */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            <div className="modal-body">
              {/* Sección izquierda: Vista previa de prenda */}
              <div className="modal-preview" style={{ backgroundColor: activeColor.hex }}>
                <div className="garment-silhouette">
                  {/* SVG de Silueta de Polera/Prenda */}
                  <svg viewBox="0 0 100 100" className="hoodie-svg">
                    <path 
                      d="M30 30 L40 10 L60 10 L70 30 L85 45 L75 55 L70 45 L70 90 L30 90 L30 45 L25 55 L15 45 Z" 
                      fill="rgba(255, 255, 255, 0.15)" 
                      stroke="rgba(255, 255, 255, 0.4)" 
                      strokeWidth="1.5"
                    />
                    <path d="M40 10 Q50 25 60 10" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
                    <text x="50" y="60" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="var(--font-body)" letterSpacing="0.5">
                      VISTA PREVIA
                    </text>
                  </svg>
                </div>
                <div className="preview-color-tag">
                  Color: {activeColor.name}
                </div>
              </div>

              {/* Sección derecha: Controles */}
              <div className="modal-details">
                <span className="product-category">{selectedProduct.category}</span>
                <h3 className="modal-product-title">{selectedProduct.name}</h3>
                <span className="modal-product-price">{selectedProduct.price}</span>
                
                {/* 1. Selector de Colores */}
                <div className="detail-section">
                  <h4 className="detail-section-title">Color de Prenda</h4>
                  <div className="color-swatches">
                    {selectedProduct.colors.map((color) => (
                      <button
                        key={color.name}
                        className={`color-swatch ${activeColor.name === color.name ? 'active' : ''}`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                        onClick={() => setActiveColor(color)}
                      />
                    ))}
                  </div>
                </div>

                {/* 2. Selector de Marca Preferida */}
                <div className="detail-section">
                  <h4 className="detail-section-title">Marca de Preferencia</h4>
                  <div className="brand-selectors">
                    <button 
                      className={`brand-btn ${activeBrand === 'chenry Urban' ? 'active' : ''}`}
                      onClick={() => setActiveBrand('chenry Urban')}
                    >
                      chenry Urban
                    </button>
                    <button 
                      className={`brand-btn ${activeBrand === 'Confecciones Palomino' ? 'active' : ''}`}
                      onClick={() => setActiveBrand('Confecciones Palomino')}
                    >
                      Confecciones Palomino
                    </button>
                  </div>
                </div>

                {/* Llamado a la Acción para reservar */}
                <a 
                  href="#contacto" 
                  className="btn-primary modal-action-btn"
                  onClick={closeModal}
                >
                  Solicitar Cotización de Prenda
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
