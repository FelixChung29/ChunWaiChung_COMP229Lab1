import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { icon: '/icons/fullstack.png', title: 'Full-Stack Development', desc: 'End-to-end web applications using MERN stack.' },
    { icon: '/icons/react.png', title: 'React Applications', desc: 'SPA and PWA development using modern React frameworks.' },
    { icon: '/icons/mobile.png', title: 'Mobile Development', desc: 'Cross-platform mobile apps using React Native or Flutter.' },
  ];

  return (
    <div className="services-container">
      <h4 className="section-subtitle">SERVICES</h4>
      <h2 className="section-title">What I Offer</h2>
      <div className="services-grid">
        {services.map((srv, idx) => (
          <div key={idx} className="service-card">
            <img src={srv.icon} alt={srv.title} />
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
