import React from 'react';
import './ReactNativeProjects.css';

const ReactNativeProjects = () => {
  const projects = [
    {
      name: 'Weather App',
      description: 'A weather forecasting app built with React Native.',
      githubLink: 'https://github.com/yourusername/weather-app',
      image: '/images/weather-app.png', // Replace with the actual image path
    },
    {
      name: 'To-Do List',
      description: 'A simple to-do list app with local storage.',
      githubLink: 'https://github.com/yourusername/todo-app',
      image: '/images/todo-app.png', // Replace with the actual image path
    },
    {
      name: 'E-Commerce App',
      description: 'A fully functional e-commerce app with product listings and cart functionality.',
      githubLink: 'https://github.com/yourusername/ecommerce-app',
      image: '/images/ecommerce-app.png', // Replace with the actual image path
    },
  ];

  return (
    <div className="projects-container">
      <h1>React Native Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactNativeProjects;