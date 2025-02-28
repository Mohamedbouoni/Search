import React from 'react';
import MovieCard from './MovieCard.jsx';
import styles from './Movie.module.css';
const Movie = () => {
    const movies= [
        {
  "movies": [
    {
      "title": "Inception",
      "year": 2010,
      "genre": ["Sci-Fi", "Action", "Thriller"],
      "director": "Christopher Nolan",
      "rating": 8.8,
      "image": "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
    },
    {
      "title": "The Dark Knight",
      "year": 2008,
      "genre": ["Action", "Crime", "Drama"],
      "director": "Christopher Nolan",
      "rating": 9.0,
      "image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      "title": "Interstellar",
      "year": 2014,
      "genre": ["Sci-Fi", "Adventure", "Drama"],
      "director": "Christopher Nolan",
      "rating": 8.7,
      "image": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      "title": "Parasite",
      "year": 2019,
      "genre": ["Thriller", "Drama"],
      "director": "Bong Joon-ho",
      "rating": 8.6,
      "image": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
    },
    {
      "title": "Joker",
      "year": 2019,
      "genre": ["Crime", "Drama", "Thriller"],
      "director": "Todd Phillips",
      "rating": 8.4,
      "image": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
      "title": "The Matrix",
      "year": 1999,
      "genre": ["Action", "Sci-Fi"],
      "director": "Lana Wachowski, Lilly Wachowski",
      "rating": 8.7,
      "image": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },
    {
      "title": "Fight Club",
      "year": 1999,
      "genre": ["Drama"],
      "director": "David Fincher",
      "rating": 8.8,
      "image": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
    },
    {
      "title": "Forrest Gump",
      "year": 1994,
      "genre": ["Drama", "Romance"],
      "director": "Robert Zemeckis",
      "rating": 8.8,
      "image": "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "genre": ["Crime", "Drama"],
      "director": "Francis Ford Coppola",
      "rating": 9.2,
      "image": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
    },
    {
      "title": "Pulp Fiction",
      "year": 1994,
      "genre": ["Crime", "Drama"],
      "director": "Quentin Tarantino",
      "rating": 8.9,
      "image": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
    }
  ],
  "series": [
    {
      "title": "Breaking Bad",
      "year": 2008,
      "genre": ["Crime", "Drama", "Thriller"],
      "creator": "Vince Gilligan",
      "seasons": 5,
      "rating": 9.5,
      "image": "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
    },
    {
      "title": "Game of Thrones",
      "year": 2011,
      "genre": ["Action", "Adventure", "Drama"],
      "creator": "David Benioff, D.B. Weiss",
      "seasons": 8,
      "rating": 9.2,
      "image": "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
    },
    {
      "title": "Stranger Things",
      "year": 2016,
      "genre": ["Drama", "Fantasy", "Horror"],
      "creator": "The Duffer Brothers",
      "seasons": 4,
      "rating": 8.7,
      "image": "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
    },
    {
      "title": "Sherlock",
      "year": 2010,
      "genre": ["Crime", "Drama", "Mystery"],
      "creator": "Mark Gatiss, Steven Moffat",
      "seasons": 4,
      "rating": 9.1,
      "image": "https://image.tmdb.org/t/p/w500/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg"
    },
    {
      "title": "Money Heist",
      "year": 2017,
      "genre": ["Action", "Crime", "Drama"],
      "creator": "Álex Pina",
      "seasons": 5,
      "rating": 8.2,
      "image": "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
    },
    {
      "title": "The Office",
      "year": 2005,
      "genre": ["Comedy"],
      "creator": "Greg Daniels",
      "seasons": 9,
      "rating": 8.9,
      "image": "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg"
    },
    {
      "title": "The Boys",
      "year": 2019,
      "genre": ["Action", "Comedy", "Crime"],
      "creator": "Eric Kripke",
      "seasons": 4,
      "rating": 8.7,
      "image": "https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg"
    },
    {
      "title": "Friends",
      "year": 1994,
      "genre": ["Comedy", "Romance"],
      "creator": "David Crane, Marta Kauffman",
      "seasons": 10,
      "rating": 8.9,
      "image": "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg"
    }
  ]
}

]
  return (
    <section className={styles.container} id='movies'>
        <h2 className={styles.title}>
            The Movies
        </h2>
        <div className={styles.movies}>
            {
                movies.map((movie, id) => (
                    <MovieCard key={id} movie={movie} />
                ))
            }
        </div>
    </section>
  )
}

export default Movie
