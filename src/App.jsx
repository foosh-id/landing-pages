import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import HowItWorksSection from "./components/sections/HowItWorks";
import MomentsSection from "./components/moments/MomentsSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <MomentsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
