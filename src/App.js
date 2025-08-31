import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import ServiceCard from './components/Card/ServiceCard';
import Footer from './components/Footer/Footer';
import WhatWeDo from './components/Pages/WhatWeDo';
import OurVision from './components/Pages/OurVision';
import PreviousProjects from './components/Pages/PreviousProjects';
import { productsData } from './data/productsData';
import { cardData } from './data/cardData';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const { language } = useLanguage();

  // Handle section scrolling after navigation from other pages
  useEffect(() => {
    // Check if we need to scroll to a section after page load
    const sectionToScroll = localStorage.getItem('scrollToSection');
    if (sectionToScroll) {
      setTimeout(() => {
        const element = document.getElementById(sectionToScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.removeItem('scrollToSection');
      }, 100);
    }
  }, [location]);
  return (
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <section className="cards-container" id="about">
                <h2 className="section-title">About Our Company</h2>
                <div className="cards-wrapper">
                  {cardData.map((card, index) => (
                    <Card
                    key={index}
                    title={language === 'en' ? card.title : card.titleAr}
                    image={card.image}
                    content={language === 'en' ? card.content : card.contentAr}
                    link={card.link}
                    imagePosition={index % 2 === 0 ? 'left' : 'right'}
                  />
                  ))}
                </div>
              </section>
              <section className="cards-container" id="services">
                <h2 className="section-title">Products & Services</h2>
                <div className="cards-wrapper">
                  {productsData.map((card, index) => (
                    <ServiceCard
                    key={index}
                    title={language === 'en' ? card.title : card.titleAr}
                    image={card.image}
                    content={language === 'en' ? card.content : card.contentAr}
                    imagePosition={index % 2 === 0 ? 'left' : 'right'}
                  />
                  ))}
                </div>
              </section>
            </>
          } />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/previous-projects" element={<PreviousProjects />} />
        </Routes>
        <Footer />
      </div>
  );
}

function AppWrapper() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </LanguageProvider>
  );
}

export default AppWrapper;
