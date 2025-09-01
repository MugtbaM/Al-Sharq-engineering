import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Pages.css';

const WhatWeDo = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>{language === 'en' ? 'What We Do' : 'ما نقوم به'}</h1>
        <p>
          {language === 'en' 
            ? 'Comprehensive engineering and logistics solutions tailored to your needs'
            : 'حلول هندسية ولوجستية شاملة مصممة خصيصًا لاحتياجاتك'
          }
        </p>
      </div>
      
      <div className="page-content">
        <div className="page-card">
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Engineering Solutions' : 'الحلول الهندسية'}</h2>
            <p>
              {language === 'en' 
                ? 'We provide innovative engineering solutions across various industries. Our team of experienced engineers works closely with clients to design, implement, and maintain systems that meet their specific requirements. From conceptualization to execution, we ensure quality and efficiency in every project.'
                : 'نقدم حلولاً هندسية مبتكرة عبر مختلف الصناعات. يعمل فريقنا من المهندسين ذوي الخبرة بشكل وثيق مع العملاء لتصميم وتنفيذ وصيانة الأنظمة التي تلبي متطلباتهم الخاصة. من التصور إلى التنفيذ، نضمن الجودة والكفاءة في كل مشروع.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'Our engineering services include structural design, mechanical systems, electrical engineering, and project management. We utilize the latest technologies and methodologies to deliver results that exceed expectations.'
                : 'تشمل خدماتنا الهندسية التصميم الهيكلي، والأنظمة الميكانيكية، والهندسة الكهربائية، وإدارة المشاريع. نستخدم أحدث التقنيات والمنهجيات لتقديم نتائج تتجاوز التوقعات.'
              }
            </p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1634638025184-9ab3d47c8b74?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={language === 'en' ? 'Engineering Solutions' : 'الحلول الهندسية'} />
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={language === 'en' ? 'Logistics Services' : 'الخدمات اللوجستية'} />
          </div>
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Logistics Services' : 'الخدمات اللوجستية'}</h2>
            <p>
              {language === 'en' 
                ? 'Our logistics division offers end-to-end supply chain solutions that optimize operations and reduce costs. We handle everything from transportation and warehousing to inventory management and distribution, ensuring your products reach their destination efficiently.'
                : 'يقدم قسم الخدمات اللوجستية لدينا حلول سلسلة التوريد الشاملة التي تعمل على تحسين العمليات وتقليل التكاليف. نحن نتعامل مع كل شيء من النقل والتخزين إلى إدارة المخزون والتوزيع، مما يضمن وصول منتجاتك إلى وجهتها بكفاءة.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'With a global network of partners and advanced tracking systems, we provide real-time visibility into your supply chain, enabling you to make informed decisions and respond quickly to changing market conditions.'
                : 'مع شبكة عالمية من الشركاء وأنظمة التتبع المتقدمة، نقدم رؤية في الوقت الفعلي لسلسلة التوريد الخاصة بك، مما يمكنك من اتخاذ قرارات مستنيرة والاستجابة بسرعة لظروف السوق المتغيرة.'
              }
            </p>
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Consultation & Planning' : 'الاستشارة والتخطيط'}</h2>
            <p>
              {language === 'en' 
                ? 'Beyond implementation, we offer strategic consultation services to help businesses optimize their operations. Our experts analyze your current processes, identify areas for improvement, and develop customized strategies to enhance efficiency and productivity.'
                : 'إلى جانب التنفيذ، نقدم خدمات استشارية استراتيجية لمساعدة الشركات على تحسين عملياتها. يحلل خبراؤنا عملياتك الحالية، ويحددون مجالات التحسين، ويطورون استراتيجيات مخصصة لتعزيز الكفاءة والإنتاجية.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'We work with you to create comprehensive plans that align with your business goals, ensuring long-term success and sustainability in an ever-evolving market landscape.'
                : 'نعمل معك لوضع خطط شاملة تتماشى مع أهداف عملك، مما يضمن النجاح طويل الأجل والاستدامة في مشهد السوق المتطور باستمرار.'
              }
            </p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt={language === 'en' ? 'Consultation Services' : 'خدمات الاستشارة'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;








// import React, { useEffect } from 'react';
// import './Pages.css';

// const WhatWeDo = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);
      
//   return (
//     <div className="page-container">
//       <div className="page-hero">
//         <h1>What We Do</h1>
//         <p>Comprehensive engineering and logistics solutions tailored to your needs</p>
//       </div>
      
//       <div className="page-content">
//         <div className="page-card">
//           <div className="page-card-text">
//             <h2>Engineering Solutions</h2>
//             <p>We provide innovative engineering solutions across various industries. Our team of experienced engineers works closely with clients to design, implement, and maintain systems that meet their specific requirements. From conceptualization to execution, we ensure quality and efficiency in every project.</p>
//             <p>Our engineering services include structural design, mechanical systems, electrical engineering, and project management. We utilize the latest technologies and methodologies to deliver results that exceed expectations.</p>
//           </div>
//           <div className="page-card-image">
//             <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Engineering Solutions" />
//           </div>
//         </div>
        
//         <div className="page-card">
//           <div className="page-card-image">
//             <img src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Logistics Services" />
//           </div>
//           <div className="page-card-text">
//             <h2>Logistics Services</h2>
//             <p>Our logistics division offers end-to-end supply chain solutions that optimize operations and reduce costs. We handle everything from transportation and warehousing to inventory management and distribution, ensuring your products reach their destination efficiently.</p>
//             <p>With a global network of partners and advanced tracking systems, we provide real-time visibility into your supply chain, enabling you to make informed decisions and respond quickly to changing market conditions.</p>
//           </div>
//         </div>
        
//         <div className="page-card">
//           <div className="page-card-text">
//             <h2>Consultation & Planning</h2>
//             <p>Beyond implementation, we offer strategic consultation services to help businesses optimize their operations. Our experts analyze your current processes, identify areas for improvement, and develop customized strategies to enhance efficiency and productivity.</p>
//             <p>We work with you to create comprehensive plans that align with your business goals, ensuring long-term success and sustainability in an ever-evolving market landscape.</p>
//           </div>
//           <div className="page-card-image">
//             <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Consultation Services" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;