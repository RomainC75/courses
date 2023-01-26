import logo from './logo.svg';
import './App.css';
import dataMovies from './data/movies-data.json'
import { useState } from 'react';
import MovieCard from './components/MovieCard';
import AddMovie from './components/AddMovie';
import AddMovieAdvanced from './components/AddMovieAdvanced';

function App() {
  const [movies, setMovies] = useState(dataMovies)

  const handleDelete = (i) =>{
    console.log('index : ', i)
    const buff=[...movies]
    buff.splice(i,1)
    setMovies(buff)
  }

  return (
    <div className="App">
      {/* <AddMovie setMovies={setMovies} /> */}
      <AddMovieAdvanced setMovies={setMovies} />
      {movies.map((movie,i)=><MovieCard key={i+movie.title} movie={movie} handleDelete={handleDelete} index={i}/>)}
    </div>
  );
}

export default App;
