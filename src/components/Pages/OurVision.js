import React, { useEffect } from 'react';
import './Pages.css';

const OurVision = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Our Vision</h1>
        <p>Shaping the future of engineering and logistics through innovation and excellence</p>
      </div>
      
      <div className="page-content">
        <div className="page-card">
          <div className="page-card-text">
            <h2>Innovation Leadership</h2>
            <p>We envision a future where technology and innovation drive sustainable progress in engineering and logistics. Our commitment to research and development ensures that we stay at the forefront of industry advancements, continuously improving our services and solutions.</p>
            <p>By embracing emerging technologies such as AI, IoT, and automation, we aim to transform traditional practices and set new standards for efficiency, reliability, and environmental responsibility.</p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Innovation Leadership" />
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Global Expansion" />
          </div>
          <div className="page-card-text">
            <h2>Global Expansion</h2>
            <p>Our vision includes expanding our footprint to serve clients across the globe while maintaining the personalized service and attention to detail that defines our brand. We aim to establish partnerships in key markets, creating a network of excellence that spans continents.</p>
            <p>Through strategic growth and cultural understanding, we will bring our expertise to new regions, adapting our solutions to local needs while maintaining our global standards of quality and reliability.</p>
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-text">
            <h2>Sustainability Commitment</h2>
            <p>We are committed to developing solutions that not only meet current needs but also preserve resources for future generations. Our sustainability initiatives focus on reducing environmental impact, promoting renewable energy, and implementing eco-friendly practices across all operations.</p>
            <p>From green building designs to optimized logistics routes that minimize carbon emissions, we integrate environmental considerations into every aspect of our business, contributing to a more sustainable world.</p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Sustainability Commitment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;