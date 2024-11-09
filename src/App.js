import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FoodCategories from './components/FoodCategories';
import CTASection from './components/CTASection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="app">
      <div className="gradient1"></div>
      <Header />
      <main>
        <SearchBar />
        <FoodCategories />
        <CTASection />
        <HowItWorks />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}

export default App;
