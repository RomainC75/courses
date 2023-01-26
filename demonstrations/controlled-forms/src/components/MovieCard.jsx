// src/components/MovieCard.js
 
import React from "react";
 
function MovieCard(props) {
  const { movie, handleDelete, index } = props;
 
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      {movie.hasOscars && <p><strong>has Oscars</strong></p>}
      <button onClick={()=>handleDelete(index)}>Delete</button>
    </div>
  );
}
 
export default MovieCard;