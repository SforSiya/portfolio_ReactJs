/*import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <ul className="skills-list">
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <li>React.js</li>
        <li>Machine Learning</li>
      </ul>
    </div>
  );
};

export default Skills;
*/
/*import React from 'react';
import '../styles/skills.css';
import skill from '../assets/skill.jpg';// Ensure you have an image here


const skillsData = [
  { id: 'html', name: 'HTML', percentage: 90 },
  { id: 'css', name: 'CSS', percentage: 80 },
  { id: 'js', name: 'JavaScript', percentage: 70 }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <img src={skill} alt="skill" className="skill" />
        {skillsData.map(skill => (
        <div className="skill" key={skill.id}>
          <div
            className="outer"
            style={{ '--percentage': `${skill.percentage * 3.6}deg` }}
          >
            <div className="inner">
              <div className="percentage">{skill.percentage}%</div>
            </div>
          </div>
          <span className="language-name">{skill.name}</span> {/* Language name }
        </div>
      ))}
    </div>
  );
};

export default Skills;*/
import React from 'react';
import '../styles/skills.css';
import skillImage from '../assets/skill.jpg'; // Ensure you have an image here

const skillsData = [
  { id: 'html', name: 'HTML', percentage: 90 },
  { id: 'css', name: 'CSS', percentage: 80 },
  { id: 'js', name: 'JavaScript', percentage: 70 },
  { id: 'csharp', name: 'C#', percentage: 75 },
  { id: 'cpp', name: 'C++', percentage: 85 },
  { id: 'python', name: 'Python', percentage: 80 }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <img src={skillImage} alt="Skill" className="skill-image" />
      <div className="skills-list">
        {skillsData.slice(0, 3).map((skill) => (
          <div className="skill-bar" key={skill.id}>
            <div
              className="outer"
              style={{ '--percentage': `${skill.percentage * 3.6}deg` }}
            >
              <div className="inner">
                <div className="percentage">{skill.percentage}%</div>
              </div>
            </div>
            <span className="language-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="skills-list">
        {skillsData.slice(3, 6).map((skill) => (
          <div className="skill-bar" key={skill.id}>
            <div
              className="outer"
              style={{ '--percentage': `${skill.percentage * 3.6}deg` }}
            >
              <div className="inner">
                <div className="percentage">{skill.percentage}%</div>
              </div>
            </div>
            <span className="language-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

