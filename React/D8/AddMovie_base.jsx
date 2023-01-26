// src/components/AddMovie.js
 
import { useState } from "react";
 
function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);
 
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
 
      {/* form will be added here */}
    </div>
  );
}
 
export default AddMovie;