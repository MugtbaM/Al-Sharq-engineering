import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './servicecard.css';

const ServiceCard = ({ title, image, content, link, imagePosition }) => {
  const { language, isRTL } = useLanguage();

  return (
    <div 
      className={`service-card ${imagePosition === 'right' ? 'service-reverse' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div
        className="service-card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="service-image-overlay">
          {/* <h3>{title}</h3> */}
        </div>
      </div>
      <div className="service-card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;















// import React from 'react';
// import './servicecard.css';

// const ServiceCard = ({ title, image, content, link, imagePosition }) => {
//   return (
//     <div className={`service-card ${imagePosition === 'right' ? 'service-reverse' : ''}`}>
//       <div
//         className="service-card-image"
//         style={{ backgroundImage: `url(${image})` }}
//       >
//         <div className="service-image-overlay">
//           {/* <h3>{title}</h3> */}
//         </div>
//       </div>
//       <div className="service-card-content">
//         <h2>{title}</h2>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// };
// export default ServiceCard;