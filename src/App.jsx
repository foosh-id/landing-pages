import React from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import HowItWorksSection from "./components/sections/HowItWorks";
import MomentsSection from './components/moments/MomentsSection';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-6">
        <HeroSection />
        <HowItWorksSection />
                <MomentsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
