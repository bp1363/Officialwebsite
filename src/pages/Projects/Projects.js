import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and CSS Modules to showcase my skills and projects.',
    link: 'https://yourportfolio.com',
  },
  {
    title: 'E-commerce App',
    description: 'A full-stack shopping app with cart, checkout, and payment features using React and Node.js.',
    link: 'https://yourecommerce.com',
  },
  {
    title: 'Blog Platform',
    description: 'A responsive blog site where users can read and publish articles.',
    link: 'https://yourblog.com',
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2>My Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
