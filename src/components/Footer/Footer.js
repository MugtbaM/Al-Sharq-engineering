import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
      localStorage.setItem('scrollToSection', sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{language === 'en' ? 'Contact Us' : 'اتصل بنا'}</h3>
            <p><i className="fas fa-map-marker-alt"></i> {language === 'en' ? 'Sudan - Port Sudan - Al-Aghariq District' : 'السودان - بورتسودان - حي الأغاريق'}</p>
            <p><i className="fas fa-phone"></i> +249100000770</p>
            <p><i className="fas fa-envelope"></i> info@alsharqengineering.com</p>
          </div>
          <div className="footer-section">
            <h3>{language === 'en' ? 'Quick Links' : 'روابط سريعة'}</h3>
            <p><a onClick={() => scrollToSection('home')}>{language === 'en' ? 'Home' : 'الرئيسية'}</a></p>
            <p><a onClick={() => scrollToSection('about')}>{language === 'en' ? 'About Us' : 'عن الشركة'}</a></p>
            <p><a onClick={() => scrollToSection('services')}>{language === 'en' ? 'Services' : 'الخدمات'}</a></p>
            <p><a onClick={() => scrollToSection('contact')}>{language === 'en' ? 'Contact' : 'اتصل بنا'}</a></p>
          </div>
          <div className="footer-section">
            <h3>{language === 'en' ? 'Working Hours' : 'ساعات العمل'}</h3>
            <p>{language === 'en' ? 'Sunday - Thursday: 8:00 AM - 6:00 PM' : 'الأحد - الخميس: ٨:٠٠ ص - ٦:٠٠ م'}</p>
            <p>{language === 'en' ? 'Friday: Closed' : 'الجمعة: مغلق'}</p>
            <p>{language === 'en' ? 'Saturday: 9:00 AM - 1:00 PM' : 'السبت: ٩:٠٠ ص - ١:٠٠ م'}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 AL SHARQ ENGINEERING & LOGISTICS CO.LTD. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;











// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <footer id="contact">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-section">
//             <h3>Contact Us</h3>
//             <p><i className="fas fa-map-marker-alt"></i> Sudan, Port Sudan, Al-Aghariq District</p>
//             <p><i className="fas fa-phone"></i> +249100000770</p>
//             <p><i className="fas fa-envelope"></i> Ohaj.miningsrv@gmail.com</p>
//           </div>
//           <div className="footer-section">
//             <h3>Quick Links</h3>
//             <p><a onClick={() => scrollToSection('home')}>Home</a></p>
//             <p><a onClick={() => scrollToSection('about')}>About Us</a></p>
//             <p><a onClick={() => scrollToSection('services')}>Services</a></p>
//             <p><a onClick={() => scrollToSection('contact')}>Contact</a></p>
//           </div>
//           <div className="footer-section">
//             <h3>Working Hours</h3>
//             <p>Saturday - Thursday: 8:00 AM - 6:00 PM</p>
//             <p>Friday: Closed</p>
//             {/* <p>Saturday: 9:00 AM - 1:00 PM</p> */}
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; 2023 AL SHARQ ENGINEERING & LOGISTICS CO.LTD. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;