import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './Card.css';

const Card = ({ title, image, content, link, imagePosition }) => {
  const { language } = useLanguage();

  return (
    <div className={`card ${imagePosition === 'right' ? 'reverse' : ''}`}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="image-overlay">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="card-content">
        {/* <h2>{title}</h2> */}
        <p>{content}</p>
        {link && (
          <Link to={link} className="more-link">
          {language === 'en' ? 'Learn More' : 'المزيد'}{" "}
          <i className="fas fa-arrow-right"></i>
        </Link>
        )}
      </div>
    </div>
  );
};

export default Card;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import './Card.css';

// const Card = ({ title, image, content, link, imagePosition }) => {
//   const { language } = useLanguage();

//   return (
//     <div className={`card ${imagePosition === 'right' ? 'reverse' : ''}`}>
//       <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
//         <div className="image-overlay">
//           <h3>{title}</h3>
//         </div>
//       </div>
//       <div className="card-content">
//         <h2>{title}</h2>
//         <p>{content}</p>
//         <Link to={link} className="more-link">
//           {language === 'en' ? 'Learn More' : 'المزيد'} <i className="fas fa-arrow-right"></i>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;












// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Card.css';

// const Card = ({ title, image, content, link, imagePosition }) => {
//   return (
//     <div className={`card ${imagePosition === 'right' ? 'reverse' : ''}`}>
//       <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
//         <div className="image-overlay">
//           <h3>{title}</h3>
//         </div>
//       </div>
//       <div className="card-content">
//         <h2>{title}</h2>
//         <p>{content}</p>
//         <Link to={link} className="more-link">
//           Learn More <i className="fas fa-arrow-right"></i>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Card.css';

// const Card = ({ title, image, content, link, imagePosition }) => {
//   return (
//     <div className={`card ${imagePosition === 'right' ? 'reverse' : ''}`}>
//       <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
//         <div className="image-overlay">
//           <h3>{title}</h3>
//         </div>
//       </div>
//       <div className="card-content">
//         <h2>{title}</h2>
//         <p>{content}</p>
//         <Link to={link} className="more-link">
//         Learn More <i className="fas fa-arrow-right"></i>
//         </Link>
//         {/* <a href={link} className="more-link">
//           Learn More <i className="fas fa-arrow-right"></i>
//         </a> */}
//       </div>
//     </div>
//   );
// };

// export default Card;