// src/App.jsx
import Header from './components/layout/Header';
import HeroSection from './components/layout/HeroSection';
import HowItWorks from './components/layout/HowItWorks';
import MomentsSection from './components/layout/MomentsSection';
import Footer from './components/layout/Footer';

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
