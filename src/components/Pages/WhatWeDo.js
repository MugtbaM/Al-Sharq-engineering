import React, { useEffect } from 'react';
import './Pages.css';

const WhatWeDo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>What We Do</h1>
        <p>Comprehensive engineering and logistics solutions tailored to your needs</p>
      </div>
      
      <div className="page-content">
        <div className="page-card">
          <div className="page-card-text">
            <h2>Engineering Solutions</h2>
            <p>We provide innovative engineering solutions across various industries. Our team of experienced engineers works closely with clients to design, implement, and maintain systems that meet their specific requirements. From conceptualization to execution, we ensure quality and efficiency in every project.</p>
            <p>Our engineering services include structural design, mechanical systems, electrical engineering, and project management. We utilize the latest technologies and methodologies to deliver results that exceed expectations.</p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Engineering Solutions" />
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Logistics Services" />
          </div>
          <div className="page-card-text">
            <h2>Logistics Services</h2>
            <p>Our logistics division offers end-to-end supply chain solutions that optimize operations and reduce costs. We handle everything from transportation and warehousing to inventory management and distribution, ensuring your products reach their destination efficiently.</p>
            <p>With a global network of partners and advanced tracking systems, we provide real-time visibility into your supply chain, enabling you to make informed decisions and respond quickly to changing market conditions.</p>
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-text">
            <h2>Consultation & Planning</h2>
            <p>Beyond implementation, we offer strategic consultation services to help businesses optimize their operations. Our experts analyze your current processes, identify areas for improvement, and develop customized strategies to enhance efficiency and productivity.</p>
            <p>We work with you to create comprehensive plans that align with your business goals, ensuring long-term success and sustainability in an ever-evolving market landscape.</p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Consultation Services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;