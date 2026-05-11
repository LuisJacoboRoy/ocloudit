import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Offers from './components/Offers';
import WhatsAppButton from './components/WhatsAppButton';
import Curriculum from './components/Curriculum';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Escuchar cambios en el hash de la URL
    const handleHashChange = () => {
      if (window.location.hash === '#privacy') {
        setCurrentPage('privacy');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Verificar el hash inicial
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Layout>
      {currentPage === 'privacy' ? (
        <PrivacyPolicy />
      ) : (
        <>
          <Hero />
          <Services />
          <Offers />
          <About />
          <Curriculum />
          <WhatsAppButton />
        </>
      )}
    </Layout>
  );
}

export default App;
