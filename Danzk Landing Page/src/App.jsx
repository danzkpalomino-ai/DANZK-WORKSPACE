import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
