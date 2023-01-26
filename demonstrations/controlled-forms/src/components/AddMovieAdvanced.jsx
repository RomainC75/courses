// src/components/AddMovieAdvanced.js

import { useState } from "react";

function AddMovieAdvanced({ setMovies }) {

  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    IMDBRating: 5,
    hasOscars: true,
  });

  const handleNewMovie = (e) =>{
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.name==='hasOscars' ? e.target.checked : e.target.value,
    })
    console.log(newMovie)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((movies) => {
      const buff = [...movies];
      buff.unshift(newMovie);
      return buff;
    });
  };

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          type="text"
          value={newMovie.title}
          name="title"
          onChange={handleNewMovie}
        />

        <label>director</label>
        <input
          type="text"
          value={newMovie.director}
          name="director"
          onChange={handleNewMovie}
        />

        <label>IMDBRating</label>
        <input
          type="number"
          value={newMovie.IMDBRating}
          name="IMDBRating"
          onChange={handleNewMovie}
        />

        <label>hasOscars</label>
        <input
          type="checkbox"
          checked={newMovie.hasOscars}
          name="hasOscars"
          onChange={handleNewMovie}
        />

        {/* <input type="submit"/> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMovieAdvanced;
