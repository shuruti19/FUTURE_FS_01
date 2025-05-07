import React from 'react';
import './Achievements.css';

function Achievements() {
  const achievements = [
    { title: 'Web Development Course', description: 'Completed course from Internshala on Web Development.' },
    { title: 'Core Java Course', description: 'Completed course from Internshala on Core Java.' },
    { title: 'Salesforce Developer Course', description: 'Completed course from Salesforce as Salesforce Developer.' },
    { title: 'Prompt Engineering Course', description: 'Completed course from Guvi on Prompt Engineering.' },
    { title: 'CyberSecurity Course', description: 'Completed course from Cisco on Cybersecurity.' },
  ];

  return (
    <section className="achievements-section">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className={`achievement-item item-${index % 2 === 0 ? 'even' : 'odd'}`}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;