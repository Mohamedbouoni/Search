import React, { useState } from 'react';
import MovieCard from './MovieCard.jsx';
import styles from './Movie.module.css';
import MovieData from '../db/Movie.json';

const Movie = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);  // To store the clicked movie
  const [search, setSearch] = useState('');
  const movies = MovieData.movies;

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <section className={styles.container} id="movies">
      <h2 className={styles.title}>The Movies</h2>
      
      <input
        type="text"
        placeholder="Search movies..."
        className={styles.searchBar}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.moviesRow}>
        {filteredMovies.map((movie, i) => (
          <div 
            key={i} 
            className={styles.movieThumbnail}
            onClick={() => handleMovieClick(movie)}  // Set the clicked movie
          >
            <img src={movie.image} alt={movie.title} className={styles.movieImage} />
            <p className={styles.movieTitle}>{movie.title}</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>×</span>
            <MovieCard movie={selectedMovie} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Movie;
