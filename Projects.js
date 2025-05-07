import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Payment Gateway Integration System',
      description: 'Developed a website for collecting money to provide food and clothes to poor children. Integrated Payment Gateway for successful transactions with downloadable receipts and email notifications.'
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a Personal Professional Portfolio and also developed a Weather Dashboard.'
    },
    {
      title: 'Weather Dashboard Website',
      description: 'Developed a website using API Integration, Dynamic Data Handling, and Frontend Design.'
    },
    {
      title: 'Network Anomaly Detection using Machine Learning Technique',
      description: 'A model to detect anomalies in network traffic. Dataset: KDD Cup 1999 Data. Algorithm: Decision Tree. Model Accuracy: 99.5%.'
    }
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-item item-${index % 2 === 0 ? 'even' : 'odd'}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;