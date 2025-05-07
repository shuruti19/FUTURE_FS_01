import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { category: 'Language', details: 'C, C++, OOPS, STL, PYTHON, CORE JAVA, JAVASCRIPT' },
    { category: 'FrontEnd', details: 'HTML, CSS, REACT.JS, BOOTSTRAP, TAILWIND CSS, FIGMA, UI DESIGN' },
    { category: 'Backend', details: 'NODE.JS, API' },
    { category: 'Database', details: 'MONGO DB, SQL, MYSQL' },
    { category: 'Version Control', details: 'GIT, GITHUB, GITBASH' },
    { category: 'Others', details: 'DSA, DBMS, OPERATING SYSTEM, SOFTWARE ENGINEERING, MACHINE LEARNING, ARTIFICIAL INTELLIGENCE' },
  ];

  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-item item-${index % 2 === 0 ? 'even' : 'odd'}`}>
            <h3>{skill.category}</h3>
            <p>{skill.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;