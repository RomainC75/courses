import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// ==>export default
import Button from './components/Button';
// ==>export
import {Button3,Button2} from './components/Button2';

function App() {
  const [counter, setCounter] = useState(0)
  
  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={()=>setCounter(counter-1)}>-</button>
        <button onClick={()=>setCounter(counter+1)}>+</button>
      </div>
      <Button text="suivant"/>
      <Button text="precedent"/>
      <Button2 text="Haut"/>
      <Button3 text="Bas"/>
      
    </div>
  );
}

export default App;
