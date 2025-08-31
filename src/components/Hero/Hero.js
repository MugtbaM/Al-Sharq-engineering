import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { arabicContent } from '../../data/arabicContent';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const content = language === 'en' 
    ? {
        title: "Engineering Excellence & Logistic Solutions",
        description: "Providing world-class engineering services and innovative logistics solutions for businesses across the globe",
        button: "Get In Touch"
      }
    : arabicContent.hero;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
      <div className="hero-content">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <button className="btn" onClick={() => scrollToSection('contact')}>
          {content.button}
        </button>
      </div>
    </section>
  );
};

export default Hero;



// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="hero" id="home">
//       <div className="hero-content">
//         <h1>Engineering Excellence & Logistic Solutions</h1>
//         <p>Providing world-class engineering services and innovative logistics solutions for businesses across the globe</p>
//         <button className="btn" onClick={() => scrollToSection('contact')}>Get In Touch</button>
//       </div>
//     </section>
//   );
// };

// export default Hero;