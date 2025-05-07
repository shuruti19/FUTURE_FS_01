import React from 'react';
import './Experiences.css';

function Experiences() {
  const experiences = [
    {
      role: 'Salesforce Developer',
      details: 'Completed Salesforce Trailhead modules and Super Badges: Salesforce Fundamentals, Organizational Setup, Relationships & Process Automation, Types of Flows & Security, Apex, Testing & Debugging, VS Code Setup & CLI Setup, Lightning Web Components API. Superbadge-Apex Specialist, Superbadge-Process Automation Specialist, Super Badge-Developer Super Set.'
    },
    {
      role: 'The Sparks Foundation - Web Development and Designing',
      details: 'Developed a website using Payment Gateway Integration.'
    },
    {
      role: 'Future Interns - Full Stack Web Development',
      details: 'Developed a Personal Professional Portfolio and also developed a Weather Dashboard.'
    },
  ];

  return (
    <section className="experiences-section">
      <h2>Experiences</h2>
      <div className="experiences-grid">
        {experiences.map((experience, index) => (
          <div key={index} className={`experience-item item-${index % 2 === 0 ? 'even' : 'odd'}`}>
            <h3>{experience.role}</h3>
            <p>{experience.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;