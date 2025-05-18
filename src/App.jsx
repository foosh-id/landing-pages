import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <VideoSection /> */}
      <HowItWorks/>
      <Footer />
    </div>
  );
}

export default App;
