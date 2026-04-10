import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import HobbiesSection from './components/HobbiesSection';
import TraitsSection from './components/TraitsSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <HobbiesSection />
      <TraitsSection />
    </div>
  );
}

export default App;