import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Brajpal Singh</div>

      <ul className={styles.links}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <div style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ opacity: isOpen ? 0 : 1 }} />
        <div style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </div>

      {isOpen && (
        <div className={styles.mobileNav}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
