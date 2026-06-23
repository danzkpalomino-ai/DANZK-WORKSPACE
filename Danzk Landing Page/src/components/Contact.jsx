import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Polera Oversize "Noir"',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular recepción del formulario
    console.log('Cliente captado:', formData);
    setSubmitted(true);
  };

  // Enlace directo de WhatsApp con mensaje personalizado
  const handleWhatsApp = () => {
    const text = `Hola, vengo del Catálogo Web de chenry Urban. Me interesa cotizar o consultar sobre la prenda: ${formData.interest}. Mi nombre es ${formData.name || 'Invitado'}.`;
    const url = `https://wa.me/51999999999?text=${encodeURIComponent(text)}`; // Reemplazar con el número del cliente
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="contact section-padding">
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-info">
            <h2 className="section-title">¿Listo para <span className="text-orange">Destacar</span>?</h2>
            <p className="contact-desc">
              Este sitio funciona como un <strong>catálogo exclusivo</strong>. No necesitas ingresar tarjetas de crédito ni realizar pagos online. 
            </p>
            <p className="contact-desc">
              Rellena el formulario de contacto para reservar una de nuestras unidades limitadas o haz clic en el botón de WhatsApp para hablar directamente con nuestro equipo de atención y coordinar tu pedido de inmediato.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>Taller Principal - Confecciones Palomino</p>
                </div>
              </div>
              <div className="detail-item" onClick={handleWhatsApp} style={{ cursor: 'pointer' }}>
                <span className="detail-icon text-orange">💬</span>
                <div>
                  <h4>Atención Directa</h4>
                  <p>Escríbenos directamente a nuestro WhatsApp</p>
                </div>
              </div>
            </div>
            
            <button className="btn-primary whatsapp-btn" onClick={handleWhatsApp}>
              💬 Contactar por WhatsApp
            </button>
          </div>
          
          <div className="contact-form-container">
            {submitted ? (
              <div className="form-success">
                <h3>¡Mensaje Recibido!</h3>
                <p>Tu solicitud ha sido registrada correctamente. Un asesor de Confecciones Palomino se pondrá en contacto contigo pronto.</p>
                <button className="btn-outline" onClick={() => setSubmitted(false)}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Ej. juan@correo.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Número de WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Ej. +51 987 654 321"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest">Prenda de Interés</label>
                  <select 
                    id="interest" 
                    name="interest" 
                    value={formData.interest} 
                    onChange={handleChange}
                  >
                    <option value="Polera Oversize 'Noir'">Polera Oversize "Noir"</option>
                    <option value="Pantalón Polar Largo">Pantalón Polar Largo</option>
                    <option value="Polera Heavyweight 'Óxido'">Polera Heavyweight "Óxido"</option>
                    <option value="General">Consulta General / Distribución</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Notas Adicionales (Talla / Detalles)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Escribe si necesitas una talla especial o tienes alguna consulta..."
                  />
                </div>
                
                <button type="submit" className="btn-primary form-submit">
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
