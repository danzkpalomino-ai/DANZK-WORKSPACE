import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import DeveloperSection from './components/DeveloperSection';
import Footer from './components/Footer';
import ParticlesBg from './components/ParticlesBg';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Fondo de Partículas Dinámico */}
      <ParticlesBg />
      
      {/* Menú de Navegación Fijo */}
      <Navbar />
      
      {/* Contenido Principal */}
      <main style={{ marginTop: '80px' }}>
        <Hero />
        <Products />
        <About />
        <Contact />
        {/* Nueva Sección de Desarrollador */}
        <DeveloperSection />
      </main>
      
      {/* Pie de Página */}
      <Footer />
    </div>
  );
}

export default App;
