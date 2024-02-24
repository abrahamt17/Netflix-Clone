import React, { useEffect, useState } from 'react';

const MovieDetails = ({ movieId }) => {
 const [movie, setMovie] = useState(null);

 useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6f5e01769ab005ec8e71fba9f977b156`);
        const movieData = await response.json();
        setMovie(movieData);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    

    fetchMovie();
 }, [movieId]);

 return (
    <div>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Vote Average: {movie.vote_average}</p>
         
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
 );
};

export default MovieDetails;
