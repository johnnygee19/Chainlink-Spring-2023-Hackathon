import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Faucet from './components/Faucet';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Faucet />
      <Footer />
    </div>
  );
}

export default App;