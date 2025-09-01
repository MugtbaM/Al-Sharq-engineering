import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Pages.css';

const OurVision = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>{language === 'en' ? 'Our Vision' : 'رؤيتنا'}</h1>
        <p>
          {language === 'en' 
            ? 'Shaping the future of engineering and logistics through innovation and excellence'
            : 'تشكيل مستقبل الهندسة والخدمات اللوجستية من خلال الابتكار والتميز'
          }
        </p>
      </div>
      
      <div className="page-content">
        <div className="page-card">
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Innovation Leadership' : 'الريادة في الابتكار'}</h2>
            <p>
              {language === 'en' 
                ? 'We envision a future where technology and innovation drive sustainable progress in engineering and logistics. Our commitment to research and development ensures that we stay at the forefront of industry advancements, continuously improving our services and solutions.'
                : 'نتطلع إلى مستقبل تقود فيه التكنولوجيا والابتكار التقدم المستدام في الهندسة والخدمات اللوجستية. يضمن التزامنا بالبحث والتطوير أن نبقى في طليعة التطورات الصناعية، ونحسن باستمرار خدماتنا وحلولنا.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'By embracing emerging technologies such as AI, IoT, and automation, we aim to transform traditional practices and set new standards for efficiency, reliability, and environmental responsibility.'
                : 'من خلال تبني التقنيات الناشئة مثل الذكاء الاصطناعي وإنترنت الأشياء والأتمتة، نهدف إلى تحويل الممارسات التقليدية ووضع معايير جديدة للكفاءة والموثوقية والمسؤولية البيئية.'
              }
            </p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt={language === 'en' ? 'Innovation Leadership' : 'الريادة في الابتكار'} />
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={language === 'en' ? 'Global Expansion' : 'التوسع العالمي'} />
          </div>
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Global Expansion' : 'التوسع العالمي'}</h2>
            <p>
              {language === 'en' 
                ? 'Our vision includes expanding our footprint to serve clients across the globe while maintaining the personalized service and attention to detail that defines our brand. We aim to establish partnerships in key markets, creating a network of excellence that spans continents.'
                : 'تشمل رؤيتنا توسيع نطاق وجودنا لخدمة العملاء في جميع أنحاء العالم مع الحفاظ على الخدمة الشخصية والاهتمام بالتفاصيل التي تميز علامتنا التجارية. نهدف إلى إقامة شراكات في الأسواق الرئيسية، وإنشاء شبكة من التميز تمتد عبر القارات.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'Through strategic growth and cultural understanding, we will bring our expertise to new regions, adapting our solutions to local needs while maintaining our global standards of quality and reliability.'
                : 'من خلال النمو الاستراتيجي والفهم الثقافي، سنقدم خبراتنا إلى مناطق جديدة، ونتكيف مع احتياجاتها المحلية مع الحفاظ على معاييرنا العالمية للجودة والموثوقية.'
              }
            </p>
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Sustainability Commitment' : 'الالتزام بالاستدامة'}</h2>
            <p>
              {language === 'en' 
                ? 'We are committed to developing solutions that not only meet current needs but also preserve resources for future generations. Our sustainability initiatives focus on reducing environmental impact, promoting renewable energy, and implementing eco-friendly practices across all operations.'
                : 'نحن ملتزمون بتطوير حلول لا تلبي الاحتياجات الحالية فحسب، بل تحافظ أيضًا على الموارد للأجيال القادمة. تركز مبادراتنا للاستدامة على تقليل الأثر البيئي، وتعزيز الطاقة المتجددة، وتنفيذ الممارسات الصديقة للبيئة عبر جميع العمليات.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'From green building designs to optimized logistics routes that minimize carbon emissions, we integrate environmental considerations into every aspect of our business, contributing to a more sustainable world.'
                : 'من تصميمات المباني الخضراء إلى مسارات الخدمات اللوجستية المثلى التي تقلل من انبعاثات الكربون، ندمج الاعتبارات البيئية في كل جانب من جوانب أعمالنا، مما يساهم في عالم أكثر استدامة.'
              }
            </p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt={language === 'en' ? 'Sustainability Commitment' : 'الالتزام بالاستدامة'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;











// import React, { useEffect } from 'react';
// import './Pages.css';

// const OurVision = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);
//   return (
//     <div className="page-container">
//       <div className="page-hero">
//         <h1>Our Vision</h1>
//         <p>Shaping the future of engineering and logistics through innovation and excellence</p>
//       </div>
      
//       <div className="page-content">
//         <div className="page-card">
//           <div className="page-card-text">
//             <h2>Innovation Leadership</h2>
//             <p>We envision a future where technology and innovation drive sustainable progress in engineering and logistics. Our commitment to research and development ensures that we stay at the forefront of industry advancements, continuously improving our services and solutions.</p>
//             <p>By embracing emerging technologies such as AI, IoT, and automation, we aim to transform traditional practices and set new standards for efficiency, reliability, and environmental responsibility.</p>
//           </div>
//           <div className="page-card-image">
//             <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Innovation Leadership" />
//           </div>
//         </div>
        
//         <div className="page-card">
//           <div className="page-card-image">
//             <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Global Expansion" />
//           </div>
//           <div className="page-card-text">
//             <h2>Global Expansion</h2>
//             <p>Our vision includes expanding our footprint to serve clients across the globe while maintaining the personalized service and attention to detail that defines our brand. We aim to establish partnerships in key markets, creating a network of excellence that spans continents.</p>
//             <p>Through strategic growth and cultural understanding, we will bring our expertise to new regions, adapting our solutions to local needs while maintaining our global standards of quality and reliability.</p>
//           </div>
//         </div>
        
//         <div className="page-card">
//           <div className="page-card-text">
//             <h2>Sustainability Commitment</h2>
//             <p>We are committed to developing solutions that not only meet current needs but also preserve resources for future generations. Our sustainability initiatives focus on reducing environmental impact, promoting renewable energy, and implementing eco-friendly practices across all operations.</p>
//             <p>From green building designs to optimized logistics routes that minimize carbon emissions, we integrate environmental considerations into every aspect of our business, contributing to a more sustainable world.</p>
//           </div>
//           <div className="page-card-image">
//             <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Sustainability Commitment" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurVision;