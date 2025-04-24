import React from 'react';
import styles from './Movie.module.css';

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.card}>
      <img src={movie.image} alt={movie.title} className={styles.image} />
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.year}>Year: {movie.year}</p>
      <p className={styles.genre}>Genre: {movie.genre.join(', ')}</p>
      <p className={styles.director}>Director: {movie.director}</p>
      <p className={styles.rating}>Rating: {movie.rating}</p>
      <p className={styles.description}>Description: Lorem ipsum dolor sit amet...</p>  {/* Add a description or any other detail */}
    </div>
  );
};

export default MovieCard;
