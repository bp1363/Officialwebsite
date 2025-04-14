import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2>About Me</h2>
        <p>
          I'm a Frontend Developer with a passion for building modern, responsive, and accessible websites using React.js.
          I love turning ideas into real-world applications with clean and efficient code.
        </p>

        <h3>Skills</h3>
        <ul className={styles.skills}>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>CSS Modules</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
