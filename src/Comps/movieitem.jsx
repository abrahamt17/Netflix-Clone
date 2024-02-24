import React from 'react';

const MovieListItem = ({ movie, onSelect }) => {
 return (
    <div onClick={() => onSelect(movie.id)}>
      <h1>{movie.title}</h1>
      <p>Release Date: {movie.release_date}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
 );
};

export default MovieListItem;
