import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import About from './components/About';
import CarbonCalculator from './components/CarbonCalculator';
import BestPractices from './components/BestPractices';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Resources from './components/Resources';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ImpactStats />
        <About />
        <CarbonCalculator />
        <BestPractices />
        <CaseStudies />
        <Pricing />
        <Resources />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;