import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    { degree: 'BTECH', institution: 'LOK NAYAK JAI PRAKASH INSTITUTE OF TECHNOLOGY CHAPRA BIHAR' },
    { degree: 'INTERMEDIATE', institution: 'ALMOMIN INTL SCHOOL CHERKI GAYA BIHAR' },
    { degree: 'MATRICULATION', institution: 'DAV PUBLIC SCHOOL CANTT AREA GAYA BIHAR' },
  ];

  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-grid">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;