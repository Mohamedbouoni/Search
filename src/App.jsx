import React, { useState } from 'react'
import styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Movie from './Components/Section/Movie.jsx'
function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Movie />
    </div>
      
  )
}

export default App
