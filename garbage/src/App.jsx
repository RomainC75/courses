// App.js
// ... previous imports stay unchanged

import './App.css';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner'; // <-- add
import { useState } from 'react'; // <-- add
import ImprovedMovieList from './components/ImprovedMovieList';

function App() {
  // Declare a new state variable, which we'll call "isLoading"
  const [isLoading, setIsLoading] = useState(false); // <-- add

  if (isLoading) {
    return <Spinner />;
  } 
  else {
    return (
      <div className="App">
        {/* <MovieList /> */}
        <ImprovedMovieList/>
      </div>
    );
  } 
}

export default App;
