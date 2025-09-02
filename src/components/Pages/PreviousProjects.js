import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import image from '../../assets/images/three.png';
import './Pages.css';

const PreviousProjects = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>{language === 'en' ? 'Previous Projects' : 'المشاريع السابقة'}</h1>
        <p>
          {language === 'en' 
            ? 'Showcasing our successful implementations across various industries'
            : 'عرض تنفيذاتنا الناجحة عبر مختلف الصناعات'
          }
        </p>
      </div>
      
      <div className="page-content">
        <div className="page-card">
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Industrial Complex Development' : 'تطوير المجمع الصناعي'}</h2>
            <p>
              {language === 'en' 
                ? 'We designed and managed the construction of a state-of-the-art industrial complex spanning 50,000 square meters. This project involved coordinating multiple engineering disciplines to create a facility that optimizes workflow, energy efficiency, and safety standards.'
                : 'صممنا وأدرنا بناء مجمع صناعي متطور بمساحة 50,000 متر مربع. تضمن هذا المشروع تنسيق تخصصات هندسية متعددة لإنشاء منشأة تعمل على تحسين سير العمل وكفاءة الطاقة ومعايير السلامة.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'The complex now houses manufacturing, warehousing, and administrative functions for a leading consumer goods company, serving as a model for integrated industrial design in the region.'
                : 'يضم المجمع الآن وظائف التصنيع والتخزين والإدارة لشركة رائدة في مجال السلع الاستهلاكية، مما يجعله نموذجًا للتصميم الصناعي المتكامل في المنطقة.'
              }
            </p>
          </div>
          <div className="page-card-image">
            <img src={image} alt={language === 'en' ? 'Industrial Complex' : 'المجمع الصناعي'} />
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt={language === 'en' ? 'Supply Chain Optimization' : 'تحسين سلسلة التوريد'} />
          </div>
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Supply Chain Optimization' : 'تحسين سلسلة التوريد'}</h2>
            <p>
              {language === 'en' 
                ? 'For a major retail chain, we redesigned their entire supply chain infrastructure, reducing delivery times by 35% and cutting operational costs by 22%. Our solution integrated warehouse management, transportation routing, and inventory tracking into a seamless system.'
                : 'لإحدى سلاسل التجزئة الكبرى، أعيدنا تصميم البنية التحتية الكاملة لسلسلة التوريد الخاصة بها، مما قلل أوقات التسليم بنسبة 35٪ وخفض التكاليف التشغيلية بنسبة 22٪. دمج حلنا إدارة المستودعات وتوجيه النقل وتتبع المخزون في نظام سلس.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'The implementation included custom software development, process reengineering, and staff training, resulting in improved customer satisfaction and significant cost savings for the client.'
                : 'شمل التنفيذ تطوير برامج مخصصة وإعادة هندسة العمليات وتدريب الموظفين، مما أدى إلى تحسين رضا العملاء وتوفير كبير في التكاليف للعميل.'
              }
            </p>
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Renewable Energy Installation' : 'تركيب الطاقة المتجددة'}</h2>
            <p>
              {language === 'en' 
                ? 'We engineered and installed a comprehensive solar energy system for a remote commercial facility, reducing their reliance on diesel generators by 80%. The project involved designing the structural supports, electrical systems, and monitoring infrastructure for optimal performance.'
                : 'صممنا وتركيبنا نظامًا شاملاً للطاقة الشمسية لمنشأة تجارية نائية، مما قلل اعتمادها على مولدات الديزل بنسبة 80٪. تضمن المشروع تصميم الدعامات الهيكلية والأنظمة الكهربائية والبنية التحتية للرصد لأداء مثالي.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'This sustainable solution not only significantly reduced operating costs but also minimized the environmental impact of the facility, aligning with the client\'s commitment to corporate responsibility.'
                : 'لم يقلل هذا الحل المستدام من التكاليف التشغيلية بشكل كبير فحسب، بل قلل أيضًا من الأثر البيئي للمنشأة، بما يتماشى مع التزام العميل بالمسؤولية المؤسسية.'
              }
            </p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt={language === 'en' ? 'Renewable Energy Project' : 'مشروع الطاقة المتجددة'} />
          </div>
        </div>

        <div className="page-card">
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt={language === 'en' ? 'Infrastructure Development' : 'تطوير البنية التحتية'} />
          </div>
          <div className="page-card-text">
            <h2>{language === 'en' ? 'Smart City Infrastructure' : 'بنية المدينة الذكية'}</h2>
            <p>
              {language === 'en' 
                ? 'We developed the smart infrastructure for a new urban development, integrating IoT sensors, automated traffic management, and energy-efficient systems throughout the city. This project required close collaboration with urban planners and technology partners.'
                : 'طورنا البنية التحتية الذكية لتطوير حضري جديد، ودمجنا أجهزة استشعار إنترنت الأشياء، وإدارة حركة المرور الآلية، والأنظمة الموفرة للطاقة في جميع أنحاء المدينة. تطلب هذا المشروع تعاونًا وثيقًا مع مخططي المدن والشركاء التكنولوجيين.'
              }
            </p>
            <p>
              {language === 'en' 
                ? 'The result is a modern, sustainable urban environment that serves as a benchmark for future smart city developments in the region, featuring reduced energy consumption and improved quality of life for residents.'
                : 'النتيجة هي بيئة حضرية حديثة ومستدامة تعمل كمعيار لتطويرات المدن الذكية المستقبلية في المنطقة، وتتميز بانخفاض استهلاك الطاقة وتحسين جودة الحياة للسكان.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousProjects;



















// import React, { useEffect } from 'react';
// import './Pages.css';

// const PreviousProjects = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);
//   return (
//     <div className="page-container">
//       <div className="page-hero">
//         <h1>Previous Projects</h1>
//         <p>Showcasing our successful implementations across various industries</p>
//       </div>
      
//       <div className="page-content">
//         <div className="page-card">
//           <div className="page-card-text">
//             <h2>Industrial Complex Development</h2>
//             <p>We designed and managed the construction of a state-of-the-art industrial complex spanning 50,000 square meters. This project involved coordinating multiple engineering disciplines to create a facility that optimizes workflow, energy efficiency, and safety standards.</p>
//             <p>The complex now houses manufacturing, warehousing, and administrative functions for a leading consumer goods company, serving as a model for integrated industrial design in the region.</p>
//           </div>
//           <div className="page-card-image">
//             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Industrial Complex" />
//           </div>
//         </div>
        
//         <div className="page-card">
//           <div className="page-card-image">
//             <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Supply Chain Optimization" />
//           </div>
//           <div className="page-card-text">
//             <h2>Supply Chain Optimization</h2>
//             <p>For a major retail chain, we redesigned their entire supply chain infrastructure, reducing delivery times by 35% and cutting operational costs by 22%. Our solution integrated warehouse management, transportation routing, and inventory tracking into a seamless system.</p>
//             <p>The implementation included custom software development, process reengineering, and staff training, resulting in improved customer satisfaction and significant cost savings for the client.</p>
//           </div>
//         </div>
        
//         <div className="page-card">
//           <div className="page-card-text">
//             <h2>Renewable Energy Installation</h2>
//             <p>We engineered and installed a comprehensive solar energy system for a remote commercial facility, reducing their reliance on diesel generators by 80%. The project involved designing the structural supports, electrical systems, and monitoring infrastructure for optimal performance.</p>
//             <p>This sustainable solution not only significantly reduced operating costs but also minimized the environmental impact of the facility, aligning with the client's commitment to corporate responsibility.</p>
//           </div>
//           <div className="page-card-image">
//             <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Renewable Energy Project" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PreviousProjects;