import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.container}>
      <h3>{movie.title}</h3>
      <img src={movie.image} className={styles.image} alt={movie.title} />
      <p>{movie.year}</p>
      <ul className={styles.genre}>
        {movie.genre.map((genre, i) => (
          <li key={i} className={styles.skill}>{genre}</li>
        ))}
      </ul>
      <p>{movie.director || movie.creator}</p>
      {movie.seasons && <p>Seasons: {movie.seasons}</p>}
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
