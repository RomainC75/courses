// src/components/AddMovieAdvanced.js

import { useState } from "react";

function AddMovieAdvanced({ setMovies }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDirector = (e) => {
    setDirector(e.target.value);
  };

  const handleIMDBRating = (e) => {
    setIMDBRating(e.target.value);
  };

  const handleHasOscars = (e) => {
    console.log(e.target.checked)
    setHasOscars(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title,IMDBRating, director, hasOscars)
    setMovies((movies) => {
      const buff = [...movies];
      buff.unshift({
        title,
        director,
        IMDBRating,
        hasOscars,
      });
      return buff;
    });
  };

  return (
    <div className="AddMovieAdvanced">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input type="text" value={title} name="title" onChange={handleTitle} />

        <label>director</label>
        <input
          type="text"
          value={director}
          name="director"
          onChange={handleDirector}
        />

        <label>IMDBRating</label>
        <input
          type="number"
          value={IMDBRating}
          name="IMDBRating"
          onChange={handleIMDBRating}
        />

        <label>hasOscars</label>
        <input
          type="checkbox"
          checked={hasOscars}
          name="hasOscars"
          onChange={handleHasOscars}
        />

        {/* <input type="submit"/> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMovieAdvanced;
