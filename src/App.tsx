import React, { useState } from 'react';
import IntroVideo from './components/IntroVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SliderSection from './components/SliderSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import PainPointsSection from './components/PainPointsSection';
import HostelSection from './components/HostelSection';
import Footer from './components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  const [introDone, setIntroDone] = useState(false);

  if (!introDone) {
    return <IntroVideo onEnd={() => setIntroDone(true)} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <SliderSection />
      <AboutSection />
      <FeaturesSection />
      <PainPointsSection />
      <HostelSection />
      <Footer />
    </>
  );
};

export default App;
