import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <h1>Hello, I'm <span>Braj Pal Singh</span></h1>
        <p>A passionate Full Stack Developer building web experiences with React.js</p>
        <a href="#projects" className={styles.cta}>View My Work</a>
      </div>
    </section>
  );
};

export default Home;
