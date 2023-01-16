// App.js
// ... previous imports stay unchanged

import './App.css';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner'; // <-- add
import { useState } from 'react'; // <-- add

function App() {
  // Declare a new state variable, which we'll call "isLoading"
  const [isLoading, setIsLoading] = useState(true); // <-- add

  if (isLoading) {
    return <Spinner />;
  } 
  else {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  } 
}

export default App;
