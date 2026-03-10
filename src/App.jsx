import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Offers from './components/Offers';
import WhatsAppButton from './components/WhatsAppButton';
import Curriculum from './components/Curriculum';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Offers />
      <About />
      <Curriculum />
      <WhatsAppButton />
    </Layout>
  );
}

export default App;
