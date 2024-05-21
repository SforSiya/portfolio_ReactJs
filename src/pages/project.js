/*import React from 'react';

function projects() {
  return (
    <div>
      <h1>projects</h1>
      <p>This is the projects page.</p>
    </div>
  );
}

export default projects;
*/
import React from 'react';
import '../styles/project.css';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

const projectsData = [
  {
    id: 'project1',
    name: 'Project One',
    description: 'Empowering Local Women: A marketplace platform designed for village women to sell their handmade crafts and products. Providing a digital space for artisans to showcase their creations and reach a wider audience',
    image: project1Image,
  },
  {
    id: 'project2',
    name: 'Project Two',
    description: 'An online bookstore offering a wide selection of titles across genres, providing readers with a convenient platform to explore and purchase their favorite books',
    image: project2Image,
  },
  {
    id: 'project3',
    name: 'Project Three',
    description: 'A sleek and professional website designed to showcase essential information about the business, including services offered, contact details, and key highlights, facilitating engagement with potential clients.',
    image: project3Image,
  },
];

const Projects = () => {
  return (
    <div className="projects-container container">
      <h2 className="projects-heading text-center my-4">My Projects</h2>
      <div className="row">
        {projectsData.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card h-100">
              <img src={project.image} className="card-img-top" alt={project.name} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
