// src/components/MovieCard.js
 
import React from "react";
 
function MovieCard(props) {
  const { movie } = props;
 
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
    </div>
  );
}
 
export default MovieCard;