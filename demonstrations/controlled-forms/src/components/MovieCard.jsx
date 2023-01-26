// src/components/MovieCard.js
 
import React from "react";
 
function MovieCard(props) {
  const { movie } = props;
 
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      {movie.hasOscars && <p><strong>has Oscars</strong></p>}
    </div>
  );
}
 
export default MovieCard;