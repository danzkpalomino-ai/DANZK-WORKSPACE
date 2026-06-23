import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Polera Oversize "Noir"',
      category: 'Poleras',
      price: '$45.000',
    },
    {
      id: 2,
      name: 'Pantalón Polar Largo',
      category: 'Pantalones',
      price: '$55.000',
    },
    {
      id: 3,
      name: 'Polera Heavyweight "Óxido"',
      category: 'Poleras',
      price: '$48.000',
    }
  ];

  return (
    <section className="products container">
      <div className="products-header">
        <h2 className="section-title">Colección <span className="text-orange">Exclusiva</span></h2>
        <p className="section-subtitle">Diseños únicos. Unidades limitadas.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-placeholder">
              {/* INSTRUCCIÓN PARA EL USUARIO:
                  Reemplaza este div con un <img> usando tus fotos de producto reales.
                  Ejemplo: <img src="/assets/producto1.jpg" alt={product.name} />
              */}
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
    </section>
  );
};

export default Products;
