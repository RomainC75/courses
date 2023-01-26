import logo from './logo.svg';
import './App.css';
import dataMovies from './data/movies-data.json'
import { useState } from 'react';
import MovieCard from './components/MovieCard';
import AddMovieAdvanced from './components/AddMovieAdvanced';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState(dataMovies)
  return (
    <div className="App">
      {/* <AddMovie setMovies={setMovies} /> */}
      <AddMovieAdvanced setMovies={setMovies} />
      {movies.map((movie,i)=><MovieCard key={i+movie.title} movie={movie}/>)}
    </div>
  );
}

export default App;
