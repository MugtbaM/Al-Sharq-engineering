import React from 'react';
import './servicecard.css';

const ServiceCard = ({ title, image, content, link, imagePosition }) => {
  return (
    <div className={`service-card ${imagePosition === 'right' ? 'service-reverse' : ''}`}>
      <div
        className="service-card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="service-image-overlay">
          <h3>{title}</h3>
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

// const ServiceCard = ({ title, image, content, imagePosition }) => {


//   return (
//     <div className={`card ${imagePosition === 'right' ? 'reverse' : ''}`}>
//       <div
//         className="card-image"
//         style={{ backgroundImage: `url(${image})` }}
//       >
//         <div className="image-overlay">
//           <h3>{title}</h3>
//         </div>
//       </div>
//       <div className="card-content">
//         <h2>{title}</h2>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;