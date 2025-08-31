import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import logo from '../../assets/images/comLogo01.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, toggleLanguage, isRTL } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      localStorage.setItem('scrollToSection', sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <div className="logo-container">
        <img src={logo} alt="AL SHARQ ENGINEERING & LOGISTICS CO.LTD" className="logo" />
        {/* <div className="company-name">
          AL SHARQ ENGINEERING & LOGISTICS CO.LTD
          <span className="arabic">شرق للهندسة والخدمات اللوجستية</span>
        </div> */}
      </div>
      <nav>
        <ul className={menuOpen ? 'active' : ''}>
          <li><a onClick={goToHome}>{language === 'en' ? 'Home' : 'الرئيسية'}</a></li>
          <li><a onClick={() => scrollToSection('about')}>{language === 'en' ? 'About' : 'عن الشركة'}</a></li>
          <li><a onClick={() => scrollToSection('services')}>{language === 'en' ? 'Products & Services' : 'المنتجات والخدمات'}</a></li>
          <li><a onClick={() => scrollToSection('contact')}>{language === 'en' ? 'Contact Us' : 'اتصل بنا'}</a></li>
        </ul>
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'en' ? 'AR' : 'EN'}
        </button>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;








// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo from '../../assets/images/image0.jpeg';
// import './Header.css';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Simple function to go to home page
//   const goToHome = () => {
//     if (location.pathname !== '/') {
//       navigate('/');
//     }
//     setMenuOpen(false);
//   };

//   // Function to scroll to sections (only works on home page)
//   const scrollToSection = (sectionId) => {
//     if (location.pathname !== '/') {
//       navigate('/');
//       // Store the section to scroll to after navigation
//       localStorage.setItem('scrollToSection', sectionId);
//     } else {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//     setMenuOpen(false);
//   };

//   return (
//     <header>
//       <div className="logo-container">
//         <img src={logo} alt="AL SHARQ ENGINEERING & LOGISTICS CO.LTD" className="logo" />
//         {/* <div className="company-name">
//           AL SHARQ ENGINEERING & LOGISTICS CO.LTD
//           <span className="arabic">شرق للهندسة والخدمات اللوجستية</span>
//         </div> */}
//       </div>
//       <nav>
//         <ul className={menuOpen ? 'active' : ''}>
//           <li><a onClick={goToHome}>Home</a></li>
//           <li><a onClick={() => scrollToSection('about')}>About</a></li>
//           <li><a onClick={() => scrollToSection('services')}>Products & Services</a></li>
//           <li><a onClick={() => scrollToSection('contact')}>Contact Us</a></li>
//         </ul>
//         <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
