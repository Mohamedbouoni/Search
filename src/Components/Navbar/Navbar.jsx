import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <a className={styles.title} href="#home">Movies</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">contact</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#login">Signup</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
