import React from 'react';
import './About.css';

const About = () => {
  const team = [
    {
      id: 1,
      name: 'Henry Palomino Cuaresma',
      role: 'Diseñador y Fundador',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac eros sed justo efficitur sodales. Duis scelerisque eros eget justo porta, ut facilisis nisl elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec imperdiet nisl.',
      image: null // Se puede añadir ruta de imagen aquí, ej: '/assets/henry.jpg'
    }
    // Espacio listo para agregar más miembros en el futuro:
    /*
    {
      id: 2,
      name: 'Nombre del Miembro',
      role: 'Cargo en la empresa',
      bio: 'Biografía del miembro del equipo...',
      image: null
    }
    */
  ];

  return (
    <section id="nosotros" className="about section-padding">
      <div className="container">
        
        {/* Declaración Corporativa Grande */}
        <div className="corporate-banner">
          <span className="banner-subtitle">La Fuerza Detrás de la Marca</span>
          <h2 className="banner-title">Confecciones y Diseños Palomino</h2>
          <p className="banner-description">
            Empresa líder en desarrollo textil, orgullosamente respaldando y fabricando cada una de las colecciones exclusivas de <strong>chenry Urban</strong>.
          </p>
        </div>

        {/* Sección Quiénes Somos original optimizada */}
        <div className="about-grid">
          <div className="about-content">
            <h3 className="about-subtitle">Nuestra Trayectoria</h3>
            <p className="about-text">
              Diseño de vanguardia con confección de alta resistencia. Producimos colecciones limitadas para un estilo de vida urbano dinámico, garantizando acabados de primer nivel en cada prenda.
            </p>
            
            <div className="stats-container">
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Años de Trayectoria</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">50k+</span>
                <span className="stat-label">Prendas Creadas</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Calidad de Diseño</span>
              </div>
            </div>
          </div>
          
          <div className="about-media">
            <div className="media-wrapper">
              <div className="media-placeholder">
                <div className="video-icon">🎬</div>
                <p>Proceso de Confección</p>
                <span>Taller Confecciones Palomino</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección del Fundador y Equipo */}
        <div className="team-section">
          <h3 className="team-title text-center">Nuestra <span className="text-orange">Mente Creativa</span></h3>
          <p className="team-subtitle-text text-center">Las personas detrás de la visión urbana.</p>
          
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image-container">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-image" />
                  ) : (
                    <div className="team-image-placeholder">
                      <span className="placeholder-avatar">👤</span>
                    </div>
                  )}
                </div>
                <div className="team-info">
                  <h4 className="member-name">{member.name}</h4>
                  <span className="member-role">{member.role}</span>
                  <p className="member-bio">"{member.bio}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
