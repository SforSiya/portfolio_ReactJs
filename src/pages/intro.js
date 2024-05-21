import React from 'react';
import '../styles/intro.css';
import profilePicture from '../assets/profilePicture.png'; // Ensure you have an image here

const Intro = () => {
  return (
    <div className="intro-container">
      <img src={profilePicture} alt="Swaira Ansar" className="profile-picture" />
      <h1 className="intro-heading">Hello, I'm <span className="name-highlight">Swaira Ansar</span></h1>
      <p className="intro-bio">
        Computer Science student from Air University, Islamabad, with a keen interest in software development, artificial intelligence, and data science. Proficient in Python, Java, and C++, and experienced with various development frameworks and tools.
      </p>
      <p className="education-details">
        <strong>Air University, Islamabad</strong><br />
        Degree: Bachelor of Science in Computer Science<br />
        Major: Computer Science<br />
        Expected Graduation Year: 2025<br />
        Relevant Coursework: Data Structures and Algorithms, Machine Learning, Database Management Systems, Operating Systems, Software Engineering
      </p>
    </div>
  );
};

export default Intro;
