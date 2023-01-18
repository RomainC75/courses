import { useState } from 'react';
import './App.css';

const colors = [
  'bgBlack',
  'bgYellow',
  'bgGreen',
  'bgRed'
]

function App() {
  const [counter, setCounter] = useState(0)
  const [squareColorIndex, setSquareIndexColor] = useState(0)
  
  const handleCounter = (newCounter) =>{
    if(newCounter>=0){
      setCounter(newCounter)
    }
  }

  const handleSwitchColor = () =>{
    setSquareIndexColor((squareColorIndex+1)%colors.length)

  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div className="buttons">
        <button onClick={()=>handleCounter(counter-1)}>-</button>
        <button onClick={()=>handleCounter(counter+1)}>+</button>
      </div>
      <div className={'square '+colors[squareColorIndex]}>

      </div>
      <button onClick={()=>handleSwitchColor()}>Change Color</button>
    </div>
  );
}

export default App;
