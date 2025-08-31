import React, { useEffect } from 'react';
import './Pages.css';

const PreviousProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>Previous Projects</h1>
        <p>Showcasing our successful implementations across various industries</p>
      </div>
      
      <div className="page-content">
        <div className="page-card">
          <div className="page-card-text">
            <h2>Industrial Complex Development</h2>
            <p>We designed and managed the construction of a state-of-the-art industrial complex spanning 50,000 square meters. This project involved coordinating multiple engineering disciplines to create a facility that optimizes workflow, energy efficiency, and safety standards.</p>
            <p>The complex now houses manufacturing, warehousing, and administrative functions for a leading consumer goods company, serving as a model for integrated industrial design in the region.</p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Industrial Complex" />
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Supply Chain Optimization" />
          </div>
          <div className="page-card-text">
            <h2>Supply Chain Optimization</h2>
            <p>For a major retail chain, we redesigned their entire supply chain infrastructure, reducing delivery times by 35% and cutting operational costs by 22%. Our solution integrated warehouse management, transportation routing, and inventory tracking into a seamless system.</p>
            <p>The implementation included custom software development, process reengineering, and staff training, resulting in improved customer satisfaction and significant cost savings for the client.</p>
          </div>
        </div>
        
        <div className="page-card">
          <div className="page-card-text">
            <h2>Renewable Energy Installation</h2>
            <p>We engineered and installed a comprehensive solar energy system for a remote commercial facility, reducing their reliance on diesel generators by 80%. The project involved designing the structural supports, electrical systems, and monitoring infrastructure for optimal performance.</p>
            <p>This sustainable solution not only significantly reduced operating costs but also minimized the environmental impact of the facility, aligning with the client's commitment to corporate responsibility.</p>
          </div>
          <div className="page-card-image">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Renewable Energy Project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousProjects;